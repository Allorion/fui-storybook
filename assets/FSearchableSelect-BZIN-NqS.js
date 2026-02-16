import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as l,e as H}from"./index-DEgj3Fem.js";import{F as G}from"./FLoadIcon-1-Td29NS.js";const Y="_rotate_1prwk_43",Z="_focused_1prwk_94",P="_selected_1prwk_97",i={"f-search-select":"_f-search-select_1prwk_3","f-select-native-hidden":"_f-select-native-hidden_1prwk_8","f-select-actions":"_f-select-actions_1prwk_25","f-select-icon":"_f-select-icon_1prwk_34",rotate:Y,"f-select-dropdown":"_f-select-dropdown_1prwk_48","f-select-list":"_f-select-list_1prwk_62","f-select-option":"_f-select-option_1prwk_81",focused:Z,selected:P,"f-select-create":"_f-select-create_1prwk_102","f-select-no-results":"_f-select-no-results_1prwk_108","f-select-highlight":"_f-select-highlight_1prwk_128","has-icons":"_has-icons_1prwk_135"},ee=({className:c})=>n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:c,children:n.jsx("polyline",{points:"6 9 12 15 18 9"})}),ne=()=>n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),n.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),te=()=>n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),n.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),re=({text:c,highlight:S})=>{if(!S.trim())return n.jsx("span",{children:c});const j=a=>a.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),k=new RegExp(`(${j(S)})`,"gi"),u=c.split(k);return n.jsx("span",{children:u.map((a,g)=>k.test(a)?n.jsx("span",{className:i["f-select-highlight"],children:a},g):n.jsx("span",{children:a},g))})},O=l.forwardRef(({label:c,st:S,children:j,fullWidth:k,load:u=!1,errText:a,helpText:g,height:W="auto",width:Q="fit-content",allowCreate:C=!1,disabled:v,onKeyDown:M,onFocus:T,...r},A)=>{const d=l.useMemo(()=>{const e=[];return H.Children.forEach(j,t=>{if(H.isValidElement(t)){const s=t,{value:w,children:_}=s.props,b=w!==void 0?String(w):"";let $=b;typeof _=="string"||typeof _=="number"?$=String(_):b&&($=b),(b||$)&&e.push({value:b,label:$})}}),e},[j]),[f,m]=l.useState(!1),[F,h]=l.useState(""),[I,N]=l.useState(0),R=l.useRef(null),q=l.useRef(null),B=l.useRef(null),y=l.useRef(r.value!==void 0?String(r.value):"");l.useEffect(()=>{if(r.value!==void 0){const e=String(r.value);y.current=e;const t=d.find(s=>s.value===e);h(t?t.label:e)}},[r.value,d]);const o=l.useDeferredValue(F),E=l.useMemo(()=>{if(!f)return d;const e=o.toLowerCase();return d.filter(t=>t.label.toLowerCase().includes(e))},[d,o,f]),D=l.useMemo(()=>!C||!o.trim()?!1:!E.find(t=>t.label.toLowerCase()===o.toLowerCase()),[o,E,C]),x=l.useMemo(()=>{const e=E.slice(0,100);return D&&e.push({value:o,label:o,isNew:!0}),e},[E,D,o]),L=e=>{if(y.current=e,r.onChange){const t={target:{name:r.name||"",value:e}};r.onChange(t)}},V=e=>{L(e.value),h(e.label),m(!1),N(0)},z=e=>{var t;e.stopPropagation(),L(""),h(""),(t=q.current)==null||t.focus()};l.useEffect(()=>{const e=t=>{if(R.current&&!R.current.contains(t.target)){m(!1);const s=r.value!==void 0?String(r.value):y.current;if(s){const w=d.find(_=>_.value===s);h(w?w.label:s)}else h("")}};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[r.value,d]);const K=e=>{var t;M&&M(e),e.key==="ArrowDown"?(e.preventDefault(),f?N(s=>s<x.length-1?s+1:s):m(!0)):e.key==="ArrowUp"?(e.preventDefault(),N(s=>s>0?s-1:s)):e.key==="Enter"?(e.preventDefault(),e.stopPropagation(),f&&x[I]?V(x[I]):m(!0)):e.key==="Escape"&&(m(!1),(t=q.current)==null||t.blur())},J={...{width:k?"100%":Q||"fit-content",height:W||"auto",whiteSpace:"nowrap",textOverflow:"ellipsis"},...S},p=r.id||`search-select-${Math.random().toString(36).substring(2,9)}`,U=r.value!==void 0?!!String(r.value):!!y.current,X=r.value!==void 0?String(r.value):y.current;return n.jsxs("div",{className:`f-form-element ${i["f-search-select"]} ${r.className||""}`,style:J,ref:R,id:p+"-block",children:[c&&n.jsx("label",{id:p+"-label",htmlFor:p,className:`f-form-element__label ${a?"error":""}`,children:c}),n.jsx("input",{ref:A,name:r.name,value:r.value!==void 0?String(r.value):"",onChange:()=>{},className:i["f-select-native-hidden"],tabIndex:-1,disabled:v,"aria-hidden":"true"}),n.jsxs("div",{className:`f-form-element__control ${u?"is-loading":""}`,children:[n.jsx("input",{ref:q,id:p,type:"text",autoComplete:"off",className:`f-form-element__control-element ${i["has-icons"]} ${a?"error":""}`,...r,disabled:v||u,value:F,onChange:e=>{const t=e.target.value;h(t),f||m(!0),C?L(t):t===""&&L("")},onKeyDown:K,onFocus:e=>{!v&&!u&&m(!0),T&&T(e)}}),u?n.jsx("span",{className:"f-form-element__loader",children:n.jsx(G,{size:10})}):n.jsxs("div",{className:i["f-select-actions"],children:[U&&!v&&n.jsx("div",{onClick:z,className:`${i["f-select-icon"]} close`,title:"Очистить",onMouseDown:e=>e.preventDefault(),children:n.jsx(ne,{})}),n.jsx("div",{className:`${i["f-select-icon"]} ${f?i.rotate:""}`,children:n.jsx(ee,{})})]})]}),f&&!v&&!u&&n.jsx("div",{className:i["f-select-dropdown"],children:n.jsx("ul",{ref:B,className:i["f-select-list"],children:x.length===0?n.jsx("li",{className:i["f-select-no-results"],children:C?"Нет данных":"Совпадений не найдено"}):x.map((e,t)=>n.jsx("li",{className:`
                                                ${i["f-select-option"]} 
                                                ${e.isNew?i["f-select-create"]:""} 
                                                ${t===I?i.focused:""} 
                                                ${X===e.value?i.selected:""}
                                            `,onMouseDown:s=>s.preventDefault(),onClick:s=>{s.stopPropagation(),V(e)},onMouseEnter:()=>N(t),children:n.jsxs("div",{style:{overflow:"hidden",textOverflow:"ellipsis"},children:[e.isNew&&n.jsx("span",{style:{marginRight:4},children:n.jsx(te,{})}),n.jsx(re,{text:e.label,highlight:o}),e.isNew&&n.jsx("span",{style:{opacity:.6,fontSize:"0.85em",marginLeft:6},children:"(Создать)"})]})},e.value+t))})}),g&&n.jsx("p",{id:p+"-helptext",className:"f-form-element__helptext",children:g}),typeof a=="string"&&a&&n.jsx("div",{className:"f-form-element__errorblock",children:n.jsx("p",{id:`${p}-errortext`,className:"f-form-element__errorblock_errortext",children:a})}),a&&a.length>0&&n.jsx("div",{className:"f-form-element__errorblock",children:typeof a!="string"&&a.map((e,t)=>n.jsx("p",{id:`${p}-errortext-${t}`,className:"f-form-element__errorblock_errortext",children:e},t))})]})});O.displayName="FSearchableSelect";O.__docgenInfo={description:`Компонент \`FSearchableSelect\` — выпадающий список с возможностью поиска и фильтрации опций.\r
\r
Особенности:\r
- Поддерживает фильтрацию списка при вводе текста.\r
- Может работать как обычный Select или как Combobox (с \`allowCreate\`).\r
- Парсит опции из переданных \`children\` (например, \`<option value="1">One</option>\`).\r
- Поддерживает навигацию с клавиатуры (стрелки, Enter, Escape).\r
- Имеет состояния: ошибка, загрузка, disabled.\r
\r
@component\r
@example\r
// Простой пример использования с опциями\r
<FSearchableSelect\r
  label="Выберите город"\r
  value={city}\r
  onChange={(e) => setCity(e.target.value)}\r
  fullWidth\r
>\r
  <option value="moscow">Москва</option>\r
  <option value="spb">Санкт-Петербург</option>\r
</FSearchableSelect>\r
\r
@example\r
// Пример с созданием новых значений (allowCreate) и ошибкой\r
<FSearchableSelect\r
  label="Теги"\r
  allowCreate\r
  value={tag}\r
  onChange={(e) => setTag(e.target.value)}\r
  errText={hasError ? ['Некорректный тег'] : undefined}\r
>\r
  {tagsList.map(t => <option key={t.id} value={t.name}>{t.name}</option>)}\r
</FSearchableSelect>\r
\r
@param {string} [label] - Метка поля.\r
@param {CSSProperties} [st] - Стили контейнера.\r
@param {ReactNode} [children] - Опции списка.\r
@param {boolean} [fullWidth=false] - Растянуть на 100%.\r
@param {boolean} [load=false] - Показать лоадер.\r
@param {string[] | string} [errText] - Текст ошибки.\r
@param {string} [helpText] - Подсказка.\r
@param {boolean} [allowCreate=false] - Разрешить ввод своих значений.\r
@param {string|number} [value] - Значение.\r
@param {Function} [onChange] - Обработчик изменений.\r
\r
@returns {JSX.Element} Рендерит кастомный Select с поиском.`,methods:[],displayName:"FSearchableSelect",props:{label:{required:!1,tsType:{name:"string"},description:`Метка (label), отображаемая над полем ввода.\r
@type {string | undefined}`},st:{required:!1,tsType:{name:"CSSProperties"},description:`Инлайновые стили для внешнего контейнера компонента.\r
@type {CSSProperties | undefined}`},children:{required:!1,tsType:{name:"ReactNode"},description:"Дочерние элементы (обычно `<option>`), из которых формируется список выбора.\r\nЗначения извлекаются из пропсов `value` и `children` переданных элементов.\r\n@type {ReactNode | undefined}"},fullWidth:{required:!1,tsType:{name:"boolean"},description:`Флаг, указывающий, должен ли компонент занимать 100% ширины родителя.\r
@type {boolean | undefined}`},load:{required:!1,tsType:{name:"boolean"},description:`Флаг состояния загрузки. Если true, отображается спиннер, а взаимодействие блокируется.\r
@type {boolean | undefined}`,defaultValue:{value:"false",computed:!1}},errText:{required:!1,tsType:{name:"union",raw:"string[] | string | undefined",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"},{name:"undefined"}]},description:`Массив текстов ошибок, связанных с полем ввода.\r
@type {string[] | string | undefined}`},helpText:{required:!1,tsType:{name:"string"},description:`Вспомогательный текст, отображаемый под полем ввода.\r
@type {string | undefined}`},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:`Явное указание ширины компонента.\r
@type {string | number | undefined}`,defaultValue:{value:'"fit-content"',computed:!1}},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:`Явное указание высоты компонента.\r
@type {string | number | undefined}`,defaultValue:{value:'"auto"',computed:!1}},allowCreate:{required:!1,tsType:{name:"boolean"},description:`Разрешить создание новых элементов, отсутствующих в списке.\r
При вводе уникального текста появится опция "Создать".\r
@type {boolean | undefined}`,defaultValue:{value:"false",computed:!1}},value:{required:!1,tsType:{name:"union",raw:"string | number | readonly string[]",elements:[{name:"string"},{name:"number"},{name:"unknown"}]},description:`Текущее значение поля (контролируемый компонент).\r
@type {string | number | readonly string[] | undefined}`},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: { target: { name: string; value: string } } | ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"union",raw:"{ target: { name: string; value: string } } | ChangeEvent<HTMLInputElement>",elements:[{name:"signature",type:"object",raw:"{ target: { name: string; value: string } }",signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ name: string; value: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]},required:!0}}]}},{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"}]},name:"event"}],return:{name:"void"}}},description:`Callback, вызываемый при изменении значения.\r
Возвращает синтетическое событие с объектом target, содержащим name и value.\r
@type {((event: { target: { name: string; value: string } } | ChangeEvent<HTMLInputElement>) => void) | undefined}`}},composes:["Omit"]};export{O as F};
