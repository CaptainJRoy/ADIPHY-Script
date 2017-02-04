// ==UserScript==
// @name         ADIPHY Script
// @description  Periodically refreshes Spare5 checking for new tasks for use in background or pinned tabs. Tab icon turns from gray to green when tasks are available.
// @version      17.02.04
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
var Reload_Time = 20000;

switch(location.href) {
    case "http://adiphy.com/":
        document.title = "Script Master!";
        setTimeout(function(){
            var rem = parseInt(document.getElementsByClassName("h-item-value")[0].innerText.split(" ")[0]);
            if(rem == 0) {
                document.title += " DONE";
                setTimeout(function(){
                    document.getElementById("adblock-popup").style = "display: none";
                    window.top.close(); },
                Wait_Time);
            }
            else {
                document.title += " " + rem + " Left";
                checkState();
            }
        }, 1000);
        break;
    default:
        if(location.href.includes("exclusivefacebook")) window.top.close();
        else {
            loopClick();
            titleUpdate();
            switch(document.getElementById("go-submit").innerText) {
                case "15s": Wait_Time -= 1000;
                case "16s": Wait_Time -= 1000;
                default: break;
            }
            setTimeout(function(){ window.top.close(); }, Wait_Time);
        }
        break;
}

function titleUpdate() {
    setTimeout(function(){
        titleUpdate();
        try {
            var s = document.getElementById("go-submit").innerText;
            if(s) document.title = "Script Minion!" + " (" + s + ")";
        } catch (e) { window.top.close(); }
        window.blurred = false;
    }, 500);
}

function checkState() {
    document.getElementById("adblock-popup").style = "display: none";
    document.getElementsByClassName("link-title")[0].click();
    setTimeout(function(){ location.reload(); }, Reload_Time);
}
