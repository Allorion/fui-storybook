import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as l}from"./index-D7CuHrhf.js";import"./index-C5CbQAeJ.js";import{M as r}from"./index-BbSGDYtP.js";import"./index-yBjzXJbu.js";import"./index-DY-snNUy.js";import"./preview-5Dvysp7C.js";import"./iframe-B2eO2IvJ.js";import"./DocsRenderer-CFRXHY34-uqroC9nO.js";import"./client-CDUMOAsi.js";import"./index-fNjTmf9T.js";import"./index-xMzmejw-.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function i(n){const d={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Material/FSkeleton"}),`
`,e.jsx(d.h1,{id:"-fskeleton--компонент-для-отображения-состояния-загрузки",children:"🦴 FSkeleton — компонент для отображения состояния загрузки"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsx(d.p,{children:"Компонент для создания временных заглушек (скелетонов) вместо контента во время загрузки данных."}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-описание",children:"📝 Описание"}),`
`,e.jsxs(d.p,{children:[e.jsx(d.code,{children:"FSkeleton"})," — это компонент, который создает временные заглушки вместо контента во время загрузки данных. Он автоматически сохраняет размеры и стили оригинального контента, создавая плавный переход между состояниями загрузки и отображения данных."]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-примеры-использования",children:"💡 Примеры использования"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{children:`import { useState } from 'react';
import FSkeleton from './FSkeleton';

const MyComponent = () => {
  const [loading, setLoading] = useState(true);

  return (
    <FSkeleton enable={loading}>
      <div style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
        <h2>Заголовок</h2>
        <p>Содержимое компонента</p>
      </div>
    </FSkeleton>
  );
};
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-пропсы",children:"📋 Пропсы"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Проп"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"children"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.ReactNode"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Дочерние элементы, которые будут заменены на скелетон"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"enable"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Флаг включения скелетона (показывает загрузку)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"width"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Кастомная ширина скелетона (опционально)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"height"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Кастомная высота скелетона (опционально)"})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"️-особенности",children:"🛠️ Особенности"}),`
`,e.jsxs("ul",{children:[e.jsx("li",{children:"Автоматическое сохранение размеров оригинального контента"}),e.jsx("li",{children:"Сохранение стилей (отступы, границы, позиционирование)"}),e.jsx("li",{children:"Поддержка кастомных размеров"}),e.jsx("li",{children:"Плавная анимация загрузки"}),e.jsx("li",{children:"Автоматическое восстановление оригинального контента"}),e.jsx("li",{children:"Поддержка вложенных элементов"}),e.jsx("li",{children:"Корректная работа с различными типами контента"})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"ℹ️-советы",children:"ℹ️ Советы"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:["Используйте ",e.jsx(d.code,{children:"enable"})," для управления состоянием загрузки"]}),`
`,e.jsxs(d.li,{children:["При необходимости задавайте кастомные размеры через ",e.jsx(d.code,{children:"width"})," и ",e.jsx(d.code,{children:"height"})]}),`
`,e.jsx(d.li,{children:"Компонент автоматически сохраняет стили оригинального контента"}),`
`,e.jsx(d.li,{children:"Скелетон автоматически адаптируется под размеры контента"}),`
`,e.jsx(d.li,{children:"При отключении скелетона оригинальный контент восстанавливается без потери состояния"}),`
`,e.jsx(d.li,{children:"Компонент корректно обрабатывает вложенные элементы"}),`
`,e.jsx(d.li,{children:"Используйте скелетон для улучшения UX во время загрузки данных"}),`
`]})]})}function f(n={}){const{wrapper:d}={...l(),...n.components};return d?e.jsx(d,{...n,children:e.jsx(i,{...n})}):i(n)}export{f as default};
