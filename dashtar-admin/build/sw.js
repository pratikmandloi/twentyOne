if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let o={};const u=s=>l(s,n),a={module:{uri:n},exports:o,require:u};e[n]=Promise.all(i.map((s=>a[s]||u(s)))).then((s=>(r(...s),o)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"@/assets/404-0121ecf4.js",revision:null},{url:"@/assets/404-0919f78f.svg",revision:null},{url:"@/assets/AdminServices-04341510.js",revision:null},{url:"@/assets/Attributes-6f048c87.js",revision:null},{url:"@/assets/BulkActionDrawer-7e43914e.js",revision:null},{url:"@/assets/Category-b4b51c15.js",revision:null},{url:"@/assets/CategoryTable-32438c91.js",revision:null},{url:"@/assets/ChildAttributes-6539d891.js",revision:null},{url:"@/assets/ChildCategory-61e356aa.js",revision:null},{url:"@/assets/ComingSoon-fadccaad.js",revision:null},{url:"@/assets/Coupons-8ab8211e.js",revision:null},{url:"@/assets/Currencies-da292d3a.js",revision:null},{url:"@/assets/CustomerOrder-0d36eb08.js",revision:null},{url:"@/assets/Customers-ed09fb77.js",revision:null},{url:"@/assets/Dashboard-bd9987e4.js",revision:null},{url:"@/assets/dateFormate-5f63f880.js",revision:null},{url:"@/assets/dayjs.min-8238a389.js",revision:null},{url:"@/assets/de-8f8ee105.svg",revision:null},{url:"@/assets/EditDeleteButton-4abd9477.js",revision:null},{url:"@/assets/EditProfile-1f932cd7.js",revision:null},{url:"@/assets/forgot-password-office-dark-8bc730dc.js",revision:null},{url:"@/assets/ForgotPassword-40ea4f00.js",revision:null},{url:"@/assets/iconBase-c8e09bc7.js",revision:null},{url:"@/assets/index-4e201d1a.js",revision:null},{url:"@/assets/index-6013083c.js",revision:null},{url:"@/assets/index-c894d726.js",revision:null},{url:"@/assets/index.esm-9ea6d22f.js",revision:null},{url:"@/assets/InputArea-1751f9c9.js",revision:null},{url:"@/assets/Languages-e0bea4fa.js",revision:null},{url:"@/assets/Layout-7b360987.js",revision:null},{url:"@/assets/Loading-225242fc.js",revision:null},{url:"@/assets/Login-3917a00d.js",revision:null},{url:"@/assets/logo-b94d56fb.svg",revision:null},{url:"@/assets/logo-black-cd6dc783.svg",revision:null},{url:"@/assets/logo-color-bfba66ac.svg",revision:null},{url:"@/assets/logo-dark-c3182f9c.svg",revision:null},{url:"@/assets/no-result-62d6ac3a.svg",revision:null},{url:"@/assets/NotFound-40b6c8ae.js",revision:null},{url:"@/assets/OrderInvoice-451db9a7.js",revision:null},{url:"@/assets/Orders-21b5705f.js",revision:null},{url:"@/assets/OrderServices-ecb322c7.js",revision:null},{url:"@/assets/OrderTable-6d4b154c.js",revision:null},{url:"@/assets/ProductDetails-e69f829b.js",revision:null},{url:"@/assets/Products-2b8000ae.js",revision:null},{url:"@/assets/progress-22dc7e07.svg",revision:null},{url:"@/assets/ResetPassword-efd7e470.js",revision:null},{url:"@/assets/SelectRole-8f4c6ae1.js",revision:null},{url:"@/assets/SelectStatus-e33ac50f.js",revision:null},{url:"@/assets/Setting-3668550f.js",revision:null},{url:"@/assets/SignUp-f2508e10.js",revision:null},{url:"@/assets/Staff-fb456035.js",revision:null},{url:"@/assets/Status-2365e4dc.js",revision:null},{url:"@/assets/UploadManyTwo-dcece95f.js",revision:null},{url:"@/assets/us-e5db71b4.svg",revision:null},{url:"@/assets/useAttributeSubmit-8fb65634.js",revision:null},{url:"@/assets/useFilter-1663f56c.js",revision:null},{url:"@/assets/useLoginSubmit-e382ec33.js",revision:null},{url:"@/assets/useStaffSubmit-9baa5b24.js",revision:null},{url:"@/assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"@/assets/xlsx-04f2268f.js",revision:null},{url:"dashtar-admin.png",revision:"bb31262c53ca8c0bda2595391cf117a2"},{url:"favicon.ico",revision:"c92b85a5b907c70211f4ec25e29a8c4a"},{url:"favicon.png",revision:"0033e08ea1185a9ef4ddea787f470df5"},{url:"icon-192x192.png",revision:"47e2812c3e78f1903ccd46f0545f5d48"},{url:"icon-256x256.png",revision:"5cfadd2f4679b3d86f1d994297809226"},{url:"icon-384x384.png",revision:"e793bffd9497800be7d461caa873b96b"},{url:"icon-512x512.png",revision:"b9df59369ad910b5d3e338e9076fd944"},{url:"index.html",revision:"b86d0b4b1e8004dff488d69ff6f65dcd"},{url:"logo-dark.svg",revision:"9dcb0b1f36d4c67b7572061dd98698b5"},{url:"logo-light.svg",revision:"69ff5fe8c10d59974064c059b2cd91cd"},{url:"logo192.png",revision:"33dbdd0177549353eeeb785d02c294af"},{url:"logo512.png",revision:"917515db74ea8d1aee6a246cfbcc0b45"},{url:"offline.html",revision:"61488629359f8a4897dd0f2fe65fc3eb"},{url:"favicon.ico",revision:"c92b85a5b907c70211f4ec25e29a8c4a"},{url:"dashtar-admin.png",revision:"bb31262c53ca8c0bda2595391cf117a2"},{url:"favicon.png",revision:"0033e08ea1185a9ef4ddea787f470df5"},{url:"icon-192x192.png",revision:"47e2812c3e78f1903ccd46f0545f5d48"},{url:"icon-256x256.png",revision:"5cfadd2f4679b3d86f1d994297809226"},{url:"icon-384x384.png",revision:"e793bffd9497800be7d461caa873b96b"},{url:"icon-512x512.png",revision:"b9df59369ad910b5d3e338e9076fd944"},{url:"logo-dark.svg",revision:"9dcb0b1f36d4c67b7572061dd98698b5"},{url:"logo-light.svg",revision:"69ff5fe8c10d59974064c059b2cd91cd"},{url:"logo192.png",revision:"33dbdd0177549353eeeb785d02c294af"},{url:"logo512.png",revision:"917515db74ea8d1aee6a246cfbcc0b45"},{url:"manifest.json",revision:"dcb11abcc9b96ce12d73b722762fa839"},{url:"offline.html",revision:"61488629359f8a4897dd0f2fe65fc3eb"},{url:"robots.txt",revision:"fa1ded1ed7c11438a9b0385b1e112850"},{url:"manifest.webmanifest",revision:"14deac330bb09a229dd3fbaed7ecf2fd"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
