import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-B3j06Xw8.js";import{F as _}from"./FLoadIcon-CJgWVWfz.js";const x={"f-text-field":"_f-text-field_200bb_1"},j=h.forwardRef(({label:i,type:o="text",fullWidth:d,errText:e,helpText:l,st:m,id:f,className:p,load:s=!1,height:u="auto",width:c,...n},b)=>{const y={...{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",width:d?"100%":c||"fit-content",height:u||"auto"},...m},r=f||`input-${Math.random().toString(36).substring(2,9)}`;return t.jsxs("div",{className:`f-form-element ${x["f-text-field"]} ${p||""}`,style:y,role:"group",id:r+"-text-field-block","aria-labelledby":i?r+"-label":void 0,children:[i&&t.jsx("label",{id:r+"-label",htmlFor:r,className:`f-form-element__label ${e?"error":""}`,children:i}),t.jsxs("div",{className:`f-form-element__control ${s?"is-loading":""}`,children:[t.jsx("input",{ref:b,id:r,type:o,className:`f-form-element__control-element ${e?"error":""}`,"aria-invalid":!!e,"aria-describedby":[l?r+"-helptext":null,e!=null&&e.length?r+"-errortext":null].filter(Boolean).join(" "),...n,step:n.step!==void 0?n.step:"any",disabled:n.disabled||s}),s&&t.jsx("span",{className:"f-form-element__loader",children:t.jsx(_,{size:10})})]}),l&&t.jsx("p",{id:r+"-helptext",className:"f-form-element__helptext",children:l}),typeof e=="string"&&e&&t.jsx("div",{className:"f-form-element__errorblock",children:t.jsx("p",{id:`${r}-errortext`,className:"f-form-element__errorblock_errortext",children:e})}),e&&e.length>0&&t.jsx("div",{className:"f-form-element__errorblock",children:typeof e!="string"&&e.map((g,a)=>t.jsx("p",{id:`${r}-errortext-${a}`,className:"f-form-element__errorblock_errortext",children:g},a))})]})});j.__docgenInfo={description:`Компонент FTextField представляет собой поле ввода с дополнительными функциями,\r
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
@type {boolean | undefined}`},errText:{required:!1,tsType:{name:"union",raw:"string[] | string | undefined",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"},{name:"undefined"}]},description:`Массив текстов ошибок, связанных с полем ввода.\r
@type {string[] | string | undefined}`},helpText:{required:!1,tsType:{name:"string"},description:`Вспомогательный текст под полем ввода.\r
@type {string | undefined}`},load:{required:!1,tsType:{name:"boolean"},description:`Флаг, указывающий, находится ли поле в состоянии загрузки.\r
@type {boolean | undefined}`,defaultValue:{value:"false",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:`Ширина поля ввода.\r
@type {string | number | undefined}`},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:`Высота поля ввода.\r
@type {string | number | undefined}`,defaultValue:{value:"'auto'",computed:!1}},type:{defaultValue:{value:"'text'",computed:!1},required:!1}}};export{j as F};
