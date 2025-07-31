import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as i}from"./index-D7CuHrhf.js";import"./index-DvmIYu9Y.js";import{M as l}from"./index-D4y8zVdQ.js";import"./index-yBjzXJbu.js";import"./index-DY-snNUy.js";import"./preview-DwuH6bgd.js";import"./iframe-ClAc901l.js";import"./DocsRenderer-CFRXHY34-CELNXIGz.js";import"./client-CDUMOAsi.js";import"./index-fNjTmf9T.js";import"./index-xMzmejw-.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function s(n){const d={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Material/FMenuLinks"}),`
`,e.jsx(d.h1,{id:"-fmenulinks--компонент-навигационного-меню",children:"🔗 FMenuLinks — компонент навигационного меню"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsx(d.p,{children:"Компонент для создания навигационного меню с поддержкой активных и неактивных ссылок, а также возможностью отключения отдельных ссылок."}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-описание",children:"📝 Описание"}),`
`,e.jsxs(d.p,{children:[e.jsx(d.code,{children:"FMenuLinks"})," — это компонент для создания навигационного меню, который предоставляет:"]}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:["Автоматическое добавление класса ",e.jsx(d.code,{children:"link"})," к дочерним элементам"]}),`
`,e.jsx(d.li,{children:"Поддержку активных и неактивных ссылок через классы"}),`
`,e.jsxs(d.li,{children:["Возможность отключения отдельных ссылок через пропс ",e.jsx(d.code,{children:"disabled"})]}),`
`,e.jsx(d.li,{children:"Возможность кастомизации через CSS-классы и стили"}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-примеры-использования",children:"💡 Примеры использования"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{children:`// Базовое использование
<FMenuLinks>
  <a href="/">Главная</a>
  <a href="/about">О нас</a>
  <a href="/contacts">Контакты</a>
</FMenuLinks>

// С отключенными ссылками
<FMenuLinks disabled={[1]}>
  <a href="/">Главная</a>
  <a href="/about">О нас</a> {/* будет отключена */}
  <a href="/contacts">Контакты</a>
</FMenuLinks>

// С пользовательскими классами и стилями
<FMenuLinks className="custom-menu" st={{ margin: '1rem 0' }}>
  <a href="/">Главная</a>
  <a href="/about" className="active">О нас</a>
  <a href="/contacts" className="disabled">Контакты</a>
</FMenuLinks>
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-пропсы",children:"📋 Пропсы"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Проп"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"children"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"ReactNode"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Дочерние элементы (обычно ссылки)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"className"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Дополнительный CSS-класс"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"st"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"CSSProperties"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Инлайновые стили"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"id"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Уникальный идентификатор"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"disabled"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"number[]"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Массив индексов ссылок, которые должны быть отключены"})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"️-особенности",children:"🛠️ Особенности"}),`
`,e.jsxs("ul",{children:[e.jsxs("li",{children:["Автоматическое добавление класса ",e.jsx(d.code,{children:"link"})," к дочерним элементам"]}),e.jsx("li",{children:"Поддержка активных и неактивных ссылок через классы"}),e.jsxs("li",{children:["Возможность отключения отдельных ссылок через пропс ",e.jsx(d.code,{children:"disabled"})]}),e.jsx("li",{children:"Визуальная индикация отключенного состояния (серый цвет, пониженная прозрачность)"}),e.jsx("li",{children:"Автоматическое предотвращение кликов по отключенным ссылкам"}),e.jsx("li",{children:"Возможность кастомизации через CSS-классы и стили"}),e.jsx("li",{children:"Семантическая разметка для доступности"})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"ℹ️-советы",children:"ℹ️ Советы"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:["Используйте класс ",e.jsx(d.code,{children:"active"})," для текущей страницы"]}),`
`,e.jsxs(d.li,{children:["Используйте класс ",e.jsx(d.code,{children:"disabled"})," для неактивных ссылок"]}),`
`,e.jsxs(d.li,{children:["Для программного отключения ссылок используйте пропс ",e.jsx(d.code,{children:"disabled"})]}),`
`,e.jsxs(d.li,{children:["Добавляйте пользовательские классы через ",e.jsx(d.code,{children:"className"})]}),`
`,e.jsxs(d.li,{children:["Используйте ",e.jsx(d.code,{children:"st"})," для инлайновых стилей"]}),`
`,e.jsx(d.li,{children:"Комбинируйте с другими компонентами для создания сложных навигационных структур"}),`
`,e.jsxs(d.li,{children:["При отключении ссылок через ",e.jsx(d.code,{children:"disabled"})," не нужно добавлять класс ",e.jsx(d.code,{children:"disabled"})," вручную"]}),`
`]})]})}function y(n={}){const{wrapper:d}={...i(),...n.components};return d?e.jsx(d,{...n,children:e.jsx(s,{...n})}):s(n)}export{y as default};
