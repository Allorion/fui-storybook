import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as x}from"./index-DY-snNUy.js";import{F as i}from"./FButton-B6qhCJHc.js";import{F as T}from"./FTrashIcon-C1tCBYA9.js";import{F as R}from"./FTextField-IIiRIgld.js";const a={"f-search-box":"_f-search-box_1ce2j_1","f-search-box__input":"_f-search-box__input_1ce2j_7","f-search-box__button":"_f-search-box__button_1ce2j_13","f-search-box__button_search":"_f-search-box__button_search_1ce2j_19","clear-on":"_clear-on_1ce2j_23","f-search-box__button_clear":"_f-search-box__button_clear_1ce2j_26"},g=x.forwardRef(({label:t,fullWidth:c,disabled:r,readOnly:u,errText:p,helpText:d,load:l=!1,children:m,color:f="primary",variant:o="contained",onClickButton:y,clearDataFromInput:n,st:_,type:b,...s},h)=>e.jsxs("div",{className:`${a["f-search-box"]} form-group`,style:_,children:[e.jsx(R,{fullWidth:c,label:t,ref:h,disabled:r,readOnly:u||l,type:b??"text",helpText:d,errText:p,load:l,...s,className:`${a["f-search-box__input"]} ${s.className||""}`}),e.jsxs("div",{className:a["f-search-box__button"],style:{marginTop:t?"21.8px":"0"},children:[e.jsx(i,{className:`${a["f-search-box__button_search"]} ${n?a["clear-on"]:""}`,type:"button",disabled:r,onClick:y,color:f,variant:o,children:m}),n&&e.jsx(i,{className:`${a["f-search-box__button_clear"]}`,type:"button",onClick:n,color:"danger",variant:o,children:e.jsx(T,{color:"light",size:20})})]})]}));g.__docgenInfo={description:`Компонент \`FSearchBox\` — кастомное поле ввода с кнопкой справа и возможностью очистки.

Поддерживает:
- метку (\`label\`)
- состояние загрузки (\`load\`)
- ошибки (\`errText\`)
- вспомогательный текст (\`helpText\`)
- пользовательские стили и классы

@component
@example
<FSearchBox
  label="Поиск"
  placeholder="Введите запрос"
  fullWidth
  color="primary"
  variant="contained"
  onClickButton={() => alert('Искать')}
/>

@example
// С функцией очистки и ошибкой
<FSearchBox
  label="Фильтр"
  value={searchValue}
  onChange={(e) => setSearchValue(e.target.value)}
  errText={['Поле обязательное']}
  clearDataFromInput={() => setSearchValue('')}
/>

@param {string} [label] - Текст метки.
@param {React.CSSProperties} [st] - Инлайновые стили для контейнера.
@param {boolean} [fullWidth] - Если true, поле будет растянуто на 100% ширины.
@param {boolean} [disabled] - Блокировка ввода и кнопок.
@param {boolean} [readOnly] - Только для чтения.
@param {string[]} [errText] - Сообщения об ошибках.
@param {string} [helpText] - Вспомогательный текст.
@param {boolean} [load=false] - Показывает спиннер загрузки.
@param {React.ReactNode} [children] - Контент внутри кнопки справа.
@param {ButtonColorType} [color='primary'] - Цвет кнопки справа.
@param {ButtonVariantType} [variant='contained'] - Вариант кнопки: \`contained\` или \`default\`.
@param {Function} [onClickButton] - Обработчик клика по правой кнопке.
@param {Function} [clearDataFromInput] - Очистка данных из поля ввода.
@param {...React.InputHTMLAttributes<HTMLInputElement>} props - Атрибуты HTMLInputElement.

@returns {JSX.Element} — Рендерит поле ввода с кнопками и дополнительными элементами.`,methods:[],displayName:"FSearchBox",props:{label:{required:!1,tsType:{name:"string"},description:`Метка (label), отображаемая над полем ввода.
@type {string | undefined}`},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Инлайновые стили для контейнера поля ввода.
@type {React.CSSProperties | undefined}`},fullWidth:{required:!1,tsType:{name:"boolean"},description:`Флаг, указывающий, должно ли поле занимать всю ширину родителя.
@type {boolean}`},disabled:{required:!1,tsType:{name:"boolean"},description:`Флаг, блокирующий поле ввода.
@type {boolean}`},readOnly:{required:!1,tsType:{name:"boolean"},description:`Флаг, устанавливающий поле ввода как только для чтения.
@type {boolean | undefined}`},errText:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:`Массив текстовых ошибок, связанных с полем ввода.
@type {string[] | undefined}`},helpText:{required:!1,tsType:{name:"string"},description:`Вспомогательный текст под полем ввода.
@type {string | undefined}`},load:{required:!1,tsType:{name:"boolean"},description:`Флаг состояния загрузки — показывает спиннер рядом с полем ввода.
@type {boolean}`,defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"union",raw:"React.ReactElement | React.ReactNode",elements:[{name:"ReactReactElement",raw:"React.ReactElement"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:`Дочерние элементы — например, иконка поиска.
@type {React.ReactElement | React.ReactNode}`},color:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'secondary'
| 'success'
| 'danger'
| 'warning'
| 'info'
| 'light'
| 'dark'
| 'link'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'link'"}]},description:`Цвет кнопки справа.
@type {ButtonColorType}`,defaultValue:{value:"'primary'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'contained' | 'default'",elements:[{name:"literal",value:"'contained'"},{name:"literal",value:"'default'"}]},description:"Вариант кнопки: заполненная (`contained`) или контурная (`default`).\n@type {ButtonVariantType}",defaultValue:{value:"'contained'",computed:!1}},onClickButton:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:`Callback, вызываемый при клике на правую кнопку.
@type {React.MouseEventHandler<HTMLButtonElement> | undefined}`},clearDataFromInput:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Callback, вызываемый при клике на кнопку очистки поля ввода.
@type {() => void | undefined}`}}};export{g as F};
