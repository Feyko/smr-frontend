import{S as qt,i as Ht,d as k,bf as at,s as Ot,e as E,a7 as w,h as A,j as N,a8 as b,k as d,n as q,ac as tt,p as v,ad as I,a9 as B,u as p,t as g,ab as R,f as S,g as M,b0 as Tt,l as V,r as H,v as Gt,aH as it,am as Lt,an as Wt,ap as zt,aG as z,aI as ct,w as rt,bg as et,aM as U,q as O,aV as st,af as D,ag as C,ah as G,aW as Ft}from"../../chunks/vendor-71586dff.js";import{h as ft,i as lt,j as $t}from"../../chunks/graphql-587ea9ba.js";import{P as nt}from"../../chunks/PageControls-bcea2d9e.js";import{a as F}from"../../chunks/api-914d5f30.js";import"../../chunks/user-aa766597.js";import{b as J}from"../../chunks/paths-396f020f.js";import{M as mt}from"../../chunks/MetaDescriptors-f6373408.js";import{D as dt,H as pt,B as gt,R as ot,C as _}from"../../chunks/forms-a767280e.js";import{p as K}from"../../chunks/formatting-a4ea5227.js";import"../../chunks/stores-b24fbbcb.js";const T="src/routes/admin/unapproved-versions.svelte";function ut(r,t,o){const i=r.slice();return i[10]=t[o],i}function Q(r){let t,o,i,e;i=new nt({props:{totalPages:Math.ceil(r[1]/j),currentPage:r[3]},$$inline:!0});const n={c:function(){t=E("div"),o=E("div"),w(i.$$.fragment),this.h()},l:function(s){t=A(s,"DIV",{class:!0});var l=N(t);o=A(l,"DIV",{});var $=N(o);b(i.$$.fragment,$),$.forEach(d),l.forEach(d),this.h()},h:function(){q(o,T,48,4,1635),tt(t,"class","mb-5 ml-auto flex justify-end"),q(t,T,47,2,1587)},m:function(s,l){v(s,t,l),I(t,o),B(i,o,null),e=!0},p:function(s,l){const $={};l&2&&($.totalPages=Math.ceil(s[1]/j)),i.$set($)},i:function(s){e||(p(i.$$.fragment,s),e=!0)},o:function(s){g(i.$$.fragment,s),e=!1},d:function(s){s&&d(t),R(i)}};return k("SvelteRegisterBlock",{block:n,id:Q.name,type:"if",source:"(47:0) {#if totalVersions}",ctx:r}),n}function vt(r){let t,o;t=new dt({props:{class:"max-w-full",$$slots:{default:[It]},$$scope:{ctx:r}},$$inline:!0});const i={c:function(){w(t.$$.fragment)},l:function(n){b(t.$$.fragment,n)},m:function(n,c){B(t,n,c),o=!0},p:function(n,c){const s={};c&8193&&(s.$$scope={dirty:c,ctx:n}),t.$set(s)},i:function(n){o||(p(t.$$.fragment,n),o=!0)},o:function(n){g(t.$$.fragment,n),o=!1},d:function(n){R(t,n)}};return k("SvelteRegisterBlock",{block:i,id:vt.name,type:"else",source:"(60:2) {:else}",ctx:r}),i}function xt(r){let t,o;t=new et({props:{$$slots:{default:[Et]},$$scope:{ctx:r}},$$inline:!0});const i={c:function(){w(t.$$.fragment)},l:function(n){b(t.$$.fragment,n)},m:function(n,c){B(t,n,c),o=!0},p:function(n,c){const s={};c&8193&&(s.$$scope={dirty:c,ctx:n}),t.$set(s)},i:function(n){o||(p(t.$$.fragment,n),o=!0)},o:function(n){g(t.$$.fragment,n),o=!1},d:function(n){R(t,n)}};return k("SvelteRegisterBlock",{block:i,id:xt.name,type:"if",source:"(58:28) ",ctx:r}),i}function yt(r){let t,o;t=new et({props:{$$slots:{default:[At]},$$scope:{ctx:r}},$$inline:!0});const i={c:function(){w(t.$$.fragment)},l:function(n){b(t.$$.fragment,n)},m:function(n,c){B(t,n,c),o=!0},p:function(n,c){const s={};c&8192&&(s.$$scope={dirty:c,ctx:n}),t.$set(s)},i:function(n){o||(p(t.$$.fragment,n),o=!0)},o:function(n){g(t.$$.fragment,n),o=!1},d:function(n){R(t,n)}};return k("SvelteRegisterBlock",{block:i,id:yt.name,type:"if",source:"(56:2) {#if $versions.fetching}",ctx:r}),i}function kt(r){let t;const o={c:function(){t=D("Mod")},l:function(e){t=C(e,"Mod")},m:function(e,n){v(e,t,n)},d:function(e){e&&d(t)}};return k("SvelteRegisterBlock",{block:o,id:kt.name,type:"slot",source:"(64:10) <Cell>",ctx:r}),o}function ht(r){let t;const o={c:function(){t=D("Version")},l:function(e){t=C(e,"Version")},m:function(e,n){v(e,t,n)},d:function(e){e&&d(t)}};return k("SvelteRegisterBlock",{block:o,id:ht.name,type:"slot",source:"(65:10) <Cell>",ctx:r}),o}function wt(r){let t;const o={c:function(){t=D("Release Date")},l:function(e){t=C(e,"Release Date")},m:function(e,n){v(e,t,n)},d:function(e){e&&d(t)}};return k("SvelteRegisterBlock",{block:o,id:wt.name,type:"slot",source:"(66:10) <Cell>",ctx:r}),o}function bt(r){let t,o,i,e,n,c,s,l;t=new _({props:{$$slots:{default:[kt]},$$scope:{ctx:r}},$$inline:!0}),i=new _({props:{$$slots:{default:[ht]},$$scope:{ctx:r}},$$inline:!0}),n=new _({props:{$$slots:{default:[wt]},$$scope:{ctx:r}},$$inline:!0}),s=new _({$$inline:!0});const $={c:function(){w(t.$$.fragment),o=S(),w(i.$$.fragment),e=S(),w(n.$$.fragment),c=S(),w(s.$$.fragment)},l:function(u){b(t.$$.fragment,u),o=V(u),b(i.$$.fragment,u),e=V(u),b(n.$$.fragment,u),c=V(u),b(s.$$.fragment,u)},m:function(u,f){B(t,u,f),v(u,o,f),B(i,u,f),v(u,e,f),B(n,u,f),v(u,c,f),B(s,u,f),l=!0},p:function(u,f){const m={};f&8192&&(m.$$scope={dirty:f,ctx:u}),t.$set(m);const y={};f&8192&&(y.$$scope={dirty:f,ctx:u}),i.$set(y);const x={};f&8192&&(x.$$scope={dirty:f,ctx:u}),n.$set(x)},i:function(u){l||(p(t.$$.fragment,u),p(i.$$.fragment,u),p(n.$$.fragment,u),p(s.$$.fragment,u),l=!0)},o:function(u){g(t.$$.fragment,u),g(i.$$.fragment,u),g(n.$$.fragment,u),g(s.$$.fragment,u),l=!1},d:function(u){R(t,u),u&&d(o),R(i,u),u&&d(e),R(n,u),u&&d(c),R(s,u)}};return k("SvelteRegisterBlock",{block:$,id:bt.name,type:"slot",source:"(63:8) <Row>",ctx:r}),$}function Bt(r){let t,o;t=new ot({props:{$$slots:{default:[bt]},$$scope:{ctx:r}},$$inline:!0});const i={c:function(){w(t.$$.fragment)},l:function(n){b(t.$$.fragment,n)},m:function(n,c){B(t,n,c),o=!0},p:function(n,c){const s={};c&8192&&(s.$$scope={dirty:c,ctx:n}),t.$set(s)},i:function(n){o||(p(t.$$.fragment,n),o=!0)},o:function(n){g(t.$$.fragment,n),o=!1},d:function(n){R(t,n)}};return k("SvelteRegisterBlock",{block:i,id:Bt.name,type:"slot",source:"(62:6) <Head>",ctx:r}),i}function Rt(r){let t=r[10].mod.name+"",o;const i={c:function(){o=D(t)},l:function(n){o=C(n,t)},m:function(n,c){v(n,o,c)},p:function(n,c){c&1&&t!==(t=n[10].mod.name+"")&&G(o,t)},d:function(n){n&&d(o)}};return k("SvelteRegisterBlock",{block:i,id:Rt.name,type:"slot",source:"(73:12) <Cell>",ctx:r}),i}function St(r){let t=r[10].version+"",o;const i={c:function(){o=D(t)},l:function(n){o=C(n,t)},m:function(n,c){v(n,o,c)},p:function(n,c){c&1&&t!==(t=n[10].version+"")&&G(o,t)},d:function(n){n&&d(o)}};return k("SvelteRegisterBlock",{block:i,id:St.name,type:"slot",source:"(74:12) <Cell>",ctx:r}),i}function Vt(r){let t=K(r[10].created_at)+"",o;const i={c:function(){o=D(t)},l:function(n){o=C(n,t)},m:function(n,c){v(n,o,c)},p:function(n,c){c&1&&t!==(t=K(n[10].created_at)+"")&&G(o,t)},d:function(n){n&&d(o)}};return k("SvelteRegisterBlock",{block:i,id:Vt.name,type:"slot",source:"(75:12) <Cell>",ctx:r}),i}function Dt(r){let t;const o={c:function(){t=D("Approve")},l:function(e){t=C(e,"Approve")},m:function(e,n){v(e,t,n)},d:function(e){e&&d(t)}};return k("SvelteRegisterBlock",{block:o,id:Dt.name,type:"slot",source:'(78:16) <Button variant=\\"outlined\\" on:click={() => approveVersion(version.id)}>',ctx:r}),o}function Ct(r){let t;const o={c:function(){t=D("Deny")},l:function(e){t=C(e,"Deny")},m:function(e,n){v(e,t,n)},d:function(e){e&&d(t)}};return k("SvelteRegisterBlock",{block:o,id:Ct.name,type:"slot",source:'(79:16) <Button variant=\\"outlined\\" on:click={() => denyVersion(version.id)}>',ctx:r}),o}function _t(r){let t;const o={c:function(){t=D("Download")},l:function(e){t=C(e,"Download")},m:function(e,n){v(e,t,n)},d:function(e){e&&d(t)}};return k("SvelteRegisterBlock",{block:o,id:_t.name,type:"slot",source:`(80:16) <Button                   variant=\\"outlined\\"                   href={API_REST + '/mod/' + version.mod_id + '/versions/' + version.id + '/download'}>`,ctx:r}),o}function jt(r){let t;const o={c:function(){t=D("View")},l:function(e){t=C(e,"View")},m:function(e,n){v(e,t,n)},d:function(e){e&&d(t)}};return k("SvelteRegisterBlock",{block:o,id:jt.name,type:"slot",source:`(85:16) <Button variant=\\"outlined\\" href={base + '/mod/' + version.mod_id + '/version/' + version.id}>`,ctx:r}),o}function Mt(r){let t,o,i,e,n,c,s,l,$;function a(){return r[6](r[10])}o=new U({props:{variant:"outlined",$$slots:{default:[Dt]},$$scope:{ctx:r}},$$inline:!0}),o.$on("click",a);function u(){return r[7](r[10])}e=new U({props:{variant:"outlined",$$slots:{default:[Ct]},$$scope:{ctx:r}},$$inline:!0}),e.$on("click",u),c=new U({props:{variant:"outlined",href:F+"/mod/"+r[10].mod_id+"/versions/"+r[10].id+"/download",$$slots:{default:[_t]},$$scope:{ctx:r}},$$inline:!0}),l=new U({props:{variant:"outlined",href:J+"/mod/"+r[10].mod_id+"/version/"+r[10].id,$$slots:{default:[jt]},$$scope:{ctx:r}},$$inline:!0});const f={c:function(){t=E("div"),w(o.$$.fragment),i=S(),w(e.$$.fragment),n=S(),w(c.$$.fragment),s=S(),w(l.$$.fragment),this.h()},l:function(y){t=A(y,"DIV",{class:!0});var x=N(t);b(o.$$.fragment,x),i=V(x),b(e.$$.fragment,x),n=V(x),b(c.$$.fragment,x),s=V(x),b(l.$$.fragment,x),x.forEach(d),this.h()},h:function(){tt(t,"class","grid grid-flow-col gap-4"),q(t,T,76,14,2428)},m:function(y,x){v(y,t,x),B(o,t,null),I(t,i),B(e,t,null),I(t,n),B(c,t,null),I(t,s),B(l,t,null),$=!0},p:function(y,x){r=y;const h={};x&8192&&(h.$$scope={dirty:x,ctx:r}),o.$set(h);const P={};x&8192&&(P.$$scope={dirty:x,ctx:r}),e.$set(P);const L={};x&1&&(L.href=F+"/mod/"+r[10].mod_id+"/versions/"+r[10].id+"/download"),x&8192&&(L.$$scope={dirty:x,ctx:r}),c.$set(L);const W={};x&1&&(W.href=J+"/mod/"+r[10].mod_id+"/version/"+r[10].id),x&8192&&(W.$$scope={dirty:x,ctx:r}),l.$set(W)},i:function(y){$||(p(o.$$.fragment,y),p(e.$$.fragment,y),p(c.$$.fragment,y),p(l.$$.fragment,y),$=!0)},o:function(y){g(o.$$.fragment,y),g(e.$$.fragment,y),g(c.$$.fragment,y),g(l.$$.fragment,y),$=!1},d:function(y){y&&d(t),R(o),R(e),R(c),R(l)}};return k("SvelteRegisterBlock",{block:f,id:Mt.name,type:"slot",source:"(76:12) <Cell>",ctx:r}),f}function Pt(r){let t,o,i,e,n,c,s,l,$;t=new _({props:{$$slots:{default:[Rt]},$$scope:{ctx:r}},$$inline:!0}),i=new _({props:{$$slots:{default:[St]},$$scope:{ctx:r}},$$inline:!0}),n=new _({props:{$$slots:{default:[Vt]},$$scope:{ctx:r}},$$inline:!0}),s=new _({props:{$$slots:{default:[Mt]},$$scope:{ctx:r}},$$inline:!0});const a={c:function(){w(t.$$.fragment),o=S(),w(i.$$.fragment),e=S(),w(n.$$.fragment),c=S(),w(s.$$.fragment),l=S()},l:function(f){b(t.$$.fragment,f),o=V(f),b(i.$$.fragment,f),e=V(f),b(n.$$.fragment,f),c=V(f),b(s.$$.fragment,f),l=V(f)},m:function(f,m){B(t,f,m),v(f,o,m),B(i,f,m),v(f,e,m),B(n,f,m),v(f,c,m),B(s,f,m),v(f,l,m),$=!0},p:function(f,m){const y={};m&8193&&(y.$$scope={dirty:m,ctx:f}),t.$set(y);const x={};m&8193&&(x.$$scope={dirty:m,ctx:f}),i.$set(x);const h={};m&8193&&(h.$$scope={dirty:m,ctx:f}),n.$set(h);const P={};m&8193&&(P.$$scope={dirty:m,ctx:f}),s.$set(P)},i:function(f){$||(p(t.$$.fragment,f),p(i.$$.fragment,f),p(n.$$.fragment,f),p(s.$$.fragment,f),$=!0)},o:function(f){g(t.$$.fragment,f),g(i.$$.fragment,f),g(n.$$.fragment,f),g(s.$$.fragment,f),$=!1},d:function(f){R(t,f),f&&d(o),R(i,f),f&&d(e),R(n,f),f&&d(c),R(s,f),f&&d(l)}};return k("SvelteRegisterBlock",{block:a,id:Pt.name,type:"slot",source:"(72:10) <Row>",ctx:r}),a}function X(r){let t,o;t=new ot({props:{$$slots:{default:[Pt]},$$scope:{ctx:r}},$$inline:!0});const i={c:function(){w(t.$$.fragment)},l:function(n){b(t.$$.fragment,n)},m:function(n,c){B(t,n,c),o=!0},p:function(n,c){const s={};c&8193&&(s.$$scope={dirty:c,ctx:n}),t.$set(s)},i:function(n){o||(p(t.$$.fragment,n),o=!0)},o:function(n){g(t.$$.fragment,n),o=!1},d:function(n){R(t,n)}};return k("SvelteRegisterBlock",{block:i,id:X.name,type:"each",source:"(71:8) {#each $versions.data.getUnapprovedVersions.versions as version}",ctx:r}),i}function Ut(r){let t,o,i=r[0].data.getUnapprovedVersions.versions;st(i);let e=[];for(let s=0;s<i.length;s+=1)e[s]=X(ut(r,i,s));const n=s=>g(e[s],1,1,()=>{e[s]=null}),c={c:function(){for(let l=0;l<e.length;l+=1)e[l].c();t=M()},l:function(l){for(let $=0;$<e.length;$+=1)e[$].l(l);t=M()},m:function(l,$){for(let a=0;a<e.length;a+=1)e[a].m(l,$);v(l,t,$),o=!0},p:function(l,$){if($&49){i=l[0].data.getUnapprovedVersions.versions,st(i);let a;for(a=0;a<i.length;a+=1){const u=ut(l,i,a);e[a]?(e[a].p(u,$),p(e[a],1)):(e[a]=X(u),e[a].c(),p(e[a],1),e[a].m(t.parentNode,t))}for(O(),a=i.length;a<e.length;a+=1)n(a);H()}},i:function(l){if(!o){for(let $=0;$<i.length;$+=1)p(e[$]);o=!0}},o:function(l){e=e.filter(Boolean);for(let $=0;$<e.length;$+=1)g(e[$]);o=!1},d:function(l){Ft(e,l),l&&d(t)}};return k("SvelteRegisterBlock",{block:c,id:Ut.name,type:"slot",source:"(70:6) <Body>",ctx:r}),c}function It(r){let t,o,i,e;t=new pt({props:{$$slots:{default:[Bt]},$$scope:{ctx:r}},$$inline:!0}),i=new gt({props:{$$slots:{default:[Ut]},$$scope:{ctx:r}},$$inline:!0});const n={c:function(){w(t.$$.fragment),o=S(),w(i.$$.fragment)},l:function(s){b(t.$$.fragment,s),o=V(s),b(i.$$.fragment,s)},m:function(s,l){B(t,s,l),v(s,o,l),B(i,s,l),e=!0},p:function(s,l){const $={};l&8192&&($.$$scope={dirty:l,ctx:s}),t.$set($);const a={};l&8193&&(a.$$scope={dirty:l,ctx:s}),i.$set(a)},i:function(s){e||(p(t.$$.fragment,s),p(i.$$.fragment,s),e=!0)},o:function(s){g(t.$$.fragment,s),g(i.$$.fragment,s),e=!1},d:function(s){R(t,s),s&&d(o),R(i,s)}};return k("SvelteRegisterBlock",{block:n,id:It.name,type:"slot",source:'(61:4) <DataTable class=\\"max-w-full\\">',ctx:r}),n}function Et(r){let t,o=r[0].error.message+"",i;const e={c:function(){t=D("Oh no... "),i=D(o)},l:function(c){t=C(c,"Oh no... "),i=C(c,o)},m:function(c,s){v(c,t,s),v(c,i,s)},p:function(c,s){s&1&&o!==(o=c[0].error.message+"")&&G(i,o)},d:function(c){c&&d(t),c&&d(i)}};return k("SvelteRegisterBlock",{block:e,id:Et.name,type:"slot",source:"(59:4) <Content>",ctx:r}),e}function At(r){let t;const o={c:function(){t=D("Loading...")},l:function(e){t=C(e,"Loading...")},m:function(e,n){v(e,t,n)},d:function(e){e&&d(t)}};return k("SvelteRegisterBlock",{block:o,id:At.name,type:"slot",source:"(57:4) <Content>",ctx:r}),o}function Nt(r){let t,o,i,e;const n=[yt,xt,vt],c=[];function s($,a){return $[0].fetching?0:$[0].error?1:2}t=s(r),o=c[t]=n[t](r);const l={c:function(){o.c(),i=M()},l:function(a){o.l(a),i=M()},m:function(a,u){c[t].m(a,u),v(a,i,u),e=!0},p:function(a,u){let f=t;t=s(a),t===f?c[t].p(a,u):(O(),g(c[f],1,1,()=>{c[f]=null}),H(),o=c[t],o?o.p(a,u):(o=c[t]=n[t](a),o.c()),p(o,1),o.m(i.parentNode,i))},i:function(a){e||(p(o),e=!0)},o:function(a){g(o),e=!1},d:function(a){c[t].d(a),a&&d(i)}};return k("SvelteRegisterBlock",{block:l,id:Nt.name,type:"slot",source:"(55:0) <Card>",ctx:r}),l}function Y(r){let t,o,i;o=new nt({props:{totalPages:Math.ceil(r[1]/j),currentPage:r[3]},$$inline:!0});const e={c:function(){t=E("div"),w(o.$$.fragment),this.h()},l:function(c){t=A(c,"DIV",{class:!0});var s=N(t);b(o.$$.fragment,s),s.forEach(d),this.h()},h:function(){tt(t,"class","mt-5 ml-auto flex justify-end"),q(t,T,97,2,3190)},m:function(c,s){v(c,t,s),B(o,t,null),i=!0},p:function(c,s){const l={};s&2&&(l.totalPages=Math.ceil(c[1]/j)),o.$set(l)},i:function(c){i||(p(o.$$.fragment,c),i=!0)},o:function(c){g(o.$$.fragment,c),i=!1},d:function(c){c&&d(t),R(o)}};return k("SvelteRegisterBlock",{block:e,id:Y.name,type:"if",source:"(97:0) {#if totalVersions}",ctx:r}),e}function Z(r){let t,o,i,e,n,c,s;t=new mt({props:{description:"Unapproved mod versions",title:"Admin: Unapproved Versions"},$$inline:!0});let l=r[1]&&Q(r);e=new at({props:{$$slots:{default:[Nt]},$$scope:{ctx:r}},$$inline:!0});let $=r[1]&&Y(r);const a={c:function(){w(t.$$.fragment),o=S(),l&&l.c(),i=S(),w(e.$$.fragment),n=S(),$&&$.c(),c=M()},l:function(f){const m=Tt('[data-svelte="svelte-c87g9p"]',document.head);b(t.$$.fragment,m),m.forEach(d),o=V(f),l&&l.l(f),i=V(f),b(e.$$.fragment,f),n=V(f),$&&$.l(f),c=M()},m:function(f,m){B(t,document.head,null),v(f,o,m),l&&l.m(f,m),v(f,i,m),B(e,f,m),v(f,n,m),$&&$.m(f,m),v(f,c,m),s=!0},p:function(f,[m]){f[1]?l?(l.p(f,m),m&2&&p(l,1)):(l=Q(f),l.c(),p(l,1),l.m(i.parentNode,i)):l&&(O(),g(l,1,1,()=>{l=null}),H());const y={};m&8193&&(y.$$scope={dirty:m,ctx:f}),e.$set(y),f[1]?$?($.p(f,m),m&2&&p($,1)):($=Y(f),$.c(),p($,1),$.m(c.parentNode,c)):$&&(O(),g($,1,1,()=>{$=null}),H())},i:function(f){s||(p(t.$$.fragment,f),p(l),p(e.$$.fragment,f),p($),s=!0)},o:function(f){g(t.$$.fragment,f),g(l),g(e.$$.fragment,f),g($),s=!1},d:function(f){R(t),f&&d(o),l&&l.d(f),f&&d(i),R(e,f),f&&d(n),$&&$.d(f),f&&d(c)}};return k("SvelteRegisterBlock",{block:a,id:Z.name,type:"component",source:"",ctx:r}),a}const j=20;function Jt(r,t,o){let i,{$$slots:e={},$$scope:n}=t;Gt("Unapproved_versions",e,[]);const c=it(ft,{filter:{offset:0,limit:j}});Lt(c,"versions"),Wt(r,c,h=>o(0,i=h));const s=rt(1);let l;s.subscribe(h=>zt(c,i.variables.filter.offset=(h-1)*j,i));const $=z({query:lt}),a=h=>{$({versionId:h}).then(()=>{c.reexecute()})},u=z({query:$t}),f=h=>{u({versionId:h}).then(()=>{c.reexecute()})};ct(c);const m=[];Object.keys(t).forEach(h=>{!~m.indexOf(h)&&h.slice(0,2)!=="$$"&&h!=="slot"&&console.warn(`<Unapproved_versions> was created with unknown prop '${h}'`)});const y=h=>a(h.id),x=h=>f(h.id);return r.$capture_state=()=>({ApproveVersionDocument:lt,DenyVersionDocument:$t,GetUnapprovedVersionsDocument:ft,mutation:z,operationStore:it,query:ct,writable:rt,PageControls:nt,API_REST:F,base:J,MetaDescriptors:mt,Card:at,Content:et,DataTable:dt,Head:pt,Body:gt,Row:ot,Cell:_,Button:U,prettyDate:K,perPage:j,versions:c,page:s,totalVersions:l,approveVersionMut:$,approveVersion:a,denyVersionMut:u,denyVersion:f,$versions:i}),r.$inject_state=h=>{"totalVersions"in h&&o(1,l=h.totalVersions)},t&&"$$inject"in t&&r.$inject_state(t.$$inject),r.$$.update=()=>{r.$$.dirty&1&&o(1,l=i?.data?.getUnapprovedVersions?.count)},[i,l,c,s,a,f,y,x]}class ce extends qt{constructor(t){super(t),Ht(this,t,Jt,Z,Ot,{}),k("SvelteRegisterComponent",{component:this,tagName:"Unapproved_versions",options:t,id:Z.name})}}export{ce as default};
//# sourceMappingURL=unapproved-versions.svelte-7c79e8e2.js.map
