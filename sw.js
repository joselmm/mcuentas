if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,c)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const n=e=>i(e,o),f={module:{uri:o},exports:t,require:n};s[o]=Promise.all(r.map((e=>f[e]||n(e)))).then((e=>(c(...e),t)))}}define(["./workbox-f6ff153b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/bootstrap-icons-999550fa.woff",revision:"3d0ec57f40d62ba6a8e0d1857bb8f7d5"},{url:"assets/bootstrap-icons-cfe45b98.woff2",revision:"a30fb81bd52143bcd4de2898422ac8b9"},{url:"assets/index-15bcac39.js",revision:"2385cfc4b95623a26247f306b8ac6811"},{url:"assets/index-497cc63c.css",revision:"4d8c2dcc173ca43a2d6959bf5b002bae"},{url:"index.html",revision:"1798bcea97fc8f2d21eaf4187bf4b56f"},{url:"manifest.json",revision:"9b26aeaa656534a2bc101e488b621045"},{url:"vite.png",revision:"6669d6d277d4e711ad9ef66ec58a07c3"},{url:"vite.svg",revision:"78b3a94dfd7a4d5bc74d230f0dfe79bd"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
