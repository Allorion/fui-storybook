import{j as n}from"./jsx-runtime-D_zvdyIk.js";const t="_loader_1glrn_1",l="_primary_1glrn_42",o="_secondary_1glrn_46",c="_success_1glrn_50",d="_danger_1glrn_54",p="_warning_1glrn_58",m="_info_1glrn_62",g="_light_1glrn_66",_="_dark_1glrn_70",u="_link_1glrn_74",r={"authorization-spinner":"_authorization-spinner_1glrn_1","spinner-item":"_spinner-item_1glrn_7",loader:t,primary:l,secondary:o,success:c,danger:d,warning:p,info:m,light:g,dark:_,link:u},y=({st:e,color:a="primary",id:s,className:i})=>n.jsx("div",{className:`${r["authorization-spinner"]} ${r.visible} ${i||""}`,id:s,style:e,children:n.jsx("div",{className:`${r["spinner-item"]} ${r[a]}`})});y.__docgenInfo={description:`Компонент \`FProgress\` — индикатор загрузки (спиннер) с поддержкой:\r
- разных цветов (\`primary\`, \`success\`, \`danger\` и т.д.)\r
- пользовательских стилей через \`st\`\r
- CSS Modules для изоляции стилей\r
\r
Используется как универсальный спиннер, например на экране авторизации.\r
\r
@component\r
@example\r
// Простой пример\r
<FProgress />\r
\r
@example\r
// С кастомным стилем и цветом\r
<FProgress\r
  color="danger"\r
  st={{ margin: '40px auto', width: 'fit-content' }}\r
/>\r
\r
@param {React.CSSProperties} [st] - Инлайновые стили.\r
@param {ProgressColorType} [color='primary'] - Цвет индикатора.\r
@param {string} [id] - HTML ID.\r
@param {string} [className] - Пользовательский CSS-класс.\r
\r
@returns {JSX.Element} — Рендерит спиннер с указанным цветом и стилями.`,methods:[],displayName:"FProgress",props:{st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Инлайновые стили для внешнего контейнера.\r
@type {React.CSSProperties | undefined}`},color:{required:!1,tsType:{name:"union",raw:`| 'primary'\r
| 'secondary'\r
| 'success'\r
| 'danger'\r
| 'warning'\r
| 'info'\r
| 'light'\r
| 'dark'\r
| 'link'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'link'"}]},description:`Цвет индикатора загрузки.\r
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},id:{required:!1,tsType:{name:"string"},description:`Уникальный идентификатор уведомления.\r
Если не указан, генерируется автоматически.\r
@type {string | undefined}`},className:{required:!1,tsType:{name:"string"},description:`Дополнительный CSS-класс для кастомизации.\r
@type {string | undefined}`}}};export{y as F};
