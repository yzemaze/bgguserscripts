// ==UserScript==
// @name        bggGeeklistItemCommentsDeepLink
// @description add links to geeklist item comments to load item plus comment(s) instead of an entire geeklist page
// @license     GPL-3.0-or-later; https://www.gnu.org/licenses/gpl-3.0.txt
// @homepageURL https://github.com/yzemaze/bgguserscripts
// @supportURL  https://github.com/yzemaze/bgguserscripts/issues
// @downloadURL https://github.com/yzemaze/bgguserscripts/raw/master/bggGeeklistItemCommentsDeepLink.user.js
// @updateURL   https://github.com/yzemaze/bgguserscripts/raw/master/bggGeeklistItemCommentsDeepLink.user.js
// @namespace   https://github.com/yzemaze/bgguserscripts
// @match       https://*.boardgamegeek.com/geeklist/*
// @version     1.3
// @author      yzemaze
// ==/UserScript==

window.addEventListener('load', function() {
  var sel = document.querySelectorAll("a[href*='/listitem/'][href*='#comment']");
  sel.forEach(function(el) {
    var a = document.createElement("a");
    a.appendChild(document.createTextNode(" \u2693"));
    var re = /\/listitem\/([0-9]+.*#comment[0-9]+)/;
    if (el.href.match(re)) {
      a.href = el.href.replace(re, "/geeklist/item/$1");
      el.insertAdjacentElement("afterend", a);
    }
  });
}, false);
