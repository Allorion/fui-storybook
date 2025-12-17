import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as g,e as _}from"./index-DY-snNUy.js";import{F as y}from"./FLoadIcon-BNGbbN3E.js";const d={"f-select":"_f-select_1n6ag_1","f-select__control-element":"_f-select__control-element_1n6ag_5"},R=g.forwardRef(({label:n,st:l,children:s,fullWidth:o,load:a=!1,errText:t,helpText:i,height:p="auto",width:f="fit-content",id:u,...c},S)=>{const h=Object.assign({},{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",width:o?"100%":f||"fit-content",height:p||"auto"},l),r=u||`input-${Math.random().toString(36).substring(2,9)}`;return e.jsxs("div",{className:`f-form-element ${d["f-select"]}`,style:h,id:r+"-select-block",role:"group","aria-labelledby":n?r+"-label":void 0,children:[n&&e.jsx("label",{id:r+"-label",htmlFor:r,className:`f-form-element__label ${t?"error":""}`,children:n}),e.jsxs("div",{className:`f-form-element__control ${a?"is-loading":""}`,children:[e.jsx("select",{ref:S,"aria-invalid":!!t,"aria-describedby":[i?r+"-helptext":null,t!=null&&t.length?r+"-errortext":null].filter(Boolean).join(" "),...c,id:r,disabled:c.disabled||a,className:`f-form-element__control-element ${d["f-select__control-element"]} ${t?"error":""} ${c.className||""}`,children:!a&&s}),a&&e.jsx("div",{className:"f-form-element__loader",children:e.jsx(y,{size:10})})]}),i&&e.jsx("p",{id:r+"-helptext",className:"f-form-element__helptext",children:i}),t&&t.length>0&&e.jsx("div",{className:"f-form-element__errorblock",children:t.map((b,m)=>e.jsx("p",{id:`${r}-errortext-${m}`,className:"f-form-element__errorblock_errortext",children:b},m))})]})});R.__docgenInfo={description:`Компонент \`FSelect\` — кастомное поле \`<select>\` с дополнительными возможностями:\r
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
@default 'auto'`,defaultValue:{value:'"auto"',computed:!1}},id:{required:!1,tsType:{name:"string"},description:"HTML ID элемента."}}};const F=_.forwardRef(({st:n,children:l,...s},o)=>e.jsx("option",{ref:o,style:n,...s,children:l}));F.__docgenInfo={description:`Компонент \`FSelectItem\` — обёртка над \`<option>\`.\r
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
@param {React.ReactNode} [children] - Отображаемый текст или JSX внутри \`<option>\`.\r
\r
@returns {JSX.Element} — Рендерит \`<option>\` с заданными свойствами.`,methods:[],displayName:"FSelectItem",props:{st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Инлайновые стили для элемента `<option>`."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Контент пункта выпадающего списка (отображается как текст внутри `<option>`)."}}};export{R as F,F as a};
