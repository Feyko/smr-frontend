import{S as B,i as H,s as Z,bb as _,u as F,ad as G,b as P,a as C,e as V,aa as I,Z as w,aV as J,f as l,g as D,c as L,d as O,ab as M,_ as S,a7 as K,a5 as b,j as E,$ as q,m as g,t as h,l as j,ae as Q,a1 as N,aC as R,al as U,aB as W,aD as X,bc as Y,k,az as ee,ac as A,q as y}from"../../../chunks/vendor-93f46a94.js";import{p as re}from"../../../chunks/routing-c6322149.js";import{r as te,s as ae}from"../../../chunks/graphql-8819e72c.js";import{T as oe}from"../../../chunks/Toast-a853093a.js";import{g as se}from"../../../chunks/navigation-ce539261.js";import{M as ie}from"../../../chunks/ModForm-5ed519eb.js";import{b as ne}from"../../../chunks/paths-1c47712a.js";import{M as fe}from"../../../chunks/MetaDescriptors-5ea9952a.js";import"../../../chunks/singletons-cdeec3fd.js";import"../../../chunks/forms-5fcb6172.js";import"../../../chunks/forms-2903de53.js";import"../../../chunks/markdown-6a2ff7f0.js";import"../../../chunks/extras-8984d02f.js";import"../../../chunks/ModCompatibilityEdit-e972ffff.js";import"../../../chunks/stores-84e1d086.js";function T(s){let r,t;return r=new fe({props:{description:"Editing mod "+s[1].data.mod.name,title:"Edit mod "+s[1].data.mod.name,image:s[1].data.mod.logo}}),{c(){w(r.$$.fragment)},l(e){S(r.$$.fragment,e)},m(e,a){q(r,e,a),t=!0},p(e,a){const n={};a&2&&(n.description="Editing mod "+e[1].data.mod.name),a&2&&(n.title="Edit mod "+e[1].data.mod.name),a&2&&(n.image=e[1].data.mod.logo),r.$set(n)},i(e){t||(g(r.$$.fragment,e),t=!0)},o(e){h(r.$$.fragment,e),t=!1},d(e){N(r,e)}}}function de(s){let r,t;return r=new ie({props:{onSubmit:s[5],initialValues:s[3],editing:!0,submitText:"Save"}}),{c(){w(r.$$.fragment)},l(e){S(r.$$.fragment,e)},m(e,a){q(r,e,a),t=!0},p(e,a){const n={};a&8&&(n.initialValues=e[3]),r.$set(n)},i(e){t||(g(r.$$.fragment,e),t=!0)},o(e){h(r.$$.fragment,e),t=!1},d(e){N(r,e)}}}function me(s){let r,t,e=s[1].error.message+"",a;return{c(){r=V("p"),t=I("Oh no... "),a=I(e)},l(n){r=L(n,"P",{});var f=O(r);t=M(f,"Oh no... "),a=M(f,e),f.forEach(l)},m(n,f){E(n,r,f),b(r,t),b(r,a)},p(n,f){f&2&&e!==(e=n[1].error.message+"")&&A(a,e)},i:y,o:y,d(n){n&&l(r)}}}function le(s){let r,t;return{c(){r=V("p"),t=I("Loading...")},l(e){r=L(e,"P",{});var a=O(r);t=M(a,"Loading..."),a.forEach(l)},m(e,a){E(e,r,a),b(r,t)},p:y,i:y,o:y,d(e){e&&l(r)}}}function $e(s){let r,t,e,a;const n=[le,me,de],f=[];function $(i,c){return i[1].fetching?0:i[1].error?1:2}return r=$(s),t=f[r]=n[r](s),{c(){t.c(),e=P()},l(i){t.l(i),e=P()},m(i,c){f[r].m(i,c),E(i,e,c),a=!0},p(i,c){let u=r;r=$(i),r===u?f[r].p(i,c):(k(),h(f[u],1,1,()=>{f[u]=null}),j(),t=f[r],t?t.p(i,c):(t=f[r]=n[r](i),t.c()),g(t,1),t.m(e.parentNode,e))},i(i){a||(g(t),a=!0)},o(i){h(t),a=!1},d(i){f[r].d(i),i&&l(e)}}}function ce(s){let r,t;return r=new Y({props:{$$slots:{default:[$e]},$$scope:{ctx:s}}}),{c(){w(r.$$.fragment)},l(e){S(r.$$.fragment,e)},m(e,a){q(r,e,a),t=!0},p(e,a){const n={};a&522&&(n.$$scope={dirty:a,ctx:e}),r.$set(n)},i(e){t||(g(r.$$.fragment,e),t=!0)},o(e){h(r.$$.fragment,e),t=!1},d(e){N(r,e)}}}function ue(s){let r,t;return{c(){r=V("span"),t=I(s[2])},l(e){r=L(e,"SPAN",{});var a=O(r);t=M(a,s[2]),a.forEach(l)},m(e,a){E(e,r,a),b(r,t)},p(e,a){a&4&&A(t,e[2])},d(e){e&&l(r)}}}function pe(s){let r,t,e,a,n,f,$,i,c,u,d=!s[1].fetching&&!s[1].error&&s[1].data.mod&&T(s);f=new _({props:{$$slots:{default:[ce]},$$scope:{ctx:s}}});function p(o){s[7](o)}let x={$$slots:{default:[ue]},$$scope:{ctx:s}};return s[0]!==void 0&&(x.running=s[0]),i=new oe({props:x}),F.push(()=>G(i,"running",p)),{c(){d&&d.c(),r=P(),t=C(),e=V("h1"),a=I("Edit Mod"),n=C(),w(f.$$.fragment),$=C(),w(i.$$.fragment),this.h()},l(o){const m=J('[data-svelte="svelte-q8g25b"]',document.head);d&&d.l(m),r=P(),m.forEach(l),t=D(o),e=L(o,"H1",{class:!0});var v=O(e);a=M(v,"Edit Mod"),v.forEach(l),n=D(o),S(f.$$.fragment,o),$=D(o),S(i.$$.fragment,o),this.h()},h(){K(e,"class","text-4xl my-4 font-bold")},m(o,m){d&&d.m(document.head,null),b(document.head,r),E(o,t,m),E(o,e,m),b(e,a),E(o,n,m),q(f,o,m),E(o,$,m),q(i,o,m),u=!0},p(o,[m]){!o[1].fetching&&!o[1].error&&o[1].data.mod?d?(d.p(o,m),m&2&&g(d,1)):(d=T(o),d.c(),g(d,1),d.m(r.parentNode,r)):d&&(k(),h(d,1,1,()=>{d=null}),j());const v={};m&522&&(v.$$scope={dirty:m,ctx:o}),f.$set(v);const z={};m&516&&(z.$$scope={dirty:m,ctx:o}),!c&&m&1&&(c=!0,z.running=o[0],Q(()=>c=!1)),i.$set(z)},i(o){u||(g(d),g(f.$$.fragment,o),g(i.$$.fragment,o),u=!0)},o(o){h(d),h(f.$$.fragment,o),h(i.$$.fragment,o),u=!1},d(o){d&&d.d(o),l(r),o&&l(t),o&&l(e),o&&l(n),N(f,o),o&&l($),N(i,o)}}}const Oe=re();function ge(s,r,t){let e,a,{modId:n}=r,f="",$=!1;const i=R(te,{mod:n});U(s,i,p=>t(1,a=p));const c=W({query:ae}),u=p=>{c({modId:ee(i).data.mod.id,mod:p}).then(x=>{x.error?(console.error(x.error.message),t(2,f="Error editing mod: "+x.error.message),t(0,$=!0)):se(ne+"/mod/"+x.data.updateMod.id)})};X(i);function d(p){$=p,t(0,$)}return s.$$set=p=>{"modId"in p&&t(6,n=p.modId)},s.$$.update=()=>{s.$$.dirty&1&&($||t(2,f="")),s.$$.dirty&2&&t(3,e=a.data?{...a.data.mod,logo:void 0}:void 0)},[$,a,f,e,i,u,n,d]}class ze extends B{constructor(r){super(),H(this,r,ge,pe,Z,{modId:6})}}export{ze as default,Oe as load};
//# sourceMappingURL=edit.svelte-6d5394a4.js.map
