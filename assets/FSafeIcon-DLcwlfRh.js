import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as o}from"./index-B3j06Xw8.js";const r=o.forwardRef(({color:t="primary",size:i=30,st:n,id:s,className:l,handleClick:a,["data-testid"]:c,...d},m)=>e.jsxs("svg",{ref:m,width:i,style:n,className:`f-icon ${a?" clicking-icon":""} ${t} ${l||""}`,viewBox:"0 0 16 16",onClick:a,id:s,"data-testid":c,...d,children:[e.jsx("path",{d:"M1 1.5A1.5 1.5 0 0 1 2.5 0h12A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 1 14.5V13H.5a.5.5 0 0 1 0-1H1V8.5H.5a.5.5 0 0 1 0-1H1V4H.5a.5.5 0 0 1 0-1H1zM2.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5z"}),e.jsx("path",{d:"M13.5 6a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5M4.828 4.464a.5.5 0 0 1 .708 0l1.09 1.09a3 3 0 0 1 3.476 0l1.09-1.09a.5.5 0 1 1 .707.708l-1.09 1.09c.74 1.037.74 2.44 0 3.476l1.09 1.09a.5.5 0 1 1-.707.708l-1.09-1.09a3 3 0 0 1-3.476 0l-1.09 1.09a.5.5 0 1 1-.708-.708l1.09-1.09a3 3 0 0 1 0-3.476l-1.09-1.09a.5.5 0 0 1 0-.708M6.95 6.586a2 2 0 1 0 2.828 2.828A2 2 0 0 0 6.95 6.586"})]}));r.displayName="FSafeIcon";r.__docgenInfo={description:`Компонент FSafeIcon представляет собой SVG иконку сейфа с возможностью настройки цвета, размера и обработки кликов.\r
\r
@function FSafeIcon\r
@param {IFSafeIcon} props - Пропсы компонента.\r
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
<FSafeIcon\r
  color="primary"\r
  size={40}\r
  handleClick={() => console.log('Icon clicked!')}\r
/>`,methods:[],displayName:"FSafeIcon",props:{color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'link'"}]},description:`Цвет иконки. Определяет цветовую схему иконки.\r
@type {('primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link')}\r
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"ReactSVGAttributes['width']",raw:"React.SVGAttributes<SVGSVGElement>['width']"},description:`Размер иконки.\r
@type {number}\r
@default 30`,defaultValue:{value:"30",computed:!1}},st:{required:!1,tsType:{name:"ReactSVGAttributes['style']",raw:"React.SVGAttributes<SVGSVGElement>['style']"},description:`Дополнительные стили для SVG элемента.\r
@type {React.CSSProperties}`},id:{required:!1,tsType:{name:"ReactSVGAttributes['id']",raw:"React.SVGAttributes<SVGSVGElement>['id']"},description:`Уникальный идентификатор для SVG элемента.\r
@type {string | undefined}`},className:{required:!1,tsType:{name:"ReactSVGAttributes['className']",raw:"React.SVGAttributes<SVGSVGElement>['className']"},description:`Дополнительные CSS классы для SVG элемента.\r
@type {string | undefined}`},handleClick:{required:!1,tsType:{name:"ReactDOMAttributes['onClick']",raw:"React.DOMAttributes<SVGSVGElement>['onClick']"},description:`Обработчик события клика по иконке.\r
@type {(() => void) | undefined}`},"data-testid":{required:!1,tsType:{name:"string"},description:"Data-testid для тестирования (опционально)"}}};export{r as F};
