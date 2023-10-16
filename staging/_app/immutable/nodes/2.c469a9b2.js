import{aL as ae,S as jt,i as Xt,s as Yt,d as X,v as Lt,X as It,Y as lt,bl as dt,Z as ct,bm as W,k as St,l as j,af as mt,P as H,q as m,J as fe,aw as At,$ as ht,x as b,y as v,ac as d,bn as Pt,bj as K,av as tt,C as y,bo as at,aK as Bt,aQ as Gt,a8 as et,a6 as L,bi as ue,ab as nt,a9 as A,z as V,ae as st,ad as h,t as Q,n as $t,p as z,aj as ot,L as T,N as U,O as Z,a$ as bt,m as vt,b0 as Nt}from"../chunks/vendor.432952c9.js";import{e as de,f as me,M as he}from"../chunks/graphql.cb6ec208.js";import{l as ge}from"../chunks/gql.ff9241aa.js";import{M as Ft}from"../chunks/MetaDescriptors.24df24cb.js";import{F as Ot}from"../chunks/FicsitCard.c15f1225.js";import{M as qt}from"../chunks/ModCard.1ddcb6bb.js";import{d as ut,o as gt,e as pt}from"../chunks/global.a84198f3.js";const pe=async({parent:i})=>({...await ge({mods:ae({query:de,client:(await i()).client,variables:{offset:0,limit:4,order:me.Desc,orderBy:he.LastVersionDate}})})}),Me=Object.freeze(Object.defineProperty({__proto__:null,load:pe},Symbol.toStringTag,{value:"Module"}));const $e="src/lib/components/general/Doggo.svelte";function yt(i){let t,n,c;const e={c:function(){t=b("img"),this.h()},l:function(o){t=v(o,"IMG",{class:!0,src:!0,alt:!0,title:!0,style:!0}),this.h()},h:function(){d(t,"class",n=Pt("h-full doggo-flipper"+(i[1]?"-R":"-L"))+" s-7qWqUbRfAbQ4"),K(t.src,c=i[4])||d(t,"src",c),d(t,"alt","Doggo!"),d(t,"title","Click to pat doggo!"),tt(t,"width","200px"),tt(t,"height","auto"),tt(t,"position","absolute"),tt(t,"top",i[2]+"px"),tt(t,"left",i[3]+"px"),tt(t,"z-index","69"),y(t,$e,48,2,1531)},m:function(o,r){j(o,t,r)},p:function(o,r){r&2&&n!==(n=Pt("h-full doggo-flipper"+(o[1]?"-R":"-L"))+" s-7qWqUbRfAbQ4")&&d(t,"class",n),r&16&&!K(t.src,c=o[4])&&d(t,"src",c),r&4&&tt(t,"top",o[2]+"px"),r&8&&tt(t,"left",o[3]+"px")},d:function(o){o&&m(t)}};return X("SvelteRegisterBlock",{block:e,id:yt.name,type:"if",source:"(48:0) {#if $dogVisible}",ctx:i}),e}function xt(i){let t,n,c,e=i[5]&&yt(i);const s={c:function(){e&&e.c(),t=St()},l:function(r){e&&e.l(r),t=St()},m:function(r,l){e&&e.m(r,l),j(r,t,l),n||(c=[mt(window,"mousedown",i[9],!1,!1,!1,!1),mt(window,"mousemove",i[8],!1,!1,!1,!1),mt(window,"mouseup",i[10],!1,!1,!1,!1)],n=!0)},p:function(r,[l]){r[5]?e?e.p(r,l):(e=yt(r),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i:H,o:H,d:function(r){e&&e.d(r),r&&m(t),n=!1,fe(c)}};return X("SvelteRegisterBlock",{block:s,id:xt.name,type:"component",source:"",ctx:i}),s}function be(i,t,n){let c,e,s,o,r,l,f,u,p,E,D=H,g=()=>(D(),D=At(k,a=>n(5,E=a)),k);i.$$.on_destroy.push(()=>D());let{$$slots:$={},$$scope:w}=t;Lt("Doggo",$,[]);let{dogVisible:k=It(!1)}=t;lt(k,"dogVisible"),g();const I=dt(-2e3,{stiffness:.004,damping:.25,precision:1});lt(I,"x"),ct(i,I,a=>n(3,p=a));const G=dt(-1e3,{stiffness:.004,damping:.25,precision:1});lt(G,"y"),ct(i,G,a=>n(2,u=a));let B=W+"/images/dog_stand.gif",_={clientX:-1e3,clientY:0},O=!1;function J(a){!O&&k&&n(11,_=a)}function S(){n(4,B=W+"/images/dog_aw_yis_pats.gif"),O=!0}function q(){r&&S()}async function Y(){O&&(n(4,B=W+"/images/dog_boing.gif"),n(12,c=3e3),setTimeout(()=>{ht(k,E=!1,E),ht(I,p=-2e3,p),ht(G,u=-1e3,u),O=!1},700))}const R=["dogVisible"];return Object.keys(t).forEach(a=>{!~R.indexOf(a)&&a.slice(0,2)!=="$$"&&a!=="slot"&&console.warn(`<Doggo> was created with unknown prop '${a}'`)}),i.$$set=a=>{"dogVisible"in a&&g(n(0,k=a.dogVisible))},i.$capture_state=()=>({spring:dt,assets:W,writable:It,dogVisible:k,x:I,y:G,sprite:B,last_mouse:_,patting:O,update_pos:J,pat:S,try_pat:q,end_pat:Y,actual_mouse_x:c,isClose:r,actual_mouse_y:e,head_offset:f,isLookingRight:l,dy:o,dx:s,$y:u,$x:p,$dogVisible:E}),i.$inject_state=a=>{"dogVisible"in a&&g(n(0,k=a.dogVisible)),"sprite"in a&&n(4,B=a.sprite),"last_mouse"in a&&n(11,_=a.last_mouse),"patting"in a&&(O=a.patting),"actual_mouse_x"in a&&n(12,c=a.actual_mouse_x),"isClose"in a&&n(13,r=a.isClose),"actual_mouse_y"in a&&n(14,e=a.actual_mouse_y),"head_offset"in a&&n(15,f=a.head_offset),"isLookingRight"in a&&n(1,l=a.isLookingRight),"dy"in a&&n(16,o=a.dy),"dx"in a&&n(17,s=a.dx)},t&&"$$inject"in t&&i.$inject_state(t.$$inject),i.$$.update=()=>{i.$$.dirty&2048&&n(12,c=_.clientX-350),i.$$.dirty&2048&&n(14,e=_.clientY-100),i.$$.dirty&4104&&n(17,s=Math.abs(p-c)),i.$$.dirty&16388&&n(16,o=Math.abs(u-e)),i.$$.dirty&196608&&n(13,r=s<80&&o<40),i.$$.dirty&4104&&n(1,l=p<c),i.$$.dirty&8192&&n(4,B=W+("/images/dog_"+(r?"stand.gif":"boing.gif"))),i.$$.dirty&2&&n(15,f=l?-70:50),i.$$.dirty&36864&&I.set(c+f),i.$$.dirty&16384&&G.set(e)},[k,l,u,p,B,E,I,G,J,q,Y,_,c,r,e,f,o,s]}class zt extends jt{constructor(t){super(t),Xt(this,t,be,xt,Yt,{dogVisible:0}),X("SvelteRegisterComponent",{component:this,tagName:"Doggo",options:t,id:xt.name})}get dogVisible(){throw new Error("<Doggo>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set dogVisible(t){throw new Error("<Doggo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const x="src/routes/+page.svelte";function Ct(i,t,n){const c=i.slice();return c[11]=t[n],c}function ve(i,t,n){const c=i.slice();return c[8]=t[n],c}function Qt(i){let t,n,c;n=new at({props:{class:"h-full",$$slots:{default:[Ht]},$$scope:{ctx:i}},$$inline:!0});const e={c:function(){t=b("a"),et(n.$$.fragment),this.h()},l:function(o){t=v(o,"A",{href:!0,class:!0});var r=V(t);nt(n.$$.fragment,r),r.forEach(m),this.h()},h:function(){d(t,"href","/mods"),d(t,"class","overflow-hidden"),y(t,x,56,6,2640)},m:function(o,r){j(o,t,r),st(n,t,null),c=!0},p:function(o,r){const l={};r&16424&&(l.$$scope={dirty:r,ctx:o}),n.$set(l)},i:function(o){c||(z(n.$$.fragment,o),c=!0)},o:function(o){Q(n.$$.fragment,o),c=!1},d:function(o){o&&m(t),ot(n)}};return X("SvelteRegisterBlock",{block:e,id:Qt.name,type:"else",source:"(56:4) {:else}",ctx:i}),e}function Wt(i){let t,n,c;n=new at({props:{class:"h-full",$$slots:{default:[ne]},$$scope:{ctx:i}},$$inline:!0});const e={c:function(){t=b("a"),et(n.$$.fragment),this.h()},l:function(o){t=v(o,"A",{href:!0,rel:!0,target:!0});var r=V(t);nt(n.$$.fragment,r),r.forEach(m),this.h()},h:function(){d(t,"href","https://smm.ficsit.app"),d(t,"rel","noopener"),d(t,"target","_blank"),y(t,x,24,6,961)},m:function(o,r){j(o,t,r),st(n,t,null),c=!0},p:function(o,r){const l={};r&16412&&(l.$$scope={dirty:r,ctx:o}),n.$set(l)},i:function(o){c||(z(n.$$.fragment,o),c=!0)},o:function(o){Q(n.$$.fragment,o),c=!1},d:function(o){o&&m(t),ot(n)}};return X("SvelteRegisterBlock",{block:e,id:Wt.name,type:"if",source:"(24:4) {#if !$onMobile}",ctx:i}),e}function Jt(i){let t=i[5].data.getMods.count+"",n;const c={c:function(){n=T(t)},l:function(s){n=U(s,t)},m:function(s,o){j(s,n,o)},p:function(s,o){o&32&&t!==(t=s[5].data.getMods.count+"")&&Z(n,t)},d:function(s){s&&m(n)}};return X("SvelteRegisterBlock",{block:c,id:Jt.name,type:"else",source:"(71:20) {:else}",ctx:i}),c}function Tt(i){let t;const n={c:function(){t=T("...")},l:function(e){t=U(e,"...")},m:function(e,s){j(e,t,s)},p:H,d:function(e){e&&m(t)}};return X("SvelteRegisterBlock",{block:n,id:Tt.name,type:"if",source:"(69:20) {#if $mods.fetching || $mods.error}",ctx:i}),n}function Ut(i){let t=i[3]("home.banner.take-a-look")+"",n;const c={c:function(){n=T(t)},l:function(s){n=U(s,t)},m:function(s,o){j(s,n,o)},p:function(s,o){o&8&&t!==(t=s[3]("home.banner.take-a-look")+"")&&Z(n,t)},d:function(s){s&&m(n)}};return X("SvelteRegisterBlock",{block:c,id:Ut.name,type:"slot",source:'(81:14) <Button variant=\\"unelevated\\" class=\\"h-1/4 py-3 px-14 w-full\\" style=\\"background: #5a7b78; color: white\\">',ctx:i}),c}function Ht(i){let t,n,c,e,s,o,r,l,f,u,p=i[3]("home.banner.we-have-over")+"",E,D,g,$,w=i[3]("home.banner.mods")+"",k,I,G,B,_=i[3]("home.banner.most-are-compatible")+"",O,J,S,q,Y;function R(F,P){return F[5].fetching||F[5].error?Tt:Jt}let a=R(i),M=a(i);q=new Gt({props:{variant:"unelevated",class:"h-1/4 py-3 px-14 w-full",style:"background: #5a7b78; color: white",$$slots:{default:[Ut]},$$scope:{ctx:i}},$$inline:!0});const N={c:function(){t=b("div"),n=b("div"),c=L(),e=b("div"),s=b("img"),r=L(),l=b("div"),f=b("div"),u=b("div"),E=T(p),D=L(),g=b("span"),M.c(),$=L(),k=T(w),I=T("!"),G=L(),B=b("div"),O=T(_),J=L(),S=b("div"),et(q.$$.fragment),this.h()},l:function(P){t=v(P,"DIV",{class:!0});var C=V(t);n=v(C,"DIV",{class:!0}),V(n).forEach(m),c=A(C),e=v(C,"DIV",{class:!0});var it=V(e);s=v(it,"IMG",{class:!0,src:!0,alt:!0}),it.forEach(m),r=A(C),l=v(C,"DIV",{class:!0});var Rt=V(l);f=v(Rt,"DIV",{});var ft=V(f);u=v(ft,"DIV",{class:!0});var rt=V(u);E=U(rt,p),D=A(rt),g=v(rt,"SPAN",{class:!0});var Vt=V(g);M.l(Vt),Vt.forEach(m),$=A(rt),k=U(rt,w),I=U(rt,"!"),rt.forEach(m),G=A(ft),B=v(ft,"DIV",{class:!0});var Mt=V(B);O=U(Mt,_),Mt.forEach(m),ft.forEach(m),Rt.forEach(m),J=A(C),S=v(C,"DIV",{class:!0});var Dt=V(S);nt(q.$$.fragment,Dt),Dt.forEach(m),C.forEach(m),this.h()},h:function(){d(n,"class","smm-banner banner s-y_bCXRrkrYfP"),y(n,x,59,12,2770),d(s,"class","h-full"),K(s.src,o=W+"/images/mods_mobile.webp")||d(s,"src",o),d(s,"alt","Ficsit Minion"),y(s,x,61,14,2915),d(e,"class","flex absolute w-full h-full top-0 items-center justify-end text-center"),y(e,x,60,12,2816),d(g,"class","text-amber-600 font-bold"),y(g,x,67,18,3223),d(u,"class","text-md"),y(u,x,65,16,3132),d(B,"class","text-md max-w-prose"),y(B,x,76,16,3557),y(f,x,64,14,3110),d(l,"class","flex absolute w-full h-4/5 top-0 items-center pl-8"),y(l,x,63,12,3031),d(S,"class","flex absolute w-full h-full top-0 items-end justify-center"),y(S,x,79,12,3688),d(t,"class","relative h-full w-full"),y(t,x,58,10,2721)},m:function(P,C){j(P,t,C),h(t,n),h(t,c),h(t,e),h(e,s),h(t,r),h(t,l),h(l,f),h(f,u),h(u,E),h(u,D),h(u,g),M.m(g,null),h(u,$),h(u,k),h(u,I),h(f,G),h(f,B),h(B,O),h(t,J),h(t,S),st(q,S,null),Y=!0},p:function(P,C){(!Y||C&8)&&p!==(p=P[3]("home.banner.we-have-over")+"")&&Z(E,p),a===(a=R(P))&&M?M.p(P,C):(M.d(1),M=a(P),M&&(M.c(),M.m(g,null))),(!Y||C&8)&&w!==(w=P[3]("home.banner.mods")+"")&&Z(k,w),(!Y||C&8)&&_!==(_=P[3]("home.banner.most-are-compatible")+"")&&Z(O,_);const it={};C&16392&&(it.$$scope={dirty:C,ctx:P}),q.$set(it)},i:function(P){Y||(z(q.$$.fragment,P),Y=!0)},o:function(P){Q(q.$$.fragment,P),Y=!1},d:function(P){P&&m(t),M.d(),ot(q)}};return X("SvelteRegisterBlock",{block:N,id:Ht.name,type:"slot",source:'(58:8) <Card class=\\"h-full\\">',ctx:i}),N}function Kt(i){let t,n;const c={c:function(){t=b("img"),this.h()},l:function(s){t=v(s,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h:function(){d(t,"class","h-full flipped s-y_bCXRrkrYfP"),K(t.src,n=W+"/images/smm_hand.webp")||d(t,"src",n),d(t,"alt","Ficsit Minion"),y(t,x,33,16,1522)},m:function(s,o){j(s,t,o)},p:H,d:function(s){s&&m(t)}};return X("SvelteRegisterBlock",{block:c,id:Kt.name,type:"else",source:"(33:14) {:else}",ctx:i}),c}function Zt(i){let t,n,c,e,s;const o={c:function(){t=b("img"),c=L(),e=b("img"),this.h()},l:function(l){t=v(l,"IMG",{class:!0,src:!0,alt:!0}),c=A(l),e=v(l,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h:function(){d(t,"class","h-full flipper-1 s-y_bCXRrkrYfP"),K(t.src,n=W+"/images/smm_hand.webp")||d(t,"src",n),d(t,"alt","Ficsit Minion"),y(t,x,30,16,1284),d(e,"class","h-full flipper-2 s-y_bCXRrkrYfP"),K(e.src,s=W+"/images/smm_hand.webp")||d(e,"src",s),d(e,"alt","Ficsit Minion"),y(e,x,31,16,1392)},m:function(l,f){j(l,t,f),j(l,c,f),j(l,e,f)},p:H,d:function(l){l&&m(t),l&&m(c),l&&m(e)}};return X("SvelteRegisterBlock",{block:o,id:Zt.name,type:"if",source:"(30:14) {#if $easterEgg}",ctx:i}),o}function wt(i){let t=" - Doggo",n;const c={c:function(){n=T(t)},l:function(s){n=U(s,t)},m:function(s,o){j(s,n,o)},d:function(s){s&&m(n)}};return X("SvelteRegisterBlock",{block:c,id:wt.name,type:"if",source:"(40:18) {#if $easterEgg || $doggoNeedsPats}",ctx:i}),c}function te(i){let t,n;const c={c:function(){t=b("img"),this.h()},l:function(s){t=v(s,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h:function(){d(t,"class","h-full"),K(t.src,n=W+"/images/smm_hand.webp")||d(t,"src",n),d(t,"alt","Ficsit Minion"),y(t,x,49,16,2457)},m:function(s,o){j(s,t,o)},p:H,d:function(s){s&&m(t)}};return X("SvelteRegisterBlock",{block:c,id:te.name,type:"else",source:"(49:14) {:else}",ctx:i}),c}function ee(i){let t,n,c,e,s;const o={c:function(){t=b("img"),c=L(),e=b("img"),this.h()},l:function(l){t=v(l,"IMG",{class:!0,src:!0,alt:!0}),c=A(l),e=v(l,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h:function(){d(t,"class","h-full flipper-3 s-y_bCXRrkrYfP"),K(t.src,n=W+"/images/smm_hand.webp")||d(t,"src",n),d(t,"alt","Ficsit Minion"),y(t,x,46,16,2219),d(e,"class","h-full flipper-4 s-y_bCXRrkrYfP"),K(e.src,s=W+"/images/smm_hand.webp")||d(e,"src",s),d(e,"alt","Ficsit Minion"),y(e,x,47,16,2327)},m:function(l,f){j(l,t,f),j(l,c,f),j(l,e,f)},p:H,d:function(l){l&&m(t),l&&m(c),l&&m(e)}};return X("SvelteRegisterBlock",{block:o,id:ee.name,type:"if",source:"(46:14) {#if $easterEgg}",ctx:i}),o}function ne(i){let t,n,c,e,s,o,r,l=i[3]("home.satisfactory-mod-manager")+"",f,u,p,E,D,g,$,w,k;function I(Y,R){return Y[2]?Zt:Kt}let G=I(i),B=G(i),_=(i[2]||i[4])&&wt(i);function O(Y,R){return Y[2]?ee:te}let J=O(i),S=J(i);const q={c:function(){t=b("div"),n=b("div"),c=L(),e=b("div"),B.c(),s=L(),o=b("div"),r=b("div"),f=T(l),u=L(),p=b("div"),E=T(`Windows - Linux - Epic - Steam
                  `),_&&_.c(),D=L(),g=b("div"),$=b("img"),k=L(),S.c(),this.h()},l:function(R){t=v(R,"DIV",{class:!0});var a=V(t);n=v(a,"DIV",{class:!0}),V(n).forEach(m),c=A(a),e=v(a,"DIV",{class:!0});var M=V(e);B.l(M),s=A(M),o=v(M,"DIV",{class:!0});var N=V(o);r=v(N,"DIV",{class:!0});var F=V(r);f=U(F,l),F.forEach(m),u=A(N),p=v(N,"DIV",{class:!0});var P=V(p);E=U(P,`Windows - Linux - Epic - Steam
                  `),_&&_.l(P),P.forEach(m),D=A(N),g=v(N,"DIV",{class:!0});var C=V(g);$=v(C,"IMG",{class:!0,src:!0,alt:!0}),C.forEach(m),N.forEach(m),k=A(M),S.l(M),M.forEach(m),a.forEach(m),this.h()},h:function(){d(n,"class","banner smm-banner s-y_bCXRrkrYfP"),y(n,x,27,12,1115),d(r,"class","text-4xl mb-2"),y(r,x,36,16,1688),d(p,"class","text-xl mb-4"),y(p,x,37,16,1775),d($,"class","h-full"),K($.src,w=W+"/images/smm_icon_white.webp")||d($,"src",w),d($,"alt","Satisfactory Mod Manager"),y($,x,42,18,2029),d(g,"class","2xl:h-1/2 h-1/3 flex justify-center"),y(g,x,41,16,1961),d(o,"class","text-center"),y(o,x,35,14,1646),d(e,"class","flex absolute w-full h-full top-0 items-center justify-center"),y(e,x,28,12,1161),d(t,"class","relative h-full w-full"),y(t,x,26,10,1066)},m:function(R,a){j(R,t,a),h(t,n),h(t,c),h(t,e),B.m(e,null),h(e,s),h(e,o),h(o,r),h(r,f),h(o,u),h(o,p),h(p,E),_&&_.m(p,null),h(o,D),h(o,g),h(g,$),h(e,k),S.m(e,null)},p:function(R,a){G===(G=I(R))&&B?B.p(R,a):(B.d(1),B=G(R),B&&(B.c(),B.m(e,s))),a&8&&l!==(l=R[3]("home.satisfactory-mod-manager")+"")&&Z(f,l),R[2]||R[4]?_||(_=wt(R),_.c(),_.m(p,null)):_&&(_.d(1),_=null),J===(J=O(R))&&S?S.p(R,a):(S.d(1),S=J(R),S&&(S.c(),S.m(e,null)))},d:function(R){R&&m(t),B.d(),_&&_.d(),S.d()}};return X("SvelteRegisterBlock",{block:q,id:ne.name,type:"slot",source:'(26:8) <Card class=\\"h-full\\">',ctx:i}),q}function se(i){let t,n,c,e,s,o,r,l,f,u=i[3]("home.banner.community-run-discord")+"",p;const E={c:function(){t=b("div"),n=b("div"),c=L(),e=b("div"),s=b("img"),r=L(),l=b("div"),f=b("span"),p=T(u),this.h()},l:function(g){t=v(g,"DIV",{class:!0});var $=V(t);n=v($,"DIV",{class:!0}),V(n).forEach(m),c=A($),e=v($,"DIV",{class:!0});var w=V(e);s=v(w,"IMG",{class:!0,src:!0,alt:!0}),w.forEach(m),r=A($),l=v($,"DIV",{class:!0});var k=V(l);f=v(k,"SPAN",{});var I=V(f);p=U(I,u),I.forEach(m),k.forEach(m),$.forEach(m),this.h()},h:function(){d(n,"class","modding-banner banner s-y_bCXRrkrYfP"),y(n,x,94,10,4293),d(s,"class","centered-logo s-y_bCXRrkrYfP"),K(s.src,o=W+"/images/sf_modding_logo.webp")||d(s,"src",o),d(s,"alt","Satisfactory Modding Logo"),y(s,x,96,12,4429),d(e,"class","flex absolute w-full h-full top-0 items-center justify-center"),y(e,x,95,10,4341),y(f,x,99,12,4664),d(l,"class","absolute bottom-0 pb-4 px-4 w-full text-gray-400 text-center xl:text-left"),y(l,x,98,10,4564),d(t,"class","relative h-full w-full"),y(t,x,93,8,4246)},m:function(g,$){j(g,t,$),h(t,n),h(t,c),h(t,e),h(e,s),h(t,r),h(t,l),h(l,f),h(f,p)},p:function(g,$){$&8&&u!==(u=g[3]("home.banner.community-run-discord")+"")&&Z(p,u)},d:function(g){g&&m(t)}};return X("SvelteRegisterBlock",{block:E,id:se.name,type:"slot",source:'(93:6) <Card class=\\"h-full\\">',ctx:i}),E}function oe(i){let t,n,c,e,s,o,r,l,f,u=i[3]("home.banner.official-website")+"",p;const E={c:function(){t=b("div"),n=b("div"),c=L(),e=b("div"),s=b("img"),r=L(),l=b("div"),f=b("span"),p=T(u),this.h()},l:function(g){t=v(g,"DIV",{class:!0});var $=V(t);n=v($,"DIV",{class:!0}),V(n).forEach(m),c=A($),e=v($,"DIV",{class:!0});var w=V(e);s=v(w,"IMG",{class:!0,src:!0,alt:!0}),w.forEach(m),r=A($),l=v($,"DIV",{class:!0});var k=V(l);f=v(k,"SPAN",{});var I=V(f);p=U(I,u),I.forEach(m),k.forEach(m),$.forEach(m),this.h()},h:function(){d(n,"class","css-banner banner s-y_bCXRrkrYfP"),y(n,x,107,10,4974),d(s,"class","centered-logo s-y_bCXRrkrYfP"),K(s.src,o=W+"/images/satisfactory_logo_full_color_small.webp")||d(s,"src",o),d(s,"alt","Satisfactory Logo"),y(s,x,109,12,5106),d(e,"class","flex absolute w-full h-full top-0 items-center justify-center"),y(e,x,108,10,5018),y(f,x,115,12,5395),d(l,"class","absolute bottom-0 pb-4 px-4 w-full text-gray-300 text-center xl:text-right"),y(l,x,114,10,5294),d(t,"class","relative h-full w-full"),y(t,x,106,8,4927)},m:function(g,$){j(g,t,$),h(t,n),h(t,c),h(t,e),h(e,s),h(t,r),h(t,l),h(l,f),h(f,p)},p:function(g,$){$&8&&u!==(u=g[3]("home.banner.official-website")+"")&&Z(p,u)},d:function(g){g&&m(t)}};return X("SvelteRegisterBlock",{block:E,id:oe.name,type:"slot",source:'(106:6) <Card class=\\"h-full\\">',ctx:i}),E}function ie(i){let t,n,c=i[5].data.getMods.mods;bt(c);let e=[];for(let r=0;r<c.length;r+=1)e[r]=kt(Ct(i,c,r));const s=r=>Q(e[r],1,1,()=>{e[r]=null}),o={c:function(){t=b("div");for(let l=0;l<e.length;l+=1)e[l].c();this.h()},l:function(l){t=v(l,"DIV",{class:!0});var f=V(t);for(let u=0;u<e.length;u+=1)e[u].l(f);f.forEach(m),this.h()},h:function(){d(t,"class","grid "+Et+" gap-4 s-y_bCXRrkrYfP"),y(t,x,131,4,5749)},m:function(l,f){j(l,t,f);for(let u=0;u<e.length;u+=1)e[u]&&e[u].m(t,null);n=!0},p:function(l,f){if(f&32){c=l[5].data.getMods.mods,bt(c);let u;for(u=0;u<c.length;u+=1){const p=Ct(l,c,u);e[u]?(e[u].p(p,f),z(e[u],1)):(e[u]=kt(p),e[u].c(),z(e[u],1),e[u].m(t,null))}for(vt(),u=c.length;u<e.length;u+=1)s(u);$t()}},i:function(l){if(!n){for(let f=0;f<c.length;f+=1)z(e[f]);n=!0}},o:function(l){e=e.filter(Boolean);for(let f=0;f<e.length;f+=1)Q(e[f]);n=!1},d:function(l){l&&m(t),Nt(e,l)}};return X("SvelteRegisterBlock",{block:o,id:ie.name,type:"else",source:"(131:2) {:else}",ctx:i}),o}function le(i){let t,n=i[3]("error.oh-no")+"",c,e,s=i[5].error.message+"",o;const r={c:function(){t=b("p"),c=T(n),e=L(),o=T(s),this.h()},l:function(f){t=v(f,"P",{});var u=V(t);c=U(u,n),e=A(u),o=U(u,s),u.forEach(m),this.h()},h:function(){y(t,x,129,4,5686)},m:function(f,u){j(f,t,u),h(t,c),h(t,e),h(t,o)},p:function(f,u){u&8&&n!==(n=f[3]("error.oh-no")+"")&&Z(c,n),u&32&&s!==(s=f[5].error.message+"")&&Z(o,s)},i:H,o:H,d:function(f){f&&m(t)}};return X("SvelteRegisterBlock",{block:r,id:le.name,type:"if",source:"(129:24) ",ctx:i}),r}function re(i){let t,n,c=Array(4);bt(c);let e=[];for(let o=0;o<c.length;o+=1)e[o]=ce(ve(i,c,o));const s={c:function(){t=b("div");for(let r=0;r<e.length;r+=1)e[r].c();this.h()},l:function(r){t=v(r,"DIV",{class:!0});var l=V(t);for(let f=0;f<e.length;f+=1)e[f].l(l);l.forEach(m),this.h()},h:function(){d(t,"class","grid "+Et+" gap-4 s-y_bCXRrkrYfP"),y(t,x,123,4,5537)},m:function(r,l){j(r,t,l);for(let f=0;f<e.length;f+=1)e[f]&&e[f].m(t,null);n=!0},p:H,i:function(r){if(!n){for(let l=0;l<c.length;l+=1)z(e[l]);n=!0}},o:function(r){e=e.filter(Boolean);for(let l=0;l<e.length;l+=1)Q(e[l]);n=!1},d:function(r){r&&m(t),Nt(e,r)}};return X("SvelteRegisterBlock",{block:s,id:re.name,type:"if",source:"(123:2) {#if $mods.fetching}",ctx:i}),s}function kt(i){let t,n;t=new qt({props:{mod:i[11]},$$inline:!0});const c={c:function(){et(t.$$.fragment)},l:function(s){nt(t.$$.fragment,s)},m:function(s,o){st(t,s,o),n=!0},p:function(s,o){const r={};o&32&&(r.mod=s[11]),t.$set(r)},i:function(s){n||(z(t.$$.fragment,s),n=!0)},o:function(s){Q(t.$$.fragment,s),n=!1},d:function(s){ot(t,s)}};return X("SvelteRegisterBlock",{block:c,id:kt.name,type:"each",source:"(133:6) {#each $mods.data.getMods.mods as mod}",ctx:i}),c}function ce(i){let t,n;t=new Ot({props:{fake:!0},$$inline:!0});const c={c:function(){et(t.$$.fragment)},l:function(s){nt(t.$$.fragment,s)},m:function(s,o){st(t,s,o),n=!0},p:H,i:function(s){n||(z(t.$$.fragment,s),n=!0)},o:function(s){Q(t.$$.fragment,s),n=!1},d:function(s){ot(t,s)}};return X("SvelteRegisterBlock",{block:c,id:ce.name,type:"each",source:"(125:6) {#each Array(4) as _}",ctx:i}),c}function _t(i){let t,n,c,e,s,o,r,l,f,u,p,E,D,g,$,w,k,I,G;t=new Ft({props:{description:"Satisfactory Mod Repository",title:"Home"},$$inline:!0}),c=new zt({props:{dogVisible:ut},$$inline:!0});const B=[Wt,Qt],_=[];function O(R,a){return R[1]?1:0}r=O(i),l=_[r]=B[r](i),E=new at({props:{class:"h-full",$$slots:{default:[se]},$$scope:{ctx:i}},$$inline:!0}),$=new at({props:{class:"h-full",$$slots:{default:[oe]},$$scope:{ctx:i}},$$inline:!0});const J=[re,le,ie],S=[];function q(R,a){return R[5].fetching?0:R[5].error?1:2}k=q(i),I=S[k]=J[k](i);const Y={c:function(){et(t.$$.fragment),n=L(),et(c.$$.fragment),e=L(),s=b("div"),o=b("div"),l.c(),f=L(),u=b("div"),p=b("a"),et(E.$$.fragment),D=L(),g=b("a"),et($.$$.fragment),w=L(),I.c(),this.h()},l:function(a){const M=ue("svelte-uhqw2p",document.head);nt(t.$$.fragment,M),M.forEach(m),n=A(a),nt(c.$$.fragment,a),e=A(a),s=v(a,"DIV",{class:!0,style:!0});var N=V(s);o=v(N,"DIV",{class:!0});var F=V(o);l.l(F),F.forEach(m),f=A(N),u=v(N,"DIV",{class:!0});var P=V(u);p=v(P,"A",{href:!0,rel:!0,target:!0,class:!0});var C=V(p);nt(E.$$.fragment,C),C.forEach(m),D=A(P),g=v(P,"A",{href:!0,rel:!0,target:!0,class:!0});var it=V(g);nt($.$$.fragment,it),it.forEach(m),P.forEach(m),w=A(N),I.l(N),N.forEach(m),this.h()},h:function(){d(o,"class","mb-4 min-h-[25vh] overflow-hidden"),y(o,x,22,2,886),d(p,"href","https://discord.gg/xkVJ73E"),d(p,"rel","noopener"),d(p,"target","_blank"),d(p,"class","overflow-hidden min-h-[25vh]"),y(p,x,91,4,4104),d(g,"href","https://www.satisfactorygame.com/"),d(g,"rel","noopener"),d(g,"target","_blank"),d(g,"class","overflow-hidden min-h-[25vh]"),y(g,x,104,4,4778),d(u,"class","grid xl:grid-cols-2 grid-cols-1 gap-4 flex-1 mb-4"),y(u,x,90,2,4036),d(s,"class","flex flex-col min-h-full"),tt(s,"height","calc(100vh - 64px - 3rem)"),y(s,x,21,0,803)},m:function(a,M){st(t,document.head,null),j(a,n,M),st(c,a,M),j(a,e,M),j(a,s,M),h(s,o),_[r].m(o,null),h(s,f),h(s,u),h(u,p),st(E,p,null),h(u,D),h(u,g),st($,g,null),h(s,w),S[k].m(s,null),G=!0},p:function(a,[M]){let N=r;r=O(a),r===N?_[r].p(a,M):(vt(),Q(_[N],1,1,()=>{_[N]=null}),$t(),l=_[r],l?l.p(a,M):(l=_[r]=B[r](a),l.c()),z(l,1),l.m(o,null));const F={};M&16392&&(F.$$scope={dirty:M,ctx:a}),E.$set(F);const P={};M&16392&&(P.$$scope={dirty:M,ctx:a}),$.$set(P);let C=k;k=q(a),k===C?S[k].p(a,M):(vt(),Q(S[C],1,1,()=>{S[C]=null}),$t(),I=S[k],I?I.p(a,M):(I=S[k]=J[k](a),I.c()),z(I,1),I.m(s,null))},i:function(a){G||(z(t.$$.fragment,a),z(c.$$.fragment,a),z(l),z(E.$$.fragment,a),z($.$$.fragment,a),z(I),G=!0)},o:function(a){Q(t.$$.fragment,a),Q(c.$$.fragment,a),Q(l),Q(E.$$.fragment,a),Q($.$$.fragment,a),Q(I),G=!1},d:function(a){ot(t),a&&m(n),ot(c,a),a&&m(e),a&&m(s),_[r].d(),ot(E),ot($),S[k].d()}};return X("SvelteRegisterBlock",{block:Y,id:_t.name,type:"component",source:"",ctx:i}),Y}const Et="3xl:grid-cols-4 lg:grid-cols-2 grid-cols-1";function ye(i,t,n){let c,e,s,o=H,r=()=>(o(),o=At(g,w=>n(3,s=w)),g),l,f;lt(gt,"onMobile"),ct(i,gt,w=>n(1,c=w)),lt(pt,"easterEgg"),ct(i,pt,w=>n(2,e=w)),lt(ut,"doggoNeedsPats"),ct(i,ut,w=>n(4,l=w)),i.$$.on_destroy.push(()=>o());let{$$slots:u={},$$scope:p}=t;Lt("Page",u,[]);let{data:E}=t;const{mods:D}=E;lt(D,"mods"),ct(i,D,w=>n(5,f=w));const{t:g}=Bt();lt(g,"t"),r(),i.$$.on_mount.push(function(){E===void 0&&!("data"in t||i.$$.bound[i.$$.props.data])&&console.warn("<Page> was created without expected prop 'data'")});const $=["data"];return Object.keys(t).forEach(w=>{!~$.indexOf(w)&&w.slice(0,2)!=="$$"&&w!=="slot"&&console.warn(`<Page> was created with unknown prop '${w}'`)}),i.$$set=w=>{"data"in w&&n(7,E=w.data)},i.$capture_state=()=>({MetaDescriptors:Ft,FicsitCard:Ot,ModCard:qt,Doggo:zt,Card:at,assets:W,Button:Gt,onMobile:gt,easterEgg:pt,doggoNeedsPats:ut,getTranslate:Bt,data:E,mods:D,t:g,gridClasses:Et,$onMobile:c,$easterEgg:e,$t:s,$doggoNeedsPats:l,$mods:f}),i.$inject_state=w=>{"data"in w&&n(7,E=w.data)},t&&"$$inject"in t&&i.$inject_state(t.$$inject),[g,c,e,s,l,f,D,E]}class De extends jt{constructor(t){super(t),Xt(this,t,ye,_t,Yt,{data:7,t:0}),X("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:_t.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(t){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get t(){return this.$$.ctx[0]}set t(t){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{De as component,Me as universal};
//# sourceMappingURL=2.c469a9b2.js.map
