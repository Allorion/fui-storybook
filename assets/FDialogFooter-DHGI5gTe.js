import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{F as s}from"./FCloseIcon-DSg2auC9.js";import{s as n}from"./FDialog-DLm4K6IN.js";const i=({title:a,handleClose:e})=>r.jsxs("div",{className:n["f-dialog__header"],children:[r.jsx("h3",{className:n["f-dialog__header_title"],children:a}),e&&r.jsx("div",{className:n["f-dialog__header_close"],children:r.jsx(s,{handleClose:e,color:"primary",size:30})})]});i.__docgenInfo={description:`Компонент \`FDialogHeader\` — шапка модального окна с заголовком и кнопкой закрытия.\r
\r
Используется внутри \`FDialog\`, чтобы отобразить заголовок и контролы в верхней части окна.\r
\r
@component\r
@example\r
<FDialogHeader\r
  title="Подтвердите действие"\r
  handleClose={() => setIsOpen(false)}\r
/>\r
\r
@param {string} [title] - Текст заголовка диалога.\r
@param {Function} [handleClose] - Callback для закрытия диалога.\r
\r
@returns {JSX.Element} — Рендерит шапку с заголовком и кнопкой закрытия.`,methods:[],displayName:"FDialogHeader",props:{title:{required:!1,tsType:{name:"string"},description:"Заголовок диалога (отображается как текст)."},handleClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback, вызываемый при нажатии на кнопку закрытия."}}};const l=({st:a,children:e,scroll:t=!0})=>{const o={...t?{overflowY:"auto"}:{},...a};return r.jsx("div",{className:n["f-dialog__body"],style:o,children:e})};l.__docgenInfo={description:`Компонент \`FDialogBody\` — тело модального окна с возможностью прокрутки.\r
\r
Используется внутри \`FDialog\` для отображения содержимого.\r
\r
@component\r
@example\r
<FDialogBody scroll={false} st={{ padding: '2rem' }}>\r
  <p>Контент без прокрутки и с кастомным паддингом</p>\r
</FDialogBody>\r
\r
@param {React.CSSProperties} [st] - Инлайновые стили.\r
@param {boolean} [scroll=true] - Если true — включает вертикальную прокрутку.\r
@param {React.ReactNode} [children] - Содержимое тела диалога.\r
\r
@returns {JSX.Element} — Рендерит обёртку с заданными стилями и прокруткой.`,methods:[],displayName:"FDialogBody",props:{st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Инлайновые стили для контейнера."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Контент внутри тела диалога (может быть любым React-узлом)."},scroll:{required:!1,tsType:{name:"boolean"},description:`Включает вертикальную прокрутку при переполнении.\r
@default true`,defaultValue:{value:"true",computed:!1}}}};const d=({children:a,className:e,st:t,id:o})=>r.jsx("div",{id:o,style:t,className:`${n["f-dialog__footer"]} ${e||""}`,children:a});d.__docgenInfo={description:`Компонент \`FDialogFooter\` — область футера модального окна.\r
\r
Используется внутри \`FDialog\` для отображения кнопок или других элементов в нижней части диалога.\r
\r
@component\r
@example\r
<FDialogFooter\r
  className="custom-footer"\r
  st={{ padding: '1rem', justifyContent: 'flex-end' }}\r
  id="dialog-footer"\r
>\r
  <button>Закрыть</button>\r
</FDialogFooter>\r
\r
@param {React.ReactNode} [children] - Содержимое футера.\r
@param {string} [className] - Дополнительный CSS класс.\r
@param {React.CSSProperties} [st] - Инлайновые стили.\r
@param {string} [id] - HTML ID элемента.\r
\r
@returns {JSX.Element} — Рендерит обёртку с заданными стилями и классами.`,methods:[],displayName:"FDialogFooter",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Контент внутри футера (может быть любым React-узлом)."},className:{required:!1,tsType:{name:"string"},description:"Кастомный CSS класс для дополнительной стилизации."},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Инлайновые стили для футера."},id:{required:!1,tsType:{name:"string"},description:"HTML ID для идентификации элемента."}}};export{i as F,l as a,d as b};
