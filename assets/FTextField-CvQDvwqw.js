import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{r as x}from"./index-DY-snNUy.js";import{F as g}from"./FLoadIcon-BHsw31Xd.js";const _={"f-text-field":"_f-text-field_200bb_1"},F=x.forwardRef(({label:n,type:o="text",fullWidth:d,errText:r,helpText:l,st:m,id:f,className:p,load:i=!1,height:u="auto",width:c,...s},b)=>{const y={...{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",width:d?"100%":c||"fit-content",height:u||"auto"},...m},e=f||`input-${Math.random().toString(36).substring(2,9)}`;return t.jsxs("div",{className:`f-form-element ${_["f-text-field"]} ${p||""}`,style:y,role:"group",id:e+"-text-field-block","aria-labelledby":n?e+"-label":void 0,children:[n&&t.jsx("label",{id:e+"-label",htmlFor:e,className:"f-form-element__label",children:n}),t.jsxs("div",{className:`f-form-element__control ${i?"is-loading":""}`,children:[t.jsx("input",{ref:b,id:e,type:o,className:`f-form-element__control-element ${r?"error":""}`,"aria-invalid":!!r,"aria-describedby":[l?e+"-helptext":null,r!=null&&r.length?e+"-errortext":null].filter(Boolean).join(" "),...s,disabled:s.disabled||i}),i&&t.jsx("span",{className:"f-form-element__loader",children:t.jsx(g,{size:10})})]}),l&&t.jsx("p",{id:e+"-helptext",className:"f-form-element__helptext",children:l}),r&&r.length>0&&t.jsx("div",{className:"f-form-element__errorblock",children:r.map((h,a)=>t.jsx("p",{id:`${e}-errortext-${a}`,className:"f-form-element__errorblock_errortext",children:h},a))})]})});F.__docgenInfo={description:`Компонент FTextField представляет собой поле ввода с дополнительными функциями,\r
такими как метка, сообщения об ошибках, вспомогательный текст и индикатор загрузки.\r
\r
@component\r
@example\r
<FTextField\r
  label="Имя пользователя"\r
  type="text"\r
  fullWidth={true}\r
  errText={['Поле обязательно для заполнения']}\r
  helpText="Введите ваше имя"\r
  load={false}\r
/>\r
\r
@param {IFTextField} props - Пропсы компонента.\r
@param {React.Ref<HTMLInputElement>} ref - Референс для доступа к DOM-элементу.\r
@returns {JSX.Element} - Элемент поля ввода.`,methods:[],displayName:"FTextField",props:{label:{required:!1,tsType:{name:"string"},description:`Текст метки для поля ввода.\r
@type {string | undefined}`},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Дополнительные стили для поля ввода.\r
@type {React.CSSProperties}`},fullWidth:{required:!1,tsType:{name:"boolean"},description:`Флаг, указывающий, должно ли поле занимать всю доступную ширину.\r
@type {boolean | undefined}`},errText:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:`Массив текстов ошибок, связанных с полем ввода.\r
@type {string[] | undefined}`},helpText:{required:!1,tsType:{name:"string"},description:`Вспомогательный текст под полем ввода.\r
@type {string | undefined}`},load:{required:!1,tsType:{name:"boolean"},description:`Флаг, указывающий, находится ли поле в состоянии загрузки.\r
@type {boolean | undefined}`,defaultValue:{value:"false",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:`Ширина поля ввода.\r
@type {string | number | undefined}`},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:`Высота поля ввода.\r
@type {string | number | undefined}`,defaultValue:{value:"'auto'",computed:!1}},type:{defaultValue:{value:"'text'",computed:!1},required:!1}}};export{F};
