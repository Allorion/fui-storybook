import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as i}from"./index-D7CuHrhf.js";import"./index-53lSUY88.js";import{M as o}from"./index-0-hLze0l.js";import"./index-yBjzXJbu.js";import"./index-DY-snNUy.js";import"./preview-CuF7dt7v.js";import"./iframe-C02SzKaL.js";import"./DocsRenderer-CFRXHY34-DAAQK8M8.js";import"./client-CDUMOAsi.js";import"./index-fNjTmf9T.js";import"./index-xMzmejw-.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function n(r){const d={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Material/FPreloader"}),`
`,e.jsx(d.h1,{id:"-fpreloader--индикатор-полной-загрузки",children:"⏳ FPreloader — индикатор полной загрузки"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsx(d.p,{children:"Компонент-прелоадер, который перекрывает весь экран и блокирует взаимодействие, пока контент загружается. Поддерживает кастомный фон и вложенные элементы."}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-описание",children:"📝 Описание"}),`
`,e.jsxs(d.p,{children:[e.jsx(d.code,{children:"FPreloader"})," — это полноэкранный компонент-индикатор загрузки. Он предназначен для блокировки пользовательского интерфейса и отображения спиннера или другого контента во время длительных операций (например, загрузки страницы). Автоматически управляет блокировкой скролла ",e.jsx(d.code,{children:"body"}),"."]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-примеры-использования",children:"💡 Примеры использования"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{children:`import { useState } from 'react';
import FPreloader from './FPreloader';
import FLoadIcon from '@icons/FLoadIcon'; // Пример дочернего элемента

const MyComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Имитация загрузки
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  return (
    <div>
      <h1>Контент страницы</h1>
      <p>...здесь остальной контент...</p>
      
      <FPreloader open={isLoading}>
        <FLoadIcon size={60} color="primary" /> {/* Ваш индикатор */}
      </FPreloader>
    </div>
  );
};
`})}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{children:`// С кастомным фоном и текстом
<FPreloader open={true} backgroundColor="rgba(0, 50, 100, 0.8)" st={{ zIndex: 10000 }}>
  <div style={{ color: '#fff', fontSize: '24px' }}>Загрузка данных...</div>
</FPreloader>
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-пропсы",children:"📋 Пропсы"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Проп"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"open"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Флаг открытия/закрытия прелоадера"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"st"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.CSSProperties"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Инлайновые стили для контейнера"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"backgroundColor"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Цвет фона прелоадера (по умолчанию ",e.jsx("code",{children:"#e0e0e0"}),")"]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"children"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.ReactNode"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Содержимое прелоадера (спиннер, логотип и т.д.)"})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"️-особенности",children:"🛠️ Особенности"}),`
`,e.jsxs("ul",{children:[e.jsxs("li",{children:["Блокировка скролла ",e.jsx("code",{children:"body"})," при открытии"]}),e.jsx("li",{children:"Настраиваемый фон"}),e.jsx("li",{children:"Возможность отображения любого контента внутри"}),e.jsx("li",{children:"Легко управляется состоянием"})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"ℹ️-советы",children:"ℹ️ Советы"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:["Используйте проп ",e.jsx("code",{children:"open"})," для управления видимостью прелоадера."]}),`
`,e.jsxs(d.li,{children:["Передайте спиннер (например, ",e.jsx("code",{children:"FLoadIcon"}),") или любой другой индикатор в ",e.jsx("code",{children:"children"}),"."]}),`
`,e.jsxs(d.li,{children:["Настройте фон с помощью ",e.jsx("code",{children:"backgroundColor"}),"."]}),`
`]})]})}function y(r={}){const{wrapper:d}={...i(),...r.components};return d?e.jsx(d,{...r,children:e.jsx(n,{...r})}):n(r)}export{y as default};
