import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-BoUPaUI-.js";import"./index-13Kgcc-W.js";import{M as s}from"./index-EzrwBadO.js";import"./index-B3j06Xw8.js";import"./preview-CQ6eulw2.js";import"./iframe-yQqoeQbT.js";import"./DocsRenderer-CFRXHY34-DKFsZNkU.js";import"./client-DOawrHdJ.js";import"./index-DW0t0JKo.js";import"./index-D_ywfbVi.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";function l(i){const d={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Material/FRadioButton"}),`
`,e.jsx(d.h1,{id:"-fradiobutton--кастомная-радио-кнопка",children:"🔘 FRadioButton — кастомная радио-кнопка"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsx(d.p,{children:"Гибкий компонент радио-кнопки с поддержкой метки, состояний (выбрано/отключено) и кастомных стилей."}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-описание",children:"📝 Описание"}),`
`,e.jsxs(d.p,{children:[e.jsx(d.code,{children:"FRadioButton"})," — это кастомная реализация радио-кнопки, которая позволяет полностью контролировать внешний вид и поведение. Поддерживает метку (любой React-элемент), состояния (выбрано, отключено) и кастомные стили через CSS Modules."]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-примеры-использования",children:"💡 Примеры использования"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{children:`<FRadioButton label="Выбрать" checked={isChecked} onClick={() => setIsChecked(!isChecked)} />\r
\r
<FRadioButton label="Отключено" disabled />\r
\r
<FRadioButton label="Выбрано и отключено" disabled checked />
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-пропсы",children:"📋 Пропсы"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Проп"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0h0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"label"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.ReactNode"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Метка (текст или элемент)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"onClick"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.MouseEventHandler<HTMLInputElement>"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Обработчик клика"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"className"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Пользовательский CSS-класс"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"id"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"ID элемента"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"st"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.CSSProperties"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Инлайновые стили"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"checked"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Состояние: выбрано"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"disabled"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Состояние: отключено"})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"️-особенности",children:"🛠️ Особенности"}),`
`,e.jsxs("ul",{children:[e.jsx("li",{children:"Кастомизируемый внешний вид"}),e.jsx("li",{children:"Поддержка состояний (выбрано/отключено)"}),e.jsx("li",{children:"Гибкость в использовании метки (label)"}),e.jsx("li",{children:"Интеграция с формами"})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"ℹ️-советы",children:"ℹ️ Советы"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:["Используйте ",e.jsx("code",{children:"checked"})," и ",e.jsx("code",{children:"onClick"})," для управления состоянием."]}),`
`,e.jsxs(d.li,{children:["Для отключения используйте ",e.jsx("code",{children:"disabled"}),"."]}),`
`,e.jsxs(d.li,{children:["Можно передать любой React-элемент в качестве ",e.jsx("code",{children:"label"}),"."]}),`
`]})]})}function m(i={}){const{wrapper:d}={...r(),...i.components};return d?e.jsx(d,{...i,children:e.jsx(l,{...i})}):l(i)}export{m as default};
