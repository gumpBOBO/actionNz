!function i(n,o,a){function u(t,e){if(!o[t]){if(!n[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(c)return c(t,!0);throw(e=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",e}r=o[t]={exports:{}},n[t][0].call(r.exports,function(e){return u(n[t][1][e]||e)},r,r.exports,i,n,o,a)}return o[t].exports}for(var c="function"==typeof require&&require,e=0;e<a.length;e++)u(a[e]);return u}({1:[function(e,t,r){"use strict";function a(e){try{return localStorage.getItem(e)}catch(e){return null}}function i(){var e=getComputedStyle(g).getPropertyValue(h);return"string"==typeof e?e.replace(/["'\s]/g,""):null}function u(){g.setAttribute(m,c());var e=f;try{localStorage.removeItem(e)}catch(e){}}function c(){var e="string"==typeof(e=g.getAttribute(v))?e.replace(/["'\s]/g,""):null;return b[e]||(e=i(),b[e])?e:18<=(e=(new Date).getHours())||0<=e&&e<=6?"dark":"light"}function n(e){var t,e=e||a(f)||c();if(e===c())u();else{if(!b[e])return void u();g.setAttribute(m,e)}var r=e,i=(b[r]&&(t=l("dark"),r&&(t=l(r)),(i=s.querySelector(y))?(i.setAttribute("class","iconfont "+t),i.setAttribute("data",p[r])):Fluid.utils.waitElementLoaded(y,function(){var e=s.querySelector(y);e&&(e.setAttribute("class","iconfont "+t),e.setAttribute("data",p[r]))})),e),n=s.getElementById("highlight-css"),o=s.getElementById("highlight-css-dark"),n=("dark"===i?(o&&o.removeAttribute("disabled"),n&&n.setAttribute("disabled","")):(n&&n.removeAttribute("disabled"),o&&o.setAttribute("disabled","")),setTimeout(function(){s.querySelectorAll(".markdown-body pre").forEach(function(e){var t=0<=Fluid.utils.getBackgroundLightness(e)?"code-widget-light":"code-widget-dark",e=e.querySelector(".code-widget-light, .code-widget-dark");e&&(e.classList.remove("code-widget-light","code-widget-dark"),e.classList.add(t))})},200),e),o=(d.REMARK42&&d.REMARK42.changeTheme(n),d.CUSDIS&&d.CUSDIS.setTheme(n),s.querySelector(".utterances-frame"));o&&(e=d.UtterancesThemeLight,n={type:"set-theme",theme:e="dark"===n?d.UtterancesThemeDark:e},o.contentWindow.postMessage(n,"https://utteranc.es"))}function l(e){return"icon-"+e}function o(){var e=a(f);if(b[e])e=p[e];else{if(null!==e)return;var t=s.querySelector(y);t&&(e=t.getAttribute("data")),t&&b[e]||(e=p[i()])}var t=f,r=e;try{localStorage.setItem(t,r)}catch(e){}return e}var d,s,g,f,h,m,v,y,b,p;d=window,s=document,g=s.documentElement,f="Fluid_Color_Scheme",h="--color-mode",m="data-user-color-scheme",v="data-default-color-scheme",y="#color-toggle-icon",b={dark:!0,light:!0},p={dark:"light",light:"dark"},n(),Fluid.utils.waitElementLoaded(y,function(){n();var t,e=s.querySelector("#color-toggle-btn");e&&(e.addEventListener("click",function(){n(o())}),t=s.querySelector(y))&&(e.addEventListener("mouseenter",function(){var e=t.getAttribute("data");t.classList.replace(l(p[e]),l(e))}),e.addEventListener("mouseleave",function(){var e=t.getAttribute("data");t.classList.replace(l(e),l(p[e]))}))})},{}]},{},[1]);