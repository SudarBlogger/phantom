//Spoiler
$(document).ready(function(){$("#flippy").click(function(){$("#flippanel").slideToggle("normal")})});
// Youtube Responsive
setTimeout(function(){$(".video-youtube").each(function(){$(this).replaceWith('<iframe class="video-youtube loader" src="'+$(this).data("src")+'" allowfullscreen="allowfullscreen" height="281" width="500"></iframe>')})},5e3);
// Disqus One
!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="//"+disqus_shortname+".disqus.com/blogger_item.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(e)}();
// Link Sumber
!function(e,t){var n="getSelection",o="removeAllRanges",i="addRange",l="parentNode",a="firstChild",d="appendChild",r="removeChild",s="test",c="innerHTML";if(e[n]){var p,g,f,h,u,y;t.addEventListener("copy",function(C){for(g=C.target;3===g.nodeType;)g=g[l];if(h=t.createElement("div"),(p=e[n]())&&p.rangeCount&&(p=p.getRangeAt(0))&&(f=p.cloneRange(),p=p.cloneContents())){for(;u=p[a];)h[d](u);if(!/^(pre|code)$/i[s](g.nodeName||"")&&!/(^|\s)no-attribution(\s|$)/i[s](g.className||"")){var v=e.location.href;h[c]+="<br><br>&copy; "+t.title+'<br>Source: <a href="'+v+'">'+v+"</a>"}y=t.createRange(),t.body[d](h),y.selectNodeContents(h),p=e[n](),p[o](),p[i](y),setTimeout(function(){h[l][r](h),p[o](),p[i](f)})}},!1)}}(window,document);
