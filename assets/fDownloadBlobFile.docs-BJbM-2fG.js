import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-BoUPaUI-.js";import"./index-CnJqn0zw.js";import{M as o}from"./index-CeKiDo1a.js";import"./index-B3j06Xw8.js";import"./preview-CZv1_EYH.js";import"./iframe-B-UITNWl.js";import"./DocsRenderer-CFRXHY34-Rl31wu_T.js";import"./client-DOawrHdJ.js";import"./index-DW0t0JKo.js";import"./index-D_ywfbVi.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";function d(l){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...r(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Function Elements/fDownloadBlobFile"}),`
`,e.jsx(n.h1,{id:"-fdownloadblobfile--скачивание-файлов",children:"📥 fDownloadBlobFile — скачивание файлов"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Функция для скачивания файлов на устройство пользователя из Blob-объекта или строки."}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-описание",children:"📝 Описание"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"fDownloadBlobFile"})," — функция, которая создает временный URL из Blob или строки и инициирует скачивание файла пользователем. Удобна для сохранения данных, полученных через API или созданных в браузере."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-пример-использования",children:"💡 Пример использования"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`// Скачать текстовый файл\r
fDownloadBlobFile("Привет, мир!", "hello.txt");\r
\r
// Скачать Blob после fetch запроса\r
const response = await fetch('https://api.example.com/image');\r
const blob = await response.blob();\r
fDownloadBlobFile(blob, "image.png");\r
\r
// Скачать JSON\r
const data = { message: "Hello" };\r
fDownloadBlobFile(JSON.stringify(data), "data.json");
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-параметры",children:"📋 Параметры"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Параметр"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"blob"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"Blob | string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Данные для скачивания (Blob-объект или строка)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"fileName"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Имя файла для сохранения"})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"️-особенности",children:"🛠️ Особенности"}),`
`,e.jsx("div",{style:{background:"#f5f5f5",padding:"12px 18px",borderRadius:"8px",marginBottom:"12px",fontSize:"15px"},children:e.jsxs("ul",{children:[e.jsx("li",{children:"Автоматически конвертирует строки в Blob"}),e.jsx("li",{children:"Поддерживает любые типы файлов через Blob"}),e.jsx("li",{children:"Автоматически очищает временные ресурсы"}),e.jsx("li",{children:"Выбрасывает ошибку при пустых данных"}),e.jsx("li",{children:"Работает полностью на стороне клиента"})]})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["ℹ️ ",e.jsx("b",{children:"Совет:"})," Используйте для скачивания данных, полученных через API или сгенерированных в браузере."]}),`
`]})]})}function u(l={}){const{wrapper:n}={...r(),...l.components};return n?e.jsx(n,{...l,children:e.jsx(d,{...l})}):d(l)}export{u as default};
