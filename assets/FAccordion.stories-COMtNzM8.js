import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{F as r}from"./FAccordion-B22xNC65.js";import"./index-B3j06Xw8.js";const h={title:"Material/FAccordion",component:r,argTypes:{variant:{control:{type:"select"},options:["info","alert","warning","primary","secondary","success","danger","light","dark"],defaultValue:"info"}}},n=({variant:d,title:p,defaultOpen:m,open:u,children:y})=>e.jsx(r,{variant:d,title:p,defaultOpen:m,open:u,children:y});n.args={variant:"info",title:"Что такое FAccordion?",defaultOpen:!0,children:e.jsxs("div",{children:[e.jsx("p",{children:"FAccordion — это стильный и наглядный компонент для скрытия и показа контента с поддержкой плавной анимации и фирменной палитры цветов."}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Интеграция с официальной палитрой цветов ",e.jsx("code",{children:"fui-kit"})]}),e.jsx("li",{children:"Плавная анимация раскрытия и физичный поворот стрелочки на 180°"}),e.jsx("li",{children:"Адаптивность, поддержка клавиатуры и доступности"})]})]})};const a=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"640px"},children:[e.jsx(r,{variant:"info",title:"Информационный блок (info)",defaultOpen:!0,children:e.jsxs("p",{children:["Использует бирюзовый оттенок ",e.jsx("code",{children:"#3A9BAE"})," для полезной контекстной информации."]})}),e.jsx(r,{variant:"primary",title:"Основной акцент (primary)",children:e.jsxs("p",{children:["Фирменный синий оттенок ",e.jsx("code",{children:"#1D6FB8"})," с деликатным полупрозрачным фоном и подсветкой."]})}),e.jsx(r,{variant:"success",title:"Успешное действие (success)",children:e.jsxs("p",{children:["Изумрудно-зеленый оттенок ",e.jsx("code",{children:"#3FA65B"})," для подтверждений и успешных статусов."]})}),e.jsx(r,{variant:"warning",title:"Предупреждение (warning)",children:e.jsxs("p",{children:["Теплый янтарный оттенок ",e.jsx("code",{children:"#D88318"})," для внимания и важных замечаний."]})}),e.jsx(r,{variant:"alert",title:"Критическое внимание (alert / danger)",children:e.jsxs("p",{children:["Красный акцент ",e.jsx("code",{children:"#D9463D"})," для ошибок, деструктивных предупреждений и критических действий."]})}),e.jsx(r,{variant:"secondary",title:"Второстепенный блок (secondary)",children:e.jsxs("p",{children:["Нейтральный благородный серый ",e.jsx("code",{children:"#7C7C82"})," для дополнительной информации."]})})]});n.__docgenInfo={description:"",methods:[],displayName:"Playground",props:{children:{required:!1,tsType:{name:"union",raw:"React.ReactElement | React.ReactNode",elements:[{name:"ReactReactElement",raw:"React.ReactElement"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:`Дочерние элементы, отображаемые внутри аккордеона.\r
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
@default 'info'`},title:{required:!1,tsType:{name:"string"},description:"Заголовок аккордеона, отображается в элементе `<summary>`.\r\n@type {string}"},id:{required:!1,tsType:{name:"string"},description:`Уникальный идентификатор элемента.\r
@type {string}`},className:{required:!1,tsType:{name:"string"},description:`Дополнительный CSS-класс для стилизации.\r
@type {string}`},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Инлайновые стили для контейнера аккордеона.\r
@type {React.CSSProperties}`},onClick:{required:!1,tsType:{name:"union",raw:"React.MouseEventHandler<HTMLDivElement> | undefined",elements:[{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},{name:"undefined"}]},description:`Обработчик клика по заголовку аккордеона.\r
@type {React.MouseEventHandler<HTMLDivElement> | undefined}`},open:{required:!1,tsType:{name:"boolean"},description:`Флаг, указывающий, должно ли содержимое быть открытым.\r
Если задан, управляет состоянием извне.\r
@type {boolean}`},defaultOpen:{required:!1,tsType:{name:"boolean"},description:`Флаг, указывающий, должно ли содержимое быть открытым по умолчанию.\r
Используется только при монтировании компонента.\r
@type {boolean}`}}};a.__docgenInfo={description:"",methods:[],displayName:"AllVariants"};var i,t,c;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`({
  variant,
  title,
  defaultOpen,
  open,
  children
}: IFAccordion) => {
  return <FAccordion variant={variant} title={title} defaultOpen={defaultOpen} open={open}>\r
            {children}\r
        </FAccordion>;
}`,...(c=(t=n.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var o,s,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    maxWidth: '640px'
  }}>\r
            <FAccordion variant="info" title="Информационный блок (info)" defaultOpen>\r
                <p>Использует бирюзовый оттенок <code>#3A9BAE</code> для полезной контекстной информации.</p>\r
            </FAccordion>\r
\r
            <FAccordion variant="primary" title="Основной акцент (primary)">\r
                <p>Фирменный синий оттенок <code>#1D6FB8</code> с деликатным полупрозрачным фоном и подсветкой.</p>\r
            </FAccordion>\r
\r
            <FAccordion variant="success" title="Успешное действие (success)">\r
                <p>Изумрудно-зеленый оттенок <code>#3FA65B</code> для подтверждений и успешных статусов.</p>\r
            </FAccordion>\r
\r
            <FAccordion variant="warning" title="Предупреждение (warning)">\r
                <p>Теплый янтарный оттенок <code>#D88318</code> для внимания и важных замечаний.</p>\r
            </FAccordion>\r
\r
            <FAccordion variant="alert" title="Критическое внимание (alert / danger)">\r
                <p>Красный акцент <code>#D9463D</code> для ошибок, деструктивных предупреждений и критических действий.</p>\r
            </FAccordion>\r
\r
            <FAccordion variant="secondary" title="Второстепенный блок (secondary)">\r
                <p>Нейтральный благородный серый <code>#7C7C82</code> для дополнительной информации.</p>\r
            </FAccordion>\r
        </div>;
}`,...(l=(s=a.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const g=["Playground","AllVariants"];export{a as AllVariants,n as Playground,g as __namedExportsOrder,h as default};
