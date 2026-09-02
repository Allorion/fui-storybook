import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-B3j06Xw8.js";import{F as c}from"./FButton-C2kYOskP.js";import{F as g}from"./FTrashIcon-DpmD7QBY.js";import{F as T}from"./FTextField-Bfcy-agq.js";const r={"f-search-box":"_f-search-box_15oxr_1","f-search-box__input":"_f-search-box__input_15oxr_7","f-search-box__button":"_f-search-box__button_15oxr_13","f-search-box__button_search":"_f-search-box__button_search_15oxr_19","clear-on":"_clear-on_15oxr_23","f-search-box__button_clear":"_f-search-box__button_clear_15oxr_26"},R=h.forwardRef(({label:o,fullWidth:u,disabled:n,readOnly:p,errText:a,helpText:d,load:l=!1,children:m,color:f="primary",variant:s="contained",onClickButton:y,clearDataFromInput:t,st:_,type:x,...i},b)=>e.jsxs("div",{className:`${r["f-search-box"]} form-group`,style:_,children:[e.jsx(T,{fullWidth:u,label:o,ref:b,disabled:n,readOnly:p||l,type:x??"text",helpText:d,errText:typeof a=="string"?[a]:a,load:l,...i,className:`${r["f-search-box__input"]} ${i.className||""}`}),e.jsxs("div",{className:r["f-search-box__button"],style:{marginTop:o?"21.8px":"0"},children:[e.jsx(c,{className:`${r["f-search-box__button_search"]} ${t?r["clear-on"]:""}`,type:"button",disabled:n,onClick:y,color:f,variant:s,children:m}),t&&e.jsx(c,{className:`${r["f-search-box__button_clear"]}`,type:"button",disabled:n,onClick:t,color:"danger",variant:s,children:e.jsx(g,{color:"light",size:20})})]})]}));R.__docgenInfo={description:`Компонент \`FSearchBox\` — кастомное поле ввода с кнопкой справа и возможностью очистки.\r
\r
Поддерживает:\r
- метку (\`label\`)\r
- состояние загрузки (\`load\`)\r
- ошибки (\`errText\`)\r
- вспомогательный текст (\`helpText\`)\r
- пользовательские стили и классы\r
\r
@component\r
@example\r
<FSearchBox\r
  label="Поиск"\r
  placeholder="Введите запрос"\r
  fullWidth\r
  color="primary"\r
  variant="contained"\r
  onClickButton={() => alert('Искать')}\r
/>\r
\r
@example\r
// С функцией очистки и ошибкой\r
<FSearchBox\r
  label="Фильтр"\r
  value={searchValue}\r
  onChange={(e) => setSearchValue(e.target.value)}\r
  errText={['Поле обязательное']}\r
  clearDataFromInput={() => setSearchValue('')}\r
/>\r
\r
@param {string} [label] - Текст метки.\r
@param {React.CSSProperties} [st] - Инлайновые стили для контейнера.\r
@param {boolean} [fullWidth] - Если true, поле будет растянуто на 100% ширины.\r
@param {boolean} [disabled] - Блокировка ввода и кнопок.\r
@param {boolean} [readOnly] - Только для чтения.\r
@param {string[] | string} [errText] - Сообщения об ошибках.\r
@param {string} [helpText] - Вспомогательный текст.\r
@param {boolean} [load=false] - Показывает спиннер загрузки.\r
@param {React.ReactNode} [children] - Контент внутри кнопки справа.\r
@param {ButtonColorType} [color='primary'] - Цвет кнопки справа.\r
@param {ButtonVariantType} [variant='contained'] - Вариант кнопки: \`contained\` или \`default\`.\r
@param {Function} [onClickButton] - Обработчик клика по правой кнопке.\r
@param {Function} [clearDataFromInput] - Очистка данных из поля ввода.\r
@param {...React.InputHTMLAttributes<HTMLInputElement>} props - Атрибуты HTMLInputElement.\r
\r
@returns {JSX.Element} — Рендерит поле ввода с кнопками и дополнительными элементами.`,methods:[],displayName:"FSearchBox",props:{label:{required:!1,tsType:{name:"string"},description:`Метка (label), отображаемая над полем ввода.\r
@type {string | undefined}`},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Инлайновые стили для контейнера поля ввода.\r
@type {React.CSSProperties | undefined}`},fullWidth:{required:!1,tsType:{name:"boolean"},description:`Флаг, указывающий, должно ли поле занимать всю ширину родителя.\r
@type {boolean}`},disabled:{required:!1,tsType:{name:"boolean"},description:`Флаг, блокирующий поле ввода.\r
@type {boolean}`},readOnly:{required:!1,tsType:{name:"boolean"},description:`Флаг, устанавливающий поле ввода как только для чтения.\r
@type {boolean | undefined}`},errText:{required:!1,tsType:{name:"union",raw:"string[] | string | undefined",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"},{name:"undefined"}]},description:`Массив текстов ошибок, связанных с полем ввода.\r
@type {string[] | string | undefined}`},helpText:{required:!1,tsType:{name:"string"},description:`Вспомогательный текст под полем ввода.\r
@type {string | undefined}`},load:{required:!1,tsType:{name:"boolean"},description:`Флаг состояния загрузки — показывает спиннер рядом с полем ввода.\r
@type {boolean}`,defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"union",raw:"React.ReactElement | React.ReactNode",elements:[{name:"ReactReactElement",raw:"React.ReactElement"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:`Дочерние элементы — например, иконка поиска.\r
@type {React.ReactElement | React.ReactNode}`},color:{required:!1,tsType:{name:"union",raw:`| 'primary'\r
| 'secondary'\r
| 'success'\r
| 'danger'\r
| 'warning'\r
| 'info'\r
| 'light'\r
| 'dark'\r
| 'link'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'link'"}]},description:`Цвет кнопки справа.\r
@type {ButtonColorType}`,defaultValue:{value:"'primary'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'contained' | 'default'",elements:[{name:"literal",value:"'contained'"},{name:"literal",value:"'default'"}]},description:"Вариант кнопки: заполненная (`contained`) или контурная (`default`).\r\n@type {ButtonVariantType}",defaultValue:{value:"'contained'",computed:!1}},onClickButton:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:`Callback, вызываемый при клике на правую кнопку.\r
@type {React.MouseEventHandler<HTMLButtonElement> | undefined}`},clearDataFromInput:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Callback, вызываемый при клике на кнопку очистки поля ввода.\r
@type {() => void | undefined}`}}};export{R as F};
