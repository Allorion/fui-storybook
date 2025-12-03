import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as s}from"./index-D7CuHrhf.js";import"./index-DwoY1sTV.js";import{M as i}from"./index-DEYUkSjZ.js";import"./index-yBjzXJbu.js";import"./index-DY-snNUy.js";import"./preview-hnw76WLk.js";import"./iframe-DaA4mqxY.js";import"./DocsRenderer-CFRXHY34-CFVtM4HX.js";import"./client-CDUMOAsi.js";import"./index-fNjTmf9T.js";import"./index-xMzmejw-.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function n(r){const d={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Material/FStack"}),`
`,e.jsx(d.h1,{id:"-fstack--гибкий-flex-контейнер",children:"📦 FStack — гибкий flex-контейнер"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsx(d.p,{children:"Контейнер для удобного размещения элементов в строку или колонку с поддержкой отступов, выравнивания, wrap и кастомизации."}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-описание",children:"📝 Описание"}),`
`,e.jsxs(d.p,{children:[e.jsx(d.code,{children:"FStack"})," — универсальный flex-контейнер для компоновки элементов. Позволяет управлять направлением, отступами, выравниванием, переносом строк, стилями и классами. Основан на Flexbox."]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-примеры-использования",children:"💡 Примеры использования"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{children:`<FStack spacing={2}>
  <div>Элемент 1</div>
  <div>Элемент 2</div>
</FStack>

<FStack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
  <button>Назад</button>
  <span>Заголовок</span>
  <button>Вперёд</button>
</FStack>

<FStack direction="row" wrap="wrap" spacing={1}>
  {Array.from({length: 6}).map((_, i) => <div key={i}>Box {i+1}</div>)}
</FStack>

<FStack st={{background:'#fffde7',padding:16,borderRadius:8}}>
  <div>Контент</div>
</FStack>
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-пропсы",children:"📋 Пропсы"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Проп"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"direction"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"'row' | 'row-reverse' | 'column' | 'column-reverse'"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Направление элементов (по умолчанию ",e.jsx("code",{children:"column"}),")"]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"alignItems"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Выравнивание по перекрёстной оси"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"justifyContent"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Выравнивание по главной оси"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"spacing"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"number"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Отступ между элементами (шаг 8px)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"wrap"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"'nowrap' | 'wrap' | 'wrap-reverse'"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Перенос строк"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"children"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.ReactNode"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Вложенные элементы"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"className"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Пользовательский CSS-класс"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"st"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.CSSProperties"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Инлайновые стили"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"id"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"ID контейнера"})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"️-особенности",children:"🛠️ Особенности"}),`
`,e.jsxs("ul",{children:[e.jsx("li",{children:"Гибкая компоновка на Flexbox."}),e.jsx("li",{children:"Управление направлением, отступами, выравниванием, переносом."}),e.jsxs("li",{children:["Кастомизация через ",e.jsx("code",{children:"st"})," и ",e.jsx("code",{children:"className"}),"."]}),e.jsx("li",{children:"Можно вкладывать любые React-элементы."})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"ℹ️-советы",children:"ℹ️ Советы"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:["Для горизонтального расположения используйте ",e.jsx("code",{children:'direction="row"'}),"."]}),`
`,e.jsxs(d.li,{children:["Для адаптивных сеток — ",e.jsx("code",{children:'wrap="wrap"'})," и ограничение ширины."]}),`
`,e.jsxs(d.li,{children:["Для равных отступов между элементами — ",e.jsx("code",{children:"spacing"}),"."]}),`
`,e.jsxs(d.li,{children:["Для выравнивания по центру — ",e.jsx("code",{children:'alignItems="center" justifyContent="center"'}),"."]}),`
`,e.jsxs(d.li,{children:["Для кастомизации — ",e.jsx("code",{children:"st"})," и ",e.jsx("code",{children:"className"}),"."]}),`
`]})]})}function f(r={}){const{wrapper:d}={...s(),...r.components};return d?e.jsx(d,{...r,children:e.jsx(n,{...r})}):n(r)}export{f as default};
