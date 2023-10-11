import{j as i,a as s}from"./jsx-runtime-03b4ddbf.js";import{r as d}from"./index-76fb7be0.js";const n=({size:e=35,st:t,id:o,className:r,color:l="primary"})=>{const a=d.useRef((Math.random()+1).toString(36).substring(2));return i("div",{style:{margin:0,padding:0},children:[i("style",{children:[`
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
                    }`]}),s("span",{className:`f-load-icon f-load-icon-${a.current} ${l} ${r!==void 0?r:""}`,style:t,id:o})]})},p=n;try{n.displayName="FLoadIcon",n.__docgenInfo={description:"",displayName:"FLoadIcon",props:{color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"info"'},{value:'"light"'},{value:'"dark"'},{value:'"link"'}]}},size:{defaultValue:{value:"35"},description:"",name:"size",required:!1,type:{name:"number"}},st:{defaultValue:null,description:"",name:"st",required:!1,type:{name:"CSSProperties"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},handleClick:{defaultValue:null,description:"",name:"handleClick",required:!1,type:{name:"(() => void)"}}}}}catch{}export{p as F};
//# sourceMappingURL=FLoadIcon-b5845266.js.map
