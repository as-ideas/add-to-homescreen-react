!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["add-to-homescreen-react"]=t():e["add-to-homescreen-react"]=t()}(window,(function(){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("react")},function(e){e.exports=JSON.parse('{"appId":"add-to-homescreen-react","debug":false,"activateLogging":false,"startAutomatically":true,"skipFirstVisit":false,"minPageViews":0,"startDelay":1,"lifespan":15,"displayPace":1440,"mustShowCustomPrompt":false,"maxDisplayCount":0,"validLocation":[],"onInit":null,"onShow":null,"onAdd":null,"onInstall":null,"onCancel":null,"showClasses":["animated","d-grid"],"showClass":"d-grid","hideClass":"d-none","customCriteria":null,"customPromptContent":{},"customPromptElements":{"container":"ath-container","containerAddOns":"banner-bottom-center","banner":"ath-banner","bannerAddOns":"","logoCell":"ath-logo-cell","logoCellAddOns":"ath-banner-cell","logo":"ath-prompt-logo","logoAddOns":"","titleCell":"ath-title-cell","titleCellAddOns":"ath-banner-cell","title":"ath-banner-title","titleAddOns":"","cancelButtonCell":"ath-cancel-cell","cancelButtonCellAddOns":"ath-banner-cell","cancelButton":"btn-cancel","cancelButtonAddOns":"btn btn-link","installButtonCell":"ath-install-cell","installButtonCellAddOns":"ath-banner-cell","installButton":"btn-install","installButtonAddOns":"btn btn-success","guidance":"ath-guidance","guidanceAddOns":"","guidanceImageCell":"ath-guidance-image-cell","guidanceImageCellAddOns":"ath-banner-cell","guidanceCancelButton":"btn-guidance-cancel","guidanceCancelButtonAddOns":"btn btn-link"},"customPromptPlatformDependencies":{"native":{"showClasses":["fadeInUp","right-banner"],"images":[{"src":"images/guidance/chromium.png","alt":"Guide to install application on home screen."}]},"edge":{"showClasses":["edge-wrapper","animated","fadeIn","d-block","right-banner"],"images":[{"src":"images/guidance/chromium.png","alt":"Guide to install application on home screen."}]},"chromium":{"showClasses":["chromium-wrapper","animated","fadeIn","d-block","right-banner"],"images":[{"src":"images/guidance/chromium.png","alt":"Guide to install application on home screen."}]},"iphone":{"showClasses":["iphone-wrapper","animated","fadeIn","d-block"],"images":[{"src":"images/guidance/iphone.png","alt":"Guide to install application on home screen."}]},"ipad":{"showClasses":["ipad-wrapper","animated","fadeIn","d-block"],"images":[{"src":"images/guidance/ipad.png","alt":"Guide to install application on home screen."}]},"firefox":{"showClasses":["firefox-wrapper","animated","fadeIn","d-block"],"images":[{"src":"images/guidance/firefox.png","alt":"Guide to install application on home screen."}]},"samsung":{"showClasses":["samsung-wrapper","animated","fadeIn","d-block"],"images":[{"src":"images/guidance/firefox.png","alt":"Guide to install application on home screen."}]},"opera":{"showClasses":["opera-home-screen-wrapper","animated","fadeIn","d-block"],"images":[{"src":"images/guidance/opera.png","alt":"Guide to install application on home screen."}]}}}')},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,a){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(a)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var l=0;l<e.length;l++){var r=[].concat(e[l]);a&&o[r[0]]||(n&&(r[2]?r[2]="".concat(n," and ").concat(r[2]):r[2]=n),t.push(r))}},t}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r}));var a=n(0),o=n.n(a),i=n(1),s=n.n(i),l=(n(5),n(2));function r(e){const t={title:"Do you want to install this application on your homescreen?",cancelMsg:"Not now",installMsg:"Install",guidanceCancelMsg:"Close",src:"images/logos/default/StoreLogo.png"},n={lastDisplayTime:0,returningVisitor:!1,displayCount:0,optedOut:!1,added:!1,pageViews:0};let a=function(){let t=Object.assign({},l,e);t.customPromptContent=Object.assign({},l.customPromptContent,e.customPromptContent),t.customPromptElements=Object.assign({},l.customPromptElements,e.customPromptElements),t.customPromptPlatformDependencies=Object.assign({},l.customPromptPlatformDependencies,e.customPromptPlatformDependencies);for(let n in l.customPromptPlatformDependencies)l.customPromptPlatformDependencies.hasOwnProperty(n)&&(e.customPromptPlatformDependencies?t.customPromptPlatformDependencies[n]=Object.assign({},l.customPromptPlatformDependencies[n],e.customPromptPlatformDependencies[n]):t.customPromptPlatformDependencies[n]=l.customPromptPlatformDependencies[n]);return t}();h("final configuration: "+JSON.stringify(a));let o,r,c,d={},u={},m=[],p=!1,g=!1;function f(e){e||(h("no service worker"),u.isCompatible=!1),h("service worker found - increasing page views"),d.pageViews+=1,b(),a&&a.debug&&void 0===a.activateLogging&&(a.activateLogging=!0),a.debug&&(u.isCompatible=!0),a.onInit&&a.onInit.call(this),h("decide to show: autoStart: "+a.startAutomatically+" ### beforeInstallPromptEvent: "+r+" ### showNativePrompt: "+g),a.startAutomatically&&r?(h("autoStart - displaying call-out"),P()):g?h("did decide to show nothing"):(h("not showing native prompt - displaying call-out"),P())}function h(e){a.activateLogging&&console.log("Add to Homescreen: "+e)}function b(){window.localStorage.setItem(a.appId,JSON.stringify(d))}function C(e){return a.debug&&"string"==typeof a.debug?a.debug:u.isChromium&&void 0===e?"native":u.isFireFox?"firefox":u.isiPad?"ipad":u.isiPhone?"iphone":u.isOpera?"opera":u.isSamsung?"samsung":u.isEdge?"edge":u.isChromium?"chromium":""}function v(e){e.preventDefault(),h("capturing the native A2HS prompt"),r=e,y()}function y(){setTimeout(w,1e3*a.startDelay+500)}function P(){p?h("not displaying call-out because already shown on screen"):(p=!0,"interactive"===document.readyState||"complete"===document.readyState?y():document.onreadystatechange=function(){"complete"===document.readyState&&y()})}function w(){if(function(){if(void 0!==o)return h("canPrompt() already evaluated: "+o.toString()),o;if(o=!1,null!==a.customCriteria){if(!("function"==typeof a.customCriteria?a.customCriteria():!!a.customCriteria))return h("not displaying call-out because a custom criteria was not met."),!1}if(!("serviceWorker"in navigator))return h("not displaying call-out because service workers are not supported"),!1;if(!u.isCompatible)return h("not displaying call-out because device not supported"),h("platform: "+JSON.stringify(u)),!1;let e=Date.now(),t=d.lastDisplayTime;if(e-t<6e4*a.displayPace)return h("not displaying call-out because displayed recently"),!1;if(a.maxDisplayCount&&d.displayCount>=a.maxDisplayCount)return h("not displaying call-out because displayed too many times already"),!1;let n=!a.validLocation.length;for(let e=a.validLocation.length;e--;)if(a.validLocation[e].test(document.location.href)){n=!0;break}if(!n)return h("not displaying call-out because not a valid location"),!1;let i=!1;for(let e=m.length;e--;)if(document.location.href.indexOf(m[e])>-1){i=!0;break}if(i)return h("not displaying call-out because this is a guidance URL"),!1;if(d.pageViews<a.minPageViews)return h("not displaying call-out because not enough visits"),!1;if(d.optedOut)return h("not displaying call-out because user opted out"),!1;if(d.added)return h("not displaying call-out because already added to the home screen"),!1;if(u.isStandalone)return d.added||(d.added=!0,b(),a.onAdd&&a.onAdd.call(this)),h("not displaying call-out because in standalone mode"),!1;if(!d.returningVisitor&&(d.returningVisitor=!0,b(),a.skipFirstVisit))return h("not displaying call-out because skipping first visit"),!1;return o=!0,!0}()){if(r&&!a.mustShowCustomPrompt)h("show native prompt"),O();else{let e=C(),n=document.querySelector("."+a.customPromptElements.container);if(h("show generic prompt for platform "+e),n&&!d.optedOut){n.classList.remove(a.hideClass);let o=Object.assign({},t,a.customPromptContent,a.customPromptPlatformDependencies[e]);o.showClasses?o.showClasses=o.showClasses.concat(a.showClasses):o.showClasses=a.showClasses;for(let e=0;e<o.showClasses.length;e++)n.classList.add(o.showClasses[e]);let i=n.querySelector("."+a.customPromptElements.title),s=n.querySelector("."+a.customPromptElements.logo),l=n.querySelector("."+a.customPromptElements.cancelButton),r=n.querySelector("."+a.customPromptElements.installButton);i&&o.title&&(i.innerText=o.title),s&&(o.src?(s.src=o.src,s.alt=o.title||"Install application"):s.remove()),r&&(r.addEventListener("click",A),r.classList.remove(a.hideClass),r.innerText=null!=o.installMsg?o.installMsg:o.action&&o.action.ok?o.action.ok:""),l&&(l.addEventListener("click",E),l.classList.remove(a.hideClass),l.innerText=null!=o.cancelMsg?o.cancelMsg:o.action&&o.action.cancel?o.action.cancel:"")}a.lifespan&&a.lifespan>0&&(c=setTimeout(x,1e3*a.lifespan))}a.onShow&&a.onShow.call(this),d.lastDisplayTime=Date.now(),d.displayCount++,b()}}function O(){return r.prompt().then((function(){return r.userChoice})).then((function(e){d.added="accepted"===e.outcome,d.added?(h("user accepted the A2HS prompt"),a.onAdd&&a.onAdd()):(a.onCancel&&a.onCancel(),d.optedOut=!0,h("user dismissed the A2HS prompt")),b(),r=null})).catch((function(e){if(h(e.message),e.message.indexOf("user gesture")>-1)a.mustShowCustomPrompt=!0,y();else{if(!(e.message.indexOf("The app is already installed")>-1))return h(e),e;h(e.message),d.added=!0,b()}}))}function E(e){return e.preventDefault(),a.onCancel&&a.onCancel(),S(),!1}function S(){let e=document.querySelector("."+a.customPromptElements.container);if(e){let t=C(),n=a.customPromptPlatformDependencies[t];n.showClasses=n.showClasses.concat(a.showClasses),e.classList.remove(...n.showClasses)}}function A(){return a.onInstall&&a.onInstall(),!r||a.debug&&"native"!==C()?function(e){let n=C(e);h("showing platform guidance for: "+n);let o=document.querySelector("."+a.customPromptElements.container);if(o)if(c&&clearTimeout(c),!e&&"native"===n&&r)S(),O();else{let e=Object.assign({},t,a.customPromptContent,a.customPromptPlatformDependencies[n]);if(e.targetUrl)location.replace(e.targetUrl);else{if(e.images&&e.images.length>0){let t=o.querySelector("."+a.customPromptElements.banner),n=o.querySelector("."+a.customPromptElements.guidance),i=o.querySelector("."+a.customPromptElements.guidanceImageCell),s=o.querySelector("."+a.customPromptElements.guidanceCancelButton);t.classList.add(a.hideClass),n.classList.add(a.showClass);for(let t=0;t<e.images.length;t++){let n=new Image;n.src=e.images[t].src,n.alt=e.images[t].alt,e.images[t].classes&&n.classList.add(...e.images[t].classes),i.appendChild(n)}s&&(s.addEventListener("click",E),s.classList.remove(a.hideClass),s.innerText=null!=e.guidanceCancelMsg?e.guidanceCancelMsg:e.action&&e.action.guidanceCancel?e.action.guidanceCancel:"")}(function(e){let t=e.getBoundingClientRect();return 0!==t.width&&0!==t.height})(o)||(o.classList.add(...e.showClasses),o.classList.remove(a.hideClass));let t=a.lifespan>=10?a.lifespan:10;c=setTimeout(x,1e3*t)}}}(!0):(S(),O()),!1}function x(){let e=document.querySelector("."+a.customPromptElements.container);S(),e&&e.classList.add(a.hideClass)}return Object(i.useEffect)((function(){"onbeforeinstallprompt"in window&&(h("add beforeinstallprompt listener"),window.addEventListener("beforeinstallprompt",v),g=!0);"onappinstalled"in window&&window.addEventListener("appinstalled",(function(e){h("A2HS installed"),d.added=!0,b(),a.onInstall&&a.onInstall.call(this)}));!function(){let e=window.navigator.userAgent;h("checking platform - found user agent: "+e),u.isIDevice=/iphone|ipod|ipad/i.test(e),u.isSamsung=/Samsung/i.test(e),u.isFireFox=/Firefox/i.test(e),u.isOpera=/opr/i.test(e),u.isEdge=/edg/i.test(e),u.isFireFox&&(u.isFireFox=/android/i.test(e));u.isOpera&&(u.isOpera=/android/i.test(e));u.isChromium="onbeforeinstallprompt"in window,u.isInWebAppiOS=!0===window.navigator.standalone,u.isInWebAppChrome=window.matchMedia("(display-mode: standalone)").matches,u.isMobileSafari=u.isIDevice&&e.indexOf("Safari")>-1&&e.indexOf("CriOS")<0,u.isStandalone=u.isInWebAppiOS||u.isInWebAppChrome,u.isiPad=u.isMobileSafari&&e.indexOf("iPad")>-1,u.isiPhone=u.isMobileSafari&&-1===e.indexOf("iPad"),u.isCompatible=u.isChromium||u.isMobileSafari||u.isSamsung||u.isFireFox||u.isOpera}();let e=window.localStorage.getItem(a.appId);if(d=e?JSON.parse(e):n,d&&d.added)return;if("serviceWorker"in navigator){document.querySelector("[rel='manifest']")||(h("no manifest file"),u.isCompatible=!1),setTimeout((function(){navigator.serviceWorker.getRegistration().then(f),function(e){for(let t in e)if(e.hasOwnProperty(t)){let n=e[t].targetUrl;h("/"+n),n&&m.push(n)}}(a.customPromptPlatformDependencies)}),1e3)}else f({})}),[]),s.a.createElement("div",{className:`${a.customPromptElements.container} ${a.customPromptElements.containerAddOns}`},s.a.createElement("div",{className:`${a.customPromptElements.banner} ${a.customPromptElements.bannerAddOns}`},s.a.createElement("div",{className:`${a.customPromptElements.logoCell} ${a.customPromptElements.logoCellAddOns}`},s.a.createElement("img",{alt:"Application Logo",className:`${a.customPromptElements.logo} ${a.customPromptElements.logoAddOns}`})),s.a.createElement("div",{className:`${a.customPromptElements.titleCell} ${a.customPromptElements.titleCellAddOns}`},s.a.createElement("div",{className:`${a.customPromptElements.title} ${a.customPromptElements.titleAddOns}`})),s.a.createElement("div",{className:`${a.customPromptElements.cancelButtonCell} ${a.customPromptElements.cancelButtonCellAddOns}`},s.a.createElement("button",{className:`${a.customPromptElements.cancelButton} ${a.customPromptElements.cancelButtonAddOns}`},"Not Now")),s.a.createElement("div",{className:`${a.customPromptElements.installButtonCell} ${a.customPromptElements.installButtonCellAddOns}`},s.a.createElement("button",{className:`${a.customPromptElements.installButton} ${a.customPromptElements.installButtonAddOns}`},"Install"))),s.a.createElement("div",{className:`${a.customPromptElements.guidance} ${a.customPromptElements.guidanceAddOns}`},s.a.createElement("div",{className:`${a.customPromptElements.guidanceImageCell} ${a.customPromptElements.guidanceImageCellAddOns}`}),s.a.createElement("div",{className:`${a.customPromptElements.cancelButtonCell} ${a.customPromptElements.cancelButtonCellAddOns}`},s.a.createElement("button",{className:`${a.customPromptElements.guidanceCancelButton} ${a.customPromptElements.guidanceCancelButtonAddOns}`},"Close"))))}const c=o.a.shape({showClasses:o.a.arrayOf(o.a.string),targetUrl:o.a.string,images:o.a.arrayOf(o.a.shape({src:o.a.string,alt:o.a.string})),action:o.a.shape({ok:o.a.string,cancel:o.a.string,guidanceCancel:o.a.string})});r.propTypes={appId:o.a.string,debug:o.a.string,activateLogging:o.a.bool,startAutomatically:o.a.bool,skipFirstVisit:o.a.bool,minPageViews:o.a.number,startDelay:o.a.number,lifespan:o.a.number,displayPace:o.a.number,mustShowCustomPrompt:o.a.bool,maxDisplayCount:o.a.number,validLocation:o.a.arrayOf(o.a.string),onInit:o.a.func,onShow:o.a.func,onAdd:o.a.func,onInstall:o.a.func,onCancel:o.a.func,showClasses:o.a.arrayOf(o.a.string),showClass:o.a.string,hideClass:o.a.string,customCriteria:o.a.func,customPromptContent:o.a.shape({title:o.a.string,src:o.a.string,cancelMsg:o.a.string,installMsg:o.a.string,guidanceCancelMsg:o.a.string}),customPromptElements:o.a.shape({container:o.a.string,containerAddOns:o.a.string,banner:o.a.string,bannerAddOns:o.a.string,logoCell:o.a.string,logoCellAddOns:o.a.string,logo:o.a.string,logoAddOns:o.a.string,titleCell:o.a.string,titleCellAddOns:o.a.string,title:o.a.string,titleAddOns:o.a.string,cancelButtonCell:o.a.string,cancelButtonCellAddOns:o.a.string,cancelButton:o.a.string,cancelButtonAddOns:o.a.string,installButtonCell:o.a.string,installButtonCellAddOns:o.a.string,installButton:o.a.string,installButtonAddOns:o.a.string,guidance:o.a.string,guidanceAddOns:o.a.string,guidanceImageCell:o.a.string,guidanceImageCellAddOns:o.a.string,guidanceCancelButton:o.a.string,guidanceCancelButtonAddOns:o.a.string}),customPromptPlatformDependencies:o.a.shape({native:c,chromium:c,edge:c,iphone:c,ipad:c,firefox:c,samsung:c,opera:c})}},function(e,t,n){var a=n(6),o=n(7);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};a(o,i);e.exports=o.locals||{}},function(e,t,n){"use strict";var a,o=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function l(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function r(e,t){for(var n={},a=[],o=0;o<e.length;o++){var i=e[o],r=t.base?i[0]+t.base:i[0],c=n[r]||0,d="".concat(r," ").concat(c);n[r]=c+1;var u=l(d),m={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(s[u].references++,s[u].updater(m)):s.push({identifier:d,updater:h(m,t),references:1}),a.push(d)}return a}function c(e){var t=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var o=n.nc;o&&(a.nonce=o)}if(Object.keys(a).forEach((function(e){t.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(t);else{var s=i(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function m(e,t,n,a){var o=n?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function p(e,t,n){var a=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var g=null,f=0;function h(e,t){var n,a,o;if(t.singleton){var i=f++;n=g||(g=c(t)),a=m.bind(null,n,i,!1),o=m.bind(null,n,i,!0)}else n=c(t),a=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=r(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<n.length;a++){var o=l(n[a]);s[o].references--}for(var i=r(e,t),c=0;c<n.length;c++){var d=l(n[c]);0===s[d].references&&(s[d].updater(),s.splice(d,1))}n=i}}}},function(e,t,n){"use strict";n.r(t);var a=n(3),o=n.n(a)()((function(e){return e[1]}));o.push([e.i,".ath-container{background-color:#eeeeee;color:#000000;display:none;position:sticky;width:100%;bottom:0;z-index:1000;padding:2%}@media (min-width: 768px){.ath-container{padding:0.5%;max-width:530px;margin:auto;width:75%}}@media (min-width: 1048px){.ath-container{width:100%;position:fixed;right:0}}.ath-banner{display:grid;grid-template-areas:'logo content' 'cancel install';position:relative;grid-template-columns:1fr 3fr;grid-gap:1em}.ath-banner-cell{align-items:center}.ath-logo-cell{text-align:center;grid-area:logo}.ath-title-cell{align-self:center;grid-area:content}.ath-install-cell{text-align:right;grid-area:install}.ath-install-cell .btn{display:unset}.ath-cancel-cell{grid-area:cancel}.ath-guidance{display:none;grid-template-areas:'cancel' 'image';position:relative}.ath-guidance .ath-cancel-cell{grid-area:cancel;text-align:right}.ath-guidance-image-cell{grid-area:image;text-align:center}.btn-guidance-cancel{cursor:pointer;border:0;padding:2px}.ath-prompt-logo{border-radius:30px;border:1px solid black}.ath-banner-title{font-weight:bold;font-size:large}.d-grid{display:grid !important}.d-none{display:none !important}\n",""]),t.default=o}])}));