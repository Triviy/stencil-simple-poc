System.register(["./p-4dc35800.system.js"],(function(e,r){"use strict";var t,n,s,o,i,c;return{setters:[function(e){t=e.p;n=e.w;s=e.d;o=e.N;i=e.a;c=e.b}],execute:function(){var e=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var a=function(){{t.$cssShim$=n.__cssshim}var e=Array.from(s.querySelectorAll("script")).find((function(e){return new RegExp("/"+o+"(\\.esm)?\\.js($|\\?|#)").test(e.src)||e.getAttribute("data-stencil-namespace")===o}));var c=e["data-opts"]||{};if("onbeforeload"in e&&!history.scrollRestoration){return{then:function(){}}}{c.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,n.location.href)).href;{u(c.resourcesUrl,e)}if(!n.customElements){return r.import("./p-077d3a7e.system.js").then((function(){return c}))}}return i(c)};var u=function(r,t){var i=e(o);try{n[i]=new Function("w","return import(w);//"+Math.random())}catch(a){var c=new Map;n[i]=function(e){var o=new URL(e,r).href;var a=c.get(o);if(!a){var u=s.createElement("script");u.type="module";u.crossOrigin=t.crossOrigin;u.src=URL.createObjectURL(new Blob(["import * as m from '"+o+"'; window."+i+".m = m;"],{type:"application/javascript"}));a=new Promise((function(e){u.onload=function(){e(n[i].m);u.remove()}}));c.set(o,a);s.head.appendChild(u)}return a}}};a().then((function(e){return c([["p-60d7eaf8.system",[[1,"my-component",{first:[1],middle:[1],last:[1],hideHello:[32]}]]]],e)}))}}}));