import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-BoUPaUI-.js";import"./index-fcQHl9ix.js";import{M as i}from"./index-A0bqngQt.js";import"./index-B3j06Xw8.js";import"./preview-CbzENFjx.js";import"./iframe-5p6aeynk.js";import"./DocsRenderer-CFRXHY34-BL_c8XNk.js";import"./client-DOawrHdJ.js";import"./index-DW0t0JKo.js";import"./index-D_ywfbVi.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";function r(l){const d={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Material/FTableComponents"}),`
`,e.jsx(d.h1,{id:"-компоненты-таблицы",children:"📊 Компоненты таблицы"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsx(d.p,{children:"Компоненты для создания структурированных таблиц с поддержкой заголовков, тела, строк, ячеек и подвала."}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-описание",children:"📝 Описание"}),`
`,e.jsx(d.p,{children:"Компоненты таблицы предоставляют гибкую и семантически правильную структуру для отображения табличных данных. Включают в себя компоненты для создания заголовков, тела таблицы, строк, ячеек и подвала."}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-примеры-использования",children:"💡 Примеры использования"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-ts",children:`// Базовая таблица\r
<FTable>\r
    <FTableHead>\r
        <FTableRow>\r
            <FTableHeaderCell>Заголовок 1</FTableHeaderCell>\r
            <FTableHeaderCell>Заголовок 2</FTableHeaderCell>\r
        </FTableRow>\r
    </FTableHead>\r
    <FTableBody>\r
        <FTableRow>\r
            <FTableDataCell>Данные 1</FTableDataCell>\r
            <FTableDataCell>Данные 2</FTableDataCell>\r
        </FTableRow>\r
    </FTableBody>\r
    <FTableFooter>\r
        <FTableRow>\r
            <FTableDataCell>Итого</FTableDataCell>\r
            <FTableDataCell>100</FTableDataCell>\r
        </FTableRow>\r
    </FTableFooter>\r
</FTable>\r
\r
// Таблица с кастомизацией\r
<FTable className="custom-table">\r
    <FTableHead>\r
        <FTableRow>\r
            <FTableHeaderCell\r
                className="header-cell"\r
                st={{ backgroundColor: '#f5f5f5' }}\r
            >\r
                Название\r
            </FTableHeaderCell>\r
            <FTableHeaderCell>Количество</FTableHeaderCell>\r
        </FTableRow>\r
    </FTableHead>\r
    <FTableBody>\r
        <FTableRow>\r
            <FTableDataCell>Товар 1</FTableDataCell>\r
            <FTableDataCell>10</FTableDataCell>\r
        </FTableRow>\r
    </FTableBody>\r
</FTable>
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-пропсы",children:"📋 Пропсы"}),`
`,e.jsx(d.h3,{id:"ftable",children:"FTable"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Проп"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Тип"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Описание"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"children"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.ReactNode"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Дочерние элементы таблицы"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"id"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"HTML ID таблицы"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"className"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Кастомный CSS класс"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"st"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.CSSProperties"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Инлайновые стили"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"overflowX"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:'"visible" | "hidden" | "clip" | "scroll" | "auto"'})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:["Управление горизонтальным переполнением контейнера таблицы."," ",`\r
`,e.jsx("b",{children:"По умолчанию:"}),' "auto"']})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"overflowY"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:'"visible" | "hidden" | "clip" | "scroll" | "auto"'})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:["Управление вертикальным переполнением контейнера таблицы."," ",`\r
`,e.jsx("b",{children:"По умолчанию:"}),' "auto"']})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"width"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"number | string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Ширина таблицы."})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"minWidth"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"number | string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:["Минимальная ширина таблицы (например, ",e.jsx("code",{children:"'max-content'"}),", ",e.jsx("code",{children:"'100%'"}),", ",e.jsx("code",{children:"1200"}),")."]})})]})]})]}),`
`,e.jsx(d.h3,{id:"ftablehead",children:"FTableHead"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Проп"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Тип"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Описание"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"children"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.ReactNode"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Дочерние элементы заголовка"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"className"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Кастомный CSS класс"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"st"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.CSSProperties"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Инлайновые стили"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"textAlignment"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:'"left" | "right" | "center" | "justify"'})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:["Выравнивание текста внутри заголовка таблицы. ",e.jsx("b",{children:"По умолчанию:"})," ",`\r
"left"`]})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"isSticky"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:['Флаг, указывающий, должен ли заголовок быть "липким" (sticky).'," ",`\r
`,e.jsx("b",{children:"По умолчанию:"})," false"]})})]})]})]}),`
`,e.jsx(d.h3,{id:"ftablebody",children:"FTableBody"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Проп"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Тип"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Описание"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"children"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.ReactNode"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Дочерние элементы тела таблицы"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"className"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Кастомный CSS класс"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"st"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.CSSProperties"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Инлайновые стили"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"textAlignment"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"'left' | 'right' | 'center' | 'justify'"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:["Выравнивание текста внутри тела таблицы. ",e.jsx("b",{children:"По умолчанию:"})," 'left'"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"tableWrapperRef"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.RefObject<HTMLDivElement>"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Ref для родительского контейнера с прокруткой (для виртуализации)."})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"visibleRowCount"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"number"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:`Минимальное количество отрисованных строк; окно дополняется до высоты контейнера с запасом. Если не указано —\r
виртуализация отключена.`})})]})]})]}),`
`,e.jsx(d.h3,{id:"ftablerow",children:"FTableRow"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Проп"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Тип"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Описание"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"children"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.ReactNode"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Дочерние элементы строки"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"className"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Кастомный CSS класс"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"st"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.CSSProperties"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Инлайновые стили"})})]})]})]}),`
`,e.jsx(d.h3,{id:"ftableheadercell",children:"FTableHeaderCell"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Проп"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Тип"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Описание"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"children"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.ReactNode"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Контент ячейки заголовка"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"className"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Кастомный CSS класс"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"st"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.CSSProperties"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Инлайновые стили"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"row"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"number"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Значение rowspan для объединения строк."})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"col"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"number"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Значение colspan для объединения столбцов."})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"textAlignment"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"'left' | 'right' | 'center' | 'justify'"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:["Выравнивание текста внутри ячейки. ",e.jsx("b",{children:"По умолчанию:"})," 'left'"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"width"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"number | string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:["Ширина ячейки. При указании фиксированного значения (число или px) автоматически предотвращает сжатие колонки, дублируясь в ",e.jsx("code",{children:"minWidth"}),"."]})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"minWidth"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"number | string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Минимальная ширина ячейки (гарантирует сохранение размера при переполнении таблицы)."})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"maxWidth"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"number | string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Максимальная ширина ячейки."})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"height"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"number | string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Высота ячейки."})})]})]})]}),`
`,e.jsx(d.h3,{id:"ftabledatacell",children:"FTableDataCell"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Проп"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Тип"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Описание"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"children"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.ReactNode"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Контент ячейки данных"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"className"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Кастомный CSS класс"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"st"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.CSSProperties"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Инлайновые стили"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"row"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"number"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Значение rowspan для объединения строк."})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"col"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"number"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Значение colspan для объединения столбцов."})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"textAlignment"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"'left' | 'right' | 'center' | 'justify'"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:["Выравнивание текста внутри ячейки. ",e.jsx("b",{children:"По умолчанию:"})," 'left'"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"width"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"number | string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:["Ширина ячейки. При указании фиксированного значения (число или px) автоматически дублируется в ",e.jsx("code",{children:"minWidth"}),"."]})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"minWidth"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"number | string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Минимальная ширина ячейки."})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"maxWidth"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"number | string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Максимальная ширина ячейки."})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"height"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"number | string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Высота ячейки."})})]})]})]}),`
`,e.jsx(d.h3,{id:"ftablefooter",children:"FTableFooter"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Проп"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Тип"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Описание"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"children"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.ReactNode"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Дочерние элементы подвала"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"className"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Кастомный CSS класс"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"st"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.CSSProperties"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Инлайновые стили"})})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-стандартные-пропсы",children:"🧩 Стандартные пропсы"}),`
`,e.jsxs(d.p,{children:["Все компоненты таблицы поддерживают стандартные HTML-пропсы для соответствующих элементов через наследование от соответствующих интерфейсов React.",e.jsx("br",{}),`\r
Это позволяет использовать такие атрибуты, как `,e.jsx("code",{children:"tabIndex"}),", ",e.jsx("code",{children:"aria-"}),", ",e.jsx("code",{children:"data-"})," и другие."]}),`
`,e.jsx(d.p,{children:e.jsx(d.strong,{children:"Примеры:"})}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{children:`<FTable role="grid" aria-label="Таблица данных">\r
<FTableRow tabIndex={0} aria-selected="true">\r
<FTableDataCell data-testid="cell-1-1">
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"️-особенности",children:"🛠️ Особенности"}),`
`,e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(d.p,{children:"Семантическая разметка с использованием соответствующих HTML-элементов"})}),e.jsx("li",{children:"Поддержка заголовков, тела и подвала таблицы"}),e.jsx("li",{children:"Возможность кастомизации через CSS классы и инлайновые стили"}),e.jsx("li",{children:"Поддержка сложного контента в ячейках"}),e.jsx("li",{children:"Доступность через ARIA-атрибуты"}),e.jsx("li",{children:"Гибкая структура для различных сценариев использования"})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"ℹ️-советы",children:"ℹ️ Советы"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:["Используйте ",e.jsx("code",{children:"FTableHead"})," для заголовков таблицы"]}),`
`,e.jsxs(d.li,{children:["Используйте ",e.jsx("code",{children:"FTableBody"})," для основного содержимого"]}),`
`,e.jsxs(d.li,{children:["Используйте ",e.jsx("code",{children:"FTableFooter"})," для итогов и дополнительной информации"]}),`
`,e.jsxs(d.li,{children:["Для стилизации используйте ",e.jsx("code",{children:"className"})," или ",e.jsx("code",{children:"st"})]}),`
`,e.jsx(d.li,{children:"Для доступности добавляйте соответствующие ARIA-атрибуты"}),`
`,e.jsx(d.li,{children:"Для сложного контента в ячейках используйте вложенные компоненты"}),`
`]}),`
`,e.jsx(d.h2,{id:"сокращение-текста-и-действия",children:"Сокращение текста и действия"}),`
`,e.jsx(d.p,{children:"Старые пропсы и HTML-атрибуты сохранены. Без новых пропсов текст не сокращается."}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`import { FTable, FTableBody, FTableRow, FTableDataCell, FTableActions } from 'fui-material';\r
\r
<FTable layout="fixed">\r
  <FTableBody truncateAt={60}>\r
    <FTableRow>\r
      <FTableDataCell>{description}</FTableDataCell>\r
      <FTableDataCell truncate={false}>{registrationNumber}</FTableDataCell>\r
      <FTableDataCell>\r
        <FTableActions aria-label="Действия с записью">\r
          <button type="button" onClick={edit}>Редактировать</button>\r
          <hr />\r
          <button type="button" data-danger onClick={remove}>Удалить</button>\r
        </FTableActions>\r
      </FTableDataCell>\r
    </FTableRow>\r
  </FTableBody>\r
</FTable>
`})}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:[e.jsx(d.code,{children:"FTableBody.truncateAt?: number"})," — положительный лимит символов. Дробное значение округляется вниз; ноль, отрицательные и нечисловые значения отключают автоматическое сокращение."]}),`
`,e.jsxs(d.li,{children:[e.jsx(d.code,{children:"FTableDataCell.truncate?: boolean"})," — ",e.jsx(d.code,{children:"true"})," включает сокращение с лимитом тела или 80 символов; ",e.jsx(d.code,{children:"false"})," отключает его для конкретной ячейки. Если пропс не передан, применяется лимит тела."]}),`
`,e.jsxs(d.li,{children:["Сокращаются строки и числа в ",e.jsx(d.code,{children:"children"}),"; JSX, ссылки, кнопки и компоненты остаются без изменений. Для сложного содержимого передайте текст отдельной ячейкой."]}),`
`,e.jsxs(d.li,{children:["Текст раскрывается и сворачивается нажатием на него, Enter или пробелом. Анимации учитывают системную настройку уменьшения движения. ",e.jsx(d.code,{children:'layout="fixed"'})," помогает сохранять ширину столбцов при раскрытии."]}),`
`,e.jsx(d.li,{children:"При наведении или фокусе на сокращённом тексте показывается подсказка с полным значением. Она выводится поверх контейнера таблицы, ограничена размером окна и допускает прокрутку длинного текста. Escape закрывает подсказку; раскрытие ячейки скрывает её."}),`
`,e.jsxs(d.li,{children:[e.jsx(d.code,{children:"FTableActions"})," принимает атрибуты кнопки (",e.jsx(d.code,{children:"disabled"}),", ",e.jsx(d.code,{children:"aria-label"}),", ",e.jsx(d.code,{children:"className"}),", ",e.jsx(d.code,{children:"style"}),", ",e.jsx(d.code,{children:"onClick"}),") и произвольный ",e.jsx(d.code,{children:"children"}),". Используйте обычные кнопки и ссылки; их выбор закрывает панель. ",e.jsx(d.code,{children:"event.preventDefault()"})," в обработчике действия оставляет её открытой."]}),`
`,e.jsx(d.li,{children:"Меню использует нативный Popover API: нужны браузеры с его поддержкой. Оно не обрезается контейнером таблицы, закрывается по Escape и нажатию снаружи. Tab перемещает фокус по действиям."}),`
`]}),`
`,e.jsxs(d.p,{children:["Примеры Storybook: ",e.jsx(d.code,{children:"CompactGrid"}),", ",e.jsx(d.code,{children:"CellTruncation"}),", ",e.jsx(d.code,{children:"VirtualizedGrid"}),". В ",e.jsx(d.code,{children:"CompactGrid"})," есть проверка раскрытия, клавиатуры, исключения из сокращения и выбора действия."]}),`
`,e.jsx(d.h2,{id:"поиск-и-сортировка",children:"Поиск и сортировка"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`<FTable searchable>\r
  <FTableHead>\r
    <FTableRow>\r
      <FTableHeaderCell sortKey="name">Название</FTableHeaderCell>\r
      <FTableHeaderCell sortKey="amount">Сумма</FTableHeaderCell>\r
      <FTableHeaderCell sortKey="date">Дата</FTableHeaderCell>\r
    </FTableRow>\r
  </FTableHead>\r
  <FTableBody visibleRowCount={30}>\r
    {items.map(item => (\r
      <FTableRow key={item.id}>\r
        <FTableDataCell sortKey="name">{item.name}</FTableDataCell>\r
        <FTableDataCell sortKey="amount" sortValue={item.amount}>\r
          {item.amount.toLocaleString('ru-RU')} ₽\r
        </FTableDataCell>\r
        <FTableDataCell sortKey="date" sortValue={item.timestamp}>\r
          {item.formattedDate}\r
        </FTableDataCell>\r
      </FTableRow>\r
    ))}\r
  </FTableBody>\r
</FTable>
`})}),`
`,e.jsxs(d.p,{children:[`| Компонент | Проп | Поведение |\r
| --- | --- | --- |\r
| `,e.jsx(d.code,{children:"FTable"})," | ",e.jsx(d.code,{children:"searchable?: boolean"})," | Показывает поиск над таблицей. По умолчанию ",e.jsx(d.code,{children:"false"}),`; кнопки фильтров нет. |\r
| `,e.jsx(d.code,{children:"FTableHeaderCell"})," | ",e.jsx(d.code,{children:"sortKey?: string"}),` | Непустой ключ включает сортировку по соответствующим ячейкам. Без ключа заголовок обычный. |\r
| `,e.jsx(d.code,{children:"FTableDataCell"})," | ",e.jsx(d.code,{children:"sortKey?: string"}),` | Совпадает с ключом заголовка, включая многоуровневую шапку. |\r
| `,e.jsx(d.code,{children:"FTableDataCell"})," | ",e.jsx(d.code,{children:"sortValue?: string \\| number"}),` | Значение сортировки вместо текста: число для сумм, timestamp для дат, строка для названий. |\r
| `,e.jsx(d.code,{children:"FTableDataCell"})," | ",e.jsx(d.code,{children:"searchValue?: string"})," | Заменяет текст ячейки в поиске. Используйте для пользовательских компонентов; ",e.jsx(d.code,{children:'""'})," исключает ячейку из поиска. |"]}),`
`,e.jsx(d.h3,{id:"поведение",children:"Поведение"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:[e.jsx(d.code,{children:"sortKey"})," — уникальное имя столбца, ",e.jsx(d.strong,{children:"не тип данных"}),". Например, ",e.jsx(d.code,{children:"quantity"})," и ",e.jsx(d.code,{children:"price"})," должны быть разными ключами даже для двух числовых столбцов. Один и тот же ключ указывается в заголовке и во всех ячейках соответствующего столбца. Без ключей на ячейках значения для сортировки не определены. Числовое значение передавайте через ",e.jsx(d.code,{children:"sortValue={item.price}"}),"."]}),`
`,e.jsx(d.li,{children:"Поиск выполняется сразу при вводе, без учёта регистра и повторяющихся пробелов. Escape и встроенная очистка поля сбрасывают запрос. При отсутствии совпадений отображается «Ничего не найдено»."}),`
`,e.jsxs(d.li,{children:["Поиск охватывает ",e.jsx(d.strong,{children:"все переданные строки"}),", включая скрытые виртуализацией и сокращённые значения. Нужна непрерывная подстрока, а не отдельные слова в произвольном порядке. Текст разных ячеек разделяется пробелом."]}),`
`,e.jsxs(d.li,{children:["Из обычной HTML-разметки (",e.jsx(d.code,{children:"span"}),", ",e.jsx(d.code,{children:"strong"}),", ссылки) текст извлекается автоматически. Содержимое пользовательских компонентов, кнопок и меню действий не индексируется: передайте ",e.jsx(d.code,{children:"searchValue"})," и, при необходимости, ",e.jsx(d.code,{children:"sortValue"}),". Для собственных компонентов строк нужны явные ",e.jsx(d.code,{children:"FTableRow"})," / ",e.jsx(d.code,{children:"FTableDataCell"})," в ",e.jsx(d.code,{children:"children"}),"; React-компоненты не вызываются для извлечения данных."]}),`
`,e.jsxs(d.li,{children:["Клик по заголовку переключает: возрастание → убывание → исходный порядок. Enter и пробел работают так же. Направление обозначено стрелкой и ",e.jsx(d.code,{children:"aria-sort"}),"."]}),`
`,e.jsxs(d.li,{children:["Строки сравниваются с учётом русского алфавита и чисел внутри текста (",e.jsx(d.code,{children:"Объект 2"})," перед ",e.jsx(d.code,{children:"Объект 10"}),"). Числовые ",e.jsx(d.code,{children:"sortValue"})," сравниваются как числа. Форматированные суммы и даты автоматически не разбираются. Пустые значения всегда в конце; равные сохраняют исходный порядок."]}),`
`,e.jsxs(d.li,{children:["Поиск и сортировка выполняются отдельно внутри каждого ",e.jsx(d.code,{children:"FTableBody"}),", до виртуализации. ",e.jsx(d.code,{children:"FTableFooter"})," остаётся без изменений: итоговые суммы при необходимости пересчитывайте в приложении."]}),`
`,e.jsxs(d.li,{children:["Строки, связанные через ",e.jsx(d.code,{children:"row"})," / ",e.jsx(d.code,{children:"rowSpan"}),", обрабатываются одной группой: совпадение сохраняет всю группу, сортировка использует первое значение с соответствующим ",e.jsx(d.code,{children:"sortKey"}),". Строка-разделитель, у которой все ячейки имеют ",e.jsx(d.code,{children:"col"})," / ",e.jsx(d.code,{children:"colSpan"})," больше 1 и не имеют ",e.jsx(d.code,{children:"sortKey"}),", остаётся перед своим разделом. Сортировка не перемещает записи между разделами."]}),`
`,e.jsxs(d.li,{children:["При ",e.jsx(d.code,{children:"rowSpan"})," виртуализация отключается для всего тела: разрезать объединённые ячейки границей окна нельзя. Для больших плоских таблиц используйте ",e.jsx(d.code,{children:"visibleRowCount"}),"; задавайте строкам стабильный ",e.jsx(d.code,{children:"key={item.id}"}),". Поиск и сортировка возвращают прокрутку к началу результатов."]}),`
`,e.jsx(d.li,{children:"Обработка локальная: поиск не загружает отсутствующие на клиенте данные с сервера."}),`
`]}),`
`,e.jsxs(d.p,{children:["Storybook: ",e.jsx(d.code,{children:"VirtualizedGrid"})," — 10 000 строк, поиск, сортировка и заполнение окна даже при ",e.jsx(d.code,{children:"visibleRowCount={3}"}),"."]}),`
`,e.jsx(d.p,{children:"Проверка логики без UI (Node 24):"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-sh",children:`node --experimental-strip-types src/material/TableComponents/tableRows.check.mjs
`})}),`
`,e.jsx(d.h2,{id:"независимые-строки-и-объединение-ячеек",children:"Независимые строки и объединение ячеек"}),`
`,e.jsxs(d.p,{children:[e.jsx(d.code,{children:"row={2}"})," означает HTML ",e.jsx(d.code,{children:"rowSpan={2}"}),`: ячейка занимает текущую и следующую строки.\r
Для двух самостоятельных записей передавайте все ячейки в каждой строке `,e.jsxs(d.strong,{children:["без ",e.jsx(d.code,{children:"row={2}"})]}),`.\r
В многоуровневой шапке `,e.jsx(d.code,{children:"row={2}"})," при этом можно оставить."]}),`
`,e.jsx(d.p,{children:"Для одной записи с двумя участками повторяющиеся ячейки находятся только в первой строке:"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`<FTableBody>\r
  <FTableRow>\r
    <FTableDataCell row={2}>1</FTableDataCell>\r
    <FTableDataCell row={2}><FTableActions><button>Редактировать</button></FTableActions></FTableDataCell>\r
    <FTableDataCell row={2}>Регистрационный номер</FTableDataCell>\r
    <FTableDataCell>Проект</FTableDataCell>\r
    <FTableDataCell>Первый участок</FTableDataCell>\r
  </FTableRow>\r
  <FTableRow>\r
    <FTableDataCell>Проект</FTableDataCell>\r
    <FTableDataCell>Второй участок</FTableDataCell>\r
  </FTableRow>\r
</FTableBody>
`})}),`
`,e.jsx(d.p,{children:"Меню действий изначально скрыто и открывается по кнопке «⋯»; оно не добавляет столбцы таблице."}),`
`,e.jsx(d.h3,{id:"виртуализация-больших-таблиц",children:"Виртуализация больших таблиц"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:[e.jsx(d.code,{children:"visibleRowCount"})," задаёт минимум, а не жёсткий предел: отрисовывается всё видимое окно и три запасные строки с каждой стороны."]}),`
`,e.jsx(d.li,{children:"Поиск первой видимой строки использует двоичный поиск по накопленным высотам. Высоты учитывают раскрытие текста и пересчитываются при изменении ширины контейнера."}),`
`,e.jsx(d.li,{children:"Обычный ререндер родителя не возвращает прокрутку к началу. Поиск и смена сортировки возвращают."}),`
`,e.jsx(d.li,{children:"Кеш высот удалённых записей очищается. Используйте стабильные ключи строк."}),`
`,e.jsxs(d.li,{children:[e.jsx(d.code,{children:"FTable"})," передаёт ссылку на контейнер автоматически; без контейнера или при ",e.jsx(d.code,{children:"rowSpan"})," тело отображается целиком."]}),`
`]})]})}function F(l={}){const{wrapper:d}={...s(),...l.components};return d?e.jsx(d,{...l,children:e.jsx(r,{...l})}):r(l)}export{F as default};
