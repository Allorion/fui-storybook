import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{r as x}from"./index-DY-snNUy.js";import{F as g}from"./FLoadIcon-BM1DdYSY.js";const _={"f-text-field":"_f-text-field_200bb_1"},F=x.forwardRef(({label:l,type:o="text",fullWidth:d,errText:e,helpText:i,st:m,id:f,className:p,load:s=!1,height:u="auto",width:c,...r},b)=>{const y={...{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",width:d?"100%":c||"fit-content",height:u||"auto"},...m},t=f||`input-${Math.random().toString(36).substring(2,9)}`;return n.jsxs("div",{className:`f-form-element ${_["f-text-field"]} ${p||""}`,style:y,role:"group",id:t+"-text-field-block","aria-labelledby":l?t+"-label":void 0,children:[l&&n.jsx("label",{id:t+"-label",htmlFor:t,className:`f-form-element__label ${e?"error":""}`,children:l}),n.jsxs("div",{className:`f-form-element__control ${s?"is-loading":""}`,children:[n.jsx("input",{ref:b,id:t,type:o,className:`f-form-element__control-element ${e?"error":""}`,"aria-invalid":!!e,"aria-describedby":[i?t+"-helptext":null,e!=null&&e.length?t+"-errortext":null].filter(Boolean).join(" "),...r,step:r.step!==void 0?r.step:"any",disabled:r.disabled||s}),s&&n.jsx("span",{className:"f-form-element__loader",children:n.jsx(g,{size:10})})]}),i&&n.jsx("p",{id:t+"-helptext",className:"f-form-element__helptext",children:i}),e&&e.length>0&&n.jsx("div",{className:"f-form-element__errorblock",children:e.map((h,a)=>n.jsx("p",{id:`${t}-errortext-${a}`,className:"f-form-element__errorblock_errortext",children:h},a))})]})});F.__docgenInfo={description:`Компонент FTextField представляет собой поле ввода с дополнительными функциями,
такими как метка, сообщения об ошибках, вспомогательный текст и индикатор загрузки.

@component
@example
<FTextField
  label="Имя пользователя"
  type="text"
  fullWidth={true}
  errText={['Поле обязательно для заполнения']}
  helpText="Введите ваше имя"
  load={false}
/>

@param {IFTextField} props - Пропсы компонента.
@param {React.Ref<HTMLInputElement>} ref - Референс для доступа к DOM-элементу.
@returns {JSX.Element} - Элемент поля ввода.`,methods:[],displayName:"FTextField",props:{label:{required:!1,tsType:{name:"string"},description:`Текст метки для поля ввода.
@type {string | undefined}`},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Дополнительные стили для поля ввода.
@type {React.CSSProperties}`},fullWidth:{required:!1,tsType:{name:"boolean"},description:`Флаг, указывающий, должно ли поле занимать всю доступную ширину.
@type {boolean | undefined}`},errText:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:`Массив текстов ошибок, связанных с полем ввода.
@type {string[] | undefined}`},helpText:{required:!1,tsType:{name:"string"},description:`Вспомогательный текст под полем ввода.
@type {string | undefined}`},load:{required:!1,tsType:{name:"boolean"},description:`Флаг, указывающий, находится ли поле в состоянии загрузки.
@type {boolean | undefined}`,defaultValue:{value:"false",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:`Ширина поля ввода.
@type {string | number | undefined}`},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:`Высота поля ввода.
@type {string | number | undefined}`,defaultValue:{value:"'auto'",computed:!1}},type:{defaultValue:{value:"'text'",computed:!1},required:!1}}};export{F};
