import{j as r}from"./jsx-runtime-CkxqCPlQ.js";/* empty css               */import{r as l}from"./index-DJO9vBfz.js";const i=({size:e=35,st:t,id:o,className:n,color:s="primary"})=>{const a=l.useRef((Math.random()+1).toString(36).substring(2));return r.jsxs("div",{style:{margin:0,padding:0},children:[r.jsxs("style",{children:[`
                    .f-load-icon-${a.current} {
                        width: ${e}px;
                        height: ${e*2.25}px;
                        -webkit-animation: anim-f-load-icon-${a.current} 2s linear infinite alternate;
                        animation: anim-f-load-icon-${a.current} 2s linear infinite alternate;
                        transform: perspective(${e*2.5}px) rotateX(-45deg);
                        border-width: ${e/10}px !important;
                    }
                    `,`@-webkit-keyframes anim-f-load-icon-${a.current} {
                        0% {
                            box-shadow: 0 0 inset;
                        }
                        100% {
                            box-shadow: 0 calc((${e*2.25}px - 2px) * -1) inset;
                        }
                    }`,`@keyframes anim-f-load-icon-${a.current} {
                        0% {
                            box-shadow: 0 0 inset;
                        }
                        100% {
                            box-shadow: 0 calc((${e*2.25}px - 2px) * -1) inset;
                        }
                    }`]}),r.jsx("span",{className:`f-load-icon f-load-icon-${a.current} ${s} ${n!==void 0?n:""}`,style:t,id:o})]})},p=i;i.__docgenInfo={description:"",methods:[],displayName:"FLoadIcon",props:{color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'link'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"35",computed:!1}},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},handleClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{p as F};
