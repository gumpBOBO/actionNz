!function i(o,r,c){function u(t,e){if(!r[t]){if(!o[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(l)return l(t,!0);throw(e=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",e}n=r[t]={exports:{}},o[t][0].call(n.exports,function(e){return u(o[t][1][e]||e)},n,n.exports,i,o,r,c)}return r[t].exports}for(var l="function"==typeof require&&require,e=0;e<c.length;e++)u(c[e]);return u}({1:[function(e,t,n){"use strict";function i(e){this.callback=e,this.ticking=!1}window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame,Fluid.utils={listenScroll:function(e){e=new i(e);return window.addEventListener("scroll",e,!1),e.handleEvent(),e},unlistenScroll:function(e){window.removeEventListener("scroll",e)},scrollToElement:function(e,t){e=jQuery(e).offset();e&&jQuery("html,body").animate({scrollTop:e.top+(t||0),easing:"swing"})},elementVisible:function(e,t){t=t&&0<=t?t:0;var e=e.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight,i=e.top;return 0<=i&&i<=n*(t+1)||i<=0&&i>=-n*t-e.height},waitElementVisible:function(e,n,i){var t="undefined"!=typeof window,o=t&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro|msn)bot|crawl|spider|yand|duckgo/i.test(navigator.userAgent);function r(e){var t;Fluid.utils.elementVisible(e,i)?n():"IntersectionObserver"in window?new IntersectionObserver(function(e,t){e[0].isIntersecting&&(n(),t.disconnect())},{threshold:[0],rootMargin:(window.innerHeight||document.documentElement.clientHeight)*i+"px"}).observe(e):t=Fluid.utils.listenScroll(function(){Fluid.utils.elementVisible(e,i)&&(Fluid.utils.unlistenScroll(t),n())})}t&&!o&&(i=i&&0<=i?i:0,"string"==typeof e?this.waitElementLoaded(e,function(e){r(e)}):r(e))},waitElementLoaded:function(i,o){var e="undefined"!=typeof window,t=e&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro|msn)bot|crawl|spider|yand|duckgo/i.test(navigator.userAgent);e&&!t&&("MutationObserver"in window?new MutationObserver(function(e,t){var n=document.querySelector(i);n&&(o(n),t.disconnect())}).observe(document,{childList:!0,subtree:!0}):document.addEventListener("DOMContentLoaded",function(){(function e(){var t=document.querySelector(i);t?o(t):setTimeout(e,100)})()}))},createScript:function(e,t){var n=document.createElement("script"),e=(n.setAttribute("src",e),n.setAttribute("type","text/javascript"),n.setAttribute("charset","UTF-8"),n.async=!1,"function"==typeof t&&(window.attachEvent?n.onreadystatechange=function(){var e=n.readyState;"loaded"!==e&&"complete"!==e||(n.onreadystatechange=null,t())}:n.onload=t),document.getElementsByTagName("script")),e=0<e.length?e[e.length-1]:document.head||document.documentElement;e.parentNode.insertBefore(n,e.nextSibling)},createCssLink:function(e){var t=document.createElement("link"),e=(t.setAttribute("rel","stylesheet"),t.setAttribute("type","text/css"),t.setAttribute("href",e),document.getElementsByTagName("link")[0]||document.getElementsByTagName("head")[0]||document.head||document.documentElement);e.parentNode.insertBefore(t,e)},loadComments:function(e,t){var n=document.querySelector("#comments[lazyload]");n?Fluid.utils.waitElementVisible(e,function(){t(),n.removeAttribute("lazyload")},CONFIG.lazyload.offset_factor):t()},getBackgroundLightness:function(e){var t=e,e=((t="string"==typeof e?document.querySelector(e):t).ownerDocument.defaultView||window).getComputedStyle(t).backgroundColor.replace(/rgba*\(/,"").replace(")","").split(/,\s*/);return e.length<3?0:0==(t=.213*e[0]+.715*e[1]+.072*e[2])||127.5<t?1:-1}},i.prototype={constructor:i,update:function(){this.callback&&this.callback(),this.ticking=!1},requestTick:function(){this.ticking||(requestAnimationFrame(this.rafCallback||(this.rafCallback=this.update.bind(this))),this.ticking=!0)},handleEvent:function(){this.requestTick()}}},{}]},{},[1]);