import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-B3j06Xw8.js";import{F as E}from"./FCloseIcon-DdRZhJBn.js";import{F as b}from"./FArrowIcon-e6BJPakw.js";import{F as q}from"./FDialog-B0I80EdC.js";const L="_spinner_f7bma_133",R="_active_f7bma_183",s={"fv-opn-img-full":"_fv-opn-img-full_f7bma_1","fv-opn-img-full-body":"_fv-opn-img-full-body_f7bma_19","close-button":"_close-button_f7bma_33","image-container":"_image-container_f7bma_58","image-wrapper":"_image-wrapper_f7bma_68","full-image":"_full-image_f7bma_80","arrow-left":"_arrow-left_f7bma_89","arrow-right":"_arrow-right_f7bma_90","loading-spinner":"_loading-spinner_f7bma_125",spinner:L,"error-message":"_error-message_f7bma_147","progress-indicator":"_progress-indicator_f7bma_158","progress-dot":"_progress-dot_f7bma_172",active:R},O=({id:v,className:y,st:w,imagesUrl:a,selectedImg:e,setSelectedImg:t,handleClose:l,openAndClose:u})=>{const[x,c]=o.useState(!0),[S,m]=o.useState(!1),[f,g]=o.useState(null),[_,h]=o.useState(null),[j,p]=o.useState(!1);o.useEffect(()=>{c(!0),m(!1),p(!1);const n=new Image;n.src=a[e],n.onload=()=>{c(!1)},n.onerror=()=>{m(!0),c(!1)}},[e,a]);const d=o.useCallback(n=>{if(u)switch(n.key){case"ArrowLeft":e>0&&t(e-1);break;case"ArrowRight":e<a.length-1&&t(e+1);break;case"Escape":l==null||l();break;case"z":p(i=>!i);break}},[e,u,l,t]);o.useEffect(()=>(window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)),[d]);const F=n=>{g(n.touches[0].clientX)},N=n=>{h(n.touches[0].clientX)},T=()=>{if(!f||!_)return;const n=f-_,i=n>50,C=n<-50;i&&e<a.length-1?t(e+1):C&&e>0&&t(e-1),g(null),h(null)},k=()=>{p(n=>!n)};return!a.length||e<0||e>=a.length?null:r.jsx(q,{openAndClose:u,st:w,className:`${s["fv-opn-img-full"]} ${y||""}`,id:v,children:r.jsxs("div",{className:s["fv-opn-img-full-body"],children:[r.jsx("div",{className:s["close-button"],children:l&&r.jsx(E,{handleClose:()=>{l(),document.body.style.overflow="auto"}})}),r.jsxs("div",{className:s["image-container"],onTouchStart:F,onTouchMove:N,onTouchEnd:T,children:[e>0&&r.jsx("div",{className:s["arrow-left"],children:r.jsx(b,{direction:"left",handleClick:()=>t(e-1)})}),r.jsxs("div",{className:s["image-wrapper"],children:[x&&r.jsx("div",{className:s["loading-spinner"],children:r.jsx("div",{className:s.spinner})}),S?r.jsx("div",{className:s["error-message"],children:"Ошибка загрузки изображения"}):r.jsx("img",{src:a[e],alt:"Полноэкранное изображение",onLoad:()=>c(!1),onError:()=>{m(!0),c(!1)},className:s["full-image"],onClick:k,style:{cursor:"zoom-in",transform:j?"scale(1.5)":"scale(1)",transition:"transform 0.3s ease"}})]}),e<a.length-1&&r.jsx("div",{className:s["arrow-right"],children:r.jsx(b,{direction:"right",handleClick:()=>t(e+1)})})]}),a.length>1&&r.jsx("div",{className:s["progress-indicator"],children:a.map((n,i)=>r.jsx("div",{className:`${s["progress-dot"]} ${i===e?s.active:""}`,onClick:()=>t(i)},i))})]})})};O.__docgenInfo={description:`Компонент \`FOpenImgFull\` — модальное окно для просмотра изображений в полный экран с навигацией.\r
\r
Отображает:\r
- текущее изображение по индексу \`selectedImg\`\r
- стрелки навигации (влево/вправо)\r
- кнопку закрытия (\`FCloseIcon\`)\r
\r
Используется в связке с \`FDialog\` и поддерживает кастомные стили и классы.\r
\r
@component\r
@example\r
// Базовое использование\r
const [open, setOpen] = useState(true);\r
const [selected, setSelected] = useState(0);\r
\r
<FOpenImgFull\r
  imagesUrl={['/img1.jpg', '/img2.png']}\r
  selectedImg={selected}\r
  setSelectedImg={setSelected}\r
  openAndClose={open}\r
  handleClose={() => setOpen(false)}\r
/>\r
\r
@example\r
// С пользовательским стилем\r
<FOpenImgFull\r
  imagesUrl={['/img1.jpg']}\r
  selectedImg={0}\r
  setSelectedImg={(i) => console.log(i)}\r
  openAndClose={true}\r
  st={{ maxWidth: '90%', maxHeight: '90%' }}\r
/>\r
\r
@param {string[]} imagesUrl - Массив ссылок на изображения.\r
@param {number} selectedImg - Индекс текущего изображения.\r
@param {(index: number) => void} setSelectedImg - Обработчик изменения изображения.\r
@param {() => void} [handleClose] - Callback, вызывается при закрытии.\r
@param {boolean} openAndClose - Флаг открытия/закрытия окна.\r
@param {string} [id] - ID элемента.\r
@param {string} [className] - Пользовательский CSS-класс.\r
@param {React.CSSProperties} [st] - Инлайновые стили.\r
\r
@returns {JSX.Element | null} — Рендерит модальное окно с изображением или \`null\`, если данные некорректны.`,methods:[],displayName:"FOpenImgFull",props:{id:{required:!1,tsType:{name:"string"},description:`Уникальный идентификатор элемента.\r
@type {string | undefined}`},className:{required:!1,tsType:{name:"string"},description:`Дополнительный CSS-класс для контейнера.\r
@type {string | undefined}`},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Инлайновые стили для диалогового окна.\r
@type {React.CSSProperties | undefined}`},imagesUrl:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:`Массив URL-адресов изображений.\r
@type {string[]}\r
@required`},selectedImg:{required:!0,tsType:{name:"number"},description:`Индекс активного изображения.\r
@type {number}\r
@required`},setSelectedImg:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:`Функция изменения текущего изображения.\r
@param {number} index - Новый индекс изображения.\r
@returns {void}`},handleClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Callback, вызываемый при закрытии диалога.\r
@type {() => void | undefined}`},openAndClose:{required:!0,tsType:{name:"boolean"},description:`Флаг открытия/закрытия модального окна.\r
@type {boolean}`}}};export{O as F};
