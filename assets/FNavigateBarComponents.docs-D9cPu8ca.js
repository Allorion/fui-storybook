import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as n}from"./index-D7CuHrhf.js";import"./index-DwoY1sTV.js";import{M as r}from"./index-DEYUkSjZ.js";import"./index-yBjzXJbu.js";import"./index-DY-snNUy.js";import"./preview-hnw76WLk.js";import"./iframe-DaA4mqxY.js";import"./DocsRenderer-CFRXHY34-CFVtM4HX.js";import"./client-CDUMOAsi.js";import"./index-fNjTmf9T.js";import"./index-xMzmejw-.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function s(i){const d={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Material/FNavigateBarComponents"}),`
`,e.jsx(d.h1,{id:"-компоненты-навигационной-панели",children:"🧭 Компоненты навигационной панели"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsxs(d.p,{children:["Компоненты ",e.jsx(d.code,{children:"FNavigateBar"})," и ",e.jsx(d.code,{children:"FNavigateBarItem"})," для создания навигационных панелей с поддержкой активных состояний и адаптивности."]}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-описание",children:"📝 Описание"}),`
`,e.jsxs(d.p,{children:[e.jsx(d.code,{children:"FNavigateBar"})," и ",e.jsx(d.code,{children:"FNavigateBarItem"})," — компоненты для создания навигационных панелей с поддержкой активных состояний, адаптивности и кастомизации. Подходят для создания основного меню навигации, боковых панелей и других элементов интерфейса."]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-примеры-использования",children:"💡 Примеры использования"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-ts",children:`// Базовая навигация
<FNavigateBar>
    <Link to="/">
        <FNavigateBarItem activeClass={true}>
            Главная
        </FNavigateBarItem>
    </Link>
    <Link to="/about">
        <FNavigateBarItem activeClass={false}>
            О нас
        </FNavigateBarItem>
    </Link>
</FNavigateBar>

// Навигация с иконками
<FNavigateBar>
    <Link to="/">
        <FNavigateBarItem activeClass={true}>
            <span style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '8px' }}>🏠</span>
                Главная
            </span>
        </FNavigateBarItem>
    </Link>
    <Link to="/about">
        <FNavigateBarItem activeClass={false}>
            <span style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '8px' }}>📝</span>
                Блог
            </span>
        </FNavigateBarItem>
    </Link>
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
`,e.jsxs(d.p,{children:["Компонент ",e.jsx(d.code,{children:"FNavigateBarItem"})," поддерживает все стандартные HTML-пропсы для элемента списка через наследование от ",e.jsx("code",{children:"React.LiHTMLAttributes<HTMLLIElement>"}),".",e.jsx("br",{}),`
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
`]})]})}function N(i={}){const{wrapper:d}={...n(),...i.components};return d?e.jsx(d,{...i,children:e.jsx(s,{...i})}):s(i)}export{N as default};
