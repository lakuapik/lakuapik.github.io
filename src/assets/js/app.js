// all javascript here must be compatible to run on browser

// alpine persist
(()=>{function p(e){e.magic("persist",(t,{interceptor:l})=>{let o,i=localStorage;return l((r,n,s,m,S)=>{let a=o||`_x_${m}`,u=c(a,i)?d(a,i):r;return s(u),e.effect(()=>{let g=n();f(a,g,i),s(g)}),u},r=>{r.as=n=>(o=n,r),r.using=n=>(i=n,r)})})}function c(e,t){return t.getItem(e)!==null}function d(e,t){return JSON.parse(t.getItem(e,t))}function f(e,t,l){l.setItem(e,JSON.stringify(t))}document.addEventListener("alpine:init",()=>{window.Alpine.plugin(p)});})();

// load service worker
if ("serviceWorker" in navigator) navigator.serviceWorker.register('/sw.js', {scope: '/'});
