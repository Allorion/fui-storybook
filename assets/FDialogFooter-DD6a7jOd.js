import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{F as s}from"./FCloseIcon-4crl2uvv.js";import{s as t}from"./FDialog-DLm4K6IN.js";const i=({title:n,handleClose:e})=>a.jsxs("div",{className:t["f-dialog__header"],children:[a.jsx("h3",{className:t["f-dialog__header_title"],children:n}),e&&a.jsx("div",{className:t["f-dialog__header_close"],children:a.jsx(s,{handleClose:e,color:"primary",size:30})})]});i.__docgenInfo={description:`Компонент \`FDialogHeader\` — шапка модального окна с заголовком и кнопкой закрытия.

Используется внутри \`FDialog\`, чтобы отобразить заголовок и контролы в верхней части окна.

@component
@example
<FDialogHeader
  title="Подтвердите действие"
  handleClose={() => setIsOpen(false)}
/>

@param {string} [title] - Текст заголовка диалога.
@param {Function} [handleClose] - Callback для закрытия диалога.

@returns {JSX.Element} — Рендерит шапку с заголовком и кнопкой закрытия.`,methods:[],displayName:"FDialogHeader",props:{title:{required:!1,tsType:{name:"string"},description:"Заголовок диалога (отображается как текст)."},handleClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback, вызываемый при нажатии на кнопку закрытия."}}};const l=({st:n,children:e,scroll:r=!0})=>{const o={...r?{overflowY:"auto"}:{},...n};return a.jsx("div",{className:t["f-dialog__body"],style:o,children:e})};l.__docgenInfo={description:`Компонент \`FDialogBody\` — тело модального окна с возможностью прокрутки.

Используется внутри \`FDialog\` для отображения содержимого.

@component
@example
<FDialogBody scroll={false} st={{ padding: '2rem' }}>
  <p>Контент без прокрутки и с кастомным паддингом</p>
</FDialogBody>

@param {React.CSSProperties} [st] - Инлайновые стили.
@param {boolean} [scroll=true] - Если true — включает вертикальную прокрутку.
@param {React.ReactNode} [children] - Содержимое тела диалога.

@returns {JSX.Element} — Рендерит обёртку с заданными стилями и прокруткой.`,methods:[],displayName:"FDialogBody",props:{st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Инлайновые стили для контейнера."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Контент внутри тела диалога (может быть любым React-узлом)."},scroll:{required:!1,tsType:{name:"boolean"},description:`Включает вертикальную прокрутку при переполнении.
@default true`,defaultValue:{value:"true",computed:!1}}}};const d=({children:n,className:e,st:r,id:o})=>a.jsx("div",{id:o,style:r,className:`${t["f-dialog__footer"]} ${e||""}`,children:n});d.__docgenInfo={description:`Компонент \`FDialogFooter\` — область футера модального окна.

Используется внутри \`FDialog\` для отображения кнопок или других элементов в нижней части диалога.

@component
@example
<FDialogFooter
  className="custom-footer"
  st={{ padding: '1rem', justifyContent: 'flex-end' }}
  id="dialog-footer"
>
  <button>Закрыть</button>
</FDialogFooter>

@param {React.ReactNode} [children] - Содержимое футера.
@param {string} [className] - Дополнительный CSS класс.
@param {React.CSSProperties} [st] - Инлайновые стили.
@param {string} [id] - HTML ID элемента.

@returns {JSX.Element} — Рендерит обёртку с заданными стилями и классами.`,methods:[],displayName:"FDialogFooter",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Контент внутри футера (может быть любым React-узлом)."},className:{required:!1,tsType:{name:"string"},description:"Кастомный CSS класс для дополнительной стилизации."},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Инлайновые стили для футера."},id:{required:!1,tsType:{name:"string"},description:"HTML ID для идентификации элемента."}}};export{i as F,l as a,d as b};
