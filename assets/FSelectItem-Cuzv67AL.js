import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{r as h}from"./index-DY-snNUy.js";import{F as y}from"./FLoadIcon-BHsw31Xd.js";const p={"f-select":"_f-select_16vqs_1","f-select__control-element":"_f-select__control-element_16vqs_5"},_=h.forwardRef(({label:a,st:s,children:i,fullWidth:o,load:r=!1,errText:e,helpText:l,height:c="auto",width:u="fit-content",id:f,...m},b)=>{const S=Object.assign({},{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",width:o?"100%":u||"fit-content",height:c||"auto"},s),n=f||`input-${Math.random().toString(36).substring(2,9)}`;return t.jsxs("div",{className:`f-form-element ${p["f-select"]}`,style:S,id:n+"-select-block",role:"group","aria-labelledby":a?n+"-label":void 0,children:[a&&t.jsx("label",{id:n+"-label",htmlFor:n,className:"f-form-element__label",children:a}),t.jsxs("div",{className:`f-form-element__control ${r?"is-loading":""}`,children:[t.jsx("select",{ref:b,"aria-invalid":!!e,"aria-describedby":[l?n+"-helptext":null,e!=null&&e.length?n+"-errortext":null].filter(Boolean).join(" "),...m,id:n,disabled:m.disabled||r,className:`f-form-element__control-element ${p["f-select__control-element"]} ${e?"error":""} ${m.className||""}`,children:!r&&i}),r&&t.jsx("div",{className:"f-form-element__loader",children:t.jsx(y,{size:10})})]}),l&&t.jsx("p",{id:n+"-helptext",className:"f-form-element__helptext",children:l}),e&&e.length>0&&t.jsx("div",{className:"f-form-element__errorblock",children:e.map((g,d)=>t.jsx("p",{id:`${n}-errortext-${d}`,className:"f-form-element__errorblock_errortext",children:g},d))})]})});_.__docgenInfo={description:`Компонент \`FSelect\` — кастомное поле \`<select>\` с дополнительными возможностями:\r
\r
Поддерживает:\r
- метку\r
- состояние загрузки\r
- сообщения об ошибках\r
- вспомогательный текст\r
- темизацию через CSS-классы\r
\r
@component\r
@example\r
<FSelect\r
  label="Выберите город"\r
  fullWidth\r
  errText={["Поле обязательно"]}\r
  helpText="Выберите значение из списка"\r
>\r
  <option value="">Выберите...</option>\r
  <option value="moscow">Москва</option>\r
</FSelect>\r
\r
@param {string} [label] - Текст метки над полем.\r
@param {React.CSSProperties} [st] - Инлайновые стили для \`<select>\`.\r
@param {React.ReactNode} [children] - Список \`<option>\` или \`<optgroup>\`.\r
@param {boolean} [fullWidth=false] - Поле занимает всю ширину контейнера.\r
@param {boolean} [load=false] - Показывает индикатор загрузки.\r
@param {string[]} [errText] - Сообщения об ошибках.\r
@param {string} [helpText] - Вспомогательный текст под полем.\r
@param {string|number} [width='fit-content'] - Ширина поля.\r
@param {string|number} [height='auto'] - Высота поля.\r
@param {string} [id] - HTML ID.\r
\r
@returns {JSX.Element} — Рендерит \`<select>\` с меткой, стилями и вспомогательным текстом.`,methods:[],displayName:"FSelect",props:{label:{required:!1,tsType:{name:"string"},description:"Текст метки, отображается над полем."},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Инлайновые стили для `<select>`."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Контент внутри `<select>` (обычно список `<option>`)."},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Если true — ширина поля будет 100%."},load:{required:!1,tsType:{name:"boolean"},description:"Флаг состояния загрузки (отключает выбор и показывает лоадер).",defaultValue:{value:"false",computed:!1}},errText:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Сообщения об ошибках, отображаются под полем."},helpText:{required:!1,tsType:{name:"string"},description:"Вспомогательный текст, отображается под инпутом."},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:`Ширина поля.\r
@default 'fit-content'`,defaultValue:{value:'"fit-content"',computed:!1}},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:`Высота поля.\r
@default 'auto'`,defaultValue:{value:'"auto"',computed:!1}},id:{required:!1,tsType:{name:"string"},description:"HTML ID элемента."}}};const R=({st:a,value:s,children:i,disabled:o,onClick:r,selected:e,className:l,id:c})=>t.jsx("option",{value:s,disabled:o,onClick:r,style:a,selected:e,className:l,id:c,children:i});R.__docgenInfo={description:`Компонент \`FSelectItem\` — обёртка над \`<option>\`.\r
\r
Используется внутри \`FSelect\` для создания пунктов выпадающего меню.\r
\r
@component\r
@example\r
<FSelect label="Выберите цвет">\r
  <FSelectItem value="red">Красный</FSelectItem>\r
  <FSelectItem value="blue" disabled>Синий</FSelectItem>\r
</FSelect>\r
\r
@param {React.CSSProperties} [st] - Стили для пункта (редко используется, т.к. браузеры ограничивают стилизацию \`<option>\`).\r
@param {string|number|readonly string[]} [value] - Значение, передаваемое при выборе.\r
@param {React.ReactNode} [children] - Отображаемый текст или JSX внутри \`<option>\`.\r
@param {boolean} [disabled=false] - Блокировка выбора пункта.\r
@param {Function} [onClick] - Callback при клике (не все браузеры поддерживают это у \`<option>\`).\r
@param {boolean} [selected=false] - Выбран ли пункт по умолчанию.\r
@param {string} [className] - Кастомный класс (влияет редко, но можно использовать).\r
@param {string} [id] - HTML ID элемента.\r
\r
@returns {JSX.Element} — Рендерит \`<option>\` с заданными свойствами.`,methods:[],displayName:"FSelectItem",props:{st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Инлайновые стили для элемента `<option>`."},value:{required:!1,tsType:{name:"union",raw:"string | number | readonly string[]",elements:[{name:"string"},{name:"number"},{name:"unknown"}]},description:"Значение, которое будет передано при выборе."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Контент пункта выпадающего списка (отображается как текст внутри `<option>`)."},disabled:{required:!1,tsType:{name:"boolean"},description:"Блокирует выбор текущего пункта."},onClick:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLOptionElement>",elements:[{name:"HTMLOptionElement"}]},description:"Callback, вызываемый при клике на пункт.\r\n⚠️ Обрати внимание: `onClick` у `<option>` может не работать везде корректно!"},selected:{required:!1,tsType:{name:"boolean"},description:"Если true — элемент выбран по умолчанию."},className:{required:!1,tsType:{name:"string"},description:"Кастомный CSS класс (редко используется, но доступен)."},id:{required:!1,tsType:{name:"string"},description:"HTML ID элемента."}}};export{_ as F,R as a};
