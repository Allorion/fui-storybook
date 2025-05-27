import{j as d}from"./jsx-runtime-Cf8x2fCZ.js";const c="_btn_ch6o3_1",t={btn:c,"btn-xs":"_btn-xs_ch6o3_21","btn-sm":"_btn-sm_ch6o3_26","btn-lg":"_btn-lg_ch6o3_31","btn-primary":"_btn-primary_ch6o3_35","btn-outline-primary":"_btn-outline-primary_ch6o3_58","btn-secondary":"_btn-secondary_ch6o3_82","btn-outline-secondary":"_btn-outline-secondary_ch6o3_105","btn-success":"_btn-success_ch6o3_129","btn-outline-success":"_btn-outline-success_ch6o3_152","btn-danger":"_btn-danger_ch6o3_176","btn-outline-danger":"_btn-outline-danger_ch6o3_199","btn-warning":"_btn-warning_ch6o3_223","btn-outline-warning":"_btn-outline-warning_ch6o3_246","btn-info":"_btn-info_ch6o3_270","btn-outline-info":"_btn-outline-info_ch6o3_293","btn-light":"_btn-light_ch6o3_317","btn-outline-light":"_btn-outline-light_ch6o3_340","btn-dark":"_btn-dark_ch6o3_364","btn-outline-dark":"_btn-outline-dark_ch6o3_387","btn-link":"_btn-link_ch6o3_411","btn-outline-link":"_btn-outline-link_ch6o3_434"},m=({children:r,variant:i="contained",color:l="primary",size:o="btn-sm",st:a,fullWidth:s,...e})=>{const u=e.id||`button-${Math.random().toString(36).substring(2,9)}`;let n=a!==void 0?{...a}:void 0;return s?n===void 0?n={width:"100%"}:n.width="100%":n===void 0?n={width:"fit-content"}:n.width="fit-content",d.jsx("button",{style:n,type:"button",...e,id:u,className:`${t.btn} ${t[o]} ${t[`btn${i==="contained"?"-":"-outline-"}${l}`]} ${e.className||""}`,children:r})};m.__docgenInfo={description:`Компонент \`FButton\` — универсальная кнопка с поддержкой цветовых схем, размеров и вариантов оформления.\r
\r
Кнопка поддерживает:\r
- разные цвета (\`primary\`, \`secondary\`, \`success\`, \`danger\`, \`warning\`, \`info\`, \`light\`, \`dark\`, \`link\`)\r
- разные размеры (\`btn-lg\`, \`btn-sm\`, \`btn-xs\`)\r
- типы (\`contained\`, \`default\`)\r
- дополнительные стили и классы\r
- автоматическое установление ширины через \`fullWidth\`\r
\r
@component\r
@example\r
// Пример простой кнопки\r
<FButton\r
  variant="contained"\r
  color="primary"\r
  size="btn-lg"\r
  fullWidth={true}\r
  onClick={() => alert('Клик!')}\r
>\r
  Отправить\r
</FButton>\r
\r
@example\r
// Контурная кнопка с пользовательским классом и стилем\r
<FButton\r
  variant="default"\r
  color="danger"\r
  style={{ fontWeight: 'bold' }}\r
  className="custom-button"\r
>\r
  Отменить\r
</FButton>\r
\r
@param {React.ReactNode} children - Содержимое кнопки.\r
@param {'contained' | 'default'} [variant='contained'] - Тип кнопки: заполненная или контурная.\r
@param {'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'} [color='primary'] - Цвет кнопки.\r
@param {'btn-lg' | 'btn-sm' | 'btn-xs'} [size='btn-sm'] - Размер кнопки.\r
@param {React.CSSProperties} [st] - Инлайновые стили.\r
@param {boolean} [fullWidth=false] - Если true, кнопка занимает 100% ширины родителя.\r
@param {React.MouseEventHandler<HTMLButtonElement>} [onClick] - Обработчик клика.\r
@param {"button" | "submit" | "reset"} [type='button'] - HTML-тип кнопки.\r
@param {string} [id] - Уникальный идентификатор кнопки.\r
\r
@returns {JSX.Element} — Рендерит \`<button>\` с заданными стилями и пропсами.`,methods:[],displayName:"FButton",props:{children:{required:!1,tsType:{name:"union",raw:"React.ReactElement | React.ReactNode",elements:[{name:"ReactReactElement",raw:"React.ReactElement"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:`Дочерние элементы, отображаемые внутри кнопки (например, текст или иконка).\r
@type {React.ReactElement | React.ReactNode}`},variant:{required:!1,tsType:{name:"union",raw:"'contained' | 'default'",elements:[{name:"literal",value:"'contained'"},{name:"literal",value:"'default'"}]},description:"Вариант стилей кнопки: заполненный (`contained`) или контурный (`default`).\r\n@type {'contained' | 'default'}\r\n@default 'contained'",defaultValue:{value:"'contained'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'link'"}]},description:`Цветовая схема кнопки.\r
@type {'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'}\r
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'btn-lg' | 'btn-sm' | 'btn-xs'",elements:[{name:"literal",value:"'btn-lg'"},{name:"literal",value:"'btn-sm'"},{name:"literal",value:"'btn-xs'"}]},description:`Размер кнопки.\r
@type {'btn-lg' | 'btn-sm' | 'btn-xs'}\r
@default 'btn-sm'`,defaultValue:{value:"'btn-sm'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:`Флаг, указывающий, должна ли кнопка занимать всю доступную ширину.\r
@type {boolean}\r
@default false`},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Дополнительные инлайновые стили для кнопки.\r
@type {React.CSSProperties}`},onClick:{required:!1,tsType:{name:"union",raw:"React.MouseEventHandler<HTMLButtonElement> | undefined",elements:[{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},{name:"undefined"}]},description:`Обработчик события клика на кнопку.\r
@type {React.MouseEventHandler<HTMLButtonElement> | undefined}`},id:{required:!1,tsType:{name:"string"},description:`ID кнопки для идентификации в DOM.\r
@type {string}`},type:{required:!1,tsType:{name:"union",raw:'"button" | "submit" | "reset" | undefined',elements:[{name:"literal",value:'"button"'},{name:"literal",value:'"submit"'},{name:"literal",value:'"reset"'},{name:"undefined"}]},description:`Тип кнопки.\r
@type {"button" | "submit" | "reset" | undefined}\r
@default "button"`}}};export{m as F,t as s};
