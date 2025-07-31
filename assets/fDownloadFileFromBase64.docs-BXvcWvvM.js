import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as r}from"./index-D7CuHrhf.js";import"./index-DvmIYu9Y.js";import{M as s}from"./index-D4y8zVdQ.js";import"./index-yBjzXJbu.js";import"./index-DY-snNUy.js";import"./preview-DwuH6bgd.js";import"./iframe-ClAc901l.js";import"./DocsRenderer-CFRXHY34-CELNXIGz.js";import"./client-CDUMOAsi.js";import"./index-fNjTmf9T.js";import"./index-xMzmejw-.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function i(d){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...r(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Function Elements/fDownloadFileFromBase64"}),`
`,e.jsx(n.h1,{id:"-fdownloadfilefrombase64--скачивание-файла-из-base64",children:"📥 fDownloadFileFromBase64 — скачивание файла из Base64"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Функция для скачивания файла, созданного из строки Base64. Удобно для загрузки изображений, документов, отчётов и других файлов, полученных в виде base64."}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-описание",children:"📝 Описание"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"fDownloadFileFromBase64"})," — функция, которая принимает строку Base64 (с префиксом или без) и имя файла, создаёт Blob и инициирует скачивание файла пользователем. MIME-тип определяется автоматически по Data URI или расширению файла."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-пример-использования",children:"💡 Пример использования"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`// Скачивание PNG-изображения
fDownloadFileFromBase64('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAgMBApUeZAAAAABJRU5ErkJggg==', 'pixel.png');

// Скачивание PDF
fDownloadFileFromBase64('data:application/pdf;base64,JVBERi0xLjQKJ...', 'file.pdf');
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-параметры",children:"📋 Параметры"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Параметр"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"base64String"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Строка Base64 (может содержать Data URI или быть чистыми данными)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"fileName"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Имя файла для сохранения (с расширением)"})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"️-особенности",children:"🛠️ Особенности"}),`
`,e.jsx("div",{style:{background:"#f5f5f5",padding:"12px 18px",borderRadius:"8px",marginBottom:"12px",fontSize:"15px"},children:e.jsxs("ul",{children:[e.jsx("li",{children:"Работает с любыми файлами, поддерживаемыми Blob."}),e.jsx("li",{children:"Автоматически определяет MIME-тип по Data URI или расширению файла."}),e.jsx("li",{children:"Не требует взаимодействия с сервером — всё происходит на клиенте."}),e.jsx("li",{children:"В случае ошибки выводит сообщение в консоль."})]})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["ℹ️ ",e.jsx("b",{children:"Совет:"})," Можно использовать вместе с ",e.jsx("code",{children:"fConvertFileToBase64"})," для загрузки и скачивания файлов в формате Base64."]}),`
`]})]})}function B(d={}){const{wrapper:n}={...r(),...d.components};return n?e.jsx(n,{...d,children:e.jsx(i,{...d})}):i(d)}export{B as default};
