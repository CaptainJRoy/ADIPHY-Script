// ==UserScript==
// @name         ADIPHY Script
// @description  Periodically refreshes Spare5 checking for new tasks for use in background or pinned tabs. Tab icon turns from gray to green when tasks are available.
// @version      17.01.31
// @author       CaptainRoy
// @namespace    https://github.com/CaptainJRoy
// @license      MIT - https://tldrlegal.com/license/mit-license
// @grant        none
// @run-at       document-start
// ==/UserScript==

function loopClick() {
     setTimeout(function(){
        loopClick();
        document.getElementById("go-submit").click();
        window.blurred = false;
     }, 500);
}
