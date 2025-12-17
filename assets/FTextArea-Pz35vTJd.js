import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as b}from"./index-DY-snNUy.js";import{F as x}from"./FLoadIcon-BNGbbN3E.js";const h={"f-text-area":"_f-text-area_1ywhr_1"},_=b.forwardRef(({label:t,fullWidth:o,errText:e,helpText:a,st:m,id:p,className:f,load:s=!1,height:i="auto",width:u,...l},c)=>{const y={...{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",width:o?"100%":u||"fit-content",height:i||"auto"},...m},n=p||`textarea-${Math.random().toString(36).substring(2,9)}`;return r.jsxs("div",{className:`f-form-element ${h["f-text-area"]} ${f||""}`,style:y,role:"group",id:n+"-text-area-block","aria-labelledby":t?n+"-label":void 0,children:[t&&r.jsx("label",{id:n+"-label",htmlFor:n,className:`f-form-element__label ${e?"error":""}`,children:t}),r.jsxs("div",{className:`f-form-element__control ${s?"is-loading":""}`,children:[r.jsx("textarea",{ref:c,id:n,className:`f-form-element__control-element ${e?"error":""}`,"aria-invalid":!!e,"aria-describedby":[a?n+"-helptext":null,e!=null&&e.length?n+"-errortext":null].filter(Boolean).join(" "),...l,disabled:l.disabled||s,style:{height:i||"auto"}}),s&&r.jsx("span",{className:"f-form-element__loader",children:r.jsx(x,{size:10})})]}),a&&r.jsx("p",{id:n+"-helptext",className:"f-form-element__helptext",children:a}),e&&e.length>0&&r.jsx("div",{className:"f-form-element__errorblock",children:e.map((g,d)=>r.jsx("p",{id:`${n}-errortext-${d}`,className:"f-form-element__errorblock_errortext",children:g},d))})]})});_.__docgenInfo={description:`Компонент \`FTextArea\` — универсальное поле ввода типа \`<textarea>\` с дополнительными функциями:\r
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
@type {boolean | undefined}`},errText:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:`Массив сообщений об ошибках, связанных с этим полем.\r
@type {string[] | undefined}`},helpText:{required:!1,tsType:{name:"string"},description:`Вспомогательный текст, отображается под текстовым полем.\r
@type {string | undefined}`},load:{required:!1,tsType:{name:"boolean"},description:`Флаг, указывающий, находится ли поле в состоянии загрузки.\r
@type {boolean | undefined}`,defaultValue:{value:"false",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:`Ширина контейнера компонента.\r
@type {string | number | undefined}`},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:`Высота контейнера компонента.\r
@type {string | number | undefined}`,defaultValue:{value:"'auto'",computed:!1}}}};export{_ as F};
