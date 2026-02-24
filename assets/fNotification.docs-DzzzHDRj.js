import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-Da05a9iP.js";import"./index-BVDsvfAc.js";import{M as s}from"./index-C3PkEww2.js";import"./index-DEgj3Fem.js";import"./preview-Dg72giOB.js";import"./iframe-bp_-vJNl.js";import"./DocsRenderer-CFRXHY34-DNNrzaoh.js";import"./client-DBdnbfFq.js";import"./index-DM3MU96Y.js";import"./index-BknSE3li.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function r(d){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...i(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Function Elements/fNotification"}),`
`,e.jsx(n.h1,{id:"-fnotification--уведомление",children:"🔔 fNotification — уведомление"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Модальное уведомление, отображающееся в правом верхнем углу экрана. Используется для информирования пользователя о событиях."}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-описание",children:"📝 Описание"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"fNotification"})," — функция, которая отображает уведомление с иконкой, заголовком, текстом, прогресс-баром и кнопкой закрытия. Поддерживает четыре варианта: info, success, error, warning. Можно задать время автозакрытия и/или кнопку закрытия."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-пример-использования",children:"💡 Пример использования"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`fNotification({\r
  title: 'Успех',\r
  body: 'Данные успешно сохранены.',\r
  variant: 'success',\r
  timeSecClose: 3,\r
  buttonClose: true,\r
});
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-удаление-уведомления-вручную",children:"🧹 Удаление уведомления вручную"}),`
`,e.jsxs(n.p,{children:["Для ручного закрытия уведомления используйте функцию ",e.jsx(n.code,{children:"fNotificationDelete"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import fNotificationDelete from '../fNotificationDelete';\r
\r
<FButton onClick={async () => {\r
  const id = await fNotification({\r
    title: 'Удаляемое уведомление',\r
    body: 'Это уведомление исчезнет через 2 секунды',\r
    variant: 'info',\r
    buttonClose: false,\r
  });\r
  setTimeout(() => {\r
    fNotificationDelete(id);\r
  }, 2000);\r
}}>\r
  Показать и удалить уведомление\r
</FButton>
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"fNotificationDelete(id)"})," плавно скроет и удалит уведомление по его селектору."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-параметры",children:"📋 Параметры"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Параметр"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"title?"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Заголовок уведомления ",e.jsx("span",{style:{color:"#888"},children:"(необязательно)"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"body"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Основной текст уведомления ",e.jsx("b",{style:{color:"#d32f2f"},children:"(обязательно)"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"variant"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"'info' | 'error' | 'success' | 'warning'"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Тип уведомления (цвет и иконка)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"timeSecClose?"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"number"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Время автозакрытия (секунды) ",e.jsx("span",{style:{color:"#888"},children:"(необязательно)"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"buttonClose?"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Показывать кнопку закрытия ",e.jsx("span",{style:{color:"#888"},children:"(необязательно)"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"id?"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Уникальный идентификатор уведомления ",e.jsx("span",{style:{color:"#888"},children:"(необязательно)"})]})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"️-особенности",children:"🛠️ Особенности"}),`
`,e.jsx("div",{style:{background:"#f5f5f5",padding:"12px 18px",borderRadius:"8px",marginBottom:"12px",fontSize:"15px"},children:e.jsxs("ul",{children:[e.jsx("li",{children:"Уведомление появляется в правом верхнем углу экрана."}),e.jsx("li",{children:"Поддержка автозакрытия и прогресс-бара."}),e.jsx("li",{children:"Можно добавить кнопку закрытия."}),e.jsxs("li",{children:["Поддержка многострочного текста (переносы через ",e.jsx("code",{children:"\\n"}),")."]}),e.jsx("li",{children:"Можно вызывать из любого места приложения."})]})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["ℹ️ ",e.jsx("b",{children:"Совет:"})," Используйте ",e.jsx("code",{children:"variant"})," для выделения разных типов событий: ",e.jsx("span",{style:{color:"#2164BE"},children:"info"}),", ",e.jsx("span",{style:{color:"#0f7a11"},children:"success"}),", ",e.jsx("span",{style:{color:"#D10000"},children:"error"}),", ",e.jsx("span",{style:{color:"#ffc107"},children:"warning"}),"."]}),`
`]})]})}function m(d={}){const{wrapper:n}={...i(),...d.components};return n?e.jsx(n,{...d,children:e.jsx(r,{...d})}):r(d)}export{m as default};
