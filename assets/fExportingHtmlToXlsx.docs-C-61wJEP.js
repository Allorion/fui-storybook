import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as n}from"./index-Da05a9iP.js";import"./index-DALg5sRL.js";import{M as s}from"./index-CavgetNk.js";import"./index-DEgj3Fem.js";import"./preview-DwCCFJlV.js";import"./iframe-QFvIC0Hu.js";import"./DocsRenderer-CFRXHY34-DThKL4LD.js";import"./client-DBdnbfFq.js";import"./index-DM3MU96Y.js";import"./index-BknSE3li.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function l(r){const d={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Function Elements/fExportingHtmlToXlsx"}),`
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
`,e.jsx(d.pre,{children:e.jsx(d.code,{children:`<div id="tab-export" data-column-width="C:20; D:F:25; G:30" data-row-height="1:50; 3:6:40; 8:60">\r
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
    <p data-cell-format="{...}">Форматированное значение</p>\r
\r
    <p data-no-export>Этот текст не будет экспортирован</p>\r
\r
    <p data-column-width='10'>Ширина столбца в котором находится ячейка 10</p>\r
\r
    <p data-row-height='50'>Высота строки в которой находится ячейка 50</p>\r
\r
    <p data-alignment-h='center'>Текст ячейки по центру</p>\r
\r
    <p data-alignment-v='top'>Текст ячейки по центру</p>\r
\r
    <p data-alignment-v='top' data-alignment-h='center'>Текст ячейки сверху по центру</p>\r
\r
    <p data-text-wrap>Текст переносится внутри ячейки</p>\r
\r
    <br />\r
\r
    <table>\r
        <thead>\r
            <tr>\r
                <th rowSpan="2">Колонка 1</th>\r
                <th rowSpan="2">Колонка 2</th>\r
                <th colSpan="3">Колонка 3</th>\r
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
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Атрибут"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"data-no-export"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Исключает элемент из экспорта"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"data-cell-address"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Фиксирует позицию ячейки (например, G1)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"data-text-bold"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Жирный текст"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"data-text-underlined"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Подчеркнутый текст"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"data-text-italic"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Курсив"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"data-text-color"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Цвет текста в формате ARGB (например, FFFF0000 для красного)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"data-fill-color"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Цвет заливки в формате ARGB"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"data-cell-format"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Формат ячейки (строка с форматом, объект с ",e.jsx("code",{children:`{ "code": "string"; "type"?: 'date' | 'text' | 'number' | 'string' }`}),")"]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"data-merge-horizontal"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Объединить ячейку по горизонтали на N колонок"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"data-merge-vertical"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Объединить по вертикали на N строк"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"data-merge-all"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Объединение по горизонтали и вертикали (NxM)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"data-column-width"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Изменение ширины столбца (см. инструкцию выше)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"data-row-height"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Изменение высоты строки (см. инструкцию выше)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"data-alignment-h"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Горизонтальное выравнивание (left, center, right)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"data-alignment-v"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Вертикальное выравнивание (top, center, bottom)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"data-text-wrap"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Перенос текста внутри ячейки"})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-примечания",children:"📌 Примечания"}),`
`,e.jsxs("ul",{children:[e.jsxs("li",{children:["Все dataset, применимые к ",e.jsx("code",{children:"<p>"}),", также работают на ",e.jsx("code",{children:"<h1>"}),"–",e.jsx("code",{children:"<h6>"})," и ",e.jsx("code",{children:"<span>"})," (кроме объединения)."]}),e.jsxs("li",{children:["Таблицы поддерживают ",e.jsx("code",{children:"colSpan"})," и ",e.jsx("code",{children:"rowSpan"})," для объединения, а также все dataset, применимые к ",e.jsx("code",{children:"<p>"})," (кроме объединения)."]}),e.jsxs("li",{children:["Структура сохраняется, включая вложенные ",e.jsx("code",{children:"span"})," внутри ",e.jsx("code",{children:"p"}),"."]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h3,{id:"таблица-стандартных-форматов-ячеек-numfmtid",children:"Таблица стандартных форматов ячеек (numFmtId)"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"numFmtId"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Формат-код"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"0"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Общий формат"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"s"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"1"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Целое число (0)"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"null"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"2"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Число (0.00)"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"null"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"3"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Число с разделителями (например, 1,000)"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"null"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"4"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Число с разделителями и двумя знаками после запятой"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"null"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"9"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Процент (0%)"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"null"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"10"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Процент с двумя знаками после запятой (0.00%)"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"null"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"11"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Экспоненциальный формат (0.00E+00)"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"null"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"14"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Дата (mm-dd-yy)"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"d"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"15"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Дата (d-mmm-yy)"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"d"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"16"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Дата (d-mmm)"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"d"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"17"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Дата (mmm-yy)"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"d"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"18"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Время (h:mm AM/PM)"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"d"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"19"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Время (h:mm:ss AM/PM)"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"d"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"20"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Время (h:mm)"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"d"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"21"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Время (h:mm:ss)"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"d"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"22"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Дата и время (m/d/yy h:mm)"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"d"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"49"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Текст (строка)"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"s"})})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h3,{id:"таблица-типов-ячеек",children:"Таблица типов ячеек"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"s"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Строка (обычный текст)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"b"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Булево (True или False)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"d"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:'Дата (например, формат даты "mm-dd-yy" или "d-mmm-yy")'})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"e"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Ошибка (например, #DIV/0!)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"inlineStr"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Встроенная строка (строка, заключённая непосредственно в ячейке)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"str"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Строка (аналогично ",e.jsx("code",{children:"s"}),", но используется для других типов строк)"]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"n"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Число (по умолчанию используется для числовых значений)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"null"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Число (если не указано иное, то ячейка считается числовой)"})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"️-finstallformatcodexlsx--установка-формата-ячейки",children:"🛠️ fInstallFormatCodeXlsx — установка формата ячейки"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsx(d.p,{children:"Вспомогательная функция для генерации строки формата ячейки Excel (используется в data-cell-format). Позволяет задать стандартный формат по numFmtId или пользовательский формат через code/type."}),`
`]}),`
`,e.jsx(d.h3,{id:"описание",children:"Описание"}),`
`,e.jsxs(d.p,{children:[e.jsx(d.code,{children:"fInstallFormatCodeXlsx(data)"})," — возвращает JSON-строку с описанием формата для использования в атрибуте ",e.jsx(d.code,{children:"data-cell-format"}),"."]}),`
`,e.jsx(d.h3,{id:"параметры",children:"Параметры"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Параметр"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"numFmtId"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"number"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Стандартный идентификатор формата Excel (см. таблицу выше)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"formatCode"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:`{ "code": "string"; "type"?: 'date' | 'text' | 'number' | 'string' }`})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Пользовательский формат: ",e.jsx("br",{})," ",e.jsx("b",{children:"code"})," — строка формата (например, ",e.jsx("code",{children:"'0.00%'"}),"), ",e.jsx("br",{})," ",e.jsx("b",{children:"type"})," — тип данных (например, ",e.jsx("code",{children:"'number'"}),", ",e.jsx("code",{children:"'date'"}),")"]})]})]})]}),`
`,e.jsx(d.h3,{id:"возвращает",children:"Возвращает"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:[e.jsx("b",{children:"string"})," — JSON-строка с описанием формата, например: ",e.jsx("br",{}),`\r
`,e.jsx("code",{children:'{"numFmtId":9}'})," или ",e.jsx("code",{children:'{"formatCode":{"code":"0.00%","type":"number"}}'})]}),`
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
    code: '0.00%',\r
    type: 'number'\r
  }\r
});\r
console.log(format); // {"formatCode":{"code":"0.00%","type":"number"}}\r
\r
// Ошибка: указаны оба параметра\r
try {\r
  fInstallFormatCodeXlsx({\r
    numFmtId: 1,\r
    formatCode: { code: '0.00%' }\r
  });\r
} catch (e) {\r
  console.error(e.message); // "Можно указать только один из параметров: numFmtId или formatCode."\r
}\r
\r
// Ошибка: не указано ничего\r
try {\r
  fInstallFormatCodeXlsx({});\r
} catch (e) {\r
  console.error(e.message); // "Необходимо указать либо numFmtId, либо formatCode."\r
}
`})}),`
`,e.jsx(d.hr,{})]})}function f(r={}){const{wrapper:d}={...n(),...r.components};return d?e.jsx(d,{...r,children:e.jsx(l,{...r})}):l(r)}export{f as default};
