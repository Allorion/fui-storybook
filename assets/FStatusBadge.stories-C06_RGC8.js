import{j as e}from"./jsx-runtime-D_zvdyIk.js";const W="_statusBadge_1chwj_1",C="_statusDot_1chwj_21",I="_pulse_1chwj_57",M="_statusBadgePulse_1chwj_1",A="_primary_1chwj_80",E="_secondary_1chwj_86",R="_success_1chwj_92",G="_danger_1chwj_98",L="_warning_1chwj_104",J="_info_1chwj_110",O="_light_1chwj_116",X="_dark_1chwj_122",s={statusBadge:W,"size-sm":"_size-sm_1chwj_15",statusDot:C,"size-md":"_size-md_1chwj_26","size-lg":"_size-lg_1chwj_37",pulse:I,statusBadgePulse:M,primary:A,secondary:E,success:R,danger:G,warning:L,info:J,light:O,dark:X},a=({children:z,variant:k="secondary",size:N="md",showDot:V=!0,pulseDot:b=!1,className:P=""})=>{const T=[s.statusBadge,s[k],s[`size-${N}`],P].filter(Boolean).join(" "),q=[s.statusDot,b?s.pulse:""].filter(Boolean).join(" ");return e.jsxs("span",{className:T,children:[V&&e.jsx("span",{className:q,"aria-hidden":"true"}),e.jsx("span",{children:z})]})};a.__docgenInfo={description:`Компонент \`FStatusBadge\` — компактный бейдж-индикатор статуса в палитре fui-kit с поддержкой размеров и пульсации.\r
\r
@component\r
@example\r
<FStatusBadge variant="warning" pulseDot>\r
  На регистрации\r
</FStatusBadge>\r
\r
@example\r
<FStatusBadge variant="success" size="sm" showDot={false}>\r
  Действует\r
</FStatusBadge>\r
\r
@param {ReactNode} children - Текст или элементы, отображаемые внутри бейджа.\r
@param {StatusBadgeVariant} [variant="secondary"] - Цветовая схема из палитры fui-kit.\r
@param {StatusBadgeSize} [size="md"] - Размер бейджа (\`"sm"\` | \`"md"\` | \`"lg"\`).\r
@param {boolean} [showDot=true] - Отображать ли цветовую точку-индикатор.\r
@param {boolean} [pulseDot=false] - Включить эффект мягкой пульсации точки.\r
@param {string} [className=""] - Пользовательский CSS-класс.\r
\r
@returns {JSX.Element} Стилизованный inline-бейдж статуса.`,methods:[],displayName:"FStatusBadge",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Текстовое содержимое или дочерние элементы бейджа."},variant:{required:!1,tsType:{name:"union",raw:`| "primary"   // Фирменный синий (основной / ключевой статус)\r
| "secondary" // Серый (по умолчанию / второстепенный)\r
| "success"   // Зелёный (действует / согласовано / одобрено)\r
| "danger"    // Красный (прекращено / отказ / ошибка)\r
| "warning"   // Янтарный (на регистрации / в ожидании)\r
| "info"      // Бирюзовый (на рассмотрении / информация)\r
| "light"     // Светло-серый (черновик / архив)\r
| "dark"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"info"'},{name:"literal",value:'"light"'},{name:"literal",value:'"dark"'}]},description:'Фирменная цветовая схема индикатора статуса.\r\nПо умолчанию — `"secondary"`.',defaultValue:{value:'"secondary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:'Размер бейджа (`"sm"` — компактный для плотных таблиц, `"md"` — стандартный, `"lg"` — крупный для карточек).\r\nПо умолчанию — `"md"`.',defaultValue:{value:'"md"',computed:!1}},showDot:{required:!1,tsType:{name:"boolean"},description:"Флаг отображения точки-индикатора перед текстом.\r\nПо умолчанию — `true`.",defaultValue:{value:"true",computed:!1}},pulseDot:{required:!1,tsType:{name:"boolean"},description:"Включает плавную пульсирующую анимацию для точки-индикатора.\r\nПо умолчанию — `false`.",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Дополнительные CSS-классы для кастомизации.",defaultValue:{value:'""',computed:!1}}}};const H={title:"Material/FStatusBadge",component:a,argTypes:{variant:{control:"select",options:["primary","secondary","success","danger","warning","info","light","dark"],description:"Цветовая схема из палитры fui-kit"},size:{control:"radio",options:["sm","md","lg"],description:"Размер бейджа"},showDot:{control:"boolean",description:"Флаг отображения точки-индикатора"},pulseDot:{control:"boolean",description:"Включение пульсирующей анимации точки"},children:{control:"text",description:"Текст статуса"},className:{control:"text",description:"Дополнительные CSS-классы"}}},r={args:{variant:"warning",size:"md",showDot:!0,pulseDot:!0,children:"На регистрации"}},t={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(a,{variant:"info",size:"sm",pulseDot:!0,children:"Размер SM (10px)"}),e.jsx(a,{variant:"info",size:"md",pulseDot:!0,children:"Размер MD (11px)"}),e.jsx(a,{variant:"info",size:"lg",pulseDot:!0,children:"Размер LG (13px)"})]})},n={args:{variant:"primary",size:"md",showDot:!0,pulseDot:!0,children:"В обработке"}},i={args:{variant:"success",size:"md",showDot:!0,pulseDot:!1,children:"Действует"}},o={args:{variant:"secondary",size:"sm",showDot:!1,children:"Архив"}},l={render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"10px",alignItems:"center"},children:[e.jsx(a,{variant:"warning",pulseDot:!0,children:"На регистрации"}),e.jsx(a,{variant:"primary",pulseDot:!0,children:"В работе"}),e.jsx(a,{variant:"info",pulseDot:!0,children:"Проверка данных"}),e.jsx(a,{variant:"success",children:"Действует"}),e.jsx(a,{variant:"danger",children:"Прекращено"}),e.jsx(a,{variant:"secondary",children:"Архив"}),e.jsx(a,{variant:"light",children:"Черновик"}),e.jsx(a,{variant:"dark",children:"Служебный"})]})};var d,c,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    size: "md",
    showDot: true,
    pulseDot: true,
    children: "На регистрации"
  }
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,m,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "12px",
    alignItems: "center"
  }}>\r
            <FStatusBadge variant="info" size="sm" pulseDot>\r
                Размер SM (10px)\r
            </FStatusBadge>\r
            <FStatusBadge variant="info" size="md" pulseDot>\r
                Размер MD (11px)\r
            </FStatusBadge>\r
            <FStatusBadge variant="info" size="lg" pulseDot>\r
                Размер LG (13px)\r
            </FStatusBadge>\r
        </div>
}`,...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var h,v,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    showDot: true,
    pulseDot: true,
    children: "В обработке"
  }
}`,...(f=(v=n.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var S,_,w;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: "success",
    size: "md",
    showDot: true,
    pulseDot: false,
    children: "Действует"
  }
}`,...(w=(_=i.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var D,y,B;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    size: "sm",
    showDot: false,
    children: "Архив"
  }
}`,...(B=(y=o.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var x,j,F;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    alignItems: "center"
  }}>\r
            <FStatusBadge variant="warning" pulseDot>На регистрации</FStatusBadge>\r
            <FStatusBadge variant="primary" pulseDot>В работе</FStatusBadge>\r
            <FStatusBadge variant="info" pulseDot>Проверка данных</FStatusBadge>\r
            <FStatusBadge variant="success">Действует</FStatusBadge>\r
            <FStatusBadge variant="danger">Прекращено</FStatusBadge>\r
            <FStatusBadge variant="secondary">Архив</FStatusBadge>\r
            <FStatusBadge variant="light">Черновик</FStatusBadge>\r
            <FStatusBadge variant="dark">Служебный</FStatusBadge>\r
        </div>
}`,...(F=(j=l.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};const K=["PulsingWarning","Sizes","ActiveProcess","Success","WithoutDot","AllVariants"];export{n as ActiveProcess,l as AllVariants,r as PulsingWarning,t as Sizes,i as Success,o as WithoutDot,K as __namedExportsOrder,H as default};
