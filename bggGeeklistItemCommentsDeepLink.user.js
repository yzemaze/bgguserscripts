// ==UserScript==
// @name				bggGeeklistItemCommentsDeepLink
// @description	add links to geeklist item comments to load item plus comment(s) instead of an entire geeklist page
// @namespace		https://github.com/yzemaze/bgguserscripts
// @grant    		none
// @version  		1.0
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