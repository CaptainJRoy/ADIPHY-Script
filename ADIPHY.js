// ==UserScript==
// @name         ADIPHY Script
// @description  Periodically refreshes Spare5 checking for new tasks for use in background or pinned tabs. Tab icon turns from gray to green when tasks are available.
// @version      17.01.31
// @author       CaptainRoy
// @namespace    https://github.com/CaptainJRoy
// @license      MIT - https://tldrlegal.com/license/mit-license
// @match        http*://adiphy.com/*
// @match        http*://soccerjoke.com/*
// @match        http*://dearpig.com/*
// @grant        none
// @require      https://raw.githubusercontent.com/CaptainJRoy/ADIPHY-Script/master/loopClick.js?token=ALAj84zst-S49NOAmMoilHUNK4Yedcrpks5YmkF5wA%3D%3D
// @run-at       document-start
// ==/UserScript==

var Wait_Time = 18000;

document.title = location.href;

if(location.href == "http://adiphy.com/") {
    setTimeout(function(){
        document.getElementById("adblock-popup").style = "display: none";
        document.getElementsByClassName("link-title")[0].click();
    }, 1500);
    setTimeout(function() {
        location.reload();
    }, Wait_Time + 2000);
}
else {
    if(location.href.includes("exclusivefacebook")) window.top.close();

    loopClick();
    setTimeout(function(){ window.top.close(); }, Wait_Time + 1500);
    setTimeout(function(){ moneyIn.play(); }, Wait_Time);
}
