import{S as $e,i as ve,s as xe,e as d,c as g,a7 as n,bi as fe,aY as H,h as Z,j as _,f,b as ue,T as le,r as B,O as Ie,q as be,bj as he,al as ee,w as Ve,an as se,aC as De,ba as te,W as z,a as A,aT as _e,X as J,g as F,d as x,Y as K,a5 as h,t as N,l as re,m as W,$ as Q,aa as C,ab as R,k as ae,aH as ke,aM as we,ac as ye}from"../chunks/vendor-5142eec8.js";import{l as je}from"../chunks/gql-a9b1b36c.js";import{n as Se,M as Ge,o as Ae}from"../chunks/graphql-cad820f4.js";import{M as Fe}from"../chunks/MetaDescriptors-2c89eebb.js";import{F as Le}from"../chunks/FicsitCard-cb069a10.js";import{M as Te}from"../chunks/ModCard-95afee6d.js";import{a as Y}from"../chunks/paths-1c47712a.js";import{d as Ee,o as We,e as Oe}from"../chunks/global-d21eb674.js";import"../chunks/stores-8521e192.js";import"../chunks/navigation-ce539261.js";import"../chunks/singletons-cdeec3fd.js";import"../chunks/launcher-bc9eb8a9.js";import"../chunks/formatting-b1e7d458.js";import"../chunks/CompatibilityButton-842fdf46.js";function me(i){let e,l,s;return{c(){e=d("img"),this.h()},l(t){e=g(t,"IMG",{class:!0,src:!0,alt:!0,title:!0,style:!0}),this.h()},h(){n(e,"class",l=fe("h-full doggo-flipper"+(i[1]?"-R":"-L"))+" svelte-lj1jxn"),H(e.src,s=i[4])||n(e,"src",s),n(e,"alt","Doggo!"),n(e,"title",`Click to pat doggo!
Art by Zago#5322 (discord)/ZagoTheSpider (youtube)`),Z(e,"width","200px"),Z(e,"height","auto"),Z(e,"position","absolute"),Z(e,"top",i[2]+"px"),Z(e,"left",i[3]+"px"),Z(e,"z-index","69")},m(t,r){_(t,e,r)},p(t,r){r&2&&l!==(l=fe("h-full doggo-flipper"+(t[1]?"-R":"-L"))+" svelte-lj1jxn")&&n(e,"class",l),r&16&&!H(e.src,s=t[4])&&n(e,"src",s),r&4&&Z(e,"top",t[2]+"px"),r&8&&Z(e,"left",t[3]+"px")},d(t){t&&f(e)}}}function Ne(i){let e,l,s,t=i[5]&&me(i);return{c(){t&&t.c(),e=ue()},l(r){t&&t.l(r),e=ue()},m(r,a){t&&t.m(r,a),_(r,e,a),l||(s=[le(window,"mousedown",i[9]),le(window,"mousemove",i[8]),le(window,"mouseup",i[10])],l=!0)},p(r,[a]){r[5]?t?t.p(r,a):(t=me(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:B,o:B,d(r){t&&t.d(r),r&&f(e),l=!1,Ie(s)}}}function Pe(i,e,l){let s,t,r,a,c,o,v,m,b,p,j=B,E=()=>(j(),j=be(y,M=>l(5,p=M)),y);i.$$.on_destroy.push(()=>j());let{dogVisible:y=Ve(!1)}=e;E();const O=he(-2e3,{stiffness:.004,damping:.25,precision:1});ee(i,O,M=>l(3,b=M));const S=he(-1e3,{stiffness:.004,damping:.25,precision:1});ee(i,S,M=>l(2,m=M));let I=Y+"/images/dog_stand.gif",k={clientX:-1e3,clientY:0},D=!1;function L(M){!D&&y&&l(11,k=M)}function T(){l(4,I=Y+"/images/dog_aw_yis_pats.gif"),D=!0}function G(){c&&T()}async function w(){D&&(l(4,I=Y+"/images/dog_boing.gif"),l(12,s=3e3),setTimeout(()=>{se(y,p=!1,p),se(O,b=-2e3,b),se(S,m=-1e3,m),D=!1},700))}return i.$$set=M=>{"dogVisible"in M&&E(l(0,y=M.dogVisible))},i.$$.update=()=>{i.$$.dirty&2048&&l(12,s=k.clientX-350),i.$$.dirty&2048&&l(14,t=k.clientY-100),i.$$.dirty&4104&&l(17,r=Math.abs(b-s)),i.$$.dirty&16388&&l(16,a=Math.abs(m-t)),i.$$.dirty&196608&&l(13,c=r<80&&a<40),i.$$.dirty&4104&&l(1,o=b<s),i.$$.dirty&8192&&l(4,I=Y+("/images/dog_"+(c?"stand.gif":"boing.gif"))),i.$$.dirty&2&&l(15,v=o?-70:50),i.$$.dirty&36864&&O.set(s+v),i.$$.dirty&16384&&S.set(t)},[y,o,m,b,I,p,O,S,L,G,w,k,s,c,t,v,a,r]}class Be extends $e{constructor(e){super(),ve(this,e,Pe,Ne,xe,{dogVisible:0})}}function de(i,e,l){const s=i.slice();return s[8]=e[l],s}function Ce(i,e,l){const s=i.slice();return s[5]=e[l],s}function Re(i){let e,l,s;return l=new te({props:{class:"h-full",$$slots:{default:[Ze]},$$scope:{ctx:i}}}),{c(){e=d("a"),z(l.$$.fragment),this.h()},l(t){e=g(t,"A",{href:!0,class:!0});var r=x(e);J(l.$$.fragment,r),r.forEach(f),this.h()},h(){n(e,"href","/mods"),n(e,"class","overflow-hidden")},m(t,r){_(t,e,r),K(l,e,null),s=!0},p(t,r){const a={};r&2064&&(a.$$scope={dirty:r,ctx:t}),l.$set(a)},i(t){s||(W(l.$$.fragment,t),s=!0)},o(t){N(l.$$.fragment,t),s=!1},d(t){t&&f(e),Q(l)}}}function Ye(i){let e,l,s;return l=new te({props:{class:"h-full",$$slots:{default:[Ue]},$$scope:{ctx:i}}}),{c(){e=d("a"),z(l.$$.fragment),this.h()},l(t){e=g(t,"A",{href:!0,rel:!0,target:!0});var r=x(e);J(l.$$.fragment,r),r.forEach(f),this.h()},h(){n(e,"href","https://smm.ficsit.app"),n(e,"rel","noopener"),n(e,"target","_blank")},m(t,r){_(t,e,r),K(l,e,null),s=!0},p(t,r){const a={};r&2060&&(a.$$scope={dirty:r,ctx:t}),l.$set(a)},i(t){s||(W(l.$$.fragment,t),s=!0)},o(t){N(l.$$.fragment,t),s=!1},d(t){t&&f(e),Q(l)}}}function qe(i){let e=i[4].data.getMods.count+"",l;return{c(){l=C(e)},l(s){l=R(s,e)},m(s,t){_(s,l,t)},p(s,t){t&16&&e!==(e=s[4].data.getMods.count+"")&&ye(l,e)},d(s){s&&f(l)}}}function Xe(i){let e;return{c(){e=C("...")},l(l){e=R(l,"...")},m(l,s){_(l,e,s)},p:B,d(l){l&&f(e)}}}function He(i){let e;return{c(){e=C("Take a look!")},l(l){e=R(l,"Take a look!")},m(l,s){_(l,e,s)},d(l){l&&f(e)}}}function Ze(i){let e,l,s,t,r,a,c,o,v,m,b,p,j,E,y,O,S,I,k,D,L,T,G;function w($,V){return $[4].fetching||$[4].error?Xe:qe}let M=w(i),u=M(i);return T=new ke({props:{variant:"unelevated",class:"h-1/4 py-3 px-14 w-full",style:"background: #5a7b78; color: white",$$slots:{default:[He]},$$scope:{ctx:i}}}),{c(){e=d("div"),l=d("div"),s=A(),t=d("div"),r=d("img"),c=A(),o=d("div"),v=d("div"),m=d("div"),b=C("We have over "),p=d("span"),u.c(),j=C(" mods!"),E=A(),y=d("div"),O=C("Most are compatible with the"),S=A(),I=d("div"),k=C("latest version of satisfactory."),D=A(),L=d("div"),z(T.$$.fragment),this.h()},l($){e=g($,"DIV",{class:!0});var V=x(e);l=g(V,"DIV",{class:!0}),x(l).forEach(f),s=F(V),t=g(V,"DIV",{class:!0});var P=x(t);r=g(P,"IMG",{class:!0,src:!0,alt:!0}),P.forEach(f),c=F(V),o=g(V,"DIV",{class:!0});var q=x(o);v=g(q,"DIV",{});var X=x(v);m=g(X,"DIV",{class:!0});var U=x(m);b=R(U,"We have over "),p=g(U,"SPAN",{class:!0});var ie=x(p);u.l(ie),ie.forEach(f),j=R(U," mods!"),U.forEach(f),E=F(X),y=g(X,"DIV",{class:!0});var ne=x(y);O=R(ne,"Most are compatible with the"),ne.forEach(f),S=F(X),I=g(X,"DIV",{class:!0});var ce=x(I);k=R(ce,"latest version of satisfactory."),ce.forEach(f),X.forEach(f),q.forEach(f),D=F(V),L=g(V,"DIV",{class:!0});var oe=x(L);J(T.$$.fragment,oe),oe.forEach(f),V.forEach(f),this.h()},h(){n(l,"class","smm-banner banner svelte-7e1xtk"),n(r,"class","h-full"),H(r.src,a=Y+"/images/mods_mobile.webp")||n(r,"src",a),n(r,"alt","Ficsit Minion"),n(t,"class","flex absolute w-full h-full top-0 items-center justify-end text-center"),n(p,"class","text-amber-600 font-bold"),n(m,"class","text-md"),n(y,"class","text-md"),n(I,"class","text-md mb-4"),n(o,"class","flex absolute w-full h-4/5 top-0 items-center pl-8"),n(L,"class","flex absolute w-full h-full top-0 items-end justify-center"),n(e,"class","relative h-full w-full")},m($,V){_($,e,V),h(e,l),h(e,s),h(e,t),h(t,r),h(e,c),h(e,o),h(o,v),h(v,m),h(m,b),h(m,p),u.m(p,null),h(m,j),h(v,E),h(v,y),h(y,O),h(v,S),h(v,I),h(I,k),h(e,D),h(e,L),K(T,L,null),G=!0},p($,V){M===(M=w($))&&u?u.p($,V):(u.d(1),u=M($),u&&(u.c(),u.m(p,null)));const P={};V&2048&&(P.$$scope={dirty:V,ctx:$}),T.$set(P)},i($){G||(W(T.$$.fragment,$),G=!0)},o($){N(T.$$.fragment,$),G=!1},d($){$&&f(e),u.d(),Q(T)}}}function ze(i){let e,l;return{c(){e=d("img"),this.h()},l(s){e=g(s,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){n(e,"class","h-full flipped svelte-7e1xtk"),H(e.src,l=Y+"/images/smm_hand.webp")||n(e,"src",l),n(e,"alt","Ficsit Minion")},m(s,t){_(s,e,t)},p:B,d(s){s&&f(e)}}}function Je(i){let e,l,s,t,r;return{c(){e=d("img"),s=A(),t=d("img"),this.h()},l(a){e=g(a,"IMG",{class:!0,src:!0,alt:!0}),s=F(a),t=g(a,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){n(e,"class","h-full flipper-1 svelte-7e1xtk"),H(e.src,l=Y+"/images/smm_hand.webp")||n(e,"src",l),n(e,"alt","Ficsit Minion"),n(t,"class","h-full flipper-2 svelte-7e1xtk"),H(t.src,r=Y+"/images/smm_hand.webp")||n(t,"src",r),n(t,"alt","Ficsit Minion")},m(a,c){_(a,e,c),_(a,s,c),_(a,t,c)},p:B,d(a){a&&f(e),a&&f(s),a&&f(t)}}}function ge(i){let e=" - Doggo",l;return{c(){l=C(e)},l(s){l=R(s,e)},m(s,t){_(s,l,t)},d(s){s&&f(l)}}}function Ke(i){let e,l;return{c(){e=d("img"),this.h()},l(s){e=g(s,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){n(e,"class","h-full"),H(e.src,l=Y+"/images/smm_hand.webp")||n(e,"src",l),n(e,"alt","Ficsit Minion")},m(s,t){_(s,e,t)},p:B,d(s){s&&f(e)}}}function Qe(i){let e,l,s,t,r;return{c(){e=d("img"),s=A(),t=d("img"),this.h()},l(a){e=g(a,"IMG",{class:!0,src:!0,alt:!0}),s=F(a),t=g(a,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){n(e,"class","h-full flipper-3 svelte-7e1xtk"),H(e.src,l=Y+"/images/smm_hand.webp")||n(e,"src",l),n(e,"alt","Ficsit Minion"),n(t,"class","h-full flipper-4 svelte-7e1xtk"),H(t.src,r=Y+"/images/smm_hand.webp")||n(t,"src",r),n(t,"alt","Ficsit Minion")},m(a,c){_(a,e,c),_(a,s,c),_(a,t,c)},p:B,d(a){a&&f(e),a&&f(s),a&&f(t)}}}function Ue(i){let e,l,s,t,r,a,c,o,v,m,b,p,j,E,y,O;function S(w,M){return w[2]?Je:ze}let I=S(i),k=I(i),D=(i[2]||i[3])&&ge();function L(w,M){return w[2]?Qe:Ke}let T=L(i),G=T(i);return{c(){e=d("div"),l=d("div"),s=A(),t=d("div"),k.c(),r=A(),a=d("div"),c=d("div"),o=C("Satisfactory Mod Manager"),v=A(),m=d("div"),b=C(`Windows - Linux - Epic - Steam
                  `),D&&D.c(),p=A(),j=d("div"),E=d("img"),O=A(),G.c(),this.h()},l(w){e=g(w,"DIV",{class:!0});var M=x(e);l=g(M,"DIV",{class:!0}),x(l).forEach(f),s=F(M),t=g(M,"DIV",{class:!0});var u=x(t);k.l(u),r=F(u),a=g(u,"DIV",{class:!0});var $=x(a);c=g($,"DIV",{class:!0});var V=x(c);o=R(V,"Satisfactory Mod Manager"),V.forEach(f),v=F($),m=g($,"DIV",{class:!0});var P=x(m);b=R(P,`Windows - Linux - Epic - Steam
                  `),D&&D.l(P),P.forEach(f),p=F($),j=g($,"DIV",{class:!0});var q=x(j);E=g(q,"IMG",{class:!0,src:!0,alt:!0}),q.forEach(f),$.forEach(f),O=F(u),G.l(u),u.forEach(f),M.forEach(f),this.h()},h(){n(l,"class","banner smm-banner svelte-7e1xtk"),n(c,"class","text-4xl mb-2"),n(m,"class","text-xl mb-4"),n(E,"class","h-full"),H(E.src,y=Y+"/images/smm_icon_white.webp")||n(E,"src",y),n(E,"alt","Satisfactory Mod Manager"),n(j,"class","2xl:h-1/2 h-1/3 flex justify-center"),n(a,"class","text-center"),n(t,"class","flex absolute w-full h-full top-0 items-center justify-center"),n(e,"class","relative h-full w-full")},m(w,M){_(w,e,M),h(e,l),h(e,s),h(e,t),k.m(t,null),h(t,r),h(t,a),h(a,c),h(c,o),h(a,v),h(a,m),h(m,b),D&&D.m(m,null),h(a,p),h(a,j),h(j,E),h(t,O),G.m(t,null)},p(w,M){I===(I=S(w))&&k?k.p(w,M):(k.d(1),k=I(w),k&&(k.c(),k.m(t,r))),w[2]||w[3]?D||(D=ge(),D.c(),D.m(m,null)):D&&(D.d(1),D=null),T===(T=L(w))&&G?G.p(w,M):(G.d(1),G=T(w),G&&(G.c(),G.m(t,null)))},d(w){w&&f(e),k.d(),D&&D.d(),G.d()}}}function et(i){let e,l,s,t,r,a,c,o,v,m;return{c(){e=d("div"),l=d("div"),s=A(),t=d("div"),r=d("img"),c=A(),o=d("div"),v=d("span"),m=C("Community-run Modding Discord"),this.h()},l(b){e=g(b,"DIV",{class:!0});var p=x(e);l=g(p,"DIV",{class:!0}),x(l).forEach(f),s=F(p),t=g(p,"DIV",{class:!0});var j=x(t);r=g(j,"IMG",{class:!0,src:!0,alt:!0}),j.forEach(f),c=F(p),o=g(p,"DIV",{class:!0});var E=x(o);v=g(E,"SPAN",{});var y=x(v);m=R(y,"Community-run Modding Discord"),y.forEach(f),E.forEach(f),p.forEach(f),this.h()},h(){n(l,"class","modding-banner banner svelte-7e1xtk"),n(r,"class","centered-logo svelte-7e1xtk"),H(r.src,a=Y+"/images/sf_modding_logo.webp")||n(r,"src",a),n(r,"alt","Satisfactory Modding Logo"),n(t,"class","flex absolute w-full h-full top-0 items-center justify-center"),n(o,"class","absolute bottom-0 pb-4 px-4 w-full text-gray-400 text-center xl:text-left"),n(e,"class","relative h-full w-full")},m(b,p){_(b,e,p),h(e,l),h(e,s),h(e,t),h(t,r),h(e,c),h(e,o),h(o,v),h(v,m)},p:B,d(b){b&&f(e)}}}function tt(i){let e,l,s,t,r,a,c,o,v,m;return{c(){e=d("div"),l=d("div"),s=A(),t=d("div"),r=d("img"),c=A(),o=d("div"),v=d("span"),m=C("Official Website"),this.h()},l(b){e=g(b,"DIV",{class:!0});var p=x(e);l=g(p,"DIV",{class:!0}),x(l).forEach(f),s=F(p),t=g(p,"DIV",{class:!0});var j=x(t);r=g(j,"IMG",{class:!0,src:!0,alt:!0}),j.forEach(f),c=F(p),o=g(p,"DIV",{class:!0});var E=x(o);v=g(E,"SPAN",{});var y=x(v);m=R(y,"Official Website"),y.forEach(f),E.forEach(f),p.forEach(f),this.h()},h(){n(l,"class","css-banner banner svelte-7e1xtk"),n(r,"class","centered-logo svelte-7e1xtk"),H(r.src,a=Y+"/images/satisfactory_logo_full_color_small.webp")||n(r,"src",a),n(r,"alt","Satisfactory Logo"),n(t,"class","flex absolute w-full h-full top-0 items-center justify-center"),n(o,"class","absolute bottom-0 pb-4 px-4 w-full text-gray-300 text-center xl:text-right"),n(e,"class","relative h-full w-full")},m(b,p){_(b,e,p),h(e,l),h(e,s),h(e,t),h(t,r),h(e,c),h(e,o),h(o,v),h(v,m)},p:B,d(b){b&&f(e)}}}function lt(i){let e,l,s=i[4].data.getMods.mods,t=[];for(let a=0;a<s.length;a+=1)t[a]=pe(de(i,s,a));const r=a=>N(t[a],1,1,()=>{t[a]=null});return{c(){e=d("div");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){e=g(a,"DIV",{class:!0});var c=x(e);for(let o=0;o<t.length;o+=1)t[o].l(c);c.forEach(f),this.h()},h(){n(e,"class","grid "+Me+" gap-4 svelte-7e1xtk")},m(a,c){_(a,e,c);for(let o=0;o<t.length;o+=1)t[o].m(e,null);l=!0},p(a,c){if(c&16){s=a[4].data.getMods.mods;let o;for(o=0;o<s.length;o+=1){const v=de(a,s,o);t[o]?(t[o].p(v,c),W(t[o],1)):(t[o]=pe(v),t[o].c(),W(t[o],1),t[o].m(e,null))}for(ae(),o=s.length;o<t.length;o+=1)r(o);re()}},i(a){if(!l){for(let c=0;c<s.length;c+=1)W(t[c]);l=!0}},o(a){t=t.filter(Boolean);for(let c=0;c<t.length;c+=1)N(t[c]);l=!1},d(a){a&&f(e),we(t,a)}}}function st(i){let e,l,s=i[4].error.message+"",t;return{c(){e=d("p"),l=C("Oh no... "),t=C(s)},l(r){e=g(r,"P",{});var a=x(e);l=R(a,"Oh no... "),t=R(a,s),a.forEach(f)},m(r,a){_(r,e,a),h(e,l),h(e,t)},p(r,a){a&16&&s!==(s=r[4].error.message+"")&&ye(t,s)},i:B,o:B,d(r){r&&f(e)}}}function rt(i){let e,l,s=Array(4),t=[];for(let r=0;r<s.length;r+=1)t[r]=at(Ce(i,s,r));return{c(){e=d("div");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){e=g(r,"DIV",{class:!0});var a=x(e);for(let c=0;c<t.length;c+=1)t[c].l(a);a.forEach(f),this.h()},h(){n(e,"class","grid "+Me+" gap-4 svelte-7e1xtk")},m(r,a){_(r,e,a);for(let c=0;c<t.length;c+=1)t[c].m(e,null);l=!0},p:B,i(r){if(!l){for(let a=0;a<s.length;a+=1)W(t[a]);l=!0}},o(r){t=t.filter(Boolean);for(let a=0;a<t.length;a+=1)N(t[a]);l=!1},d(r){r&&f(e),we(t,r)}}}function pe(i){let e,l;return e=new Te({props:{mod:i[8]}}),{c(){z(e.$$.fragment)},l(s){J(e.$$.fragment,s)},m(s,t){K(e,s,t),l=!0},p(s,t){const r={};t&16&&(r.mod=s[8]),e.$set(r)},i(s){l||(W(e.$$.fragment,s),l=!0)},o(s){N(e.$$.fragment,s),l=!1},d(s){Q(e,s)}}}function at(i){let e,l;return e=new Le({props:{fake:!0}}),{c(){z(e.$$.fragment)},l(s){J(e.$$.fragment,s)},m(s,t){K(e,s,t),l=!0},p:B,i(s){l||(W(e.$$.fragment,s),l=!0)},o(s){N(e.$$.fragment,s),l=!1},d(s){Q(e,s)}}}function it(i){let e,l,s,t,r,a,c,o,v,m,b,p,j,E,y,O,S,I,k;e=new Fe({props:{description:"Satisfactory Mod Repository",title:"Home"}}),s=new Be({props:{dogVisible:Ee}});const D=[Ye,Re],L=[];function T(u,$){return u[1]?1:0}c=T(i),o=L[c]=D[c](i),p=new te({props:{class:"h-full",$$slots:{default:[et]},$$scope:{ctx:i}}}),y=new te({props:{class:"h-full",$$slots:{default:[tt]},$$scope:{ctx:i}}});const G=[rt,st,lt],w=[];function M(u,$){return u[4].fetching?0:u[4].error?1:2}return S=M(i),I=w[S]=G[S](i),{c(){z(e.$$.fragment),l=A(),z(s.$$.fragment),t=A(),r=d("div"),a=d("div"),o.c(),v=A(),m=d("div"),b=d("a"),z(p.$$.fragment),j=A(),E=d("a"),z(y.$$.fragment),O=A(),I.c(),this.h()},l(u){const $=_e('[data-svelte="svelte-uhqw2p"]',document.head);J(e.$$.fragment,$),$.forEach(f),l=F(u),J(s.$$.fragment,u),t=F(u),r=g(u,"DIV",{class:!0,style:!0});var V=x(r);a=g(V,"DIV",{class:!0});var P=x(a);o.l(P),P.forEach(f),v=F(V),m=g(V,"DIV",{class:!0});var q=x(m);b=g(q,"A",{href:!0,rel:!0,target:!0,class:!0});var X=x(b);J(p.$$.fragment,X),X.forEach(f),j=F(q),E=g(q,"A",{href:!0,rel:!0,target:!0,class:!0});var U=x(E);J(y.$$.fragment,U),U.forEach(f),q.forEach(f),O=F(V),I.l(V),V.forEach(f),this.h()},h(){n(a,"class","mb-4 min-h-[25vh] overflow-hidden"),n(b,"href","https://discord.gg/xkVJ73E"),n(b,"rel","noopener"),n(b,"target","_blank"),n(b,"class","overflow-hidden min-h-[25vh]"),n(E,"href","https://www.satisfactorygame.com/"),n(E,"rel","noopener"),n(E,"target","_blank"),n(E,"class","overflow-hidden min-h-[25vh]"),n(m,"class","grid xl:grid-cols-2 grid-cols-1 gap-4 flex-1 mb-4"),n(r,"class","flex flex-col min-h-full"),Z(r,"height","calc(100vh - 64px - 3rem)")},m(u,$){K(e,document.head,null),_(u,l,$),K(s,u,$),_(u,t,$),_(u,r,$),h(r,a),L[c].m(a,null),h(r,v),h(r,m),h(m,b),K(p,b,null),h(m,j),h(m,E),K(y,E,null),h(r,O),w[S].m(r,null),k=!0},p(u,[$]){let V=c;c=T(u),c===V?L[c].p(u,$):(ae(),N(L[V],1,1,()=>{L[V]=null}),re(),o=L[c],o?o.p(u,$):(o=L[c]=D[c](u),o.c()),W(o,1),o.m(a,null));const P={};$&2048&&(P.$$scope={dirty:$,ctx:u}),p.$set(P);const q={};$&2048&&(q.$$scope={dirty:$,ctx:u}),y.$set(q);let X=S;S=M(u),S===X?w[S].p(u,$):(ae(),N(w[X],1,1,()=>{w[X]=null}),re(),I=w[S],I?I.p(u,$):(I=w[S]=G[S](u),I.c()),W(I,1),I.m(r,null))},i(u){k||(W(e.$$.fragment,u),W(s.$$.fragment,u),W(o),W(p.$$.fragment,u),W(y.$$.fragment,u),W(I),k=!0)},o(u){N(e.$$.fragment,u),N(s.$$.fragment,u),N(o),N(p.$$.fragment,u),N(y.$$.fragment,u),N(I),k=!1},d(u){Q(e),u&&f(l),Q(s,u),u&&f(t),u&&f(r),L[c].d(),Q(p),Q(y),w[S].d()}}}const nt=De(Ae,{offset:0,limit:4,order:Se.Desc,orderBy:Ge.LastVersionDate}),Et=je({mods:nt}),Me="3xl:grid-cols-4 lg:grid-cols-2 grid-cols-1";function ct(i,e,l){let s,t,r,a,c=B,o=()=>(c(),c=be(v,m=>l(4,a=m)),v);ee(i,We,m=>l(1,s=m)),ee(i,Oe,m=>l(2,t=m)),ee(i,Ee,m=>l(3,r=m)),i.$$.on_destroy.push(()=>c());let{mods:v}=e;return o(),i.$$set=m=>{"mods"in m&&o(l(0,v=m.mods))},[v,s,t,r,a]}class Mt extends $e{constructor(e){super(),ve(this,e,ct,it,xe,{mods:0})}}export{Mt as default,Et as load};
//# sourceMappingURL=index.svelte-bca7f89e.js.map
