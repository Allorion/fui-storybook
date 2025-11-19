import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as i}from"./index-D7CuHrhf.js";import"./index-D9VlcwRT.js";import{M as s}from"./index-DDhFVru1.js";import"./index-yBjzXJbu.js";import"./index-DY-snNUy.js";import"./preview-Bs3Vrgc7.js";import"./iframe-FX5MNYBG.js";import"./DocsRenderer-CFRXHY34-YspJtqWA.js";import"./client-CDUMOAsi.js";import"./index-fNjTmf9T.js";import"./index-xMzmejw-.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function n(r){const d={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Function Elements/fFormatRuNumber"}),`
`,e.jsx(d.h1,{id:"-fformatrunumber--форматирование-чисел",children:"🔢 fFormatRuNumber — форматирование чисел"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsx(d.p,{children:"Функция для форматирования чисел в русской локали с поддержкой банковского округления и гибкими настройками вывода."}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-описание",children:"📝 Описание"}),`
`,e.jsxs(d.p,{children:[e.jsx(d.code,{children:"fFormatRuNumber"})," — функция для форматирования чисел с поддержкой русской локализации. Позволяет настраивать количество знаков после запятой, использовать банковское округление и выбирать тип возвращаемого значения (строка или число)."]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-пример-использования",children:"💡 Пример использования"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-ts",children:`// Базовое форматирование
fFormatRuNumber(1234.567); // "1 234,567"

// С банковским округлением
fFormatRuNumber(1234.567, { useBankRound: true }); // "1 234,57"

// Ограничение десятичных знаков
fFormatRuNumber(1234.567, { maximumFractionDigits: 2 }); // "1 234,57"

// Возврат числа вместо строки
fFormatRuNumber(1234.567, { 
  useBankRound: true, 
  returnNumber: true 
}); // 1234.57
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-параметры",children:"📋 Параметры"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Параметр"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"a"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"number"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Число для форматирования"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"options"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"object"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Объект с настройками форматирования"})]})]})]}),`
`,e.jsx(d.h3,{id:"опции-форматирования",children:"Опции форматирования"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Опция"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"maximumFractionDigits"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"number"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Максимальное количество знаков после запятой"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"minimumFractionDigits"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"number"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Минимальное количество знаков после запятой"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"useBankRound"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Использовать банковское округление"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"bankRoundDecimalPlaces"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"number"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Количество знаков для банковского округления (по умолчанию 2)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"returnNumber"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Вернуть число вместо строки"})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"️-особенности",children:"🛠️ Особенности"}),`
`,e.jsx("div",{style:{background:"#f5f5f5",padding:"12px 18px",borderRadius:"8px",marginBottom:"12px",fontSize:"15px"},children:e.jsxs("ul",{children:[e.jsx("li",{children:"Поддерживает банковское округление через опцию useBankRound"}),e.jsx("li",{children:"Может возвращать как строку, так и число (опция returnNumber)"}),e.jsx("li",{children:"Гибкая настройка количества десятичных знаков"}),e.jsx("li",{children:"При некорректных входных данных возвращает пустую строку или NaN"}),e.jsx("li",{children:"Использует русскую локаль для форматирования"})]})}),`
`,e.jsx(d.hr,{}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsxs(d.p,{children:["ℹ️ ",e.jsx("b",{children:"Совет:"})," Используйте банковское округление для финансовых расчетов, где требуется особая точность округления."]}),`
`]})]})}function f(r={}){const{wrapper:d}={...i(),...r.components};return d?e.jsx(d,{...r,children:e.jsx(n,{...r})}):n(r)}export{f as default};
