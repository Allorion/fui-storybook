import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as s}from"./index-D7CuHrhf.js";import"./index-DsqpF7Nv.js";import{M as i}from"./index-B5Jtdka0.js";import"./index-yBjzXJbu.js";import"./index-DY-snNUy.js";import"./preview-B_cxy2Hb.js";import"./iframe-DD67-ICN.js";import"./DocsRenderer-CFRXHY34-B2WT5QXh.js";import"./client-CDUMOAsi.js";import"./index-fNjTmf9T.js";import"./index-xMzmejw-.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function n(l){const d={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Material/FSelectComponents"}),`
`,e.jsx(d.h1,{id:"-компоненты-select",children:"🟦 Компоненты Select"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsx(d.p,{children:"Компоненты для выбора значения из выпадающего списка с поддержкой кастомизации, плейсхолдера, disabled и множественного выбора."}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-описание",children:"📝 Описание"}),`
`,e.jsxs(d.p,{children:[e.jsx(d.code,{children:"FSelect"})," и ",e.jsx(d.code,{children:"FSelectItem"})," — компоненты для создания выпадающих списков с поддержкой кастомных опций, плейсхолдера, состояния disabled и множественного выбора. Подходят для форм, фильтров и любых интерфейсов, где требуется выбор из списка."]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-примеры-использования",children:"💡 Примеры использования"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{children:`// Базовый select
<FSelect label="Выберите значение">
  <FSelectItem value="1">Вариант 1</FSelectItem>
  <FSelectItem value="2">Вариант 2</FSelectItem>
</FSelect>

// С плейсхолдером
<FSelect label="Город" placeholder="Выберите город">
  <FSelectItem value="msk">Москва</FSelectItem>
  <FSelectItem value="spb">Санкт-Петербург</FSelectItem>
</FSelect>

// Disabled
<FSelect label="Недоступно" disabled>
  <FSelectItem value="1">Вариант 1</FSelectItem>
</FSelect>

// Кастомные опции
<FSelect label="С иконками">
  <FSelectItem value="apple">🍏 Яблоко</FSelectItem>
  <FSelectItem value="banana">🍌 Банан</FSelectItem>
</FSelect>

// Множественный выбор
<FSelect label="Множественный выбор" multiple>
  <FSelectItem value="1">Вариант 1</FSelectItem>
  <FSelectItem value="2">Вариант 2</FSelectItem>
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
`,e.jsxs("ul",{children:[e.jsx("li",{children:"Поддержка кастомных опций (иконки, сложный контент)"}),e.jsx("li",{children:"Доступность: поддержка disabled, aria-атрибутов"}),e.jsx("li",{children:"Множественный выбор"}),e.jsx("li",{children:"Плейсхолдер и label"}),e.jsx("li",{children:"Гибкая стилизация"})]})]})}function y(l={}){const{wrapper:d}={...s(),...l.components};return d?e.jsx(d,{...l,children:e.jsx(n,{...l})}):n(l)}export{y as default};
