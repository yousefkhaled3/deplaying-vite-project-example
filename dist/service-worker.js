if(!self.define){let e,s={};const n=(n,r)=>(n=new URL(n+".js",r).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const c=e=>n(e,o),t={module:{uri:o},exports:l,require:c};s[o]=Promise.all(r.map((e=>t[e]||c(e)))).then((e=>(i(...e),l)))}}define(["./workbox-5b385ed2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vue-elment"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.429306d6.css",revision:null},{url:"/css/chunk-vendors.a078eef8.css",revision:null},{url:"/img/category-img-2.4cdf039c.png",revision:null},{url:"/index.html",revision:"19ac7efe5ea951e735f7667859fa027f"},{url:"/js/866.acbb14bc.js",revision:null},{url:"/js/app.d2447732.js",revision:null},{url:"/js/chunk-vendors.d4f8e9f0.js",revision:null},{url:"/manifest.json",revision:"d183351bb8c9296bdb07fa2f241cf5e3"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map