import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as b}from"./index-B3j06Xw8.js";import{F as h}from"./FLoadIcon-B2O1XWAm.js";const x={"f-text-area":"_f-text-area_1ywhr_1"},_=b.forwardRef(({label:t,fullWidth:d,errText:e,helpText:a,st:m,id:f,className:p,load:s=!1,height:i="auto",width:u,...l},c)=>{const g={...{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",width:d?"100%":u||"fit-content",height:i||"auto"},...m},r=f||`textarea-${Math.random().toString(36).substring(2,9)}`;return n.jsxs("div",{className:`f-form-element ${x["f-text-area"]} ${p||""}`,style:g,role:"group",id:r+"-text-area-block","aria-labelledby":t?r+"-label":void 0,children:[t&&n.jsx("label",{id:r+"-label",htmlFor:r,className:`f-form-element__label ${e?"error":""}`,children:t}),n.jsxs("div",{className:`f-form-element__control ${s?"is-loading":""}`,children:[n.jsx("textarea",{ref:c,id:r,className:`f-form-element__control-element ${e?"error":""}`,"aria-invalid":!!e,"aria-describedby":[a?r+"-helptext":null,e!=null&&e.length?r+"-errortext":null].filter(Boolean).join(" "),...l,disabled:l.disabled||s,style:{height:i||"auto"}}),s&&n.jsx("span",{className:"f-form-element__loader",children:n.jsx(h,{size:10})})]}),a&&n.jsx("p",{id:r+"-helptext",className:"f-form-element__helptext",children:a}),typeof e=="string"&&e&&n.jsx("div",{className:"f-form-element__errorblock",children:n.jsx("p",{id:`${r}-errortext`,className:"f-form-element__errorblock_errortext",children:e})}),e&&e.length>0&&n.jsx("div",{className:"f-form-element__errorblock",children:typeof e!="string"&&e.map((y,o)=>n.jsx("p",{id:`${r}-errortext-${o}`,className:"f-form-element__errorblock_errortext",children:y},o))})]})});_.__docgenInfo={description:`Компонент \`FTextArea\` — универсальное поле ввода типа \`<textarea>\` с дополнительными функциями:\r
- Поддержка метки (\`label\`)\r
- Сообщения об ошибках (\`errText\`)\r
- Вспомогательный текст (\`helpText\`)\r
- Индикатор загрузки (\`load\`)\r
- Поддержка стилей и размеров\r
\r
@component\r
@example\r
<FTextArea\r
  label="Комментарий"\r
  value={text}\r
  onChange={(e) => setText(e.target.value)}\r
  fullWidth\r
  errText={['Поле обязательное']}\r
/>\r
\r
@param {IFTextField} props - Пропсы компонента.\r
@param {React.Ref<HTMLTextAreaElement>} ref - Референс на DOM-элемент textarea.\r
@returns {JSX.Element} - Рендерит текстовое поле с меткой, ошибками и возможностью загрузки.`,methods:[],displayName:"FTextArea",props:{label:{required:!1,tsType:{name:"string"},description:`Текст метки (label), отображаемый над полем ввода.\r
@type {string | undefined}`},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Дополнительные инлайновые стили для контейнера текстового поля.\r
@type {React.CSSProperties | undefined}`},value:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:`Значение текстового поля. Может быть не определено, если используется как uncontrolled.\r
@type {string | undefined}`},disabled:{required:!1,tsType:{name:"boolean"},description:`Флаг, указывающий, что поле заблокировано для редактирования.\r
@type {boolean | undefined}`},className:{required:!1,tsType:{name:"string"},description:`Дополнительный CSS-класс для стилизации.\r
@type {string | undefined}`},id:{required:!1,tsType:{name:"string"},description:`Уникальный идентификатор элемента.\r
@type {string | undefined}`},fullWidth:{required:!1,tsType:{name:"boolean"},description:`Флаг, указывающий, должно ли поле занимать всю доступную ширину.\r
@type {boolean | undefined}`},errText:{required:!1,tsType:{name:"union",raw:"string[] | string | undefined",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"},{name:"undefined"}]},description:`Массив сообщений об ошибках, связанных с этим полем.\r
@type {string[] | string | undefined}`},helpText:{required:!1,tsType:{name:"string"},description:`Вспомогательный текст, отображается под текстовым полем.\r
@type {string | undefined}`},load:{required:!1,tsType:{name:"boolean"},description:`Флаг, указывающий, находится ли поле в состоянии загрузки.\r
@type {boolean | undefined}`,defaultValue:{value:"false",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:`Ширина контейнера компонента.\r
@type {string | number | undefined}`},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:`Высота контейнера компонента.\r
@type {string | number | undefined}`,defaultValue:{value:"'auto'",computed:!1}}}};export{_ as F};
