import{j as S,F as y,a as p}from"./jsx-runtime-03b4ddbf.js";import{r as x}from"./index-76fb7be0.js";import{D as A}from"./FSearchBox-152125fe.js";/* empty css                  */import{F as h}from"./FButton-23548114.js";import"./FStack-e49fc9aa.js";import"./FGrid-bad13094.js";import"./FContainer-040ae8b7.js";import"./FPaper-d5aa57d5.js";import"./FProgress-06696b81.js";import"./FCheckbox-a1e223c2.js";import"./FRadioButton-a987e6ee.js";import"./FPagination-90c139ef.js";import"./FInputFileForm-02e963c4.js";import"./FNative-c4016f0a.js";import"./FTab-d7a1be1e.js";import"./_commonjsHelpers-de833af9.js";import"./FCloseIcon-47d91238.js";const J={title:"Components/FEEDBACK/FAlert",tags:["autodocs"],component:A,argTypes:{title:{defaultValue:"Информация"},body:{defaultValue:"Отчет правки внесены"},open:{defaultValue:!0}}},r=s=>{const[B,a]=x.useState(!1);return S(y,{children:[p(h,{onClick:()=>{a(!0)},children:"Открыть Alert"}),p(A,{...s,open:B,onClose:a})]})},t=r.bind({});t.args={title:"Информация",body:"Mac лучший ноут для программиста!",st:{marginTop:"20px"},className:"f-alert-class",variant:"info"};const o=r.bind({});o.args={buttonClose:!0,onClose:s=>{}};const e=r.bind({});e.argTypes={variant:{options:["info","error"],control:{type:"select"}}};e.args={variant:"info"};const n=r.bind({});n.argTypes={vertical:{options:["top","bottom"],control:{type:"select"}},horizontal:{options:["left","center","right"],control:{type:"select"}}};e.args={vertical:"bottom",horizontal:"center"};var l,i,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState<boolean>(false);
  return <>
        <FButton onClick={() => {
      setOpen(true);
    }}>
          Открыть Alert
        </FButton>
        <FAlert {...args} open={open} onClose={setOpen} />
      </>;
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var u,m,d;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState<boolean>(false);
  return <>
        <FButton onClick={() => {
      setOpen(true);
    }}>
          Открыть Alert
        </FButton>
        <FAlert {...args} open={open} onClose={setOpen} />
      </>;
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var g,f,F;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState<boolean>(false);
  return <>
        <FButton onClick={() => {
      setOpen(true);
    }}>
          Открыть Alert
        </FButton>
        <FAlert {...args} open={open} onClose={setOpen} />
      </>;
}`,...(F=(f=e.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var C,O,b;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState<boolean>(false);
  return <>
        <FButton onClick={() => {
      setOpen(true);
    }}>
          Открыть Alert
        </FButton>
        <FAlert {...args} open={open} onClose={setOpen} />
      </>;
}`,...(b=(O=n.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};const L=["Default","ButtonClose","Variant","Position"];export{o as ButtonClose,t as Default,n as Position,e as Variant,L as __namedExportsOrder,J as default};
//# sourceMappingURL=FAlert.stories-add267a2.js.map
