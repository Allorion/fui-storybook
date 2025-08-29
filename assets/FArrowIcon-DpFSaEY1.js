import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{e as c}from"./index-DY-snNUy.js";const i=c.forwardRef(({color:t="primary",size:l=30,st:e,direction:r="right",handleClick:a,id:s,className:o,["data-testid"]:d,...p},m)=>(e=Object.assign({},{transform:`rotate(
                         ${r==="down"?90:r==="up"?-90:r==="right"?0:180}deg)`},e),n.jsx("svg",{ref:m,width:l,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",className:`f-icon ${a?" clicking-icon":""} ${t} ${o||""}`,style:e,onClick:a,id:s,"data-testid":d,...p,children:n.jsx("path",{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"})})));i.displayName="FArrowIcon";i.__docgenInfo={description:`Компонент FArrowIcon представляет собой SVG иконку стрелки с возможностью настройки цвета, размера, направления и обработки кликов.

@function FArrowIcon
@param {IFArrowIcon} props - Пропсы компонента.
@param {('primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link')} [color='primary'] - Цвет иконки. По умолчанию 'primary'.
@param {number} [size=30] - Размер иконки в пикселях. По умолчанию 30.
@param {React.CSSProperties} [st] - Дополнительные стили для SVG элемента.
@param {('up' | 'down' | 'left' | 'right')} [direction='right'] - Направление стрелки. По умолчанию 'right'.
@param {() => void} [handleClick] - Обработчик события клика по иконке.
@param {string} [id] - Уникальный идентификатор для SVG элемента.
@param {string} [className] - Дополнительные CSS классы для SVG элемента.
@param {React.Ref<SVGSVGElement>} ref - Ref для SVG элемента.
@returns {JSX.Element} - Возвращает SVG элемент с заданными параметрами.

@example
<FArrowIcon
  color="primary"
  size={40}
  direction="down"
  handleClick={() => console.log('Arrow clicked!')}
/>`,methods:[],displayName:"FArrowIcon",props:{color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'link'"}]},description:`Цвет иконки. Определяет цветовую схему иконки.
@type {('primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link')}
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"number"},description:`Размер иконки.
@type {number}
@default 30`,defaultValue:{value:"30",computed:!1}},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Дополнительные стили для SVG элемента.
@type {React.CSSProperties}`},direction:{required:!1,tsType:{name:"union",raw:"'up' | 'down' | 'left' | 'right'",elements:[{name:"literal",value:"'up'"},{name:"literal",value:"'down'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:`Направление стрелки.
@type {('up' | 'down' | 'left' | 'right')}
@default 'right'`,defaultValue:{value:"'right'",computed:!1}},handleClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Обработчик события клика по иконке.
@type {(() => void) | undefined}`},id:{required:!1,tsType:{name:"string"},description:`Уникальный идентификатор для SVG элемента.
@type {string | undefined}`},className:{required:!1,tsType:{name:"string"},description:`Дополнительные CSS классы для SVG элемента.
@type {string | undefined}`},"data-testid":{required:!1,tsType:{name:"string"},description:"Data-testid для тестирования (опционально)"}}};export{i as F};
