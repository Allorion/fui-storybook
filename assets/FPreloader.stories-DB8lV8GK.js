import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as y}from"./index-B3j06Xw8.js";import{F as o}from"./FPreloader-Cq7UpuSU.js";import{F as f}from"./FButton-wCVY7eIs.js";import{F as m}from"./FProgress-CuUSEf8T.js";const F={title:"Material/FPreloader",component:o,argTypes:{st:{control:{type:"object"}},backgroundColor:{control:{type:"color"},defaultValue:"#e0e0e0"},open:{control:{type:"boolean"},defaultValue:!1},children:{control:{type:"text"}}}},t=r=>{const[u,s]=y.useState(r.open||!1),g=()=>{s(!0),setTimeout(()=>s(!1),2e3)};return e.jsxs(e.Fragment,{children:[e.jsx(f,{onClick:g,children:"Показать прелоадер на 2 секунды"}),e.jsx(o,{...r,open:u,children:e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},children:r.children||e.jsx(m,{})})})]})};t.args={backgroundColor:"#e0e0e0",open:!1,children:void 0};const n=r=>e.jsx(o,{...r,open:!0,children:e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},children:r.children||e.jsx(m,{})})});n.args={backgroundColor:"#e0e0e0",children:void 0};t.__docgenInfo={description:"",methods:[],displayName:"Playground",props:{st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},backgroundColor:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"union",raw:"React.ReactElement | React.ReactNode",elements:[{name:"ReactReactElement",raw:"React.ReactElement"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},open:{required:!1,tsType:{name:"boolean"},description:""}}};n.__docgenInfo={description:"",methods:[],displayName:"AlwaysOpen",props:{st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},backgroundColor:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"union",raw:"React.ReactElement | React.ReactNode",elements:[{name:"ReactReactElement",raw:"React.ReactElement"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},open:{required:!1,tsType:{name:"boolean"},description:""}}};var a,l,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`(props: PlaygroundProps) => {
  const [isOpen, setIsOpen] = useState(props.open || false);

  // Simple toggle to show preloader for a few seconds
  const togglePreloader = () => {
    setIsOpen(true);
    setTimeout(() => setIsOpen(false), 2000);
  };
  return <>\r
            <FButton onClick={togglePreloader}>Показать прелоадер на 2 секунды</FButton>\r
            <FPreloader {...props} open={isOpen}>\r
                <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
      }}>\r
                    {props.children || <FProgress />}\r
                </div>\r
            </FPreloader>\r
        </>;
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var c,d,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`(props: PlaygroundProps) => <FPreloader {...props} open={true}>\r
        <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  }}>\r
            {props.children || <FProgress />}\r
        </div>\r
    </FPreloader>`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const j=["Playground","AlwaysOpen"];export{n as AlwaysOpen,t as Playground,j as __namedExportsOrder,F as default};
