import{j as S,F as y,a as l}from"./jsx-runtime-03b4ddbf.js";import{r as x}from"./index-76fb7be0.js";/* empty css                  */import{G as A,E as h}from"./FSearchBox-dba6eceb.js";import"./_commonjsHelpers-de833af9.js";import"./FFilterIcon-69b0ebaf.js";const j={title:"Components/FEEDBACK/FAlert",tags:["autodocs"],component:A,argTypes:{title:{defaultValue:"Информация"},body:{defaultValue:"Отчет правки внесены"},open:{defaultValue:!0}}},r=s=>{const[B,a]=x.useState(!1);return S(y,{children:[l(h,{onClick:()=>{a(!0)},children:"Открыть Alert"}),l(A,{...s,open:B,onClose:a})]})},t=r.bind({});t.args={title:"Информация",body:"Mac лучший ноут для программиста!",st:{marginTop:"20px"},className:"f-alert-class",variant:"info"};const n=r.bind({});n.args={buttonClose:!0,onClose:s=>{}};const e=r.bind({});e.argTypes={variant:{options:["info","error"],control:{type:"select"}}};e.args={variant:"info"};const o=r.bind({});o.argTypes={vertical:{options:["top","bottom"],control:{type:"select"}},horizontal:{options:["left","center","right"],control:{type:"select"}}};e.args={vertical:"bottom",horizontal:"center"};var p,c,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState<boolean>(false);
  return <>
        <FButton onClick={() => {
      setOpen(true);
    }}>
          Открыть Alert
        </FButton>
        <FAlert {...args} open={open} onClose={setOpen} />
      </>;
}`,...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var i,m,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState<boolean>(false);
  return <>
        <FButton onClick={() => {
      setOpen(true);
    }}>
          Открыть Alert
        </FButton>
        <FAlert {...args} open={open} onClose={setOpen} />
      </>;
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var g,f,F;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState<boolean>(false);
  return <>
        <FButton onClick={() => {
      setOpen(true);
    }}>
          Открыть Alert
        </FButton>
        <FAlert {...args} open={open} onClose={setOpen} />
      </>;
}`,...(F=(f=e.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var C,O,b;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState<boolean>(false);
  return <>
        <FButton onClick={() => {
      setOpen(true);
    }}>
          Открыть Alert
        </FButton>
        <FAlert {...args} open={open} onClose={setOpen} />
      </>;
}`,...(b=(O=o.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};const _=["Default","ButtonClose","Variant","Position"];export{n as ButtonClose,t as Default,o as Position,e as Variant,_ as __namedExportsOrder,j as default};
//# sourceMappingURL=FAlert.stories-ca15616d.js.map
