/*!
 * JavaScript Cookie v2.1.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
(function(a){if(typeof define==="function"&&define.amd){define(a)
}else{if(typeof exports==="object"){module.exports=a()
}else{var c=window.Cookies;
var b=window.Cookies=a();
b.noConflict=function(){window.Cookies=c;
return b
}
}}}(function(){function b(){var f=0;
var c={};
for(;
f<arguments.length;
f++){var d=arguments[f];
for(var e in d){c[e]=d[e]
}}return c
}function a(d){function c(o,n,k){var r;
if(arguments.length>1){k=b({path:"/"},c.defaults,k);
if(typeof k.expires==="number"){var h=new Date();
h.setMilliseconds(h.getMilliseconds()+k.expires*86400000);
k.expires=h
}try{r=JSON.stringify(n);
if(/^[\{\[]/.test(r)){n=r
}}catch(m){}if(!d.write){n=encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent)
}else{n=d.write(n,o)
}o=encodeURIComponent(String(o));
o=o.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent);
o=o.replace(/[\(\)]/g,escape);
return(document.cookie=[o,"=",n,k.expires&&"; expires="+k.expires.toUTCString(),k.path&&"; path="+k.path,k.domain&&"; domain="+k.domain,k.secure?"; secure":""].join(""))
}if(!o){r={}
}var q=document.cookie?document.cookie.split("; "):[];
var p=/(%[0-9A-Z]{2})+/g;
var l=0;
for(;
l<q.length;
l++){var j=q[l].split("=");
var f=j[0].replace(p,decodeURIComponent);
var g=j.slice(1).join("=");
if(g.charAt(0)==='"'){g=g.slice(1,-1)
}try{g=d.read?d.read(g,f):d(g,f)||g.replace(p,decodeURIComponent);
if(this.json){try{g=JSON.parse(g)
}catch(m){}}if(o===f){r=g;
break
}if(!o){r[f]=g
}}catch(m){}}return r
}c.get=c.set=c;
c.getJSON=function(){return c.apply({json:true},[].slice.call(arguments))
};
c.defaults={};
c.remove=function(f,e){c(f,"",b(e,{expires:-1}))
};
c.withConverter=a;
return c
}return a(function(){})
}));
(function(){var f=document.querySelector("#u12a");
if(!f){return
}var h=365;
var m="1";
var l=[".twitter.com",".twitter.biz",".goglobalwithtwitter.com",".mopub.com",".twtrinc.com"];
var a="/";
var d="is-active";
var j="cookieNoticeOnly";
var i=document.querySelector(".js-eu-countries-list").getAttribute("data-eu-countries-list");
var k=f.dataset.cname;
var g=Cookies.get(k);
var n=document.getElementById("page-props");
var c=Boolean(g===undefined||g==="");
var o=document.getElementById("twGeoLocationRegion");
if(o&&o.dataset.value&&o.dataset.value==="eu"&&c){e()
}else{if(n&&n.dataset.privacyConfig===j&&c){e()
}else{twtrCommon.profile.getProfile().then(function(p){b(p)
},function(p){console.log(p)
})
}}function b(p){if(c&&(p&&i.indexOf(p.geoCountryCode)!==-1)){e()
}}function e(){var r=document.querySelector(".js-eu-cookie-notice");
r.classList.add(d);
u();
var q=r.querySelector(".u12a-eu-cookie-notice__button");
q.addEventListener("click",function(w){w.preventDefault();
t()
},false);
function p(){for(var x=0;
x<l.length;
x++){var w=l[x];
if(window.location.hostname.indexOf(w)===window.location.hostname.length-w.length){return w
}}}function v(){var w=p();
if(w){Cookies.set(k,m,{expires:h,domain:w,path:a})
}}function t(){v();
r.classList.remove(d);
s()
}function u(){var w=document.querySelector("#u12 .u12-data-protection-notice__item--a");
if(w){w.classList.add(d)
}}function s(){var w=document.querySelector("#u12 .u12-data-protection-notice__item--a");
if(w){w.classList.remove(d)
}}setTimeout(v,5000)
}})();
(function(){var e=document.querySelector("#u12b");
if(!e){return
}var h=e.querySelector(".js-accept");
var d=e.querySelector(".js-decline");
var j=e.dataset.cname;
var g=365;
var a=window.location.hostname;
var i="."+a.substring(a.lastIndexOf(".",a.lastIndexOf(".")-1)+1);
var b="/";
var f=Cookies.get(j);
if(f==="Y"){window.twtrPixelOptIn=f
}else{if(f===undefined||f===""){c()
}else{window.twtrPixelOptIn=f
}}function c(){document.querySelector(".u12-data-protection-notice__item--b").classList.remove("is-hidden");
function k(n,m){n.preventDefault();
l(m);
window.twtrPixelOptIn=m;
document.querySelector(".u12-data-protection-notice__item--b").classList.add("is-hidden")
}function l(m){Cookies.set(j,m,{expires:g,domain:i,path:b})
}h.addEventListener("click",function(m){k(m,"Y")
});
d.addEventListener("click",function(m){k(m,"N")
})
}})();