import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as c}from"./index-B3j06Xw8.js";const a=c.forwardRef(({color:n="primary",size:i=30,st:t,id:s,className:d,handleClick:r,["data-testid"]:l,...o},p)=>e.jsxs("svg",{ref:p,width:i,style:t,className:`f-icon ${r?" clicking-icon":""} ${n} ${d||""}`,viewBox:"0 0 32 32",onClick:r,id:s,"data-testid":l,...o,children:[e.jsx("path",{d:"M27.2,8.22H23.78V5.42A3.42,3.42,0,0,0,20.36,2H5.42A3.42,3.42,0,0,0,2,5.42V20.36a3.42,3.42,0,0,0,3.42,3.42h2.8V27.2A2.81,2.81,0,0,0,11,30H27.2A2.81,2.81,0,0,0,30,27.2V11A2.81,2.81,0,0,0,27.2,8.22ZM5.42,21.91a1.55,1.55,0,0,1-1.55-1.55V5.42A1.54,1.54,0,0,1,5.42,3.87H20.36a1.55,1.55,0,0,1,1.55,1.55v2.8H11A2.81,2.81,0,0,0,8.22,11V21.91ZM28.13,27.2a.93.93,0,0,1-.93.93H11a.93.93,0,0,1-.93-.93V11a.93.93,0,0,1,.93-.93H27.2a.93.93,0,0,1,.93.93Z"}),e.jsx("path",{d:"M24.09,18.18H20v-4a.93.93,0,1,0-1.86,0v4h-4a.93.93,0,0,0,0,1.86h4v4.05a.93.93,0,1,0,1.86,0V20h4.05a.93.93,0,1,0,0-1.86Z"})]}));a.displayName="FCopyAddIcon";a.__docgenInfo={description:`Компонент FCopyAddIcon представляет собой SVG иконку копирования с плюсом с возможностью настройки цвета, размера и обработки кликов.\r
\r
@function FCopyAddIcon\r
@param {IFCopyAddIcon} props - Пропсы компонента.\r
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
<FCopyAddIcon\r
  color="dark"\r
  size={40}\r
  handleClick={() => console.log('Icon clicked!')}\r
/>`,methods:[],displayName:"FCopyAddIcon",props:{color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'link'"}]},description:`Цвет иконки. Определяет цветовую схему иконки.\r
@type {('primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link')}\r
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"number"},description:`Размер иконки.\r
@type {number}\r
@default 30`,defaultValue:{value:"30",computed:!1}},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Дополнительные стили для SVG элемента.\r
@type {React.CSSProperties}`},id:{required:!1,tsType:{name:"string"},description:`Уникальный идентификатор для SVG элемента.\r
@type {string | undefined}`},className:{required:!1,tsType:{name:"string"},description:`Дополнительные CSS классы для SVG элемента.\r
@type {string | undefined}`},handleClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Обработчик события клика по иконке.\r
@type {(() => void) | undefined}`},"data-testid":{required:!1,tsType:{name:"string"},description:"Data-testid для тестирования (опционально)"}}};export{a as F};
