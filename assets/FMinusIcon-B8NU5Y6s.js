import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as m}from"./index-B3j06Xw8.js";const a=m.forwardRef(({color:n="primary",size:i=30,st:s,className:t,id:l,handleClick:r,["data-testid"]:d,...o},p)=>e.jsxs("svg",{ref:p,width:i,style:s,className:`f-icon ${r?" clicking-icon":""} ${n} ${t||""}`,viewBox:"0 0 16 16",onClick:r,id:l,"data-testid":d,...o,children:[e.jsx("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"}),e.jsx("path",{d:"M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"})]}));a.displayName="FMinusIcon";a.__docgenInfo={description:`Компонент FMinusIcon представляет собой SVG иконку минуса с возможностью настройки цвета, размера и обработки кликов.\r
\r
@function FMinusIcon\r
@param {IFMinusIcon} props - Пропсы компонента.\r
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
<FMinusIcon\r
  color="primary"\r
  size={40}\r
  handleClick={() => console.log('Icon clicked!')}\r
/>`,methods:[],displayName:"FMinusIcon",props:{color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'link'"}]},description:`Цвет иконки. Определяет цветовую схему иконки.\r
@type {('primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link')}\r
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"number"},description:`Размер иконки.\r
@type {number}\r
@default 30`,defaultValue:{value:"30",computed:!1}},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Дополнительные стили для SVG элемента.\r
@type {React.CSSProperties}`},id:{required:!1,tsType:{name:"string"},description:`Уникальный идентификатор для SVG элемента.\r
@type {string | undefined}`},className:{required:!1,tsType:{name:"string"},description:`Дополнительные CSS классы для SVG элемента.\r
@type {string | undefined}`},handleClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Обработчик события клика по иконке.\r
@type {(() => void) | undefined}`},"data-testid":{required:!1,tsType:{name:"string"},description:"Data-testid для тестирования (опционально)"}}};export{a as F};
