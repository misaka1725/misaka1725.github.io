const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index.C75q6Q3i.js","assets/YunPostList.vue_vue_type_script_setup_true_lang.uu5lMMmp.js","assets/app.CeSRDzgd.js","assets/framework.BVtu4MtS.js","assets/chunks/dayjs.i0BUjmvK.js","assets/chunks/vue-i18n.BgUPG-Ke.js","assets/chunks/pinia.CpydQbsa.js","assets/chunks/@vueuse/motion.D6DPsMOl.js","assets/chunks/nprogress.MTuYNGdb.js","assets/app.CZY-V7D8.css","assets/YunPostMeta.vue_vue_type_style_index_0_lang.Crsb28yB.js","assets/index.B3Ao-t-X.js","assets/animation.B0z9GLGK.js","assets/YunPostMeta.DCrVMfuT.css","assets/post.n8P4bkux.js","assets/YunPostList.BfWGcc9d.css","assets/_...path_.BBSE0NhI.js","assets/404.CQQCcmrx.js","assets/ValaxyMain.vue_vue_type_style_index_0_lang.Ce5oWoNd.js","assets/YunComment.vue_vue_type_style_index_0_lang.l9ZdgIad.js","assets/index.C5okkQwF.js","assets/YunComment.BL40W_Hn.css","assets/YunPageHeader.vue_vue_type_script_setup_true_lang.Qj2rLhdQ.js","assets/ValaxyMain.BHXg_53O.css","assets/index.Br1hPfp9.js","assets/site.CEpSNIg6.js","assets/index.euoHlgb2.js","assets/index.BiBsOq64.js","assets/_page_.4j8JUjLh.js","assets/index.BBFQ7iB3.js","assets/dish.N-PhlQNq.js","assets/live.DiTc7fG8.js","assets/mini-story.BKzW7Ny3.js","assets/origami.0v6O1Oxo.js","assets/ValaxyFootnoteTooltip.vue_vue_type_script_setup_true_lang.BJ0j3ThD.js","assets/publicity.CPI7QqC-.js","assets/video.CMYu8o8d.js","assets/weekpaper_1.vX0VOXDe.js","assets/weekpaper_2.hq1PZ0Jg.js","assets/weekpaper_3.C6T4iyXk.js","assets/index.CMOxyimN.js"])))=>i.map(i=>d[i]);
import{j as q,x as le,u as oe,z as Tt,n as St,e as rt,i as bt,c as j,h as ot,A as Ee,r as It,w as Ot,l as Lt,_ as L}from"../framework.BVtu4MtS.js";var Te=(e,t,n)=>typeof e=="function"?e(t,n):e;/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const W=typeof document<"u";function at(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function kt(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&at(e.default)}const S=Object.assign;function Re(e,t){const n={};for(const r in t){const o=t[r];n[r]=V(o)?o.map(e):e(o)}return n}const ae=()=>{},V=Array.isArray,st=/#/g,Ct=/&/g,xt=/\//g,Nt=/=/g,Dt=/\?/g,it=/\+/g,Vt=/%5B/g,Kt=/%5D/g,ct=/%5E/g,Gt=/%60/g,lt=/%7B/g,jt=/%7C/g,ut=/%7D/g,Mt=/%20/g;function Oe(e){return encodeURI(""+e).replace(jt,"|").replace(Vt,"[").replace(Kt,"]")}function $t(e){return Oe(e).replace(lt,"{").replace(ut,"}").replace(ct,"^")}function Se(e){return Oe(e).replace(it,"%2B").replace(Mt,"+").replace(st,"%23").replace(Ct,"%26").replace(Gt,"`").replace(lt,"{").replace(ut,"}").replace(ct,"^")}function Bt(e){return Se(e).replace(Nt,"%3D")}function Ht(e){return Oe(e).replace(st,"%23").replace(Dt,"%3F")}function zt(e){return e==null?"":Ht(e).replace(xt,"%2F")}function se(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Zt=/\/$/,qt=e=>e.replace(Zt,"");function we(e,t,n="/"){let r,o={},p="",d="";const m=t.indexOf("#");let a=t.indexOf("?");return m<a&&m>=0&&(a=-1),a>-1&&(r=t.slice(0,a),p=t.slice(a+1,m>-1?m:t.length),o=e(p)),m>-1&&(r=r||t.slice(0,m),d=t.slice(m,t.length)),r=Ft(r??t,n),{fullPath:r+(p&&"?")+p+d,path:r,query:o,hash:se(d)}}function Ut(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ke(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Wt(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&Q(t.matched[r],n.matched[o])&&ft(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Q(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ft(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Yt(e[n],t[n]))return!1;return!0}function Yt(e,t){return V(e)?Ge(e,t):V(t)?Ge(t,e):e===t}function Ge(e,t){return V(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Ft(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let p=n.length-1,d,m;for(d=0;d<r.length;d++)if(m=r[d],m!==".")if(m==="..")p>1&&p--;else break;return n.slice(0,p).join("/")+"/"+r.slice(d).join("/")}const $={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var X;(function(e){e.pop="pop",e.push="push"})(X||(X={}));var Z;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Z||(Z={}));const Ae="";function pt(e){if(!e)if(W){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),qt(e)}const Qt=/^[^#]+#/;function dt(e,t){return e.replace(Qt,"#")+t}function Xt(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const pe=()=>({left:window.scrollX,top:window.scrollY});function Jt(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=Xt(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function je(e,t){return(history.state?history.state.position-t:-1)+e}const be=new Map;function en(e,t){be.set(e,t)}function tn(e){const t=be.get(e);return be.delete(e),t}let nn=()=>location.protocol+"//"+location.host;function mt(e,t){const{pathname:n,search:r,hash:o}=t,p=e.indexOf("#");if(p>-1){let m=o.includes(e.slice(p))?e.slice(p).length:1,a=o.slice(m);return a[0]!=="/"&&(a="/"+a),Ke(a,"")}return Ke(n,e)+r+o}function rn(e,t,n,r){let o=[],p=[],d=null;const m=({state:c})=>{const l=mt(e,location),g=n.value,y=t.value;let w=0;if(c){if(n.value=l,t.value=c,d&&d===g){d=null;return}w=y?c.position-y.position:0}else r(l);o.forEach(A=>{A(n.value,g,{delta:w,type:X.pop,direction:w?w>0?Z.forward:Z.back:Z.unknown})})};function a(){d=n.value}function f(c){o.push(c);const l=()=>{const g=o.indexOf(c);g>-1&&o.splice(g,1)};return p.push(l),l}function u(){const{history:c}=window;c.state&&c.replaceState(S({},c.state,{scroll:pe()}),"")}function s(){for(const c of p)c();p=[],window.removeEventListener("popstate",m),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",m),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:a,listen:f,destroy:s}}function Me(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?pe():null}}function on(e){const{history:t,location:n}=window,r={value:mt(e,n)},o={value:t.state};o.value||p(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function p(a,f,u){const s=e.indexOf("#"),c=s>-1?(n.host&&document.querySelector("base")?e:e.slice(s))+a:nn()+e+a;try{t[u?"replaceState":"pushState"](f,"",c),o.value=f}catch(l){console.error(l),n[u?"replace":"assign"](c)}}function d(a,f){const u=S({},t.state,Me(o.value.back,a,o.value.forward,!0),f,{position:o.value.position});p(a,u,!0),r.value=a}function m(a,f){const u=S({},o.value,t.state,{forward:a,scroll:pe()});p(u.current,u,!0);const s=S({},Me(r.value,a,null),{position:u.position+1},f);p(a,s,!1),r.value=a}return{location:r,state:o,push:m,replace:d}}function Gn(e){e=pt(e);const t=on(e),n=rn(e,t.state,t.location,t.replace);function r(p,d=!0){d||n.pauseListeners(),history.go(p)}const o=S({location:"",base:e,go:r,createHref:dt.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function jn(e=""){let t=[],n=[Ae],r=0;e=pt(e);function o(m){r++,r!==n.length&&n.splice(r),n.push(m)}function p(m,a,{direction:f,delta:u}){const s={direction:f,delta:u,type:X.pop};for(const c of t)c(m,a,s)}const d={location:Ae,state:{},base:e,createHref:dt.bind(null,e),replace(m){n.splice(r--,1),o(m)},push(m,a){o(m)},listen(m){return t.push(m),()=>{const a=t.indexOf(m);a>-1&&t.splice(a,1)}},destroy(){t=[],n=[Ae],r=0},go(m,a=!0){const f=this.location,u=m<0?Z.back:Z.forward;r=Math.max(0,Math.min(r+m,n.length-1)),a&&p(this.location,f,{direction:u,delta:m})}};return Object.defineProperty(d,"location",{enumerable:!0,get:()=>n[r]}),d}function an(e){return typeof e=="string"||e&&typeof e=="object"}function ht(e){return typeof e=="string"||typeof e=="symbol"}const gt=Symbol("");var $e;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})($e||($e={}));function J(e,t){return S(new Error,{type:e,[gt]:!0},t)}function G(e,t){return e instanceof Error&&gt in e&&(t==null||!!(e.type&t))}const Be="[^/]+?",sn={sensitive:!1,strict:!1,start:!0,end:!0},cn=/[.+*?^${}()[\]/\\]/g;function ln(e,t){const n=S({},sn,t),r=[];let o=n.start?"^":"";const p=[];for(const f of e){const u=f.length?[]:[90];n.strict&&!f.length&&(o+="/");for(let s=0;s<f.length;s++){const c=f[s];let l=40+(n.sensitive?.25:0);if(c.type===0)s||(o+="/"),o+=c.value.replace(cn,"\\$&"),l+=40;else if(c.type===1){const{value:g,repeatable:y,optional:w,regexp:A}=c;p.push({name:g,repeatable:y,optional:w});const _=A||Be;if(_!==Be){l+=10;try{new RegExp(`(${_})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${g}" (${_}): `+k.message)}}let R=y?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;s||(R=w&&f.length<2?`(?:/${R})`:"/"+R),w&&(R+="?"),o+=R,l+=20,w&&(l+=-8),y&&(l+=-20),_===".*"&&(l+=-50)}u.push(l)}r.push(u)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const d=new RegExp(o,n.sensitive?"":"i");function m(f){const u=f.match(d),s={};if(!u)return null;for(let c=1;c<u.length;c++){const l=u[c]||"",g=p[c-1];s[g.name]=l&&g.repeatable?l.split("/"):l}return s}function a(f){let u="",s=!1;for(const c of e){(!s||!u.endsWith("/"))&&(u+="/"),s=!1;for(const l of c)if(l.type===0)u+=l.value;else if(l.type===1){const{value:g,repeatable:y,optional:w}=l,A=g in f?f[g]:"";if(V(A)&&!y)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const _=V(A)?A.join("/"):A;if(!_)if(w)c.length<2&&(u.endsWith("/")?u=u.slice(0,-1):s=!0);else throw new Error(`Missing required param "${g}"`);u+=_}}return u||"/"}return{re:d,score:r,keys:p,parse:m,stringify:a}}function un(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function vt(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const p=un(r[n],o[n]);if(p)return p;n++}if(Math.abs(o.length-r.length)===1){if(He(r))return 1;if(He(o))return-1}return o.length-r.length}function He(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const fn={type:0,value:""},pn=/[a-zA-Z0-9_]/;function dn(e){if(!e)return[[]];if(e==="/")return[[fn]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(l){throw new Error(`ERR (${n})/"${f}": ${l}`)}let n=0,r=n;const o=[];let p;function d(){p&&o.push(p),p=[]}let m=0,a,f="",u="";function s(){f&&(n===0?p.push({type:0,value:f}):n===1||n===2||n===3?(p.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),p.push({type:1,value:f,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),f="")}function c(){f+=a}for(;m<e.length;){if(a=e[m++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(f&&s(),d()):a===":"?(s(),n=1):c();break;case 4:c(),n=r;break;case 1:a==="("?n=2:pn.test(a)?c():(s(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&m--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:s(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&m--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),s(),d(),o}function mn(e,t,n){const r=ln(dn(e.path),n),o=S(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function hn(e,t){const n=[],r=new Map;t=Ue({strict:!1,end:!0,sensitive:!1},t);function o(s){return r.get(s)}function p(s,c,l){const g=!l,y=Ze(s);y.aliasOf=l&&l.record;const w=Ue(t,s),A=[y];if("alias"in s){const k=typeof s.alias=="string"?[s.alias]:s.alias;for(const C of k)A.push(Ze(S({},y,{components:l?l.record.components:y.components,path:C,aliasOf:l?l.record:y})))}let _,R;for(const k of A){const{path:C}=k;if(c&&C[0]!=="/"){const N=c.record.path,x=N[N.length-1]==="/"?"":"/";k.path=c.record.path+(C&&x+C)}if(_=mn(k,c,w),l?l.alias.push(_):(R=R||_,R!==_&&R.alias.push(_),g&&s.name&&!qe(_)&&d(s.name)),yt(_)&&a(_),y.children){const N=y.children;for(let x=0;x<N.length;x++)p(N[x],_,l&&l.children[x])}l=l||_}return R?()=>{d(R)}:ae}function d(s){if(ht(s)){const c=r.get(s);c&&(r.delete(s),n.splice(n.indexOf(c),1),c.children.forEach(d),c.alias.forEach(d))}else{const c=n.indexOf(s);c>-1&&(n.splice(c,1),s.record.name&&r.delete(s.record.name),s.children.forEach(d),s.alias.forEach(d))}}function m(){return n}function a(s){const c=yn(s,n);n.splice(c,0,s),s.record.name&&!qe(s)&&r.set(s.record.name,s)}function f(s,c){let l,g={},y,w;if("name"in s&&s.name){if(l=r.get(s.name),!l)throw J(1,{location:s});w=l.record.name,g=S(ze(c.params,l.keys.filter(R=>!R.optional).concat(l.parent?l.parent.keys.filter(R=>R.optional):[]).map(R=>R.name)),s.params&&ze(s.params,l.keys.map(R=>R.name))),y=l.stringify(g)}else if(s.path!=null)y=s.path,l=n.find(R=>R.re.test(y)),l&&(g=l.parse(y),w=l.record.name);else{if(l=c.name?r.get(c.name):n.find(R=>R.re.test(c.path)),!l)throw J(1,{location:s,currentLocation:c});w=l.record.name,g=S({},c.params,s.params),y=l.stringify(g)}const A=[];let _=l;for(;_;)A.unshift(_.record),_=_.parent;return{name:w,path:y,params:g,matched:A,meta:vn(A)}}e.forEach(s=>p(s));function u(){n.length=0,r.clear()}return{addRoute:p,resolve:f,removeRoute:d,clearRoutes:u,getRoutes:m,getRecordMatcher:o}}function ze(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Ze(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:gn(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function gn(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function qe(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function vn(e){return e.reduce((t,n)=>S(t,n.meta),{})}function Ue(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function yn(e,t){let n=0,r=t.length;for(;n!==r;){const p=n+r>>1;vt(e,t[p])<0?r=p:n=p+1}const o=_n(e);return o&&(r=t.lastIndexOf(o,r-1)),r}function _n(e){let t=e;for(;t=t.parent;)if(yt(t)&&vt(e,t)===0)return t}function yt({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function En(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const p=r[o].replace(it," "),d=p.indexOf("="),m=se(d<0?p:p.slice(0,d)),a=d<0?null:se(p.slice(d+1));if(m in t){let f=t[m];V(f)||(f=t[m]=[f]),f.push(a)}else t[m]=a}return t}function We(e){let t="";for(let n in e){const r=e[n];if(n=Bt(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(V(r)?r.map(p=>p&&Se(p)):[r&&Se(r)]).forEach(p=>{p!==void 0&&(t+=(t.length?"&":"")+n,p!=null&&(t+="="+p))})}return t}function Rn(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=V(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const wn=Symbol(""),Ye=Symbol(""),de=Symbol(""),Le=Symbol(""),Ie=Symbol("");function ne(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function H(e,t,n,r,o,p=d=>d()){const d=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((m,a)=>{const f=c=>{c===!1?a(J(4,{from:n,to:t})):c instanceof Error?a(c):an(c)?a(J(2,{from:t,to:c})):(d&&r.enterCallbacks[o]===d&&typeof c=="function"&&d.push(c),m())},u=p(()=>e.call(r&&r.instances[o],t,n,f));let s=Promise.resolve(u);e.length<3&&(s=s.then(f)),s.catch(c=>a(c))})}function Pe(e,t,n,r,o=p=>p()){const p=[];for(const d of e)for(const m in d.components){let a=d.components[m];if(!(t!=="beforeRouteEnter"&&!d.instances[m]))if(at(a)){const u=(a.__vccOpts||a)[t];u&&p.push(H(u,n,r,d,m,o))}else{let f=a();p.push(()=>f.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${m}" at "${d.path}"`);const s=kt(u)?u.default:u;d.mods[m]=u,d.components[m]=s;const l=(s.__vccOpts||s)[t];return l&&H(l,n,r,d,m,o)()}))}}return p}function Fe(e){const t=q(de),n=q(Le),r=j(()=>{const a=oe(e.to);return t.resolve(a)}),o=j(()=>{const{matched:a}=r.value,{length:f}=a,u=a[f-1],s=n.matched;if(!u||!s.length)return-1;const c=s.findIndex(Q.bind(null,u));if(c>-1)return c;const l=Qe(a[f-2]);return f>1&&Qe(u)===l&&s[s.length-1].path!==l?s.findIndex(Q.bind(null,a[f-2])):c}),p=j(()=>o.value>-1&&bn(n.params,r.value.params)),d=j(()=>o.value>-1&&o.value===n.matched.length-1&&ft(n.params,r.value.params));function m(a={}){if(Sn(a)){const f=t[oe(e.replace)?"replace":"push"](oe(e.to)).catch(ae);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>f),f}return Promise.resolve()}return{route:r,href:j(()=>r.value.href),isActive:p,isExactActive:d,navigate:m}}function An(e){return e.length===1?e[0]:e}const Pn=rt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Fe,setup(e,{slots:t}){const n=bt(Fe(e)),{options:r}=q(de),o=j(()=>({[Xe(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Xe(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const p=t.default&&An(t.default(n));return e.custom?p:ot("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},p)}}}),Tn=Pn;function Sn(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function bn(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!V(o)||o.length!==r.length||r.some((p,d)=>p!==o[d]))return!1}return!0}function Qe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Xe=(e,t,n)=>e??t??n,In=rt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=q(Ie),o=j(()=>e.route||r.value),p=q(Ye,0),d=j(()=>{let f=oe(p);const{matched:u}=o.value;let s;for(;(s=u[f])&&!s.components;)f++;return f}),m=j(()=>o.value.matched[d.value]);Ee(Ye,j(()=>d.value+1)),Ee(wn,m),Ee(Ie,o);const a=It();return Ot(()=>[a.value,m.value,e.name],([f,u,s],[c,l,g])=>{u&&(u.instances[s]=f,l&&l!==u&&f&&f===c&&(u.leaveGuards.size||(u.leaveGuards=l.leaveGuards),u.updateGuards.size||(u.updateGuards=l.updateGuards))),f&&u&&(!l||!Q(u,l)||!c)&&(u.enterCallbacks[s]||[]).forEach(y=>y(f))},{flush:"post"}),()=>{const f=o.value,u=e.name,s=m.value,c=s&&s.components[u];if(!c)return Je(n.default,{Component:c,route:f});const l=s.props[u],g=l?l===!0?f.params:typeof l=="function"?l(f):l:null,w=ot(c,S({},g,t,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(s.instances[u]=null)},ref:a}));return Je(n.default,{Component:w,route:f})||w}}});function Je(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const On=In;function Mn(e){const t=hn(e.routes,e),n=e.parseQuery||En,r=e.stringifyQuery||We,o=e.history,p=ne(),d=ne(),m=ne(),a=le($);let f=$;W&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Re.bind(null,i=>""+i),s=Re.bind(null,zt),c=Re.bind(null,se);function l(i,v){let h,E;return ht(i)?(h=t.getRecordMatcher(i),E=v):E=i,t.addRoute(E,h)}function g(i){const v=t.getRecordMatcher(i);v&&t.removeRoute(v)}function y(){return t.getRoutes().map(i=>i.record)}function w(i){return!!t.getRecordMatcher(i)}function A(i,v){if(v=S({},v||a.value),typeof i=="string"){const P=we(n,i,v.path),O=t.resolve({path:P.path},v),te=o.createHref(P.fullPath);return S(P,O,{params:c(O.params),hash:se(P.hash),redirectedFrom:void 0,href:te})}let h;if(i.path!=null)h=S({},i,{path:we(n,i.path,v.path).path});else{const P=S({},i.params);for(const O in P)P[O]==null&&delete P[O];h=S({},i,{params:s(P)}),v.params=s(v.params)}const E=t.resolve(h,v),b=i.hash||"";E.params=u(c(E.params));const I=Ut(r,S({},i,{hash:$t(b),path:E.path})),T=o.createHref(I);return S({fullPath:I,hash:b,query:r===We?Rn(i.query):i.query||{}},E,{redirectedFrom:void 0,href:T})}function _(i){return typeof i=="string"?we(n,i,a.value.path):S({},i)}function R(i,v){if(f!==i)return J(8,{from:v,to:i})}function k(i){return x(i)}function C(i){return k(S(_(i),{replace:!0}))}function N(i){const v=i.matched[i.matched.length-1];if(v&&v.redirect){const{redirect:h}=v;let E=typeof h=="function"?h(i):h;return typeof E=="string"&&(E=E.includes("?")||E.includes("#")?E=_(E):{path:E},E.params={}),S({query:i.query,hash:i.hash,params:E.path!=null?{}:i.params},E)}}function x(i,v){const h=f=A(i),E=a.value,b=i.state,I=i.force,T=i.replace===!0,P=N(h);if(P)return x(S(_(P),{state:typeof P=="object"?S({},b,P.state):b,force:I,replace:T}),v||h);const O=h;O.redirectedFrom=v;let te;return!I&&Wt(r,E,h)&&(te=J(16,{to:O,from:E}),De(E,E,!0,!1)),(te?Promise.resolve(te):ke(O,E)).catch(D=>G(D)?G(D,2)?D:ve(D):ge(D,O,E)).then(D=>{if(D){if(G(D,2))return x(S({replace:T},_(D.to),{state:typeof D.to=="object"?S({},b,D.to.state):b,force:I}),v||O)}else D=xe(O,E,!0,T,b);return Ce(O,E,D),D})}function M(i,v){const h=R(i,v);return h?Promise.reject(h):Promise.resolve()}function me(i){const v=ce.values().next().value;return v&&typeof v.runWithContext=="function"?v.runWithContext(i):i()}function ke(i,v){let h;const[E,b,I]=Ln(i,v);h=Pe(E.reverse(),"beforeRouteLeave",i,v);for(const P of E)P.leaveGuards.forEach(O=>{h.push(H(O,i,v))});const T=M.bind(null,i,v);return h.push(T),U(h).then(()=>{h=[];for(const P of p.list())h.push(H(P,i,v));return h.push(T),U(h)}).then(()=>{h=Pe(b,"beforeRouteUpdate",i,v);for(const P of b)P.updateGuards.forEach(O=>{h.push(H(O,i,v))});return h.push(T),U(h)}).then(()=>{h=[];for(const P of I)if(P.beforeEnter)if(V(P.beforeEnter))for(const O of P.beforeEnter)h.push(H(O,i,v));else h.push(H(P.beforeEnter,i,v));return h.push(T),U(h)}).then(()=>(i.matched.forEach(P=>P.enterCallbacks={}),h=Pe(I,"beforeRouteEnter",i,v,me),h.push(T),U(h))).then(()=>{h=[];for(const P of d.list())h.push(H(P,i,v));return h.push(T),U(h)}).catch(P=>G(P,8)?P:Promise.reject(P))}function Ce(i,v,h){m.list().forEach(E=>me(()=>E(i,v,h)))}function xe(i,v,h,E,b){const I=R(i,v);if(I)return I;const T=v===$,P=W?history.state:{};h&&(E||T?o.replace(i.fullPath,S({scroll:T&&P&&P.scroll},b)):o.push(i.fullPath,b)),a.value=i,De(i,v,h,T),ve()}let ee;function At(){ee||(ee=o.listen((i,v,h)=>{if(!Ve.listening)return;const E=A(i),b=N(E);if(b){x(S(b,{replace:!0,force:!0}),E).catch(ae);return}f=E;const I=a.value;W&&en(je(I.fullPath,h.delta),pe()),ke(E,I).catch(T=>G(T,12)?T:G(T,2)?(x(S(_(T.to),{force:!0}),E).then(P=>{G(P,20)&&!h.delta&&h.type===X.pop&&o.go(-1,!1)}).catch(ae),Promise.reject()):(h.delta&&o.go(-h.delta,!1),ge(T,E,I))).then(T=>{T=T||xe(E,I,!1),T&&(h.delta&&!G(T,8)?o.go(-h.delta,!1):h.type===X.pop&&G(T,20)&&o.go(-1,!1)),Ce(E,I,T)}).catch(ae)}))}let he=ne(),Ne=ne(),ie;function ge(i,v,h){ve(i);const E=Ne.list();return E.length?E.forEach(b=>b(i,v,h)):console.error(i),Promise.reject(i)}function Pt(){return ie&&a.value!==$?Promise.resolve():new Promise((i,v)=>{he.add([i,v])})}function ve(i){return ie||(ie=!i,At(),he.list().forEach(([v,h])=>i?h(i):v()),he.reset()),i}function De(i,v,h,E){const{scrollBehavior:b}=e;if(!W||!b)return Promise.resolve();const I=!h&&tn(je(i.fullPath,0))||(E||!h)&&history.state&&history.state.scroll||null;return St().then(()=>b(i,v,I)).then(T=>T&&Jt(T)).catch(T=>ge(T,i,v))}const ye=i=>o.go(i);let _e;const ce=new Set,Ve={currentRoute:a,listening:!0,addRoute:l,removeRoute:g,clearRoutes:t.clearRoutes,hasRoute:w,getRoutes:y,resolve:A,options:e,push:k,replace:C,go:ye,back:()=>ye(-1),forward:()=>ye(1),beforeEach:p.add,beforeResolve:d.add,afterEach:m.add,onError:Ne.add,isReady:Pt,install(i){const v=this;i.component("RouterLink",Tn),i.component("RouterView",On),i.config.globalProperties.$router=v,Object.defineProperty(i.config.globalProperties,"$route",{enumerable:!0,get:()=>oe(a)}),W&&!_e&&a.value===$&&(_e=!0,k(o.location).catch(b=>{}));const h={};for(const b in $)Object.defineProperty(h,b,{get:()=>a.value[b],enumerable:!0});i.provide(de,v),i.provide(Le,Tt(h)),i.provide(Ie,a);const E=i.unmount;ce.add(i),i.unmount=function(){ce.delete(i),ce.size<1&&(f=$,ee&&ee(),ee=null,a.value=$,_e=!1,ie=!1),E()}}};function U(i){return i.reduce((v,h)=>v.then(()=>me(h)),Promise.resolve())}return Ve}function Ln(e,t){const n=[],r=[],o=[],p=Math.max(t.matched.length,e.matched.length);for(let d=0;d<p;d++){const m=t.matched[d];m&&(e.matched.find(f=>Q(f,m))?r.push(m):n.push(m));const a=e.matched[d];a&&(t.matched.find(f=>Q(f,a))||o.push(a))}return[n,r,o]}function kn(){return q(de)}function Cn(e){return q(Le)}var K=Symbol("loaders"),F=Symbol("loaderEntries"),_t=Symbol(),B=Symbol(),z=Symbol(),fe=Symbol(),re=Symbol(),ue=Symbol(),Et=Symbol();function et(e){return e&&e[_t]}var Rt;function tt(){return Rt||[]}function Y(e){Rt=e&&e.length?e:null}var xn=Object.assign;function Nn({router:e,app:t,effect:n,isSSR:r,errors:o=[],selectNavigationResult:p=d=>d[0].value}){if(e[F]!=null)return()=>{};e[F]=new WeakMap,e[fe]=t,e[Et]=!!r;const d=e.beforeEach(u=>{var c;e[B]&&((c=e[B].meta[re])==null||c.abort()),e[B]=u,u.meta[K]=new Set,u.meta[re]=new AbortController,u.meta[ue]=[];const s=[];for(const l of u.matched)if(!l.meta[K]){l.meta[K]=new Set(l.meta.loaders||[]);for(const g in l.components){const y=l.components[g],w=(Dn(y)?y():Promise.resolve(y)).then(A=>{if(typeof A!="function"){for(const _ in A){const R=A[_];et(R)&&l.meta[K].add(R)}if(Array.isArray(A.__loaders))for(const _ of A.__loaders)et(_)&&l.meta[K].add(_)}});s.push(w)}}return Promise.all(s).then(()=>{for(const l of u.matched)for(const g of l.meta[K])u.meta[K].add(g)})}),m=e.beforeResolve((u,s)=>{const c=Array.from(u.meta[K]);return Y([]),Promise.all(c.map(l=>{const{server:g,lazy:y,errors:w}=l._.options;if(!g&&r)return;const A=n.run(()=>t.runWithContext(()=>l._.load(u,e,s)));return!r&&Te(y,u,s)?void 0:A.catch(_=>{if(!w)throw _;if(w===!0){if(Array.isArray(o)?o.some(R=>_ instanceof R):o(_))return}else if(Array.isArray(w)?w.some(R=>_ instanceof R):w(_))return;throw _})})).then(()=>{if(u.meta[ue].length)return p(u.meta[ue])}).catch(l=>l instanceof wt?l.value:Promise.reject(l)).finally(()=>{Y([])})}),a=e.afterEach((u,s,c)=>{var l;if(c){if((l=u.meta[re])==null||l.abort(c),G(c,16))for(const g of u.meta[K])g._.getEntry(e).resetPending()}else for(const g of u.meta[K]){const{commit:y,lazy:w}=g._.options;if(y==="after-load"){const A=g._.getEntry(e);A&&(!Te(w,u,s)||!A.isLoading.value)&&A.commit(u)}}e[B]===u&&(e[B]=null)}),f=e.onError((u,s)=>{var c;(c=s.meta[re])==null||c.abort(u),e[B]===s&&(e[B]=null)});return()=>{delete e[F],delete e[fe],d(),m(),a(),f()}}function Dn(e){return typeof e=="function"&&!("displayName"in e)&&!("props"in e)&&!("emits"in e)&&!("__vccOpts"in e)}var wt=class{constructor(e){this.value=e}};function $n(e,t){const n=Lt(!0),r=Nn(xn({app:e,effect:n},t)),{unmount:o}=e;e.unmount=()=>{n.stop(),r(),o.call(e)}}const Bn=[{path:"/",name:"/",component:()=>L(()=>import("../index.C75q6Q3i.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])),meta:{layout:"home",frontmatter:{time_warning:15552e6}}},{path:"/:path(.*)",name:"/[...path]",component:()=>L(()=>import("../_...path_.BBSE0NhI.js"),__vite__mapDeps([16,3])),meta:{layout:404,frontmatter:{time_warning:15552e6}}},{path:"/404",name:"/404",component:()=>L(()=>import("../404.CQQCcmrx.js"),__vite__mapDeps([17,18,2,3,4,5,6,7,8,9,19,20,21,22,14,23])),meta:{frontmatter:{time_warning:15552e6,layout:404,date:"2025-01-08T07:55:28.762Z",updated:"2025-01-08T07:55:28.762Z"},excerpt:"",layout:404}},{path:"/about",children:[{path:"",name:"/about/",component:()=>L(()=>import("../index.Br1hPfp9.js"),__vite__mapDeps([24,18,2,3,4,5,6,7,8,9,19,20,21,22,14,23])),meta:{frontmatter:{time_warning:15552e6,date:"2025-01-08T07:55:28.762Z",updated:"2025-01-08T07:55:28.762Z"},excerpt:""}},{path:"site",name:"/about/site",component:()=>L(()=>import("../site.CEpSNIg6.js"),__vite__mapDeps([25,18,2,3,4,5,6,7,8,9,19,20,21,22,14,23])),meta:{frontmatter:{time_warning:15552e6,title:"请填满这只萝莉吧...",date:"2025-01-08T07:55:28.762Z",updated:"2025-01-08T07:55:28.762Z"},excerpt:""}}],meta:{frontmatter:{time_warning:15552e6}}},{path:"/archives",children:[{path:"",name:"/archives/",component:()=>L(()=>import("../index.euoHlgb2.js"),__vite__mapDeps([26,18,2,3,4,5,6,7,8,9,19,20,21,22,14,23])),meta:{frontmatter:{time_warning:15552e6,layout:"archives",nav:!1,comment:!1,date:"2025-01-08T07:55:28.762Z",updated:"2025-01-08T07:55:28.762Z"},excerpt:"",layout:"archives"}}],meta:{frontmatter:{time_warning:15552e6}}},{path:"/categories",children:[{path:"",name:"/categories/",component:()=>L(()=>import("../index.BiBsOq64.js"),__vite__mapDeps([27,18,2,3,4,5,6,7,8,9,19,20,21,22,14,23])),meta:{frontmatter:{time_warning:15552e6,layout:"categories",nav:!1,toc:!1,icon:"i-ri-folder-2-line",date:"2025-01-08T07:55:28.762Z",updated:"2025-01-08T07:55:28.762Z"},excerpt:"",layout:"categories"}}],meta:{frontmatter:{time_warning:15552e6}}},{path:"/page",children:[{path:":page",name:"/page/[page]",component:()=>L(()=>import("../_page_.4j8JUjLh.js"),__vite__mapDeps([28,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])),meta:{frontmatter:{time_warning:15552e6}}}],meta:{frontmatter:{time_warning:15552e6},layout:"home"}},{path:"/posts",children:[{path:"",name:"/posts/",component:()=>L(()=>import("../index.BBFQ7iB3.js"),__vite__mapDeps([29,2,3,4,5,6,7,8,9,1,10,11,12,13,14,15])),meta:{frontmatter:{time_warning:15552e6},layout:"posts"}},{path:"dish",name:"/posts/dish",component:()=>L(()=>import("../dish.N-PhlQNq.js"),__vite__mapDeps([30,18,2,3,4,5,6,7,8,9,19,20,21,22,14,23])),meta:{frontmatter:{time_warning:15552e6,layout:"post",title:"【ATRI&GINKA拜年祭】料理征集活动！",tags:["活动介绍","ATRI&GINKA","料理","拜年祭"],categories:"拜年祭活动",date:"2025-01-03 00:01:30",cover:"/img/dish/cover.avif",top:4,updated:"2025-01-08T07:55:28.763Z"},layout:"post",excerpt:""}},{path:"live",name:"/posts/live",component:()=>L(()=>import("../live.DiTc7fG8.js"),__vite__mapDeps([31,18,2,3,4,5,6,7,8,9,19,20,21,22,14,23])),meta:{frontmatter:{time_warning:15552e6,layout:"post",title:"上届拜年祭直播回放及作品合集",tags:["ATRI&GINKA","拜年祭"],categories:"拜年祭活动",date:"2025-01-03 15:39:28",cover:"/img/live/cover.avif",top:2,updated:"2025-01-08T07:55:28.763Z"},layout:"post",excerpt:""}},{path:"mini-story",name:"/posts/mini-story",component:()=>L(()=>import("../mini-story.BKzW7Ny3.js"),__vite__mapDeps([32,18,2,3,4,5,6,7,8,9,19,20,21,22,14,23])),meta:{frontmatter:{time_warning:15552e6,layout:"post",title:"【ATRI&GINKA拜年祭】剧场小故事",tags:["ATRI&GINKA","拜年祭","剧场故事"],categories:"拜年祭活动",date:"2025-01-03 00:01:29",cover:"/img/mini-story/cover.avif",top:1,updated:"2025-01-08T07:55:28.763Z"},layout:"post",excerpt:""}},{path:"origami",name:"/posts/origami",component:()=>L(()=>import("../origami.0v6O1Oxo.js"),__vite__mapDeps([33,18,2,3,4,5,6,7,8,9,19,20,21,22,14,23,34])),meta:{frontmatter:{time_warning:15552e6,layout:"post",title:"祭神纸偶——纸片上的心愿，折纸抽奖小活动！",tags:["GINKA","手工","折纸","拜年祭"],categories:"拜年祭活动",cover:"/img/origami/cover.avif",date:"2025-01-08 06:05:04",top:3,updated:"2025-01-08T07:55:28.763Z"},layout:"post",excerpt:""}},{path:"publicity",name:"/posts/publicity",component:()=>L(()=>import("../publicity.CPI7QqC-.js"),__vite__mapDeps([35,18,2,3,4,5,6,7,8,9,19,20,21,22,14,23,34])),meta:{frontmatter:{time_warning:15552e6,layout:"post",title:"【招人宣传】冬夏凝思——2025 ATRI & GINKA 拜年祭企划",tags:["活动介绍","ATRI&GINKA","拜年祭"],categories:"拜年祭活动",date:"2025-01-03 16:09:33",cover:"/img/publicity/cover.avif",top:5,updated:"2025-01-08T07:55:28.763Z"},layout:"post",excerpt:""}},{path:"video",name:"/posts/video",component:()=>L(()=>import("../video.CMYu8o8d.js"),__vite__mapDeps([36,18,2,3,4,5,6,7,8,9,19,20,21,22,14,23])),meta:{frontmatter:{time_warning:15552e6,layout:"post",title:"【ATRI&GINKA拜年祭】宣传视频一览",tags:["活动介绍","ATRI&GINKA","拜年祭","宣传视频"],categories:"拜年祭活动",date:"2025-01-03 14:44:28",cover:"/img/video/cover.avif",top:3,updated:"2025-01-08T07:55:28.763Z"},layout:"post",excerpt:""}},{path:"weekpaper",children:[{path:"weekpaper_1",name:"/posts/weekpaper/weekpaper_1",component:()=>L(()=>import("../weekpaper_1.vX0VOXDe.js"),__vite__mapDeps([37,18,2,3,4,5,6,7,8,9,19,20,21,22,14,23])),meta:{frontmatter:{time_warning:15552e6,layout:"post",title:"作品推荐周报第一期！",tags:["ATRI&GINKA","作品推荐"],categories:"同人创作",date:"2025-01-02 00:01:28",cover:"/img/weekpaper/1/cover.avif",updated:"2025-01-08T07:55:28.763Z"},layout:"post",excerpt:""}},{path:"weekpaper_2",name:"/posts/weekpaper/weekpaper_2",component:()=>L(()=>import("../weekpaper_2.hq1PZ0Jg.js"),__vite__mapDeps([38,18,2,3,4,5,6,7,8,9,19,20,21,22,14,23])),meta:{frontmatter:{time_warning:15552e6,layout:"post",title:"作品推荐周报第二期！",tags:["ATRI&GINKA","作品推荐"],categories:"同人创作",date:"2025-01-03 00:01:28",cover:"/img/weekpaper/2/cover.avif",updated:"2025-01-08T07:55:28.763Z"},layout:"post",excerpt:""}},{path:"weekpaper_3",name:"/posts/weekpaper/weekpaper_3",component:()=>L(()=>import("../weekpaper_3.C6T4iyXk.js"),__vite__mapDeps([39,18,2,3,4,5,6,7,8,9,19,20,21,22,14,23])),meta:{frontmatter:{time_warning:15552e6,layout:"post",title:"作品推荐周报第三期！",tags:["ATRI&GINKA","作品推荐"],categories:"同人创作",date:"2025-01-04 00:15:36",cover:"/img/weekpaper/3/cover.avif",updated:"2025-01-08T07:55:28.763Z"},layout:"post",excerpt:""}}],meta:{frontmatter:{time_warning:15552e6}}}],meta:{frontmatter:{time_warning:15552e6},layout:"posts"}},{path:"/tags",children:[{path:"",name:"/tags/",component:()=>L(()=>import("../index.CMOxyimN.js"),__vite__mapDeps([40,18,2,3,4,5,6,7,8,9,19,20,21,22,14,23])),meta:{frontmatter:{time_warning:15552e6,layout:"tags",icon:"i-ri-price-tag-3-line",nav:!1,date:"2025-01-08T07:55:28.763Z",updated:"2025-01-08T07:55:28.763Z"},excerpt:"",layout:"tags"}}],meta:{frontmatter:{time_warning:15552e6}}}],Hn={};function zn(e,t,n){const r=typeof e=="function"?e:t;n=typeof t=="object"?t:n;const o={...nt,...n,commit:(n==null?void 0:n.commit)||nt.commit};function p(a,f,u,s){var x;const c=f[F],l=f[Et];c.has(r)||c.set(r,{data:le(),isLoading:le(!1),error:le(),to:a,options:o,children:new Set,resetPending(){this.pendingLoad=null,this.pendingTo=null},pendingLoad:null,pendingTo:null,staged:z,stagedError:null,commit:d});const g=c.get(r);if(g.pendingTo===a&&g.pendingLoad)return g.pendingLoad;const{error:y,isLoading:w,data:A}=g,_=f[Vn],R=o.key||"";let k=z;if(_&&R in _&&(k=_[R],delete _[R]),k!==z)return A.value=k,g.pendingLoad=Promise.resolve();g.pendingTo=a,w.value=!0;const C=tt();Y([g,f,a]),g.staged=z,g.stagedError=y.value;const N=Promise.resolve(r(a,{signal:(x=a.meta[re])==null?void 0:x.signal})).then(M=>{g.pendingLoad===N&&(M instanceof wt?a.meta[ue].push(M):(g.staged=M,g.stagedError=null))}).catch(M=>{if(g.pendingLoad===N&&(g.stagedError=M,!Te(o.lazy,a,u)||l))throw M}).finally(()=>{Y(C),g.pendingLoad===N&&(w.value=!1,(o.commit==="immediate"||!f[B])&&g.commit(a))});return Y(C),g.pendingLoad=N,N}function d(a){if(this.pendingTo===a){this.staged!==z&&(this.data.value=this.staged),this.error.value=this.stagedError,this.staged=z,this.stagedError=this.error.value,this.pendingTo=null,this.to=a;for(const f of this.children)f.commit(a)}}const m=()=>{const a=tt(),[f,u,s]=a,c=u||kn(),l=s||Cn(),g=c[F];let y=g.get(r);(!y||f&&y.pendingTo!==l||!y.pendingLoad)&&c[fe].runWithContext(()=>p(l,c,void 0)),y=g.get(r),f&&(f===y&&console.warn(`👶❌ "${o.key}" has itself as parent. This shouldn't be happening. Please report a bug with a reproduction to https://github.com/posva/unplugin-vue-router/`),f.children.add(y));const{data:w,error:A,isLoading:_}=y,R={data:w,error:A,isLoading:_,reload:(C=c.currentRoute.value)=>c[fe].runWithContext(()=>p(C,c)).then(()=>y.commit(C))},k=y.pendingLoad.then(()=>y.staged===z?w.value:y.staged).catch(C=>f?Promise.reject(C):null);return Y(a),Object.assign(k,R)};return m[_t]=!0,m._={load:p,options:o,getEntry(a){return a[F].get(r)}},m}var nt={lazy:!1,server:!0,commit:"after-load"},Vn=Symbol();export{$n as D,Cn as a,Gn as b,Mn as c,jn as d,Hn as e,zn as f,Bn as r,kn as u};