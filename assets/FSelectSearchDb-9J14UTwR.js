import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./index-B3j06Xw8.js";import{r as U}from"./index-D_ywfbVi.js";import{F as Z}from"./FArrowIcon-e6BJPakw.js";import{F as ee}from"./FTextField-Bfcy-agq.js";const te="_active_yhck3_41",l={"f-select-search-db":"_f-select-search-db_yhck3_1","f-select-search-db__input":"_f-select-search-db__input_yhck3_7","f-select-search-db__input_field":"_f-select-search-db__input_field_yhck3_11","f-select-search-db__input_arrow":"_f-select-search-db__input_arrow_yhck3_14","f-select-search-db__dropdown":"_f-select-search-db__dropdown_yhck3_21",active:te,"f-select-search-db__dropdown_content":"_f-select-search-db__dropdown_content_yhck3_45"},ne=({fetchingFunc:F,selectedElement:R,selectItem:I,onChange:q,st:j,id:k,className:M,disabled:T,readOnly:C,fullWidth:D,label:H,onBlur:_,onFocus:P,errText:w,helpText:O,required:N,defaultValue:A,type:$,placeholder:z})=>{const[u,L]=t.useState(A||""),[d,h]=t.useState([]),m=t.useRef(),[p,g]=t.useState(!1),[s,a]=t.useState(!1),[b,B]=t.useState("bottom"),c=t.useRef(null),E=t.useRef(null),o=t.useRef(null),[V,v]=t.useState(!1),[W,i]=t.useState(void 0);t.useEffect(()=>(o.current=document.createElement("div"),document.body.appendChild(o.current),()=>{const e=o.current;e&&e.parentNode===document.body&&document.body.removeChild(e)}),[]);const y=t.useCallback(()=>{if(!c.current||!E.current||!o.current)return;const e=c.current.getBoundingClientRect(),n=window.pageXOffset||document.documentElement.scrollLeft,f=window.pageYOffset||document.documentElement.scrollTop,S=4,K=e.top+f+(b==="bottom"?e.height-S:-E.current.offsetHeight-S),Q=e.left+n;Object.assign(o.current.style,{position:"absolute",top:`${K}px`,left:`${Q}px`,width:`${e.width}px`,zIndex:"9999"})},[b]);t.useEffect(()=>(s&&(y(),window.addEventListener("resize",y)),()=>{window.removeEventListener("resize",y)}),[s,y]);const x=()=>{if(!c.current)return;const e=c.current.getBoundingClientRect(),n=window.innerHeight-e.bottom,f=e.top;B(n>=200||n>=f?"bottom":"top")};t.useEffect(()=>(s&&(x(),window.addEventListener("resize",x)),()=>{window.removeEventListener("resize",x)}),[s]);const X=e=>{const n=e.target.value;q&&q(e),L(n),a(!1),v(!0),m.current&&clearTimeout(m.current),n.trim()!==""?m.current=setTimeout(async()=>{try{g(!0);const f=await F(n);h(f),f.length===0?(i(["- Данные не найдены"]),setTimeout(()=>i(void 0),3e3)):a(!0)}catch{i(["- Ошибка"]),setTimeout(()=>i(void 0),3e3)}finally{g(!1),v(!1)}},500):(R(null),h([]),a(!1),v(!1))},J=()=>{T||C||p||(s?a(!1):d.length>0?a(!0):u.trim()!==""&&G(u))},Y=e=>{R(e),L(I(e)),a(!1)};t.useEffect(()=>{const e=n=>{c.current&&!c.current.contains(n.target)&&a(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]);const G=e=>{m.current&&clearTimeout(m.current),e!==""?m.current=setTimeout(async()=>{try{g(!0);const n=await F(e);h(n),n.length===0?(i(["- Данные не найдены"]),setTimeout(()=>i(void 0),3e3)):a(!0)}catch{i(["- Ошибка"]),setTimeout(()=>i(void 0),3e3)}finally{g(!1)}},3e3):h([])};return r.jsxs("div",{ref:c,className:`${l["f-select-search-db"]} ${M||""}`,style:j,id:k,"data-position":b,children:[r.jsxs("div",{className:l["f-select-search-db__input"],children:[r.jsx(ee,{fullWidth:D,readOnly:C||s,disabled:T||p,required:N,label:H,type:$,placeholder:z,className:l["f-select-search-db__input_field"],value:u,onChange:X,onFocus:P,onBlur:()=>{setTimeout(()=>{_==null||_(new Event("blur"))},100)},load:p,helpText:p?"Загрузка...":V?"После окончания ввода запрос отправится через 3 сек":O,errText:typeof w=="string"?[w]:w||W}),!p&&!T&&d.length>0&&r.jsx("div",{className:l["f-select-search-db__input_arrow"],style:{marginTop:H?"28px":"7px"},onClick:J,children:r.jsx(Z,{direction:s?"up":"down",size:15})})]}),s&&(d.length>0||u.trim()==="")&&o.current&&U.createPortal(r.jsx("div",{ref:E,className:`${l["f-select-search-db__dropdown"]} ${s?l.active:""}`,children:d.length===0&&u.trim()===""?r.jsx("li",{children:"Введите текст"}):d.length===0&&u.trim()!==""&&!p?r.jsx("li",{children:"Ничего не найдено"}):r.jsx("ul",{className:l["f-select-search-db__dropdown_content"],children:d.slice(0,10).map((e,n)=>r.jsx("li",{onMouseDown:()=>Y(e),children:I(e)},n))})}),o.current)]})};ne.__docgenInfo={description:`Компонент \`FSelectSearchDb\` — кастомное поле ввода с автопоиском по базе данных.\r
Поддерживает:\r
- асинхронный поиск по API (\`fetchingFunc\`)\r
- дебаунс запросов\r
- отображение выпадающего списка результатов\r
- автоматическое позиционирование дропдауна (вверх/вниз)\r
- обработку ошибок и состояния загрузки\r
- работу с TypeScript-типами через \`selectItem\`\r
- портал для рендера дропдауна вне родителя со скроллом\r
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
@param {string[] | string} [errText] - Массив текстовых ошибок для отображения под полем.\r
@param {string} [helpText] - Вспомогательный текст под инпутом.\r
@param {boolean} [required=false] - Определяет, является ли поле обязательным.\r
@param {string} [defaultValue] - Начальное значение поля ввода.\r
@param {React.HTMLInputTypeAttribute} [type="text"] - Тип поля ввода (например, "text", "search").\r
@param {string} [placeholder] - Текст placeholder.\r
\r
@returns {JSX.Element} — Рендерит поле ввода с выпадающим списком результатов поиска.`,methods:[],displayName:"FSelectSearchDb",props:{fetchingFunc:{required:!0,tsType:{name:"signature",type:"function",raw:"(text: string) => Promise<T[]>",signature:{arguments:[{type:{name:"string"},name:"text"}],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"T"}],raw:"T[]"}],raw:"Promise<T[]>"}}},description:`Функция, которая выполняет асинхронный запрос поиска.\r
Принимает строку и возвращает массив объектов типа T.`},selectedElement:{required:!0,tsType:{name:"signature",type:"function",raw:"(item: T | null | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"T | null | undefined",elements:[{name:"T"},{name:"null"},{name:"undefined"}]},name:"item"}],return:{name:"void"}}},description:"Callback, вызываемый при выборе элемента из списка."},selectItem:{required:!0,tsType:{name:"signature",type:"function",raw:"(item: T) => string",signature:{arguments:[{type:{name:"T"},name:"item"}],return:{name:"string"}}},description:"Функция, возвращающая строковое представление элемента (для отображения)."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:"Callback, вызываемый при вводе данных в поле ввода.\r\n@param {File[] | null} file - Массив выбранных файлов или `null`, если файлы удалены."},label:{required:!1,tsType:{name:"string"},description:"Текст метки поля ввода."},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Встроенные стили для корневого контейнера."},id:{required:!1,tsType:{name:"string"},description:"HTML id для поля ввода."},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Если true — поле занимает всю ширину родителя."},className:{required:!1,tsType:{name:"string"},description:"Кастомный CSS класс."},disabled:{required:!1,tsType:{name:"boolean"},description:"Блокирует редактирование поля."},readOnly:{required:!1,tsType:{name:"boolean"},description:"Поле только для чтения."},required:{required:!1,tsType:{name:"boolean"},description:"Поле обязательное для заполнения."},errText:{required:!1,tsType:{name:"union",raw:"string[] | string | undefined",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"},{name:"undefined"}]},description:`Массив текстов ошибок, связанных с полем ввода.\r
@type {string[] | string | undefined}`},helpText:{required:!1,tsType:{name:"string"},description:"Вспомогательный текст под инпутом."},onFocus:{required:!1,tsType:{name:"ReactFocusEventHandler",raw:"React.FocusEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Обработчик события onFocus."},onBlur:{required:!1,tsType:{name:"ReactFocusEventHandler",raw:"React.FocusEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Обработчик события onBlur."},minLengthText:{required:!1,tsType:{name:"number"},description:`Минимальная длина текста для начала поиска.\r
@default 3`},defaultValue:{required:!1,tsType:{name:"string"},description:"Начальное значение поля ввода."},type:{required:!1,tsType:{name:"ReactHTMLInputTypeAttribute",raw:"React.HTMLInputTypeAttribute"},description:"Тип поля ввода."},placeholder:{required:!1,tsType:{name:"string"},description:"Текст placeholder."}}};export{ne as F};
