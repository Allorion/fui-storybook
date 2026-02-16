import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as n}from"./index-Da05a9iP.js";import"./index-CuTq1PjY.js";import{M as s}from"./index-C8JlcfbT.js";import"./index-DEgj3Fem.js";import"./preview-BJjcpRzj.js";import"./iframe-CMQIHkMZ.js";import"./DocsRenderer-CFRXHY34-Ci879hBD.js";import"./client-DBdnbfFq.js";import"./index-DM3MU96Y.js";import"./index-BknSE3li.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function r(l){const d={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...n(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Material/FSelectComponents"}),`
`,e.jsx(d.h1,{id:"-компоненты-select",children:"🟦 Компоненты Select"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsx(d.p,{children:"Компоненты для выбора значения из выпадающего списка с поддержкой кастомизации, плейсхолдера, disabled и множественного выбора."}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-описание",children:"📝 Описание"}),`
`,e.jsxs(d.p,{children:[e.jsx(d.code,{children:"FSelect"})," и ",e.jsx(d.code,{children:"FSelectItem"})," — компоненты для создания выпадающих списков с поддержкой кастомных опций, плейсхолдера, состояния disabled и множественного выбора. Подходят для форм, фильтров и любых интерфейсов, где требуется выбор из списка."]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-примеры-использования",children:"💡 Примеры использования"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{children:`// Базовый select\r
<FSelect label="Выберите значение">\r
  <FSelectItem value="1">Вариант 1</FSelectItem>\r
  <FSelectItem value="2">Вариант 2</FSelectItem>\r
</FSelect>\r
\r
// С плейсхолдером\r
<FSelect label="Город" placeholder="Выберите город">\r
  <FSelectItem value="msk">Москва</FSelectItem>\r
  <FSelectItem value="spb">Санкт-Петербург</FSelectItem>\r
</FSelect>\r
\r
// Disabled\r
<FSelect label="Недоступно" disabled>\r
  <FSelectItem value="1">Вариант 1</FSelectItem>\r
</FSelect>\r
\r
// Кастомные опции\r
<FSelect label="С иконками">\r
  <FSelectItem value="apple">🍏 Яблоко</FSelectItem>\r
  <FSelectItem value="banana">🍌 Банан</FSelectItem>\r
</FSelect>\r
\r
// Множественный выбор\r
<FSelect label="Множественный выбор" multiple>\r
  <FSelectItem value="1">Вариант 1</FSelectItem>\r
  <FSelectItem value="2">Вариант 2</FSelectItem>\r
</FSelect>
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-пропсы",children:"📋 Пропсы"}),`
`,e.jsx(d.h3,{id:"fselect",children:"FSelect"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Проп"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"label"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Подпись к select"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"placeholder"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Плейсхолдер"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"disabled"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Отключение select"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"multiple"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Множественный выбор"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"children"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.ReactNode"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Опции (FSelectItem)"})]})]})]}),`
`,e.jsx(d.h3,{id:"fselectitem",children:"FSelectItem"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Проп"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"value"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string | number"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Значение опции"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"children"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.ReactNode"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Контент опции"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"disabled"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Отключение опции"})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-стилизация",children:"🎨 Стилизация"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:["Используйте пропсы ",e.jsx("code",{children:"className"})," и ",e.jsx("code",{children:"st"})," для кастомизации."]}),`
`,e.jsxs(d.li,{children:["Для изменения ширины используйте:",`
`,e.jsx(d.pre,{children:e.jsx(d.code,{children:`<FSelect style={{ width: 300 }} />
`})}),`
`,"на FSelect."]}),`
`,e.jsxs(d.li,{children:["Для кастомных иконок и цветов — стилизуйте FSelectItem через ",e.jsx("code",{children:"className"}),"."]}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"ℹ️-советы",children:"ℹ️ Советы"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:["Для передачи стандартных свойств нативного элемента select используйте тип ",e.jsx("code",{children:"HTMLSelectElement"}),"."]}),`
`,e.jsxs(d.li,{children:["Для плейсхолдера используйте проп ",e.jsx("code",{children:"placeholder"}),"."]}),`
`,e.jsxs(d.li,{children:["Для отключения — ",e.jsx("code",{children:"disabled"}),"."]}),`
`,e.jsxs(d.li,{children:["Для множественного выбора — ",e.jsx("code",{children:"multiple"}),"."]}),`
`,e.jsxs(d.li,{children:["Для кастомных опций используйте любой JSX внутри ",e.jsx("code",{children:"FSelectItem"}),"."]}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"️-особенности",children:"🛠️ Особенности"}),`
`,e.jsxs("ul",{children:[e.jsx("li",{children:"Поддержка кастомных опций (иконки, сложный контент)"}),e.jsx("li",{children:"Доступность: поддержка disabled, aria-атрибутов"}),e.jsx("li",{children:"Множественный выбор"}),e.jsx("li",{children:"Плейсхолдер и label"}),e.jsx("li",{children:"Гибкая стилизация"})]})]})}function F(l={}){const{wrapper:d}={...n(),...l.components};return d?e.jsx(d,{...l,children:e.jsx(r,{...l})}):r(l)}export{F as default};
