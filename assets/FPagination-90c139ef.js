import{a as l,j as N}from"./jsx-runtime-03b4ddbf.js";import{r as P,R as V}from"./index-76fb7be0.js";const m="...",f=(e,r)=>{let n=r-e+1;return Array.from({length:n},(a,s)=>s+e)},h=({totalCount:e,pageSize:r,siblingCount:n=1,currentPage:a})=>P.useMemo(()=>{const t=Math.ceil(e/r);if(n+5>=t)return f(1,t);const p=Math.max(a-n,1),i=Math.min(a+n,t),u=p>2,d=i<t-2,g=1,o=t;if(!u&&d){let c=3+2*n;return[...f(1,c),m,t]}if(u&&!d){let c=3+2*n,q=f(t-c+1,t);return[g,m,...q]}if(u&&d){let c=f(p,i);return[g,m,...c,m,o]}},[e,r,n,a]);try{h.displayName="usePagination",h.__docgenInfo={description:"",displayName:"usePagination",props:{currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},totalCount:{defaultValue:null,description:"",name:"totalCount",required:!0,type:{name:"number"}},pageSize:{defaultValue:null,description:"",name:"pageSize",required:!0,type:{name:"number"}},siblingCount:{defaultValue:{value:"1"},description:"",name:"siblingCount",required:!1,type:{name:"number"}}}}}catch{}const y=({currentPage:e,totalCount:r,pageSize:n,onPageChange:a,id:s,className:t,st:_,siblingCount:p})=>{const i=h({currentPage:e,totalCount:r,siblingCount:p,pageSize:n});if(e===0||i.length<2)return null;const u=()=>{a(e+1)},d=()=>{a(e-1)};let g=i[i.length-1];return l(V.Fragment,{children:N("ul",{className:`pagination-container ${t!==void 0?t:""}`,style:_,id:`${s!==void 0?s:""}`,children:[l("li",{className:`pagination-item ${e===1?"disabled":""}`,onClick:d,children:l("div",{className:"arrow left"})}),i.map(o=>o===m?l("li",{className:"pagination-item dots",children:"…"}):l("li",{className:`pagination-item ${o===e?"selected":""}`,id:"test-id",onClick:()=>a(o),children:o})),l("li",{className:`pagination-item ${e===g?"disabled":""}`,onClick:u,children:l("div",{className:"arrow right"})})]})})},x=y;try{y.displayName="FPagination",y.__docgenInfo={description:"",displayName:"FPagination",props:{currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},totalCount:{defaultValue:null,description:"",name:"totalCount",required:!0,type:{name:"number"}},pageSize:{defaultValue:null,description:"",name:"pageSize",required:!0,type:{name:"number"}},onPageChange:{defaultValue:null,description:"",name:"onPageChange",required:!0,type:{name:"(page: string | number) => void"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},st:{defaultValue:null,description:"",name:"st",required:!1,type:{name:"CSSProperties"}},siblingCount:{defaultValue:null,description:"",name:"siblingCount",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"}]}}}}}catch{}export{x as F};
//# sourceMappingURL=FPagination-90c139ef.js.map