import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{r as b}from"./index-DY-snNUy.js";import{F as x}from"./FLoadIcon-Dfwkb_VK.js";const h={"f-text-area":"_f-text-area_1ywhr_1"},_=b.forwardRef(({label:r,fullWidth:o,errText:t,helpText:a,st:m,id:p,className:f,load:s=!1,height:i="auto",width:u,...l},c)=>{const y={...{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",width:o?"100%":u||"fit-content",height:i||"auto"},...m},e=p||`textarea-${Math.random().toString(36).substring(2,9)}`;return n.jsxs("div",{className:`f-form-element ${h["f-text-area"]} ${f||""}`,style:y,role:"group",id:e+"-text-area-block","aria-labelledby":r?e+"-label":void 0,children:[r&&n.jsx("label",{id:e+"-label",htmlFor:e,className:"f-form-element__label",children:r}),n.jsxs("div",{className:`f-form-element__control ${s?"is-loading":""}`,children:[n.jsx("textarea",{ref:c,id:e,className:`f-form-element__control-element ${t?"error":""}`,"aria-invalid":!!t,"aria-describedby":[a?e+"-helptext":null,t!=null&&t.length?e+"-errortext":null].filter(Boolean).join(" "),...l,disabled:l.disabled||s,style:{height:i||"auto"}}),s&&n.jsx("span",{className:"f-form-element__loader",children:n.jsx(x,{size:10})})]}),a&&n.jsx("p",{id:e+"-helptext",className:"f-form-element__helptext",children:a}),t&&t.length>0&&n.jsx("div",{className:"f-form-element__errorblock",children:t.map((g,d)=>n.jsx("p",{id:`${e}-errortext-${d}`,className:"f-form-element__errorblock_errortext",children:g},d))})]})});_.__docgenInfo={description:`Компонент \`FTextArea\` — универсальное поле ввода типа \`<textarea>\` с дополнительными функциями:
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
