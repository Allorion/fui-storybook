import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as l}from"./index-Da05a9iP.js";import"./index-BD4DI06v.js";import{M as n}from"./index-DDGA6GhJ.js";import"./index-DEgj3Fem.js";import"./preview-hIjkJ1PH.js";import"./iframe-D_sdfafK.js";import"./DocsRenderer-CFRXHY34-DyOHw2nH.js";import"./client-DBdnbfFq.js";import"./index-DM3MU96Y.js";import"./index-BknSE3li.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function s(r){const d={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...l(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n,{title:"Material/FCheckbox"}),`
`,e.jsx(d.h1,{id:"️-fcheckbox--кастомный-чекбокс",children:"☑️ FCheckbox — кастомный чекбокс"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsx(d.p,{children:"Гибкий компонент-чекбокс с поддержкой метки, пользовательских стилей, контролируемого и неконтролируемого состояния."}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-описание",children:"📝 Описание"}),`
`,e.jsxs(d.p,{children:[e.jsx(d.code,{children:"FCheckbox"})," — это современный чекбокс с поддержкой всех стандартных атрибутов ",e.jsx(d.code,{children:'<input type="checkbox">'}),", кастомной метки, пользовательских классов и стилей. Использует CSS Modules для изоляции стилей."]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-примеры-использования",children:"💡 Примеры использования"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{children:`<FCheckbox label="Согласен с условиями" defaultChecked />\r
\r
<FCheckbox\r
  label={<span style={{ color: '#1976d2', fontWeight: 600 }}>Подписаться на рассылку</span>}\r
  defaultChecked={true}\r
/>\r
\r
<FCheckbox label="Недоступно" disabled />\r
\r
// Контролируемый чекбокс\r
const [checked, setChecked] = useState(false);\r
<FCheckbox\r
  label="Контролируемый чекбокс"\r
  checked={checked}\r
  onChange={e => setChecked(e.target.checked)}\r
/>
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-пропсы",children:"📋 Пропсы"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Проп"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"label"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.ReactNode"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Текст или элемент рядом с чекбоксом"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"className"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Пользовательский CSS-класс для контейнера"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"id"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"ID контейнера"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"st"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.CSSProperties"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Инлайновые стили для контейнера"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"checked"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Контролируемое состояние чекбокса"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"defaultChecked"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Начальное состояние (только при монтировании)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"disabled"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Отключённое состояние"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"onChange"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"(e: React.ChangeEvent<HTMLInputElement>) => void"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Обработчик изменения состояния"})]}),e.jsx("tr",{children:e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},colSpan:3,children:e.jsxs("b",{children:["+ все стандартные пропсы ",e.jsx("code",{children:'<input type="checkbox">'})]})})})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"️-особенности",children:"🛠️ Особенности"}),`
`,e.jsxs("ul",{children:[e.jsx("li",{children:"Кастомный внешний вид с помощью CSS Modules."}),e.jsx("li",{children:"Поддержка как контролируемого, так и неконтролируемого режима."}),e.jsx("li",{children:"Можно использовать любой React-элемент в качестве метки."}),e.jsx("li",{children:"Лёгкая интеграция в формы и интерфейсы."})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"ℹ️-советы",children:"ℹ️ Советы"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:["Для контролируемого режима используйте ",e.jsx("code",{children:"checked"})," и ",e.jsx("code",{children:"onChange"}),"."]}),`
`,e.jsxs(d.li,{children:["Для начального состояния — ",e.jsx("code",{children:"defaultChecked"}),"."]}),`
`,e.jsxs(d.li,{children:["Для отключения — ",e.jsx("code",{children:"disabled"}),"."]}),`
`,e.jsxs(d.li,{children:["Для кастомизации — ",e.jsx("code",{children:"st"})," и ",e.jsx("code",{children:"className"}),"."]}),`
`]})]})}function k(r={}){const{wrapper:d}={...l(),...r.components};return d?e.jsx(d,{...r,children:e.jsx(s,{...r})}):s(r)}export{k as default};
