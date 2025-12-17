import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as n}from"./index-D7CuHrhf.js";import"./index-CqrtN1Z1.js";import{M as s}from"./index-Cf9S3--b.js";import"./index-yBjzXJbu.js";import"./index-DY-snNUy.js";import"./preview-Vos3GfoP.js";import"./iframe-wpNYXyOz.js";import"./DocsRenderer-CFRXHY34-g3zKitnf.js";import"./client-CDUMOAsi.js";import"./index-fNjTmf9T.js";import"./index-xMzmejw-.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function l(r){const d={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Material/FSearchableSelect"}),`
`,e.jsx(d.h1,{id:"-fsearchableselect--выпадающий-список-с-поиском",children:"🔍 FSearchableSelect — выпадающий список с поиском"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsx(d.p,{children:"Компонент для выбора значения из списка с возможностью фильтрации, создания новых элементов и асинхронной загрузки."}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-описание",children:"📝 Описание"}),`
`,e.jsxs(d.p,{children:[e.jsx(d.code,{children:"FSearchableSelect"})," — это интерактивный селект, который позволяет пользователю фильтровать опции по вводу текста. Он поддерживает создание новых значений (если опция не найдена), навигацию с клавиатуры, подсветку совпадений и интеграцию с библиотеками форм (например, React Hook Form)."]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-примеры-использования",children:"💡 Примеры использования"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`<FSearchableSelect\r
  label="Выберите город"\r
  value={city}\r
  onChange={(e) => setCity(e.target.value)}\r
  fullWidth\r
>\r
  <option value="msk">Москва</option>\r
  <option value="spb">Санкт-Петербург</option>\r
</FSearchableSelect>\r
\r
<FSearchableSelect\r
  label="Строгий выбор (без создания)"\r
  allowCreate={false}\r
  helpText="Выберите только из списка"\r
  fullWidth\r
>\r
  <option value="1">Администратор</option>\r
  <option value="2">Пользователь</option>\r
</FSearchableSelect>\r
\r
<FSearchableSelect\r
  label="С ошибкой"\r
  errText={["Поле обязательно для заполнения"]}\r
  fullWidth\r
>\r
  <option value="option1">Опция 1</option>\r
</FSearchableSelect>\r
\r
<FSearchableSelect\r
  label="Загрузка данных"\r
  load={true}\r
  placeholder="Ищем данные..."\r
  fullWidth\r
/>
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-пропсы",children:"📋 Пропсы"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Проп"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"label"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Метка поля"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"children"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"ReactNode"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Опции списка (теги option)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"allowCreate"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Разрешить ввод новых значений (default: false)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"fullWidth"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Растягивать на всю ширину"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"value"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string | number"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Текущее значение"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"onChange"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"(e: Event) => void"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Обработчик изменения"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"errText"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string[]"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Массив ошибок"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"helpText"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Вспомогательный текст"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"load"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Показывать индикатор загрузки"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"width"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string | number"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Ширина поля"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"height"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string | number"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Высота поля"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"st"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.CSSProperties"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Стили"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"className"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Класс"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"id"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"ID"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"placeholder"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Плейсхолдер"})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-стандартные-пропсы",children:"🧩 Стандартные пропсы"}),`
`,e.jsxs(d.p,{children:["Компонент наследует свойства от стандартного инпута (кроме ",e.jsx(d.code,{children:"value"})," и ",e.jsx(d.code,{children:"onChange"}),", которые переопределены), что позволяет использовать стандартные атрибуты HTML.",e.jsx("br",{}),`\r
Это включает `,e.jsx("code",{children:"name"}),", ",e.jsx("code",{children:"disabled"}),", ",e.jsx("code",{children:"onFocus"}),", ",e.jsx("code",{children:"onBlur"}),", ",e.jsx("code",{children:"onKeyDown"})," и другие."]}),`
`,e.jsx(d.p,{children:e.jsx(d.strong,{children:"Примеры:"})}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`<FSearchableSelect name="user_role" disabled={isSubmitting} />
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"️-особенности",children:"🛠️ Особенности"}),`
`,e.jsxs("ul",{children:[e.jsx("li",{children:"Фильтрация списка опций при вводе."}),e.jsxs("li",{children:["Возможность создания значений, которых нет в списке (при ",e.jsxs("code",{children:["allowCreate=",!0]}),")."]}),e.jsxs("li",{children:["Поддержка навигации клавишами (",e.jsx("code",{children:"ArrowUp"}),", ",e.jsx("code",{children:"ArrowDown"}),", ",e.jsx("code",{children:"Enter"}),")."]}),e.jsx("li",{children:"Подсветка найденного текста в выпадающем списке."}),e.jsxs("li",{children:["Полная ширина (",e.jsx("code",{children:"fullWidth"}),")."]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"ℹ️-советы",children:"ℹ️ Советы"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:["Используйте ",e.jsxs("code",{children:["allowCreate=",!1]}),", если пользователю разрешено выбирать только из предложенных вариантов."]}),`
`,e.jsxs(d.li,{children:["Передавайте опции как дочерние элементы ",e.jsx("code",{children:'<option value="...">Label</option>'}),"."]}),`
`,e.jsxs(d.li,{children:["Для асинхронного поиска используйте проп ",e.jsx("code",{children:"load"})," во время запроса к API."]}),`
`,e.jsxs(d.li,{children:["Для валидации форм передавайте массив ошибок в ",e.jsx("code",{children:"errText"}),"."]}),`
`]})]})}function S(r={}){const{wrapper:d}={...n(),...r.components};return d?e.jsx(d,{...r,children:e.jsx(l,{...r})}):l(r)}export{S as default};
