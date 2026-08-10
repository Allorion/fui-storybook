import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-Da05a9iP.js";import"./index-D_1bxtLg.js";import{M as i}from"./index-C4GOUl7K.js";import"./index-DEgj3Fem.js";import"./preview-D1dj5soZ.js";import"./iframe-CQfYLJiy.js";import"./DocsRenderer-CFRXHY34-BeeKmW1p.js";import"./client-DBdnbfFq.js";import"./index-DM3MU96Y.js";import"./index-BknSE3li.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function s(n){const r={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Function Elements/fConvertFileToBase64"}),`
`,e.jsx(r.h1,{id:"-fconvertfiletobase64--преобразование-файла-в-base64",children:"🧩 fConvertFileToBase64 — преобразование файла в Base64"}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsx(r.p,{children:"Функция для преобразования файла в строку формата Base64. Удобно для загрузки изображений, документов и других файлов в формате, пригодном для передачи по сети."}),`
`]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"-описание",children:"📝 Описание"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"fConvertFileToBase64"})," — функция, которая принимает объект ",e.jsx(r.code,{children:"File"})," и возвращает строку в формате Base64 (с префиксом или без, по желанию). Может использоваться для предпросмотра изображений, отправки файлов на сервер и других задач."]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"-пример-использования",children:"💡 Пример использования"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-ts",children:`const file = new File([blob], 'test.jpg');\r
fConvertFileToBase64(file)\r
  .then(base64 => console.log(base64))\r
  .catch(error => console.error('Ошибка:', error));\r
\r
// Только данные Base64 (без префикса):\r
// fConvertFileToBase64(file, true).then(data => console.log(data));
`})}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"-параметры",children:"📋 Параметры"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Параметр"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"file"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"File"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Файл для преобразования"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"deletePrefix?"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Если ",e.jsx("code",{children:"true"}),", возвращает только данные Base64 без префикса ",e.jsx("code",{children:"data:...;base64,"})]})]})]})]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"️-особенности",children:"🛠️ Особенности"}),`
`,e.jsx("div",{style:{background:"#f5f5f5",padding:"12px 18px",borderRadius:"8px",marginBottom:"12px",fontSize:"15px"},children:e.jsxs("ul",{children:[e.jsx("li",{children:"Работает с любыми файлами, поддерживаемыми FileReader."}),e.jsxs("li",{children:["Асинхронная функция, возвращает ",e.jsx("b",{children:"Promise"}),"."]}),e.jsx("li",{children:"Можно использовать для предпросмотра изображений, передачи файлов на сервер и др."}),e.jsx("li",{children:"В случае ошибки чтения файла выбрасывает исключение."})]})}),`
`,e.jsx(r.hr,{}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:["ℹ️ ",e.jsx("b",{children:"Совет:"})," Для изображений удобно использовать результат как ",e.jsx("code",{children:"src"})," для тега ",e.jsx("code",{children:"<img />"})," или отправлять на сервер для хранения."]}),`
`]})]})}function u(n={}){const{wrapper:r}={...d(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(s,{...n})}):s(n)}export{u as default};
