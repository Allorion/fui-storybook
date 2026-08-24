import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-BoUPaUI-.js";import"./index-S5ryxnp5.js";import{M as o}from"./index-BelrT2VU.js";import"./index-B3j06Xw8.js";import"./preview-vEnFruut.js";import"./iframe-DlTzekq5.js";import"./DocsRenderer-CFRXHY34-B-s4UxjM.js";import"./client-DOawrHdJ.js";import"./index-DW0t0JKo.js";import"./index-D_ywfbVi.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";function n(d){const r={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Material/FPreloader"}),`
`,e.jsx(r.h1,{id:"-fpreloader--индикатор-полной-загрузки",children:"⏳ FPreloader — индикатор полной загрузки"}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsx(r.p,{children:"Компонент-прелоадер, который перекрывает весь экран и блокирует взаимодействие, пока контент загружается. Поддерживает кастомный фон и вложенные элементы."}),`
`]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"-описание",children:"📝 Описание"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"FPreloader"})," — это полноэкранный компонент-индикатор загрузки. Он предназначен для блокировки пользовательского интерфейса и отображения спиннера или другого контента во время длительных операций (например, загрузки страницы). Автоматически управляет блокировкой скролла ",e.jsx(r.code,{children:"body"}),"."]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"-примеры-использования",children:"💡 Примеры использования"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{children:`import { useState } from 'react';\r
import FPreloader from './FPreloader';\r
import FLoadIcon from '@icons/FLoadIcon'; // Пример дочернего элемента\r
\r
const MyComponent = () => {\r
  const [isLoading, setIsLoading] = useState(true);\r
\r
  // Имитация загрузки\r
  useEffect(() => {\r
    setTimeout(() => setIsLoading(false), 3000);\r
  }, []);\r
\r
  return (\r
    <div>\r
      <h1>Контент страницы</h1>\r
      <p>...здесь остальной контент...</p>\r
      \r
      <FPreloader open={isLoading}>\r
        <FLoadIcon size={60} color="primary" /> {/* Ваш индикатор */}\r
      </FPreloader>\r
    </div>\r
  );\r
};
`})}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{children:`// С кастомным фоном и текстом\r
<FPreloader open={true} backgroundColor="rgba(0, 50, 100, 0.8)" st={{ zIndex: 10000 }}>\r
  <div style={{ color: '#fff', fontSize: '24px' }}>Загрузка данных...</div>\r
</FPreloader>
`})}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"-пропсы",children:"📋 Пропсы"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Проп"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"open"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Флаг открытия/закрытия прелоадера"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"st"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.CSSProperties"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Инлайновые стили для контейнера"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"backgroundColor"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Цвет фона прелоадера (по умолчанию ",e.jsx("code",{children:"#e0e0e0"}),")"]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"children"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.ReactNode"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Содержимое прелоадера (спиннер, логотип и т.д.)"})]})]})]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"️-особенности",children:"🛠️ Особенности"}),`
`,e.jsxs("ul",{children:[e.jsxs("li",{children:["Блокировка скролла ",e.jsx("code",{children:"body"})," при открытии"]}),e.jsx("li",{children:"Настраиваемый фон"}),e.jsx("li",{children:"Возможность отображения любого контента внутри"}),e.jsx("li",{children:"Легко управляется состоянием"})]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"ℹ️-советы",children:"ℹ️ Советы"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Используйте проп ",e.jsx("code",{children:"open"})," для управления видимостью прелоадера."]}),`
`,e.jsxs(r.li,{children:["Передайте спиннер (например, ",e.jsx("code",{children:"FLoadIcon"}),") или любой другой индикатор в ",e.jsx("code",{children:"children"}),"."]}),`
`,e.jsxs(r.li,{children:["Настройте фон с помощью ",e.jsx("code",{children:"backgroundColor"}),"."]}),`
`]})]})}function f(d={}){const{wrapper:r}={...i(),...d.components};return r?e.jsx(r,{...d,children:e.jsx(n,{...d})}):n(d)}export{f as default};
