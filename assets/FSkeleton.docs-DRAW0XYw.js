import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-BoUPaUI-.js";import"./index-0WIw1Azl.js";import{M as l}from"./index-CIIAAp_t.js";import"./index-B3j06Xw8.js";import"./preview-Cdhxcn-R.js";import"./iframe-C40mbFDg.js";import"./DocsRenderer-CFRXHY34-Dc2eMmrS.js";import"./client-DOawrHdJ.js";import"./index-DW0t0JKo.js";import"./index-D_ywfbVi.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";function r(n){const d={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Material/FSkeleton"}),`
`,e.jsx(d.h1,{id:"-fskeleton--компонент-для-отображения-состояния-загрузки",children:"🦴 FSkeleton — компонент для отображения состояния загрузки"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsx(d.p,{children:"Компонент для создания временных заглушек (скелетонов) вместо контента во время загрузки данных."}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-описание",children:"📝 Описание"}),`
`,e.jsxs(d.p,{children:[e.jsx(d.code,{children:"FSkeleton"})," — это компонент, который создает временные заглушки вместо контента во время загрузки данных. Он автоматически сохраняет размеры и стили оригинального контента, создавая плавный переход между состояниями загрузки и отображения данных."]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-примеры-использования",children:"💡 Примеры использования"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{children:`import { useState } from 'react';\r
import FSkeleton from './FSkeleton';\r
\r
const MyComponent = () => {\r
  const [loading, setLoading] = useState(true);\r
\r
  return (\r
    <FSkeleton enable={loading}>\r
      <div style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>\r
        <h2>Заголовок</h2>\r
        <p>Содержимое компонента</p>\r
      </div>\r
    </FSkeleton>\r
  );\r
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
`]})]})}function y(n={}){const{wrapper:d}={...i(),...n.components};return d?e.jsx(d,{...n,children:e.jsx(r,{...n})}):r(n)}export{y as default};
