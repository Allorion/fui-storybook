import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as s,e as W}from"./index-B3j06Xw8.js";import{F as P}from"./FLoadIcon-CJgWVWfz.js";const ee="_rotate_fq6h3_43",ne="_focused_fq6h3_94",te="_selected_fq6h3_97",l={"f-search-select":"_f-search-select_fq6h3_3","f-select-native-hidden":"_f-select-native-hidden_fq6h3_8","f-select-actions":"_f-select-actions_fq6h3_25","f-select-icon":"_f-select-icon_fq6h3_34",rotate:ee,"f-select-dropdown":"_f-select-dropdown_fq6h3_48","f-select-list":"_f-select-list_fq6h3_62","f-select-option":"_f-select-option_fq6h3_81",focused:ne,selected:te,"f-select-create":"_f-select-create_fq6h3_102","f-select-no-results":"_f-select-no-results_fq6h3_108","f-select-highlight":"_f-select-highlight_fq6h3_128","has-icons":"_has-icons_fq6h3_135"},re=({className:u})=>n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:u,children:n.jsx("polyline",{points:"6 9 12 15 18 9"})}),ae=()=>n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),n.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),se=()=>n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),n.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),le=({text:u,highlight:S})=>{if(!S.trim())return n.jsx("span",{children:u});const j=i=>i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),C=new RegExp(`(${j(S)})`,"gi"),f=u.split(C);return n.jsx("span",{children:f.map((i,g)=>C.test(i)?n.jsx("span",{className:l["f-select-highlight"],children:i},g):n.jsx("span",{children:i},g))})},A=s.forwardRef(({label:u,st:S,children:j,fullWidth:C,load:f=!1,errText:i,helpText:g,height:Q="auto",width:B="fit-content",allowCreate:E=!1,disabled:v,onKeyDown:F,onFocus:D,onChangeTerm:H,...r},z)=>{const d=s.useMemo(()=>{const e=[];return W.Children.forEach(j,t=>{if(W.isValidElement(t)){const a=t,{value:_,children:b}=a.props,w=_!==void 0?String(_):"";let T=w;typeof b=="string"||typeof b=="number"?T=String(b):w&&(T=w),(w||T)&&e.push({value:w,label:T})}}),e},[j]),[o,m]=s.useState(!1),[k,p]=s.useState(""),[I,q]=s.useState(0),[K,R]=s.useState(!1),$=s.useRef(null),M=s.useRef(null),J=s.useRef(null),y=s.useRef(r.value!==void 0?String(r.value):"");s.useEffect(()=>{if(r.value!==void 0){const e=String(r.value);y.current=e;const t=d.find(a=>a.value===e);p(t?t.label:e)}},[r.value,d]),s.useEffect(()=>{if(!k||!o){R(!1);return}R(!0);const e=setTimeout(()=>{R(!1)},1e3);return()=>clearTimeout(e)},[k,o]);const c=s.useDeferredValue(k),N=s.useMemo(()=>{if(!o)return d;const e=c.toLowerCase();return d.filter(t=>t.label.toLowerCase().includes(e))},[d,c,o]),V=s.useMemo(()=>!E||!c.trim()?!1:!N.find(t=>t.label.toLowerCase()===c.toLowerCase()),[c,N,E]),x=s.useMemo(()=>{const e=N.slice(0,100);return V&&e.push({value:c,label:c,isNew:!0}),e},[N,V,c]),L=e=>{if(y.current=e,r.onChange){const t={target:{name:r.name||"",value:e}};r.onChange(t)}},O=e=>{L(e.value),p(e.label),m(!1),q(0)},U=e=>{var t;e.stopPropagation(),L(""),p(""),(t=M.current)==null||t.focus()};s.useEffect(()=>{const e=t=>{if($.current&&!$.current.contains(t.target)){m(!1);const a=r.value!==void 0?String(r.value):y.current;if(a){const _=d.find(b=>b.value===a);p(_?_.label:a)}else p("")}};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[r.value,d]);const X=e=>{var t;F&&F(e),e.key==="ArrowDown"?(e.preventDefault(),o?q(a=>a<x.length-1?a+1:a):m(!0)):e.key==="ArrowUp"?(e.preventDefault(),q(a=>a>0?a-1:a)):e.key==="Enter"?(e.preventDefault(),e.stopPropagation(),o&&x[I]?O(x[I]):m(!0)):e.key==="Escape"&&(m(!1),(t=M.current)==null||t.blur())},G={...{width:C?"100%":B||"fit-content",height:Q||"auto",whiteSpace:"nowrap",textOverflow:"ellipsis"},...S},h=r.id||`search-select-${Math.random().toString(36).substring(2,9)}`,Y=r.value!==void 0?!!String(r.value):!!y.current,Z=r.value!==void 0?String(r.value):y.current;return n.jsxs("div",{className:`f-form-element ${l["f-search-select"]} ${r.className||""}`,style:G,ref:$,id:h+"-block",children:[u&&n.jsx("label",{id:h+"-label",htmlFor:h,className:`f-form-element__label ${i?"error":""}`,children:u}),n.jsx("input",{ref:z,name:r.name,value:r.value!==void 0?String(r.value):"",onChange:()=>{},className:l["f-select-native-hidden"],tabIndex:-1,disabled:v,"aria-hidden":"true"}),n.jsxs("div",{className:`f-form-element__control ${f?"is-loading":""}`,children:[n.jsx("input",{ref:M,id:h,type:"text",autoComplete:"off",className:`f-form-element__control-element ${l["has-icons"]} ${i?"error":""}`,...r,disabled:v||f,value:k,onChange:e=>{const t=e.target.value;p(t),H&&H(e),o||m(!0),E?L(t):t===""&&L("")},onKeyDown:X,onFocus:e=>{!v&&!f&&m(!0),D&&D(e)}}),f?n.jsx("span",{className:"f-form-element__loader",children:n.jsx(P,{size:10})}):n.jsxs("div",{className:l["f-select-actions"],children:[Y&&!v&&n.jsx("div",{onClick:U,className:`${l["f-select-icon"]} close`,title:"Очистить",onMouseDown:e=>e.preventDefault(),children:n.jsx(ae,{})}),n.jsx("div",{className:`${l["f-select-icon"]} ${o?l.rotate:""}`,children:n.jsx(re,{})})]})]}),o&&!v&&!f&&n.jsx("div",{className:l["f-select-dropdown"],children:n.jsx("ul",{ref:J,className:l["f-select-list"],children:K?n.jsx("li",{className:l["f-select-no-results"],children:"Ожидается окончание ввода..."}):x.length===0?n.jsx("li",{className:l["f-select-no-results"],children:E?"Нет данных":"Совпадений не найдено"}):x.map((e,t)=>n.jsx("li",{className:`
                                                ${l["f-select-option"]} 
                                                ${e.isNew?l["f-select-create"]:""} 
                                                ${t===I?l.focused:""} 
                                                ${Z===e.value?l.selected:""}
                                            `,onMouseDown:a=>a.preventDefault(),onClick:a=>{a.stopPropagation(),O(e)},onMouseEnter:()=>q(t),children:n.jsxs("div",{style:{overflow:"hidden",textOverflow:"ellipsis"},children:[e.isNew&&n.jsx("span",{style:{marginRight:4},children:n.jsx(se,{})}),n.jsx(le,{text:e.label,highlight:c}),e.isNew&&n.jsx("span",{style:{opacity:.6,fontSize:"0.85em",marginLeft:6},children:"(Создать)"})]})},e.value+t))})}),g&&n.jsx("p",{id:h+"-helptext",className:"f-form-element__helptext",children:g}),typeof i=="string"&&i&&n.jsx("div",{className:"f-form-element__errorblock",children:n.jsx("p",{id:`${h}-errortext`,className:"f-form-element__errorblock_errortext",children:i})}),i&&Array.isArray(i)&&i.length>0&&n.jsx("div",{className:"f-form-element__errorblock",children:i.map((e,t)=>n.jsx("p",{id:`${h}-errortext-${t}`,className:"f-form-element__errorblock_errortext",children:e},t))})]})});A.displayName="FSearchableSelect";A.__docgenInfo={description:`Компонент \`FSearchableSelect\` — выпадающий список с возможностью поиска и фильтрации опций.\r
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
@type {((event: { target: { name: string; value: string } } | ChangeEvent<HTMLInputElement>) => void) | undefined}`},onChangeTerm:{required:!1,tsType:{name:"signature",type:"function",raw:"(text: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"text"}],return:{name:"void"}}},description:`Возвращает вводимый пользователем текст\r
@type {React.ChangeEvent<HTMLInputElement>}`}},composes:["Omit"]};export{A as F};
