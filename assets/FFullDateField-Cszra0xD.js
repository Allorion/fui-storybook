import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as F}from"./index-DJO9vBfz.js";import{F as w}from"./FLoadIcon-8HypuZKP.js";import{F as j}from"./FStack-DvJS5si1.js";const r=F.forwardRef(({label:t,st:o,value:c,fullWidth:p,disabled:f,load:l=!1,errText:i,helpText:s,height:d="auto",width:n,...u},m)=>{const a={whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",width:p?"100%":"fit-content",height:"auto"};return n!==void 0&&(a.width=n),d!==void 0&&(a.height=d),o=Object.assign({},o,a),e.jsxs("div",{className:`form - group ${l?"ui left icon input loading":""}`,style:o,children:[t&&e.jsx("label",{className:"control-label with-offset",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:t}),e.jsx("input",{ref:m,disabled:f||l,style:{borderColor:i!==void 0&&i.length>0?"red":"#C4C4C4"},value:l?"":c,type:"date",className:"form-control",...u}),s!==void 0&&e.jsx("span",{style:{whiteSpace:"initial",color:"#a6a3a3",fontSize:"12px"},children:s}),i!==void 0&&i.length>0&&e.jsx(j,{direction:"column",st:{paddingLeft:"11px"},children:i==null?void 0:i.map((h,v)=>e.jsx("span",{style:{whiteSpace:"initial",color:"red"},children:h},v))}),l&&e.jsx("div",{className:"input-load",children:e.jsx(w,{size:10})})]})}),N=r;r.__docgenInfo={description:"",methods:[],displayName:"FFullDateField",props:{load:{defaultValue:{value:"false",computed:!1},required:!1},height:{defaultValue:{value:"'auto'",computed:!1},required:!1}}};export{N as F};
