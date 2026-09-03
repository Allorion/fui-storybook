import{j as f}from"./jsx-runtime-D_zvdyIk.js";import{r as v}from"./index-B3j06Xw8.js";const R="_btn_gdyy6_1",k="_disabled_gdyy6_31",n={btn:R,disabled:k,"btn-xs":"_btn-xs_gdyy6_40","btn-sm":"_btn-sm_gdyy6_50","btn-lg":"_btn-lg_gdyy6_60","btn-primary":"_btn-primary_gdyy6_70","btn-outline-primary":"_btn-outline-primary_gdyy6_84","btn-secondary":"_btn-secondary_gdyy6_101","btn-outline-secondary":"_btn-outline-secondary_gdyy6_115","btn-success":"_btn-success_gdyy6_132","btn-outline-success":"_btn-outline-success_gdyy6_146","btn-danger":"_btn-danger_gdyy6_163","btn-outline-danger":"_btn-outline-danger_gdyy6_177","btn-warning":"_btn-warning_gdyy6_194","btn-outline-warning":"_btn-outline-warning_gdyy6_208","btn-info":"_btn-info_gdyy6_225","btn-outline-info":"_btn-outline-info_gdyy6_239","btn-light":"_btn-light_gdyy6_256","btn-outline-light":"_btn-outline-light_gdyy6_271","btn-dark":"_btn-dark_gdyy6_288","btn-outline-dark":"_btn-outline-dark_gdyy6_302","btn-link":"_btn-link_gdyy6_319","btn-outline-link":"_btn-outline-link_gdyy6_335"},t=v.forwardRef(({children:a,variant:r="contained",color:e="primary",size:l="btn-xs",type:i="button",st:s,fullWidth:o,style:d,id:u,className:m,...c},y)=>{const b=u||`button-${Math.random().toString(36).substring(2,9)}`,p={width:o?"100%":"fit-content",...s,...d},_=r==="contained"?`btn-${e}`:`btn-outline-${e}`,g=[n.btn,n[l],n[_],m].filter(Boolean).join(" ");return f.jsx("button",{ref:y,id:b,type:i,style:p,className:g,...c,children:a})});t.displayName="FButton";t.__docgenInfo={description:`Компонент \`FButton\` — универсальная кнопка с поддержкой цветовых схем, размеров и вариантов оформления.\r
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
@default 'btn-sm'`,defaultValue:{value:"'btn-xs'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:`Флаг, указывающий, должна ли кнопка занимать всю доступную ширину.\r
@type {boolean}\r
@default false`},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Дополнительные инлайновые стили для кнопки.\r
@type {React.CSSProperties}`},onClick:{required:!1,tsType:{name:"union",raw:"React.MouseEventHandler<HTMLButtonElement> | undefined",elements:[{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},{name:"undefined"}]},description:`Обработчик события клика на кнопку.\r
@type {React.MouseEventHandler<HTMLButtonElement> | undefined}`},id:{required:!1,tsType:{name:"string"},description:`ID кнопки для идентификации в DOM.\r
@type {string}`},type:{required:!1,tsType:{name:"union",raw:'"button" | "submit" | "reset" | undefined',elements:[{name:"literal",value:'"button"'},{name:"literal",value:'"submit"'},{name:"literal",value:'"reset"'},{name:"undefined"}]},description:`Тип кнопки.\r
@type {"button" | "submit" | "reset" | undefined}\r
@default "button"`,defaultValue:{value:"'button'",computed:!1}}}};export{t as F};
