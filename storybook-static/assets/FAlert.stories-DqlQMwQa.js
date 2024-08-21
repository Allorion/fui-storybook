import{j as n}from"./jsx-runtime-CkxqCPlQ.js";import{r as x}from"./index-DJO9vBfz.js";/* empty css                  */import{d as b}from"./FAlert-CefPhZQR.js";import{F as S}from"./FButton-CFnu8VPD.js";import"./FButtonFile-CHKnFrKb.js";import"./FTextField-DWvp23El.js";import"./FStack-DvJS5si1.js";import"./FGrid-CY0nb_Dr.js";import"./FContainer-Du0Di049.js";import"./FPaper-D6Oo0WgV.js";import"./FOpenImgFull-BCfLM3yy.js";import"./FProgress-C0i2V36s.js";import"./FCheckbox-D5toGIZf.js";import"./FRadioButton-DGCmVmG5.js";import"./FPagination-DPUVS4zR.js";import"./FTimelineCard-iMEw_La2.js";import"./FInputFileForm-Dh3UBGxg.js";import"./FFile-Cct2s-rO.js";import"./FSelectItem-C7ZDPLu7.js";import"./FFullDateField-Cszra0xD.js";import"./FSelectSearchDb-rImFaTjC.js";import"./FTextArea-DNeFs9G0.js";import"./FNative-D_ve21w6.js";import"./FTab-DIAeKHIc.js";import"./FDropdownItem-BzWoduQa.js";import"./FSearchBox-r2FvCsLg.js";import"./FCarouselItem-Diq-YX18.js";import"./FSkeleton-DuR3f4nd.js";import"./FCloseIcon-DM6S50X-.js";/* empty css               *//* empty css                   */import"./FLoadIcon-8HypuZKP.js";import"./FArrowIcon-lNeI-if7.js";import"./index-DLC2J04D.js";const st={title:"Components/FEEDBACK/FAlert",tags:["autodocs"],component:b,argTypes:{title:{defaultValue:"Информация"},body:{defaultValue:"Отчет правки внесены"},open:{defaultValue:!0}}},s=A=>{const[B,a]=x.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(S,{onClick:()=>{a(!0)},children:"Открыть Alert"}),n.jsx(b,{...A,open:B,onClose:a})]})},e=s.bind({});e.args={title:"Информация",body:"Mac лучший ноут для программиста!",st:{marginTop:"20px"},className:"f-alert-class",variant:"info"};const r=s.bind({});r.args={buttonClose:!0,onClose:()=>{}};const t=s.bind({});t.argTypes={variant:{options:["info","error"],control:{type:"select"}}};t.args={variant:"info"};const o=s.bind({});o.argTypes={vertical:{options:["top","bottom"],control:{type:"select"}},horizontal:{options:["left","center","right"],control:{type:"select"}}};t.args={vertical:"bottom",horizontal:"center"};var p,i,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState<boolean>(false);
  return <>\r
      <FButton onClick={() => {
      setOpen(true);
    }}>\r
        Открыть Alert\r
      </FButton>\r
      <FAlert {...args} open={open} onClose={setOpen} />\r
    </>;
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,c,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState<boolean>(false);
  return <>\r
      <FButton onClick={() => {
      setOpen(true);
    }}>\r
        Открыть Alert\r
      </FButton>\r
      <FAlert {...args} open={open} onClose={setOpen} />\r
    </>;
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var d,g,f;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState<boolean>(false);
  return <>\r
      <FButton onClick={() => {
      setOpen(true);
    }}>\r
        Открыть Alert\r
      </FButton>\r
      <FAlert {...args} open={open} onClose={setOpen} />\r
    </>;
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var F,C,O;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState<boolean>(false);
  return <>\r
      <FButton onClick={() => {
      setOpen(true);
    }}>\r
        Открыть Alert\r
      </FButton>\r
      <FAlert {...args} open={open} onClose={setOpen} />\r
    </>;
}`,...(O=(C=o.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};const at=["Default","ButtonClose","Variant","Position"];export{r as ButtonClose,e as Default,o as Position,t as Variant,at as __namedExportsOrder,st as default};
