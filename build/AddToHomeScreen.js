!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["add-to-homescreen-react"]=t():e["add-to-homescreen-react"]=t()}(window,(function(){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("react")},function(e){e.exports=JSON.parse('{"appId":"add-to-homescreen-react","debug":false,"logging":false,"modal":false,"mandatory":false,"autoStart":true,"skipFirstVisit":false,"minPageViews":0,"startDelay":1,"lifespan":15,"displayPace":1440,"mustShowCustomPrompt":false,"maxDisplayCount":0,"validLocation":[],"onInit":null,"onShow":null,"onAdd":null,"onInstall":null,"onCancel":null,"customCriteria":null,"customPromptContent":{},"showClasses":["animated","d-flex"],"showClass":"d-flex","hideClass":"d-none","customPromptElements":{"container":"ath-container","containerAddOns":"banner-bottom-center","banner":"ath-banner","bannerAddOns":"","logoCell":"ath-banner-cell","logoCellAddOns":"","logo":"ath-prompt-logo","logoAddOns":"","titleCell":"ath-banner-cell","titleCellAddOns":"","title":"ath-banner-title","titleAddOns":"","cancelButtonCell":"ath-banner-cell","cancelButtonCellAddOns":"","cancelButton":"btn-cancel","cancelButtonAddOns":"btn btn-link","installButtonCell":"ath-banner-cell","installButtonCellAddOns":"","installButton":"btn-install","installButtonAddOns":"btn btn-success","guidance":"ath-guidance","guidanceAddOns":""},"customPromptPlatformDependencies":{"native":{"showClasses":["fadeInUp","right-banner"]},"edge":{"showClasses":["edge-wrapper","animated","fadeIn","d-block","right-banner"]},"chromium":{"showClasses":["chromium-wrapper","animated","fadeIn","d-block","right-banner"]},"iphone":{"showClasses":["iphone-wrapper","animated","fadeIn","d-block"]},"ipad":{"showClasses":["ipad-wrapper","animated","fadeIn","d-block"]},"firefox":{"showClasses":["firefox-wrapper","animated","fadeIn","d-block"]},"samsung":{"showClasses":["samsung-wrapper","animated","fadeIn","d-block"]},"opera":{"showClasses":["opera-home-screen-wrapper","animated","fadeIn","d-block"]}}}')},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var a=n(0),o=n.n(a),s=n(1),i=n.n(s),r=(n(4),n(2));function l(e){const t={title:"Install application?",cancelMsg:"Not Now",installMsg:"Install"},n={lastDisplayTime:0,returningVisitor:!1,displayCount:0,optedOut:!1,added:!1,pageViews:0};let a=function(){let t=Object.assign({},r,e);t.customPromptContent=Object.assign({},r.customPromptContent,e.customPromptContent),t.customPromptElements=Object.assign({},r.customPromptElements,e.customPromptElements),t.customPromptPlatformDependencies=Object.assign({},r.customPromptPlatformDependencies,e.customPromptPlatformDependencies);for(let n in r.customPromptPlatformDependencies)r.customPromptPlatformDependencies.hasOwnProperty(n)&&(t.customPromptPlatformDependencies[n]=Object.assign({},r.customPromptPlatformDependencies[n],e.customPromptPlatformDependencies[n]));return t}();h(`final configuration: ${JSON.stringify(a)}`);let o,l,c,d={},m={},u=[],p=!1,f=!1;function g(e){e||(h("no service worker"),m.isCompatible=!1),d.pageViews+=1,b(),a&&a.debug&&void 0===a.activateLogging&&(a.activateLogging=!0),a.isMandatory=a.isMandatory&&("standalone"in window.navigator||a.debug),a.isModal=a.isModal||a.isMandatory,a.isMandatory&&(a.startDelay=-.5),a.debug&&(m.isCompatible=!0),a.onInit&&a.onInit.call(this),a.startAutomatically&&l?(h("Add to home screen: autoStart displaying callout"),v()):f||v()}function h(e){a.activateLogging&&console.log(e)}function b(){window.localStorage.setItem(a.appId,JSON.stringify(d))}function y(e){return a.debug&&"string"==typeof a.debug?a.debug:m.isChromium&&void 0===e?"native":m.isFireFox?"firefox":m.isiPad?"ipad":m.isiPhone?"iphone":m.isOpera?"opera":m.isSamsung?"samsung":m.isEdge?"edge":m.isChromium?"chromium":""}function w(e){e.preventDefault(),h("capturing the native A2HS prompt"),l=e,C()}function C(){setTimeout(P,1e3*a.startDelay+500)}function v(){p?h("Add to home screen: not displaying callout because already shown on screen"):(p=!0,"interactive"===document.readyState||"complete"===document.readyState?C():document.onreadystatechange=function(){"complete"===document.readyState&&C()})}function P(){if(function(){if(void 0!==o)return o;if(o=!1,null!==a.customCriteria){if(!("function"==typeof a.customCriteria?a.customCriteria():!!a.customCriteria))return h("Add to home screen: not displaying callout because a custom criteria was not met."),!1}if(!("serviceWorker"in navigator))return h("Add to home screen: not displaying callout because service workers are not supported"),!1;if(!m.isCompatible)return h("Add to home screen: not displaying callout because device not supported"),!1;let e=Date.now(),t=d.lastDisplayTime;if(e-t<6e4*a.displayPace)return h("Add to home screen: not displaying callout because displayed recently"),!1;if(a.maxDisplayCount&&d.displayCount>=a.maxDisplayCount)return h("Add to home screen: not displaying callout because displayed too many times already"),!1;let n=!a.validLocation.length;for(let e=a.validLocation.length;e--;)if(a.validLocation[e].test(document.location.href)){n=!0;break}if(!n)return h("Add to home screen: not displaying callout because not a valid location"),!1;let s=!1;for(let e=u.length;e--;)if(document.location.href.indexOf(u[e])>-1){s=!0;break}if(s)return h("Add to home screen: not displaying callout because this is a guidance URL"),!1;if(d.pageViews<a.minPageViews)return h("Add to home screen: not displaying callout because not enough visits"),!1;if(d.optedOut)return h("Add to home screen: not displaying callout because user opted out"),!1;if(d.added)return h("Add to home screen: not displaying callout because already added to the home screen"),!1;if(m.isStandalone)return d.added||(d.added=!0,b(),a.onAdd&&a.onAdd.call(this)),h("Add to home screen: not displaying callout because in standalone mode"),!1;if(!d.returningVisitor&&(d.returningVisitor=!0,b(),a.skipFirstVisit))return h("Add to home screen: not displaying callout because skipping first visit"),!1;return o=!0,!0}()){if(l&&!a.mustShowCustomPrompt)h("show native prompt"),O();else{let e=y(),n=document.querySelector(`.${a.customPromptElements.container}`);if(h(`show generic prompt for platform ${e}`),n&&!d.optedOut){n.classList.remove(a.hideClass);let o=Object.assign({},t,a.customPromptContent,a.customPromptPlatformDependencies[e]);o.showClasses?o.showClasses=o.showClasses.concat(a.showClasses):o.showClasses=a.showClasses;for(let e=0;e<o.showClasses.length;e++)n.classList.add(o.showClasses[e]);let s=n.querySelector(`.${a.customPromptElements.title}`),i=n.querySelector(`.${a.customPromptElements.logo}`),r=n.querySelector(`.${a.customPromptElements.cancelButton}`),l=n.querySelector(`.${a.customPromptElements.installButton}`);s&&o.title&&(s.innerText=o.title),i&&(o.src?(i.src=o.src,i.alt=o.title||"Install application"):i.remove()),l&&(l.addEventListener("click",E),l.classList.remove(a.hideClass),l.innerText=null!=o.installMsg?o.installMsg:o.action&&o.action.ok?o.action.ok:""),r&&(r.addEventListener("click",x),r.classList.remove(a.hideClass),r.innerText=null!=o.cancelMsg?o.cancelMsg:o.action&&o.action.cancel?o.action.cancel:"")}a.lifespan&&a.lifespan>0&&(c=setTimeout(S,1e3*a.lifespan))}a.onShow&&a.onShow.call(this),d.lastDisplayTime=Date.now(),d.displayCount++,b()}}function O(){return l.prompt().then((function(){return l.userChoice})).then((function(e){d.added="accepted"===e.outcome,d.added?(h("User accepted the A2HS prompt"),a.onAdd&&a.onAdd()):(a.onCancel&&a.onCancel(),d.optedOut=!0,h("User dismissed the A2HS prompt")),b(),l=null})).catch((function(e){if(h(e.message),e.message.indexOf("user gesture")>-1)a.mustShowCustomPrompt=!0,C();else{if(!(e.message.indexOf("The app is already installed")>-1))return h(e),e;h(e.message),d.added=!0,b()}}))}function x(e){return e.preventDefault(),a.onCancel&&a.onCancel(),A(),!1}function A(){let e=document.querySelector(`.${a.customPromptElements.container}`);if(e){let t=y(),n=a.customPromptPlatformDependencies[t];n.showClasses=n.showClasses.concat(a.showClasses),e.classList.remove(...n.showClasses)}}function E(){return a.onInstall&&a.onInstall(),!l||a.debug&&"native"!==y()?function(e){let n=y(e),o=document.querySelector(`.${a.customPromptElements.container}`);if(o)if(c&&clearTimeout(c),!e&&"native"===n&&l)A(),O();else{let e=Object.assign({},t,a.customPromptContent,a.customPromptPlatformDependencies[n]);if(e.targetUrl)location.replace(e.targetUrl);else{if(e.imgs&&e.imgs.length>0){let t=o.querySelector(`.${a.customPromptElements.banner}`),n=o.querySelector(`.${a.customPromptElements.guidance}`);t.classList.add(a.hideClass),n.classList.add(a.showClass);for(let t=e.imgs.length-1;t>=0;t--){let o=new Image;o.src=e.imgs[t].src,o.alt=e.imgs[t].alt,e.imgs[t].classes&&o.classList.add(...e.imgs[t].classes),o.classList.add(a.showClass),n.insertBefore(o,n.firstChild)}}(function(e){let t=e.getBoundingClientRect();return 0!==t.width&&0!==t.height})(o)||(o.classList.add(...e.showClasses),o.classList.remove(a.hideClass));let t=a.lifespan>=10?a.lifespan:10;c=setTimeout(S,1e3*t)}}}(!0):(A(),O()),!1}function S(){let e=document.querySelector(`.${a.customPromptElements.container}`);A(),e&&e.classList.add(a.hideClass)}return Object(s.useEffect)((function(){"onbeforeinstallprompt"in window&&(window.addEventListener("beforeinstallprompt",w),f=!0);"onappinstalled"in window&&window.addEventListener("appinstalled",(function(e){h("a2hs installed"),d.added=!0,b(),a.onInstall&&a.onInstall.call(this)}));!function(){let e=window.navigator.userAgent;m.isIDevice=/iphone|ipod|ipad/i.test(e),m.isSamsung=/Samsung/i.test(e),m.isFireFox=/Firefox/i.test(e),m.isOpera=/opr/i.test(e),m.isEdge=/edg/i.test(e),m.isFireFox&&(m.isFireFox=/android/i.test(e));m.isOpera&&(m.isOpera=/android/i.test(e));m.isChromium="onbeforeinstallprompt"in window,m.isInWebAppiOS=!0===window.navigator.standalone,m.isInWebAppChrome=window.matchMedia("(display-mode: standalone)").matches,m.isMobileSafari=m.isIDevice&&e.indexOf("Safari")>-1&&e.indexOf("CriOS")<0,m.isStandalone=m.isInWebAppiOS||m.isInWebAppChrome,m.isiPad=m.isMobileSafari&&e.indexOf("iPad")>-1,m.isiPhone=m.isMobileSafari&&-1===e.indexOf("iPad"),m.isCompatible=m.isChromium||m.isMobileSafari||m.isSamsung||m.isFireFox||m.isOpera}();let e=window.localStorage.getItem(a.appId);if(d=e?JSON.parse(e):n,d&&d.added)return;if("serviceWorker"in navigator){document.querySelector("[rel='manifest']")||(h("no manifest file"),m.isCompatible=!1),navigator.serviceWorker.getRegistration().then(g),function(e){for(let t in e)if(e.hasOwnProperty(t)){let n=e[t].targetUrl;n&&u.push(n)}}(a.customPromptPlatformDependencies)}else g({})}),[]),i.a.createElement("div",{className:`${a.customPromptElements.container} ${a.customPromptElements.containerAddOns}`},i.a.createElement("div",{className:`${a.customPromptElements.banner} ${a.customPromptElements.bannerAddOns}`},i.a.createElement("div",{className:`${a.customPromptElements.logoCell} ${a.customPromptElements.logoCellAddOns}`},i.a.createElement("img",{alt:"Application Logo",className:`${a.customPromptElements.logo} ${a.customPromptElements.logoAddOns}`})),i.a.createElement("div",{className:`${a.customPromptElements.titleCell} ${a.customPromptElements.titleCellAddOns}`},i.a.createElement("div",{className:`${a.customPromptElements.title} ${a.customPromptElements.titleAddOns}`})),i.a.createElement("div",{className:`${a.customPromptElements.cancelButtonCell} ${a.customPromptElements.cancelButtonCellAddOns}`},i.a.createElement("button",{className:`${a.customPromptElements.cancelButton} ${a.customPromptElements.cancelButtonAddOns}`},"Not Now")),i.a.createElement("div",{className:`${a.customPromptElements.installButtonCell} ${a.customPromptElements.installButtonCellAddOns}`},i.a.createElement("button",{className:`${a.customPromptElements.installButton} ${a.customPromptElements.installButtonAddOns}`},"Install"))),i.a.createElement("div",{className:`${a.customPromptElements.guidance} ${a.customPromptElements.guidanceAddOns}`},i.a.createElement("div",{className:`${a.customPromptElements.cancelButtonCell} ${a.customPromptElements.cancelButtonCellAddOns}`},i.a.createElement("button",{className:`${a.customPromptElements.cancelButton} ${a.customPromptElements.cancelButtonAddOns}`},"Not Now"))))}l.propTypes={appId:o.a.string,debug:o.a.string,activateLogging:o.a.bool,isModal:o.a.bool,isMandatory:o.a.bool,startAutomatically:o.a.bool,skipFirstVisit:o.a.bool,minPageViews:o.a.number,startDelay:o.a.number,lifespan:o.a.number,displayPace:o.a.number,mustShowCustomPrompt:o.a.bool,maxDisplayCount:o.a.number,validLocation:o.a.arrayOf(o.a.string),onInit:o.a.func,onShow:o.a.func,onAdd:o.a.func,onInstall:o.a.func,onCancel:o.a.func,showClasses:o.a.arrayOf(o.a.string),showClass:o.a.string,hideClass:o.a.string,customCriteria:o.a.func,customPromptContent:o.a.shape({title:o.a.string,src:o.a.string,cancelMsg:o.a.string,installMsg:o.a.string}),customPromptElements:o.a.shape({container:o.a.string,containerAddOns:o.a.string,banner:o.a.string,bannerAddOns:o.a.string,bannerCell:o.a.string,bannerCellAddOns:o.a.string,logo:o.a.string,logoAddOns:o.a.string,title:o.a.string,titleAddOns:o.a.string,cancelButton:o.a.string,cancelButtonAddOns:o.a.string,installButton:o.a.string,installButtonAddOns:o.a.string,guidance:o.a.string,guidanceAddOns:o.a.string}),customPromptPlatformDependencies:o.a.shape({native:o.a.shape({showClasses:o.a.arrayOf(o.a.string),targetUrl:o.a.string,imgs:o.a.arrayOf(o.a.shape({src:o.a.string,alt:o.a.string}))}),chromium:o.a.shape({showClasses:o.a.arrayOf(o.a.string),targetUrl:o.a.string,imgs:o.a.arrayOf(o.a.shape({src:o.a.string,alt:o.a.string}))}),edge:o.a.shape({showClasses:o.a.arrayOf(o.a.string),targetUrl:o.a.string,imgs:o.a.arrayOf(o.a.shape({src:o.a.string,alt:o.a.string}))}),iphone:o.a.shape({showClasses:o.a.arrayOf(o.a.string),targetUrl:o.a.string,imgs:o.a.arrayOf(o.a.shape({src:o.a.string,alt:o.a.string}))}),ipad:o.a.shape({showClasses:o.a.arrayOf(o.a.string),targetUrl:o.a.string,imgs:o.a.arrayOf(o.a.shape({src:o.a.string,alt:o.a.string}))}),firefox:o.a.shape({showClasses:o.a.arrayOf(o.a.string),targetUrl:o.a.string,imgs:o.a.arrayOf(o.a.shape({src:o.a.string,alt:o.a.string}))}),samsung:o.a.shape({showClasses:o.a.arrayOf(o.a.string),targetUrl:o.a.string,imgs:o.a.arrayOf(o.a.shape({src:o.a.string,alt:o.a.string}))}),opera:o.a.shape({showClasses:o.a.arrayOf(o.a.string),targetUrl:o.a.string,imgs:o.a.arrayOf(o.a.shape({src:o.a.string,alt:o.a.string}))})})}},function(e,t,n){var a=n(5),o=n(6);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var s={insert:"head",singleton:!1},i=(a("!!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./addToHomeScreen.scss",o,s),o.locals?o.locals:{});e.exports=i},function(e,t,n){"use strict";var a,o={},s=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}();function r(e,t,n){e=n.base?e+n.base:e,o[e]||(o[e]=[]);for(var a=0;a<t.length;a++){var s=t[a],i={css:s[1],media:s[2],sourceMap:s[3]},r=o[e];r[a]?r[a].updater(i):r.push({updater:g(i,n)})}for(var l=t.length;l<o[e].length;l++)o[e][l].updater();o[e].length=t.length,0===o[e].length&&delete o[e]}function l(e){var t=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var o=n.nc;o&&(a.nonce=o)}if(Object.keys(a).forEach((function(e){t.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(t);else{var s=i(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var c,d=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function m(e,t,n,a){var o=n?"":a.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var s=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(s,i[t]):e.appendChild(s)}}function u(e,t,n){var a=n.css,o=n.media,s=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),s&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var p=null,f=0;function g(e,t){var n,a,o;if(t.singleton){var s=f++;n=p||(p=l(t)),a=m.bind(null,n,s,!1),o=m.bind(null,n,s,!0)}else n=l(t),a=u.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else o()}}e.exports=function(e,t,n){return(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=s()),r(e,t,n),function(t){r(e,t||[],n)}}},function(e,t,n){(t=n(7)(!1)).push([e.i,".ath-container{background-color:#eeeeee;color:#000000;display:none;flex-direction:column;padding:1%;position:fixed;text-align:center;width:100%;z-index:1000}.ath-banner{display:flex;flex-direction:row;justify-content:center;position:relative}.ath-guidance{display:none;flex-direction:row;justify-content:center;position:relative}.ath-banner-title{align-items:center;display:flex;font-size:1rem;justify-content:center;text-align:center;width:calc(100% - 240px)}.ath-banner-cell{align-items:center;display:flex;justify-content:center;margin:5px;width:70px}.log-target{overflow-wrap:break-word}.banner-top-left{left:0;top:0}.banner-top-right{right:0;top:0}.banner-bottom-left{bottom:0;left:0}.banner-bottom-right{bottom:0;right:0}.banner-center{left:25%;top:25%}.banner-center-left{left:0;top:25%}.banner-center-right{right:0;top:25%}.banner-top-center{left:25%;top:12px;width:50%}.banner-bottom-center{bottom:12px}.ath-guidance img{bottom:0}@media (min-width: 576px){.banner-dialog-centered{min-height:calc(100% - 3.5rem)}.ath-banner-cell{margin:3px;width:90px}}@media (min-width: 768px){.ath-banner-title{width:calc(100% - 360px)}.ath-banner-cell{width:120px}}@media (min-width: 992px){.banner-lg{width:50%}.banner-lg-top-center{left:25%;top:12px}.banner-lg-bottom-center{bottom:12px;left:25%}.banner-bottom-center{left:20%;width:60%}.ath-container img{left:15%}}.edge-wrapper,.firefox-wrapper,.samsung-wrapper,.opera-home-screen-wrapper{opacity:1}.firefox-wrapper,.samsung-wrapper,.opera-home-screen-wrapper{bottom:21px}.opera-home-screen-wrapper{left:auto;max-width:483px;right:6px;width:100%}.ipad-wrapper img{top:0}.animated.delay-7s{animation-delay:7s}.overlay-1{z-index:2020}.overlay-2{z-index:2040}.overlay{bottom:0;height:100%;left:0;opacity:0;position:absolute;right:0;top:0;transition:.3s ease;width:100%}.ath-container p{font-size:1.1em;margin:0;padding:0;position:relative;text-shadow:0 0.1em 0 #ffffff;z-index:2147483642}.d-none{display:none !important}.d-block{display:block !important}.d-flex{display:-ms-flexbox !important;display:flex !important}.animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",a=e[3];if(!a)return n;if(t&&"function"==typeof btoa){var o=(i=a,r=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(l," */")),s=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot).concat(e," */")}));return[n].concat(s).concat([o]).join("\n")}var i,r,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var a=0;a<e.length;a++){var o=[].concat(e[a]);n&&(o[2]?o[2]="".concat(n," and ").concat(o[2]):o[2]=n),t.push(o)}},t}}])}));