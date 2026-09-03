import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as a,e as T}from"./index-B3j06Xw8.js";import{F as S}from"./FButton-WshjMl_j.js";import{F as N}from"./FStack-Bjsadt8I.js";import{F as k}from"./FArrowIcon-e6BJPakw.js";const D="_disabled_2ty2i_40",r={"f-dropdown":"_f-dropdown_2ty2i_1","f-dropdown__arrow":"_f-dropdown__arrow_2ty2i_6","f-dropdown__content":"_f-dropdown__content_2ty2i_10","f-dropdown__content-link":"_f-dropdown__content-link_2ty2i_28",disabled:D,"f-dropdown__content--open":"_f-dropdown__content--open_2ty2i_48"},w=a.forwardRef(({label:o,variant:s="contained",color:l="primary",size:d="btn-sm",disabled:p,st:c,className:_,id:y,children:b,...v},R)=>{const[i,m]=a.useState(!1),F=a.useRef(null),n=R||F;a.useEffect(()=>{if(!i)return;const e=u=>{const f=typeof n=="function"?null:n==null?void 0:n.current;f&&!f.contains(u.target)&&m(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[i,n]);const g=e=>u=>{e.props&&typeof e.props.onClick=="function"&&e.props.onClick(u),m(!1)},C=()=>T.Children.map(b,e=>a.isValidElement(e)&&e.type&&e.type.displayName==="FDropdownItem"?a.cloneElement(e,{onClick:g(e)}):e);return t.jsxs("div",{className:r["f-dropdown"],ref:n,...v,children:[t.jsx(S,{variant:s,color:l,size:d,disabled:p,st:c,className:`${r["f-dropdown__button"]} ${_||""}`,id:y,onClick:()=>m(e=>!e),"aria-haspopup":"menu","aria-expanded":i,children:t.jsxs(N,{direction:"row",spacing:2,justifyContent:"center",alignItems:"center",children:[o,t.jsx(k,{className:r["f-dropdown__arrow"],size:16,color:"light",direction:i?"up":"down"})]})}),t.jsx("div",{className:r["f-dropdown__content"]+(i?" "+r["f-dropdown__content--open"]:""),role:"menu",children:C()})]})});w.displayName="FDropdown";w.__docgenInfo={description:`Компонент \`FDropdown\` — выпадающее меню с кастомной кнопкой и контентом.\r
\r
Отображает кнопку с иконкой стрелки, при клике показывает содержимое (\`children\`) как выпадающий список.\r
\r
@component\r
@example\r
<FDropdown label="Меню" color="primary" size="btn-sm">\r
  <div>Пункт 1</div>\r
  <div>Пункт 2</div>\r
</FDropdown>\r
\r
@example\r
// Использование с FTooltip\r
<FTooltip title="Подсказка для дропдауна">\r
  <FDropdown label="Меню с подсказкой">\r
    <div>Пункт 1</div>\r
  </FDropdown>\r
</FTooltip>\r
\r
@param {React.ReactNode} [label] - Текст или элемент внутри кнопки.\r
@param {React.ReactNode} [children] - Содержимое выпадающего списка.\r
@param {'contained'|'default'} [variant='contained'] - Вариант стиля кнопки.\r
@param {'primary'|'secondary'|...} [color='primary'] - Цвет кнопки.\r
@param {'btn-lg'|'btn-sm'|'btn-xs'} [size='btn-sm'] - Размер кнопки.\r
@param {boolean} [disabled=false] - Блокировка кнопки.\r
@param {React.CSSProperties} [st] - Инлайновые стили кнопки.\r
@param {string} [className] - Кастомный класс для кнопки.\r
@param {string} [id] - HTML ID кнопки.\r
\r
@returns {JSX.Element} — Рендерит кнопку с выпадающим списком.`,methods:[],displayName:"FDropdown",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Текст или элемент внутри кнопки дропдауна."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Контент, который будет отображён в выпадающем списке."},variant:{required:!1,tsType:{name:"union",raw:"'contained' | 'default'",elements:[{name:"literal",value:"'contained'"},{name:"literal",value:"'default'"}]},description:`Вариант стиля кнопки: 'contained' или 'default'.\r
@default 'contained'`,defaultValue:{value:"'contained'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'link'"}]},description:`Цветовая тема кнопки.\r
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'btn-lg' | 'btn-sm' | 'btn-xs'",elements:[{name:"literal",value:"'btn-lg'"},{name:"literal",value:"'btn-sm'"},{name:"literal",value:"'btn-xs'"}]},description:`Размер кнопки.\r
@default 'btn-sm'`,defaultValue:{value:"'btn-sm'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Если true — кнопка заблокирована."},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Инлайновые стили для кнопки."},className:{required:!1,tsType:{name:"string"},description:"Пользовательский CSS класс."},id:{required:!1,tsType:{name:"string"},description:"HTML ID кнопки."}}};const I=({disabled:o,st:s,className:l,id:d,children:p,onClick:c})=>t.jsx("li",{id:d,style:s,className:`${r["f-dropdown__content-link"]} ${l||""} ${o?r.disabled:""}`,onClick:o?void 0:c,"aria-disabled":o,role:"menuitem",children:p});I.__docgenInfo={description:`Компонент \`FDropdownItem\` — пункт выпадающего меню.\r
\r
Используется внутри \`FDropdown\` как отдельный элемент меню с поддержкой состояния \`disabled\`.\r
\r
@component\r
@example\r
<FDropdownItem\r
  id="item-1"\r
  onClick={() => console.log('Клик по пункту')}\r
>\r
  Пункт меню\r
</FDropdownItem>\r
\r
@param {boolean} [disabled] - Если true — элемент неактивен и не реагирует на клики.\r
@param {React.CSSProperties} [st] - Инлайновые стили.\r
@param {string} [className] - Кастомный CSS класс.\r
@param {string} [id] - HTML ID элемента.\r
@param {React.ReactNode} [children] - Контент пункта меню.\r
@param {Function} [onClick] - Callback при клике на пункт.\r
\r
@returns {JSX.Element} — Рендерит пункт меню (\`<li>\`).`,methods:[],displayName:"FDropdownItem",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"Если true — элемент неактивен, клики заблокированы."},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Инлайновые стили для элемента списка."},className:{required:!1,tsType:{name:"string"},description:"Кастомный CSS класс для дополнительной стилизации."},id:{required:!1,tsType:{name:"string"},description:"HTML ID элемента."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Контент внутри пункта меню (может быть текстом или JSX)."},onClick:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLLIElement>",elements:[{name:"HTMLLIElement"}]},description:"Callback, вызываемый при клике на элемент."}}};export{w as F,I as a};
