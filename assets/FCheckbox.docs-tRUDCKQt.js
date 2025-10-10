import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as n}from"./index-D7CuHrhf.js";import"./index-C5CbQAeJ.js";import{M as r}from"./index-BbSGDYtP.js";import"./index-yBjzXJbu.js";import"./index-DY-snNUy.js";import"./preview-5Dvysp7C.js";import"./iframe-B2eO2IvJ.js";import"./DocsRenderer-CFRXHY34-uqroC9nO.js";import"./client-CDUMOAsi.js";import"./index-fNjTmf9T.js";import"./index-xMzmejw-.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function l(s){const d={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...n(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Material/FCheckbox"}),`
`,e.jsx(d.h1,{id:"️-fcheckbox--кастомный-чекбокс",children:"☑️ FCheckbox — кастомный чекбокс"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsx(d.p,{children:"Гибкий компонент-чекбокс с поддержкой метки, пользовательских стилей, контролируемого и неконтролируемого состояния."}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-описание",children:"📝 Описание"}),`
`,e.jsxs(d.p,{children:[e.jsx(d.code,{children:"FCheckbox"})," — это современный чекбокс с поддержкой всех стандартных атрибутов ",e.jsx(d.code,{children:'<input type="checkbox">'}),", кастомной метки, пользовательских классов и стилей. Использует CSS Modules для изоляции стилей."]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-примеры-использования",children:"💡 Примеры использования"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{children:`<FCheckbox label="Согласен с условиями" defaultChecked />

<FCheckbox
  label={<span style={{ color: '#1976d2', fontWeight: 600 }}>Подписаться на рассылку</span>}
  defaultChecked={true}
/>

<FCheckbox label="Недоступно" disabled />

// Контролируемый чекбокс
const [checked, setChecked] = useState(false);
<FCheckbox
  label="Контролируемый чекбокс"
  checked={checked}
  onChange={e => setChecked(e.target.checked)}
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
`]})]})}function m(s={}){const{wrapper:d}={...n(),...s.components};return d?e.jsx(d,{...s,children:e.jsx(l,{...s})}):l(s)}export{m as default};
