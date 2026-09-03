import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./index-B3j06Xw8.js";const y="_card_1ytel_1",_="_primary_1ytel_69",f="_secondary_1ytel_81",v="_success_1ytel_93",R="_danger_1ytel_105",g="_warning_1ytel_117",x="_info_1ytel_129",E="_light_1ytel_141",h="_dark_1ytel_153",w="_link_1ytel_165",k="_alert_1ytel_177",N="_accordExpand_1ytel_1",n={card:y,"fv-accord-title":"_fv-accord-title_1ytel_44","fv-accord-arrow":"_fv-accord-arrow_1ytel_47",primary:_,secondary:f,success:v,danger:R,warning:g,info:x,light:E,dark:h,link:w,alert:k,"fv-accord-title-text":"_fv-accord-title-text_1ytel_223","fv-accord-content":"_fv-accord-content_1ytel_249",accordExpand:N,"fv-accord-body":"_fv-accord-body_1ytel_258"},S=({variant:t="info",title:s,children:i,id:c,className:o,st:l,onClick:d,open:r,defaultOpen:p})=>{const[m,u]=a.useState(p);return a.useEffect(()=>{r!==void 0&&u(r)},[r]),e.jsx("div",{onClick:d,className:`${n.card} ${o||""}`,id:c,children:e.jsxs("details",{className:n[t],open:m,style:l,children:[e.jsxs("summary",{className:n["fv-accord-title"],children:[e.jsx("span",{className:n["fv-accord-title-text"],children:s}),e.jsx("span",{className:n["fv-accord-arrow"],"aria-hidden":"true",children:e.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"6 9 12 15 18 9"})})})]}),e.jsx("div",{className:n["fv-accord-content"],children:e.jsx("div",{className:n["fv-accord-body"],children:i})})]})})};S.__docgenInfo={description:`Компонент \`FAccordion\` — стильный аккордеон на основе HTML \`<details>\` и \`<summary>\`.\r
\r
Поддерживает:\r
- фирменные цветовые схемы (\`variant\`)\r
- кастомный заголовок (\`title\`)\r
- внешнее управление состоянием (\`open\`)\r
- начальное состояние (\`defaultOpen\`)\r
- плавные физичные анимации раскрытия и вращения шеврона\r
- пользовательские классы и стили\r
\r
@component\r
@example\r
// Аккордеон с начальным открытым состоянием\r
<FAccordion\r
  variant="success"\r
  title="Информация"\r
  defaultOpen={true}\r
>\r
  <p>Содержимое аккордеона</p>\r
</FAccordion>\r
\r
@example\r
// Контролируемый аккордеон\r
const [isOpen, setIsOpen] = useState(false);\r
<FAccordion\r
  title="Детали"\r
  open={isOpen}\r
  onClick={() => setIsOpen(!isOpen)}\r
>\r
  <div>Раскрытый текст</div>\r
</FAccordion>\r
\r
@param {React.ReactNode} [children] - Содержимое, которое будет показано/скрыто.\r
@param {FAccordionVariant} [variant='info'] - Цветовая схема аккордеона.\r
@param {string} [title] - Заголовок аккордеона.\r
@param {string} [id] - ID для идентификации в DOM.\r
@param {string} [className] - Дополнительный CSS-класс.\r
@param {React.CSSProperties} [st] - Дополнительные инлайновые стили.\r
@param {boolean} [open] - Контролируемое состояние открытия.\r
@param {boolean} [defaultOpen=false] - Начальное состояние открытия.\r
@param {React.MouseEventHandler<HTMLDivElement>} [onClick] - Обработчик клика.\r
\r
@returns {JSX.Element} — Рендерит \`<details>\` обёрнутый в \`<div>\` с возможностью управления состоянием.`,methods:[],displayName:"FAccordion",props:{children:{required:!1,tsType:{name:"union",raw:"React.ReactElement | React.ReactNode",elements:[{name:"ReactReactElement",raw:"React.ReactElement"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:`Дочерние элементы, отображаемые внутри аккордеона.\r
@type {React.ReactElement | React.ReactNode}`},variant:{required:!1,tsType:{name:"union",raw:`| 'info'\r
| 'alert'\r
| 'warning'\r
| 'primary'\r
| 'secondary'\r
| 'success'\r
| 'danger'\r
| 'light'\r
| 'dark'`,elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'alert'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:`Вариант цветовой схемы аккордеона.\r
@type {FAccordionVariant}\r
@default 'info'`,defaultValue:{value:"'info'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"Заголовок аккордеона, отображается в элементе `<summary>`.\r\n@type {string}"},id:{required:!1,tsType:{name:"string"},description:`Уникальный идентификатор элемента.\r
@type {string}`},className:{required:!1,tsType:{name:"string"},description:`Дополнительный CSS-класс для стилизации.\r
@type {string}`},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Инлайновые стили для контейнера аккордеона.\r
@type {React.CSSProperties}`},onClick:{required:!1,tsType:{name:"union",raw:"React.MouseEventHandler<HTMLDivElement> | undefined",elements:[{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},{name:"undefined"}]},description:`Обработчик клика по заголовку аккордеона.\r
@type {React.MouseEventHandler<HTMLDivElement> | undefined}`},open:{required:!1,tsType:{name:"boolean"},description:`Флаг, указывающий, должно ли содержимое быть открытым.\r
Если задан, управляет состоянием извне.\r
@type {boolean}`},defaultOpen:{required:!1,tsType:{name:"boolean"},description:`Флаг, указывающий, должно ли содержимое быть открытым по умолчанию.\r
Используется только при монтировании компонента.\r
@type {boolean}`}}};export{S as F};
