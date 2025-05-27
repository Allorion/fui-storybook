import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as n}from"./index-DY-snNUy.js";import{F as J}from"./FArrowIcon-Bx2-MjZ4.js";import{F as V}from"./FTextField-CvQDvwqw.js";const X="_active_j5nh9_38",c={"f-select-search-db":"_f-select-search-db_j5nh9_1","f-select-search-db__input":"_f-select-search-db__input_j5nh9_6","f-select-search-db__input_field":"_f-select-search-db__input_field_j5nh9_10","f-select-search-db__input_arrow":"_f-select-search-db__input_arrow_j5nh9_13","f-select-search-db__dropdown":"_f-select-search-db__dropdown_j5nh9_20",active:X,"f-select-search-db__dropdown_content":"_f-select-search-db__dropdown_content_j5nh9_42"},G=({fetchingFunc:x,selectedElement:v,selectItem:S,st:q,id:I,className:j,disabled:_,readOnly:E,fullWidth:H,label:F,onBlur:y,onFocus:R,errText:C,helpText:L,required:D,defaultValue:p,type:M,placeholder:A})=>{const[l,g]=n.useState(p||""),[o,f]=n.useState([]),d=n.useRef(),[u,h]=n.useState(!1),[i,s]=n.useState(!1),[N,P]=n.useState("bottom"),m=n.useRef(null),[O,b]=n.useState(!1),[k,a]=n.useState(void 0);n.useEffect(()=>{p!==void 0&&g(p)},[p]);const w=()=>{if(!m.current)return;const e=m.current.getBoundingClientRect(),t=window.innerHeight-e.bottom,T=e.top;P(t>=200||t>=T?"bottom":"top")};n.useEffect(()=>(i&&(w(),window.addEventListener("resize",w)),()=>{window.removeEventListener("resize",w)}),[i]);const $=e=>{const t=e.target.value;g(t),s(!1),b(!0),d.current&&clearTimeout(d.current),t.trim()!==""?d.current=setTimeout(async()=>{try{h(!0);const T=await x(t);f(T),T.length===0?(a(["- Данные не найдены"]),setTimeout(()=>a(void 0),3e3)):s(!0)}catch{a(["- Ошибка"]),setTimeout(()=>a(void 0),3e3)}finally{h(!1),b(!1)}},500):(v(null),f([]),s(!1),b(!1))},z=()=>{_||E||u||(i?s(!1):o.length>0?s(!0):l.trim()!==""&&B(l))},W=e=>{v(e),g(S(e)),s(!1)};n.useEffect(()=>{const e=t=>{m.current&&!m.current.contains(t.target)&&s(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]);const B=e=>{d.current&&clearTimeout(d.current),e!==""?d.current=setTimeout(async()=>{try{h(!0);const t=await x(e);f(t),t.length===0?(a(["- Данные не найдены"]),setTimeout(()=>a(void 0),3e3)):s(!0)}catch{a(["- Ошибка"]),setTimeout(()=>a(void 0),3e3)}finally{h(!1)}},3e3):f([])};return r.jsxs("div",{ref:m,className:`${c["f-select-search-db"]} ${j||""}`,style:q,id:I,"data-position":N,children:[r.jsxs("div",{className:c["f-select-search-db__input"],children:[r.jsx(V,{fullWidth:H,readOnly:E||i,disabled:_||u,required:D,label:F,type:M,placeholder:A,className:c["f-select-search-db__input_field"],value:l,onChange:$,onFocus:R,onBlur:()=>{setTimeout(()=>{y==null||y(new Event("blur"))},100)},load:u,helpText:u?"Загрузка...":O?"После окончания ввода запрос отправится через 3 сек":L,errText:C||k}),!u&&!_&&o.length>0&&r.jsx("div",{className:c["f-select-search-db__input_arrow"],style:{marginTop:F?"28px":"7px"},onClick:z,children:r.jsx(J,{direction:i?"up":"down",size:15})})]}),i&&(o.length>0||l.trim()==="")&&r.jsx("div",{className:`${c["f-select-search-db__dropdown"]} ${i?c.active:""}`,children:o.length===0&&l.trim()===""?r.jsx("li",{children:"Введите текст"}):o.length===0&&l.trim()!==""&&!u?r.jsx("li",{children:"Ничего не найдено"}):r.jsx("ul",{className:c["f-select-search-db__dropdown_content"],children:o.slice(0,10).map((e,t)=>r.jsx("li",{onClick:()=>W(e),children:S(e)},t))})})]})};G.__docgenInfo={description:`Компонент \`FSelectSearchDb\` — кастомное поле ввода с автопоиском по базе данных.\r
Поддерживает:\r
- асинхронный поиск по API (\`fetchingFunc\`)\r
- дебаунс запросов\r
- отображение выпадающего списка результатов\r
- автоматическое позиционирование дропдауна (вверх/вниз)\r
- обработку ошибок и состояния загрузки\r
- работу с TypeScript-типами через \`selectItem\`\r
\r
@component\r
\r
@example\r
<FSelectSearchDb<Employee>\r
  label="Поиск сотрудника"\r
  fetchingFunc={async (text) => await fetch(\`/api/employees?query=\${text}\`)}\r
  selectedElement={(item) => setSelectedEmployee(item)}\r
  selectItem={(item) => item.name}\r
/>\r
\r
@example\r
// С начальным значением и пользовательским стилем\r
<FSelectSearchDb<City>\r
  label="Город"\r
  defaultValue="Москва"\r
  fetchingFunc={async (text) => await fetch(\`/api/cities?query=\${text}\`)}\r
  selectItem={(item) => item.name}\r
  selectedElement={(item) => setSelectedCity(item)}\r
  st={{ maxWidth: '300px' }}\r
  className={styles.customSelect}\r
/>\r
\r
@param {Function} fetchingFunc - Асинхронная функция, которая принимает строку и возвращает массив объектов типа T.\r
@param {Function} selectedElement - Callback, вызываемый при выборе элемента из списка. Принимает выбранный объект типа T.\r
@param {Function} selectItem - Функция, возвращающая строковое представление элемента (для отображения в списке).\r
@param {string} [label] - Текст метки поля ввода.\r
@param {React.CSSProperties} [st] - Встроенные стили для корневого контейнера.\r
@param {string} [id] - HTML id для поля ввода.\r
@param {string} [className] - Кастомный CSS класс для переопределения стилей.\r
@param {boolean} [disabled=false] - Блокирует редактирование поля.\r
@param {boolean} [readOnly=false] - Поле только для чтения.\r
@param {boolean} [fullWidth=false] - Если true — поле занимает всю ширину родителя.\r
@param {React.FocusEventHandler<HTMLInputElement>} [onFocus] - Обработчик события focus.\r
@param {React.FocusEventHandler<HTMLInputElement>} [onBlur] - Обработчик события blur.\r
@param {string[]} [errText] - Массив текстовых ошибок для отображения под полем.\r
@param {string} [helpText] - Вспомогательный текст под инпутом.\r
@param {boolean} [required=false] - Определяет, является ли поле обязательным.\r
@param {string} [defaultValue] - Начальное значение поля ввода.\r
@param {React.HTMLInputTypeAttribute} [type="text"] - Тип поля ввода (например, "text", "search").\r
@param {string} [placeholder] - Текст placeholder.\r
\r
@returns {JSX.Element} — Рендерит поле ввода с выпадающим списком результатов поиска.`,methods:[],displayName:"FSelectSearchDb",props:{fetchingFunc:{required:!0,tsType:{name:"signature",type:"function",raw:"(text: string) => Promise<T[]>",signature:{arguments:[{type:{name:"string"},name:"text"}],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"T"}],raw:"T[]"}],raw:"Promise<T[]>"}}},description:`Функция, которая выполняет асинхронный запрос поиска.\r
Принимает строку и возвращает массив объектов типа T.`},selectedElement:{required:!0,tsType:{name:"signature",type:"function",raw:"(item: T | null | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"T | null | undefined",elements:[{name:"T"},{name:"null"},{name:"undefined"}]},name:"item"}],return:{name:"void"}}},description:"Callback, вызываемый при выборе элемента из списка."},selectItem:{required:!0,tsType:{name:"signature",type:"function",raw:"(item: T) => string",signature:{arguments:[{type:{name:"T"},name:"item"}],return:{name:"string"}}},description:"Функция, возвращающая строковое представление элемента (для отображения)."},label:{required:!1,tsType:{name:"string"},description:"Текст метки поля ввода."},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Встроенные стили для корневого контейнера."},id:{required:!1,tsType:{name:"string"},description:"HTML id для поля ввода."},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Если true — поле занимает всю ширину родителя."},className:{required:!1,tsType:{name:"string"},description:"Кастомный CSS класс."},disabled:{required:!1,tsType:{name:"boolean"},description:"Блокирует редактирование поля."},readOnly:{required:!1,tsType:{name:"boolean"},description:"Поле только для чтения."},required:{required:!1,tsType:{name:"boolean"},description:"Поле обязательное для заполнения."},errText:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Сообщение об ошибках валидации."},helpText:{required:!1,tsType:{name:"string"},description:"Вспомогательный текст под инпутом."},onFocus:{required:!1,tsType:{name:"ReactFocusEventHandler",raw:"React.FocusEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Обработчик события onFocus."},onBlur:{required:!1,tsType:{name:"ReactFocusEventHandler",raw:"React.FocusEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Обработчик события onBlur."},minLengthText:{required:!1,tsType:{name:"number"},description:`Минимальная длина текста для начала поиска.\r
@default 3`},defaultValue:{required:!1,tsType:{name:"string"},description:"Начальное значение поля ввода."},type:{required:!1,tsType:{name:"ReactHTMLInputTypeAttribute",raw:"React.HTMLInputTypeAttribute"},description:"Тип поля ввода."},placeholder:{required:!1,tsType:{name:"string"},description:"Текст placeholder."}}};export{G as F};
