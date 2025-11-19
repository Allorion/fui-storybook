import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as d}from"./index-D7CuHrhf.js";import"./index-D854AyPB.js";import{M as l}from"./index-CX6ceWH8.js";import"./index-yBjzXJbu.js";import"./index-DY-snNUy.js";import"./preview-DySwuQUI.js";import"./iframe-CwanCmLK.js";import"./DocsRenderer-CFRXHY34-3cIYPD7H.js";import"./client-CDUMOAsi.js";import"./index-fNjTmf9T.js";import"./index-xMzmejw-.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function s(n){const r={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Function Elements/fAlert"}),`
`,e.jsx(r.h1,{id:"-falert--модальное-уведомление",children:"🚨 fAlert — модальное уведомление"}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsx(r.p,{children:"Модальное уведомление, вызываемое функцией. Используется для отображения важных сообщений поверх страницы."}),`
`]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"-описание",children:"📝 Описание"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"fAlert"})," — функция, которая отображает модальное окно с уведомлением. Поддерживает четыре варианта: ",e.jsx("span",{style:{color:"#1976d2"},children:"info"}),", ",e.jsx("span",{style:{color:"#43a047"},children:"success"}),", ",e.jsx("span",{style:{color:"#d32f2f"},children:"error"}),", ",e.jsx("span",{style:{color:"#dc3545"},children:"warning"}),". Можно указать заголовок и основной текст. Текст поддерживает переносы строк через ",e.jsx(r.code,{children:"\\n"}),"."]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"-пример-использования",children:"💡 Пример использования"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-ts",children:`fAlert({
  title: 'Успех',
  body: 'Данные успешно сохранены.',
  variant: 'success',
});

fAlert({
  body: 'Ошибка сети\\nПроверьте соединение',
  variant: 'error',
});
`})}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"-параметры",children:"📋 Параметры"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Параметр"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"title?"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Заголовок уведомления ",e.jsx("span",{style:{color:"#888"},children:"(необязательно)"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"body"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Основной текст уведомления ",e.jsx("b",{style:{color:"#d32f2f"},children:"(обязательно)"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"variant"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(r.p,{children:[e.jsx("code",{style:{color:"#2F80ED"},children:" 'info' "}),`,
`,e.jsx("code",{style:{color:"#dc3545"},children:" 'error' "}),`,
`,e.jsx("code",{style:{color:"#198754"},children:" 'success' "}),`,
`,e.jsx("code",{style:{color:"#ffc107"},children:" 'warning' "})]})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Тип уведомления (цвет и иконка)"})]})]})]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"️-особенности",children:"🛠️ Особенности"}),`
`,e.jsx("div",{style:{background:"#f5f5f5",padding:"12px 18px",borderRadius:"8px",marginBottom:"12px",fontSize:"15px"},children:e.jsxs("ul",{children:[e.jsx("li",{children:"Уведомление появляется поверх всей страницы."}),e.jsxs("li",{children:["Закрывается по кнопке ",e.jsx("b",{children:'"Закрыть"'}),"."]}),e.jsx("li",{children:"Можно вызывать из любого места приложения."}),e.jsxs("li",{children:["Текст поддерживает переносы строк через ",e.jsx("code",{children:"\\n"}),"."]})]})}),`
`,e.jsx(r.hr,{}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:["ℹ️ ",e.jsx("b",{children:"Совет:"})," Используйте ",e.jsx("code",{children:"variant"})," для выделения разных типов сообщений: ",e.jsx("span",{style:{color:"#2F80ED"},children:"info"}),", ",e.jsx("span",{style:{color:"#198754"},children:"success"}),", ",e.jsx("span",{style:{color:"#dc3545"},children:"error"}),", ",e.jsx("span",{style:{color:"#ffc107"},children:"warning"}),"."]}),`
`]})]})}function u(n={}){const{wrapper:r}={...d(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(s,{...n})}):s(n)}export{u as default};
