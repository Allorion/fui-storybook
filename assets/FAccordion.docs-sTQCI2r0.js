import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-BoUPaUI-.js";import"./index-CnJqn0zw.js";import{M as s}from"./index-CeKiDo1a.js";import"./index-B3j06Xw8.js";import"./preview-CZv1_EYH.js";import"./iframe-B-UITNWl.js";import"./DocsRenderer-CFRXHY34-Rl31wu_T.js";import"./client-DOawrHdJ.js";import"./index-DW0t0JKo.js";import"./index-D_ywfbVi.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";function i(n){const d={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Material/FAccordion"}),`
`,e.jsx(d.h1,{id:"-faccordion--современный-аккордеон-для-скрытия-и-показа-контента",children:"🪗 FAccordion — современный аккордеон для скрытия и показа контента"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsxs(d.p,{children:["Премиальный компонент-аккордеон на основе нативных тегов ",e.jsx(d.code,{children:"<details>"})," и ",e.jsx(d.code,{children:"<summary>"}),", интегрированный с официальной палитрой цветов ",e.jsx(d.code,{children:"fui-kit"}),", поддерживающий плавные физичные анимации и вращение шеврона."]}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-описание",children:"📝 Описание"}),`
`,e.jsxs(d.p,{children:[e.jsx(d.code,{children:"FAccordion"})," — это стильный и производительный компонент для компактного отображения и скрытия информации. Компонент поддерживает:"]}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:["Интеграцию с официальной дизайн-системой и палитрой цветов (",e.jsx(d.code,{children:"$palettes-color"})," из ",e.jsx(d.code,{children:"@styles/_variables.scss"}),")"]}),`
`,e.jsx(d.li,{children:"Плавную анимацию раскрытия контента и поворот шеврона на 180° с акцентной подсветкой"}),`
`,e.jsxs(d.li,{children:["Эффект глассморфизма (",e.jsx(d.code,{children:"backdrop-filter"}),") и аккуратные микротени"]}),`
`,e.jsxs(d.li,{children:["Поддержку контролируемого (",e.jsx(d.code,{children:"open"}),") и неконтролируемого (",e.jsx(d.code,{children:"defaultOpen"}),") состояния"]}),`
`,e.jsxs(d.li,{children:["Доступность (",e.jsx(d.code,{children:":focus-visible"})," кольцо в стиле iOS/macOS и поддержку ",e.jsx(d.code,{children:"prefers-reduced-motion"}),")"]}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-примеры-использования",children:"💡 Примеры использования"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`// Базовый аккордеон
<FAccordion title="Что такое FAccordion?" defaultOpen>
  <p>Контент блока отображается плавно и элегантно.</p>
</FAccordion>

// С акцентными цветами палитры
<FAccordion variant="warning" title="Предупреждение">
  <p>Важная информация, требующая внимания пользователя.</p>
</FAccordion>

<FAccordion variant="alert" title="Критическая ошибка (alert / danger)">
  <p>Сообщение об ошибке или деструктивном действии.</p>
</FAccordion>

<FAccordion variant="success" title="Успешно выполнено">
  <p>Подтверждение завершенной операции.</p>
</FAccordion>

// Контролируемое состояние
<FAccordion
  title="Управление состоянием извне"
  open={isOpen}
  onClick={() => setIsOpen(!isOpen)}
>
  <div>Динамически управляемый контент</div>
</FAccordion>
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsxs(d.h2,{id:"-цветовые-схемы-variant",children:["🎨 Цветовые схемы (",e.jsx(d.code,{children:"variant"}),")"]}),`
`,e.jsxs(d.p,{children:["Поддерживаются как классические варианты, так и все фирменные цвета палитры ",e.jsx(d.code,{children:"fui-kit"}),":"]}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:[e.jsx(d.code,{children:"info"})," — морской бирюзовый (",e.jsx(d.code,{children:"#3A9BAE"}),", по умолчанию)"]}),`
`,e.jsxs(d.li,{children:[e.jsx(d.code,{children:"alert"})," — критический красный (",e.jsx(d.code,{children:"#D9463D"}),", алиас к ",e.jsx(d.code,{children:"danger"}),")"]}),`
`,e.jsxs(d.li,{children:[e.jsx(d.code,{children:"warning"})," — янтарный цвет внимания (",e.jsx(d.code,{children:"#D88318"}),")"]}),`
`,e.jsxs(d.li,{children:[e.jsx(d.code,{children:"primary"})," — фирменный акцентный синий (",e.jsx(d.code,{children:"#1D6FB8"}),")"]}),`
`,e.jsxs(d.li,{children:[e.jsx(d.code,{children:"secondary"})," — нейтральный благородный серый (",e.jsx(d.code,{children:"#7C7C82"}),")"]}),`
`,e.jsxs(d.li,{children:[e.jsx(d.code,{children:"success"})," — изумрудный цвет успеха (",e.jsx(d.code,{children:"#3FA65B"}),")"]}),`
`,e.jsxs(d.li,{children:[e.jsx(d.code,{children:"danger"})," — цвет ошибок (",e.jsx(d.code,{children:"#D9463D"}),")"]}),`
`,e.jsxs(d.li,{children:[e.jsx(d.code,{children:"light"})," / ",e.jsx(d.code,{children:"dark"})," — светлая и темная темы"]}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-пропсы",children:"📋 Пропсы"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Проп"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"variant"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"'info' | 'alert' | 'warning' | 'primary' | 'secondary' | 'success' | 'danger' | 'light' | 'dark'"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Цветовая схема аккордеона (по умолчанию ",e.jsx("code",{children:"info"}),")"]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"title"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Заголовок аккордеона"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"children"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.ReactNode"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Содержимое аккордеона"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"id"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"ID контейнера"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"className"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Пользовательский CSS-класс"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"st"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.CSSProperties"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Инлайновые стили"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"open"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Контролируемое состояние открытия"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"defaultOpen"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Начальное состояние открытия (только при монтировании)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"onClick"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.MouseEventHandler<HTMLDivElement>"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Обработчик клика по заголовку"})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"️-особенности",children:"🛠️ Особенности"}),`
`,e.jsxs("ul",{children:[e.jsx("li",{children:"Полная обратная совместимость по всем пропсам и поведению."}),e.jsx("li",{children:"Стильный круглый бейдж стрелочки с физичным поворотом на 180° и сменой цвета."}),e.jsx("li",{children:"Мягкое свечение и полупрозрачный фон в тон выбранного акцентного цвета."}),e.jsx("li",{children:"Плавное появление контента с использованием современных CSS-свойств."}),e.jsx("li",{children:"Фокусное кольцо доступности для комфортной навигации с клавиатуры."})]})]})}function u(n={}){const{wrapper:d}={...r(),...n.components};return d?e.jsx(d,{...n,children:e.jsx(i,{...n})}):i(n)}export{u as default};
