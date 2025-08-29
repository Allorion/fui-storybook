import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as r}from"./index-D7CuHrhf.js";import"./index-B_tDNPrG.js";import{M as s}from"./index-DZcZBAEO.js";import"./index-yBjzXJbu.js";import"./index-DY-snNUy.js";import"./preview-DSSbnTGf.js";import"./iframe-Tp_ypbcz.js";import"./DocsRenderer-CFRXHY34-C9Ugl-C7.js";import"./client-CDUMOAsi.js";import"./index-fNjTmf9T.js";import"./index-xMzmejw-.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function i(n){const d={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Material/FContainer"}),`
`,e.jsx(d.h1,{id:"-fcontainer--адаптивный-контейнер-для-макета",children:"📦 FContainer — адаптивный контейнер для макета"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsx(d.p,{children:"Универсальный контейнер с поддержкой разных максимальных ширин, кастомных стилей и классов. Используется для ограничения ширины контента и создания адаптивных макетов."}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-описание",children:"📝 Описание"}),`
`,e.jsxs(d.p,{children:[e.jsx(d.code,{children:"FContainer"})," — это компонент-контейнер для ограничения ширины контента. Позволяет выбрать один из стандартных размеров (от xs до fluid), а также применить пользовательские стили и классы."]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-примеры-использования",children:"💡 Примеры использования"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{children:`<FContainer maxWidth="container-md">
  <div>Контент внутри контейнера</div>
</FContainer>

<FContainer maxWidth="container-lg" st={{ background: '#f3e5f5', borderRadius: 12, padding: 32 }}>
  <div>Кастомный стиль контейнера</div>
</FContainer>
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-пропсы",children:"📋 Пропсы"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Проп"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"maxWidth"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"'container-xs' | 'container-sm' | 'container-md' | 'container-lg' | 'container-xl' | 'container-xxl' | 'container-fluid'"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Максимальная ширина контейнера (по умолчанию ",e.jsx("code",{children:"container-xs"}),")"]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"children"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.ReactNode"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Вложенный контент"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"className"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Пользовательский CSS-класс"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"st"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.CSSProperties"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Инлайновые стили"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"id"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"ID контейнера"})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"️-особенности",children:"🛠️ Особенности"}),`
`,e.jsxs("ul",{children:[e.jsxs("li",{children:["Адаптивные размеры: от ",e.jsx("code",{children:"container-xs"})," (575px) до ",e.jsx("code",{children:"container-fluid"})," (100%)."]}),e.jsx("li",{children:"Лёгкая интеграция в любые макеты и страницы."}),e.jsxs("li",{children:["Кастомизация через ",e.jsx("code",{children:"st"})," и ",e.jsx("code",{children:"className"}),"."]}),e.jsx("li",{children:"Можно вкладывать любые React-элементы."})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"ℹ️-советы",children:"ℹ️ Советы"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:["Для адаптивных макетов используйте разные значения ",e.jsx("code",{children:"maxWidth"}),"."]}),`
`,e.jsxs(d.li,{children:["Для кастомизации внешнего вида — ",e.jsx("code",{children:"st"})," и ",e.jsx("code",{children:"className"}),"."]}),`
`,e.jsxs(d.li,{children:["Для центрирования контента используйте ",e.jsx("code",{children:"text-align: center"})," или flex/grid внутри контейнера."]}),`
`]})]})}function f(n={}){const{wrapper:d}={...r(),...n.components};return d?e.jsx(d,{...n,children:e.jsx(i,{...n})}):i(n)}export{f as default};
