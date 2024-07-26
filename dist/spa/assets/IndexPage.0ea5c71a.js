import{b as A,T as fe,n as ee,d as me,Q as J,a as te}from"./QChip.4bfd2669.js";import{y as he,k as Y,z as ye,c as r,h as m,A as be,g as Z,an as Se,r as N,w as ue,ai as _e,aa as ke,a_ as xe,K as we,G as ae,m as Ce,o as ce,ae as $e,l as qe,a$ as Ne,aX as W,b0 as Me,aL as Pe,ax as ze,ay as V,aH as X,aA as S,aF as B,az as ne,b1 as Be,aO as Ie,F as Te,f as k,aC as Fe,J as le,aE as Q,aP as ie,aJ as D,aM as re,aB as oe,b2 as Ve,b3 as Qe}from"./index.db4eb7cf.js";import{Q as Le}from"./FileUpload.vue_vue_type_style_index_0_scoped_true_lang.2d87d55c.js";import{u as Re}from"./use-quasar.e747d702.js";import"./axios.68373c25.js";import{_ as De}from"./plugin-vue_export-helper.21dcd24c.js";import"https://esm.sh/octokit";const p={...he,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,rounded:Boolean,thickness:{type:Number,default:.2,validator:e=>e>=0&&e<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean},U=50,de=2*U,ve=de*Math.PI,Ae=Math.round(ve*1e3)/1e3;var Ee=Y({name:"QCircularProgress",props:{...p,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(e,{slots:u}){const{proxy:{$q:f}}=Z(),_=ye(e),w=r(()=>{const i=(f.lang.rtl===!0?-1:1)*e.angle;return{transform:e.reverse!==(f.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-i}deg)`:`rotate3d(0, 0, 1, ${i-90}deg)`}}),c=r(()=>e.instantFeedback!==!0&&e.indeterminate!==!0?{transition:`stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease`}:""),d=r(()=>de/(1-e.thickness/2)),h=r(()=>`${d.value/2} ${d.value/2} ${d.value} ${d.value}`),t=r(()=>A(e.value,e.min,e.max)),g=r(()=>e.max-e.min),n=r(()=>e.thickness/2*d.value),o=r(()=>{const i=(e.max-t.value)/g.value,v=e.rounded===!0&&t.value<e.max&&i<.25?n.value/2*(1-i/.25):0;return ve*i+v});function s({thickness:i,offset:v,color:C,cls:I,rounded:T}){return m("circle",{class:"q-circular-progress__"+I+(C!==void 0?` text-${C}`:""),style:c.value,fill:"transparent",stroke:"currentColor","stroke-width":i,"stroke-dasharray":Ae,"stroke-dashoffset":v,"stroke-linecap":T,cx:d.value,cy:d.value,r:U})}return()=>{const i=[];e.centerColor!==void 0&&e.centerColor!=="transparent"&&i.push(m("circle",{class:`q-circular-progress__center text-${e.centerColor}`,fill:"currentColor",r:U-n.value/2,cx:d.value,cy:d.value})),e.trackColor!==void 0&&e.trackColor!=="transparent"&&i.push(s({cls:"track",thickness:n.value,offset:0,color:e.trackColor})),i.push(s({cls:"circle",thickness:n.value,offset:o.value,color:e.color,rounded:e.rounded===!0?"round":void 0}));const v=[m("svg",{class:"q-circular-progress__svg",style:w.value,viewBox:h.value,"aria-hidden":"true"},i)];return e.showValue===!0&&v.push(m("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:e.fontSize}},u.default!==void 0?u.default():[m("div",t.value)])),m("div",{class:`q-circular-progress q-circular-progress--${e.indeterminate===!0?"in":""}determinate`,style:_.value,role:"progressbar","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.indeterminate===!0?void 0:t.value},be(u.internal,v))}}});const se=[34,37,40,33,39,38],je=Object.keys(p);var Oe=Y({name:"QKnob",props:{...Se,...p,modelValue:{type:Number,required:!0},innerMin:Number,innerMax:Number,step:{type:Number,default:1,validator:e=>e>=0},tabindex:{type:[Number,String],default:0},disable:Boolean,readonly:Boolean},emits:["update:modelValue","change","dragValue"],setup(e,{slots:u,emit:f}){const{proxy:_}=Z(),{$q:w}=_,c=N(e.modelValue),d=N(!1),h=r(()=>isNaN(e.innerMin)===!0||e.innerMin<e.min?e.min:e.innerMin),t=r(()=>isNaN(e.innerMax)===!0||e.innerMax>e.max?e.max:e.innerMax);let g;function n(){c.value=e.modelValue===null?h.value:A(e.modelValue,h.value,t.value),z(!0)}ue(()=>`${e.modelValue}|${h.value}|${t.value}`,n),n();const o=r(()=>e.disable===!1&&e.readonly===!1),s=r(()=>"q-knob non-selectable"+(o.value===!0?" q-knob--editable":e.disable===!0?" disabled":"")),i=r(()=>(String(e.step).trim().split(".")[1]||"").length),v=r(()=>e.step===0?1:e.step),C=r(()=>e.instantFeedback===!0||d.value===!0),I=w.platform.is.mobile===!0?r(()=>o.value===!0?{onClick:F}:{}):r(()=>o.value===!0?{onMousedown:G,onClick:F,onKeydown:H,onKeyup:L}:{}),T=r(()=>o.value===!0?{tabindex:e.tabindex}:{[`aria-${e.disable===!0?"disabled":"readonly"}`]:"true"}),E=r(()=>{const a={};return je.forEach(b=>{a[b]=e[b]}),a});function j(a){a.isFinal?(P(a.evt,!0),d.value=!1):(a.isFirst&&(M(),d.value=!0),P(a.evt))}const O=r(()=>[[fe,j,void 0,{prevent:!0,stop:!0,mouse:!0}]]);function M(){const{top:a,left:b,width:q,height:R}=_.$el.getBoundingClientRect();g={top:a+R/2,left:b+q/2}}function G(a){M(),P(a)}function F(a){M(),P(a,!0)}function H(a){if(!se.includes(a.keyCode))return;_e(a);const b=([34,33].includes(a.keyCode)?10:1)*v.value,q=[34,37,40].includes(a.keyCode)?-b:b;c.value=A(parseFloat((c.value+q).toFixed(i.value)),h.value,t.value),z()}function P(a,b){const q=ke(a),R=Math.abs(q.top-g.top),ge=Math.sqrt(R**2+Math.abs(q.left-g.left)**2);let y=Math.asin(R/ge)*(180/Math.PI);q.top<g.top?y=g.left<q.left?90-y:270+y:y=g.left<q.left?y+90:270-y,w.lang.rtl===!0?y=ee(-y-e.angle,0,360):e.angle&&(y=ee(y-e.angle,0,360)),e.reverse===!0&&(y=360-y);let x=e.min+y/360*(e.max-e.min);if(v.value!==0){const K=x%v.value;x=x-K+(Math.abs(K)>=v.value/2?(K<0?-1:1)*v.value:0),x=parseFloat(x.toFixed(i.value))}x=A(x,h.value,t.value),f("dragValue",x),c.value!==x&&(c.value=x),z(b)}function L(a){se.includes(a.keyCode)&&z(!0)}function z(a){e.modelValue!==c.value&&f("update:modelValue",c.value),a===!0&&f("change",c.value)}const l=xe(e);function $(){return m("input",l.value)}return()=>{const a={class:s.value,role:"slider","aria-valuemin":h.value,"aria-valuemax":t.value,"aria-valuenow":e.modelValue,...T.value,...E.value,value:c.value,instantFeedback:C.value,...I.value},b={default:u.default};return o.value===!0&&e.name!==void 0&&(b.internal=$),we(Ee,a,b,"knob",o.value,()=>O.value)}}});const Ge={ratio:[String,Number]};function He(e,u){return r(()=>{const f=Number(e.ratio||(u!==void 0?u.value:void 0));return isNaN(f)!==!0&&f>0?{paddingBottom:`${100/f}%`}:null})}const Ke=1.7778;var Je=Y({name:"QImg",props:{...Ge,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:Ke},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:u,emit:f}){const _=N(e.initialRatio),w=He(e,_),c=Z(),{registerTimeout:d,removeTimeout:h}=ae(),{registerTimeout:t,removeTimeout:g}=ae(),n=r(()=>e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null),o=r(()=>e.errorSrc!==void 0?{src:e.errorSrc,__qerror:!0}:null),s=[N(null),N(n.value)],i=N(0),v=N(!1),C=N(!1),I=r(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),T=r(()=>({width:e.width,height:e.height})),E=r(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition q-img__image--`),j=r(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));function O(){if(g(),e.loadingShowDelay===0){v.value=!0;return}t(()=>{v.value=!0},e.loadingShowDelay)}function M(){g(),v.value=!1}function G({target:l}){W(c)===!1&&(h(),_.value=l.naturalHeight===0?.5:l.naturalWidth/l.naturalHeight,F(l,1))}function F(l,$){$===1e3||W(c)===!0||(l.complete===!0?H(l):d(()=>{F(l,$+1)},50))}function H(l){W(c)!==!0&&(i.value=i.value^1,s[i.value].value=null,M(),l.getAttribute("__qerror")!=="true"&&(C.value=!1),f("load",l.currentSrc||l.src))}function P(l){h(),M(),C.value=!0,s[i.value].value=o.value,s[i.value^1].value=n.value,f("error",l)}function L(l){const $=s[l].value,a={key:"img_"+l,class:E.value,style:j.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...$};return i.value===l?Object.assign(a,{class:a.class+"current",onLoad:G,onError:P}):a.class+="loaded",m("div",{class:"q-img__container absolute-full",key:"img"+l},m("img",a))}function z(){return v.value===!1?m("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},qe(u[C.value===!0?"error":"default"])):m("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},u.loading!==void 0?u.loading():e.noSpinner===!0?void 0:[m(Ne,{color:e.spinnerColor,size:e.spinnerSize})])}{let l=function(){ue(()=>e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null,$=>{h(),C.value=!1,$===null?(M(),s[i.value^1].value=n.value):O(),s[i.value].value=$},{immediate:!0})};Ce.value===!0?ce(l):l()}return()=>{const l=[];return w.value!==null&&l.push(m("div",{key:"filler",style:w.value})),s[0].value!==null&&l.push(L(0)),s[1].value!==null&&l.push(L(1)),l.push(m($e,{name:"q-transition--fade"},z)),m("div",{key:"main",class:I.value,style:T.value,role:"img","aria-label":e.alt},l)}}});const We=e=>(Ve("data-v-63d834d5"),e=e(),Qe(),e),Xe={class:"row"},Ue={class:"absolute-bottom",style:{padding:"0",background:"none"}},Ye={style:{padding:"0 10px"}},Ze={class:"text-h6 title"},pe={class:"text-subtitle2 path"},et={key:0},tt=We(()=>B("div",{class:"text-red font-size-12"}," (\u5EFA\u8BAE\u4E0D\u8981\u8D85\u8FC71G\uFF0C\u53EF\u80FD\u9762\u4E34\u5C01\u53F7\u98CE\u9669) ",-1)),at=Object.assign({name:"IndexPage"},{__name:"IndexPage",setup(e){const u=Re();N([]),Me();const f=Pe(),_=ze(),w=t=>{if(t<1024)return t+"k";if(t>1024&&t<1024*1024)return(t/1024).toFixed(1)+"M";if(t>1024*1024)return(t/1024/1024).toFixed(1)+"G"},c=t=>{_.changeUploadStatus(t.description.type),f.push({path:"/detail",query:{id:t.id,owner:t.owner.login,repo:t.name}})},d=(t,g)=>{g.stopPropagation(),u.dialog({dark:!0,title:"\u8B66\u544A",message:"\u8BE5\u64CD\u4F5C\u6781\u5176\u5371\u9669\uFF0C\u8BF7\u786E\u8BA4\u662F\u5426\u5220\u9664\u6539\u5E93\uFF01\uFF01\uFF01"}).onOk(()=>{u.loading.show({delay:400}),octokit.request(`DELETE /repos/${t.owner.login}/${t.name}`,{owner:t.owner.login,repo:t.name,headers:{"X-GitHub-Api-Version":"2022-11-28"}}).then(n=>{_.getStoreList().then(o=>{}).catch(o=>{let s=u.dialog({message:"\u672A\u77E5\u9519\u8BEF",position:"top"}),i=setTimeout(()=>{s.hide(),clearTimeout(i)},1e3)})}).finally(()=>{u.loading.hide()}).catch(n=>{let o=u.dialog({message:"\u5220\u9664\u5931\u8D25",position:"top"}),s=setTimeout(()=>{o.hide(),clearTimeout(s)},1e3)})}).onCancel(()=>{}).onDismiss(()=>{})},h=async(t,g)=>{g.stopPropagation(),window.open(`https://api.github.com/repos/${t.owner.login}/${t.name}/zipball/main?owner=${t.owner.login}&repo=${t.name}&ref=main`)};return ce(()=>{}),(t,g)=>(V(),X(Le,{class:"container"},{default:S(()=>[B("div",Xe,[(V(!0),ne(Te,null,Be(Ie(_).storeList,n=>(V(),X(me,{class:"item",key:n.id},{default:S(()=>[k(Fe,{class:"col-auto-sm my-card",onClick:o=>c(n)},{default:S(()=>[le(k(J,{size:"sm",color:"red","text-color":"white",icon:"event",class:"clip"},{default:S(()=>[Q(" \u79C1\u6709 ")]),_:2},1536),[[ie,n.visibility=="private"]]),le(k(J,{size:"sm",color:"primary","text-color":"white",icon:"event",class:"clip"},{default:S(()=>[Q(" \u516C\u5F00 ")]),_:2},1536),[[ie,n.visibility=="public"]]),k(Je,{style:{height:"180px"},src:"https://cdn.quasar.dev/img/parallax1.jpg"},{default:S(()=>{var o,s;return[B("div",Ue,[B("div",Ye,[B("div",Ze,D(n.name),1),B("div",pe,[((o=n.description)==null?void 0:o.type)!="img-box"?(V(),ne("span",et,D(((s=n.description)==null?void 0:s.message)||"-"),1)):(V(),X(J,{key:1,color:"primary",size:"sm",square:"","text-color":"white",icon:"star"},{default:S(()=>[Q("\u56FE\u5E8A")]),_:1}))])]),k(re,{style:{"justify-content":"space-between",padding:"10px","background-color":"#0000005e"}},{default:S(()=>[k(te,{style:{"margin-right":"10px"}},{default:S(()=>[k(te,{class:"font-size-12;"},{default:S(()=>[Q("\u5B58\u50A8\u5E93\u5927\u5C0F:"+D(w(n.size)),1)]),_:2},1024),tt]),_:2},1024),k(Oe,{"show-value":"","font-size":"12px",value:n==null?void 0:n.percent,size:"50px",thickness:.22,color:"teal","track-color":"grey-3"},{default:S(()=>[Q(D(n==null?void 0:n.percent)+"% ",1)]),_:2},1032,["value"])]),_:2},1024)])]}),_:2},1024),k(re,null,{default:S(()=>[k(oe,{color:"red",flat:"",label:"\u5220\u9664",onClick:o=>d(n,o)},null,8,["onClick"]),k(oe,{color:"primary",flat:"",label:"\u5BFC\u51FA",onClick:o=>h(n,o)},null,8,["onClick"])]),_:2},1024)]),_:2},1032,["onClick"])]),_:2},1024))),128))])]),_:1}))}});var ct=De(at,[["__scopeId","data-v-63d834d5"]]);export{ct as default};
