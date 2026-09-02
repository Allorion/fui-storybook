import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-BoUPaUI-.js";import"./index-Dy2zwCAv.js";import{M as i}from"./index-DNcqRsgG.js";import"./index-B3j06Xw8.js";import"./preview-CfSYVkus.js";import"./iframe-D70twm1l.js";import"./DocsRenderer-CFRXHY34-76to6zf-.js";import"./client-DOawrHdJ.js";import"./index-DW0t0JKo.js";import"./index-D_ywfbVi.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";function n(r){const d={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Material/FTabs"}),`
`,e.jsx(d.h1,{id:"-компоненты-вкладок",children:"📑 Компоненты вкладок"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsxs(d.p,{children:["Компоненты ",e.jsx(d.code,{children:"FTabs"})," и ",e.jsx(d.code,{children:"FTab"})," для создания системы вкладок с поддержкой горизонтальной и вертикальной ориентации, активных состояний и блокировки."]}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-описание",children:"📝 Описание"}),`
`,e.jsxs(d.p,{children:[e.jsx(d.code,{children:"FTabs"})," и ",e.jsx(d.code,{children:"FTab"})," — компоненты для создания навигационных вкладок с поддержкой различных ориентаций, активных состояний и блокировки. Подходят для организации контента в интерфейсе, навигации по разделам и других сценариев."]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-примеры-использования",children:"💡 Примеры использования"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-ts",children:`// Базовые вкладки\r
<FTabs>\r
    <FTab \r
        active={activeTab === 'tab1'} \r
        onClick={() => setActiveTab('tab1')}\r
    >\r
        Вкладка 1\r
    </FTab>\r
    <FTab \r
        active={activeTab === 'tab2'} \r
        onClick={() => setActiveTab('tab2')}\r
    >\r
        Вкладка 2\r
    </FTab>\r
</FTabs>\r
\r
// Вертикальные вкладки\r
<FTabs orientation="vertical">\r
    <FTab active={activeTab === 'tab1'} onClick={() => setActiveTab('tab1')}>\r
        Вкладка 1\r
    </FTab>\r
    <FTab active={activeTab === 'tab2'} onClick={() => setActiveTab('tab2')}>\r
        Вкладка 2\r
    </FTab>\r
</FTabs>\r
\r
// Вкладки с иконками\r
<FTabs>\r
    <FTab active={activeTab === 'tab1'} onClick={() => setActiveTab('tab1')}>\r
        <span style={{ display: 'flex', alignItems: 'center' }}>\r
            <span style={{ marginRight: '8px' }}>📊</span>\r
            Статистика\r
        </span>\r
    </FTab>\r
    <FTab active={activeTab === 'tab2'} onClick={() => setActiveTab('tab2')}>\r
        <span style={{ display: 'flex', alignItems: 'center' }}>\r
            <span style={{ marginRight: '8px' }}>⚙️</span>\r
            Настройки\r
        </span>\r
    </FTab>\r
</FTabs>
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-пропсы",children:"📋 Пропсы"}),`
`,e.jsx(d.h3,{id:"ftabs",children:"FTabs"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Проп"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"children"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.ReactNode"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Дочерние элементы (компоненты FTab)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"id"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"HTML ID контейнера"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"className"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Кастомный CSS класс"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"st"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.CSSProperties"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Инлайновые стили"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"orientation"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"'vertical' | 'horizontal'"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Ориентация вкладок"})]})]})]}),`
`,e.jsx(d.h3,{id:"ftab",children:"FTab"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Проп"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"children"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.ReactNode"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Контент вкладки"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"id"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"HTML ID элемента"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"className"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Кастомный CSS класс"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"st"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.CSSProperties"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Инлайновые стили"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"disabled"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Блокировка вкладки"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"active"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Активное состояние"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"onClick"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.MouseEventHandler"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Обработчик клика"})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-стандартные-пропсы",children:"🧩 Стандартные пропсы"}),`
`,e.jsxs(d.p,{children:["Компонент ",e.jsx(d.code,{children:"FTab"})," поддерживает все стандартные HTML-пропсы для button через наследование от ",e.jsx("code",{children:"React.ButtonHTMLAttributes<HTMLButtonElement>"}),".",e.jsx("br",{}),`\r
Это позволяет использовать такие атрибуты, как `,e.jsx("code",{children:"tabIndex"}),", ",e.jsx("code",{children:"autoFocus"}),", ",e.jsx("code",{children:"aria-"}),", ",e.jsx("code",{children:"data-"})," и другие."]}),`
`,e.jsx(d.p,{children:e.jsx(d.strong,{children:"Примеры:"})}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{children:`<FTab tabIndex={-1} aria-label="Вкладка" data-testid="tab" />
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"️-особенности",children:"🛠️ Особенности"}),`
`,e.jsxs("ul",{children:[e.jsx("li",{children:"Поддержка горизонтальной и вертикальной ориентации"}),e.jsx("li",{children:"Возможность блокировки отдельных вкладок"}),e.jsx("li",{children:"Поддержка активного состояния"}),e.jsx("li",{children:"Возможность кастомизации через CSS классы и инлайновые стили"}),e.jsx("li",{children:"Поддержка иконок и сложного контента во вкладках"}),e.jsxs("li",{children:["Семантическая разметка с использованием ",e.jsx("code",{children:"<button>"})," для вкладок"]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"ℹ️-советы",children:"ℹ️ Советы"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:["Для вертикальной ориентации используйте ",e.jsx("code",{children:'orientation="vertical"'})]}),`
`,e.jsxs(d.li,{children:["Для блокировки вкладки используйте ",e.jsx("code",{children:"disabled"})]}),`
`,e.jsxs(d.li,{children:["Для активного состояния используйте ",e.jsx("code",{children:"active"})]}),`
`,e.jsx(d.li,{children:"Для сложного контента (иконки, текст) используйте вложенные элементы"}),`
`]})]})}function m(r={}){const{wrapper:d}={...s(),...r.components};return d?e.jsx(d,{...r,children:e.jsx(n,{...r})}):n(r)}export{m as default};
