import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-BoUPaUI-.js";import"./index-CnJqn0zw.js";import{M as l}from"./index-CeKiDo1a.js";import"./index-B3j06Xw8.js";import"./preview-CZv1_EYH.js";import"./iframe-B-UITNWl.js";import"./DocsRenderer-CFRXHY34-Rl31wu_T.js";import"./client-DOawrHdJ.js";import"./index-DW0t0JKo.js";import"./index-D_ywfbVi.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";function n(r){const d={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Function Elements/fExportingHtmlToDocx"}),`
`,e.jsx(d.h1,{id:"-fexportinghtmltodocx--экспорт-htmljsx-в-docx",children:"📄 fExportingHtmlToDocx — экспорт HTML/JSX в .docx"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsxs(d.p,{children:["Асинхронная функция для экспорта HTML-содержимого (строка или JSX) или содержимого div по ID в файл формата .docx. Использует внешний модуль ",e.jsx("code",{children:"allorion-exporting-html-to-docx"})," (требуется лицензия)."]}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-описание",children:"📝 Описание"}),`
`,e.jsxs(d.p,{children:[e.jsx(d.code,{children:"fExportingHtmlToDocx"})," — асинхронная функция, которая инициализирует модуль экспорта и запускает его. Позволяет экспортировать HTML-строку, JSX-элемент или содержимое div-блока по ID в Word-документ. Если лицензия недействительна, возвращает пустую функцию и выводит ошибку в консоль."]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-примеры-использования",children:"💡 Примеры использования"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-ts",children:`// Экспорт из JSX\r
const MyComponent = () => (\r
  <div>\r
    <h1>Отчет</h1>\r
    <p>Текст отчета</p>\r
  </div>\r
);\r
fExportingHtmlToDocx({\r
  fileName: "report.docx",\r
  jsxElement: <MyComponent />,\r
}).then((downloadFn) => downloadFn());\r
\r
// Экспорт из строки HTML\r
fExportingHtmlToDocx({\r
  fileName: "document.docx",\r
  jsxElement: "<h1>Заголовок</h1><p>Параграф текста</p>",\r
}).then((downloadFn) => downloadFn());\r
\r
// Экспорт из div-блока по ID\r
fExportingHtmlToDocx({\r
  fileName: "report.docx",\r
  divId: "export-data",\r
}).then((downloadFn) => downloadFn());
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-параметры",children:"📋 Параметры"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Параметр"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Тип"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Описание"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"jsxElement?"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string | JSX.Element"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:[`HTML-строка или JSX-элемент для экспорта. Если передан JSX, он будет\r
преобразован в строку через `,e.jsx("code",{children:"renderToStaticMarkup"}),"."]})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"divId?"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"ID div-блока на странице, содержимое которого будет экспортировано."})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"fileName?"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:["Имя файла для сохранения (по умолчанию ",e.jsx("code",{children:"export.docx"}),")."]})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"format?"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"'A4' | 'A3' | 'A2' | 'A1'"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:["Формат листа документа (по умолчанию ",e.jsx("code",{children:"'A4'"}),")."]})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"orientation?"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"'landscape' | 'vertical'"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:["Ориентация страниц: ",e.jsx("code",{children:"'landscape'"})," (горизонтальная) или"," ",`\r
`,e.jsx("code",{children:"'vertical'"})," (вертикальная, по умолчанию)."]})})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-возвращаемое-значение",children:"🔄 Возвращаемое значение"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:[e.jsx("b",{children:"Promise<Function>"}),` — промис, который резолвится функцией для начала\r
загрузки файла `,e.jsx("code",{children:".docx"}),` (если всё прошло успешно), либо пустой функцией\r
(если лицензия недействительна).`]}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"️-особенности",children:"🛠️ Особенности"}),`
`,e.jsx("div",{style:{background:"#f5f5f5",padding:"12px 18px",borderRadius:"8px",marginBottom:"12px",fontSize:"15px"},children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(d.p,{children:`Поддерживает экспорт как из HTML-строки, так и из JSX-элементов или\r
содержимого div по ID.`})}),e.jsx("li",{children:e.jsxs(d.p,{children:["Асинхронная функция, возвращает ",e.jsx("b",{children:"Promise"}),"."]})}),e.jsx("li",{children:e.jsxs(d.p,{children:["Использует внешний модуль ",e.jsx("code",{children:"allorion-exporting-html-to-docx"})," ",`\r
(требуется лицензия).`]})}),e.jsx("li",{children:"В случае ошибки с лицензией выводит сообщение в консоль."})]})}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"️-поддерживаемые-html-теги-и-dataset-атрибуты",children:"🏷️ Поддерживаемые HTML-теги и dataset атрибуты"}),`
`,e.jsx(d.p,{children:"Поддерживаются следующие HTML-теги для экспорта:"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:["Заголовки: ",e.jsx(d.code,{children:"<h1>"})," … ",e.jsx(d.code,{children:"<h6>"})]}),`
`,e.jsxs(d.li,{children:["Параграфы и текст: ",e.jsx(d.code,{children:"<p>"}),", ",e.jsx(d.code,{children:"<span>"})]}),`
`,e.jsxs(d.li,{children:["Разрывы строк: ",e.jsx(d.code,{children:"<br>"})]}),`
`,e.jsxs(d.li,{children:["Списки: ",e.jsx(d.code,{children:"<ul>"}),", ",e.jsx(d.code,{children:"<ol>"}),", ",e.jsx(d.code,{children:"<li>"})]}),`
`,e.jsxs(d.li,{children:["Таблицы: ",e.jsx(d.code,{children:"<table>"}),", ",e.jsx(d.code,{children:"<tr>"}),", ",e.jsx(d.code,{children:"<td>"}),", ",e.jsx(d.code,{children:"<th>"})]}),`
`,e.jsxs(d.li,{children:["Фигуры: ",e.jsx(d.code,{children:"<figure>"})]}),`
`]}),`
`,e.jsx(d.h3,{id:"поддерживаемые-dataset-атрибуты",children:"Поддерживаемые dataset атрибуты"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Атрибут"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Описание"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Применение"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Пример"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"data-text-bold"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Жирный текст"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"<p>, <span>, <td>, <th>"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"<span data-text-bold>Жирный</span>"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"data-text-italic"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Курсив"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"<p>, <span>, <td>, <th>"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"<span data-text-italic>Курсив</span>"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"data-text-underlined"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Подчёркнутый"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"<p>, <span>, <td>, <th>"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"<span data-text-underlined>Подчёркнутый</span>"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"data-text-color"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Цвет текста в HEX (без #)"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"<p>, <span>, <td>, <th>"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:'<span data-text-color="FF0000">Красный</span>'})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"data-text-highlight"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Цвет подсветки"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"<p>, <span>, <td>, <th>"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:'<span data-text-highlight="yellow">Выделение</span>'})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"data-font-size"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Размер шрифта в пунктах"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"<p>, <span>, <li>, <td>, <th>"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:'<p data-font-size="24">Текст 24pt</p>'})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"data-text-align"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Выравнивание текста"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"<p>, <li>, <td>, <th>"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:'<p data-text-align="center">Центр</p>'})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"data-no-export"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Пропустить экспорт"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Любой элемент"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"<span data-no-export>Не экспортировать</span>"})})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"️-особенности-1",children:"🛠️ Особенности"}),`
`,e.jsx("div",{style:{background:"#f5f5f5",padding:"12px 18px",borderRadius:"8px",marginBottom:"12px",fontSize:"15px"},children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(d.p,{children:`Поддерживает экспорт как из HTML-строки, так и из JSX-элементов или\r
содержимого div по ID.`})}),e.jsx("li",{children:e.jsxs(d.p,{children:["Асинхронная функция, возвращает ",e.jsx("b",{children:"Promise"}),"."]})}),e.jsx("li",{children:e.jsxs(d.p,{children:["Использует внешний модуль ",e.jsx("code",{children:"allorion-exporting-html-to-docx"})," ",`\r
(требуется лицензия).`]})}),e.jsx("li",{children:"В случае ошибки с лицензией выводит сообщение в консоль."})]})}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.p,{children:e.jsxs(d.strong,{children:["Варианты для ",e.jsx(d.code,{children:"highlight-*"}),":"]})}),`
`,e.jsxs("ul",{children:[e.jsx("li",{children:"yellow: Жёлтый"}),e.jsx("li",{children:"green: Зелёный"}),e.jsx("li",{children:"cyan: Голубой"}),e.jsx("li",{children:"magenta: Пурпурный"}),e.jsx("li",{children:"blue: Синий"}),e.jsx("li",{children:"red: Красный"}),e.jsx("li",{children:"darkBlue: Тёмно-синий"}),e.jsx("li",{children:"darkCyan: Тёмно-голубой"}),e.jsx("li",{children:"darkGreen: Тёмно-зелёный"}),e.jsx("li",{children:"darkMagenta: Тёмно-пурпурный"}),e.jsx("li",{children:"darkRed: Тёмно-красный"}),e.jsx("li",{children:"darkYellow: Тёмно-жёлтый"}),e.jsx("li",{children:"darkGray: Тёмно-серый"}),e.jsx("li",{children:"lightGray: Светло-серый"}),e.jsx("li",{children:"black: Чёрный"})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsxs(d.p,{children:["ℹ️ ",e.jsx("b",{children:"Совет:"})," Используйте для генерации отчётов, актов, коммерческих предложений и других документов Word прямо из React."]}),`
`]})]})}function f(r={}){const{wrapper:d}={...i(),...r.components};return d?e.jsx(d,{...r,children:e.jsx(n,{...r})}):n(r)}export{f as default};
