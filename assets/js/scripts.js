!function(){"use strict";$(document).ready(function(){$(window).on("resizeEnd",function(){$(".fullscreen-banner").height($(window).height())}),$(window).resize(function(){this.resizeTO&&clearTimeout(this.resizeTO),this.resizeTO=setTimeout(function(){$(this).trigger("resizeEnd")},300)}).trigger("resize"),function(){function e(){var e=navigator.userAgent.match(/(?:MSIE |Trident\/.*; rv:)(\d+)/);return!!e&&parseInt(e[1],10)}e()&&$("html").addClass("ie"+e())}(),$(".counter-section").on("inview",function(e,i,t,n){i&&($(this).find(".timer").each(function(){var e=$(this);$({Counter:0}).animate({Counter:e.text()},{duration:2e3,easing:"swing",step:function(){e.text(Math.ceil(this.Counter))}})}),$(this).off("inview"))})})}(jQuery);