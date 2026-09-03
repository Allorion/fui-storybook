import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./index-B3j06Xw8.js";const f="_card_1wjhl_1",R="_warning_1wjhl_16",v="_info_1wjhl_24",y="_alert_1wjhl_32",r={card:f,warning:R,info:v,alert:y,"fv-accord-title":"_fv-accord-title_1wjhl_57"},E=({variant:t="info",title:i,children:s,id:o,className:c,st:l,onClick:d,open:e,defaultOpen:p})=>{const[m,u]=a.useState(p);return a.useEffect(()=>{e!==void 0&&u(e)},[e]),n.jsx("div",{onClick:d,className:`${r.card} ${c||""}`,id:o,children:n.jsxs("details",{className:r[t],open:m,style:l,children:[n.jsx("summary",{className:r["fv-accord-title"],children:i}),s]})})};E.__docgenInfo={description:`Компонент \`FAccordion\` — простой аккордеон на основе HTML \`<details>\` и \`<summary>\`.\r
\r
Поддерживает:\r
- разные цветовые схемы (\`variant\`)\r
- кастомный заголовок (\`title\`)\r
- внешнее управление состоянием (\`open\`)\r
- начальное состояние (\`defaultOpen\`)\r
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
@type {React.ReactElement | React.ReactNode}`},variant:{required:!1,tsType:{name:"union",raw:"'info' | 'alert' | 'warning'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'alert'"},{name:"literal",value:"'warning'"}]},description:`Вариант цветовой схемы аккордеона.\r
@type {FAccordionVariant}\r
@default 'info'`,defaultValue:{value:"'info'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"Заголовок аккордеона, отображается в элементе `<summary>`.\r\n@type {string}"},id:{required:!1,tsType:{name:"string"},description:`Уникальный идентификатор элемента.\r
@type {string}`},className:{required:!1,tsType:{name:"string"},description:`Дополнительный CSS-класс для стилизации.\r
@type {string}`},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Инлайновые стили для контейнера аккордеона.\r
@type {React.CSSProperties}`},onClick:{required:!1,tsType:{name:"union",raw:"React.MouseEventHandler<HTMLDivElement> | undefined",elements:[{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},{name:"undefined"}]},description:`Обработчик клика по заголовку аккордеона.\r
@type {React.MouseEventHandler<HTMLDivElement> | undefined}`},open:{required:!1,tsType:{name:"boolean"},description:`Флаг, указывающий, должно ли содержимое быть открытым.\r
Если задан, управляет состоянием извне.\r
@type {boolean}`},defaultOpen:{required:!1,tsType:{name:"boolean"},description:`Флаг, указывающий, должно ли содержимое быть открытым по умолчанию.\r
Используется только при монтировании компонента.\r
@type {boolean}`}}};export{E as F};
