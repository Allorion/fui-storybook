import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-BoUPaUI-.js";import"./index-C4WDdPNa.js";import{M as n}from"./index-BeD5WKwP.js";import"./index-B3j06Xw8.js";import"./preview-CyskmP41.js";import"./iframe-CiD263zY.js";import"./DocsRenderer-CFRXHY34-BIXY-whe.js";import"./client-DOawrHdJ.js";import"./index-DW0t0JKo.js";import"./index-D_ywfbVi.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";function i(r){const d={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n,{title:"Material/FNavigateBarComponents"}),`
`,e.jsx(d.h1,{id:"-компоненты-навигационной-панели",children:"🧭 Компоненты навигационной панели"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsxs(d.p,{children:["Компоненты ",e.jsx(d.code,{children:"FNavigateBar"})," и ",e.jsx(d.code,{children:"FNavigateBarItem"})," для создания навигационных панелей с поддержкой активных состояний и адаптивности."]}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-описание",children:"📝 Описание"}),`
`,e.jsxs(d.p,{children:[e.jsx(d.code,{children:"FNavigateBar"})," и ",e.jsx(d.code,{children:"FNavigateBarItem"})," — компоненты для создания навигационных панелей с поддержкой активных состояний, адаптивности и кастомизации. Подходят для создания основного меню навигации, боковых панелей и других элементов интерфейса."]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-примеры-использования",children:"💡 Примеры использования"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-ts",children:`// Базовая навигация\r
<FNavigateBar>\r
    <Link to="/">\r
        <FNavigateBarItem activeClass={true}>\r
            Главная\r
        </FNavigateBarItem>\r
    </Link>\r
    <Link to="/about">\r
        <FNavigateBarItem activeClass={false}>\r
            О нас\r
        </FNavigateBarItem>\r
    </Link>\r
</FNavigateBar>\r
\r
// Навигация с иконками\r
<FNavigateBar>\r
    <Link to="/">\r
        <FNavigateBarItem activeClass={true}>\r
            <span style={{ display: 'flex', alignItems: 'center' }}>\r
                <span style={{ marginRight: '8px' }}>🏠</span>\r
                Главная\r
            </span>\r
        </FNavigateBarItem>\r
    </Link>\r
    <Link to="/about">\r
        <FNavigateBarItem activeClass={false}>\r
            <span style={{ display: 'flex', alignItems: 'center' }}>\r
                <span style={{ marginRight: '8px' }}>📝</span>\r
                Блог\r
            </span>\r
        </FNavigateBarItem>\r
    </Link>\r
</FNavigateBar>
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-пропсы",children:"📋 Пропсы"}),`
`,e.jsx(d.h3,{id:"fnavigatebar",children:"FNavigateBar"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Проп"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"children"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.ReactNode"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Дочерние элементы (пункты меню)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"id"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"HTML ID компонента"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"className"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Кастомный CSS класс"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"st"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.CSSProperties"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Инлайновые стили для элемента nav"})]})]})]}),`
`,e.jsx(d.h3,{id:"fnavigatebaritem",children:"FNavigateBarItem"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Проп"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"activeClass"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Флаг активного состояния пункта меню"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"route"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Путь или имя маршрута"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"children"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.ReactNode"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Контент пункта меню"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"className"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Кастомный CSS класс"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"st"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.CSSProperties"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Инлайновые стили"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"id"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"HTML ID элемента"})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-стандартные-пропсы",children:"🧩 Стандартные пропсы"}),`
`,e.jsxs(d.p,{children:["Компонент ",e.jsx(d.code,{children:"FNavigateBarItem"})," поддерживает все стандартные HTML-пропсы для элемента списка через наследование от ",e.jsx("code",{children:"React.LiHTMLAttributes<HTMLLIElement>"}),".",e.jsx("br",{}),`\r
Это позволяет использовать такие атрибуты, как `,e.jsx("code",{children:"tabIndex"}),", ",e.jsx("code",{children:"aria-"}),", ",e.jsx("code",{children:"data-"})," и другие."]}),`
`,e.jsx(d.p,{children:e.jsx(d.strong,{children:"Примеры:"})}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{children:`<FNavigateBarItem tabIndex={-1} aria-label="Главная" data-testid="nav-item" />
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"️-особенности",children:"🛠️ Особенности"}),`
`,e.jsxs("ul",{children:[e.jsxs("li",{children:["Семантическая разметка с использованием ",e.jsx("code",{children:"<nav>"})," и ",e.jsx("code",{children:"<ul>/<li>"})]}),e.jsx("li",{children:"Поддержка активных состояний"}),e.jsx("li",{children:"Адаптивность через компоненты сетки"}),e.jsx("li",{children:"Возможность кастомизации через CSS классы и инлайновые стили"}),e.jsx("li",{children:"Поддержка иконок и сложного контента в пунктах меню"}),e.jsxs("li",{children:["Интеграция с роутингом через компонент ",e.jsx("code",{children:"Link"})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"ℹ️-советы",children:"ℹ️ Советы"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:["Для активного состояния используйте ",e.jsxs("code",{children:["activeClass=",!0]})]}),`
`,e.jsx(d.li,{children:"Для сложного контента (иконки, текст) используйте вложенные элементы"}),`
`,e.jsxs(d.li,{children:["Для кастомизации стилей используйте ",e.jsx("code",{children:"className"})," или ",e.jsx("code",{children:"st"})]}),`
`,e.jsxs(d.li,{children:["Для интеграции с роутингом оборачивайте ",e.jsx("code",{children:"FNavigateBarItem"})," в ",e.jsx("code",{children:"Link"})]}),`
`]})]})}function v(r={}){const{wrapper:d}={...s(),...r.components};return d?e.jsx(d,{...r,children:e.jsx(i,{...r})}):i(r)}export{v as default};
