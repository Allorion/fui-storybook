import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{F as p,a as u}from"./FCarouselItem-Diq-YX18.js";import"./index-DJO9vBfz.js";const s=""+new URL("Card-K4UZwvm3.jpg",import.meta.url).href,f={title:"Components/SURFACES/CarouselComponents",tags:["autodocs"],component:p},h=[s,s,s,s,s,s,s,s],g=a=>r.jsx(r.Fragment,{children:r.jsx(p,{...a})}),t=g.bind({});t.args={className:"f-carousel-class",id:"f-carousel-id",width:"917px",height:"196px",visibleElAmount:3,children:r.jsx(r.Fragment,{children:h.map((a,e)=>r.jsx(u,{widthCard:"300px",heightCard:"196px",index:e,children:r.jsx("img",{src:a,alt:`Постер ${e}`,width:"300px"})}))})};const o=g.bind({});o.args={autoSwitching:{flag:!0,timeSecond:2e3},className:"f-carousel-class",id:"f-carousel-id",width:"917px",height:"196px",visibleElAmount:3,children:r.jsx(r.Fragment,{children:h.map((a,e)=>r.jsxs(u,{widthCard:"300px",heightCard:"196px",index:e,children:[r.jsx("img",{src:a,alt:`Постер ${e}`,width:"300px"}),r.jsx("p",{children:e})]}))})};var n,c,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
  return <>\r
            <FCarousel {...args} />\r
        </>;
}`,...(i=(c=t.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var l,m,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  return <>\r
            <FCarousel {...args} />\r
        </>;
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const w=["Default","AutoSwitching"];export{o as AutoSwitching,t as Default,w as __namedExportsOrder,f as default};
