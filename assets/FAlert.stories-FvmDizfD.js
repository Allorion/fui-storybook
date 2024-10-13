import{j as n}from"./jsx-runtime-DEdD30eg.js";import{r as x}from"./index-RYns6xqu.js";import{d as b}from"./FAlert-DS38ZrBT.js";import{F as S}from"./FButton-BMyxDZM2.js";import"./FButtonFile-A8ZoCR_A.js";import"./FTextField-c_bEAKdc.js";import"./FStack-DUahO965.js";import"./FGrid-Cf0t3TO0.js";import"./FContainer-CXdPSwYt.js";import"./FPaper-iPHHMhvA.js";import"./index-DAfSkmQi.js";import"./FOpenImgFull-BkT-3Av1.js";import"./FProgress-D9nQnxt0.js";import"./FCheckbox-CxRlIa0S.js";import"./FRadioButton-DU8OSBsH.js";import"./FPagination-HBLTjFx2.js";import"./FTimelineCard-PPBHv0K9.js";import"./FInputFileForm-D_0H5T3f.js";import"./FFile-Bcn0aMAy.js";import"./FSelectItem-BZmd-Lca.js";import"./FFullDateField-CWzNzzif.js";import"./FSelectSearchDb-Clr1GNKo.js";import"./FTextArea-DW0uzDSc.js";import"./FNative-F3FG8R_5.js";import"./FTab-BIi-RzkL.js";import"./FDropdownItem-Cj8HQD5i.js";import"./FSearchBox--q_Kwtu0.js";import"./FCarouselItem-C39m6uj5.js";import"./FSkeleton-D8rY3jBa.js";import"./FCloseIcon-Dh2aLPHG.js";/* empty css               *//* empty css                   */import"./FLoadIcon-DK9LdIdw.js";import"./FArrowIcon-q9p_-0kR.js";const nt={title:"Components/FEEDBACK/FAlert",tags:["autodocs"],component:b,argTypes:{title:{defaultValue:"Информация"},body:{defaultValue:"Отчет правки внесены"},open:{defaultValue:!0}}},s=A=>{const[B,a]=x.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(S,{onClick:()=>{a(!0)},children:"Открыть Alert"}),n.jsx(b,{...A,open:B,onClose:a})]})},e=s.bind({});e.args={title:"Информация",body:"Mac лучший ноут для программиста!",st:{marginTop:"20px"},className:"f-alert-class",variant:"info"};const o=s.bind({});o.args={buttonClose:!0,onClose:()=>{}};const t=s.bind({});t.argTypes={variant:{options:["info","error"],control:{type:"select"}}};t.args={variant:"info"};const r=s.bind({});r.argTypes={vertical:{options:["top","bottom"],control:{type:"select"}},horizontal:{options:["left","center","right"],control:{type:"select"}}};t.args={vertical:"bottom",horizontal:"center"};var p,i,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState<boolean>(false);
  return <>
      <FButton onClick={() => {
      setOpen(true);
    }}>
        Открыть Alert
      </FButton>
      <FAlert {...args} open={open} onClose={setOpen} />
    </>;
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,c,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState<boolean>(false);
  return <>
      <FButton onClick={() => {
      setOpen(true);
    }}>
        Открыть Alert
      </FButton>
      <FAlert {...args} open={open} onClose={setOpen} />
    </>;
}`,...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var d,g,f;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState<boolean>(false);
  return <>
      <FButton onClick={() => {
      setOpen(true);
    }}>
        Открыть Alert
      </FButton>
      <FAlert {...args} open={open} onClose={setOpen} />
    </>;
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var F,C,O;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState<boolean>(false);
  return <>
      <FButton onClick={() => {
      setOpen(true);
    }}>
        Открыть Alert
      </FButton>
      <FAlert {...args} open={open} onClose={setOpen} />
    </>;
}`,...(O=(C=r.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};const st=["Default","ButtonClose","Variant","Position"];export{o as ButtonClose,e as Default,r as Position,t as Variant,st as __namedExportsOrder,nt as default};
