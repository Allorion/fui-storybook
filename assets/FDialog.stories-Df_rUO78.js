import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./index-B3j06Xw8.js";import{R}from"./index-D_ywfbVi.js";import{s as m,F as c,a as x,b as u}from"./FDialogFooter-BsOGDZKD.js";import{F as o}from"./FButton-WshjMl_j.js";import"./index-DW0t0JKo.js";import"./FCloseIcon-DdRZhJBn.js";let D=0;const p=({openAndClose:r,closeButtonBackPage:t,hide:F=!1,children:i,id:h,className:g,st:C,width:f="lg"})=>{const[a,d]=s.useState(r),[l,y]=s.useState(!1);s.useEffect(()=>{r?(d(!0),y(!1)):a&&y(!0)},[r]);const M=n=>{l&&n.target===n.currentTarget&&(d(!1),y(!1))};s.useEffect(()=>{if(l){const n=setTimeout(()=>{d(!1),y(!1)},300);return()=>clearTimeout(n)}},[l]),s.useEffect(()=>{if(a&&!l)return D+=1,document.body.classList.add("open-dialog"),()=>{D=Math.max(0,D-1),D===0&&document.body.classList.remove("open-dialog")}},[a,l]);const O=s.useCallback(n=>{n.key==="Escape"&&r&&!l&&(t==null||t(!1))},[r,l,t]);if(s.useEffect(()=>{if(a&&!l)return window.addEventListener("keydown",O),()=>window.removeEventListener("keydown",O)},[a,l,O]),!a)return null;const z={xs:"50vw",md:"65vw",lg:"80vw",xxl:"95vw",adaptive:"fit-content"}[f],G=l?m.exiting:m.entering;return R.createPortal(e.jsx("div",{id:h,style:C,className:`${m["f-dialog"]} ${G} ${g||""}`,onMouseDown:n=>{n.target===n.currentTarget&&(t==null||t(!1))},onAnimationEnd:M,children:e.jsx("div",{className:`${m["f-dialog__content"]} ${F?m.hide:""}`,style:{width:z},onMouseDown:n=>n.stopPropagation(),children:i})}),document.body)},K={title:"Material/FDialog",component:p,argTypes:{openAndClose:{control:"boolean",description:"Открывает/закрывает диалог"},width:{control:"select",options:["xs","md","lg","xxl","adaptive"],description:"Ширина диалога"},hide:{control:"boolean",description:"Скрывает фон и контент за диалогом"}}},j={render:()=>{const[r,t]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:()=>t(!0),children:"Открыть диалог"}),e.jsxs(p,{openAndClose:r,closeButtonBackPage:t,width:"md",children:[e.jsx(c,{title:"Простой диалог",handleClose:()=>t(!1)}),e.jsx(x,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx("p",{style:{margin:0,fontWeight:500,color:"#111827"},children:"Обновление данных профиля"}),e.jsx("p",{style:{margin:0,color:"#6B7280"},children:"Диалоговое окно выполнено в фирменном стиле с мягким блюром оверлея, аккуратными тенями и плавными анимациями появления и закрытия."})]})}),e.jsxs(u,{children:[e.jsx(o,{color:"secondary",variant:"outline",onClick:()=>t(!1),children:"Отмена"}),e.jsx(o,{color:"primary",onClick:()=>t(!1),children:"Сохранить"})]})]})]})}},B={render:()=>{const[r,t]=s.useState(!1),[F,i]=s.useState("Корпоративный портал");return e.jsxs(e.Fragment,{children:[e.jsx(o,{color:"primary",onClick:()=>t(!0),children:"Редактировать проект"}),e.jsxs(p,{openAndClose:r,closeButtonBackPage:t,width:"md",children:[e.jsx(c,{title:"Настройки проекта",handleClose:()=>t(!1)}),e.jsx(x,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"13px",fontWeight:600,color:"#374151",marginBottom:"6px"},children:"Название проекта"}),e.jsx("input",{type:"text",value:F,onChange:h=>i(h.target.value),style:{width:"100%",padding:"9px 13px",borderRadius:"9px",border:"1.5px solid #E5E7EB",fontSize:"14px",outline:"none",boxSizing:"border-box"}})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"13px",fontWeight:600,color:"#374151",marginBottom:"6px"},children:"Описание"}),e.jsx("textarea",{rows:3,defaultValue:"Система управления документами и задачами с единой дизайн-системой fui-kit.",style:{width:"100%",padding:"9px 13px",borderRadius:"9px",border:"1.5px solid #E5E7EB",fontSize:"14px",outline:"none",boxSizing:"border-box",resize:"vertical"}})]}),e.jsxs("div",{style:{padding:"12px 16px",borderRadius:"10px",backgroundColor:"rgba(29, 111, 184, 0.08)",border:"1px solid rgba(29, 111, 184, 0.2)",display:"flex",alignItems:"center",gap:"10px"},children:[e.jsx("span",{style:{fontSize:"18px"},children:"💡"}),e.jsx("span",{style:{fontSize:"13px",color:"#1D6FB8",lineHeight:1.4},children:"Все изменения сохраняются автоматически в журнал ревизий."})]})]})}),e.jsxs(u,{children:[e.jsx(o,{color:"secondary",variant:"outline",onClick:()=>t(!1),children:"Закрыть"}),e.jsx(o,{color:"primary",onClick:()=>t(!1),children:"Применить"})]})]})]})}},v={render:()=>{const[r,t]=s.useState(!1),[F,i]=s.useState(!1),[h,g]=s.useState(!1),[C,f]=s.useState(!1),[a,d]=s.useState(!1);return e.jsxs("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap"},children:[e.jsx(o,{onClick:()=>t(!0),children:"XS (50vw)"}),e.jsx(o,{onClick:()=>i(!0),children:"MD (65vw)"}),e.jsx(o,{onClick:()=>g(!0),children:"LG (80vw)"}),e.jsx(o,{onClick:()=>f(!0),children:"XXL (95vw)"}),e.jsx(o,{onClick:()=>d(!0),children:"Adaptive"}),e.jsxs(p,{openAndClose:r,closeButtonBackPage:t,width:"xs",children:[e.jsx(c,{title:"Диалог XS",handleClose:()=>t(!1)}),e.jsx(x,{children:"Компактное диалоговое окно размера XS (50vw)."}),e.jsx(u,{children:e.jsx(o,{color:"primary",onClick:()=>t(!1),children:"Понятно"})})]}),e.jsxs(p,{openAndClose:F,closeButtonBackPage:i,width:"md",children:[e.jsx(c,{title:"Диалог MD",handleClose:()=>i(!1)}),e.jsx(x,{children:"Стандартный размер MD (65vw) для большинства форм и диалогов."}),e.jsx(u,{children:e.jsx(o,{color:"primary",onClick:()=>i(!1),children:"Понятно"})})]}),e.jsxs(p,{openAndClose:h,closeButtonBackPage:g,width:"lg",children:[e.jsx(c,{title:"Диалог LG",handleClose:()=>g(!1)}),e.jsx(x,{children:"Просторный диалог LG (80vw) для таблиц и объемного контента."}),e.jsx(u,{children:e.jsx(o,{color:"primary",onClick:()=>g(!1),children:"Понятно"})})]}),e.jsxs(p,{openAndClose:C,closeButtonBackPage:f,width:"xxl",children:[e.jsx(c,{title:"Диалог XXL",handleClose:()=>f(!1)}),e.jsx(x,{children:"Широкоформатный диалог XXL (95vw) для детальных панелей и дашбордов."}),e.jsx(u,{children:e.jsx(o,{color:"primary",onClick:()=>f(!1),children:"Понятно"})})]}),e.jsxs(p,{openAndClose:a,closeButtonBackPage:d,width:"adaptive",children:[e.jsx(c,{title:"Адаптивный диалог",handleClose:()=>d(!1)}),e.jsx(x,{children:"Диалог с адаптивной шириной (fit-content) под размер внутреннего содержимого."}),e.jsx(u,{children:e.jsx(o,{color:"primary",onClick:()=>d(!1),children:"Понятно"})})]})]})}};var S,w,k;j.parameters={...j.parameters,docs:{...(S=j.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(k=(w=j.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var I,b,X;B.parameters={...B.parameters,docs:{...(I=B.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(X=(b=B.parameters)==null?void 0:b.docs)==null?void 0:X.source}}};var L,A,E;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(A=v.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};const q=["Basic","RichContent","DifferentSizes"];export{j as Basic,v as DifferentSizes,B as RichContent,q as __namedExportsOrder,K as default};
