import{S as Ie,i as De,s as ke,b as zt,j as A,q as C,f as o,aC as He,al as Ve,aD as Re,an as Wt,e as b,aa as H,c as y,d as x,ab as R,a7 as v,a5 as f,a as V,g as P,ac as et,u as G,ad as K,bd as $e,aP as Pe,aH as ae,Z as N,_ as q,$ as U,J as We,ae as tt,be as ze,m as h,k as Tt,t as E,l as Lt,a1 as T,aQ as Se,aM as Oe,b2 as Ae}from"./vendor-22698a15.js";import{o as qt,s as X,b as Ut,d as Ce,l as Ze,e as me,f as je,T as Et,V as yt,c as Be,v as Ye,r as Fe,a as Je}from"./forms-099cb473.js";import{t as Qe}from"./forms-e27a2b2a.js";import{m as de}from"./markdown-6a2ff7f0.js";import{x as Xe,u as pe}from"./graphql-32ca0bd6.js";import{a as ge}from"./paths-1c47712a.js";import{T as Ge}from"./TagList-1b26b6fa.js";import{M as Ke}from"./ModCompatibilityEdit-4e8e70f5.js";const he=qt({name:X().min(3).max(32),mod_reference:X().min(3).max(32).regex(/^([a-zA-Z][a-zA-Z0-9_]*)$/).refine(async()=>!0),short_description:X().min(16).max(128),full_description:Ut(X()),logo:Ut(Ce().refine(s=>"name"in s&&"size"in s&&"type"in s)),source_url:X().url().optional().or(Ze("")),authors:Ut(qt({role:X(),user_id:X()}).array()),compatibility:Ut(qt({EA:qt({state:X(),note:me()}),EXP:qt({state:X(),note:me()})})),hidden:je(),tagIDs:Ut(X().array())});function tr(s){let t,r;return{c(){t=b("p"),r=H("Unknown User ID"),this.h()},l(a){t=y(a,"P",{class:!0});var e=x(t);r=R(e,"Unknown User ID"),e.forEach(o),this.h()},h(){v(t,"class","mr-2 whitespace-nowrap")},m(a,e){A(a,t,e),f(t,r)},p:C,d(a){a&&o(t)}}}function er(s){let t,r,a,e,l,i,w=s[0].data.getUser.username+"",p;return{c(){t=b("div"),r=b("div"),e=V(),l=b("div"),i=b("span"),p=H(w),this.h()},l(m){t=y(m,"DIV",{class:!0});var g=x(t);r=y(g,"DIV",{class:!0,style:!0}),x(r).forEach(o),e=P(g),l=y(g,"DIV",{class:!0});var u=x(l);i=y(u,"SPAN",{class:!0});var S=x(i);p=R(S,w),S.forEach(o),u.forEach(o),g.forEach(o),this.h()},h(){v(r,"class","rounded-full bg-cover w-7 h-7"),v(r,"style",a=`background-image: url("${s[0].data.getUser.avatar||ge+"/images/no_image.webp"}")`),v(i,"class","text-yellow-500"),v(l,"class","grid grid-flow-row"),v(t,"class","grid grid-flow-col auto-cols-max gap-x-2 mr-2")},m(m,g){A(m,t,g),f(t,r),f(t,e),f(t,l),f(l,i),f(i,p)},p(m,g){g&1&&a!==(a=`background-image: url("${m[0].data.getUser.avatar||ge+"/images/no_image.webp"}")`)&&v(r,"style",a),g&1&&w!==(w=m[0].data.getUser.username+"")&&et(p,w)},d(m){m&&o(t)}}}function rr(s){let t,r,a=s[0].error.message+"",e;return{c(){t=b("p"),r=H("Oh no... "),e=H(a),this.h()},l(l){t=y(l,"P",{class:!0});var i=x(t);r=R(i,"Oh no... "),e=R(i,a),i.forEach(o),this.h()},h(){v(t,"class","mr-2")},m(l,i){A(l,t,i),f(t,r),f(t,e)},p(l,i){i&1&&a!==(a=l[0].error.message+"")&&et(e,a)},d(l){l&&o(t)}}}function ar(s){let t,r;return{c(){t=b("p"),r=H("Loading..."),this.h()},l(a){t=y(a,"P",{class:!0});var e=x(t);r=R(e,"Loading..."),e.forEach(o),this.h()},h(){v(t,"class","mr-2")},m(a,e){A(a,t,e),f(t,r)},p:C,d(a){a&&o(t)}}}function sr(s){let t;function r(l,i){return l[0].fetching?ar:l[0].error?rr:l[0].data.getUser?er:tr}let a=r(s),e=a(s);return{c(){e.c(),t=zt()},l(l){e.l(l),t=zt()},m(l,i){e.m(l,i),A(l,t,i)},p(l,[i]){a===(a=r(l))&&e?e.p(l,i):(e.d(1),e=a(l),e&&(e.c(),e.m(t.parentNode,t)))},i:C,o:C,d(l){e.d(l),l&&o(t)}}}function lr(s,t,r){let a,{id:e}=t;const l=He(Xe,{user:e});return Ve(s,l,i=>r(0,a=i)),Re(l),s.$$set=i=>{"id"in i&&r(2,e=i.id)},s.$$.update=()=>{s.$$.dirty&5&&(Wt(l,a.variables.user=e,a),a.reexecute())},[a,l,e]}class ir extends Ie{constructor(t){super(),De(this,t,lr,sr,ke,{id:2})}}function ve(s,t,r){const a=s.slice();return a[25]=t[r],a[26]=t,a[27]=r,a}function nr(s){let t,r=(s[28]||"")+"",a;return{c(){t=b("span"),a=H(r),this.h()},l(e){t=y(e,"SPAN",{class:!0});var l=x(t);a=R(l,r),l.forEach(o),this.h()},h(){v(t,"class","validation-message")},m(e,l){A(e,t,l),f(t,a)},p(e,l){l&268435456&&r!==(r=(e[28]||"")+"")&&et(a,r)},d(e){e&&o(t)}}}function we(s){let t;return{c(){t=H(`Warning! You will not be able to change this after creating the mod! Please ensure this is a unique modifier
            that closely matches the name of your mod!`)},l(r){t=R(r,`Warning! You will not be able to change this after creating the mod! Please ensure this is a unique modifier
            that closely matches the name of your mod!`)},m(r,a){A(r,t,a)},d(r){r&&o(t)}}}function or(s){let t,r=!s[1]&&we();return{c(){r&&r.c(),t=zt()},l(a){r&&r.l(a),t=zt()},m(a,e){r&&r.m(a,e),A(a,t,e)},p(a,e){a[1]?r&&(r.d(1),r=null):r||(r=we(),r.c(),r.m(t.parentNode,t))},d(a){r&&r.d(a),a&&o(t)}}}function fr(s){let t,r;return t=new Je({props:{persistent:!s[1],slot:"helper",$$slots:{default:[or]},$$scope:{ctx:s}}}),{c(){N(t.$$.fragment)},l(a){q(t.$$.fragment,a)},m(a,e){U(t,a,e),r=!0},p(a,e){const l={};e&2&&(l.persistent=!a[1]),e&1073741826&&(l.$$scope={dirty:e,ctx:a}),t.$set(l)},i(a){r||(h(t.$$.fragment,a),r=!0)},o(a){E(t.$$.fragment,a),r=!1},d(a){T(t,a)}}}function cr(s){let t,r=(s[28]||"")+"",a;return{c(){t=b("span"),a=H(r),this.h()},l(e){t=y(e,"SPAN",{class:!0});var l=x(t);a=R(l,r),l.forEach(o),this.h()},h(){v(t,"class","validation-message")},m(e,l){A(e,t,l),f(t,a)},p(e,l){l&268435456&&r!==(r=(e[28]||"")+"")&&et(a,r)},d(e){e&&o(t)}}}function ur(s){let t,r=(s[28]||"")+"",a;return{c(){t=b("span"),a=H(r),this.h()},l(e){t=y(e,"SPAN",{class:!0});var l=x(t);a=R(l,r),l.forEach(o),this.h()},h(){v(t,"class","validation-message")},m(e,l){A(e,t,l),f(t,a)},p(e,l){l&268435456&&r!==(r=(e[28]||"")+"")&&et(a,r)},d(e){e&&o(t)}}}function $r(s){let t,r=(s[28]||"")+"",a;return{c(){t=b("span"),a=H(r),this.h()},l(e){t=y(e,"SPAN",{class:!0});var l=x(t);a=R(l,r),l.forEach(o),this.h()},h(){v(t,"class","validation-message")},m(e,l){A(e,t,l),f(t,a)},p(e,l){l&268435456&&r!==(r=(e[28]||"")+"")&&et(a,r)},d(e){e&&o(t)}}}function mr(s){return{c:C,l:C,m:C,p:C,d:C}}function dr(s){let t,r=s[29]+"";return{c(){t=b("div"),this.h()},l(a){t=y(a,"DIV",{class:!0});var e=x(t);e.forEach(o),this.h()},h(){v(t,"class","markdown-content right svelte-k92wki")},m(a,e){A(a,t,e),t.innerHTML=r},p(a,e){e&32&&r!==(r=a[29]+"")&&(t.innerHTML=r)},d(a){a&&o(t)}}}function pr(s){return{c:C,l:C,m:C,p:C,d:C}}function gr(s){let t,r=(s[28]||"")+"",a;return{c(){t=b("span"),a=H(r),this.h()},l(e){t=y(e,"SPAN",{class:!0});var l=x(t);a=R(l,r),l.forEach(o),this.h()},h(){v(t,"class","validation-message")},m(e,l){A(e,t,l),f(t,a)},p(e,l){l&268435456&&r!==(r=(e[28]||"")+"")&&et(a,r)},d(e){e&&o(t)}}}function hr(s){let t,r=(s[28]||"")+"",a;return{c(){t=b("span"),a=H(r),this.h()},l(e){t=y(e,"SPAN",{class:!0});var l=x(t);a=R(l,r),l.forEach(o),this.h()},h(){v(t,"class","validation-message")},m(e,l){A(e,t,l),f(t,a)},p(e,l){l&268435456&&r!==(r=(e[28]||"")+"")&&et(a,r)},d(e){e&&o(t)}}}function vr(s){let t,r,a;function e(i){s[19](i)}let l={};return s[3].hidden!==void 0&&(l.checked=s[3].hidden),t=new Se({props:l}),G.push(()=>K(t,"checked",e)),{c(){N(t.$$.fragment)},l(i){q(t.$$.fragment,i)},m(i,w){U(t,i,w),a=!0},p(i,w){const p={};!r&&w&8&&(r=!0,p.checked=i[3].hidden,tt(()=>r=!1)),t.$set(p)},i(i){a||(h(t.$$.fragment,i),a=!0)},o(i){E(t.$$.fragment,i),a=!1},d(i){T(t,i)}}}function wr(s){let t,r;return{c(){t=b("span"),r=H("Hidden"),this.h()},l(a){t=y(a,"SPAN",{slot:!0});var e=x(t);r=R(e,"Hidden"),e.forEach(o),this.h()},h(){v(t,"slot","label")},m(a,e){A(a,t,e),f(t,r)},p:C,d(a){a&&o(t)}}}function br(s){let t,r=(s[28]||"")+"",a;return{c(){t=b("span"),a=H(r),this.h()},l(e){t=y(e,"SPAN",{class:!0});var l=x(t);a=R(l,r),l.forEach(o),this.h()},h(){v(t,"class","validation-message")},m(e,l){A(e,t,l),f(t,a)},p(e,l){l&268435456&&r!==(r=(e[28]||"")+"")&&et(a,r)},d(e){e&&o(t)}}}function be(s){let t,r,a,e,l,i,w,p,m,g,u,S;r=new Pe({props:{align:"start",$$slots:{default:[yr]},$$scope:{ctx:s}}});let d=s[4]&&ye(s);g=new ae({props:{type:"button",$$slots:{default:[_r]},$$scope:{ctx:s}}}),g.$on("click",s[8]);let W=s[3].authors,I=[];for(let $=0;$<W.length;$+=1)I[$]=Ee(ve(s,W,$));const Z=$=>E(I[$],1,1,()=>{I[$]=null});return{c(){t=b("div"),N(r.$$.fragment),a=V(),d&&d.c(),e=V(),l=b("div"),i=b("div"),w=b("h4"),p=H("Authors"),m=V(),N(g.$$.fragment),u=V();for(let $=0;$<I.length;$+=1)I[$].c();this.h()},l($){t=y($,"DIV",{});var D=x(t);q(r.$$.fragment,D),D.forEach(o),a=P($),d&&d.l($),e=P($),l=y($,"DIV",{class:!0});var M=x(l);i=y(M,"DIV",{class:!0});var j=x(i);w=y(j,"H4",{class:!0});var k=x(w);p=R(k,"Authors"),k.forEach(o),m=P(j),q(g.$$.fragment,j),j.forEach(o),u=P(M);for(let O=0;O<I.length;O+=1)I[O].l(M);M.forEach(o),this.h()},h(){v(w,"class","mr-4"),v(i,"class","flex items-baseline"),v(l,"class","grid grid-flow-row gap-2")},m($,D){A($,t,D),U(r,t,null),A($,a,D),d&&d.m($,D),A($,e,D),A($,l,D),f(l,i),f(i,w),f(w,p),f(i,m),U(g,i,null),f(l,u);for(let M=0;M<I.length;M+=1)I[M].m(l,null);S=!0},p($,D){const M={};D&1073741848&&(M.$$scope={dirty:D,ctx:$}),r.$set(M),$[4]?d?(d.p($,D),D&16&&h(d,1)):(d=ye($),d.c(),h(d,1),d.m(e.parentNode,e)):d&&(Tt(),E(d,1,1,()=>{d=null}),Lt());const j={};if(D&1073741824&&(j.$$scope={dirty:D,ctx:$}),g.$set(j),D&520){W=$[3].authors;let k;for(k=0;k<W.length;k+=1){const O=ve($,W,k);I[k]?(I[k].p(O,D),h(I[k],1)):(I[k]=Ee(O),I[k].c(),h(I[k],1),I[k].m(l,null))}for(Tt(),k=W.length;k<I.length;k+=1)Z(k);Lt()}},i($){if(!S){h(r.$$.fragment,$),h(d),h(g.$$.fragment,$);for(let D=0;D<W.length;D+=1)h(I[D]);S=!0}},o($){E(r.$$.fragment,$),E(d),E(g.$$.fragment,$),I=I.filter(Boolean);for(let D=0;D<I.length;D+=1)E(I[D]);S=!1},d($){$&&o(t),T(r),$&&o(a),d&&d.d($),$&&o(e),$&&o(l),T(g),Oe(I,$)}}}function yr(s){let t,r,a,e,l,i;function w(m){s[20](m)}let p={};return s[4]!==void 0&&(p.checked=s[4]),t=new Se({props:p}),G.push(()=>K(t,"checked",w)),t.$on("SMUISwitch:change",s[21]),{c(){N(t.$$.fragment),a=V(),e=b("span"),l=H("Edit compatibility information")},l(m){q(t.$$.fragment,m),a=P(m),e=y(m,"SPAN",{});var g=x(e);l=R(g,"Edit compatibility information"),g.forEach(o)},m(m,g){U(t,m,g),A(m,a,g),A(m,e,g),f(e,l),i=!0},p(m,g){const u={};!r&&g&16&&(r=!0,u.checked=m[4],tt(()=>r=!1)),t.$set(u)},i(m){i||(h(t.$$.fragment,m),i=!0)},o(m){E(t.$$.fragment,m),i=!1},d(m){T(t,m),m&&o(a),m&&o(e)}}}function ye(s){let t,r,a;function e(i){s[22](i)}let l={};return s[3].compatibility!==void 0&&(l.compatibilityInfo=s[3].compatibility),t=new Ke({props:l}),G.push(()=>K(t,"compatibilityInfo",e)),{c(){N(t.$$.fragment)},l(i){q(t.$$.fragment,i)},m(i,w){U(t,i,w),a=!0},p(i,w){const p={};!r&&w&8&&(r=!0,p.compatibilityInfo=i[3].compatibility,tt(()=>r=!1)),t.$set(p)},i(i){a||(h(t.$$.fragment,i),a=!0)},o(i){E(t.$$.fragment,i),a=!1},d(i){T(t,i)}}}function xr(s){let t;return{c(){t=H("Add")},l(r){t=R(r,"Add")},m(r,a){A(r,t,a)},d(r){r&&o(t)}}}function _r(s){let t,r;return t=new Ae({props:{$$slots:{default:[xr]},$$scope:{ctx:s}}}),{c(){N(t.$$.fragment)},l(a){q(t.$$.fragment,a)},m(a,e){U(t,a,e),r=!0},p(a,e){const l={};e&1073741824&&(l.$$scope={dirty:e,ctx:a}),t.$set(l)},i(a){r||(h(t.$$.fragment,a),r=!0)},o(a){E(t.$$.fragment,a),r=!1},d(a){T(t,a)}}}function xe(s){let t,r;return t=new ir({props:{id:s[3].authors[s[27]].user_id}}),{c(){N(t.$$.fragment)},l(a){q(t.$$.fragment,a)},m(a,e){U(t,a,e),r=!0},p(a,e){const l={};e&8&&(l.id=a[3].authors[a[27]].user_id),t.$set(l)},i(a){r||(h(t.$$.fragment,a),r=!0)},o(a){E(t.$$.fragment,a),r=!1},d(a){T(t,a)}}}function _e(s){let t,r;function a(){return s[24](s[27])}return t=new ae({props:{type:"button",variant:"raised",$$slots:{default:[Ir]},$$scope:{ctx:s}}}),t.$on("click",a),{c(){N(t.$$.fragment)},l(e){q(t.$$.fragment,e)},m(e,l){U(t,e,l),r=!0},p(e,l){s=e;const i={};l&1073741824&&(i.$$scope={dirty:l,ctx:s}),t.$set(i)},i(e){r||(h(t.$$.fragment,e),r=!0)},o(e){E(t.$$.fragment,e),r=!1},d(e){T(t,e)}}}function Er(s){let t;return{c(){t=H("Remove")},l(r){t=R(r,"Remove")},m(r,a){A(r,t,a)},d(r){r&&o(t)}}}function Ir(s){let t,r;return t=new Ae({props:{$$slots:{default:[Er]},$$scope:{ctx:s}}}),{c(){N(t.$$.fragment)},l(a){q(t.$$.fragment,a)},m(a,e){U(t,a,e),r=!0},p(a,e){const l={};e&1073741824&&(l.$$scope={dirty:e,ctx:a}),t.$set(l)},i(a){r||(h(t.$$.fragment,a),r=!0)},o(a){E(t.$$.fragment,a),r=!1},d(a){T(t,a)}}}function Ee(s){let t,r,a,e,l,i,w,p=s[3].authors[s[27]].user_id&&xe(s);function m(S){s[23](S,s[27])}let g={label:"User ID",class:"mr-4 w-full",disabled:s[25].role==="creator"};s[3].authors[s[27]].user_id!==void 0&&(g.value=s[3].authors[s[27]].user_id),a=new Et({props:g}),G.push(()=>K(a,"value",m));let u=s[25].role!=="creator"&&_e(s);return{c(){t=b("div"),p&&p.c(),r=V(),N(a.$$.fragment),l=V(),u&&u.c(),i=V(),this.h()},l(S){t=y(S,"DIV",{class:!0});var d=x(t);p&&p.l(d),r=P(d),q(a.$$.fragment,d),l=P(d),u&&u.l(d),i=P(d),d.forEach(o),this.h()},h(){v(t,"class","flex items-baseline")},m(S,d){A(S,t,d),p&&p.m(t,null),f(t,r),U(a,t,null),f(t,l),u&&u.m(t,null),f(t,i),w=!0},p(S,d){s=S,s[3].authors[s[27]].user_id?p?(p.p(s,d),d&8&&h(p,1)):(p=xe(s),p.c(),h(p,1),p.m(t,r)):p&&(Tt(),E(p,1,1,()=>{p=null}),Lt());const W={};d&8&&(W.disabled=s[25].role==="creator"),!e&&d&8&&(e=!0,W.value=s[3].authors[s[27]].user_id,tt(()=>e=!1)),a.$set(W),s[25].role!=="creator"?u?(u.p(s,d),d&8&&h(u,1)):(u=_e(s),u.c(),h(u,1),u.m(t,i)):u&&(Tt(),E(u,1,1,()=>{u=null}),Lt())},i(S){w||(h(p),h(a.$$.fragment,S),h(u),w=!0)},o(S){E(p),E(a.$$.fragment,S),E(u),w=!1},d(S){S&&o(t),p&&p.d(),T(a),u&&u.d()}}}function Dr(s){let t;return{c(){t=H(s[0])},l(r){t=R(r,s[0])},m(r,a){A(r,t,a)},p(r,a){a&1&&et(t,r[0])},d(r){r&&o(t)}}}function kr(s){let t,r,a,e,l,i,w,p,m,g,u,S,d,W,I,Z,$,D,M,j,k,O,Y,It,Dt,F,kt,c,J,Ot,Ct,Mt,Zt,xt,rt,jt,Bt,Q,_t,Yt,Ft,at,Jt,nt,Qt,ot,st,Xt,Gt,ft,Kt,ct,ut,te,$t,ee,Ht,Vt,mt,Rt,re,se;function Ne(n){s[13](n)}let le={label:"Name",required:!0};s[3].name!==void 0&&(le.value=s[3].name),e=new Et({props:le}),G.push(()=>K(e,"value",Ne)),w=new yt({props:{for:"name",$$slots:{default:[nr,({messages:n})=>({28:n}),({messages:n})=>n?268435456:0]},$$scope:{ctx:s}}});function qe(n){s[14](n)}let ie={label:"Mod Reference",required:!0,disabled:s[1],$$slots:{helper:[fr]},$$scope:{ctx:s}};s[3].mod_reference!==void 0&&(ie.value=s[3].mod_reference),g=new Et({props:ie}),G.push(()=>K(g,"value",qe)),d=new yt({props:{for:"mod_reference",$$slots:{default:[cr,({messages:n})=>({28:n}),({messages:n})=>n?268435456:0]},$$scope:{ctx:s}}});function Ue(n){s[15](n)}let ne={label:"Short Description",required:!0};s[3].short_description!==void 0&&(ne.value=s[3].short_description),Z=new Et({props:ne}),G.push(()=>K(Z,"value",Ue)),M=new yt({props:{for:"short_description",$$slots:{default:[ur,({messages:n})=>({28:n}),({messages:n})=>n?268435456:0]},$$scope:{ctx:s}}});function Te(n){s[16](n)}let oe={textarea:!0,class:"vertical-textarea",label:"Full Description",required:!0,input$rows:10};s[3].full_description!==void 0&&(oe.value=s[3].full_description),Y=new Et({props:oe}),G.push(()=>K(Y,"value",Te)),F=new yt({props:{for:"full_description",$$slots:{default:[$r,({messages:n})=>({28:n}),({messages:n})=>n?268435456:0]},$$scope:{ctx:s}}});let B={ctx:s,current:null,token:null,hasCatch:!1,pending:pr,then:dr,catch:mr,value:29};$e(Mt=de(s[5]),B);function Le(n){s[17](n)}let fe={editable:!0};s[2]!==void 0&&(fe.tags=s[2]),rt=new Ge({props:fe}),G.push(()=>K(rt,"tags",Le)),nt=new yt({props:{for:"logo",$$slots:{default:[gr,({messages:n})=>({28:n}),({messages:n})=>n?268435456:0]},$$scope:{ctx:s}}});function Me(n){s[18](n)}let ce={label:"Source URL"};s[3].source_url!==void 0&&(ce.value=s[3].source_url),st=new Et({props:ce}),G.push(()=>K(st,"value",Me)),ft=new yt({props:{for:"source_url",$$slots:{default:[hr,({messages:n})=>({28:n}),({messages:n})=>n?268435456:0]},$$scope:{ctx:s}}}),ut=new Pe({props:{$$slots:{label:[wr],default:[vr]},$$scope:{ctx:s}}}),$t=new yt({props:{for:"hidden",$$slots:{default:[br,({messages:n})=>({28:n}),({messages:n})=>n?268435456:0]},$$scope:{ctx:s}}});let z=s[1]&&be(s);return mt=new ae({props:{variant:"outlined",type:"submit",$$slots:{default:[Dr]},$$scope:{ctx:s}}}),{c(){t=b("form"),r=b("div"),a=b("div"),N(e.$$.fragment),i=V(),N(w.$$.fragment),p=V(),m=b("div"),N(g.$$.fragment),S=V(),N(d.$$.fragment),W=V(),I=b("div"),N(Z.$$.fragment),D=V(),N(M.$$.fragment),j=V(),k=b("div"),O=b("div"),N(Y.$$.fragment),Dt=V(),N(F.$$.fragment),kt=V(),c=b("div"),J=b("span"),Ot=H("Preview:"),Ct=V(),B.block.c(),Zt=V(),xt=b("div"),N(rt.$$.fragment),Bt=V(),Q=b("div"),_t=b("label"),Yt=H("Logo:"),Ft=V(),at=b("input"),Jt=V(),N(nt.$$.fragment),Qt=V(),ot=b("div"),N(st.$$.fragment),Gt=V(),N(ft.$$.fragment),Kt=V(),ct=b("div"),N(ut.$$.fragment),te=V(),N($t.$$.fragment),ee=V(),z&&z.c(),Ht=V(),Vt=b("div"),N(mt.$$.fragment),this.h()},l(n){t=y(n,"FORM",{});var _=x(t);r=y(_,"DIV",{class:!0});var L=x(r);a=y(L,"DIV",{class:!0});var dt=x(a);q(e.$$.fragment,dt),i=P(dt),q(w.$$.fragment,dt),dt.forEach(o),p=P(L),m=y(L,"DIV",{class:!0});var lt=x(m);q(g.$$.fragment,lt),S=P(lt),q(d.$$.fragment,lt),lt.forEach(o),W=P(L),I=y(L,"DIV",{class:!0});var pt=x(I);q(Z.$$.fragment,pt),D=P(pt),q(M.$$.fragment,pt),pt.forEach(o),j=P(L),k=y(L,"DIV",{class:!0});var gt=x(k);O=y(gt,"DIV",{class:!0});var ht=x(O);q(Y.$$.fragment,ht),Dt=P(ht),q(F.$$.fragment,ht),ht.forEach(o),kt=P(gt),c=y(gt,"DIV",{class:!0});var vt=x(c);J=y(vt,"SPAN",{});var Pt=x(J);Ot=R(Pt,"Preview:"),Pt.forEach(o),Ct=P(vt),B.block.l(vt),vt.forEach(o),gt.forEach(o),Zt=P(L),xt=y(L,"DIV",{class:!0});var St=x(xt);q(rt.$$.fragment,St),St.forEach(o),Bt=P(L),Q=y(L,"DIV",{class:!0});var it=x(Q);_t=y(it,"LABEL",{for:!0});var At=x(_t);Yt=R(At,"Logo:"),At.forEach(o),Ft=P(it),at=y(it,"INPUT",{id:!0,class:!0,name:!0,type:!0,accept:!0,placeholder:!0}),Jt=P(it),q(nt.$$.fragment,it),it.forEach(o),Qt=P(L),ot=y(L,"DIV",{class:!0});var wt=x(ot);q(st.$$.fragment,wt),Gt=P(wt),q(ft.$$.fragment,wt),wt.forEach(o),Kt=P(L),ct=y(L,"DIV",{class:!0});var bt=x(ct);q(ut.$$.fragment,bt),te=P(bt),q($t.$$.fragment,bt),bt.forEach(o),ee=P(L),z&&z.l(L),Ht=P(L),Vt=y(L,"DIV",{});var Nt=x(Vt);q(mt.$$.fragment,Nt),Nt.forEach(o),L.forEach(o),_.forEach(o),this.h()},h(){v(a,"class","grid grid-flow-row gap-2"),v(m,"class","grid grid-flow-row gap-2"),v(I,"class","grid grid-flow-row gap-2"),v(O,"class","grid grid-flow-row gap-2 auto-rows-max"),v(c,"class","grid grid-flow-row gap-2 auto-rows-max"),v(k,"class","grid gap-6 split svelte-k92wki"),v(xt,"class","grid grid-flow-row gap-2"),v(_t,"for","logo"),v(at,"id","logo"),v(at,"class","base-input"),v(at,"name","logo"),v(at,"type","file"),v(at,"accept","image/png,image/jpeg,image/gif"),v(at,"placeholder","Logo"),v(Q,"class","grid grid-flow-row gap-2"),v(ot,"class","grid grid-flow-row gap-2"),v(ct,"class","grid grid-flow-row gap-2"),v(r,"class","grid grid-flow-row gap-6")},m(n,_){A(n,t,_),f(t,r),f(r,a),U(e,a,null),f(a,i),U(w,a,null),f(r,p),f(r,m),U(g,m,null),f(m,S),U(d,m,null),f(r,W),f(r,I),U(Z,I,null),f(I,D),U(M,I,null),f(r,j),f(r,k),f(k,O),U(Y,O,null),f(O,Dt),U(F,O,null),f(k,kt),f(k,c),f(c,J),f(J,Ot),f(c,Ct),B.block.m(c,B.anchor=null),B.mount=()=>c,B.anchor=null,f(r,Zt),f(r,xt),U(rt,xt,null),f(r,Bt),f(r,Q),f(Q,_t),f(_t,Yt),f(Q,Ft),f(Q,at),f(Q,Jt),U(nt,Q,null),f(r,Qt),f(r,ot),U(st,ot,null),f(ot,Gt),U(ft,ot,null),f(r,Kt),f(r,ct),U(ut,ct,null),f(ct,te),U($t,ct,null),f(r,ee),z&&z.m(r,null),f(r,Ht),f(r,Vt),U(mt,Vt,null),Rt=!0,re||(se=We(s[6].call(null,t)),re=!0)},p(n,[_]){s=n;const L={};!l&&_&8&&(l=!0,L.value=s[3].name,tt(()=>l=!1)),e.$set(L);const dt={};_&1342177280&&(dt.$$scope={dirty:_,ctx:s}),w.$set(dt);const lt={};_&2&&(lt.disabled=s[1]),_&1073741826&&(lt.$$scope={dirty:_,ctx:s}),!u&&_&8&&(u=!0,lt.value=s[3].mod_reference,tt(()=>u=!1)),g.$set(lt);const pt={};_&1342177280&&(pt.$$scope={dirty:_,ctx:s}),d.$set(pt);const gt={};!$&&_&8&&($=!0,gt.value=s[3].short_description,tt(()=>$=!1)),Z.$set(gt);const ht={};_&1342177280&&(ht.$$scope={dirty:_,ctx:s}),M.$set(ht);const vt={};!It&&_&8&&(It=!0,vt.value=s[3].full_description,tt(()=>It=!1)),Y.$set(vt);const Pt={};_&1342177280&&(Pt.$$scope={dirty:_,ctx:s}),F.$set(Pt),B.ctx=s,_&32&&Mt!==(Mt=de(s[5]))&&$e(Mt,B)||ze(B,s,_);const St={};!jt&&_&4&&(jt=!0,St.tags=s[2],tt(()=>jt=!1)),rt.$set(St);const it={};_&1342177280&&(it.$$scope={dirty:_,ctx:s}),nt.$set(it);const At={};!Xt&&_&8&&(Xt=!0,At.value=s[3].source_url,tt(()=>Xt=!1)),st.$set(At);const wt={};_&1342177280&&(wt.$$scope={dirty:_,ctx:s}),ft.$set(wt);const bt={};_&1073741832&&(bt.$$scope={dirty:_,ctx:s}),ut.$set(bt);const Nt={};_&1342177280&&(Nt.$$scope={dirty:_,ctx:s}),$t.$set(Nt),s[1]?z?(z.p(s,_),_&2&&h(z,1)):(z=be(s),z.c(),h(z,1),z.m(r,Ht)):z&&(Tt(),E(z,1,1,()=>{z=null}),Lt());const ue={};_&1073741825&&(ue.$$scope={dirty:_,ctx:s}),mt.$set(ue)},i(n){Rt||(h(e.$$.fragment,n),h(w.$$.fragment,n),h(g.$$.fragment,n),h(d.$$.fragment,n),h(Z.$$.fragment,n),h(M.$$.fragment,n),h(Y.$$.fragment,n),h(F.$$.fragment,n),h(rt.$$.fragment,n),h(nt.$$.fragment,n),h(st.$$.fragment,n),h(ft.$$.fragment,n),h(ut.$$.fragment,n),h($t.$$.fragment,n),h(z),h(mt.$$.fragment,n),Rt=!0)},o(n){E(e.$$.fragment,n),E(w.$$.fragment,n),E(g.$$.fragment,n),E(d.$$.fragment,n),E(Z.$$.fragment,n),E(M.$$.fragment,n),E(Y.$$.fragment,n),E(F.$$.fragment,n),E(rt.$$.fragment,n),E(nt.$$.fragment,n),E(st.$$.fragment,n),E(ft.$$.fragment,n),E(ut.$$.fragment,n),E($t.$$.fragment,n),E(z),E(mt.$$.fragment,n),Rt=!1},d(n){n&&o(t),T(e),T(w),T(g),T(d),T(Z),T(M),T(Y),T(F),B.block.d(),B.token=null,B=null,T(rt),T(nt),T(st),T(ft),T(ut),T($t),z&&z.d(),T(mt),re=!1,se()}}}function Vr(s,t,r){let a,e,{onSubmit:l}=t,{initialValues:i={full_description:"",mod_reference:"",name:"",short_description:"",source_url:"",hidden:!1,tagIDs:[],compatibility:{EA:{state:pe.Works,note:""},EXP:{state:pe.Works,note:""}}}}=t,{submitText:w="Create"}=t,{editing:p=!1}=t,m=[];const{form:g,data:u}=Be({initialValues:i,extend:[Ye({schema:he}),Fe],onSubmit:c=>l(Qe(c,he))});Ve(s,u,c=>r(3,e=c));const S=()=>{e.authors.push({role:"editor",user_id:"",key:""}),u.set(e)},d=c=>{e.authors.splice(c,1),u.set(e)};let W=!1;const I=e.compatibility;function Z(c){s.$$.not_equal(e.name,c)&&(e.name=c,u.set(e))}function $(c){s.$$.not_equal(e.mod_reference,c)&&(e.mod_reference=c,u.set(e))}function D(c){s.$$.not_equal(e.short_description,c)&&(e.short_description=c,u.set(e))}function M(c){s.$$.not_equal(e.full_description,c)&&(e.full_description=c,u.set(e))}function j(c){m=c,r(2,m),r(3,e)}function k(c){s.$$.not_equal(e.source_url,c)&&(e.source_url=c,u.set(e))}function O(c){s.$$.not_equal(e.hidden,c)&&(e.hidden=c,u.set(e))}function Y(c){W=c,r(4,W)}const It=()=>{Wt(u,e.compatibility=W?I:void 0,e)};function Dt(c){s.$$.not_equal(e.compatibility,c)&&(e.compatibility=c,u.set(e))}function F(c,J){s.$$.not_equal(e.authors[J].user_id,c)&&(e.authors[J].user_id=c,u.set(e))}const kt=c=>d(c);return s.$$set=c=>{"onSubmit"in c&&r(11,l=c.onSubmit),"initialValues"in c&&r(12,i=c.initialValues),"submitText"in c&&r(0,w=c.submitText),"editing"in c&&r(1,p=c.editing)},s.$$.update=()=>{if(s.$$.dirty&12){const c=e;c.tags&&(r(2,m=c.tags),delete c.tags),Wt(u,e.tagIDs=m.map(J=>J.id),e)}s.$$.dirty&8&&Wt(u,e.compatibility=e.compatibility?e.compatibility:void 0,e),s.$$.dirty&10&&(p||delete e.compatibility),s.$$.dirty&8&&r(5,a=e.full_description||"")},[w,p,m,e,W,a,g,u,S,d,I,l,i,Z,$,D,M,j,k,O,Y,It,Dt,F,kt]}class Mr extends Ie{constructor(t){super(),De(this,t,Vr,kr,ke,{onSubmit:11,initialValues:12,submitText:0,editing:1})}}export{Mr as M};
//# sourceMappingURL=ModForm-0416af15.js.map
