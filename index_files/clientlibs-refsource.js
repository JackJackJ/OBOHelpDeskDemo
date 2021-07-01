(function(){var d=null;
var b="ref_src";
if(c(b)){d=c(b)
}else{d=document.getElementById("page-props").getAttribute("data-reference-source")
}if(d!=null){a(d)
}function c(e){var f=new RegExp("[?&]"+e+"=([^&#]*)").exec(window.location.search);
return(f!==null)?f[1]||0:false
}function a(g){var f=document.getElementsByTagName("a");
for(var e=0;
e<f.length;
e++){if(f[e].hostname==="twitter.com"){if(f[e].search!==""){f[e].href=f[e].origin+f[e].pathname+f[e].search+"&ref_src="+g+f[e].hash
}else{f[e].href=f[e].origin+f[e].pathname+f[e].search+"?ref_src="+g+f[e].hash
}}}}})();