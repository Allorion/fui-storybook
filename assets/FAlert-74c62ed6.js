import{a as e,j as r,F as i}from"./jsx-runtime-03b4ddbf.js";import{r as n,R as k}from"./index-76fb7be0.js";import{F as q}from"./FCloseIcon-149fc16a.js";import"./FArrowIcon-6e660791.js";import"./FPlusIcon-518141a8.js";import"./FTrashIcon-280d00b6.js";import"./FCheckIcon-59b53204.js";import"./FListIcon-9247e080.js";import"./FPenIcon-dca866e8.js";import"./FDownloadIcon-e64661fe.js";import"./FCopyAdd-8b38f200.js";import"./FUnlinkIcon-2b7d852c.js";import"./FFilterIcon-ac066807.js";import"./FLoadIcon-b5845266.js";const p=({title:d,body:g,variant:u="info",displayTime:V,open:c,onClose:o,vertical:m="center",horizontal:f="center",buttonClose:z=!1,size:h})=>{const v=n.useRef(),b=n.useRef(),y=n.useRef(),s=n.useRef((Math.random()+1).toString(36).substring(2));let l=V;n.useEffect(()=>{const a=document.getElementById(`f-alert-progress-value-${s.current}`);if(v.current=setTimeout(()=>{c&&(document.querySelector(`#f-block-alert-${s.current}`).classList.add("f-alert-visible"),a!==null&&(a.style.width="0"))}),l!==void 0&&c&&o!==void 0){l<1&&(l=1);const t=document.querySelector(`#f-block-alert-${s.current}`);a.style.transition=`${l}s linear`,b.current=setTimeout(()=>{t.classList.remove("f-alert-visible"),t.classList.add("f-alert-hidden")},(l-1)*1e3),y.current=setTimeout(()=>{o(!1),t.classList.remove("f-alert-hidden"),t.classList.remove("f-alert-visible")},l*1e3)}},[c]);const L=()=>{let a=r(i,{children:[e("path",{d:"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}),e("path",{d:"m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"})]});switch(u){case"info":a=r(i,{children:[e("path",{d:"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}),e("path",{d:"m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"})]});break;case"success":a=r(i,{children:[e("path",{d:"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}),e("path",{d:"M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"})]});break;case"error":a=r(i,{children:[e("path",{d:"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}),e("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})]});break;case"warning":a=r(i,{children:[e("path",{d:"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}),e("path",{d:"M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"})]});break}return a},M=()=>{const a={},t={};switch(m){case"top":a.top=0;break;case"bottom":a.bottom=0;break;case"center":m==="center"&&f!=="center"&&(a.transform="translateY(-50%)"),a.top="50%";break}switch(f){case"left":t.left=0;break;case"right":t.right=0;break;case"center":m==="center"&&f==="center"?t.transform="translate(-50%, -50%)":t.transform="translateX(-50%)",t.left="50%";break}return Object.assign({},t,a)};return e(k.Fragment,{children:c&&e("div",{className:"f-block-alert",id:`f-block-alert-${s.current}`,children:e("div",{className:"f-alert-component",style:M(),children:r("div",{className:"f-alert",children:[e("div",{className:`f-alert-ico ${u}`,children:e("svg",{width:"28",height:"28",viewBox:"0 0 16 16",children:L()})}),r("div",{className:"f-alert-inside",style:{width:h!==void 0?`${h}`:"fit-content"},children:[r("div",{className:"f-alert-header",children:[e("h4",{children:d!==void 0?d:""}),z&&o&&e(q,{size:25,st:{cursor:"pointer"},handleClose:()=>{const a=document.querySelector(`#f-block-alert-${s.current}`);a.classList.remove("f-alert-visible"),a.classList.add("f-alert-hidden"),o(!1),a.classList.remove("f-alert-visible"),a.classList.remove("f-alert-hidden"),clearTimeout(v.current),clearTimeout(b.current),clearTimeout(y.current)}})]}),e("div",{className:"f-alert-body",children:e("span",{children:g})})]}),l&&e("div",{className:"f-alert-progress",children:e("div",{className:"f-alert-progress-bar",children:e("div",{className:`f-alert-progress-value ${u}`,id:`f-alert-progress-value-${s.current}`})})})]})})})})},E=p;try{p.displayName="FAlert",p.__docgenInfo={description:"",displayName:"FAlert",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},body:{defaultValue:null,description:"",name:"body",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"info"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"info"'},{value:'"error"'}]}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"((e: boolean) => void)"}},st:{defaultValue:null,description:"",name:"st",required:!1,type:{name:"CSSProperties"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},vertical:{defaultValue:{value:"center"},description:"",name:"vertical",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"top"'},{value:'"bottom"'}]}},horizontal:{defaultValue:{value:"center"},description:"",name:"horizontal",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},buttonClose:{defaultValue:{value:"false"},description:"",name:"buttonClose",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},displayTime:{defaultValue:null,description:"",name:"displayTime",required:!1,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string"}}}}}catch{}export{E as F};
//# sourceMappingURL=FAlert-74c62ed6.js.map
