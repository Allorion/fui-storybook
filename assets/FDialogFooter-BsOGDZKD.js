import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{F as i}from"./FCloseIcon-DdRZhJBn.js";const s="_entering_g7izy_19",l="_exiting_g7izy_25",d="_hide_g7izy_50",o={"f-dialog":"_f-dialog_g7izy_1",entering:s,"f-dialog__content":"_f-dialog__content_g7izy_22",exiting:l,hide:d,"f-dialog__header":"_f-dialog__header_g7izy_61","f-dialog__header_title":"_f-dialog__header_title_g7izy_73","f-dialog__header_close":"_f-dialog__header_close_g7izy_84","f-dialog__body":"_f-dialog__body_g7izy_110","f-dialog__footer":"_f-dialog__footer_g7izy_134"},c=({title:r,handleClose:e})=>a.jsxs("div",{className:o["f-dialog__header"],children:[a.jsx("h3",{className:o["f-dialog__header_title"],children:r}),e&&a.jsx("button",{type:"button",className:o["f-dialog__header_close"],onClick:e,"aria-label":"Закрыть диалог",children:a.jsx(i,{color:"secondary",size:18})})]});c.__docgenInfo={description:`Компонент \`FDialogHeader\` — шапка модального окна с заголовком и кнопкой закрытия.

Используется внутри \`FDialog\`, чтобы отобразить заголовок и контролы в верхней части окна.

@component
@example
<FDialogHeader
  title="Подтвердите действие"
  handleClose={() => setIsOpen(false)}
/>

@param {string} [title] - Текст заголовка диалога.
@param {Function} [handleClose] - Callback для закрытия диалога.

@returns {JSX.Element} — Рендерит шапку с заголовком и кнопкой закрытия.`,methods:[],displayName:"FDialogHeader",props:{title:{required:!1,tsType:{name:"string"},description:"Заголовок диалога (отображается как текст)."},handleClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback, вызываемый при нажатии на кнопку закрытия."}}};const _=({st:r,children:e,scroll:t=!0})=>{const n={...t?{overflowY:"auto"}:{},...r};return a.jsx("div",{className:o["f-dialog__body"],style:n,children:e})};_.__docgenInfo={description:`Компонент \`FDialogBody\` — тело модального окна с возможностью прокрутки.\r
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
@default true`,defaultValue:{value:"true",computed:!1}}}};const g=({children:r,className:e,st:t,id:n})=>a.jsx("div",{id:n,style:t,className:`${o["f-dialog__footer"]} ${e||""}`,children:r});g.__docgenInfo={description:`Компонент \`FDialogFooter\` — область футера модального окна.\r
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
@returns {JSX.Element} — Рендерит обёртку с заданными стилями и классами.`,methods:[],displayName:"FDialogFooter",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Контент внутри футера (может быть любым React-узлом)."},className:{required:!1,tsType:{name:"string"},description:"Кастомный CSS класс для дополнительной стилизации."},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Инлайновые стили для футера."},id:{required:!1,tsType:{name:"string"},description:"HTML ID для идентификации элемента."}}};export{c as F,_ as a,g as b,o as s};
