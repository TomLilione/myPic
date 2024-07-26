import{k as g,c as a,h as p,l as m,C as $,E as q,g as b,i as S,u as v,x as Q}from"./index.db4eb7cf.js";var L=g({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:l}){const t=a(()=>parseInt(e.lines,10)),u=a(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(t.value===1?" ellipsis":"")),r=a(()=>e.lines!==void 0&&t.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":t.value}:null);return()=>p("div",{style:r.value,class:u.value},m(l.default))}}),w=g({name:"QList",props:{...$,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:l}){const t=b(),u=q(e,t.proxy.$q),r=a(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(u.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>p(e.tag,{class:r.value},m(l.default))}});const _={position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,validator:e=>e.length===2},expand:Boolean};function B(){const{props:e,proxy:{$q:l}}=b(),t=S(Q,v);if(t===v)return console.error("QPageSticky needs to be child of QLayout"),v;const u=a(()=>{const o=e.position;return{top:o.indexOf("top")!==-1,right:o.indexOf("right")!==-1,bottom:o.indexOf("bottom")!==-1,left:o.indexOf("left")!==-1,vertical:o==="top"||o==="bottom",horizontal:o==="left"||o==="right"}}),r=a(()=>t.header.offset),c=a(()=>t.right.offset),f=a(()=>t.footer.offset),d=a(()=>t.left.offset),h=a(()=>{let o=0,n=0;const s=u.value,x=l.lang.rtl===!0?-1:1;s.top===!0&&r.value!==0?n=`${r.value}px`:s.bottom===!0&&f.value!==0&&(n=`${-f.value}px`),s.left===!0&&d.value!==0?o=`${x*d.value}px`:s.right===!0&&c.value!==0&&(o=`${-x*c.value}px`);const i={transform:`translate(${o}, ${n})`};return e.offset&&(i.margin=`${e.offset[1]}px ${e.offset[0]}px`),s.vertical===!0?(d.value!==0&&(i[l.lang.rtl===!0?"right":"left"]=`${d.value}px`),c.value!==0&&(i[l.lang.rtl===!0?"left":"right"]=`${c.value}px`)):s.horizontal===!0&&(r.value!==0&&(i.top=`${r.value}px`),f.value!==0&&(i.bottom=`${f.value}px`)),i}),y=a(()=>`q-page-sticky row flex-center fixed-${e.position} q-page-sticky--${e.expand===!0?"expand":"shrink"}`);function k(o){const n=m(o.default);return p("div",{class:y.value,style:h.value},e.expand===!0?n:[p("div",n)])}return{$layout:t,getStickyContent:k}}var C=g({name:"QPageSticky",props:_,setup(e,{slots:l}){const{getStickyContent:t}=B();return()=>t(l)}});export{L as Q,C as a,w as b};
