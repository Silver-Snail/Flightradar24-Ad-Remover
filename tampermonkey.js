// ==UserScript==
// @name         Flightradar24 Ad Remover
// @namespace    
// @version      1
// @description  Remove ads from flightradar24.
// @author       Silver-Snail
// @match        https://www.flightradar24.com/*
// @icon         https://www.flightradar24.com/static/favicons/favicon.svg
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let checkCondition = setInterval(function() {
        if (document.querySelector("#app > div > div > div.flex.min-h-full.w-0.flex-1.flex-col.overflow-hidden.bg-white > main > div > div > div > div.absolute.flex.top-12.rounded-xl.mt-4.ml-4.z-40.lg\\:top-0.w-84.overflow-hidden.shadow-default > div > main > div > div.my-4.flex.items-center.justify-center") != null)
        {
            document.querySelector("#app > div > div > div.flex.min-h-full.w-0.flex-1.flex-col.overflow-hidden.bg-white > main > div > div > div > div.absolute.flex.top-12.rounded-xl.mt-4.ml-4.z-40.lg\\:top-0.w-84.overflow-hidden.shadow-default > div > main > div > div.my-4.flex.items-center.justify-center").remove();
        }
        if (document.querySelector("#primisAdContainer") != null)
        {
           document.querySelector("#primisAdContainer").remove();
        }
}, 1000);
})();
