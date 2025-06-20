import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";const t="_loader_1lhk7_1",l="_primary_1lhk7_42",o="_secondary_1lhk7_46",c="_success_1lhk7_50",d="_danger_1lhk7_54",p="_warning_1lhk7_58",m="_info_1lhk7_62",_="_light_1lhk7_66",u="_dark_1lhk7_70",g="_link_1lhk7_74",e={"authorization-spinner":"_authorization-spinner_1lhk7_1","spinner-item":"_spinner-item_1lhk7_7",loader:t,primary:l,secondary:o,success:c,danger:d,warning:p,info:m,light:_,dark:u,link:g},y=({st:r,color:a="primary",id:s,className:i})=>n.jsx("div",{className:`${e["authorization-spinner"]} ${e.visible} ${i||""}`,id:s,style:r,children:n.jsx("div",{className:`${e["spinner-item"]} ${e[a]}`})});y.__docgenInfo={description:`Компонент \`FProgress\` — индикатор загрузки (спиннер) с поддержкой:
- разных цветов (\`primary\`, \`success\`, \`danger\` и т.д.)
- пользовательских стилей через \`st\`
- CSS Modules для изоляции стилей

Используется как универсальный спиннер, например на экране авторизации.

@component
@example
// Простой пример
<FProgress />

@example
// С кастомным стилем и цветом
<FProgress
  color="danger"
  st={{ margin: '40px auto', width: 'fit-content' }}
/>

@param {React.CSSProperties} [st] - Инлайновые стили.
@param {ProgressColorType} [color='primary'] - Цвет индикатора.
@param {string} [id] - HTML ID.
@param {string} [className] - Пользовательский CSS-класс.

@returns {JSX.Element} — Рендерит спиннер с указанным цветом и стилями.`,methods:[],displayName:"FProgress",props:{st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Инлайновые стили для внешнего контейнера.
@type {React.CSSProperties | undefined}`},color:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'secondary'
| 'success'
| 'danger'
| 'warning'
| 'info'
| 'light'
| 'dark'
| 'link'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'link'"}]},description:`Цвет индикатора загрузки.
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},id:{required:!1,tsType:{name:"string"},description:`Уникальный идентификатор уведомления.
Если не указан, генерируется автоматически.
@type {string | undefined}`},className:{required:!1,tsType:{name:"string"},description:`Дополнительный CSS-класс для кастомизации.
@type {string | undefined}`}}};export{y as F};
