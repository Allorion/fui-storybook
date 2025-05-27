import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{r as o,e as R}from"./index-DY-snNUy.js";import{F as g}from"./FButton-C6QFu6NS.js";import{F as C}from"./FStack-CaU3HVIe.js";import{F as S}from"./FArrowIcon-Bx2-MjZ4.js";const r={"f-dropdown":"_f-dropdown_d5i2z_1","f-dropdown__arrow":"_f-dropdown__arrow_d5i2z_6","f-dropdown__content":"_f-dropdown__content_d5i2z_10","f-dropdown__content-link":"_f-dropdown__content-link_d5i2z_28","f-dropdown__content--open":"_f-dropdown__content--open_d5i2z_43"},f=({label:a,variant:i="contained",color:s="primary",size:d="btn-sm",disabled:l,st:p,className:w,id:_,children:y})=>{const[t,c]=o.useState(!1),m=o.useRef(null);o.useEffect(()=>{if(!t)return;const e=u=>{m.current&&!m.current.contains(u.target)&&c(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[t]);const v=e=>u=>{e.props&&typeof e.props.onClick=="function"&&e.props.onClick(u),c(!1)},b=()=>R.Children.map(y,e=>o.isValidElement(e)&&e.type&&e.type.displayName==="FDropdownItem"?o.cloneElement(e,{onClick:v(e)}):e);return n.jsxs("div",{className:r["f-dropdown"],ref:m,children:[n.jsx(g,{variant:i,color:s,size:d,disabled:l,st:p,className:`${r["f-dropdown__button"]} ${w||""}`,id:_,onClick:()=>c(e=>!e),"aria-haspopup":"menu","aria-expanded":t,children:n.jsxs(C,{direction:"row",spacing:2,justifyContent:"center",alignItems:"center",children:[a,n.jsx(S,{className:r["f-dropdown__arrow"],size:16,color:"light",direction:t?"up":"down"})]})}),n.jsx("div",{className:r["f-dropdown__content"]+(t?" "+r["f-dropdown__content--open"]:""),role:"menu",children:b()})]})};f.displayName="FDropdown";f.__docgenInfo={description:`Компонент \`FDropdown\` — выпадающее меню с кастомной кнопкой и контентом.\r
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
@default 'btn-sm'`,defaultValue:{value:"'btn-sm'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Если true — кнопка заблокирована."},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Инлайновые стили для кнопки."},className:{required:!1,tsType:{name:"string"},description:"Пользовательский CSS класс."},id:{required:!1,tsType:{name:"string"},description:"HTML ID кнопки."}}};const N=({disabled:a,st:i,className:s,id:d,children:l,onClick:p})=>n.jsx("li",{id:d,style:i,className:`${r["f-dropdown__content-link"]} ${s||""} ${a?r.disabled:""}`,onClick:a?void 0:p,"aria-disabled":a,role:"menuitem",children:l});N.__docgenInfo={description:`Компонент \`FDropdownItem\` — пункт выпадающего меню.\r
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
@returns {JSX.Element} — Рендерит пункт меню (\`<li>\`).`,methods:[],displayName:"FDropdownItem",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"Если true — элемент неактивен, клики заблокированы."},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Инлайновые стили для элемента списка."},className:{required:!1,tsType:{name:"string"},description:"Кастомный CSS класс для дополнительной стилизации."},id:{required:!1,tsType:{name:"string"},description:"HTML ID элемента."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Контент внутри пункта меню (может быть текстом или JSX)."},onClick:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLLIElement>",elements:[{name:"HTMLLIElement"}]},description:"Callback, вызываемый при клике на элемент."}}};export{f as F,N as a};
