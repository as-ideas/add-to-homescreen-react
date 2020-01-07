import React, { useEffect } from 'react';

import './addToHomeScreen.scss';
import AddToHomeScreenConfiguration from './addToHomeScreenConfiguration.json';

export default function AddToHomeScreen({options}) {

    const DEFAULT_PROMPT = {
        title: 'Install Service Portal?',
        src: require('./defaultLogo.png'),
        cancelMsg: 'Not Now',
        installMsg: 'Install'
    };

    const DEFAULT_SESSION = {
        lastDisplayTime: 0, // last time we displayed the message
        returningVisitor: false, // is this the first time you visit
        displayCount: 0, // number of times the message has been shown
        optedOut: false, // has the user opted out
        added: false, // has been actually added to the home screen
        pageViews: 0
    };

    let configuration = Object.assign({}, AddToHomeScreenConfiguration, options);
    let session = {};
    let platform = {};
    let guidanceTargetUrls = [];
    let isAthDialogShown = false;

    let showNativePrompt = false;
    let canPromptState;
    let beforeInstallPromptEvent;
    let autoHideTimer;

    useEffect(initialize, []);

    function initialize() {
        if ('onbeforeinstallprompt' in window) {
            window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
            showNativePrompt = true;

        }
        if ('onappinstalled' in window) {
            window.addEventListener('appinstalled', function (evt) {
                doLog('a2hs installed');
                session.added = true;
                updateSession();
                if (configuration.onInstall) {
                    configuration.onInstall.call(this);
                }
            });

        }

        checkPlatform();

        let sessionString = window.localStorage.getItem(configuration.appID);
        session = sessionString ? JSON.parse(sessionString) : DEFAULT_SESSION;
        if (session && session.added) {
            // there is nothing to do if app was already added to home screen
            return;
        }

        if ('serviceWorker' in navigator) {
            let manifestElement = document.querySelector('[rel=\'manifest\']');
            if (!manifestElement) {
                doLog('no manifest file');
                platform.isCompatible = false;
            }
            navigator.serviceWorker.getRegistration().then(afterServiceWorkerCheck);
            buildGuidanceURLs(configuration.customPromptPlatformDependencies);
        } else {
            afterServiceWorkerCheck({});
        }

    }

    function buildGuidanceURLs(prompts) {
        for (let key in prompts) {
            if (prompts.hasOwnProperty(key)) {
                let target = prompts[key].targetUrl;

                if (target) {
                    guidanceTargetUrls.push(target);
                }
            }
        }
    }

    // show hint images for browsers without native prompt
    /*
     * Currently:
     *  iOS Safari
     *  FireFox Android
     *  Samsung Android
     *  Opera Android
     */
    function showPlatformGuidance(skipNative) {
        let target = getPlatform(skipNative);
        let athWrapper = document.querySelector(configuration.athWrapper);

        if (athWrapper) {
            if (autoHideTimer) {
                clearTimeout(autoHideTimer);
            }

            if (!skipNative && target === 'native' && beforeInstallPromptEvent) {
                closePrompt();
                triggerNativePrompt();
            } else {
                let promptTarget = Object.assign({}, DEFAULT_PROMPT, configuration.customPromptContent, configuration.customPromptPlatformDependencies[target]);

                if (promptTarget.targetUrl) {
                    location.replace(promptTarget.targetUrl);
                } else {
                    let promptDialogBody = athWrapper.querySelector(configuration.customPromptElements.body);

                    if (promptTarget.imgs && promptTarget.imgs.length > 0) {
                        promptDialogBody.innerHTML = '';
                        promptDialogBody.classList.add(configuration.athGuidance);

                        for (let index = 0; index < promptTarget.imgs.length; index++) {
                            let img = new Image();

                            img.src = promptTarget.imgs[index].src;
                            img.alt = promptTarget.imgs[index].alt;

                            if (promptTarget.imgs[index].classes) {
                                img.classList.add(...promptTarget.imgs[index].classes);
                            }
                            img.classList.add(configuration.showClass);

                            promptDialogBody.appendChild(img);
                        }
                    }
                    if (!isVisible(athWrapper)) {
                        athWrapper.classList.add(...promptTarget.showClasses);
                        athWrapper.classList.remove(configuration.hideClass);
                    }

                    let hideAfter = (configuration.lifespan >= 10) ? configuration.lifespan : 10;

                    autoHideTimer = setTimeout(autoHide, hideAfter * 1000);
                }
            }
        }
    }

    function isVisible(element) {
        let dimensions = element.getBoundingClientRect();
        return dimensions.width !== 0 && dimensions.height !== 0;
    }

    function afterServiceWorkerCheck(serviceWorker) {
        if (!serviceWorker) {
            doLog('no service worker');
            platform.isCompatible = false;
        }

        session.pageViews += 1;
        updateSession();

        // override defaults that are dependent on each other
        if (configuration && configuration.debug && (typeof configuration.logging === 'undefined')) {
            configuration.logging = true;
        }

        // normalize some options
        configuration.mandatory = configuration.mandatory && ('standalone' in window.navigator || configuration.debug);

        // this is forcing the user to add to home screen before anything can be done
        // the ideal scenario for this would be an enterprise business application
        // could also be a part of an onboarding workflow for a SAAS
        configuration.modal = configuration.modal || configuration.mandatory;

        if (configuration.mandatory) {
            configuration.startDelay = -0.5; // make the popup hasty
        }

        // setup the debug environment
        if (configuration.debug) {
            platform.isCompatible = true;
        }

        if (configuration.onInit) {
            configuration.onInit.call(this);
        }

        if (configuration.autoStart && !!beforeInstallPromptEvent) {
            doLog('Add to home screen: autoStart displaying callout');
            show();
        } else if (!showNativePrompt) {
            show();
        }

    }

    function doLog(logString) {
        if (configuration.logging) {
            console.log(logString);
        }
    }

    function updateSession() {
        window.localStorage.setItem(configuration.appID, JSON.stringify(session));
    }

    function checkPlatform() {
        // browser info and capability
        let userAgent = window.navigator.userAgent;

        platform.isIDevice = (/iphone|ipod|ipad/i).test(userAgent);
        platform.isSamsung = /Samsung/i.test(userAgent);
        platform.isFireFox = /Firefox/i.test(userAgent);
        platform.isOpera = /opr/i.test(userAgent);
        platform.isEdge = /edg/i.test(userAgent);

        // Opera & FireFox only Trigger on Android
        if (platform.isFireFox) {
            platform.isFireFox = /android/i.test(userAgent);
        }

        if (platform.isOpera) {
            platform.isOpera = /android/i.test(userAgent);
        }

        platform.isChromium = ('onbeforeinstallprompt' in window);
        platform.isInWebAppiOS = (window.navigator.standalone === true);
        platform.isInWebAppChrome = (window.matchMedia('(display-mode: standalone)').matches);
        platform.isMobileSafari = platform.isIDevice && userAgent.indexOf('Safari') > -1 && userAgent.indexOf('CriOS') < 0;
        platform.isStandalone = platform.isInWebAppiOS || platform.isInWebAppChrome;
        platform.isiPad = (platform.isMobileSafari && userAgent.indexOf('iPad') > -1);
        platform.isiPhone = (platform.isMobileSafari && userAgent.indexOf('iPad') === -1);
        platform.isCompatible = (platform.isChromium || platform.isMobileSafari ||
            platform.isSamsung || platform.isFireFox || platform.isOpera);
    }

    function getPlatform(native) {
        if (configuration.debug && typeof configuration.debug === 'string') {
            return configuration.debug;
        }

        if (platform.isChromium && native === undefined) {
            return 'native';
        } else if (platform.isFireFox) {
            return 'firefox';
        } else if (platform.isiPad) {
            return 'ipad';
        } else if (platform.isiPhone) {
            return 'iphone';
        } else if (platform.isOpera) {
            return 'opera';
        } else if (platform.isSamsung) {
            return 'samsung';
        } else if (platform.isEdge) {
            return 'edge';
        } else if (platform.isChromium) {
            return 'chromium';
        } else {
            return '';
        }
    }

    function handleBeforeInstallPrompt(event) {
        event.preventDefault();
        doLog('capturing the native A2HS prompt');
        beforeInstallPromptEvent = event;
        delayedShow();
    }

    function delayedShow() {
        setTimeout(performShow, configuration.startDelay * 1000 + 500);
    }

    function show() {
        // message already on screen
        if (isAthDialogShown) {
            doLog('Add to home screen: not displaying callout because already shown on screen');
            return;
        }

        isAthDialogShown = true;

        if (document.readyState === 'interactive' || document.readyState === 'complete') {
            delayedShow();
        } else {
            document.onreadystatechange = function () {
                if (document.readyState === 'complete') {
                    delayedShow();
                }
            };
        }
    }

    function performShow() {
        if (canPrompt()) {
            if (beforeInstallPromptEvent && !configuration.mustShowCustomPrompt) {
                doLog('show native prompt');
                triggerNativePrompt();
            } else {
                let target = getPlatform();
                let athWrapper = document.querySelector(configuration.athWrapper);

                doLog(`show generic prompt for platform ${target}`);
                if (athWrapper && !session.optedOut) {
                    athWrapper.classList.remove(configuration.hideClass);

                    let promptTarget = Object.assign({}, DEFAULT_PROMPT, configuration.customPromptContent, configuration.customPromptPlatformDependencies[target]);

                    if (promptTarget.showClasses) {
                        promptTarget.showClasses = promptTarget.showClasses.concat(configuration.showClasses);
                    } else {
                        promptTarget.showClasses = configuration.showClasses;
                    }

                    for (let index = 0; index < promptTarget.showClasses.length; index++) {
                        athWrapper.classList.add(promptTarget.showClasses[index]);
                    }

                    let promptDialogTitle = athWrapper.querySelector(configuration.customPromptElements.title);
                    let promptDialogLogo = athWrapper.querySelector(configuration.customPromptElements.logo);
                    let promptDialogCancelButton = athWrapper.querySelector(configuration.customPromptElements.cancel);
                    let promptDialogInstallButton = athWrapper.querySelector(configuration.customPromptElements.install);

                    if (promptDialogTitle && promptTarget.title) {
                        promptDialogTitle.innerText = promptTarget.title;
                    }

                    if (promptDialogLogo && promptTarget.src) {
                        promptDialogLogo.src = promptTarget.src;
                        promptDialogLogo.alt = promptTarget.title || 'Install application';
                    }

                    if (promptDialogInstallButton) {
                        promptDialogInstallButton.addEventListener('click', handleInstall);
                        promptDialogInstallButton.classList.remove(configuration.hideClass);
                        promptDialogInstallButton.innerText = promptTarget.installMsg ? promptTarget.installMsg :
                            ((promptTarget.action && promptTarget.action.ok) ? promptTarget.action.ok : configuration.customPromptElements.action.ok);
                    }

                    if (promptDialogCancelButton) {
                        promptDialogCancelButton.addEventListener('click', cancelPrompt);
                        promptDialogCancelButton.classList.remove(configuration.hideClass);
                        promptDialogCancelButton.innerText = promptTarget.cancelMsg ? promptTarget.cancelMsg :
                            ((promptTarget.action && promptTarget.action.cancel) ? promptTarget.action.cancel : configuration.customPromptElements.action.cancel);
                    }
                }

                if (configuration.lifespan && configuration.lifespan > 0) {
                    autoHideTimer = setTimeout(autoHide, configuration.lifespan * 1000);
                }
            }

            // fire the custom onShow event
            if (configuration.onShow) {
                configuration.onShow.call(this);
            }

            // increment the display count
            session.lastDisplayTime = Date.now();
            session.displayCount++;
            updateSession();
        }

    }

    function canPrompt() {
        // already evaluated the situation, so don't do it again
        if (canPromptState !== undefined) {
            return canPromptState;
        }

        canPromptState = false;

        if (configuration.customCriteria !== null) {
            let passCustom = typeof configuration.customCriteria === 'function' ? configuration.customCriteria() : !!configuration.customCriteria;

            if (!passCustom) {
                doLog('Add to home screen: not displaying callout because a custom criteria was not met.');
                return false;
            }
        }

        // using a double negative here to detect if service workers are not supported
        // if not then don't bother asking to add to install the PWA
        if (!('serviceWorker' in navigator)) {
            doLog('Add to home screen: not displaying callout because service workers are not supported');
            return false;
        }

        // the device is not supported
        if (!platform.isCompatible) {
            doLog('Add to home screen: not displaying callout because device not supported');
            return false;
        }

        let now = Date.now();
        let lastDisplayTime = session.lastDisplayTime;

        // we obey the display pace (prevent the message to popup too often)
        if (now - lastDisplayTime < configuration.displayPace * 60000) {
            doLog('Add to home screen: not displaying callout because displayed recently');
            return false;
        }

        // obey the maximum number of display count
        if (configuration.maxDisplayCount && session.displayCount >= configuration.maxDisplayCount) {
            doLog('Add to home screen: not displaying callout because displayed too many times already');
            return false;
        }

        // check if this is a valid location
        // TODO: should include at least the home page here
        // by default all pages are valid, which can cause issues on iOS
        // TODO: maybe trigger a redirect back to the home page for iOS
        let isValidLocation = !configuration.validLocation.length;

        for (let i = configuration.validLocation.length; i--;) {
            if (configuration.validLocation[i].test(document.location.href)) {
                isValidLocation = true;
                break;
            }
        }

        if (!isValidLocation) {
            doLog('Add to home screen: not displaying callout because not a valid location');
            return false;
        }

        let isGuidanceURL = false;

        for (let i = guidanceTargetUrls.length; i--;) {
            if (document.location.href.indexOf(guidanceTargetUrls[i]) > -1) {
                isGuidanceURL = true;
                break;
            }
        }

        if (isGuidanceURL) {
            doLog('Add to home screen: not displaying callout because this is a guidance URL');
            return false;
        }

        if (session.pageViews < configuration.minPageViews) {
            doLog('Add to home screen: not displaying callout because not enough visits');
            return false;
        }

        // critical errors:
        if (session.optedOut) {
            doLog('Add to home screen: not displaying callout because user opted out');
            return false;
        }

        if (session.added) {
            doLog('Add to home screen: not displaying callout because already added to the home screen');
            return false;
        }

        // check if the app is in stand alone mode
        // this applies to iOS
        if (platform.isStandalone) {

            // execute the onAdd event if we haven't already
            if (!session.added) {
                session.added = true;
                updateSession();

                if (configuration.onAdd) {
                    configuration.onAdd.call(this);
                }
            }

            doLog('Add to home screen: not displaying callout because in standalone mode');
            return false;
        }

        // check if this is a returning visitor
        if (!session.returningVisitor) {
            session.returningVisitor = true;
            updateSession();

            // we do not show the message if this is your first visit
            if (configuration.skipFirstVisit) {
                doLog('Add to home screen: not displaying callout because skipping first visit');
                return false;
            }
        }

        canPromptState = true;
        return true;
    }

    /* displays native A2HS prompt & stores results */
    function triggerNativePrompt() {
        return beforeInstallPromptEvent.prompt()
            .then(function () {
                // Wait for the user to respond to the prompt
                return beforeInstallPromptEvent.userChoice;
            })
            .then(function (choiceResult) {
                session.added = (choiceResult.outcome === 'accepted');

                if (session.added) {
                    doLog('User accepted the A2HS prompt');
                    if (configuration.onAdd) {
                        configuration.onAdd();
                    }
                } else {
                    if (configuration.onCancel) {
                        configuration.onCancel();
                    }
                    session.optedOut = true;
                    doLog('User dismissed the A2HS prompt');
                }
                updateSession();
                beforeInstallPromptEvent = null;

            })
            .catch(function (err) {
                doLog(err.message);

                if (err.message.indexOf('user gesture') > -1) {
                    configuration.mustShowCustomPrompt = true;
                    delayedShow();
                } else if (err.message.indexOf('The app is already installed') > -1) {
                    doLog(err.message);
                    session.added = true;
                    updateSession();
                } else {
                    doLog(err);
                    return err;
                }
            });
    }

    function cancelPrompt(event) {
        event.preventDefault();
        if (configuration.onCancel) {
            configuration.onCancel();
        }
        closePrompt();
        return false;
    }

    function closePrompt() {
        let athWrapper = document.querySelector(configuration.athWrapper);
        if (athWrapper) {
            athWrapper.classList.remove(...configuration.showClasses);
        }
    }

    function handleInstall() {
        if (configuration.onInstall) {
            configuration.onInstall();
        }
        if (beforeInstallPromptEvent && (!configuration.debug || getPlatform() === 'native')) {
            closePrompt();
            triggerNativePrompt();
        } else {
            showPlatformGuidance(true);
        }
        return false;
    }

    function autoHide() {
        let target = getPlatform();
        let athWrapper = document.querySelector(configuration.athWrapper);

        if (athWrapper) {
            let promptTarget = configuration.customPromptPlatformDependencies[target];
            promptTarget.showClasses = promptTarget.showClasses.concat(configuration.showClasses);

            athWrapper.classList.remove(...promptTarget.showClasses);
            athWrapper.classList.add(configuration.hideClass);
        }
    }

    return (
        <div className="ath-container banner-bottom-center">
            <div className="ath-banner">
                <div className="ath-banner-cell">
                    <img alt="Application Logo" className="ath-prompt-logo"/>
                </div>
                <div className="ath-banner-title"/>
                <div className="ath-banner-cell">
                    <button className="btn btn-cancel btn-link button">Not Now</button>
                </div>
                <div className="ath-banner-cell">
                    <button className="btn btn-install btn-success button button--primary">Install</button>
                </div>
            </div>
        </div>
    );
}