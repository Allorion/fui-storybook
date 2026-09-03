import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-BoUPaUI-.js";import"./index-CnJqn0zw.js";import{M as l}from"./index-CeKiDo1a.js";import"./index-B3j06Xw8.js";import"./preview-CZv1_EYH.js";import"./iframe-B-UITNWl.js";import"./DocsRenderer-CFRXHY34-Rl31wu_T.js";import"./client-DOawrHdJ.js";import"./index-DW0t0JKo.js";import"./index-D_ywfbVi.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";function s(n){const r={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Function Elements/fAlert"}),`
`,e.jsx(r.h1,{id:"-falert--модальное-уведомление",children:"🚨 fAlert — модальное уведомление"}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsx(r.p,{children:"Модальное уведомление, вызываемое функцией. Используется для отображения важных сообщений поверх страницы."}),`
`]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"-описание",children:"📝 Описание"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"fAlert"})," — функция, которая отображает модальное окно с уведомлением. Поддерживает четыре варианта: ",e.jsx("span",{style:{color:"#1976d2"},children:"info"}),", ",e.jsx("span",{style:{color:"#43a047"},children:"success"}),", ",e.jsx("span",{style:{color:"#d32f2f"},children:"error"}),", ",e.jsx("span",{style:{color:"#dc3545"},children:"warning"}),". Можно указать заголовок и основной текст. Текст поддерживает переносы строк через ",e.jsx(r.code,{children:"\\n"}),"."]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"-пример-использования",children:"💡 Пример использования"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-ts",children:`fAlert({\r
  title: 'Успех',\r
  body: 'Данные успешно сохранены.',\r
  variant: 'success',\r
});\r
\r
fAlert({\r
  body: 'Ошибка сети\\nПроверьте соединение',\r
  variant: 'error',\r
});
`})}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"-параметры",children:"📋 Параметры"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Параметр"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"title?"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Заголовок уведомления ",e.jsx("span",{style:{color:"#888"},children:"(необязательно)"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"body"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Основной текст уведомления ",e.jsx("b",{style:{color:"#d32f2f"},children:"(обязательно)"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"variant"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(r.p,{children:[e.jsx("code",{style:{color:"#2F80ED"},children:" 'info' "}),`,\r
`,e.jsx("code",{style:{color:"#dc3545"},children:" 'error' "}),`,\r
`,e.jsx("code",{style:{color:"#198754"},children:" 'success' "}),`,\r
`,e.jsx("code",{style:{color:"#ffc107"},children:" 'warning' "})]})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Тип уведомления (цвет и иконка)"})]})]})]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"️-особенности",children:"🛠️ Особенности"}),`
`,e.jsx("div",{style:{background:"#f5f5f5",padding:"12px 18px",borderRadius:"8px",marginBottom:"12px",fontSize:"15px"},children:e.jsxs("ul",{children:[e.jsx("li",{children:"Уведомление появляется поверх всей страницы."}),e.jsxs("li",{children:["Закрывается по кнопке ",e.jsx("b",{children:'"Закрыть"'}),"."]}),e.jsx("li",{children:"Можно вызывать из любого места приложения."}),e.jsxs("li",{children:["Текст поддерживает переносы строк через ",e.jsx("code",{children:"\\n"}),"."]})]})}),`
`,e.jsx(r.hr,{}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:["ℹ️ ",e.jsx("b",{children:"Совет:"})," Используйте ",e.jsx("code",{children:"variant"})," для выделения разных типов сообщений: ",e.jsx("span",{style:{color:"#2F80ED"},children:"info"}),", ",e.jsx("span",{style:{color:"#198754"},children:"success"}),", ",e.jsx("span",{style:{color:"#dc3545"},children:"error"}),", ",e.jsx("span",{style:{color:"#ffc107"},children:"warning"}),"."]}),`
`]})]})}function m(n={}){const{wrapper:r}={...d(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(s,{...n})}):s(n)}export{m as default};
