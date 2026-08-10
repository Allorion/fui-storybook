import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-Da05a9iP.js";import"./index-Bb4os9PL.js";import{M as s}from"./index-CHfHQAdi.js";import"./index-DEgj3Fem.js";import"./preview-C70yczUe.js";import"./iframe-DpLWwAsu.js";import"./DocsRenderer-CFRXHY34-DxhNbO5V.js";import"./client-DBdnbfFq.js";import"./index-DM3MU96Y.js";import"./index-BknSE3li.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function d(r){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Function Elements/fConfirm"}),`
`,e.jsx(n.h1,{id:"-fconfirm--модальное-подтверждение",children:"❓ fConfirm — модальное подтверждение"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Модальное окно для подтверждения действия пользователя. Используется для предотвращения случайных операций."}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-описание",children:"📝 Описание"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"fConfirm"}),' — функция, которая отображает модальное окно с вопросом и двумя кнопками: "Ок" и "Отменить". Можно указать заголовок и основной текст. Возвращает ',e.jsx(n.code,{children:"Promise<boolean>"})," в зависимости от выбора пользователя."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-пример-использования",children:"💡 Пример использования"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const confirmed = await fConfirm({\r
  title: 'Удаление',\r
  body: 'Вы уверены, что хотите удалить этот элемент?',\r
});\r
if (confirmed) {\r
  // действие при подтверждении\r
}
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-параметры",children:"📋 Параметры"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Параметр"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"title?"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Заголовок окна ",e.jsx("span",{style:{color:"#888"},children:"(необязательно)"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"body"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Основной текст вопроса ",e.jsx("b",{style:{color:"#d32f2f"},children:"(обязательно)"})]})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"️-особенности",children:"🛠️ Особенности"}),`
`,e.jsx("div",{style:{background:"#f5f5f5",padding:"12px 18px",borderRadius:"8px",marginBottom:"12px",fontSize:"15px"},children:e.jsxs("ul",{children:[e.jsx("li",{children:"Окно появляется поверх всей страницы."}),e.jsxs("li",{children:["Два варианта ответа: ",e.jsx("b",{children:"Ок"})," и ",e.jsx("b",{children:"Отменить"}),"."]}),e.jsxs("li",{children:["Возвращает ",e.jsx("code",{children:"true"})," при подтверждении и ",e.jsx("code",{children:"false"})," при отмене."]}),e.jsx("li",{children:"Можно вызывать из любого места приложения."})]})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["ℹ️ ",e.jsx("b",{children:"Совет:"})," Используйте ",e.jsx("code",{children:"fConfirm"})," для подтверждения важных и необратимых действий пользователя."]}),`
`]})]})}function u(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(d,{...r})}):d(r)}export{u as default};
