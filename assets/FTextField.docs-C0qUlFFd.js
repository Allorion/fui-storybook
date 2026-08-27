import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-BoUPaUI-.js";import"./index-13Kgcc-W.js";import{M as s}from"./index-EzrwBadO.js";import"./index-B3j06Xw8.js";import"./preview-CQ6eulw2.js";import"./iframe-yQqoeQbT.js";import"./DocsRenderer-CFRXHY34-DKFsZNkU.js";import"./client-DOawrHdJ.js";import"./index-DW0t0JKo.js";import"./index-D_ywfbVi.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";function l(r){const d={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Material/FTextField"}),`
`,e.jsx(d.h1,{id:"-ftextfield--текстовое-поле-ввода",children:"📝 FTextField — текстовое поле ввода"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsx(d.p,{children:"Компонент для ввода текста с поддержкой лейбла, ошибок, helpText, состояния загрузки и кастомизации."}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-описание",children:"📝 Описание"}),`
`,e.jsxs(d.p,{children:[e.jsx(d.code,{children:"FTextField"})," — универсальное поле ввода с поддержкой метки, сообщений об ошибках, вспомогательного текста, индикатора загрузки и полной ширины. Подходит для форм, поиска, авторизации и других сценариев."]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-примеры-использования",children:"💡 Примеры использования"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{children:`<FTextField\r
  label="Имя пользователя"\r
  value={value}\r
  onChange={e => setValue(e.target.value)}\r
  placeholder="Введите имя"\r
  fullWidth\r
/>\r
\r
<FTextField\r
  label="Email"\r
  errText={["Некорректный email"]}\r
  placeholder="Введите email"\r
  fullWidth\r
/>\r
\r
<FTextField\r
  label="Пароль"\r
  helpText="Минимум 8 символов"\r
  type="password"\r
  fullWidth\r
/>\r
\r
<FTextField\r
  label="Поиск"\r
  load={true}\r
  placeholder="Загрузка..."\r
  fullWidth\r
/>
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-пропсы",children:"📋 Пропсы"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Проп"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"label"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Метка поля"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"fullWidth"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Растягивать на всю ширину"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"readOnly"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Только для чтения"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"errText"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string[]"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Массив ошибок"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"helpText"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Вспомогательный текст"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"load"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Показывать индикатор загрузки"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"width"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string | number"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Ширина поля"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"height"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string | number"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Высота поля"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"st"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.CSSProperties"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Стили"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"className"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Класс"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"id"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"ID"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"type"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Тип input (text, password и др.)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"placeholder"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Плейсхолдер"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"value"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Значение"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"onChange"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"(e: React.ChangeEvent<HTMLInputElement>) => void"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Обработчик изменения"})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-стандартные-пропсы",children:"🧩 Стандартные пропсы"}),`
`,e.jsxs(d.p,{children:["Компонент также поддерживает все стандартные HTML-пропсы для input через наследование от ",e.jsx("code",{children:"React.TextareaHTMLAttributes<HTMLInputElement>"}),".",e.jsx("br",{}),`\r
Это позволяет использовать такие атрибуты, как `,e.jsx("code",{children:"tabIndex"}),", ",e.jsx("code",{children:"autoFocus"}),", ",e.jsx("code",{children:"aria-"}),", ",e.jsx("code",{children:"data-"})," и другие."]}),`
`,e.jsx(d.p,{children:e.jsx(d.strong,{children:"Примеры:"})}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{children:`<FTextField tabIndex={-1} aria-label="Комментарий" data-testid="area" />
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"️-особенности",children:"🛠️ Особенности"}),`
`,e.jsxs("ul",{children:[e.jsx("li",{children:"Поддержка метки, ошибок, helpText, состояния загрузки."}),e.jsxs("li",{children:["Полная ширина (",e.jsx("code",{children:"fullWidth"}),")."]}),e.jsxs("li",{children:["Кастомизация стилей через ",e.jsx("code",{children:"st"})," и ",e.jsx("code",{children:"className"}),"."]}),e.jsx("li",{children:"Совместим с формами и автозаполнением."})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"ℹ️-советы",children:"ℹ️ Советы"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:["Для валидации используйте ",e.jsx("code",{children:"errText"}),"."]}),`
`,e.jsxs(d.li,{children:["Для подсказок — ",e.jsx("code",{children:"helpText"}),"."]}),`
`,e.jsxs(d.li,{children:["Для загрузки — ",e.jsx("code",{children:"load"}),"."]}),`
`,e.jsxs(d.li,{children:["Для адаптивности — ",e.jsx("code",{children:"fullWidth"}),"."]}),`
`]})]})}function m(r={}){const{wrapper:d}={...i(),...r.components};return d?e.jsx(d,{...r,children:e.jsx(l,{...r})}):l(r)}export{m as default};
