import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as n}from"./index-Da05a9iP.js";import"./index-D_1bxtLg.js";import{M as s}from"./index-C4GOUl7K.js";import"./index-DEgj3Fem.js";import"./preview-D1dj5soZ.js";import"./iframe-CQfYLJiy.js";import"./DocsRenderer-CFRXHY34-BeeKmW1p.js";import"./client-DBdnbfFq.js";import"./index-DM3MU96Y.js";import"./index-BknSE3li.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function i(r){const d={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Material/FAccordion"}),`
`,e.jsx(d.h1,{id:"-faccordion--аккордеон-для-скрытия-и-показа-контента",children:"🪗 FAccordion — аккордеон для скрытия и показа контента"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsxs(d.p,{children:["Гибкий компонент-аккордеон на основе ",e.jsx(d.code,{children:"<details>"})," и ",e.jsx(d.code,{children:"<summary>"}),", поддерживает цветовые схемы, контролируемое и неконтролируемое состояние, кастомизацию."]}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-описание",children:"📝 Описание"}),`
`,e.jsxs(d.p,{children:[e.jsx(d.code,{children:"FAccordion"})," — это простой и наглядный компонент для скрытия и показа контента. Позволяет управлять цветовой схемой, заголовком, состоянием открытия, а также кастомизировать стили и классы."]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-примеры-использования",children:"💡 Примеры использования"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{children:`<FAccordion title="Подробнее" defaultOpen>\r
  <div>Скрытый текст</div>\r
</FAccordion>\r
\r
<FAccordion variant="alert" title="Внимание!">\r
  <p>Важная информация</p>\r
</FAccordion>\r
\r
<FAccordion\r
  title="Контролируемый аккордеон"\r
  open={isOpen}\r
  onClick={() => setIsOpen(!isOpen)}\r
>\r
  <div>Состояние управляется извне</div>\r
</FAccordion>
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-пропсы",children:"📋 Пропсы"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Проп"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"variant"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"'info' | 'alert' | 'warning'"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Цветовая схема аккордеона (по умолчанию ",e.jsx("code",{children:"info"}),")"]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"title"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Заголовок аккордеона"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"children"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.ReactNode"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Содержимое аккордеона"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"id"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"ID контейнера"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"className"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Пользовательский CSS-класс"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"st"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.CSSProperties"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Инлайновые стили"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"open"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Контролируемое состояние открытия"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"defaultOpen"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Начальное состояние открытия (только при монтировании)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"onClick"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.MouseEventHandler<HTMLDivElement>"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Обработчик клика по заголовку"})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"️-особенности",children:"🛠️ Особенности"}),`
`,e.jsxs("ul",{children:[e.jsxs("li",{children:["Основан на нативных тегах ",e.jsx("code",{children:"<details>"})," и ",e.jsx("code",{children:"<summary>"}),"."]}),e.jsxs("li",{children:["Три цветовые схемы: ",e.jsx("code",{children:"info"}),", ",e.jsx("code",{children:"alert"}),", ",e.jsx("code",{children:"warning"}),"."]}),e.jsx("li",{children:"Поддержка контролируемого и неконтролируемого состояния."}),e.jsxs("li",{children:["Кастомизация через ",e.jsx("code",{children:"st"})," и ",e.jsx("code",{children:"className"}),"."]}),e.jsx("li",{children:"Лёгкая интеграция в любые интерфейсы."})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"ℹ️-советы",children:"ℹ️ Советы"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:["Для управления состоянием используйте пропсы ",e.jsx("code",{children:"open"})," и ",e.jsx("code",{children:"onClick"}),"."]}),`
`,e.jsxs(d.li,{children:["Для начального открытия — ",e.jsx("code",{children:"defaultOpen"}),"."]}),`
`,e.jsxs(d.li,{children:["Для выделения используйте ",e.jsx("code",{children:"variant"})," (",e.jsx("code",{children:"info"}),", ",e.jsx("code",{children:"alert"}),", ",e.jsx("code",{children:"warning"}),")."]}),`
`,e.jsxs(d.li,{children:["Для кастомизации — ",e.jsx("code",{children:"st"})," и ",e.jsx("code",{children:"className"}),"."]}),`
`]})]})}function u(r={}){const{wrapper:d}={...n(),...r.components};return d?e.jsx(d,{...r,children:e.jsx(i,{...r})}):i(r)}export{u as default};
