import{e as d}from"./app.CeSRDzgd.js";import{r as f,e as l,M as i,N as e,O as o,a2 as t,V as k,y as h,a7 as C,R as g,P as w,F as x,$ as R,u as V}from"./framework.BVtu4MtS.js";import"./chunks/dayjs.i0BUjmvK.js";import"./chunks/vue-router.CCcUuEhE.js";import"./chunks/vue-i18n.BgUPG-Ke.js";import"./chunks/pinia.CpydQbsa.js";import"./chunks/@vueuse/motion.D6DPsMOl.js";import"./chunks/nprogress.MTuYNGdb.js";function v(){return{collections:f([{id:"i-and-she",name:"I and She",description:"Love letters from the past"},{id:"love-and-peace",name:"爱与和平",description:"Recipes for a good life"}])}}const y=l({__name:"YunCollectionItem",props:{collection:{}},setup(s){return(n,r)=>{const a=i("RouterLink");return e(),o(a,{class:"inline-flex rounded p-4 h-50 w-40 bg-gray-100 dark:bg-dark-300 shadow",to:`/collections/${n.collection.id}`},{default:t(()=>r[0]||(r[0]=[k(" Book ")])),_:1},8,["to"])}}}),B={flex:"~ wrap",gap:"4"},E=l({__name:"collections",setup(s){const{collections:n}=v();return(r,a)=>{const p=y,u=i("RouterView"),m=d;return e(),o(m,null,{default:t(()=>[h(u,null,{default:t(({Component:_})=>[(e(),o(C(_),null,{default:t(()=>[g("div",B,[(e(!0),w(x,null,R(V(n),c=>(e(),o(p,{key:c.id,collection:c},null,8,["collection"]))),128))])]),_:2},1024))]),_:1})]),_:1})}}});export{E as default};