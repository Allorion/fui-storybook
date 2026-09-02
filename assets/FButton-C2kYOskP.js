import{j as g}from"./jsx-runtime-D_zvdyIk.js";import{r as w}from"./index-B3j06Xw8.js";const v="_btn_u1cjw_1",R="_disabled_u1cjw_31",n={btn:v,disabled:R,"btn-xs":"_btn-xs_u1cjw_40","btn-sm":"_btn-sm_u1cjw_51","btn-lg":"_btn-lg_u1cjw_62","btn-primary":"_btn-primary_u1cjw_73","btn-outline-primary":"_btn-outline-primary_u1cjw_87","btn-secondary":"_btn-secondary_u1cjw_104","btn-outline-secondary":"_btn-outline-secondary_u1cjw_118","btn-success":"_btn-success_u1cjw_135","btn-outline-success":"_btn-outline-success_u1cjw_149","btn-danger":"_btn-danger_u1cjw_166","btn-outline-danger":"_btn-outline-danger_u1cjw_180","btn-warning":"_btn-warning_u1cjw_197","btn-outline-warning":"_btn-outline-warning_u1cjw_211","btn-info":"_btn-info_u1cjw_228","btn-outline-info":"_btn-outline-info_u1cjw_242","btn-light":"_btn-light_u1cjw_259","btn-outline-light":"_btn-outline-light_u1cjw_274","btn-dark":"_btn-dark_u1cjw_291","btn-outline-dark":"_btn-outline-dark_u1cjw_305","btn-link":"_btn-link_u1cjw_322","btn-outline-link":"_btn-outline-link_u1cjw_338"},t=w.forwardRef(({children:a,variant:r="contained",color:e="primary",size:l="btn-xs",type:i="button",st:u,fullWidth:s,style:o,id:c,className:d,...m},b)=>{const p=c||`button-${Math.random().toString(36).substring(2,9)}`,_={width:s?"100%":"fit-content",...u,...o},f=r==="contained"?`btn-${e}`:`btn-outline-${e}`,y=[n.btn,n[l],n[f],d].filter(Boolean).join(" ");return g.jsx("button",{ref:b,id:p,type:i,style:_,className:y,...m,children:a})});t.displayName="FButton";t.__docgenInfo={description:`Компонент \`FButton\` — универсальная кнопка с поддержкой цветовых схем, размеров и вариантов оформления.\r
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
@default "button"`,defaultValue:{value:"'button'",computed:!1}}}};export{t as F,n as s};
