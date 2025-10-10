import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as t}from"./index-DY-snNUy.js";import{r as U}from"./index-xMzmejw-.js";import{F as Z}from"./FArrowIcon-DpFSaEY1.js";import{F as ee}from"./FTextField-CQUFWKWA.js";const te="_active_yhck3_41",l={"f-select-search-db":"_f-select-search-db_yhck3_1","f-select-search-db__input":"_f-select-search-db__input_yhck3_7","f-select-search-db__input_field":"_f-select-search-db__input_field_yhck3_11","f-select-search-db__input_arrow":"_f-select-search-db__input_arrow_yhck3_14","f-select-search-db__dropdown":"_f-select-search-db__dropdown_yhck3_21",active:te,"f-select-search-db__dropdown_content":"_f-select-search-db__dropdown_content_yhck3_45"},ne=({fetchingFunc:S,selectedElement:F,selectItem:R,onChange:I,st:L,id:j,className:k,disabled:g,readOnly:q,fullWidth:M,label:C,onBlur:_,onFocus:D,errText:P,helpText:O,required:N,defaultValue:A,type:$,placeholder:z})=>{const[u,H]=t.useState(A||""),[d,h]=t.useState([]),m=t.useRef(),[p,T]=t.useState(!1),[s,a]=t.useState(!1),[w,B]=t.useState("bottom"),c=t.useRef(null),b=t.useRef(null),o=t.useRef(null),[V,x]=t.useState(!1),[W,i]=t.useState(void 0);t.useEffect(()=>(o.current=document.createElement("div"),document.body.appendChild(o.current),()=>{const e=o.current;e&&e.parentNode===document.body&&document.body.removeChild(e)}),[]);const y=t.useCallback(()=>{if(!c.current||!b.current||!o.current)return;const e=c.current.getBoundingClientRect(),n=window.pageXOffset||document.documentElement.scrollLeft,f=window.pageYOffset||document.documentElement.scrollTop,v=4,K=e.top+f+(w==="bottom"?e.height-v:-b.current.offsetHeight-v),Q=e.left+n;Object.assign(o.current.style,{position:"absolute",top:`${K}px`,left:`${Q}px`,width:`${e.width}px`,zIndex:"9999"})},[w]);t.useEffect(()=>(s&&(y(),window.addEventListener("resize",y)),()=>{window.removeEventListener("resize",y)}),[s,y]);const E=()=>{if(!c.current)return;const e=c.current.getBoundingClientRect(),n=window.innerHeight-e.bottom,f=e.top;B(n>=200||n>=f?"bottom":"top")};t.useEffect(()=>(s&&(E(),window.addEventListener("resize",E)),()=>{window.removeEventListener("resize",E)}),[s]);const X=e=>{const n=e.target.value;I&&I(e),H(n),a(!1),x(!0),m.current&&clearTimeout(m.current),n.trim()!==""?m.current=setTimeout(async()=>{try{T(!0);const f=await S(n);h(f),f.length===0?(i(["- Данные не найдены"]),setTimeout(()=>i(void 0),3e3)):a(!0)}catch{i(["- Ошибка"]),setTimeout(()=>i(void 0),3e3)}finally{T(!1),x(!1)}},500):(F(null),h([]),a(!1),x(!1))},J=()=>{g||q||p||(s?a(!1):d.length>0?a(!0):u.trim()!==""&&G(u))},Y=e=>{F(e),H(R(e)),a(!1)};t.useEffect(()=>{const e=n=>{c.current&&!c.current.contains(n.target)&&a(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]);const G=e=>{m.current&&clearTimeout(m.current),e!==""?m.current=setTimeout(async()=>{try{T(!0);const n=await S(e);h(n),n.length===0?(i(["- Данные не найдены"]),setTimeout(()=>i(void 0),3e3)):a(!0)}catch{i(["- Ошибка"]),setTimeout(()=>i(void 0),3e3)}finally{T(!1)}},3e3):h([])};return r.jsxs("div",{ref:c,className:`${l["f-select-search-db"]} ${k||""}`,style:L,id:j,"data-position":w,children:[r.jsxs("div",{className:l["f-select-search-db__input"],children:[r.jsx(ee,{fullWidth:M,readOnly:q||s,disabled:g||p,required:N,label:C,type:$,placeholder:z,className:l["f-select-search-db__input_field"],value:u,onChange:X,onFocus:D,onBlur:()=>{setTimeout(()=>{_==null||_(new Event("blur"))},100)},load:p,helpText:p?"Загрузка...":V?"После окончания ввода запрос отправится через 3 сек":O,errText:P||W}),!p&&!g&&d.length>0&&r.jsx("div",{className:l["f-select-search-db__input_arrow"],style:{marginTop:C?"28px":"7px"},onClick:J,children:r.jsx(Z,{direction:s?"up":"down",size:15})})]}),s&&(d.length>0||u.trim()==="")&&o.current&&U.createPortal(r.jsx("div",{ref:b,className:`${l["f-select-search-db__dropdown"]} ${s?l.active:""}`,children:d.length===0&&u.trim()===""?r.jsx("li",{children:"Введите текст"}):d.length===0&&u.trim()!==""&&!p?r.jsx("li",{children:"Ничего не найдено"}):r.jsx("ul",{className:l["f-select-search-db__dropdown_content"],children:d.slice(0,10).map((e,n)=>r.jsx("li",{onMouseDown:()=>Y(e),children:R(e)},n))})}),o.current)]})};ne.__docgenInfo={description:`Компонент \`FSelectSearchDb\` — кастомное поле ввода с автопоиском по базе данных.
Поддерживает:
- асинхронный поиск по API (\`fetchingFunc\`)
- дебаунс запросов
- отображение выпадающего списка результатов
- автоматическое позиционирование дропдауна (вверх/вниз)
- обработку ошибок и состояния загрузки
- работу с TypeScript-типами через \`selectItem\`
- портал для рендера дропдауна вне родителя со скроллом

@component

@example
<FSelectSearchDb<Employee>
  label="Поиск сотрудника"
  fetchingFunc={async (text) => await fetch(\`/api/employees?query=\${text}\`)}
  selectedElement={(item) => setSelectedEmployee(item)}
  selectItem={(item) => item.name}
/>

@example
// С начальным значением и пользовательским стилем
<FSelectSearchDb<City>
  label="Город"
  defaultValue="Москва"
  fetchingFunc={async (text) => await fetch(\`/api/cities?query=\${text}\`)}
  selectItem={(item) => item.name}
  selectedElement={(item) => setSelectedCity(item)}
  st={{ maxWidth: '300px' }}
  className={styles.customSelect}
/>

@param {Function} fetchingFunc - Асинхронная функция, которая принимает строку и возвращает массив объектов типа T.
@param {Function} selectedElement - Callback, вызываемый при выборе элемента из списка. Принимает выбранный объект типа T.
@param {Function} selectItem - Функция, возвращающая строковое представление элемента (для отображения в списке).
@param {string} [label] - Текст метки поля ввода.
@param {React.CSSProperties} [st] - Встроенные стили для корневого контейнера.
@param {string} [id] - HTML id для поля ввода.
@param {string} [className] - Кастомный CSS класс для переопределения стилей.
@param {boolean} [disabled=false] - Блокирует редактирование поля.
@param {boolean} [readOnly=false] - Поле только для чтения.
@param {boolean} [fullWidth=false] - Если true — поле занимает всю ширину родителя.
@param {React.FocusEventHandler<HTMLInputElement>} [onFocus] - Обработчик события focus.
@param {React.FocusEventHandler<HTMLInputElement>} [onBlur] - Обработчик события blur.
@param {string[]} [errText] - Массив текстовых ошибок для отображения под полем.
@param {string} [helpText] - Вспомогательный текст под инпутом.
@param {boolean} [required=false] - Определяет, является ли поле обязательным.
@param {string} [defaultValue] - Начальное значение поля ввода.
@param {React.HTMLInputTypeAttribute} [type="text"] - Тип поля ввода (например, "text", "search").
@param {string} [placeholder] - Текст placeholder.

@returns {JSX.Element} — Рендерит поле ввода с выпадающим списком результатов поиска.`,methods:[],displayName:"FSelectSearchDb",props:{fetchingFunc:{required:!0,tsType:{name:"signature",type:"function",raw:"(text: string) => Promise<T[]>",signature:{arguments:[{type:{name:"string"},name:"text"}],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"T"}],raw:"T[]"}],raw:"Promise<T[]>"}}},description:`Функция, которая выполняет асинхронный запрос поиска.
Принимает строку и возвращает массив объектов типа T.`},selectedElement:{required:!0,tsType:{name:"signature",type:"function",raw:"(item: T | null | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"T | null | undefined",elements:[{name:"T"},{name:"null"},{name:"undefined"}]},name:"item"}],return:{name:"void"}}},description:"Callback, вызываемый при выборе элемента из списка."},selectItem:{required:!0,tsType:{name:"signature",type:"function",raw:"(item: T) => string",signature:{arguments:[{type:{name:"T"},name:"item"}],return:{name:"string"}}},description:"Функция, возвращающая строковое представление элемента (для отображения)."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:"Callback, вызываемый при вводе данных в поле ввода.\n@param {File[] | null} file - Массив выбранных файлов или `null`, если файлы удалены."},label:{required:!1,tsType:{name:"string"},description:"Текст метки поля ввода."},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Встроенные стили для корневого контейнера."},id:{required:!1,tsType:{name:"string"},description:"HTML id для поля ввода."},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Если true — поле занимает всю ширину родителя."},className:{required:!1,tsType:{name:"string"},description:"Кастомный CSS класс."},disabled:{required:!1,tsType:{name:"boolean"},description:"Блокирует редактирование поля."},readOnly:{required:!1,tsType:{name:"boolean"},description:"Поле только для чтения."},required:{required:!1,tsType:{name:"boolean"},description:"Поле обязательное для заполнения."},errText:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Сообщение об ошибках валидации."},helpText:{required:!1,tsType:{name:"string"},description:"Вспомогательный текст под инпутом."},onFocus:{required:!1,tsType:{name:"ReactFocusEventHandler",raw:"React.FocusEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Обработчик события onFocus."},onBlur:{required:!1,tsType:{name:"ReactFocusEventHandler",raw:"React.FocusEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Обработчик события onBlur."},minLengthText:{required:!1,tsType:{name:"number"},description:`Минимальная длина текста для начала поиска.
@default 3`},defaultValue:{required:!1,tsType:{name:"string"},description:"Начальное значение поля ввода."},type:{required:!1,tsType:{name:"ReactHTMLInputTypeAttribute",raw:"React.HTMLInputTypeAttribute"},description:"Тип поля ввода."},placeholder:{required:!1,tsType:{name:"string"},description:"Текст placeholder."}}};export{ne as F};
