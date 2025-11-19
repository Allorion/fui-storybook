import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as t}from"./index-D7CuHrhf.js";import"./index-D854AyPB.js";import{M as i}from"./index-CX6ceWH8.js";import"./index-yBjzXJbu.js";import"./index-DY-snNUy.js";import"./preview-DySwuQUI.js";import"./iframe-CwanCmLK.js";import"./DocsRenderer-CFRXHY34-3cIYPD7H.js";import"./client-CDUMOAsi.js";import"./index-fNjTmf9T.js";import"./index-xMzmejw-.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function r(n){const d={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Function Elements/fConvertDate"}),`
`,e.jsx(d.h1,{id:"-fconvertdate--конвертация-форматов-даты",children:"📅 fConvertDate — конвертация форматов даты"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsx(d.p,{children:"Универсальный конвертер даты и времени. Поддерживает различные форматы ввода и вывода с гибкой настройкой локализации."}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-описание",children:"📝 Описание"}),`
`,e.jsxs(d.p,{children:[e.jsx(d.code,{children:"fConvertDate"})," — функция для форматирования даты и времени, которая поддерживает множество входных форматов (строки, числа, Date) и предоставляет различные варианты вывода через настраиваемые опции."]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-пример-использования",children:"💡 Пример использования"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-ts",children:`// ISO формат
fConvertDate("2025-10-02T15:30:45", { format: "iso" }); 
// "2025-10-02"

// Русская дата
fConvertDate("2025-10-02T15:30:45", { format: "ru" }); 
// "02.10.2025"

// Русская дата и время
fConvertDate("2025-10-02T15:30:45", { format: "ru-datetime" }); 
// "02.10.2025 15:30:45"

// Кастомный формат
fConvertDate(new Date(), { 
  format: "custom", 
  locale: "en-US", 
  customOptions: { 
    weekday: "long", 
    month: "long", 
    day: "numeric", 
    year: "numeric" 
  } 
});
// "Thursday, October 2, 2025"
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-параметры",children:"📋 Параметры"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Параметр"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"input"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string | number | Date | null | undefined"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Входное значение даты"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"options"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"ConvertDateOptions"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Настройки форматирования"})]})]})]}),`
`,e.jsx(d.h3,{id:"опции-форматирования-convertdateoptions",children:"Опции форматирования (ConvertDateOptions)"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Свойство"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"format"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:'"iso" | "ru" | "ru-datetime" | "date" | "time" | "custom"'})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Формат вывода даты"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"locale"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:'Локаль для кастомного формата (по умолчанию "ru-RU")'})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"customOptions"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"Intl.DateTimeFormatOptions"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:'Опции для Intl.DateTimeFormat при format: "custom"'})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"️-особенности",children:"🛠️ Особенности"}),`
`,e.jsx("div",{style:{background:"#f5f5f5",padding:"12px 18px",borderRadius:"8px",marginBottom:"12px",fontSize:"15px"},children:e.jsxs("ul",{children:[e.jsx("li",{children:"Поддерживает различные форматы входных данных (строки, числа, Date)"}),e.jsx("li",{children:"Предоставляет стандартные форматы вывода (ISO, русский формат)"}),e.jsx("li",{children:"Возможность настройки кастомного формата через Intl.DateTimeFormat"}),e.jsx("li",{children:"Корректная обработка пустых значений (null, undefined)"}),e.jsx("li",{children:"Возвращает пустую строку или undefined при некорректных данных"})]})}),`
`,e.jsx(d.hr,{}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsxs(d.p,{children:["ℹ️ ",e.jsx("b",{children:"Примечание:"}),' По умолчанию используется ISO формат ("YYYY-MM-DD")']}),`
`]})]})}function y(n={}){const{wrapper:d}={...t(),...n.components};return d?e.jsx(d,{...n,children:e.jsx(r,{...n})}):r(n)}export{y as default};
