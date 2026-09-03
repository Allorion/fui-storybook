import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./index-B3j06Xw8.js";import{F as r}from"./FDialog-Cl6TNCBH.js";import{F as l,a as n,b as i}from"./FDialogFooter-DEKgFpT2.js";import{F as t}from"./FButton-Bm7SLZDh.js";import"./index-D_ywfbVi.js";import"./index-DW0t0JKo.js";import"./FCloseIcon-DdRZhJBn.js";const E={title:"Material/FDialog",component:r,argTypes:{openAndClose:{control:"boolean",description:"Открывает/закрывает диалог"},width:{control:"select",options:["xs","md","lg","xxl","adaptive"],description:"Ширина диалога"},hide:{control:"boolean",description:"Скрывает фон и контент за диалогом"}}},u={render:()=>{const[d,o]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>o(!0),children:"Открыть диалог"}),e.jsxs(r,{openAndClose:d,closeButtonBackPage:o,width:"md",children:[e.jsx(l,{title:"Простой диалог",handleClose:()=>o(!1)}),e.jsx(n,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx("p",{style:{margin:0,fontWeight:500,color:"#111827"},children:"Обновление данных профиля"}),e.jsx("p",{style:{margin:0,color:"#6B7280"},children:"Диалоговое окно выполнено в фирменном стиле с мягким блюром оверлея, аккуратными тенями и плавными анимациями появления и закрытия."})]})}),e.jsxs(i,{children:[e.jsx(t,{color:"secondary",variant:"outline",onClick:()=>o(!1),children:"Отмена"}),e.jsx(t,{color:"primary",onClick:()=>o(!1),children:"Сохранить"})]})]})]})}},g={render:()=>{const[d,o]=s.useState(!1),[h,a]=s.useState("Корпоративный портал");return e.jsxs(e.Fragment,{children:[e.jsx(t,{color:"primary",onClick:()=>o(!0),children:"Редактировать проект"}),e.jsxs(r,{openAndClose:d,closeButtonBackPage:o,width:"md",children:[e.jsx(l,{title:"Настройки проекта",handleClose:()=>o(!1)}),e.jsx(n,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"13px",fontWeight:600,color:"#374151",marginBottom:"6px"},children:"Название проекта"}),e.jsx("input",{type:"text",value:h,onChange:f=>a(f.target.value),style:{width:"100%",padding:"9px 13px",borderRadius:"9px",border:"1.5px solid #E5E7EB",fontSize:"14px",outline:"none",boxSizing:"border-box"}})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"13px",fontWeight:600,color:"#374151",marginBottom:"6px"},children:"Описание"}),e.jsx("textarea",{rows:3,defaultValue:"Система управления документами и задачами с единой дизайн-системой fui-kit.",style:{width:"100%",padding:"9px 13px",borderRadius:"9px",border:"1.5px solid #E5E7EB",fontSize:"14px",outline:"none",boxSizing:"border-box",resize:"vertical"}})]}),e.jsxs("div",{style:{padding:"12px 16px",borderRadius:"10px",backgroundColor:"rgba(29, 111, 184, 0.08)",border:"1px solid rgba(29, 111, 184, 0.2)",display:"flex",alignItems:"center",gap:"10px"},children:[e.jsx("span",{style:{fontSize:"18px"},children:"💡"}),e.jsx("span",{style:{fontSize:"13px",color:"#1D6FB8",lineHeight:1.4},children:"Все изменения сохраняются автоматически в журнал ревизий."})]})]})}),e.jsxs(i,{children:[e.jsx(t,{color:"secondary",variant:"outline",onClick:()=>o(!1),children:"Закрыть"}),e.jsx(t,{color:"primary",onClick:()=>o(!1),children:"Применить"})]})]})]})}},F={render:()=>{const[d,o]=s.useState(!1),[h,a]=s.useState(!1),[f,p]=s.useState(!1),[S,c]=s.useState(!1),[I,x]=s.useState(!1);return e.jsxs("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap"},children:[e.jsx(t,{onClick:()=>o(!0),children:"XS (50vw)"}),e.jsx(t,{onClick:()=>a(!0),children:"MD (65vw)"}),e.jsx(t,{onClick:()=>p(!0),children:"LG (80vw)"}),e.jsx(t,{onClick:()=>c(!0),children:"XXL (95vw)"}),e.jsx(t,{onClick:()=>x(!0),children:"Adaptive"}),e.jsxs(r,{openAndClose:d,closeButtonBackPage:o,width:"xs",children:[e.jsx(l,{title:"Диалог XS",handleClose:()=>o(!1)}),e.jsx(n,{children:"Компактное диалоговое окно размера XS (50vw)."}),e.jsx(i,{children:e.jsx(t,{color:"primary",onClick:()=>o(!1),children:"Понятно"})})]}),e.jsxs(r,{openAndClose:h,closeButtonBackPage:a,width:"md",children:[e.jsx(l,{title:"Диалог MD",handleClose:()=>a(!1)}),e.jsx(n,{children:"Стандартный размер MD (65vw) для большинства форм и диалогов."}),e.jsx(i,{children:e.jsx(t,{color:"primary",onClick:()=>a(!1),children:"Понятно"})})]}),e.jsxs(r,{openAndClose:f,closeButtonBackPage:p,width:"lg",children:[e.jsx(l,{title:"Диалог LG",handleClose:()=>p(!1)}),e.jsx(n,{children:"Просторный диалог LG (80vw) для таблиц и объемного контента."}),e.jsx(i,{children:e.jsx(t,{color:"primary",onClick:()=>p(!1),children:"Понятно"})})]}),e.jsxs(r,{openAndClose:S,closeButtonBackPage:c,width:"xxl",children:[e.jsx(l,{title:"Диалог XXL",handleClose:()=>c(!1)}),e.jsx(n,{children:"Широкоформатный диалог XXL (95vw) для детальных панелей и дашбордов."}),e.jsx(i,{children:e.jsx(t,{color:"primary",onClick:()=>c(!1),children:"Понятно"})})]}),e.jsxs(r,{openAndClose:I,closeButtonBackPage:x,width:"adaptive",children:[e.jsx(l,{title:"Адаптивный диалог",handleClose:()=>x(!1)}),e.jsx(n,{children:"Диалог с адаптивной шириной (fit-content) под размер внутреннего содержимого."}),e.jsx(i,{children:e.jsx(t,{color:"primary",onClick:()=>x(!1),children:"Понятно"})})]})]})}};var B,m,D;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>\r
        <FButton onClick={() => setIsOpen(true)}>Открыть диалог</FButton>\r
        <FDialog openAndClose={isOpen} closeButtonBackPage={setIsOpen} width="md">\r
          <FDialogHeader title="Простой диалог" handleClose={() => setIsOpen(false)} />\r
          <FDialogBody>\r
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>\r
              <p style={{
              margin: 0,
              fontWeight: 500,
              color: '#111827'
            }}>Обновление данных профиля</p>\r
              <p style={{
              margin: 0,
              color: '#6B7280'
            }}>\r
                Диалоговое окно выполнено в фирменном стиле с мягким блюром оверлея, аккуратными тенями и плавными анимациями появления и закрытия.\r
              </p>\r
            </div>\r
          </FDialogBody>\r
          <FDialogFooter>\r
            <FButton color={'secondary'} variant={'outline'} onClick={() => setIsOpen(false)}>Отмена</FButton>\r
            <FButton color={'primary'} onClick={() => setIsOpen(false)}>Сохранить</FButton>\r
          </FDialogFooter>\r
        </FDialog>\r
      </>;
  }
}`,...(D=(m=u.parameters)==null?void 0:m.docs)==null?void 0:D.source}}};var y,j,C;g.parameters={...g.parameters,docs:{...(y=g.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [projectName, setProjectName] = useState('Корпоративный портал');
    return <>\r
        <FButton color="primary" onClick={() => setIsOpen(true)}>Редактировать проект</FButton>\r
        <FDialog openAndClose={isOpen} closeButtonBackPage={setIsOpen} width="md">\r
          <FDialogHeader title="Настройки проекта" handleClose={() => setIsOpen(false)} />\r
          <FDialogBody>\r
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>\r
              <div>\r
                <label style={{
                display: 'block',
                fontSize: '13px',
                fontWeight: 600,
                color: '#374151',
                marginBottom: '6px'
              }}>\r
                  Название проекта\r
                </label>\r
                <input type="text" value={projectName} onChange={e => setProjectName(e.target.value)} style={{
                width: '100%',
                padding: '9px 13px',
                borderRadius: '9px',
                border: '1.5px solid #E5E7EB',
                fontSize: '14px',
                outline: 'none',
                boxSizing: 'border-box'
              }} />\r
              </div>\r
\r
              <div>\r
                <label style={{
                display: 'block',
                fontSize: '13px',
                fontWeight: 600,
                color: '#374151',
                marginBottom: '6px'
              }}>\r
                  Описание\r
                </label>\r
                <textarea rows={3} defaultValue="Система управления документами и задачами с единой дизайн-системой fui-kit." style={{
                width: '100%',
                padding: '9px 13px',
                borderRadius: '9px',
                border: '1.5px solid #E5E7EB',
                fontSize: '14px',
                outline: 'none',
                boxSizing: 'border-box',
                resize: 'vertical'
              }} />\r
              </div>\r
\r
              <div style={{
              padding: '12px 16px',
              borderRadius: '10px',
              backgroundColor: 'rgba(29, 111, 184, 0.08)',
              border: '1px solid rgba(29, 111, 184, 0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>\r
                <span style={{
                fontSize: '18px'
              }}>💡</span>\r
                <span style={{
                fontSize: '13px',
                color: '#1D6FB8',
                lineHeight: 1.4
              }}>\r
                  Все изменения сохраняются автоматически в журнал ревизий.\r
                </span>\r
              </div>\r
            </div>\r
          </FDialogBody>\r
          <FDialogFooter>\r
            <FButton color={'secondary'} variant={'outline'} onClick={() => setIsOpen(false)}>Закрыть</FButton>\r
            <FButton color={'primary'} onClick={() => setIsOpen(false)}>Применить</FButton>\r
          </FDialogFooter>\r
        </FDialog>\r
      </>;
  }
}`,...(C=(j=g.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var O,v,k;F.parameters={...F.parameters,docs:{...(O=F.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [isOpenXS, setIsOpenXS] = useState(false);
    const [isOpenMD, setIsOpenMD] = useState(false);
    const [isOpenLG, setIsOpenLG] = useState(false);
    const [isOpenXXL, setIsOpenXXL] = useState(false);
    const [isOpenAdaptive, setIsOpenAdaptive] = useState(false);
    return <div style={{
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap'
    }}>\r
        <FButton onClick={() => setIsOpenXS(true)}>XS (50vw)</FButton>\r
        <FButton onClick={() => setIsOpenMD(true)}>MD (65vw)</FButton>\r
        <FButton onClick={() => setIsOpenLG(true)}>LG (80vw)</FButton>\r
        <FButton onClick={() => setIsOpenXXL(true)}>XXL (95vw)</FButton>\r
        <FButton onClick={() => setIsOpenAdaptive(true)}>Adaptive</FButton>\r
\r
        <FDialog openAndClose={isOpenXS} closeButtonBackPage={setIsOpenXS} width="xs">\r
          <FDialogHeader title="Диалог XS" handleClose={() => setIsOpenXS(false)} />\r
          <FDialogBody>Компактное диалоговое окно размера XS (50vw).</FDialogBody>\r
          <FDialogFooter>\r
            <FButton color="primary" onClick={() => setIsOpenXS(false)}>Понятно</FButton>\r
          </FDialogFooter>\r
        </FDialog>\r
\r
        <FDialog openAndClose={isOpenMD} closeButtonBackPage={setIsOpenMD} width="md">\r
          <FDialogHeader title="Диалог MD" handleClose={() => setIsOpenMD(false)} />\r
          <FDialogBody>Стандартный размер MD (65vw) для большинства форм и диалогов.</FDialogBody>\r
          <FDialogFooter>\r
            <FButton color="primary" onClick={() => setIsOpenMD(false)}>Понятно</FButton>\r
          </FDialogFooter>\r
        </FDialog>\r
\r
        <FDialog openAndClose={isOpenLG} closeButtonBackPage={setIsOpenLG} width="lg">\r
          <FDialogHeader title="Диалог LG" handleClose={() => setIsOpenLG(false)} />\r
          <FDialogBody>Просторный диалог LG (80vw) для таблиц и объемного контента.</FDialogBody>\r
          <FDialogFooter>\r
            <FButton color="primary" onClick={() => setIsOpenLG(false)}>Понятно</FButton>\r
          </FDialogFooter>\r
        </FDialog>\r
\r
        <FDialog openAndClose={isOpenXXL} closeButtonBackPage={setIsOpenXXL} width="xxl">\r
          <FDialogHeader title="Диалог XXL" handleClose={() => setIsOpenXXL(false)} />\r
          <FDialogBody>Широкоформатный диалог XXL (95vw) для детальных панелей и дашбордов.</FDialogBody>\r
          <FDialogFooter>\r
            <FButton color="primary" onClick={() => setIsOpenXXL(false)}>Понятно</FButton>\r
          </FDialogFooter>\r
        </FDialog>\r
\r
        <FDialog openAndClose={isOpenAdaptive} closeButtonBackPage={setIsOpenAdaptive} width="adaptive">\r
          <FDialogHeader title="Адаптивный диалог" handleClose={() => setIsOpenAdaptive(false)} />\r
          <FDialogBody>Диалог с адаптивной шириной (fit-content) под размер внутреннего содержимого.</FDialogBody>\r
          <FDialogFooter>\r
            <FButton color="primary" onClick={() => setIsOpenAdaptive(false)}>Понятно</FButton>\r
          </FDialogFooter>\r
        </FDialog>\r
      </div>;
  }
}`,...(k=(v=F.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};const G=["Basic","RichContent","DifferentSizes"];export{u as Basic,F as DifferentSizes,g as RichContent,G as __namedExportsOrder,E as default};
