import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{e as o}from"./index-DY-snNUy.js";const r=o.forwardRef(({color:t="primary",size:i=32,st:n,id:s,className:l,handleClick:a,["data-testid"]:d,...c},m)=>e.jsxs("svg",{ref:m,onClick:a,xmlns:"http://www.w3.org/2000/svg",width:i,style:n,className:`f-icon ${a?" clicking-icon":""} ${t} ${l||""}`,viewBox:"0 0 16 16",id:s,"data-testid":d,...c,children:[e.jsx("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),e.jsx("path",{fillRule:"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"})]}));r.displayName="FTrashIcon";r.__docgenInfo={description:`Компонент FTrashIcon представляет собой SVG иконку корзины с возможностью настройки цвета, размера и обработки кликов.\r
\r
@function FTrashIcon\r
@param {IFTrashIcon} props - Пропсы компонента.\r
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
<FTrashIcon\r
  color="primary"\r
  size={40}\r
  handleClick={() => console.log('Icon clicked!')}\r
/>`,methods:[],displayName:"FTrashIcon",props:{color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'link'"}]},description:`Цвет иконки. Определяет цветовую схему иконки.\r
@type {('primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link')}\r
@default 'primary'`,defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"ReactSVGAttributes['width']",raw:"React.SVGAttributes<SVGSVGElement>['width']"},description:`Размер иконки.\r
@type {number}\r
@default 30`,defaultValue:{value:"32",computed:!1}},st:{required:!1,tsType:{name:"ReactSVGAttributes['style']",raw:"React.SVGAttributes<SVGSVGElement>['style']"},description:`Дополнительные стили для SVG элемента.\r
@type {React.CSSProperties}`},id:{required:!1,tsType:{name:"ReactSVGAttributes['id']",raw:"React.SVGAttributes<SVGSVGElement>['id']"},description:`Уникальный идентификатор для SVG элемента.\r
@type {string | undefined}`},className:{required:!1,tsType:{name:"ReactSVGAttributes['className']",raw:"React.SVGAttributes<SVGSVGElement>['className']"},description:`Дополнительные CSS классы для SVG элемента.\r
@type {string | undefined}`},handleClick:{required:!1,tsType:{name:"ReactDOMAttributes['onClick']",raw:"React.DOMAttributes<SVGSVGElement>['onClick']"},description:`Обработчик события клика по иконке.\r
@type {(() => void) | undefined}`},"data-testid":{required:!1,tsType:{name:"string"},description:"Data-testid для тестирования (опционально)"}}};export{r as F};
