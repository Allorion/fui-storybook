import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as c}from"./index-B3j06Xw8.js";const t=c.forwardRef(({color:i="primary",size:n=30,st:a,id:s,className:o,handleClick:r,["data-testid"]:l,...d},m)=>e.jsxs("svg",{ref:m,width:n,style:a,className:`f-icon ${r?" clicking-icon":""} ${i} ${o||""}`,viewBox:"-0.5 0 25 25",onClick:r,id:s,fill:"none","data-testid":l,...d,children:[e.jsx("path",{d:"M9.23993 17.55L7.95993 18.84C7.33993 19.47 6.51992 19.79 5.69992 19.79C4.87992 19.79 4.05994 19.47 3.43994 18.84C2.18994 17.58 2.18994 15.54 3.43994 14.29L4.70993 13.02L6.11993 11.6L8.82993 8.86",stroke:"#0F0F0F","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M8.82996 3.86V6.86",stroke:"#0F0F0F","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M5.32996 5.22L6.82996 7.81",stroke:"#0F0F0F","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M9.23993 17.55L7.95993 18.84C7.33993 19.47 6.51992 19.79 5.69992 19.79C4.87992 19.79 4.05994 19.47 3.43994 18.84C2.18994 17.58 2.18994 15.54 3.43994 14.29L4.70993 13.02L6.11993 11.6L8.82993 8.86",stroke:"#0F0F0F","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M14.7599 7.45L16.0399 6.16C16.6599 5.53 17.4799 5.21 18.2999 5.21C19.1199 5.21 19.9399 5.53 20.5599 6.16C21.8099 7.42 21.8099 9.46 20.5599 10.71L19.2899 11.98L17.8799 13.4L15.1699 16.14",stroke:"#0F0F0F","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M12.33 5.22L10.83 7.81",stroke:"#0F0F0F","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M15.1699 21.14V18.14",stroke:"#0F0F0F","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M18.6699 19.79L17.1699 17.19",stroke:"#0F0F0F","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M11.6699 19.79L13.1699 17.19",stroke:"#0F0F0F","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"})]}));t.displayName="FUnlinkIcon";t.__docgenInfo={description:`Компонент FUnlinkIcon представляет собой SVG иконку разрыва связи с возможностью настройки цвета, размера и обработки кликов.\r
\r
@function FUnlinkIcon\r
@param {IFUnlinkIcon} props - Пропсы компонента.\r
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
<FUnlinkIcon\r
  color="primary"\r
  size={40}\r
  handleClick={() => console.log('Icon clicked!')}\r
/>`,methods:[],displayName:"FUnlinkIcon",props:{color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'link'"}]},description:`Цвет иконки. Определяет цветовую схему иконки.\r
@type {('primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link')}\r
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"ReactSVGAttributes['width']",raw:"React.SVGAttributes<SVGSVGElement>['width']"},description:`Размер иконки.\r
@type {number}\r
@default 30`,defaultValue:{value:"30",computed:!1}},st:{required:!1,tsType:{name:"ReactSVGAttributes['style']",raw:"React.SVGAttributes<SVGSVGElement>['style']"},description:`Дополнительные стили для SVG элемента.\r
@type {React.CSSProperties}`},id:{required:!1,tsType:{name:"ReactSVGAttributes['id']",raw:"React.SVGAttributes<SVGSVGElement>['id']"},description:`Уникальный идентификатор для SVG элемента.\r
@type {string | undefined}`},className:{required:!1,tsType:{name:"ReactSVGAttributes['className']",raw:"React.SVGAttributes<SVGSVGElement>['className']"},description:`Дополнительные CSS классы для SVG элемента.\r
@type {string | undefined}`},handleClick:{required:!1,tsType:{name:"ReactDOMAttributes['onClick']",raw:"React.DOMAttributes<SVGSVGElement>['onClick']"},description:`Обработчик события клика по иконке.\r
@type {(() => void) | undefined}`},"data-testid":{required:!1,tsType:{name:"string"},description:"Data-testid для тестирования (опционально)"}}};export{t as F};
