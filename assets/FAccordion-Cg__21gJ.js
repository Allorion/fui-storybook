import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{r as a}from"./index-DY-snNUy.js";const f="_card_1pttw_1",R="_warning_1pttw_16",v="_info_1pttw_24",y="_alert_1pttw_32",t={card:f,warning:R,info:v,alert:y,"fv-accord-title":"_fv-accord-title_1pttw_57"},E=({variant:r="info",title:i,children:s,id:o,className:c,st:l,onClick:d,open:e,defaultOpen:p})=>{const[m,u]=a.useState(p);return a.useEffect(()=>{e!==void 0&&u(e)},[e]),n.jsx("div",{onClick:d,className:`${t.card} ${c||""}`,id:o,children:n.jsxs("details",{className:t[r],open:m,style:l,children:[n.jsx("summary",{className:t["fv-accord-title"],children:i}),s]})})};E.__docgenInfo={description:`Компонент \`FAccordion\` — простой аккордеон на основе HTML \`<details>\` и \`<summary>\`.

Поддерживает:
- разные цветовые схемы (\`variant\`)
- кастомный заголовок (\`title\`)
- внешнее управление состоянием (\`open\`)
- начальное состояние (\`defaultOpen\`)
- пользовательские классы и стили

@component
@example
// Аккордеон с начальным открытым состоянием
<FAccordion
  variant="success"
  title="Информация"
  defaultOpen={true}
>
  <p>Содержимое аккордеона</p>
</FAccordion>

@example
// Контролируемый аккордеон
const [isOpen, setIsOpen] = useState(false);
<FAccordion
  title="Детали"
  open={isOpen}
  onClick={() => setIsOpen(!isOpen)}
>
  <div>Раскрытый текст</div>
</FAccordion>

@param {React.ReactNode} [children] - Содержимое, которое будет показано/скрыто.
@param {FAccordionVariant} [variant='info'] - Цветовая схема аккордеона.
@param {string} [title] - Заголовок аккордеона.
@param {string} [id] - ID для идентификации в DOM.
@param {string} [className] - Дополнительный CSS-класс.
@param {React.CSSProperties} [st] - Дополнительные инлайновые стили.
@param {boolean} [open] - Контролируемое состояние открытия.
@param {boolean} [defaultOpen=false] - Начальное состояние открытия.
@param {React.MouseEventHandler<HTMLDivElement>} [onClick] - Обработчик клика.

@returns {JSX.Element} — Рендерит \`<details>\` обёрнутый в \`<div>\` с возможностью управления состоянием.`,methods:[],displayName:"FAccordion",props:{children:{required:!1,tsType:{name:"union",raw:"React.ReactElement | React.ReactNode",elements:[{name:"ReactReactElement",raw:"React.ReactElement"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:`Дочерние элементы, отображаемые внутри аккордеона.
@type {React.ReactElement | React.ReactNode}`},variant:{required:!1,tsType:{name:"union",raw:"'info' | 'alert' | 'warning'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'alert'"},{name:"literal",value:"'warning'"}]},description:`Вариант цветовой схемы аккордеона.
@type {FAccordionVariant}
@default 'info'`,defaultValue:{value:"'info'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"Заголовок аккордеона, отображается в элементе `<summary>`.\n@type {string}"},id:{required:!1,tsType:{name:"string"},description:`Уникальный идентификатор элемента.
@type {string}`},className:{required:!1,tsType:{name:"string"},description:`Дополнительный CSS-класс для стилизации.
@type {string}`},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Инлайновые стили для контейнера аккордеона.
@type {React.CSSProperties}`},onClick:{required:!1,tsType:{name:"union",raw:"React.MouseEventHandler<HTMLDivElement> | undefined",elements:[{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},{name:"undefined"}]},description:`Обработчик клика по заголовку аккордеона.
@type {React.MouseEventHandler<HTMLDivElement> | undefined}`},open:{required:!1,tsType:{name:"boolean"},description:`Флаг, указывающий, должно ли содержимое быть открытым.
Если задан, управляет состоянием извне.
@type {boolean}`},defaultOpen:{required:!1,tsType:{name:"boolean"},description:`Флаг, указывающий, должно ли содержимое быть открытым по умолчанию.
Используется только при монтировании компонента.
@type {boolean}`}}};export{E as F};
