!function a(n,o,i){function c(e,t){if(!o[e]){if(!n[e]){var r="function"==typeof require&&require;if(!t&&r)return r(e,!0);if(p)return p(e,!0);throw(t=new Error("Cannot find module '"+e+"'")).code="MODULE_NOT_FOUND",t}r=o[e]={exports:{}},n[e][0].call(r.exports,function(t){return c(n[e][1][t]||t)},r,r.exports,a,n,o,i)}return o[e].exports}for(var p="function"==typeof require&&require,t=0;t<i.length;t++)c(i[t]);return c}({1:[function(t,e,r){"use strict";function a(){return n.apply(this,arguments)}var n;HTMLElement.prototype.wrap=function(t){this.parentNode.insertBefore(t,this),this.parentNode.removeChild(this),t.appendChild(this)},Fluid.plugins={typing:function(t){var e;"Typed"in window&&((e=new window.Typed("#subtitle",{strings:["  ",t+"&nbsp;"],cursorChar:CONFIG.typing.cursorChar,typeSpeed:CONFIG.typing.typeSpeed,loop:CONFIG.typing.loop})).stop(),(t=document.getElementById("subtitle"))&&(t.innerText=""),jQuery(document).ready(function(){e.start()}))},fancyBox:function(t){CONFIG.image_zoom.enable&&"fancybox"in jQuery&&(jQuery(t||".markdown-body :not(a) > img, .markdown-body > img").each(function(){var t,e,r=jQuery(this),a=r.attr("data-src")||r.attr("src")||"",n=(CONFIG.image_zoom.img_url_replace&&(e=(t=CONFIG.image_zoom.img_url_replace)[0]||"",t=t[1]||"",e)&&(a=/^re:/.test(e)?(e=e.replace(/^re:/,""),n=new RegExp(e,"gi"),a.replace(n,t)):a.replace(e,t)),r.wrap('\n        <a class="fancybox fancybox.image" href="'.concat(a,'"\n          itemscope itemtype="http://schema.org/ImageObject" itemprop="url"></a>')).parent("a"));0!==n.length&&(r.is(".group-image-container img")?n.attr("data-fancybox","group").attr("rel","group"):n.attr("data-fancybox","default").attr("rel","default"),e=r.attr("title")||r.attr("alt"))&&n.attr("title",e).attr("data-caption",e)}),jQuery.fancybox.defaults.hash=!1,jQuery(".fancybox").fancybox({loop:!0,helpers:{overlay:{locked:!1}}}))},imageCaption:function(t){CONFIG.image_caption.enable&&jQuery(t||".markdown-body > p > img, .markdown-body > figure > img,\n      .markdown-body > p > a.fancybox, .markdown-body > figure > a.fancybox").each(function(){var t=jQuery(this),e=t.next("figcaption");0!==e.length?e.addClass("image-caption"):(e=t.attr("title")||t.attr("alt"))&&t.after('<figcaption aria-hidden="true" class="image-caption">'.concat(e,"</figcaption>"))})},socialShare:(n=function(){var t=110<(t=jquery('meta[name="description"]').attr("content")||"").length?t.substring(0,110)+"...":t;socialShare(".social-share",{description:t,wechatQrcodeTitle:"微信扫一扫：分享",wechatQrcodeHelper:"<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>"})},a.toString=function(){return n.toString()},a)}},{}]},{},[1]);