import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-BoUPaUI-.js";import"./index-B9113yIu.js";import{M as i}from"./index-RljIVCIh.js";import"./index-B3j06Xw8.js";import"./preview-BRurh9qK.js";import"./iframe-DA_TYkV3.js";import"./DocsRenderer-CFRXHY34-BkmqcNMx.js";import"./client-DOawrHdJ.js";import"./index-DW0t0JKo.js";import"./index-D_ywfbVi.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";function t(r){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Material/FStatusBadge"}),`
`,n.jsx(e.h1,{id:"️-fstatusbadge--компонент-индикатора-статуса",children:"🏷️ FStatusBadge — компонент индикатора статуса"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["Компактный бейдж для отображения состояний записей и документов на базе палитры ",n.jsx(e.strong,{children:"fui-kit"})," с поддержкой размеров и пульсации."]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-описание",children:"📝 Описание"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"FStatusBadge"})," — это компонент-индикатор, предназначенный для наглядного отображения текущего статуса документов, реестровых записей и этапов жизненного цикла сущностей. Поддерживает 3 размера (",n.jsx(e.code,{children:"sm"}),", ",n.jsx(e.code,{children:"md"}),", ",n.jsx(e.code,{children:"lg"}),"), мягкую анимацию пульсирующей точки (",n.jsx(e.code,{children:"pulseDot"}),") для текущих активных процессов и полную интеграцию с SCSS-палитрой ",n.jsx(e.code,{children:"$palettes-color"}),"."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-примеры-использования",children:"💡 Примеры использования"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import FStatusBadge from "./FStatusBadge";\r
\r
const StatusExample = () => {\r
  return (\r
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>\r
      {/* Процесс в ожидании с пульсирующей точкой */}\r
      <FStatusBadge pulseDot size="md" variant="warning">\r
        На регистрации\r
      </FStatusBadge>\r
\r
      {/* Компактный статический статус для узких ячеек */}\r
      <FStatusBadge size="sm" variant="success">\r
        Действует\r
      </FStatusBadge>\r
\r
      {/* Крупный статус для карточек или детального просмотра */}\r
      <FStatusBadge size="lg" variant="danger">\r
        Прекращено действие\r
      </FStatusBadge>\r
    </div>\r
  );\r
};
`})}),`
`,n.jsx(e.h2,{id:"ℹ️-советы",children:"ℹ️ Советы"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Для черновиков и неактивных записей используйте light или secondary"}),`
`,n.jsxs(e.li,{children:["Для отключения точки в узких колонках передавайте showDot=",!1]}),`
`,n.jsxs(e.li,{children:["Используйте pulseDot=",!0," для пульсации точки"]}),`
`,n.jsx(e.li,{children:'Для сверхплотных таблиц с большим количеством столбцов рекомендуется размер size="sm".'}),`
`]})]})}function F(r={}){const{wrapper:e}={...s(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(t,{...r})}):t(r)}export{F as default};
