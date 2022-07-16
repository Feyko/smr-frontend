import{S as Y,i as tt,s as et,ba as rt,u as at,ad as ot,b as C,a as F,e as I,aa as P,Z as A,aT as nt,f as $,g as z,c as E,d as S,ab as N,_ as T,a7 as D,a5 as x,j as y,$ as j,m as k,t as U,l as W,ae as st,a1 as _,al as M,aC as Z,aD as G,aB as R,bb as it,k as X,w as B,az as lt,ac as L,q,h as J}from"../../../chunks/vendor-3906a87e.js";import{p as ct}from"../../../chunks/routing-c6322149.js";import{T as ft}from"../../../chunks/Toast-2c4756ef.js";import{g as dt}from"../../../chunks/navigation-ce539261.js";import{V as mt}from"../../../chunks/VersionForm-2db7130f.js";import{v as ut,w as pt,x as $t,y as ht,F as gt}from"../../../chunks/graphql-c174641c.js";import{b as vt}from"../../../chunks/paths-1c47712a.js";import{M as wt}from"../../../chunks/MetaDescriptors-3bdad2d4.js";import"../../../chunks/singletons-cdeec3fd.js";import"../../../chunks/forms-a08ac836.js";import"../../../chunks/jszip-0721729d.js";import"../../../chunks/extras-8984d02f.js";import"../../../chunks/uplugin-9e82fa30.js";import"../../../chunks/api-bb6d5972.js";import"../../../chunks/user-d8fd3640.js";import"../../../chunks/forms-d082c50e.js";import"../../../chunks/markdown-6a2ff7f0.js";import"../../../chunks/formatting-b1e7d458.js";import"../../../chunks/stores-656a72dd.js";const xt=async(s,t,r,e,o)=>{const a=Math.ceil(s.size/1e7),d=new Array(a).fill(0).map((u,f)=>f).reverse(),l=(u,f,w)=>o.uploadVersionPart({modId:t,versionId:w,part:f,file:u}),v=10;let h=0,m=0;const b=u=>{if(h>=v||!d.length)return;const f=d.pop(),w=f*1e7,g=s.slice(w,w+1e7);return h+=1,Promise.all([l(g,f+1,u).then(()=>(h-=1,e.set({total:a,uploaded:a-d.length-h}),b(u))).catch(n=>{if(console.error("Upload failed:",n),h-=1,d.push(f),m+=1,m<5)return b(u);throw new Error("Failed uploading after 5 attempts")}),b(u)])};return o.createVersion({modId:t}).then(async u=>(e.set({total:a,uploaded:0}),await b(u.data.createVersion),u.data.createVersion)).then(u=>(console.log("Finalizing",{versionID:u}),o.finalizeCreateVersion({modId:t,versionId:u,version:r}).then(()=>new Promise((f,w)=>{let g=0;const n=setInterval(()=>{if(g==60)return clearInterval(n),w(new Error("Timed out waiting for mod processing"));o.checkVersionUploadState.reexecute({requestPolicy:"network-only"}),g++},1e4);o.checkVersionUploadState.variables.versionId=u;const p=o.checkVersionUploadState.subscribe(c=>{if(!c.fetching){if(c.error){clearInterval(n),w(new Error(c.error.message)),setTimeout(p);return}!c.data||!c.data.checkVersionUploadState||!c.data.checkVersionUploadState.version||!c.data.checkVersionUploadState.version.id||(p(),clearInterval(n),f(c.data.checkVersionUploadState))}})})))).catch(u=>{throw console.error(u),u})};function K(s){let t,r;return t=new wt({props:{description:"Creating a new version of mod "+s[1].data.mod.name,title:"New version of mod "+s[1].data.mod.name}}),{c(){A(t.$$.fragment)},l(e){T(t.$$.fragment,e)},m(e,o){j(t,e,o),r=!0},p(e,o){const i={};o&2&&(i.description="Creating a new version of mod "+e[1].data.mod.name),o&2&&(i.title="New version of mod "+e[1].data.mod.name),t.$set(i)},i(e){r||(k(t.$$.fragment,e),r=!0)},o(e){U(t.$$.fragment,e),r=!1},d(e){_(t,e)}}}function bt(s){let t=s[1].data.mod.name+"",r;return{c(){r=P(t)},l(e){r=N(e,t)},m(e,o){y(e,r,o)},p(e,o){o&2&&t!==(t=e[1].data.mod.name+"")&&L(r,t)},d(e){e&&$(r)}}}function yt(s){let t;return{c(){t=P("...")},l(r){t=N(r,"...")},m(r,e){y(r,t,e)},p:q,d(r){r&&$(t)}}}function Vt(s){let t,r,e,o;t=new mt({props:{onSubmit:s[8],modReference:s[1].data.mod.mod_reference}});let i=s[3]&&Q(s);return{c(){A(t.$$.fragment),r=F(),i&&i.c(),e=C()},l(a){T(t.$$.fragment,a),r=z(a),i&&i.l(a),e=C()},m(a,d){j(t,a,d),y(a,r,d),i&&i.m(a,d),y(a,e,d),o=!0},p(a,d){const l={};d&2&&(l.modReference=a[1].data.mod.mod_reference),t.$set(l),a[3]?i?i.p(a,d):(i=Q(a),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null)},i(a){o||(k(t.$$.fragment,a),o=!0)},o(a){U(t.$$.fragment,a),o=!1},d(a){_(t,a),a&&$(r),i&&i.d(a),a&&$(e)}}}function It(s){let t,r,e=s[1].error.message+"",o;return{c(){t=I("p"),r=P("Oh no... "),o=P(e)},l(i){t=E(i,"P",{});var a=S(t);r=N(a,"Oh no... "),o=N(a,e),a.forEach($)},m(i,a){y(i,t,a),x(t,r),x(t,o)},p(i,a){a&2&&e!==(e=i[1].error.message+"")&&L(o,e)},i:q,o:q,d(i){i&&$(t)}}}function Et(s){let t,r;return{c(){t=I("p"),r=P("Loading...")},l(e){t=E(e,"P",{});var o=S(t);r=N(o,"Loading..."),o.forEach($)},m(e,o){y(e,t,o),x(t,r)},p:q,i:q,o:q,d(e){e&&$(t)}}}function Q(s){let t,r,e,o,i,a,d,l,v=s[4].toFixed(0)+"",h,m,b,u,f;return{c(){t=I("div"),r=I("div"),e=I("div"),o=I("span"),i=P(s[3]),a=F(),d=I("div"),l=I("span"),h=P(v),m=P("%"),b=F(),u=I("div"),f=I("div"),this.h()},l(w){t=E(w,"DIV",{class:!0});var g=S(t);r=E(g,"DIV",{class:!0});var n=S(r);e=E(n,"DIV",{});var p=S(e);o=E(p,"SPAN",{class:!0});var c=S(o);i=N(c,s[3]),c.forEach($),p.forEach($),a=z(n),d=E(n,"DIV",{class:!0});var V=S(d);l=E(V,"SPAN",{class:!0});var O=S(l);h=N(O,v),m=N(O,"%"),O.forEach($),V.forEach($),n.forEach($),b=z(g),u=E(g,"DIV",{class:!0});var H=S(u);f=E(H,"DIV",{style:!0,class:!0}),S(f).forEach($),H.forEach($),g.forEach($),this.h()},h(){D(o,"class","text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-yellow-600"),D(l,"class","text-xs font-semibold inline-block text-white"),D(d,"class","text-right"),D(r,"class","flex mb-2 items-center justify-between"),J(f,"width",s[4].toFixed(0)+"%"),D(f,"class","shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-600"),D(u,"class","overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-600"),D(t,"class","relative pt-4")},m(w,g){y(w,t,g),x(t,r),x(r,e),x(e,o),x(o,i),x(r,a),x(r,d),x(d,l),x(l,h),x(l,m),x(t,b),x(t,u),x(u,f)},p(w,g){g&8&&L(i,w[3]),g&16&&v!==(v=w[4].toFixed(0)+"")&&L(h,v),g&16&&J(f,"width",w[4].toFixed(0)+"%")},d(w){w&&$(t)}}}function St(s){let t,r,e,o;const i=[Et,It,Vt],a=[];function d(l,v){return l[1].fetching?0:l[1].error?1:2}return t=d(s),r=a[t]=i[t](s),{c(){r.c(),e=C()},l(l){r.l(l),e=C()},m(l,v){a[t].m(l,v),y(l,e,v),o=!0},p(l,v){let h=t;t=d(l),t===h?a[t].p(l,v):(X(),U(a[h],1,1,()=>{a[h]=null}),W(),r=a[t],r?r.p(l,v):(r=a[t]=i[t](l),r.c()),k(r,1),r.m(e.parentNode,e))},i(l){o||(k(r),o=!0)},o(l){U(r),o=!1},d(l){a[t].d(l),l&&$(e)}}}function kt(s){let t,r;return t=new it({props:{$$slots:{default:[St]},$$scope:{ctx:s}}}),{c(){A(t.$$.fragment)},l(e){T(t.$$.fragment,e)},m(e,o){j(t,e,o),r=!0},p(e,o){const i={};o&65562&&(i.$$scope={dirty:o,ctx:e}),t.$set(i)},i(e){r||(k(t.$$.fragment,e),r=!0)},o(e){U(t.$$.fragment,e),r=!1},d(e){_(t,e)}}}function Pt(s){let t,r;return{c(){t=I("span"),r=P(s[2])},l(e){t=E(e,"SPAN",{});var o=S(t);r=N(o,s[2]),o.forEach($)},m(e,o){y(e,t,o),x(t,r)},p(e,o){o&4&&L(r,e[2])},d(e){e&&$(t)}}}function Nt(s){let t,r,e,o,i,a,d,l,v,h,m=!s[1].fetching&&!s[1].error&&s[1].data.mod&&K(s);function b(n,p){if(n[1].fetching)return yt;if(!n[1].error)return bt}let u=b(s),f=u&&u(s);a=new rt({props:{$$slots:{default:[kt]},$$scope:{ctx:s}}});function w(n){s[10](n)}let g={$$slots:{default:[Pt]},$$scope:{ctx:s}};return s[0]!==void 0&&(g.running=s[0]),l=new ft({props:g}),at.push(()=>ot(l,"running",w)),{c(){m&&m.c(),t=C(),r=F(),e=I("h1"),o=P(`New Version for
  `),f&&f.c(),i=F(),A(a.$$.fragment),d=F(),A(l.$$.fragment),this.h()},l(n){const p=nt('[data-svelte="svelte-nx2zao"]',document.head);m&&m.l(p),t=C(),p.forEach($),r=z(n),e=E(n,"H1",{class:!0});var c=S(e);o=N(c,`New Version for
  `),f&&f.l(c),c.forEach($),i=z(n),T(a.$$.fragment,n),d=z(n),T(l.$$.fragment,n),this.h()},h(){D(e,"class","text-4xl my-4 font-bold")},m(n,p){m&&m.m(document.head,null),x(document.head,t),y(n,r,p),y(n,e,p),x(e,o),f&&f.m(e,null),y(n,i,p),j(a,n,p),y(n,d,p),j(l,n,p),h=!0},p(n,[p]){!n[1].fetching&&!n[1].error&&n[1].data.mod?m?(m.p(n,p),p&2&&k(m,1)):(m=K(n),m.c(),k(m,1),m.m(t.parentNode,t)):m&&(X(),U(m,1,1,()=>{m=null}),W()),u===(u=b(n))&&f?f.p(n,p):(f&&f.d(1),f=u&&u(n),f&&(f.c(),f.m(e,null)));const c={};p&65562&&(c.$$scope={dirty:p,ctx:n}),a.$set(c);const V={};p&65540&&(V.$$scope={dirty:p,ctx:n}),!v&&p&1&&(v=!0,V.running=n[0],st(()=>v=!1)),l.$set(V)},i(n){h||(k(m),k(a.$$.fragment,n),k(l.$$.fragment,n),h=!0)},o(n){U(m),U(a.$$.fragment,n),U(l.$$.fragment,n),h=!1},d(n){m&&m.d(n),$(t),n&&$(r),n&&$(e),f&&f.d(),n&&$(i),_(a,n),n&&$(d),_(l,n)}}}const Qt=ct();function Ut(s,t,r){let e,o,i,{modId:a}=t;const d=B("");M(s,d,c=>r(3,o=c));const l=B(0);M(s,l,c=>r(4,i=c));const v=B();v.subscribe(c=>{c&&(c.uploaded===c.total?(d.set("Processing..."),l.set(100)):(d.set(`Uploading: ${c.uploaded}/${c.total}`),l.set(c.uploaded/c.total*100)))});let h="",m=!1;const b=Z(ut,{mod:a});M(s,b,c=>r(1,e=c)),G(b);const u=R({query:$t}),f=R({query:ht}),w=R({query:gt}),g=Z(pt,{versionId:void 0,modId:void 0},{pause:!0});G(g);const n=async c=>xt(c.file,lt(b).data.mod.id,{changelog:c.changelog,stability:c.stability},v,{createVersion:u,uploadVersionPart:f,finalizeCreateVersion:w,checkVersionUploadState:g}).then(V=>{console.log({success:V}),dt(vt+"/mod/"+a+"/version/"+V.version.id)}).catch(V=>{console.error(V),r(2,h="Error creating version: "+V.message),r(0,m=!0),d.set("")});function p(c){m=c,r(0,m)}return s.$$set=c=>{"modId"in c&&r(9,a=c.modId)},s.$$.update=()=>{s.$$.dirty&2&&e.data&&(g.variables.modId=e.data.mod.id),s.$$.dirty&1&&(m||r(2,h=""))},[m,e,h,o,i,d,l,b,n,a,p]}class Wt extends Y{constructor(t){super(),tt(this,t,Ut,Nt,et,{modId:9})}}export{Wt as default,Qt as load};
//# sourceMappingURL=new-version.svelte-a9c7fc3b.js.map
