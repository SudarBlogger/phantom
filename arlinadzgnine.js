//Spoiler
$(document).ready(function(){$("#flippy").click(function(){$("#flippanel").slideToggle("normal")})});
// Youtube Responsive
setTimeout(function(){$(".video-youtube").each(function(){$(this).replaceWith('<iframe class="video-youtube loader" src="'+$(this).data("src")+'" allowfullscreen="allowfullscreen" height="281" width="500"></iframe>')})},5e3);
// Disqus One
!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="//"+disqus_shortname+".disqus.com/blogger_item.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(e)}();
// Copy Text
function nocopas(){var e=window.getSelection();pagelink=" Read more : "+document.location.href,copytext=e+pagelink,newdiv=document.createElement("div"),newdiv.style.position="absolute",newdiv.style.left="-99999px",document.body.appendChild(newdiv),newdiv.innerHTML=copytext,e.selectAllChildren(newdiv),window.setTimeout(function(){document.body.removeChild(newdiv)},100)}document.addEventListener("copy",nocopas);
