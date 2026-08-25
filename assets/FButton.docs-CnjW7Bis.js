import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-BoUPaUI-.js";import"./index-BD3unkfZ.js";import{M as l}from"./index-Dj1DVtst.js";import"./index-B3j06Xw8.js";import"./preview-D_Y9KTOz.js";import"./iframe-D0yzChPa.js";import"./DocsRenderer-CFRXHY34-B9-m7B6c.js";import"./client-DOawrHdJ.js";import"./index-DW0t0JKo.js";import"./index-D_ywfbVi.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";function n(r){const d={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Material/FButton"}),`
`,e.jsx(d.h1,{id:"-fbutton--универсальная-кнопка",children:"🔘 FButton — универсальная кнопка"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsx(d.p,{children:"Кнопка с поддержкой цветовых схем, размеров, вариантов оформления, полной ширины и кастомизации."}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-описание",children:"📝 Описание"}),`
`,e.jsxs(d.p,{children:[e.jsx(d.code,{children:"FButton"})," — универсальная кнопка для интерфейсов. Поддерживает разные цвета, размеры, варианты (заполненная/контурная), кастомные стили, полную ширину, обработчики событий и отключение."]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-примеры-использования",children:"💡 Примеры использования"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-ts",children:`<FButton onClick={() => alert('Клик!')}>\r
  Кнопка по умолчанию\r
</FButton>\r
\r
<FButton variant="contained" color="primary">\r
  Primary\r
</FButton>\r
\r
<FButton variant="default" color="danger">\r
  Danger (контурная)\r
</FButton>\r
\r
<FButton size="btn-lg" color="success">\r
  Большая Success\r
</FButton>\r
\r
<FButton fullWidth color="info">\r
  На всю ширину\r
</FButton>\r
\r
<FButton style={{ fontWeight: 'bold', background: '#ffe082', color: '#333' }}>\r
  Кастомный стиль\r
</FButton>\r
\r
<FButton disabled color="secondary">\r
  Disabled\r
</FButton>
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-пропсы",children:"📋 Пропсы"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Проп"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"children"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.ReactNode"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Содержимое кнопки"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"variant"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"'contained' | 'default'"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Вариант оформления (заполненная/контурная)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"color"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Цветовая схема"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"size"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"'btn-lg' | 'btn-sm' | 'btn-xs'"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Размер кнопки"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"fullWidth"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"На всю ширину"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"st"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.CSSProperties"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Инлайновые стили"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"className"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Пользовательский CSS-класс"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"onClick"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"(e) => void"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Обработчик клика"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"id"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"ID кнопки"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"type"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:'"button" | "submit" | "reset"'})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"HTML-тип кнопки"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"disabled"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Отключить кнопку"})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-стандартные-пропсы",children:"🧩 Стандартные пропсы"}),`
`,e.jsxs(d.p,{children:["Компонент также поддерживает все стандартные HTML-пропсы для кнопок через наследование от ",e.jsx("code",{children:"React.ButtonHTMLAttributes<HTMLButtonElement>"}),".",e.jsx("br",{}),`\r
Это позволяет использовать такие атрибуты, как `,e.jsx("code",{children:"tabIndex"}),", ",e.jsx("code",{children:"autoFocus"}),", ",e.jsx("code",{children:"aria-"}),", ",e.jsx("code",{children:"data-"})," и другие."]}),`
`,e.jsx(d.p,{children:e.jsx(d.strong,{children:"Примеры:"})}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-ts",children:`<FButton tabIndex={-1} aria-label="Закрыть" data-testid="close-btn">\r
  Кнопка с доп. атрибутами\r
</FButton>
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"️-особенности",children:"🛠️ Особенности"}),`
`,e.jsxs("ul",{children:[e.jsx("li",{children:"Поддержка цветовых схем, размеров, вариантов оформления."}),e.jsxs("li",{children:["Полная ширина (",e.jsx("code",{children:"fullWidth"}),")."]}),e.jsx("li",{children:"Кастомизация стилей и классов."}),e.jsx("li",{children:"Совместим с формами и любым содержимым."})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"ℹ️-советы",children:"ℹ️ Советы"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:["Для акцентных действий используйте ",e.jsx("code",{children:'color="primary"'})," или ",e.jsx("code",{children:'color="success"'}),"."]}),`
`,e.jsxs(d.li,{children:["Для отмены — ",e.jsx("code",{children:'color="danger"'})," или ",e.jsx("code",{children:'variant="default"'}),"."]}),`
`,e.jsxs(d.li,{children:["Для адаптивности — ",e.jsx("code",{children:"fullWidth"}),"."]}),`
`,e.jsxs(d.li,{children:["Для кастомизации — ",e.jsx("code",{children:"style"})," и ",e.jsx("code",{children:"className"}),"."]}),`
`]})]})}function m(r={}){const{wrapper:d}={...s(),...r.components};return d?e.jsx(d,{...r,children:e.jsx(n,{...r})}):n(r)}export{m as default};
