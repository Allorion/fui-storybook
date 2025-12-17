import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as x}from"./index-DY-snNUy.js";import{F as g}from"./FLoadIcon-BNGbbN3E.js";const _={"f-text-field":"_f-text-field_200bb_1"},F=x.forwardRef(({label:l,type:o="text",fullWidth:d,errText:e,helpText:i,st:m,id:f,className:p,load:s=!1,height:u="auto",width:c,...n},b)=>{const y={...{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",width:d?"100%":c||"fit-content",height:u||"auto"},...m},t=f||`input-${Math.random().toString(36).substring(2,9)}`;return r.jsxs("div",{className:`f-form-element ${_["f-text-field"]} ${p||""}`,style:y,role:"group",id:t+"-text-field-block","aria-labelledby":l?t+"-label":void 0,children:[l&&r.jsx("label",{id:t+"-label",htmlFor:t,className:`f-form-element__label ${e?"error":""}`,children:l}),r.jsxs("div",{className:`f-form-element__control ${s?"is-loading":""}`,children:[r.jsx("input",{ref:b,id:t,type:o,className:`f-form-element__control-element ${e?"error":""}`,"aria-invalid":!!e,"aria-describedby":[i?t+"-helptext":null,e!=null&&e.length?t+"-errortext":null].filter(Boolean).join(" "),...n,step:n.step!==void 0?n.step:"any",disabled:n.disabled||s}),s&&r.jsx("span",{className:"f-form-element__loader",children:r.jsx(g,{size:10})})]}),i&&r.jsx("p",{id:t+"-helptext",className:"f-form-element__helptext",children:i}),e&&e.length>0&&r.jsx("div",{className:"f-form-element__errorblock",children:e.map((h,a)=>r.jsx("p",{id:`${t}-errortext-${a}`,className:"f-form-element__errorblock_errortext",children:h},a))})]})});F.__docgenInfo={description:`Компонент FTextField представляет собой поле ввода с дополнительными функциями,\r
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
