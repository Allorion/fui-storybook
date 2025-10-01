import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as s}from"./index-D7CuHrhf.js";import"./index-DrsHGaXY.js";import{M as i}from"./index-CEYoGdEa.js";import"./index-yBjzXJbu.js";import"./index-DY-snNUy.js";import"./preview-BbpON2qB.js";import"./iframe-CqorVJAZ.js";import"./DocsRenderer-CFRXHY34-8n1DXlkI.js";import"./client-CDUMOAsi.js";import"./index-fNjTmf9T.js";import"./index-xMzmejw-.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function r(d){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...s(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Function Elements/fPrompt"}),`
`,e.jsx(n.h1,{id:"-fprompt--модальное-поле-ввода",children:"💬 fPrompt — модальное поле ввода"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Модальное окно для ввода значения пользователем. Используется для получения текстового ответа."}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-описание",children:"📝 Описание"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"fPrompt"}),' — функция, которая отображает модальное окно с вопросом, полем для ввода и двумя кнопками: "Ок" и "Отменить". Можно указать заголовок и основной текст. Возвращает ',e.jsx(n.code,{children:"Promise<string | null>"})," — введённое значение или ",e.jsx(n.code,{children:"null"}),", если отменено."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-пример-использования",children:"💡 Пример использования"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const value = await fPrompt({
  title: 'Введите имя',
  body: 'Пожалуйста, введите ваше имя:',
});
if (value) {
  // Пользователь ввёл: value
}
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-параметры",children:"📋 Параметры"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Параметр"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"title?"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Заголовок окна ",e.jsx("span",{style:{color:"#888"},children:"(необязательно)"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"body?"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Основной текст вопроса ",e.jsx("span",{style:{color:"#888"},children:"(необязательно)"})]})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"️-особенности",children:"🛠️ Особенности"}),`
`,e.jsx("div",{style:{background:"#f5f5f5",padding:"12px 18px",borderRadius:"8px",marginBottom:"12px",fontSize:"15px"},children:e.jsxs("ul",{children:[e.jsx("li",{children:"Окно появляется поверх всей страницы."}),e.jsx("li",{children:"Поле для ввода текста."}),e.jsxs("li",{children:["Два варианта ответа: ",e.jsx("b",{children:"Ок"})," (вернёт строку) и ",e.jsx("b",{children:"Отменить"})," (вернёт ",e.jsx("code",{children:"null"}),")."]}),e.jsx("li",{children:"Можно вызывать из любого места приложения."})]})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["ℹ️ ",e.jsx("b",{children:"Совет:"})," Используйте ",e.jsx("code",{children:"fPrompt"})," для получения пользовательского ввода без перезагрузки страницы."]}),`
`]})]})}function y(d={}){const{wrapper:n}={...s(),...d.components};return n?e.jsx(n,{...d,children:e.jsx(r,{...d})}):r(d)}export{y as default};
