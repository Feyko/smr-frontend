import{S as Ae,i as Ce,d as N,s as Me,bo as $e,r as me,T as pe,Y as Ne,Z as Ve,v as je,aJ as ne,aN as ae,a_ as re,bp as ge,aQ as de,ao as Ie,a8 as U,a6 as D,x as k,L as H,bi as De,ab as z,q as m,a9 as _,y as E,z as T,N as J,ac as S,C as P,ae as q,l as A,ad as y,ai as he,p as C,t as M,aj as L,P as G,aw as _e,k as oe,m as Ue,n as ze,O as K,D as qe}from"../chunks/vendor.432952c9.js";import{W as ie}from"../chunks/graphql.cb6ec208.js";import{T as ve}from"../chunks/Toast.36fc7864.js";import{o as Le,d as Oe,e as Fe,s as He,c as ce,v as le,r as ue,V as Y,z as Je,T as xe}from"../chunks/forms.25a74780.js";import{t as fe}from"../chunks/forms.ad083feb.js";import{a as W}from"../chunks/user.17d8cb76.js";import{M as ye}from"../chunks/MetaDescriptors.24df24cb.js";const{console:Qe}=Ie,B="src/routes/settings/+page.svelte";function be(o){let e,t,s,r,a,n,l,v,f,u,d,p,R,$,i,g,b,c,O,I,X;f=new Y({props:{for:"avatar",$$slots:{default:[we,({messages:x})=>({10:x}),({messages:x})=>x?1024:0]},$$scope:{ctx:o}},$$inline:!0});function Te(x){o[7](x)}let ee={label:"Username",required:!0};o[5].username!==void 0&&(ee.value=o[5].username),p=new xe({props:ee,$$inline:!0}),me.push(()=>pe(p,"value",Te)),i=new Y({props:{for:"username",$$slots:{default:[ke,({messages:x})=>({10:x}),({messages:x})=>x?1024:0]},$$scope:{ctx:o}},$$inline:!0}),c=new de({props:{type:"submit",variant:"outlined",$$slots:{default:[Ee]},$$scope:{ctx:o}},$$inline:!0});const te={c:function(){e=k("form"),t=k("div"),s=k("div"),r=k("label"),a=H("Avatar:"),n=D(),l=k("input"),v=D(),U(f.$$.fragment),u=D(),d=k("div"),U(p.$$.fragment),$=D(),U(i.$$.fragment),g=D(),b=k("div"),U(c.$$.fragment),this.h()},l:function(h){e=E(h,"FORM",{});var w=T(e);t=E(w,"DIV",{class:!0});var V=T(t);s=E(V,"DIV",{class:!0});var j=T(s);r=E(j,"LABEL",{for:!0});var Q=T(r);a=J(Q,"Avatar:"),Q.forEach(m),n=_(j),l=E(j,"INPUT",{id:!0,class:!0,name:!0,type:!0,accept:!0,placeholder:!0}),v=_(j),z(f.$$.fragment,j),j.forEach(m),u=_(V),d=E(V,"DIV",{class:!0});var F=T(d);z(p.$$.fragment,F),$=_(F),z(i.$$.fragment,F),F.forEach(m),g=_(V),b=E(V,"DIV",{});var se=T(b);z(c.$$.fragment,se),se.forEach(m),V.forEach(m),w.forEach(m),this.h()},h:function(){S(r,"for","avatar"),P(r,B,75,12,2574),S(l,"id","avatar"),S(l,"class","base-input"),S(l,"name","avatar"),S(l,"type","file"),S(l,"accept","image/png,image/jpeg,image/gif"),S(l,"placeholder","Avatar"),P(l,B,76,12,2622),S(s,"class","grid grid-flow-row gap-2"),P(s,B,74,10,2523),S(d,"class","grid grid-flow-row gap-2"),P(d,B,88,10,3033),P(b,B,95,10,3353),S(t,"class","grid grid-flow-row gap-6"),P(t,B,73,8,2474),P(e,B,72,6,2450)},m:function(h,w){A(h,e,w),y(e,t),y(t,s),y(s,r),y(r,a),y(s,n),y(s,l),y(s,v),q(f,s,null),y(t,u),y(t,d),q(p,d,null),y(d,$),q(i,d,null),y(t,g),y(t,b),q(c,b,null),O=!0,I||(X=qe(o[4].call(null,e)),I=!0)},p:function(h,w){const V={};w&3072&&(V.$$scope={dirty:w,ctx:h}),f.$set(V);const j={};!R&&w&32&&(R=!0,j.value=h[5].username,he(()=>R=!1)),p.$set(j);const Q={};w&3072&&(Q.$$scope={dirty:w,ctx:h}),i.$set(Q);const F={};w&2048&&(F.$$scope={dirty:w,ctx:h}),c.$set(F)},i:function(h){O||(C(f.$$.fragment,h),C(p.$$.fragment,h),C(i.$$.fragment,h),C(c.$$.fragment,h),O=!0)},o:function(h){M(f.$$.fragment,h),M(p.$$.fragment,h),M(i.$$.fragment,h),M(c.$$.fragment,h),O=!1},d:function(h){h&&m(e),L(f),L(p),L(i),L(c),I=!1,X()}};return N("SvelteRegisterBlock",{block:te,id:be.name,type:"else",source:"(72:4) {:else}",ctx:o}),te}function Se(o){let e,t;const s={c:function(){e=k("p"),t=H("Please log in"),this.h()},l:function(a){e=E(a,"P",{});var n=T(e);t=J(n,"Please log in"),n.forEach(m),this.h()},h:function(){P(e,B,70,6,2411)},m:function(a,n){A(a,e,n),y(e,t)},p:G,i:G,o:G,d:function(a){a&&m(e)}};return N("SvelteRegisterBlock",{block:s,id:Se.name,type:"if",source:"(70:4) {#if $user === null}",ctx:o}),s}function we(o){let e,t=(o[10]||"")+"",s;const r={c:function(){e=k("span"),s=H(t),this.h()},l:function(n){e=E(n,"SPAN",{class:!0});var l=T(e);s=J(l,t),l.forEach(m),this.h()},h:function(){S(e,"class","validation-message"),P(e,B,84,14,2916)},m:function(n,l){A(n,e,l),y(e,s)},p:function(n,l){l&1024&&t!==(t=(n[10]||"")+"")&&K(s,t)},d:function(n){n&&m(e)}};return N("SvelteRegisterBlock",{block:r,id:we.name,type:"slot",source:'(84:12) <ValidationMessage for=\\"avatar\\" let:messages={message}>',ctx:o}),r}function ke(o){let e,t=(o[10]||"")+"",s;const r={c:function(){e=k("span"),s=H(t),this.h()},l:function(n){e=E(n,"SPAN",{class:!0});var l=T(e);s=J(l,t),l.forEach(m),this.h()},h:function(){S(e,"class","validation-message"),P(e,B,91,14,3236)},m:function(n,l){A(n,e,l),y(e,s)},p:function(n,l){l&1024&&t!==(t=(n[10]||"")+"")&&K(s,t)},d:function(n){n&&m(e)}};return N("SvelteRegisterBlock",{block:r,id:ke.name,type:"slot",source:'(91:12) <ValidationMessage for=\\"username\\" let:messages={message}>',ctx:o}),r}function Ee(o){let e;const t={c:function(){e=H("Save")},l:function(r){e=J(r,"Save")},m:function(r,a){A(r,e,a)},d:function(r){r&&m(e)}};return N("SvelteRegisterBlock",{block:t,id:Ee.name,type:"slot",source:'(97:12) <Button type=\\"submit\\" variant=\\"outlined\\">',ctx:o}),t}function Pe(o){let e,t,s,r;const a=[Se,be],n=[];function l(f,u){return f[2]===null?0:1}e=l(o),t=n[e]=a[e](o);const v={c:function(){t.c(),s=oe()},l:function(u){t.l(u),s=oe()},m:function(u,d){n[e].m(u,d),A(u,s,d),r=!0},p:function(u,d){let p=e;e=l(u),e===p?n[e].p(u,d):(Ue(),M(n[p],1,1,()=>{n[p]=null}),ze(),t=n[e],t?t.p(u,d):(t=n[e]=a[e](u),t.c()),C(t,1),t.m(s.parentNode,s))},i:function(u){r||(C(t),r=!0)},o:function(u){M(t),r=!1},d:function(u){n[e].d(u),u&&m(s)}};return N("SvelteRegisterBlock",{block:v,id:Pe.name,type:"slot",source:"(69:2) <Content>",ctx:o}),v}function Be(o){let e,t;e=new ge({props:{$$slots:{default:[Pe]},$$scope:{ctx:o}},$$inline:!0});const s={c:function(){U(e.$$.fragment)},l:function(a){z(e.$$.fragment,a)},m:function(a,n){q(e,a,n),t=!0},p:function(a,n){const l={};n&2084&&(l.$$scope={dirty:n,ctx:a}),e.$set(l)},i:function(a){t||(C(e.$$.fragment,a),t=!0)},o:function(a){M(e.$$.fragment,a),t=!1},d:function(a){L(e,a)}};return N("SvelteRegisterBlock",{block:s,id:Be.name,type:"slot",source:"(68:0) <Card>",ctx:o}),s}function Re(o){let e,t;const s={c:function(){e=k("span"),t=H(o[3]),this.h()},l:function(a){e=E(a,"SPAN",{});var n=T(e);t=J(n,o[3]),n.forEach(m),this.h()},h:function(){P(e,B,105,2,3540)},m:function(a,n){A(a,e,n),y(e,t)},p:function(a,n){n&8&&K(t,a[3])},d:function(a){a&&m(e)}};return N("SvelteRegisterBlock",{block:s,id:Re.name,type:"slot",source:"(105:0) <Toast bind:running={errorToast}>",ctx:o}),s}function Z(o){let e,t,s,r,a,n,l,v,f,u;e=new ye({props:{description:"Change your user settings",title:"Settings"},$$inline:!0}),n=new $e({props:{$$slots:{default:[Be]},$$scope:{ctx:o}},$$inline:!0});function d($){o[8]($)}let p={$$slots:{default:[Re]},$$scope:{ctx:o}};o[0]!==void 0&&(p.running=o[0]),v=new ve({props:p,$$inline:!0}),me.push(()=>pe(v,"running",d));const R={c:function(){U(e.$$.fragment),t=D(),s=k("h1"),r=H("Settings"),a=D(),U(n.$$.fragment),l=D(),U(v.$$.fragment),this.h()},l:function(i){const g=De("svelte-1ae5i2c",document.head);z(e.$$.fragment,g),g.forEach(m),t=_(i),s=E(i,"H1",{class:!0});var b=T(s);r=J(b,"Settings"),b.forEach(m),a=_(i),z(n.$$.fragment,i),l=_(i),z(v.$$.fragment,i),this.h()},h:function(){S(s,"class","text-4xl my-4 font-bold"),P(s,B,65,0,2310)},m:function(i,g){q(e,document.head,null),A(i,t,g),A(i,s,g),y(s,r),A(i,a,g),q(n,i,g),A(i,l,g),q(v,i,g),u=!0},p:function(i,[g]){const b={};g&2084&&(b.$$scope={dirty:g,ctx:i}),n.$set(b);const c={};g&2056&&(c.$$scope={dirty:g,ctx:i}),!f&&g&1&&(f=!0,c.running=i[0],he(()=>f=!1)),v.$set(c)},i:function(i){u||(C(e.$$.fragment,i),C(n.$$.fragment,i),C(v.$$.fragment,i),u=!0)},o:function(i){M(e.$$.fragment,i),M(n.$$.fragment,i),M(v.$$.fragment,i),u=!1},d:function(i){L(e),i&&m(t),i&&m(s),i&&m(a),L(n,i),i&&m(l),L(v,i)}};return N("SvelteRegisterBlock",{block:R,id:Z.name,type:"component",source:"",ctx:o}),R}function Ge(o,e,t){let s,r,a=G,n=()=>(a(),a=_e($,c=>t(5,r=c)),$);Ne(W,"user"),Ve(o,W,c=>t(2,s=c)),o.$$.on_destroy.push(()=>a());let{$$slots:l={},$$scope:v}=e;je("Page",l,[]);let f="",u=!1;const d=ne(),p=Le({avatar:Oe(Fe().refine(c=>"name"in c&&"size"in c&&"type"in c)),username:He().min(3).max(32)});let R,$;const i=[];Object.keys(e).forEach(c=>{!~i.indexOf(c)&&c.slice(0,2)!=="$$"&&c!=="slot"&&Qe.warn(`<Page> was created with unknown prop '${c}'`)});function g(c){o.$$.not_equal(r.username,c)&&(r.username=c,$.set(r))}function b(c){u=c,t(0,u),t(2,s),t(1,$)}return o.$capture_state=()=>({getContextClient:ne,UpdateUserDocument:ie,Toast:ve,goto:ae,createForm:ce,validator:le,reporter:ue,ValidationMessage:Y,trimNonSchema:fe,user:W,zod:Je,base:re,MetaDescriptors:ye,Card:$e,Content:ge,Textfield:xe,Button:de,errorMessage:f,errorToast:u,client:d,userSchema:p,form:R,data:$,$user:s,$data:r}),o.$inject_state=c=>{"errorMessage"in c&&t(3,f=c.errorMessage),"errorToast"in c&&t(0,u=c.errorToast),"form"in c&&t(4,R=c.form),"data"in c&&n(t(1,$=c.data))},e&&"$$inject"in e&&o.$inject_state(e.$$inject),o.$$.update=()=>{if(o.$$.dirty&6&&s&&!$){const c=ce({initialValues:{username:s.username},extend:[le({schema:p}),ue],onSubmit:O=>{console.log("submitted",O),d.mutation(ie,{user:fe(O,p),userId:s.id}).toPromise().then(I=>{I.error?(console.error(I.error.message),t(3,f="Error editing user: "+I.error.message),t(0,u=!0)):ae(re+"/user/"+I.data.updateUser.id)})}});t(4,R=c.form),n(t(1,$=c.data))}o.$$.dirty&1&&(u||t(3,f=""))},[u,$,s,f,R,r,p,g,b]}class st extends Ae{constructor(e){super(e),Ce(this,e,Ge,Z,Me,{userSchema:6}),N("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:Z.name})}get userSchema(){return this.$$.ctx[6]}set userSchema(e){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{st as component};
//# sourceMappingURL=25.182d8b08.js.map
