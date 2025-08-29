import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{r,e as T}from"./index-DY-snNUy.js";import{F as S}from"./FButton-CwfpvuGP.js";import{F as N}from"./FStack-Bs-EBUEz.js";import{F as k}from"./FArrowIcon-DpFSaEY1.js";const n={"f-dropdown":"_f-dropdown_d5i2z_1","f-dropdown__arrow":"_f-dropdown__arrow_d5i2z_6","f-dropdown__content":"_f-dropdown__content_d5i2z_10","f-dropdown__content-link":"_f-dropdown__content-link_d5i2z_28","f-dropdown__content--open":"_f-dropdown__content--open_d5i2z_43"},w=r.forwardRef(({label:o,variant:s="contained",color:l="primary",size:d="btn-sm",disabled:p,st:c,className:_,id:y,children:v,...R},b)=>{const[i,m]=r.useState(!1),F=r.useRef(null),a=b||F;r.useEffect(()=>{if(!i)return;const e=u=>{const f=typeof a=="function"?null:a==null?void 0:a.current;f&&!f.contains(u.target)&&m(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[i,a]);const g=e=>u=>{e.props&&typeof e.props.onClick=="function"&&e.props.onClick(u),m(!1)},C=()=>T.Children.map(v,e=>r.isValidElement(e)&&e.type&&e.type.displayName==="FDropdownItem"?r.cloneElement(e,{onClick:g(e)}):e);return t.jsxs("div",{className:n["f-dropdown"],ref:a,...R,children:[t.jsx(S,{variant:s,color:l,size:d,disabled:p,st:c,className:`${n["f-dropdown__button"]} ${_||""}`,id:y,onClick:()=>m(e=>!e),"aria-haspopup":"menu","aria-expanded":i,children:t.jsxs(N,{direction:"row",spacing:2,justifyContent:"center",alignItems:"center",children:[o,t.jsx(k,{className:n["f-dropdown__arrow"],size:16,color:"light",direction:i?"up":"down"})]})}),t.jsx("div",{className:n["f-dropdown__content"]+(i?" "+n["f-dropdown__content--open"]:""),role:"menu",children:C()})]})});w.displayName="FDropdown";w.__docgenInfo={description:`Компонент \`FDropdown\` — выпадающее меню с кастомной кнопкой и контентом.

Отображает кнопку с иконкой стрелки, при клике показывает содержимое (\`children\`) как выпадающий список.

@component
@example
<FDropdown label="Меню" color="primary" size="btn-sm">
  <div>Пункт 1</div>
  <div>Пункт 2</div>
</FDropdown>

@example
// Использование с FTooltip
<FTooltip title="Подсказка для дропдауна">
  <FDropdown label="Меню с подсказкой">
    <div>Пункт 1</div>
  </FDropdown>
</FTooltip>

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
@default 'btn-sm'`,defaultValue:{value:"'btn-sm'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Если true — кнопка заблокирована."},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Инлайновые стили для кнопки."},className:{required:!1,tsType:{name:"string"},description:"Пользовательский CSS класс."},id:{required:!1,tsType:{name:"string"},description:"HTML ID кнопки."}}};const D=({disabled:o,st:s,className:l,id:d,children:p,onClick:c})=>t.jsx("li",{id:d,style:s,className:`${n["f-dropdown__content-link"]} ${l||""} ${o?n.disabled:""}`,onClick:o?void 0:c,"aria-disabled":o,role:"menuitem",children:p});D.__docgenInfo={description:`Компонент \`FDropdownItem\` — пункт выпадающего меню.

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

@returns {JSX.Element} — Рендерит пункт меню (\`<li>\`).`,methods:[],displayName:"FDropdownItem",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"Если true — элемент неактивен, клики заблокированы."},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Инлайновые стили для элемента списка."},className:{required:!1,tsType:{name:"string"},description:"Кастомный CSS класс для дополнительной стилизации."},id:{required:!1,tsType:{name:"string"},description:"HTML ID элемента."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Контент внутри пункта меню (может быть текстом или JSX)."},onClick:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLLIElement>",elements:[{name:"HTMLLIElement"}]},description:"Callback, вызываемый при клике на элемент."}}};export{w as F,D as a};
