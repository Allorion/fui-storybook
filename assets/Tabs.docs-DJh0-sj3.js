import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as i}from"./index-D7CuHrhf.js";import"./index-CMYOpfTh.js";import{M as r}from"./index-Z390mgU5.js";import"./index-yBjzXJbu.js";import"./index-DY-snNUy.js";import"./preview-BvlTsIE_.js";import"./iframe-D1Yk4JAA.js";import"./DocsRenderer-CFRXHY34--djrn93p.js";import"./client-CDUMOAsi.js";import"./index-fNjTmf9T.js";import"./index-xMzmejw-.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function s(n){const d={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Material/FTabs"}),`
`,e.jsx(d.h1,{id:"-компоненты-вкладок",children:"📑 Компоненты вкладок"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsxs(d.p,{children:["Компоненты ",e.jsx(d.code,{children:"FTabs"})," и ",e.jsx(d.code,{children:"FTab"})," для создания системы вкладок с поддержкой горизонтальной и вертикальной ориентации, активных состояний и блокировки."]}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-описание",children:"📝 Описание"}),`
`,e.jsxs(d.p,{children:[e.jsx(d.code,{children:"FTabs"})," и ",e.jsx(d.code,{children:"FTab"})," — компоненты для создания навигационных вкладок с поддержкой различных ориентаций, активных состояний и блокировки. Подходят для организации контента в интерфейсе, навигации по разделам и других сценариев."]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-примеры-использования",children:"💡 Примеры использования"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-ts",children:`// Базовые вкладки
<FTabs>
    <FTab 
        active={activeTab === 'tab1'} 
        onClick={() => setActiveTab('tab1')}
    >
        Вкладка 1
    </FTab>
    <FTab 
        active={activeTab === 'tab2'} 
        onClick={() => setActiveTab('tab2')}
    >
        Вкладка 2
    </FTab>
</FTabs>

// Вертикальные вкладки
<FTabs orientation="vertical">
    <FTab active={activeTab === 'tab1'} onClick={() => setActiveTab('tab1')}>
        Вкладка 1
    </FTab>
    <FTab active={activeTab === 'tab2'} onClick={() => setActiveTab('tab2')}>
        Вкладка 2
    </FTab>
</FTabs>

// Вкладки с иконками
<FTabs>
    <FTab active={activeTab === 'tab1'} onClick={() => setActiveTab('tab1')}>
        <span style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '8px' }}>📊</span>
            Статистика
        </span>
    </FTab>
    <FTab active={activeTab === 'tab2'} onClick={() => setActiveTab('tab2')}>
        <span style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '8px' }}>⚙️</span>
            Настройки
        </span>
    </FTab>
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
`,e.jsxs(d.p,{children:["Компонент ",e.jsx(d.code,{children:"FTab"})," поддерживает все стандартные HTML-пропсы для button через наследование от ",e.jsx("code",{children:"React.ButtonHTMLAttributes<HTMLButtonElement>"}),".",e.jsx("br",{}),`
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
`]})]})}function F(n={}){const{wrapper:d}={...i(),...n.components};return d?e.jsx(d,{...n,children:e.jsx(s,{...n})}):s(n)}export{F as default};
