import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as g}from"./index-DY-snNUy.js";import{F as a}from"./FPreloader-DjsC-NoF.js";import{F as m}from"./FLoadIcon-BHsw31Xd.js";import{F as f}from"./FButton-C6QFu6NS.js";import"./index-yBjzXJbu.js";const x={title:"Material/FPreloader",component:a,argTypes:{st:{control:{type:"object"}},backgroundColor:{control:{type:"color"},defaultValue:"#e0e0e0"},open:{control:{type:"boolean"},defaultValue:!1},children:{control:{type:"text"}}}},o=r=>{const[u,n]=g.useState(r.open||!1),R=()=>{n(!0),setTimeout(()=>n(!1),2e3)};return e.jsxs(e.Fragment,{children:[e.jsx(f,{onClick:R,children:"Показать прелоадер на 2 секунды"}),e.jsx(a,{...r,open:u,children:r.children||e.jsx(m,{size:48})})]})};o.args={backgroundColor:"#e0e0e0",open:!1,children:void 0};const t=r=>e.jsx(a,{...r,open:!0,children:r.children||e.jsx(m,{size:48})});t.args={backgroundColor:"#e0e0e0",children:void 0};o.__docgenInfo={description:"",methods:[],displayName:"Playground",props:{st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},backgroundColor:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"union",raw:"React.ReactElement | React.ReactNode",elements:[{name:"ReactReactElement",raw:"React.ReactElement"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},open:{required:!1,tsType:{name:"boolean"},description:""}}};t.__docgenInfo={description:"",methods:[],displayName:"AlwaysOpen",props:{st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},backgroundColor:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"union",raw:"React.ReactElement | React.ReactNode",elements:[{name:"ReactReactElement",raw:"React.ReactElement"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},open:{required:!1,tsType:{name:"boolean"},description:""}}};var s,c,l;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`(props: PlaygroundProps) => {
  const [isOpen, setIsOpen] = useState(props.open || false);

  // Simple toggle to show preloader for a few seconds
  const togglePreloader = () => {
    setIsOpen(true);
    setTimeout(() => setIsOpen(false), 2000);
  };
  return <>\r
            <FButton onClick={togglePreloader}>Показать прелоадер на 2 секунды</FButton>\r
            <FPreloader {...props} open={isOpen}>\r
                 {props.children || <FLoadIcon size={48} />}\r
            </FPreloader>\r
        </>;
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,d,i;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`(props: PlaygroundProps) => <FPreloader {...props} open={true}>\r
         {props.children || <FLoadIcon size={48} />}\r
     </FPreloader>`,...(i=(d=t.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const C=["Playground","AlwaysOpen"];export{t as AlwaysOpen,o as Playground,C as __namedExportsOrder,x as default};
