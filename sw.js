!function(e){var t={};function n(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(s,r,function(t){return e[t]}.bind(null,r));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=3)}([function(e,t,n){"use strict";try{self["workbox:precaching:5.1.4"]&&_()}catch(e){}},function(e,t,n){"use strict";try{self["workbox:core:5.1.4"]&&_()}catch(e){}},function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=2},function(e,t,n){"use strict";n.r(t);n(0);n(1);const s={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},r=e=>[s.prefix,e,s.suffix].filter(e=>e&&e.length>0).join("-"),a=e=>e||r(s.precache),c=(e,...t)=>{let n=e;return t.length>0&&(n+=" :: "+JSON.stringify(t)),n};class o extends Error{constructor(e,t){super(c(e,t)),this.name=e,this.details=t}}const i=new Set;const l=(e,t)=>e.filter(e=>t in e),h=async({request:e,mode:t,plugins:n=[]})=>{const s=l(n,"cacheKeyWillBeUsed");let r=e;for(const e of s)r=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:r}),"string"==typeof r&&(r=new Request(r));return r},u=async({cacheName:e,request:t,event:n,matchOptions:s,plugins:r=[]})=>{const a=await self.caches.open(e),c=await h({plugins:r,request:t,mode:"read"});let o=await a.match(c,s);for(const t of r)if("cachedResponseWillBeUsed"in t){const r=t.cachedResponseWillBeUsed;o=await r.call(t,{cacheName:e,event:n,matchOptions:s,cachedResponse:o,request:c})}return o},f=async({cacheName:e,request:t,response:n,event:s,plugins:r=[],matchOptions:a})=>{const c=await h({plugins:r,request:t,mode:"write"});if(!n)throw new o("cache-put-with-no-response",{url:(f=c.url,new URL(String(f),location.href).href.replace(new RegExp("^"+location.origin),""))});var f;const d=await(async({request:e,response:t,event:n,plugins:s=[]})=>{let r=t,a=!1;for(const t of s)if("cacheWillUpdate"in t){a=!0;const s=t.cacheWillUpdate;if(r=await s.call(t,{request:e,response:r,event:n}),!r)break}return a||(r=r&&200===r.status?r:void 0),r||null})({event:s,plugins:r,response:n,request:c});if(!d)return void 0;const p=await self.caches.open(e),y=l(r,"cacheDidUpdate"),w=y.length>0?await u({cacheName:e,matchOptions:a,request:c}):null;try{await p.put(c,d)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of i)await e()}(),e}for(const t of y)await t.cacheDidUpdate.call(t,{cacheName:e,event:s,oldResponse:w,newResponse:d,request:c})},d=async({request:e,fetchOptions:t,event:n,plugins:s=[]})=>{if("string"==typeof e&&(e=new Request(e)),n instanceof FetchEvent&&n.preloadResponse){const e=await n.preloadResponse;if(e)return e}const r=l(s,"fetchDidFail"),a=r.length>0?e.clone():null;try{for(const t of s)if("requestWillFetch"in t){const s=t.requestWillFetch,r=e.clone();e=await s.call(t,{request:r,event:n})}}catch(e){throw new o("plugin-error-request-will-fetch",{thrownError:e})}const c=e.clone();try{let r;r="navigate"===e.mode?await fetch(e):await fetch(e,t);for(const e of s)"fetchDidSucceed"in e&&(r=await e.fetchDidSucceed.call(e,{event:n,request:c,response:r}));return r}catch(e){0;for(const t of r)await t.fetchDidFail.call(t,{error:e,event:n,originalRequest:a.clone(),request:c.clone()});throw e}};let p;async function y(e,t){const n=e.clone(),s={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=t?t(s):s,a=function(){if(void 0===p){const e=new Response("");if("body"in e)try{new Response(e.body),p=!0}catch(e){p=!1}p=!1}return p}()?n.body:await n.blob();return new Response(a,r)}function w(e){if(!e)throw new o("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:n}=e;if(!n)throw new o("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const s=new URL(n,location.href),r=new URL(n,location.href);return s.searchParams.set("__WB_REVISION__",t),{cacheKey:s.href,url:r.href}}class g{constructor(e){this._cacheName=a(e),this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map}addToCacheList(e){const t=[];for(const n of e){"string"==typeof n?t.push(n):n&&void 0===n.revision&&t.push(n.url);const{cacheKey:e,url:s}=w(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(s)&&this._urlsToCacheKeys.get(s)!==e)throw new o("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(s),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==n.integrity)throw new o("add-to-cache-list-conflicting-integrities",{url:s});this._cacheKeysToIntegrities.set(e,n.integrity)}if(this._urlsToCacheKeys.set(s,e),this._urlsToCacheModes.set(s,r),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}async install({event:e,plugins:t}={}){const n=[],s=[],r=await self.caches.open(this._cacheName),a=await r.keys(),c=new Set(a.map(e=>e.url));for(const[e,t]of this._urlsToCacheKeys)c.has(t)?s.push(e):n.push({cacheKey:t,url:e});const o=n.map(({cacheKey:n,url:s})=>{const r=this._cacheKeysToIntegrities.get(n),a=this._urlsToCacheModes.get(s);return this._addURLToCache({cacheKey:n,cacheMode:a,event:e,integrity:r,plugins:t,url:s})});await Promise.all(o);return{updatedURLs:n.map(e=>e.url),notUpdatedURLs:s}}async activate(){const e=await self.caches.open(this._cacheName),t=await e.keys(),n=new Set(this._urlsToCacheKeys.values()),s=[];for(const r of t)n.has(r.url)||(await e.delete(r),s.push(r.url));return{deletedURLs:s}}async _addURLToCache({cacheKey:e,url:t,cacheMode:n,event:s,plugins:r,integrity:a}){const c=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});let i,l=await d({event:s,plugins:r,request:c});for(const e of r||[])"cacheWillUpdate"in e&&(i=e);if(!(i?await i.cacheWillUpdate({event:s,request:c,response:l}):l.status<400))throw new o("bad-precaching-response",{url:t,status:l.status});l.redirected&&(l=await y(l)),await f({event:s,plugins:r,response:l,request:e===t?c:new Request(e),cacheName:this._cacheName,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,n=this.getCacheKeyForURL(t);if(n){return(await self.caches.open(this._cacheName)).match(n)}}createHandler(e=!0){return async({request:t})=>{try{const e=await this.matchPrecache(t);if(e)return e;throw new o("missing-precache-entry",{cacheName:this._cacheName,url:t instanceof Request?t.url:t})}catch(n){if(e)return fetch(t);throw n}}}createHandlerBoundToURL(e,t=!0){if(!this.getCacheKeyForURL(e))throw new o("non-precached-url",{url:e});const n=this.createHandler(t),s=new Request(e);return()=>n({request:s})}}(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"cf90b83c05e7e4a26aac4f11dcdf2487","url":"01a85c17.a366cc54.js"},{"revision":"a14aebd48e9f5320b429d96ea5eda657","url":"0627f16b.bb1cb03f.js"},{"revision":"22035612eac204124bb715ddd77882ba","url":"1.b9cc0e5b.js"},{"revision":"1be30afefe1ba4750d7fc335b7b830aa","url":"10137f53.0a6f0a79.js"},{"revision":"80e5e9f4eb21cc751ef36d1cc7eb9a26","url":"1638ea00.7dd1a3d2.js"},{"revision":"5160041185ce63b48b927dc6f949fd26","url":"17896441.95d676f9.js"},{"revision":"f89723f63580042d558a54312612d6a9","url":"1be78505.2b806fe4.js"},{"revision":"c3eeab506dd72d1f7d98c94f66fab451","url":"1df93b7f.06f17435.js"},{"revision":"6a06ac090f66284cd5ccb6087283dade","url":"1ebc56d3.58c5fdfe.js"},{"revision":"41dbe82d8e7afc25f554252fd37a1f96","url":"2.572f90b2.js"},{"revision":"aae612f4e4632d8d9d9f7e0f91000c47","url":"207eed83.ddc910c4.js"},{"revision":"57275dbc36bed22e1143cdda3e61e592","url":"3.c9bc017d.js"},{"revision":"2bd9bff11ce5f31655e9478b5c932f04","url":"30a24c52.aa05f359.js"},{"revision":"b2e1a3c1e517fc455e04a9f07e702c53","url":"36.40b39f3e.js"},{"revision":"746e00b7647b2eeec806d5a1e3889580","url":"37.c8ec4372.js"},{"revision":"2cb84982e6f61f7e45e9d820e8e2ca36","url":"38.68aecf86.js"},{"revision":"d3a23904e0075f2c904aea2d524ece43","url":"39.96d1e6b5.js"},{"revision":"42596a2184d51dc91531ca6db64b2837","url":"40.04d30fae.js"},{"revision":"e1732b256cb6b0498e1f3d6ab40e680d","url":"404.html"},{"revision":"fae309d3de94b65113616d50d5cb0196","url":"41.5f0c2ce7.js"},{"revision":"72464fe456d6e9a58706d7ef6f061b5f","url":"42.6aaee914.js"},{"revision":"b2318ffe3988fbb12d15b33b5d9e52a6","url":"43.2a8b2cd3.js"},{"revision":"7bcef9769b0d887dbcc7990d1a8f46f5","url":"60c66209.ce2560ee.js"},{"revision":"754a56f0efed0192817c1b8699f15d7d","url":"6875c492.13e8743a.js"},{"revision":"1d50aa97ccd44402894057295374ba42","url":"6fbfa3c4.84d1336a.js"},{"revision":"548c3046b10dcc57fabf00d41de31e03","url":"935f2afb.5126daf8.js"},{"revision":"0d45492263cfa164ad9ed6a709787f00","url":"9895ff1a.8ea837d9.js"},{"revision":"ba566b67945f1a4a82ba291215b3dd01","url":"a1ee7f70.f676bc9f.js"},{"revision":"a9cbc0e5819bfa2bcd2322ba6eb65116","url":"a6aa9e1f.cb9d4d26.js"},{"revision":"6521233a6ab04dd3da212ae92be65bdb","url":"a7023ddc.92e81be5.js"},{"revision":"fce499012e9c677a827264bc7bad38d5","url":"ad895e75.7fe3dfef.js"},{"revision":"d25415e047c200049a38abb098412215","url":"adf0676f.60f8683c.js"},{"revision":"3df8658047f75559a2804e99d100bfed","url":"b2b675dd.79420313.js"},{"revision":"d75a0c2bc1d3dcf3bc0d0e24a16f17e2","url":"b42c8ea4.7acaf7e0.js"},{"revision":"83e744db3fc149cdd50ae38b56d77053","url":"b6ed391b.28fee833.js"},{"revision":"f88138ae14f2e347bbaee97400781aac","url":"b9f6747f.ab3ac711.js"},{"revision":"6024d1193965de785759b91ba2bdd437","url":"blog/index.html"},{"revision":"d7b539b5f94fae7f56e4d1530e992e9b","url":"blog/tags/hello/index.html"},{"revision":"5f7c3fedc9d22c48153ce1af6830abf9","url":"blog/tags/index.html"},{"revision":"df3cab2e7a392fd39e503b0f327865a1","url":"blog/tags/nuz/index.html"},{"revision":"0ca4da42564c7b7465ff476a3bbd5b2a","url":"blog/welcome/index.html"},{"revision":"a83e784d6896216371f6dc795b40968b","url":"ccc49370.726d9a86.js"},{"revision":"7a1a298800507a4e8f92dcd8f0d4acf1","url":"dc4fd637.179fc6f4.js"},{"revision":"867e13088e115f7c9486d2cb643aa51f","url":"doc1/index.html"},{"revision":"cc1c4aaf248b594b9338fffb7d1caee0","url":"e9236d31.93744329.js"},{"revision":"dc18a62b2c16d362ca058c1c3f686e4c","url":"f7dc5c79.2c28c54a.js"},{"revision":"add9b85165407aba2615f37113d60f94","url":"f9fa61df.285b40d5.js"},{"revision":"a68030ae76afc073c846c01e0c460e06","url":"fab90142.1a57c9d8.js"},{"revision":"a079c5963bed5a17e31b9cb92a15c827","url":"faq/index.html"},{"revision":"c6502b56eca81d3349451a72a4d6e09a","url":"guides/create-new-module/index.html"},{"revision":"77d56be094d5091e496c2b90e0666429","url":"guides/micro-frontends-architecture/index.html"},{"revision":"283be1bad0962ce6557995c82d87042e","url":"guides/publish-a-module/index.html"},{"revision":"37bcb50e78c93182ff01c184f270c613","url":"index.html"},{"revision":"d93acf34cabc11901732217833b07160","url":"introduction/concepts/index.html"},{"revision":"3f6de2c04a179b36ab856fe172db2b18","url":"introduction/getting-started/index.html"},{"revision":"007c1ccefa8f89f0ef121e15368086b2","url":"introduction/motivation/index.html"},{"revision":"bab7a7bcf006c2227f638f0dc2bf40fa","url":"introduction/overview/index.html"},{"revision":"9a9470b7b33fe4d915e338cee1f24ea6","url":"main.3da55922.js"},{"revision":"c18eda68458f26a19fc85e79c9566e23","url":"manifest.json"},{"revision":"6205ed3c5b3b86400e8fe724da3de441","url":"reference/cli/index.html"},{"revision":"1bd2769ecf94dece9189f4d993f173c5","url":"reference/core/index.html"},{"revision":"d32ad0a7caf215c4eff12893e41c1ab3","url":"reference/module/index.html"},{"revision":"a7ba96222fbaeb5a3773df7cbaa039bc","url":"reference/registry/index.html"},{"revision":"c37b4715bb083b7c9d19648afd9122ca","url":"reference/workspaces/index.html"},{"revision":"7ec16ce320f2b34e29411d3235c1822c","url":"runtime~main.9c60c09d.js"},{"revision":"ff2d4ac85b5fd41b2d4cbdba24ca5fdf","url":"search/index.html"},{"revision":"a922ce9483a385b62f58735219bba1c3","url":"services/nuz-registry/index.html"},{"revision":"701f19c3d8cf26d3ca927a722849735a","url":"services/nuz-static/index.html"},{"revision":"c15c416ca1bac7fb962af21a0060971e","url":"styles.a5d02052.js"},{"revision":"3d51c9e5dfd9dfe95a761d32e8a77df4","url":"styles.ff5b680e.css"},{"revision":"beebbc6844f087b658e84633e41d9d79","url":"assets/images/micro-frontends-cover-d5774b685a2065f04614abe9d3b52202.jpg"},{"revision":"0b8c1f8a8f7773202daa35e87f3df6dd","url":"ideal-img/micro-frontends-cover.0b8c1f8.1920.jpg"},{"revision":"198354c1c2b04b21181a13083b4d9b75","url":"ideal-img/micro-frontends-cover.198354c.640.jpg"},{"revision":"2f6f78de6a8d8fb5907c206ef5b6a44f","url":"ideal-img/micro-frontends-cover.2f6f78d.1494.jpg"},{"revision":"50ae034f19f1d82bcfc7a43d9f8840ac","url":"ideal-img/micro-frontends-cover.50ae034.1067.jpg"},{"revision":"c1c7c0ca019cadf91b419160c8eb0fec","url":"images/android-icon-144x144.png"},{"revision":"3cf3cbbd6099be56e091116f917f5034","url":"images/android-icon-192x192.png"},{"revision":"1f15ec1799c9c8931ddc105a3d796364","url":"images/android-icon-36x36.png"},{"revision":"e55ce25f27640e24a6b92bcd0e46751b","url":"images/android-icon-48x48.png"},{"revision":"e731027dc58f057d6334dc3325f6e11a","url":"images/android-icon-72x72.png"},{"revision":"ea0e8db36dd75faa7b367ed33cc46f5a","url":"images/android-icon-96x96.png"},{"revision":"1ff48ec5ee51ff683566ac627141a70d","url":"images/apple-icon-114x114.png"},{"revision":"daec85db58863a18d23996aebdb25693","url":"images/apple-icon-120x120.png"},{"revision":"c1c7c0ca019cadf91b419160c8eb0fec","url":"images/apple-icon-144x144.png"},{"revision":"77ec7029238569a134fca2b84a3b3a76","url":"images/apple-icon-152x152.png"},{"revision":"b7a70abe721ca410cc6546273c5b30fd","url":"images/apple-icon-180x180.png"},{"revision":"d673692599feb0394409a2847661235f","url":"images/apple-icon-57x57.png"},{"revision":"bd1118fa87c08d43f8c3b5aa9d2c5f83","url":"images/apple-icon-60x60.png"},{"revision":"e731027dc58f057d6334dc3325f6e11a","url":"images/apple-icon-72x72.png"},{"revision":"3d25832a54ff57deb8144b9bc9ed0d56","url":"images/apple-icon-76x76.png"},{"revision":"96412e7815cf388b32e0d210397563b8","url":"images/apple-icon-precomposed.png"},{"revision":"96412e7815cf388b32e0d210397563b8","url":"images/apple-icon.png"},{"revision":"9755acf1eae9a1ed51a4f37d6e960348","url":"images/favicon-16x16.png"},{"revision":"ad0b485569fefaeef8dc679ba333c47f","url":"images/favicon-32x32.png"},{"revision":"ea0e8db36dd75faa7b367ed33cc46f5a","url":"images/favicon-96x96.png"},{"revision":"9b0c362be152aeaa14f7456782423a0a","url":"images/favicon.ico"},{"revision":"ef37ea0c7f5f99a05fb825f00692c296","url":"images/logo-320x320.png"},{"revision":"f16b6f91df66720a54932c5a25209f13","url":"images/logo.png"},{"revision":"d53c087dac047796d58516ae09d8082a","url":"images/logo.svg"},{"revision":"c1c7c0ca019cadf91b419160c8eb0fec","url":"images/ms-icon-144x144.png"},{"revision":"f16b6f91df66720a54932c5a25209f13","url":"images/ms-icon-150x150.png"},{"revision":"e423a237df67949945913a73eeb18436","url":"images/ms-icon-310x310.png"},{"revision":"fd21ed0c332702c7843adc1eb707d6cf","url":"images/ms-icon-70x70.png"},{"revision":"beebbc6844f087b658e84633e41d9d79","url":"images/posts/micro-frontends-cover.jpg"},{"revision":"0c77fd43e52c8ed69cd91d36b3d33864","url":"images/thumbnail.png"}],n=new g;e.offlineMode&&n.addToCacheList(t),await async function(e){}(),self.addEventListener("install",e=>{e.waitUntil(n.install())}),self.addEventListener("activate",e=>{e.waitUntil(n.activate())}),self.addEventListener("fetch",async t=>{if(e.offlineMode){const s=t.request.url,r=function(e){const t=[],n=new URL(e,self.location.href);return n.origin!==self.location.origin||(n.search="",n.hash="",t.push(n.href),n.pathname.endsWith("/")?t.push(n.href+"index.html"):t.push(n.href+"/index.html")),t}(s);for(let a=0;a<r.length;a+=1){const c=r[a],o=n.getCacheKeyForURL(c);if(o){e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:s,possibleURL:c,possibleURLs:r,cacheKey:o}),t.respondWith(caches.match(o));break}}}}),self.addEventListener("message",async e=>{"SKIP_WAITING"===(e.data&&e.data.type)&&self.skipWaiting()})})()}]);