import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as l}from"./index-BoUPaUI-.js";import"./index-DZIwFcCf.js";import{M as s}from"./index-DMXCuJec.js";import"./index-B3j06Xw8.js";import"./preview-XcJYIQwB.js";import"./iframe-jZlBexLy.js";import"./DocsRenderer-CFRXHY34-CD8_gY6i.js";import"./client-DOawrHdJ.js";import"./index-DW0t0JKo.js";import"./index-D_ywfbVi.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";function n(r){const d={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Function Elements/fExportingHtmlToXlsx"}),`
`,e.jsx(d.h1,{id:"-fexportinghtmltoxlsx--экспорт-htmljsx-в-xlsx",children:"📊 fExportingHtmlToXlsx — экспорт HTML/JSX в .xlsx"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsxs(d.p,{children:["Асинхронная функция для экспорта HTML-содержимого (строка или JSX) или содержимого div по ID в файл формата .xlsx (Excel). Использует внешний модуль ",e.jsx("code",{children:"allorion-exporting-html-to-xlsx"})," (требуется лицензия)."]}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-описание",children:"📝 Описание"}),`
`,e.jsxs(d.p,{children:[e.jsx(d.code,{children:"fExportingHtmlToXlsx"})," — асинхронная функция, которая инициализирует модуль экспорта и запускает его. Позволяет экспортировать HTML-строку, JSX-элемент или содержимое div-блока по ID в Excel-документ. Если лицензия недействительна, возвращает пустую функцию и выводит ошибку в консоль."]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-примеры-использования",children:"💡 Примеры использования"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-ts",children:`// Экспорт из JSX\r
const MyTable = () => (\r
  <table>\r
    <tr><th>Имя</th><th>Возраст</th></tr>\r
    <tr><td>Анна</td><td>25</td></tr>\r
  </table>\r
);\r
\r
fExportingHtmlToXlsx({\r
  fileName: 'report.xlsx',\r
  jsxElement: <MyTable />,\r
}).then(downloadFn => downloadFn());\r
\r
// Экспорт по ID элемента\r
fExportingHtmlToXlsx({\r
  fileName: 'document.xlsx',\r
  divId: 'my-table-id'\r
}).then(downloadFn => downloadFn());\r
\r
// Получение файла в формате Base64\r
fExportingHtmlToXlsx({\r
  fileName: 'data.xlsx',\r
  jsxElement: '<table><tr><td>Пример</td></tr></table>',\r
  getFile: 'base64'\r
}).then((getFileFn) => {\r
  getFileFn().then(base64 => {\r
    console.log('Base64:', base64);\r
  });\r
});
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h3,{id:"-html-разметка-с-поддержкой-dataset-пример-использования",children:"📝 HTML-разметка с поддержкой dataset (Пример использования)"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-html",children:`<div\r
  id="tab-export"\r
  data-column-width="C:20; D:F:25; G:30"\r
  data-row-height="1:50; 3:6:40; 8:60"\r
>\r
  <h1 data-no-export>Заголовок первого уровня</h1>\r
  <h2>Заголовок второго уровня</h2>\r
  <h3>Заголовок третьего уровня</h3>\r
\r
  <p>Обычный текст</p>\r
  <p data-text-bold>Жирный текст</p>\r
  <p data-text-underlined>Подчеркнутый текст</p>\r
  <p data-text-italic>Курсивный текст</p>\r
  <p data-cell-address="G1">Фиксированная ячейка G1</p>\r
\r
  <p data-text-color="FFFF0000">Текст красного цвета</p>\r
  <p data-fill-color="FFFF0000">Красная заливка</p>\r
\r
  <p\r
    data-cell-format='{"formatCode":{"code":"#,##0.00 \\"₽\\"","type":"number"}}'\r
  >\r
    Форматированное значение\r
  </p>\r
\r
  <p data-no-export>Этот текст не будет экспортирован</p>\r
\r
  <p data-column-width="10">Ширина столбца в котором находится ячейка 10</p>\r
\r
  <p data-row-height="50">Высота строки в которой находится ячейка 50</p>\r
\r
  <p data-alignment-h="center">Текст ячейки по центру</p>\r
\r
  <p data-alignment-v="top">Текст ячейки по центру</p>\r
\r
  <p data-alignment-v="top" data-alignment-h="center">\r
    Текст ячейки сверху по центру\r
  </p>\r
\r
  <p data-text-wrap>Текст переносится внутри ячейки</p>\r
\r
  <br />\r
\r
  <table>\r
    <thead>\r
      <tr>\r
        <th rowspan="2">Колонка 1</th>\r
        <th rowspan="2">Колонка 2</th>\r
        <th colspan="3">Колонка 3</th>\r
      </tr>\r
      <tr>\r
        <th>Подколонка 3.1</th>\r
        <th>Подколонка 3.2</th>\r
        <th>Подколонка 3.3</th>\r
      </tr>\r
    </thead>\r
    <tbody>\r
      <tr>\r
        <td>Ячейка 1</td>\r
        <td>Ячейка 2</td>\r
        <td>Ячейка 3.1</td>\r
        <td>Ячейка 3.2</td>\r
        <td>Ячейка 3.3</td>\r
      </tr>\r
    </tbody>\r
  </table>\r
</div>
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"️-поддерживаемые-dataset-атрибуты",children:"⚙️ Поддерживаемые dataset-атрибуты"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Атрибут"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Описание"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"data-no-export"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Исключает элемент из экспорта"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"data-cell-address"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Фиксирует позицию ячейки (например, G1)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"data-text-bold"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Жирный текст"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"data-text-underlined"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Подчеркнутый текст"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"data-text-italic"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Курсив"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"data-text-color"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Цвет текста в формате ARGB (например, FFFF0000 для красного)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"data-fill-color"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Цвет заливки в формате ARGB"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"data-cell-format"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:[e.jsxs(d.p,{children:["Формат ячейки (строка с форматом, объект с"," "]}),e.jsx("code",{children:e.jsx(d.p,{children:`{ "code": "string"; "type"?: 'date' | 'text' | 'number' |\r
'string' }`})}),e.jsx(d.p,{children:")"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"data-merge-horizontal"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Объединить ячейку по горизонтали на N колонок"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"data-merge-vertical"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Объединить по вертикали на N строк"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"data-merge-all"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Объединение по горизонтали и вертикали (NxM)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"data-column-width"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Изменение ширины столбца (см. инструкцию выше)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"data-row-height"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Изменение высоты строки (см. инструкцию выше)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"data-alignment-h"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Горизонтальное выравнивание (left, center, right)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"data-alignment-v"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Вертикальное выравнивание (top, center, bottom)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"data-text-wrap"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Перенос текста внутри ячейки"})})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-примечания",children:"📌 Примечания"}),`
`,e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs(d.p,{children:["Все dataset, применимые к ",e.jsx("code",{children:"<p>"}),", также работают на"," ",`\r
`,e.jsx("code",{children:"<h1>"}),"–",e.jsx("code",{children:"<h6>"})," и ",e.jsx("code",{children:"<span>"})," ",`\r
(кроме объединения).`]})}),e.jsx("li",{children:e.jsxs(d.p,{children:["Таблицы поддерживают ",e.jsx("code",{children:"colSpan"})," и ",e.jsx("code",{children:"rowSpan"}),` для\r
объединения, а также все dataset, применимые к `,e.jsx("code",{children:"<p>"}),` (кроме\r
объединения).`]})}),e.jsx("li",{children:e.jsxs(d.p,{children:["Структура сохраняется, включая вложенные ",e.jsx("code",{children:"span"})," внутри"," ",`\r
`,e.jsx("code",{children:"p"}),"."]})})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h3,{id:"таблица-стандартных-форматов-ячеек-numfmtid",children:"Таблица стандартных форматов ячеек (numFmtId)"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"numFmtId"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Описание"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Формат-код"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"0"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Общий формат"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"s"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"1"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Целое число (0)"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"null"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"2"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Число (0.00)"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"null"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"3"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Число с разделителями (например, 1,000)"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"null"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"4"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Число с разделителями и двумя знаками после запятой"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"null"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"9"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Процент (0%)"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"null"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"10"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Процент с двумя знаками после запятой (0.00%)"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"null"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"11"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Экспоненциальный формат (0.00E+00)"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"null"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"14"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Дата (mm-dd-yy)"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"d"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"15"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Дата (d-mmm-yy)"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"d"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"16"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Дата (d-mmm)"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"d"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"17"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Дата (mmm-yy)"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"d"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"18"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Время (h:mm AM/PM)"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"d"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"19"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Время (h:mm:ss AM/PM)"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"d"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"20"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Время (h:mm)"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"d"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"21"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Время (h:mm:ss)"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"d"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"22"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Дата и время (m/d/yy h:mm)"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"d"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"49"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Текст (строка)"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"s"})})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h3,{id:"таблица-типов-ячеек",children:"Таблица типов ячеек"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Тип"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Описание"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"s"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Строка (обычный текст)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"b"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Булево (True или False)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"d"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:'Дата (например, формат даты "mm-dd-yy" или "d-mmm-yy")'})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"e"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Ошибка (например, #DIV/0!)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"inlineStr"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Встроенная строка (строка, заключённая непосредственно в ячейке)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"str"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:["Строка (аналогично ",e.jsx("code",{children:"s"}),`, но используется для других типов\r
строк)`]})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"n"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Число (по умолчанию используется для числовых значений)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"null"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Число (если не указано иное, то ячейка считается числовой)"})})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"️-finstallformatcodexlsx--установка-формата-ячейки",children:"🛠️ fInstallFormatCodeXlsx — установка формата ячейки"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsxs(d.p,{children:["Вспомогательная функция для генерации строки формата ячейки Excel (используется в ",e.jsx(d.code,{children:"data-cell-format"}),"). Позволяет задать стандартный формат по ",e.jsx(d.code,{children:"numFmtId"})," или пользовательский формат через ",e.jsx(d.code,{children:"code"}),"/",e.jsx(d.code,{children:"type"}),"."]}),`
`]}),`
`,e.jsx(d.h3,{id:"описание",children:"Описание"}),`
`,e.jsxs(d.p,{children:[e.jsx(d.code,{children:"fInstallFormatCodeXlsx(data)"})," — возвращает JSON-строку с описанием формата для использования в атрибуте ",e.jsx(d.code,{children:"data-cell-format"}),"."]}),`
`,e.jsx(d.h3,{id:"параметры",children:"Параметры"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Параметр"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Тип"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Описание"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"numFmtId"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"number"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Стандартный идентификатор формата Excel (см. таблицу выше)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"formatCode"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:e.jsx(d.p,{children:`{ "code": "string"; "type"?: 'date' | 'text' | 'number' |\r
'string' }`})})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:["Пользовательский формат: ",e.jsx("br",{})," ",e.jsx("b",{children:"code"})," — строка формата (например,"," ",`\r
`,e.jsx("code",{children:`'#,##0.00 "₽"'`}),"), ",e.jsx("br",{})," ",e.jsx("b",{children:"type"})," — тип данных (например,"," ",`\r
`,e.jsx("code",{children:"'number'"}),", ",e.jsx("code",{children:"'date'"}),")"]})})]})]})]}),`
`,e.jsx(d.h3,{id:"возвращает",children:"Возвращает"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:[e.jsx("b",{children:"string"})," — JSON-строка с описанием формата, например: ",e.jsx("br",{}),`\r
`,e.jsx("code",{children:'{"numFmtId":9}'})," или",`
`,e.jsx("code",{children:e.jsx(d.p,{children:'{"formatCode":{"code":"0.00%","type":"number"}}'})}),`
`]}),`
`]}),`
`,e.jsx(d.h3,{id:"ошибки",children:"Ошибки"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsx(d.li,{children:"Если указаны оба параметра или ни один не указан — выбрасывается ошибка."}),`
`]}),`
`,e.jsx(d.h3,{id:"примеры-использования",children:"Примеры использования"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-ts",children:`// Пример с numFmtId\r
const format = fInstallFormatCodeXlsx({ numFmtId: 9 });\r
console.log(format); // {"numFmtId":9}\r
\r
// Пример с пользовательским форматом\r
const format = fInstallFormatCodeXlsx({\r
  formatCode: {\r
    code: "0.00%",\r
    type: "number",\r
  },\r
});\r
console.log(format); // {"formatCode":{"code":"0.00%","type":"number"}}
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsxs(d.h2,{id:"-числовые-форматы-и-маски-0-и-",children:["🔢 Числовые форматы и маски (",e.jsx(d.code,{children:"0"})," и ",e.jsx(d.code,{children:"#"}),")"]}),`
`,e.jsxs(d.p,{children:["Для задания пользовательского формата чисел (разделители тысяч, количество знаков после запятой, валюта) передается строка маски в ",e.jsx(d.code,{children:"formatCode.code"}),"."]}),`
`,e.jsx(d.p,{children:"Формат строится на основе стандартных символов-плейсхолдеров Excel:"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:[e.jsxs(d.strong,{children:[e.jsx(d.code,{children:"0"})," (обязательная цифра)"]})," — если цифры нет на этой позиции, отображается незначащий ноль."]}),`
`,e.jsxs(d.li,{children:[e.jsxs(d.strong,{children:[e.jsx(d.code,{children:"#"})," (необязательная цифра)"]})," — скрывает незначащие нули (отображает цифру, только если она действительно присутствует)."]}),`
`,e.jsxs(d.li,{children:[e.jsxs(d.strong,{children:[e.jsx(d.code,{children:","})," (запятая)"]})," — разделитель групп разрядов (тысяч)."]}),`
`,e.jsxs(d.li,{children:[e.jsxs(d.strong,{children:[e.jsx(d.code,{children:"."})," (точка)"]})," — разделитель целой и дробной части."]}),`
`,e.jsxs(d.li,{children:[e.jsxs(d.strong,{children:[e.jsx(d.code,{children:'"..."'})," (двойные кавычки)"]})," — экранирование произвольного текста или символов валют."]}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h3,{id:"-готовые-шаблоны-formatcode",children:"📋 Готовые шаблоны formatCode"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Категория"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsxs(d.p,{children:["Значение ",e.jsx(d.code,{children:"code"})]})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Исходное значение"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Отображение в Excel"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{rowSpan:"3",style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("b",{children:"Целые числа"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"0"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"1234"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:[e.jsx("code",{children:"1234"})," (базовый без пробелов)"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"#,##0"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"1234567"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:[e.jsx("code",{children:"1 234 567"})," (с разделителем тысяч)"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"00000"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"42"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:[e.jsx("code",{children:"00042"})," (ведущие нули / артикулы)"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{rowSpan:"3",style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("b",{children:"Два знака"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"#,##0.00"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"1234.5"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:[e.jsx("code",{children:"1 234.50"})," (строго 2 знака)"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"0.00"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"1234.5"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:[e.jsx("code",{children:"1234.50"})," (без разделителя тысяч)"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"#,##0.##"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:[e.jsx("code",{children:"1234.50"})," / ",e.jsx("code",{children:"1234"})]})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:[e.jsx("code",{children:"1 234.5"})," / ",e.jsx("code",{children:"1 234"})," (скрывать лишние нули)"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{rowSpan:"3",style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("b",{children:"Три и более знаков"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"#,##0.000"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"12.5"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:[e.jsx("code",{children:"12.500"})," (вес, объем, остатки)"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"#,##0.00#"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:[e.jsx("code",{children:"5.1"})," / ",e.jsx("code",{children:"5.125"})]})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:[e.jsx("code",{children:"5.10"})," / ",e.jsx("code",{children:"5.125"})," (минимум 2, до 3 знаков)"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:'#,##0.00 "₽"'})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"1500000"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:[e.jsx("code",{children:"1 500 000.00 ₽"})," (денежный формат)"]})})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h3,{id:"-примеры-использования-в-коде",children:"💻 Примеры использования в коде"}),`
`,e.jsx(d.h4,{id:"1-в-jsxreact-разметке",children:"1. В JSX/React разметке:"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`import React from "react";\r
import { fInstallFormatCodeXlsx } from "allorion-exporting-html-to-xlsx";\r
\r
// Целое число с разделителем групп разрядов\r
const intFormat = fInstallFormatCodeXlsx({\r
  formatCode: { code: "#,##0", type: "number" },\r
});\r
\r
// Денежный формат с 2 знаками и знаком рубля\r
const currencyFormat = fInstallFormatCodeXlsx({\r
  formatCode: { code: '#,##0.00 "₽"', type: "number" },\r
});\r
\r
// Точный вес (3 знака после запятой)\r
const weightFormat = fInstallFormatCodeXlsx({\r
  formatCode: { code: "#,##0.000", type: "number" },\r
});\r
\r
export const ProductTable = () => (\r
  <table>\r
    <thead>\r
      <tr>\r
        <th>Количество</th>\r
        <th>Вес (кг)</th>\r
        <th>Стоимость</th>\r
      </tr>\r
    </thead>\r
    <tbody>\r
      <tr>\r
        {/* Отобразится как: 15 000 */}\r
        <td data-cell-format={intFormat}>15000</td>\r
        {/* Отобразится как: 2.450 */}\r
        <td data-cell-format={weightFormat}>2.45</td>\r
        {/* Отобразится как: 1 250 000.00 ₽ */}\r
        <td data-cell-format={currencyFormat}>1250000</td>\r
      </tr>\r
    </tbody>\r
  </table>\r
);
`})}),`
`,e.jsxs(d.h4,{id:"2-в-чистом-html-через-data-cell-format",children:["2. В чистом HTML через ",e.jsx(d.code,{children:"data-cell-format"}),":"]}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsxs(d.p,{children:["⚠️ ",e.jsx(d.strong,{children:"Важно:"})," При передаче JSON непосредственно в HTML-атрибут строкой используйте одинарные кавычки снаружи или экранируйте внутренние кавычки как ",e.jsx(d.code,{children:"&quot;"}),":"]}),`
`]}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-html",children:`<!-- Целое число с разделителем тысяч -->\r
<p data-cell-format='{"formatCode":{"code":"#,##0","type":"number"}}'>\r
  2500000\r
</p>\r
\r
<!-- 2 знака после запятой с валютой -->\r
<p data-cell-format='{"formatCode":{"code":"#,##0.00 \\"₽\\"","type":"number"}}'>\r
  9990.5\r
</p>\r
\r
<!-- 3 знака после запятой для точных величин -->\r
<p data-cell-format='{"formatCode":{"code":"#,##0.000","type":"number"}}'>\r
  14.2\r
</p>
`})})]})}function f(r={}){const{wrapper:d}={...l(),...r.components};return d?e.jsx(d,{...r,children:e.jsx(n,{...r})}):n(r)}export{f as default};
