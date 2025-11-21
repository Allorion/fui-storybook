import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as g,e as _}from"./index-DY-snNUy.js";import{F as y}from"./FLoadIcon-BM1DdYSY.js";const d={"f-select":"_f-select_1n6ag_1","f-select__control-element":"_f-select__control-element_1n6ag_5"},R=g.forwardRef(({label:a,st:r,children:s,fullWidth:o,load:l=!1,errText:t,helpText:i,height:p="auto",width:f="fit-content",id:u,...c},S)=>{const h=Object.assign({},{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",width:o?"100%":f||"fit-content",height:p||"auto"},r),n=u||`input-${Math.random().toString(36).substring(2,9)}`;return e.jsxs("div",{className:`f-form-element ${d["f-select"]}`,style:h,id:n+"-select-block",role:"group","aria-labelledby":a?n+"-label":void 0,children:[a&&e.jsx("label",{id:n+"-label",htmlFor:n,className:`f-form-element__label ${t?"error":""}`,children:a}),e.jsxs("div",{className:`f-form-element__control ${l?"is-loading":""}`,children:[e.jsx("select",{ref:S,"aria-invalid":!!t,"aria-describedby":[i?n+"-helptext":null,t!=null&&t.length?n+"-errortext":null].filter(Boolean).join(" "),...c,id:n,disabled:c.disabled||l,className:`f-form-element__control-element ${d["f-select__control-element"]} ${t?"error":""} ${c.className||""}`,children:!l&&s}),l&&e.jsx("div",{className:"f-form-element__loader",children:e.jsx(y,{size:10})})]}),i&&e.jsx("p",{id:n+"-helptext",className:"f-form-element__helptext",children:i}),t&&t.length>0&&e.jsx("div",{className:"f-form-element__errorblock",children:t.map((b,m)=>e.jsx("p",{id:`${n}-errortext-${m}`,className:"f-form-element__errorblock_errortext",children:b},m))})]})});R.__docgenInfo={description:`Компонент \`FSelect\` — кастомное поле \`<select>\` с дополнительными возможностями:

Поддерживает:
- метку
- состояние загрузки
- сообщения об ошибках
- вспомогательный текст
- темизацию через CSS-классы

@component
@example
<FSelect
  label="Выберите город"
  fullWidth
  errText={["Поле обязательно"]}
  helpText="Выберите значение из списка"
>
  <option value="">Выберите...</option>
  <option value="moscow">Москва</option>
</FSelect>

@param {string} [label] - Текст метки над полем.
@param {React.CSSProperties} [st] - Инлайновые стили для \`<select>\`.
@param {React.ReactNode} [children] - Список \`<option>\` или \`<optgroup>\`.
@param {boolean} [fullWidth=false] - Поле занимает всю ширину контейнера.
@param {boolean} [load=false] - Показывает индикатор загрузки.
@param {string[]} [errText] - Сообщения об ошибках.
@param {string} [helpText] - Вспомогательный текст под полем.
@param {string|number} [width='fit-content'] - Ширина поля.
@param {string|number} [height='auto'] - Высота поля.
@param {string} [id] - HTML ID.

@returns {JSX.Element} — Рендерит \`<select>\` с меткой, стилями и вспомогательным текстом.`,methods:[],displayName:"FSelect",props:{label:{required:!1,tsType:{name:"string"},description:"Текст метки, отображается над полем."},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Инлайновые стили для `<select>`."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Контент внутри `<select>` (обычно список `<option>`)."},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Если true — ширина поля будет 100%."},load:{required:!1,tsType:{name:"boolean"},description:"Флаг состояния загрузки (отключает выбор и показывает лоадер).",defaultValue:{value:"false",computed:!1}},errText:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Сообщения об ошибках, отображаются под полем."},helpText:{required:!1,tsType:{name:"string"},description:"Вспомогательный текст, отображается под инпутом."},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:`Ширина поля.
@default 'fit-content'`,defaultValue:{value:'"fit-content"',computed:!1}},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:`Высота поля.
@default 'auto'`,defaultValue:{value:'"auto"',computed:!1}},id:{required:!1,tsType:{name:"string"},description:"HTML ID элемента."}}};const F=_.forwardRef(({st:a,children:r,...s},o)=>e.jsx("option",{ref:o,style:a,...s,children:r}));F.__docgenInfo={description:`Компонент \`FSelectItem\` — обёртка над \`<option>\`.

Используется внутри \`FSelect\` для создания пунктов выпадающего меню.

@component
@example
<FSelect label="Выберите цвет">
  <FSelectItem value="red">Красный</FSelectItem>
  <FSelectItem value="blue" disabled>Синий</FSelectItem>
</FSelect>

@param {React.CSSProperties} [st] - Стили для пункта (редко используется, т.к. браузеры ограничивают стилизацию \`<option>\`).
@param {React.ReactNode} [children] - Отображаемый текст или JSX внутри \`<option>\`.

@returns {JSX.Element} — Рендерит \`<option>\` с заданными свойствами.`,methods:[],displayName:"FSelectItem",props:{st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Инлайновые стили для элемента `<option>`."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Контент пункта выпадающего списка (отображается как текст внутри `<option>`)."}}};export{R as F,F as a};
