import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as s}from"./index-D7CuHrhf.js";import"./index-D854AyPB.js";import{M as t}from"./index-CX6ceWH8.js";import"./index-yBjzXJbu.js";import"./index-DY-snNUy.js";import"./preview-DySwuQUI.js";import"./iframe-CwanCmLK.js";import"./DocsRenderer-CFRXHY34-3cIYPD7H.js";import"./client-CDUMOAsi.js";import"./index-fNjTmf9T.js";import"./index-xMzmejw-.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function r(e){const i={blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"Material/FMenuLinks"}),`
`,n.jsx(i.h1,{id:"-fmenulinks--карточка-меню-с-заголовком-и-списком-ссылок",children:"🔗 FMenuLinks — карточка меню с заголовком и списком ссылок"}),`
`,n.jsxs(i.blockquote,{children:[`
`,n.jsxs(i.p,{children:["Обёртка для создания визуальной карточки меню: заголовок + стилизованный вертикальный список ссылок.",n.jsx(i.br,{}),`
`,"Автоматически применяет единый стиль ко всем ссылкам и поддерживает отключение пунктов."]}),`
`]}),`
`,n.jsx(i.hr,{}),`
`,n.jsx(i.h2,{id:"-описание",children:"📝 Описание"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.code,{children:"FMenuLinks"})," — это готовый блок меню в стиле карточки (",n.jsx(i.code,{children:"sections-routes_card"}),"), который:"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Отображает опциональный заголовок"}),`
`,n.jsx(i.li,{children:"Оборачивает ссылки в контейнер со стилями"}),`
`,n.jsxs(i.li,{children:["Автоматически добавляет класс ",n.jsx(i.code,{children:"link"})," ко всем дочерним элементам"]}),`
`,n.jsxs(i.li,{children:["Поддерживает программное отключение пунктов через проп ",n.jsx(i.code,{children:"disabled"})]}),`
`]}),`
`,n.jsxs(i.p,{children:["Идеально сочетается с ",n.jsx(i.code,{children:"<Link>"})," из react-router-dom или обычными ",n.jsx(i.code,{children:"<a>"}),"."]}),`
`,n.jsx(i.hr,{}),`
`,n.jsx(i.h2,{id:"-примеры-использования",children:"💡 Примеры использования"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-tsx",children:`// Простая карточка с заголовком
<FMenuLinks title="Документы">
  <Link to="/cards">Карточка учета платы</Link>
  <Link to="/summary">Сводная ведомость</Link>
</FMenuLinks>

// С отключенной ссылкой
<FMenuLinks title="Отчетность" disabled={[1]}>
  <Link to="/report1">Отчет за 2024</Link>
  <Link to="/report2">Отчет за 2025 (скоро)</Link>
</FMenuLinks>

// С кастомными стилями
<FMenuLinks title="Профиль" className="my-custom-card" st={{ padding: '24px' }}>
  <Link to="/profile">Личные данные</Link>
  <Link to="/settings">Настройки</Link>
</FMenuLinks>
`})})]})}function F(e={}){const{wrapper:i}={...s(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(r,{...e})}):r(e)}export{F as default};
