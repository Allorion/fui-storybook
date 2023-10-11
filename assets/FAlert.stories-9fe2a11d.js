import{j as S,F as y,a as p}from"./jsx-runtime-03b4ddbf.js";import{r as x}from"./index-76fb7be0.js";/* empty css                  */import{F as A}from"./FAlert-74c62ed6.js";import{F as h}from"./FButton-e5c79c89.js";import"./_commonjsHelpers-de833af9.js";import"./FCloseIcon-149fc16a.js";/* empty css               */import"./FArrowIcon-6e660791.js";import"./FPlusIcon-518141a8.js";import"./FTrashIcon-280d00b6.js";import"./FCheckIcon-59b53204.js";import"./FListIcon-9247e080.js";import"./FPenIcon-dca866e8.js";import"./FDownloadIcon-e64661fe.js";import"./FCopyAdd-8b38f200.js";import"./FUnlinkIcon-2b7d852c.js";import"./FFilterIcon-ac066807.js";import"./FLoadIcon-b5845266.js";const L={title:"Components/FEEDBACK/FAlert",tags:["autodocs"],component:A,argTypes:{title:{defaultValue:"Информация"},body:{defaultValue:"Отчет правки внесены"},open:{defaultValue:!0}}},r=s=>{const[B,a]=x.useState(!1);return S(y,{children:[p(h,{onClick:()=>{a(!0)},children:"Открыть Alert"}),p(A,{...s,open:B,onClose:a})]})},t=r.bind({});t.args={title:"Информация",body:"Mac лучший ноут для программиста!",st:{marginTop:"20px"},className:"f-alert-class",variant:"info"};const o=r.bind({});o.args={buttonClose:!0,onClose:s=>{}};const e=r.bind({});e.argTypes={variant:{options:["info","error"],control:{type:"select"}}};e.args={variant:"info"};const n=r.bind({});n.argTypes={vertical:{options:["top","bottom"],control:{type:"select"}},horizontal:{options:["left","center","right"],control:{type:"select"}}};e.args={vertical:"bottom",horizontal:"center"};var l,i,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
}`,...(b=(O=n.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};const Q=["Default","ButtonClose","Variant","Position"];export{o as ButtonClose,t as Default,n as Position,e as Variant,Q as __namedExportsOrder,L as default};
//# sourceMappingURL=FAlert.stories-9fe2a11d.js.map
