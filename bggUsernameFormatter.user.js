// ==UserScript==
// @name        bggUsernameFormatter
// @description	remove leading @ from usernames
// @license     GPL-3.0-or-later; https://www.gnu.org/licenses/gpl-3.0.txt
// @match       https://*.boardgamegeek.com/thread/*
// @homepageURL https://github.com/yzemaze/bgguserscripts
// @supportURL  https://github.com/yzemaze/bgguserscripts/issues
// @downloadURL https://github.com/yzemaze/bgguserscripts/raw/master/bggUsernameFormatter.user.js
// @updateURL   https://github.com/yzemaze/bgguserscripts/raw/master/bggUsernameFormatter.user.js
// @namespace		https://github.com/yzemaze/bgguserscripts
// @version     1.0
// @author      yzemaze
// ==/UserScript==
window.addEventListener('load', function() {
  var sel = document.querySelectorAll("a.user-display__primary-link, .user-display__secondary-name > a, .user-attribution__primary-name ,.user-attribution__secondary-name");
  sel.forEach(function(el) {
    el.textContent = el.textContent.trim().replace(/^@/, "");
  });
}, false);
