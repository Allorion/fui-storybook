import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./index-B3j06Xw8.js";import{F as o}from"./FDialog-B0I80EdC.js";import{F as l,a,b as I}from"./FDialogFooter-BenDTTL6.js";import{F as t}from"./FButton-wCVY7eIs.js";import"./index-D_ywfbVi.js";import"./index-DW0t0JKo.js";import"./FCloseIcon-DdRZhJBn.js";const M={title:"Material/FDialog",component:o,argTypes:{openAndClose:{control:"boolean",description:"Открывает/закрывает диалог"},width:{control:"select",options:["xs","md","lg","xxl","adaptive"],description:"Ширина диалога"},hide:{control:"boolean",description:"Скрывает фон и контент за диалогом"}}},i={render:()=>{const[d,s]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>s(!0),children:"Открыть диалог"}),e.jsxs(o,{openAndClose:d,closeButtonBackPage:s,width:"md",children:[e.jsx(l,{title:"Простой диалог",handleClose:()=>s(!1)}),e.jsx(a,{children:e.jsxs("div",{children:[e.jsx("p",{children:"Простой диалог"}),e.jsx("p",{children:"Содержимое диалогового окна"})]})}),e.jsxs(I,{children:[e.jsx(t,{color:"success",onClick:()=>s(!1),children:"Подтвердить"}),e.jsx(t,{color:"danger",onClick:()=>s(!1),children:"Отмена"})]})]})]})}},r={render:()=>{const[d,s]=n.useState(!1),[f,p]=n.useState(!1),[X,c]=n.useState(!1),[C,g]=n.useState(!1),[j,u]=n.useState(!1);return e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(t,{onClick:()=>s(!0),children:"XS"}),e.jsx(t,{onClick:()=>p(!0),children:"MD"}),e.jsx(t,{onClick:()=>c(!0),children:"LG"}),e.jsx(t,{onClick:()=>g(!0),children:"XXL"}),e.jsx(t,{onClick:()=>u(!0),children:"Adaptive"}),e.jsxs(o,{openAndClose:d,closeButtonBackPage:s,width:"xs",children:[e.jsx(l,{title:"XS Dialog",handleClose:()=>s(!1)}),e.jsx(a,{children:"Диалог размера XS (50vw)"})]}),e.jsxs(o,{openAndClose:f,closeButtonBackPage:p,width:"md",children:[e.jsx(l,{title:"MD Dialog",handleClose:()=>p(!1)}),e.jsx(a,{children:"Диалог размера MD (65vw)"})]}),e.jsxs(o,{openAndClose:X,closeButtonBackPage:c,width:"lg",children:[e.jsx(l,{title:"LG Dialog",handleClose:()=>c(!1)}),e.jsx(a,{children:"Диалог размера LG (80vw)"})]}),e.jsxs(o,{openAndClose:C,closeButtonBackPage:g,width:"xxl",children:[e.jsx(l,{title:"XXL Dialog",handleClose:()=>g(!1)}),e.jsx(a,{children:"Диалог размера XXL (95vw)"})]}),e.jsxs(o,{openAndClose:j,closeButtonBackPage:u,width:"adaptive",children:[e.jsx(l,{title:"Adaptive Dialog",handleClose:()=>u(!1)}),e.jsx(a,{children:"Диалог с адаптивной шириной (fit-content)"})]})]})}};var D,F,B;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>\r
        <FButton onClick={() => setIsOpen(true)}>Открыть диалог</FButton>\r
        <FDialog openAndClose={isOpen} closeButtonBackPage={setIsOpen} width="md">\r
          <FDialogHeader title="Простой диалог" handleClose={() => setIsOpen(false)} />\r
          <FDialogBody>\r
            <div>\r
              <p>Простой диалог</p>\r
              <p>Содержимое диалогового окна</p>\r
            </div>\r
          </FDialogBody>\r
          <FDialogFooter>\r
            <FButton color={'success'} onClick={() => setIsOpen(false)}>Подтвердить</FButton>\r
            <FButton color={'danger'} onClick={() => setIsOpen(false)}>Отмена</FButton>\r
          </FDialogFooter>\r
        </FDialog>\r
      </>;
  }
}`,...(B=(F=i.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var h,O,x;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const [isOpenXS, setIsOpenXS] = useState(false);
    const [isOpenMD, setIsOpenMD] = useState(false);
    const [isOpenLG, setIsOpenLG] = useState(false);
    const [isOpenXXL, setIsOpenXXL] = useState(false);
    const [isOpenAdaptive, setIsOpenAdaptive] = useState(false);
    return <div style={{
      display: 'flex',
      gap: '10px'
    }}>\r
        <FButton onClick={() => setIsOpenXS(true)}>XS</FButton>\r
        <FButton onClick={() => setIsOpenMD(true)}>MD</FButton>\r
        <FButton onClick={() => setIsOpenLG(true)}>LG</FButton>\r
        <FButton onClick={() => setIsOpenXXL(true)}>XXL</FButton>\r
        <FButton onClick={() => setIsOpenAdaptive(true)}>Adaptive</FButton>\r
\r
        <FDialog openAndClose={isOpenXS} closeButtonBackPage={setIsOpenXS} width="xs">\r
          <FDialogHeader title="XS Dialog" handleClose={() => setIsOpenXS(false)} />\r
          <FDialogBody>Диалог размера XS (50vw)</FDialogBody>\r
        </FDialog>\r
\r
        <FDialog openAndClose={isOpenMD} closeButtonBackPage={setIsOpenMD} width="md">\r
          <FDialogHeader title="MD Dialog" handleClose={() => setIsOpenMD(false)} />\r
          <FDialogBody>Диалог размера MD (65vw)</FDialogBody>\r
        </FDialog>\r
\r
        <FDialog openAndClose={isOpenLG} closeButtonBackPage={setIsOpenLG} width="lg">\r
          <FDialogHeader title="LG Dialog" handleClose={() => setIsOpenLG(false)} />\r
          <FDialogBody>Диалог размера LG (80vw)</FDialogBody>\r
        </FDialog>\r
\r
        <FDialog openAndClose={isOpenXXL} closeButtonBackPage={setIsOpenXXL} width="xxl">\r
          <FDialogHeader title="XXL Dialog" handleClose={() => setIsOpenXXL(false)} />\r
          <FDialogBody>Диалог размера XXL (95vw)</FDialogBody>\r
        </FDialog>\r
\r
        <FDialog openAndClose={isOpenAdaptive} closeButtonBackPage={setIsOpenAdaptive} width="adaptive">\r
          <FDialogHeader title="Adaptive Dialog" handleClose={() => setIsOpenAdaptive(false)} />\r
          <FDialogBody>Диалог с адаптивной шириной (fit-content)</FDialogBody>\r
        </FDialog>\r
      </div>;
  }
}`,...(x=(O=r.parameters)==null?void 0:O.docs)==null?void 0:x.source}}};const G=["Basic","DifferentSizes"];export{i as Basic,r as DifferentSizes,G as __namedExportsOrder,M as default};
