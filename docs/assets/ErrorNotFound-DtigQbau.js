import{c as o,a as Q,h as v,g as H,b as de,i as D,d as fe,e as ve,s as ue,p as me,r as U,o as ge,w as be,f as P,T as he,l as ye,j as ke,k as pe,m as xe,n as qe,q as I,t as Ee}from"./index-DEGOWrll.js";const F={xs:18,sm:24,md:32,lg:38,xl:46},re={size:String};function le(e,t=F){return o(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}function $e(e,t){return e!==void 0&&e()||t}function z(e,t){return e!==void 0?t.concat(e()):t}const W="0 0 24 24",X=e=>e,V=e=>`ionicons ${e}`,ie={"mdi-":e=>`mdi ${e}`,"icon-":X,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":V,"ion-ios":V,"ion-logo":V,"iconfont ":X,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},se={o_:"-outlined",r_:"-round",s_:"-sharp"},oe={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},we=new RegExp("^("+Object.keys(ie).join("|")+")"),Se=new RegExp("^("+Object.keys(se).join("|")+")"),G=new RegExp("^("+Object.keys(oe).join("|")+")"),_e=/^[Mm]\s?[-+]?\.?\d/,Be=/^img:/,Re=/^svguse:/,Le=/^ion-/,Ce=/^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /,Y=Q({name:"QIcon",props:{...re,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:a}}=H(),n=le(e),i=o(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),f=o(()=>{let c,r=e.name;if(r==="none"||!r)return{none:!0};if(a.iconMapFn!==null){const s=a.iconMapFn(r);if(s!==void 0)if(s.icon!==void 0){if(r=s.icon,r==="none"||!r)return{none:!0}}else return{cls:s.cls,content:s.content!==void 0?s.content:" "}}if(_e.test(r)===!0){const[s,y=W]=r.split("|");return{svg:!0,viewBox:y,nodes:s.split("&&").map(l=>{const[k,b,p]=l.split("@@");return v("path",{style:b,d:k,transform:p})})}}if(Be.test(r)===!0)return{img:!0,src:r.substring(4)};if(Re.test(r)===!0){const[s,y=W]=r.split("|");return{svguse:!0,src:s.substring(7),viewBox:y}}let q=" ";const h=r.match(we);if(h!==null)c=ie[h[1]](r);else if(Ce.test(r)===!0)c=r;else if(Le.test(r)===!0)c=`ionicons ion-${a.platform.is.ios===!0?"ios":"md"}${r.substring(3)}`;else if(G.test(r)===!0){c="notranslate material-symbols";const s=r.match(G);s!==null&&(r=r.substring(6),c+=oe[s[1]]),q=r}else{c="notranslate material-icons";const s=r.match(Se);s!==null&&(r=r.substring(2),c+=se[s[1]]),q=r}return{cls:c,content:q}});return()=>{const c={class:i.value,style:n.value,"aria-hidden":"true",role:"presentation"};return f.value.none===!0?v(e.tag,c,$e(t.default)):f.value.img===!0?v(e.tag,c,z(t.default,[v("img",{src:f.value.src})])):f.value.svg===!0?v(e.tag,c,z(t.default,[v("svg",{viewBox:f.value.viewBox||"0 0 24 24"},f.value.nodes)])):f.value.svguse===!0?v(e.tag,c,z(t.default,[v("svg",{viewBox:f.value.viewBox},[v("use",{"xlink:href":f.value.src})])])):(f.value.cls!==void 0&&(c.class+=" "+f.value.cls),v(e.tag,c,z(t.default,[f.value.content])))}}}),Pe={size:{type:[String,Number],default:"1em"},color:String};function Te(e){return{cSize:o(()=>e.size in F?`${F[e.size]}px`:e.size),classes:o(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}const Oe=Q({name:"QSpinner",props:{...Pe,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:a}=Te(e);return()=>v("svg",{class:a.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[v("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function Me(e,t){const a=e.style;for(const n in t)a[n]=t[n]}function Ae(e,t=250){let a=!1,n;return function(){return a===!1&&(a=!0,setTimeout(()=>{a=!1},t),n=e.apply(this,arguments)),n}}function J(e,t,a,n){a.modifiers.stop===!0&&ue(e);const i=a.modifiers.color;let f=a.modifiers.center;f=f===!0||n===!0;const c=document.createElement("span"),r=document.createElement("span"),q=me(e),{left:h,top:s,width:y,height:l}=t.getBoundingClientRect(),k=Math.sqrt(y*y+l*l),b=k/2,p=`${(y-k)/2}px`,d=f?p:`${q.left-h-b}px`,x=`${(l-k)/2}px`,C=f?x:`${q.top-s-b}px`;r.className="q-ripple__inner",Me(r,{height:`${k}px`,width:`${k}px`,transform:`translate3d(${d},${C},0) scale3d(.2,.2,1)`,opacity:0}),c.className=`q-ripple${i?" text-"+i:""}`,c.setAttribute("dir","ltr"),c.appendChild(r),t.appendChild(c);const R=()=>{c.remove(),clearTimeout(L)};a.abort.push(R);let L=setTimeout(()=>{r.classList.add("q-ripple__inner--enter"),r.style.transform=`translate3d(${p},${x},0) scale3d(1,1,1)`,r.style.opacity=.2,L=setTimeout(()=>{r.classList.remove("q-ripple__inner--enter"),r.classList.add("q-ripple__inner--leave"),r.style.opacity=0,L=setTimeout(()=>{c.remove(),a.abort.splice(a.abort.indexOf(R),1)},275)},250)},50)}function Z(e,{modifiers:t,value:a,arg:n}){const i=Object.assign({},e.cfg.ripple,t,a);e.modifiers={early:i.early===!0,stop:i.stop===!0,center:i.center===!0,color:i.color||n,keyCodes:[].concat(i.keyCodes||13)}}const je=de({name:"ripple",beforeMount(e,t){const a=t.instance.$.appContext.config.globalProperties.$q.config||{};if(a.ripple===!1)return;const n={cfg:a,enabled:t.value!==!1,modifiers:{},abort:[],start(i){n.enabled===!0&&i.qSkipRipple!==!0&&i.type===(n.modifiers.early===!0?"pointerdown":"click")&&J(i,e,n,i.qKeyEvent===!0)},keystart:Ae(i=>{n.enabled===!0&&i.qSkipRipple!==!0&&D(i,n.modifiers.keyCodes)===!0&&i.type===`key${n.modifiers.early===!0?"down":"up"}`&&J(i,e,n,!0)},300)};Z(n,t),e.__qripple=n,fe(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const a=e.__qripple;a!==void 0&&(a.enabled=t.value!==!1,a.enabled===!0&&Object(t.value)===t.value&&Z(a,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(a=>{a()}),ve(t,"main"),delete e._qripple)}}),ce={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},ze=Object.keys(ce),Ne={align:{type:String,validator:e=>ze.includes(e)}};function Ke(e){return o(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${ce[t]}`})}function Ie(e){return e.appContext.config.globalProperties.$router!==void 0}function ee(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function te(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ve(e,t){for(const a in t){const n=t[a],i=e[a];if(typeof n=="string"){if(n!==i)return!1}else if(Array.isArray(i)===!1||i.length!==n.length||n.some((f,c)=>f!==i[c]))return!1}return!0}function ne(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((a,n)=>a===t[n]):e.length===1&&e[0]===t}function De(e,t){return Array.isArray(e)===!0?ne(e,t):Array.isArray(t)===!0?ne(t,e):e===t}function Fe(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const a in e)if(De(e[a],t[a])===!1)return!1;return!0}const Qe={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean};function He({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const a=H(),{props:n,proxy:i,emit:f}=a,c=Ie(a),r=o(()=>n.disable!==!0&&n.href!==void 0),q=t===!0?o(()=>c===!0&&n.disable!==!0&&r.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):o(()=>c===!0&&r.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),h=o(()=>q.value===!0?C(n.to):null),s=o(()=>h.value!==null),y=o(()=>r.value===!0||s.value===!0),l=o(()=>n.type==="a"||y.value===!0?"a":n.tag||e||"div"),k=o(()=>r.value===!0?{href:n.href,target:n.target}:s.value===!0?{href:h.value.href,target:n.target}:{}),b=o(()=>{if(s.value===!1)return-1;const{matched:m}=h.value,{length:E}=m,w=m[E-1];if(w===void 0)return-1;const _=i.$route.matched;if(_.length===0)return-1;const B=_.findIndex(te.bind(null,w));if(B!==-1)return B;const N=ee(m[E-2]);return E>1&&ee(w)===N&&_[_.length-1].path!==N?_.findIndex(te.bind(null,m[E-2])):B}),p=o(()=>s.value===!0&&b.value!==-1&&Ve(i.$route.params,h.value.params)),d=o(()=>p.value===!0&&b.value===i.$route.matched.length-1&&Fe(i.$route.params,h.value.params)),x=o(()=>s.value===!0?d.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":p.value===!0?` ${n.activeClass}`:"":"");function C(m){try{return i.$router.resolve(m)}catch{}return null}function R(m,{returnRouterError:E,to:w=n.to,replace:_=n.replace}={}){if(n.disable===!0)return m.preventDefault(),Promise.resolve(!1);if(m.metaKey||m.altKey||m.ctrlKey||m.shiftKey||m.button!==void 0&&m.button!==0||n.target==="_blank")return Promise.resolve(!1);m.preventDefault();const B=i.$router[_===!0?"replace":"push"](w);return E===!0?B:B.then(()=>{}).catch(()=>{})}function L(m){if(s.value===!0){const E=w=>R(m,w);f("click",m,E),m.defaultPrevented!==!0&&E()}else f("click",m)}return{hasRouterLink:s,hasHrefLink:r,hasLink:y,linkTag:l,resolvedLink:h,linkIsActive:p,linkIsExactActive:d,linkClass:x,linkAttrs:k,getLink:C,navigateToRouterLink:R,navigateOnClick:L}}const ae={none:0,xs:4,sm:8,md:16,lg:24,xl:32},Ue={xs:8,sm:10,md:14,lg:20,xl:24},We=["button","submit","reset"],Xe=/[^\s]\/[^\s]/,Ge=["flat","outline","push","unelevated"];function Ye(e,t){return e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t}const Je={...re,...Qe,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...Ge.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...Ne.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean},Ze={...Je,round:Boolean};function et(e){const t=le(e,Ue),a=Ke(e),{hasRouterLink:n,hasLink:i,linkTag:f,linkAttrs:c,navigateOnClick:r}=He({fallbackTag:"button"}),q=o(()=>{const d=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},d,{padding:e.padding.split(/\s+/).map(x=>x in ae?ae[x]+"px":x).join(" "),minWidth:"0",minHeight:"0"}):d}),h=o(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),s=o(()=>e.disable!==!0&&e.loading!==!0),y=o(()=>s.value===!0?e.tabindex||0:-1),l=o(()=>Ye(e,"standard")),k=o(()=>{const d={tabindex:y.value};return i.value===!0?Object.assign(d,c.value):We.includes(e.type)===!0&&(d.type=e.type),f.value==="a"?(e.disable===!0?d["aria-disabled"]="true":d.href===void 0&&(d.role="button"),n.value!==!0&&Xe.test(e.type)===!0&&(d.type=e.type)):e.disable===!0&&(d.disabled="",d["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(d,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),d}),b=o(()=>{let d;e.color!==void 0?e.flat===!0||e.outline===!0?d=`text-${e.textColor||e.color}`:d=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(d=`text-${e.textColor}`);const x=e.round===!0?"round":`rectangle${h.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${l.value} q-btn--${x}`+(d!==void 0?" "+d:"")+(s.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),p=o(()=>a.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:b,style:q,innerClasses:p,attributes:k,hasLink:i,linkTag:f,navigateOnClick:r,isActionable:s}}const{passiveCapture:$}=ye;let T=null,O=null,M=null;const tt=Q({name:"QBtn",props:{...Ze,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:a}){const{proxy:n}=H(),{classes:i,style:f,innerClasses:c,attributes:r,hasLink:q,linkTag:h,navigateOnClick:s,isActionable:y}=et(e),l=U(null),k=U(null);let b=null,p,d=null;const x=o(()=>e.label!==void 0&&e.label!==null&&e.label!==""),C=o(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:q.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),R=o(()=>({center:e.round})),L=o(()=>{const u=Math.max(0,Math.min(100,e.percentage));return u>0?{transition:"transform 0.6s",transform:`translateX(${u-100}%)`}:{}}),m=o(()=>{if(e.loading===!0)return{onMousedown:j,onTouchstart:j,onClick:j,onKeydown:j,onKeyup:j};if(y.value===!0){const u={onClick:w,onKeydown:_,onMousedown:N};if(n.$q.platform.has.touch===!0){const g=e.onTouchstart!==void 0?"":"Passive";u[`onTouchstart${g}`]=B}return u}return{onClick:P}}),E=o(()=>({ref:l,class:"q-btn q-btn-item non-selectable no-outline "+i.value,style:f.value,...r.value,...m.value}));function w(u){if(l.value!==null){if(u!==void 0){if(u.defaultPrevented===!0)return;const g=document.activeElement;if(e.type==="submit"&&g!==document.body&&l.value.contains(g)===!1&&g.contains(l.value)===!1){l.value.focus();const K=()=>{document.removeEventListener("keydown",P,!0),document.removeEventListener("keyup",K,$),l.value!==null&&l.value.removeEventListener("blur",K,$)};document.addEventListener("keydown",P,!0),document.addEventListener("keyup",K,$),l.value.addEventListener("blur",K,$)}}s(u)}}function _(u){l.value!==null&&(a("keydown",u),D(u,[13,32])===!0&&O!==l.value&&(O!==null&&A(),u.defaultPrevented!==!0&&(l.value.focus(),O=l.value,l.value.classList.add("q-btn--active"),document.addEventListener("keyup",S,!0),l.value.addEventListener("blur",S,$)),P(u)))}function B(u){l.value!==null&&(a("touchstart",u),u.defaultPrevented!==!0&&(T!==l.value&&(T!==null&&A(),T=l.value,b=u.target,b.addEventListener("touchcancel",S,$),b.addEventListener("touchend",S,$)),p=!0,d!==null&&clearTimeout(d),d=setTimeout(()=>{d=null,p=!1},200)))}function N(u){l.value!==null&&(u.qSkipRipple=p===!0,a("mousedown",u),u.defaultPrevented!==!0&&M!==l.value&&(M!==null&&A(),M=l.value,l.value.classList.add("q-btn--active"),document.addEventListener("mouseup",S,$)))}function S(u){if(l.value!==null&&!(u!==void 0&&u.type==="blur"&&document.activeElement===l.value)){if(u!==void 0&&u.type==="keyup"){if(O===l.value&&D(u,[13,32])===!0){const g=new MouseEvent("click",u);g.qKeyEvent=!0,u.defaultPrevented===!0&&ke(g),u.cancelBubble===!0&&ue(g),l.value.dispatchEvent(g),P(u),u.qKeyEvent=!0}a("keyup",u)}A()}}function A(u){const g=k.value;u!==!0&&(T===l.value||M===l.value)&&g!==null&&g!==document.activeElement&&(g.setAttribute("tabindex",-1),g.focus()),T===l.value&&(b!==null&&(b.removeEventListener("touchcancel",S,$),b.removeEventListener("touchend",S,$)),T=b=null),M===l.value&&(document.removeEventListener("mouseup",S,$),M=null),O===l.value&&(document.removeEventListener("keyup",S,!0),l.value!==null&&l.value.removeEventListener("blur",S,$),O=null),l.value!==null&&l.value.classList.remove("q-btn--active")}function j(u){P(u),u.qSkipRipple=!0}return ge(()=>{A(!0)}),Object.assign(n,{click:u=>{y.value===!0&&w(u)}}),()=>{let u=[];e.icon!==void 0&&u.push(v(Y,{name:e.icon,left:e.stack!==!0&&x.value===!0,role:"img"})),x.value===!0&&u.push(v("span",{class:"block"},[e.label])),u=z(t.default,u),e.iconRight!==void 0&&e.round===!1&&u.push(v(Y,{name:e.iconRight,right:e.stack!==!0&&x.value===!0,role:"img"}));const g=[v("span",{class:"q-focus-helper",ref:k})];return e.loading===!0&&e.percentage!==void 0&&g.push(v("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[v("span",{class:"q-btn__progress-indicator fit block",style:L.value})])),g.push(v("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+c.value},u)),e.loading!==null&&g.push(v(he,{name:"q-transition--fade"},()=>e.loading===!0?[v("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[v(Oe)])]:null)),be(v(h.value,E.value,g),[[je,C.value,void 0,R.value]])}}}),nt={class:"fullscreen bg-blue text-white text-center q-pa-md flex flex-center"},ut=pe({__name:"ErrorNotFound",setup(e){return(t,a)=>(xe(),qe("div",nt,[I("div",null,[a[0]||(a[0]=I("div",{style:{"font-size":"30vh"}}," 404 ",-1)),a[1]||(a[1]=I("div",{class:"text-h2",style:{opacity:".4"}}," Oops. Nothing here... ",-1)),Ee(tt,{class:"q-mt-xl",color:"white","text-color":"blue",unelevated:"",to:"/",label:"Go Home","no-caps":""})])]))}});export{ut as default};
