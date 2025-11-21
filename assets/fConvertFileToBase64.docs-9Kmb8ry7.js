import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as d}from"./index-D7CuHrhf.js";import"./index-D3ghijC9.js";import{M as i}from"./index-D4zPF2uo.js";import"./index-yBjzXJbu.js";import"./index-DY-snNUy.js";import"./preview-Dae6In-b.js";import"./iframe-sXVIHQIk.js";import"./DocsRenderer-CFRXHY34-BR7xeYUn.js";import"./client-CDUMOAsi.js";import"./index-fNjTmf9T.js";import"./index-xMzmejw-.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function s(r){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...d(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Function Elements/fConvertFileToBase64"}),`
`,e.jsx(n.h1,{id:"-fconvertfiletobase64--преобразование-файла-в-base64",children:"🧩 fConvertFileToBase64 — преобразование файла в Base64"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Функция для преобразования файла в строку формата Base64. Удобно для загрузки изображений, документов и других файлов в формате, пригодном для передачи по сети."}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-описание",children:"📝 Описание"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"fConvertFileToBase64"})," — функция, которая принимает объект ",e.jsx(n.code,{children:"File"})," и возвращает строку в формате Base64 (с префиксом или без, по желанию). Может использоваться для предпросмотра изображений, отправки файлов на сервер и других задач."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-пример-использования",children:"💡 Пример использования"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const file = new File([blob], 'test.jpg');
fConvertFileToBase64(file)
  .then(base64 => console.log(base64))
  .catch(error => console.error('Ошибка:', error));

// Только данные Base64 (без префикса):
// fConvertFileToBase64(file, true).then(data => console.log(data));
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-параметры",children:"📋 Параметры"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Параметр"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"file"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"File"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Файл для преобразования"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"deletePrefix?"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Если ",e.jsx("code",{children:"true"}),", возвращает только данные Base64 без префикса ",e.jsx("code",{children:"data:...;base64,"})]})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"️-особенности",children:"🛠️ Особенности"}),`
`,e.jsx("div",{style:{background:"#f5f5f5",padding:"12px 18px",borderRadius:"8px",marginBottom:"12px",fontSize:"15px"},children:e.jsxs("ul",{children:[e.jsx("li",{children:"Работает с любыми файлами, поддерживаемыми FileReader."}),e.jsxs("li",{children:["Асинхронная функция, возвращает ",e.jsx("b",{children:"Promise"}),"."]}),e.jsx("li",{children:"Можно использовать для предпросмотра изображений, передачи файлов на сервер и др."}),e.jsx("li",{children:"В случае ошибки чтения файла выбрасывает исключение."})]})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["ℹ️ ",e.jsx("b",{children:"Совет:"})," Для изображений удобно использовать результат как ",e.jsx("code",{children:"src"})," для тега ",e.jsx("code",{children:"<img />"})," или отправлять на сервер для хранения."]}),`
`]})]})}function y(r={}){const{wrapper:n}={...d(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{y as default};
