import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{F as t}from"./FAccordion-DoHEzoJ5.js";import"./index-yBjzXJbu.js";import"./index-DY-snNUy.js";const g={title:"Material/FAccordion",component:t,argTypes:{variant:{control:{type:"select"},options:["info","alert","warning"],defaultValue:"info"}}},r=({variant:o,title:l,defaultOpen:s,open:d,children:c})=>e.jsx(t,{variant:o,title:l,defaultOpen:s,open:d,children:c});r.args={variant:"info",title:"Что такое FAccordion?",defaultOpen:!0,children:e.jsxs("div",{children:[e.jsx("p",{children:"FAccordion — это простой и наглядный компонент для скрытия и показа контента."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Поддерживает разные цветовые схемы"}),e.jsx("li",{children:"Можно управлять состоянием извне"}),e.jsx("li",{children:"Лёгкая интеграция"})]})]})};r.__docgenInfo={description:"",methods:[],displayName:"Playground",props:{variant:{required:!1,tsType:{name:"union",raw:"'info' | 'alert' | 'warning'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'alert'"},{name:"literal",value:"'warning'"}]},description:""},title:{required:!1,tsType:{name:"string"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};var n,a,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`({
  variant,
  title,
  defaultOpen,
  open,
  children
}: PlaygroundProps) => {
  return <FAccordion variant={variant} title={title} defaultOpen={defaultOpen} open={open}>\r
            {children}\r
        </FAccordion>;
}`,...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const y=["Playground"];export{r as Playground,y as __namedExportsOrder,g as default};
