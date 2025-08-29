import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{r as b}from"./index-DY-snNUy.js";import{F as x}from"./FLoadIcon-BM1DdYSY.js";const h={"f-text-area":"_f-text-area_1ywhr_1"},_=b.forwardRef(({label:r,fullWidth:o,errText:e,helpText:a,st:m,id:p,className:f,load:s=!1,height:i="auto",width:u,...l},c)=>{const y={...{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",width:o?"100%":u||"fit-content",height:i||"auto"},...m},n=p||`textarea-${Math.random().toString(36).substring(2,9)}`;return t.jsxs("div",{className:`f-form-element ${h["f-text-area"]} ${f||""}`,style:y,role:"group",id:n+"-text-area-block","aria-labelledby":r?n+"-label":void 0,children:[r&&t.jsx("label",{id:n+"-label",htmlFor:n,className:`f-form-element__label ${e?"error":""}`,children:r}),t.jsxs("div",{className:`f-form-element__control ${s?"is-loading":""}`,children:[t.jsx("textarea",{ref:c,id:n,className:`f-form-element__control-element ${e?"error":""}`,"aria-invalid":!!e,"aria-describedby":[a?n+"-helptext":null,e!=null&&e.length?n+"-errortext":null].filter(Boolean).join(" "),...l,disabled:l.disabled||s,style:{height:i||"auto"}}),s&&t.jsx("span",{className:"f-form-element__loader",children:t.jsx(x,{size:10})})]}),a&&t.jsx("p",{id:n+"-helptext",className:"f-form-element__helptext",children:a}),e&&e.length>0&&t.jsx("div",{className:"f-form-element__errorblock",children:e.map((g,d)=>t.jsx("p",{id:`${n}-errortext-${d}`,className:"f-form-element__errorblock_errortext",children:g},d))})]})});_.__docgenInfo={description:`Компонент \`FTextArea\` — универсальное поле ввода типа \`<textarea>\` с дополнительными функциями:
- Поддержка метки (\`label\`)
- Сообщения об ошибках (\`errText\`)
- Вспомогательный текст (\`helpText\`)
- Индикатор загрузки (\`load\`)
- Поддержка стилей и размеров

@component
@example
<FTextArea
  label="Комментарий"
  value={text}
  onChange={(e) => setText(e.target.value)}
  fullWidth
  errText={['Поле обязательное']}
/>

@param {IFTextField} props - Пропсы компонента.
@param {React.Ref<HTMLTextAreaElement>} ref - Референс на DOM-элемент textarea.
@returns {JSX.Element} - Рендерит текстовое поле с меткой, ошибками и возможностью загрузки.`,methods:[],displayName:"FTextArea",props:{label:{required:!1,tsType:{name:"string"},description:`Текст метки (label), отображаемый над полем ввода.
@type {string | undefined}`},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Дополнительные инлайновые стили для контейнера текстового поля.
@type {React.CSSProperties | undefined}`},value:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:`Значение текстового поля. Может быть не определено, если используется как uncontrolled.
@type {string | undefined}`},disabled:{required:!1,tsType:{name:"boolean"},description:`Флаг, указывающий, что поле заблокировано для редактирования.
@type {boolean | undefined}`},className:{required:!1,tsType:{name:"string"},description:`Дополнительный CSS-класс для стилизации.
@type {string | undefined}`},id:{required:!1,tsType:{name:"string"},description:`Уникальный идентификатор элемента.
@type {string | undefined}`},fullWidth:{required:!1,tsType:{name:"boolean"},description:`Флаг, указывающий, должно ли поле занимать всю доступную ширину.
@type {boolean | undefined}`},errText:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:`Массив сообщений об ошибках, связанных с этим полем.
@type {string[] | undefined}`},helpText:{required:!1,tsType:{name:"string"},description:`Вспомогательный текст, отображается под текстовым полем.
@type {string | undefined}`},load:{required:!1,tsType:{name:"boolean"},description:`Флаг, указывающий, находится ли поле в состоянии загрузки.
@type {boolean | undefined}`,defaultValue:{value:"false",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:`Ширина контейнера компонента.
@type {string | number | undefined}`},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:`Высота контейнера компонента.
@type {string | number | undefined}`,defaultValue:{value:"'auto'",computed:!1}}}};export{_ as F};
