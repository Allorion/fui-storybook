import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as n}from"./index-DY-snNUy.js";import{F as o}from"./FDialog-DLm4K6IN.js";import{F as l,a,b as m}from"./FDialogFooter-Bfbpy8Fv.js";import{F as t}from"./FButton-CwfpvuGP.js";import"./index-yBjzXJbu.js";import"./index-xMzmejw-.js";import"./index-fNjTmf9T.js";import"./FCloseIcon-ZR3e0z_J.js";const G={title:"Material/FDialog",component:o,argTypes:{openAndClose:{control:"boolean",description:"Открывает/закрывает диалог"},width:{control:"select",options:["xs","md","lg","xxl","adaptive"],description:"Ширина диалога"},hide:{control:"boolean",description:"Скрывает фон и контент за диалогом"}}},i={render:()=>{const[r,s]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>s(!0),children:"Открыть диалог"}),e.jsxs(o,{openAndClose:r,closeButtonBackPage:s,width:"md",children:[e.jsx(l,{title:"Простой диалог",handleClose:()=>s(!1)}),e.jsx(a,{children:e.jsxs("div",{children:[e.jsx("p",{children:"Простой диалог"}),e.jsx("p",{children:"Содержимое диалогового окна"})]})}),e.jsxs(m,{children:[e.jsx(t,{color:"success",onClick:()=>s(!1),children:"Подтвердить"}),e.jsx(t,{color:"danger",onClick:()=>s(!1),children:"Отмена"})]})]})]})}},d={render:()=>{const[r,s]=n.useState(!1),[f,p]=n.useState(!1),[X,c]=n.useState(!1),[C,g]=n.useState(!1),[j,u]=n.useState(!1);return e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(t,{onClick:()=>s(!0),children:"XS"}),e.jsx(t,{onClick:()=>p(!0),children:"MD"}),e.jsx(t,{onClick:()=>c(!0),children:"LG"}),e.jsx(t,{onClick:()=>g(!0),children:"XXL"}),e.jsx(t,{onClick:()=>u(!0),children:"Adaptive"}),e.jsxs(o,{openAndClose:r,closeButtonBackPage:s,width:"xs",children:[e.jsx(l,{title:"XS Dialog",handleClose:()=>s(!1)}),e.jsx(a,{children:"Диалог размера XS (50vw)"})]}),e.jsxs(o,{openAndClose:f,closeButtonBackPage:p,width:"md",children:[e.jsx(l,{title:"MD Dialog",handleClose:()=>p(!1)}),e.jsx(a,{children:"Диалог размера MD (65vw)"})]}),e.jsxs(o,{openAndClose:X,closeButtonBackPage:c,width:"lg",children:[e.jsx(l,{title:"LG Dialog",handleClose:()=>c(!1)}),e.jsx(a,{children:"Диалог размера LG (80vw)"})]}),e.jsxs(o,{openAndClose:C,closeButtonBackPage:g,width:"xxl",children:[e.jsx(l,{title:"XXL Dialog",handleClose:()=>g(!1)}),e.jsx(a,{children:"Диалог размера XXL (95vw)"})]}),e.jsxs(o,{openAndClose:j,closeButtonBackPage:u,width:"adaptive",children:[e.jsx(l,{title:"Adaptive Dialog",handleClose:()=>u(!1)}),e.jsx(a,{children:"Диалог с адаптивной шириной (fit-content)"})]})]})}};var D,F,B;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <FButton onClick={() => setIsOpen(true)}>Открыть диалог</FButton>
        <FDialog openAndClose={isOpen} closeButtonBackPage={setIsOpen} width="md">
          <FDialogHeader title="Простой диалог" handleClose={() => setIsOpen(false)} />
          <FDialogBody>
            <div>
              <p>Простой диалог</p>
              <p>Содержимое диалогового окна</p>
            </div>
          </FDialogBody>
          <FDialogFooter>
            <FButton color={'success'} onClick={() => setIsOpen(false)}>Подтвердить</FButton>
            <FButton color={'danger'} onClick={() => setIsOpen(false)}>Отмена</FButton>
          </FDialogFooter>
        </FDialog>
      </>;
  }
}`,...(B=(F=i.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var h,O,x;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const [isOpenXS, setIsOpenXS] = useState(false);
    const [isOpenMD, setIsOpenMD] = useState(false);
    const [isOpenLG, setIsOpenLG] = useState(false);
    const [isOpenXXL, setIsOpenXXL] = useState(false);
    const [isOpenAdaptive, setIsOpenAdaptive] = useState(false);
    return <div style={{
      display: 'flex',
      gap: '10px'
    }}>
        <FButton onClick={() => setIsOpenXS(true)}>XS</FButton>
        <FButton onClick={() => setIsOpenMD(true)}>MD</FButton>
        <FButton onClick={() => setIsOpenLG(true)}>LG</FButton>
        <FButton onClick={() => setIsOpenXXL(true)}>XXL</FButton>
        <FButton onClick={() => setIsOpenAdaptive(true)}>Adaptive</FButton>

        <FDialog openAndClose={isOpenXS} closeButtonBackPage={setIsOpenXS} width="xs">
          <FDialogHeader title="XS Dialog" handleClose={() => setIsOpenXS(false)} />
          <FDialogBody>Диалог размера XS (50vw)</FDialogBody>
        </FDialog>

        <FDialog openAndClose={isOpenMD} closeButtonBackPage={setIsOpenMD} width="md">
          <FDialogHeader title="MD Dialog" handleClose={() => setIsOpenMD(false)} />
          <FDialogBody>Диалог размера MD (65vw)</FDialogBody>
        </FDialog>

        <FDialog openAndClose={isOpenLG} closeButtonBackPage={setIsOpenLG} width="lg">
          <FDialogHeader title="LG Dialog" handleClose={() => setIsOpenLG(false)} />
          <FDialogBody>Диалог размера LG (80vw)</FDialogBody>
        </FDialog>

        <FDialog openAndClose={isOpenXXL} closeButtonBackPage={setIsOpenXXL} width="xxl">
          <FDialogHeader title="XXL Dialog" handleClose={() => setIsOpenXXL(false)} />
          <FDialogBody>Диалог размера XXL (95vw)</FDialogBody>
        </FDialog>

        <FDialog openAndClose={isOpenAdaptive} closeButtonBackPage={setIsOpenAdaptive} width="adaptive">
          <FDialogHeader title="Adaptive Dialog" handleClose={() => setIsOpenAdaptive(false)} />
          <FDialogBody>Диалог с адаптивной шириной (fit-content)</FDialogBody>
        </FDialog>
      </div>;
  }
}`,...(x=(O=d.parameters)==null?void 0:O.docs)==null?void 0:x.source}}};const P=["Basic","DifferentSizes"];export{i as Basic,d as DifferentSizes,P as __namedExportsOrder,G as default};
