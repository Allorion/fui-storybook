import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{e as m}from"./index-B3j06Xw8.js";const a=m.forwardRef(({color:n="primary",size:i=30,st:s,className:t,id:l,handleClick:e,["data-testid"]:d,...o},c)=>r.jsx("svg",{ref:c,onClick:e,className:`f-icon ${e?" clicking-icon":""} ${n} ${t||""}`,id:l,width:i,style:s,focusable:"false","aria-hidden":"true",viewBox:"0 0 24 24","data-testid":d,...o,children:r.jsx("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"})}));a.displayName="FPlusIcon";a.__docgenInfo={description:`Компонент FPlusIcon представляет собой SVG иконку плюса с возможностью настройки цвета, размера и обработки кликов.\r
\r
@function FPlusIcon\r
@param {IFPlusIcon} props - Пропсы компонента.\r
@param {('primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link')} [color='primary'] - Цвет иконки. По умолчанию 'primary'.\r
@param {number} [size=30] - Размер иконки в пикселях. По умолчанию 30.\r
@param {React.CSSProperties} [st] - Дополнительные стили для SVG элемента.\r
@param {string} [id] - Уникальный идентификатор для SVG элемента.\r
@param {string} [className] - Дополнительные CSS классы для SVG элемента.\r
@param {() => void} [handleClick] - Обработчик события клика по иконке.\r
@param {React.Ref<SVGSVGElement>} ref - Ref для SVG элемента.\r
@returns {JSX.Element} - Возвращает SVG элемент с заданными параметрами.\r
\r
@example\r
<FPlusIcon\r
  color="primary"\r
  size={40}\r
  handleClick={() => console.log('Icon clicked!')}\r
/>`,methods:[],displayName:"FPlusIcon",props:{color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'link'"}]},description:`Цвет иконки. Определяет цветовую схему иконки.\r
@type {('primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link')}\r
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"number"},description:`Размер иконки.\r
@type {number}\r
@default 30`,defaultValue:{value:"30",computed:!1}},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Дополнительные стили для SVG элемента.\r
@type {React.CSSProperties}`},id:{required:!1,tsType:{name:"string"},description:`Уникальный идентификатор для SVG элемента.\r
@type {string | undefined}`},className:{required:!1,tsType:{name:"string"},description:`Дополнительные CSS классы для SVG элемента.\r
@type {string | undefined}`},handleClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Обработчик события клика по иконке.\r
@type {(() => void) | undefined}`},"data-testid":{required:!1,tsType:{name:"string"},description:"Data-testid для тестирования (опционально)"}}};export{a as F};
