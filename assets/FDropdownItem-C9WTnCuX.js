import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{r as o,e as R}from"./index-DY-snNUy.js";import{F as g}from"./FButton-B6qhCJHc.js";import{F as C}from"./FStack-Bs-EBUEz.js";import{F as S}from"./FArrowIcon-AjsFl5uk.js";const n={"f-dropdown":"_f-dropdown_d5i2z_1","f-dropdown__arrow":"_f-dropdown__arrow_d5i2z_6","f-dropdown__content":"_f-dropdown__content_d5i2z_10","f-dropdown__content-link":"_f-dropdown__content-link_d5i2z_28","f-dropdown__content--open":"_f-dropdown__content--open_d5i2z_43"},f=({label:r,variant:i="contained",color:s="primary",size:d="btn-sm",disabled:l,st:p,className:w,id:_,children:y})=>{const[t,c]=o.useState(!1),m=o.useRef(null);o.useEffect(()=>{if(!t)return;const e=u=>{m.current&&!m.current.contains(u.target)&&c(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[t]);const v=e=>u=>{e.props&&typeof e.props.onClick=="function"&&e.props.onClick(u),c(!1)},b=()=>R.Children.map(y,e=>o.isValidElement(e)&&e.type&&e.type.displayName==="FDropdownItem"?o.cloneElement(e,{onClick:v(e)}):e);return a.jsxs("div",{className:n["f-dropdown"],ref:m,children:[a.jsx(g,{variant:i,color:s,size:d,disabled:l,st:p,className:`${n["f-dropdown__button"]} ${w||""}`,id:_,onClick:()=>c(e=>!e),"aria-haspopup":"menu","aria-expanded":t,children:a.jsxs(C,{direction:"row",spacing:2,justifyContent:"center",alignItems:"center",children:[r,a.jsx(S,{className:n["f-dropdown__arrow"],size:16,color:"light",direction:t?"up":"down"})]})}),a.jsx("div",{className:n["f-dropdown__content"]+(t?" "+n["f-dropdown__content--open"]:""),role:"menu",children:b()})]})};f.displayName="FDropdown";f.__docgenInfo={description:`Компонент \`FDropdown\` — выпадающее меню с кастомной кнопкой и контентом.

Отображает кнопку с иконкой стрелки, при клике показывает содержимое (\`children\`) как выпадающий список.

@component
@example
<FDropdown label="Меню" color="primary" size="btn-sm">
  <div>Пункт 1</div>
  <div>Пункт 2</div>
</FDropdown>

@param {React.ReactNode} [label] - Текст или элемент внутри кнопки.
@param {React.ReactNode} [children] - Содержимое выпадающего списка.
@param {'contained'|'default'} [variant='contained'] - Вариант стиля кнопки.
@param {'primary'|'secondary'|...} [color='primary'] - Цвет кнопки.
@param {'btn-lg'|'btn-sm'|'btn-xs'} [size='btn-sm'] - Размер кнопки.
@param {boolean} [disabled=false] - Блокировка кнопки.
@param {React.CSSProperties} [st] - Инлайновые стили кнопки.
@param {string} [className] - Кастомный класс для кнопки.
@param {string} [id] - HTML ID кнопки.

@returns {JSX.Element} — Рендерит кнопку с выпадающим списком.`,methods:[],displayName:"FDropdown",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Текст или элемент внутри кнопки дропдауна."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Контент, который будет отображён в выпадающем списке."},variant:{required:!1,tsType:{name:"union",raw:"'contained' | 'default'",elements:[{name:"literal",value:"'contained'"},{name:"literal",value:"'default'"}]},description:`Вариант стиля кнопки: 'contained' или 'default'.
@default 'contained'`,defaultValue:{value:"'contained'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'link'"}]},description:`Цветовая тема кнопки.
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'btn-lg' | 'btn-sm' | 'btn-xs'",elements:[{name:"literal",value:"'btn-lg'"},{name:"literal",value:"'btn-sm'"},{name:"literal",value:"'btn-xs'"}]},description:`Размер кнопки.
@default 'btn-sm'`,defaultValue:{value:"'btn-sm'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Если true — кнопка заблокирована."},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Инлайновые стили для кнопки."},className:{required:!1,tsType:{name:"string"},description:"Пользовательский CSS класс."},id:{required:!1,tsType:{name:"string"},description:"HTML ID кнопки."}}};const N=({disabled:r,st:i,className:s,id:d,children:l,onClick:p})=>a.jsx("li",{id:d,style:i,className:`${n["f-dropdown__content-link"]} ${s||""} ${r?n.disabled:""}`,onClick:r?void 0:p,"aria-disabled":r,role:"menuitem",children:l});N.__docgenInfo={description:`Компонент \`FDropdownItem\` — пункт выпадающего меню.

Используется внутри \`FDropdown\` как отдельный элемент меню с поддержкой состояния \`disabled\`.

@component
@example
<FDropdownItem
  id="item-1"
  onClick={() => console.log('Клик по пункту')}
>
  Пункт меню
</FDropdownItem>

@param {boolean} [disabled] - Если true — элемент неактивен и не реагирует на клики.
@param {React.CSSProperties} [st] - Инлайновые стили.
@param {string} [className] - Кастомный CSS класс.
@param {string} [id] - HTML ID элемента.
@param {React.ReactNode} [children] - Контент пункта меню.
@param {Function} [onClick] - Callback при клике на пункт.

@returns {JSX.Element} — Рендерит пункт меню (\`<li>\`).`,methods:[],displayName:"FDropdownItem",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"Если true — элемент неактивен, клики заблокированы."},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Инлайновые стили для элемента списка."},className:{required:!1,tsType:{name:"string"},description:"Кастомный CSS класс для дополнительной стилизации."},id:{required:!1,tsType:{name:"string"},description:"HTML ID элемента."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Контент внутри пункта меню (может быть текстом или JSX)."},onClick:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLLIElement>",elements:[{name:"HTMLLIElement"}]},description:"Callback, вызываемый при клике на элемент."}}};export{f as F,N as a};
