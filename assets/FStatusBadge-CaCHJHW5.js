import{j as a}from"./jsx-runtime-D_zvdyIk.js";const d="_statusBadge_1chwj_1",c="_statusDot_1chwj_21",m="_pulse_1chwj_57",p="_statusBadgePulse_1chwj_1",_="_primary_1chwj_80",g="_secondary_1chwj_86",f="_success_1chwj_92",h="_danger_1chwj_98",w="_warning_1chwj_104",j="_info_1chwj_110",y="_light_1chwj_116",v="_dark_1chwj_122",e={statusBadge:d,"size-sm":"_size-sm_1chwj_15",statusDot:c,"size-md":"_size-md_1chwj_26","size-lg":"_size-lg_1chwj_37",pulse:m,statusBadgePulse:p,primary:_,secondary:g,success:f,danger:h,warning:w,info:j,light:y,dark:v},B=({children:s,variant:n="secondary",size:t="md",showDot:r=!0,pulseDot:l=!1,className:i=""})=>{const u=[e.statusBadge,e[n],e[`size-${t}`],i].filter(Boolean).join(" "),o=[e.statusDot,l?e.pulse:""].filter(Boolean).join(" ");return a.jsxs("span",{className:u,children:[r&&a.jsx("span",{className:o,"aria-hidden":"true"}),a.jsx("span",{children:s})]})};B.__docgenInfo={description:`Компонент \`FStatusBadge\` — компактный бейдж-индикатор статуса в палитре fui-kit с поддержкой размеров и пульсации.\r
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
| "dark"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"info"'},{name:"literal",value:'"light"'},{name:"literal",value:'"dark"'}]},description:'Фирменная цветовая схема индикатора статуса.\r\nПо умолчанию — `"secondary"`.',defaultValue:{value:'"secondary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:'Размер бейджа (`"sm"` — компактный для плотных таблиц, `"md"` — стандартный, `"lg"` — крупный для карточек).\r\nПо умолчанию — `"md"`.',defaultValue:{value:'"md"',computed:!1}},showDot:{required:!1,tsType:{name:"boolean"},description:"Флаг отображения точки-индикатора перед текстом.\r\nПо умолчанию — `true`.",defaultValue:{value:"true",computed:!1}},pulseDot:{required:!1,tsType:{name:"boolean"},description:"Включает плавную пульсирующую анимацию для точки-индикатора.\r\nПо умолчанию — `false`.",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Дополнительные CSS-классы для кастомизации.",defaultValue:{value:'""',computed:!1}}}};export{B as F};
