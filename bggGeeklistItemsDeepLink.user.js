// ==UserScript==
// @name				bggGeeklistItemsDeepLink
// @description	add links to geeklist items to load just the item instead of an entire geeklist page
// @namespace		https://github.com/yzemaze/bgguserscripts
// @grant    		none
// @version  		1.0
// @author      yzemaze
// ==/UserScript==

window.addEventListener('load', function() {
  var sel = document.querySelectorAll("a[href*='/geeklist/'][href*='#item']");
  sel.forEach(function(el) {
    var a = document.createElement("a");
    a.appendChild(document.createTextNode(" \u2693"));
    var re = /\/[0-9]+(\/item\/[0-9]+#item[0-9]+)/;
    if (el.href.match(re)) {
      a.href = el.href.replace(re, "$1");
      el.insertAdjacentElement("afterend", a);
    }
  });
}, false);