import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-Da05a9iP.js";import"./index-BcWRfDhc.js";import{M as i}from"./index-lFclSxzY.js";import"./index-DEgj3Fem.js";import"./preview-Btcl9l7X.js";import"./iframe-Cfvt1ieN.js";import"./DocsRenderer-CFRXHY34-BB2bMpLx.js";import"./client-DBdnbfFq.js";import"./index-DM3MU96Y.js";import"./index-BknSE3li.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function r(d){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...s(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Function Elements/fDownloadFileFromBase64"}),`
`,e.jsx(n.h1,{id:"-fdownloadfilefrombase64--скачивание-файла-из-base64",children:"📥 fDownloadFileFromBase64 — скачивание файла из Base64"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Функция для скачивания файла, созданного из строки Base64. Удобно для загрузки изображений, документов, отчётов и других файлов, полученных в виде base64."}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-описание",children:"📝 Описание"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"fDownloadFileFromBase64"})," — функция, которая принимает строку Base64 (с префиксом или без) и имя файла, создаёт Blob и инициирует скачивание файла пользователем. MIME-тип определяется автоматически по Data URI или расширению файла."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-пример-использования",children:"💡 Пример использования"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`// Скачивание PNG-изображения\r
fDownloadFileFromBase64('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAgMBApUeZAAAAABJRU5ErkJggg==', 'pixel.png');\r
\r
// Скачивание PDF\r
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
`]})]})}function b(d={}){const{wrapper:n}={...s(),...d.components};return n?e.jsx(n,{...d,children:e.jsx(r,{...d})}):r(d)}export{b as default};
