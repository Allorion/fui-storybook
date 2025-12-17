import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as x}from"./index-DY-snNUy.js";import{F as i}from"./FButton-C9wpY3zS.js";import{F as T}from"./FTrashIcon-CD7BhDB1.js";import{F as R}from"./FTextField-9__gOwG2.js";const r={"f-search-box":"_f-search-box_1ce2j_1","f-search-box__input":"_f-search-box__input_1ce2j_7","f-search-box__button":"_f-search-box__button_1ce2j_13","f-search-box__button_search":"_f-search-box__button_search_1ce2j_19","clear-on":"_clear-on_1ce2j_23","f-search-box__button_clear":"_f-search-box__button_clear_1ce2j_26"},g=x.forwardRef(({label:t,fullWidth:c,disabled:a,readOnly:u,errText:p,helpText:d,load:l=!1,children:m,color:f="primary",variant:o="contained",onClickButton:y,clearDataFromInput:n,st:_,type:b,...s},h)=>e.jsxs("div",{className:`${r["f-search-box"]} form-group`,style:_,children:[e.jsx(R,{fullWidth:c,label:t,ref:h,disabled:a,readOnly:u||l,type:b??"text",helpText:d,errText:p,load:l,...s,className:`${r["f-search-box__input"]} ${s.className||""}`}),e.jsxs("div",{className:r["f-search-box__button"],style:{marginTop:t?"21.8px":"0"},children:[e.jsx(i,{className:`${r["f-search-box__button_search"]} ${n?r["clear-on"]:""}`,type:"button",disabled:a,onClick:y,color:f,variant:o,children:m}),n&&e.jsx(i,{className:`${r["f-search-box__button_clear"]}`,type:"button",disabled:a,onClick:n,color:"danger",variant:o,children:e.jsx(T,{color:"light",size:20})})]})]}));g.__docgenInfo={description:`Компонент \`FSearchBox\` — кастомное поле ввода с кнопкой справа и возможностью очистки.\r
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
@param {string[]} [errText] - Сообщения об ошибках.\r
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
@type {boolean | undefined}`},errText:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:`Массив текстовых ошибок, связанных с полем ввода.\r
@type {string[] | undefined}`},helpText:{required:!1,tsType:{name:"string"},description:`Вспомогательный текст под полем ввода.\r
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
@type {() => void | undefined}`}}};export{g as F};
