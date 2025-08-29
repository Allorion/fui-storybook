import{j as _}from"./jsx-runtime-Cf8x2fCZ.js";import{r as n}from"./index-DY-snNUy.js";import{r as X}from"./index-xMzmejw-.js";const s={"f-tooltip":"_f-tooltip_1d4l5_1","f-tooltip--open":"_f-tooltip--open_1d4l5_17","f-tooltip--exiting":"_f-tooltip--exiting_1d4l5_22","f-tooltip__wrapper":"_f-tooltip__wrapper_1d4l5_27","f-tooltip__content":"_f-tooltip__content_1d4l5_30","f-tooltip__arrow":"_f-tooltip__arrow_1d4l5_35","f-tooltip--top":"_f-tooltip--top_1d4l5_44","f-tooltip--bottom":"_f-tooltip--bottom_1d4l5_50","f-tooltip--left":"_f-tooltip--left_1d4l5_56","f-tooltip--right":"_f-tooltip--right_1d4l5_62","f-tooltip--with-arrow":"_f-tooltip--with-arrow_1d4l5_104"},Y=({title:S,children:l,placement:v="bottom",arrow:a=!1,open:T,onOpen:g,onClose:p,disableHoverListener:V=!1,disableFocusListener:j=!1,disableTouchListener:k=!1,enterDelay:B=0,className:M="",style:C})=>{const[D,q]=n.useState(!1),[I,w]=n.useState(!1),[u,L]=n.useState(!1),[O,b]=n.useState(!1),[z,A]=n.useState({}),F=n.useRef(null),y=n.useRef(null),i=n.useRef(null),f=n.useRef(null),c=n.useRef(null),$=T!==void 0?T:D,x=()=>{i.current&&clearTimeout(i.current),f.current&&clearTimeout(f.current),i.current=setTimeout(()=>{T===void 0&&q(!0),w(!0),b(!1),c.current&&cancelAnimationFrame(c.current),c.current=requestAnimationFrame(()=>{L(!0),g==null||g(),R()})},B)},E=()=>{if(i.current&&clearTimeout(i.current),f.current&&clearTimeout(f.current),$||u){T===void 0&&q(!1),L(!1),b(!0);const e=y.current;if(e){const t=o=>{o.propertyName==="opacity"&&(b(!1),w(!1),p==null||p(),e.removeEventListener("transitionend",t))};e.addEventListener("transitionend",t)}else b(!1),w(!1),p==null||p()}},R=()=>{if(!F.current||!y.current)return;const e=F.current.getBoundingClientRect(),t=y.current.getBoundingClientRect(),o=window.scrollX,h=window.scrollY;let d=0,m=0;switch(v){case"top":d=e.top+h-t.height-(a?8:0),m=e.left+o+(e.width-t.width)/2;break;case"bottom":d=e.bottom+h+(a?8:0),m=e.left+o+(e.width-t.width)/2;break;case"left":d=e.top+h+(e.height-t.height)/2,m=e.left+o-t.width-(a?8:0);break;case"right":d=e.top+h+(e.height-t.height)/2,m=e.right+o+(a?8:0);break}A({top:`${d}px`,left:`${m}px`})};n.useEffect(()=>{u&&R()},[u,v]),n.useEffect(()=>{const e=()=>{u&&R()};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e),i.current&&clearTimeout(i.current),f.current&&clearTimeout(f.current),c.current&&cancelAnimationFrame(c.current)}},[u]);const r={ref:F};V||(r.onMouseEnter=e=>{var t,o;x(),(o=(t=l.props).onMouseEnter)==null||o.call(t,e)},r.onMouseLeave=e=>{var t,o;E(),(o=(t=l.props).onMouseLeave)==null||o.call(t,e)}),j||(r.onFocus=e=>{var t,o;x(),(o=(t=l.props).onFocus)==null||o.call(t,e)},r.onBlur=e=>{var t,o;E(),(o=(t=l.props).onBlur)==null||o.call(t,e)}),k||(r.onTouchStart=e=>{var t,o;x(),(o=(t=l.props).onTouchStart)==null||o.call(t,e)},r.onTouchEnd=e=>{var t,o;E(),(o=(t=l.props).onTouchEnd)==null||o.call(t,e)});const H=n.cloneElement(l,r),P=[s["f-tooltip"],s[`f-tooltip--${v}`],a?s["f-tooltip--with-arrow"]:"",u?s["f-tooltip--open"]:"",O?s["f-tooltip--exiting"]:"",M].filter(Boolean).join(" "),N=I&&S?_.jsxs("div",{ref:y,className:P,style:{...C,...z},role:"tooltip",children:[a&&_.jsx("div",{className:s["f-tooltip__arrow"]}),_.jsx("div",{className:s["f-tooltip__content"],children:S})]}):null;return _.jsxs(_.Fragment,{children:[H,N&&X.createPortal(N,document.body)]})};Y.__docgenInfo={description:`Компонент FTooltip - отображает всплывающую подсказку при взаимодействии с дочерним элементом

@component
@example
// Базовое использование с наведением
<FTooltip title="Это подсказка">
  <button>Наведи на меня</button>
</FTooltip>

@example
// Тултип с кастомным расположением и стрелкой
<FTooltip title="Подсказка сверху" placement="top" arrow>
  <span>Элемент с тултипом</span>
</FTooltip>

@example
// Controlled тултип с задержками
const [open, setOpen] = useState(false);
<FTooltip 
  title="Управляемый тултип" 
  open={open}
  onOpen={() => setOpen(true)}
  onClose={() => setOpen(false)}
  enterDelay={300}
  leaveDelay={200}
>
  <div>Элемент</div>
</FTooltip>

@example
// Тултип только по клику (отключены другие слушатели)
<FTooltip 
  title="Только по клику" 
  disableHoverListener
  disableFocusListener
>
  <button>Кликни меня</button>
</FTooltip>`,methods:[],displayName:"FTooltip",props:{title:{required:!0,tsType:{name:"ReactNode"},description:`Текст или React-элемент, который будет отображаться в тултипе 
@type {ReactNode}`},children:{required:!0,tsType:{name:"ReactElement"},description:`Дочерний элемент, к которому будет применен тултип. 
Должен поддерживать передачу ref
@type {ReactElement}`},placement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:`Расположение тултипа относительно дочернего элемента
@type {'top' | 'bottom' | 'left' | 'right'}
@default 'bottom'`,defaultValue:{value:"'bottom'",computed:!1}},arrow:{required:!1,tsType:{name:"boolean"},description:`Отображать ли стрелку у тултипа
@type {boolean}
@default false`,defaultValue:{value:"false",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:`Контролируемое состояние открытия тултипа. 
Если не указано, компонент управляет состоянием самостоятельно
@type {boolean}`},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Callback, вызываемый при открытии тултипа
@type {Function}`},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Callback, вызываемый при закрытии тултипа
@type {Function}`},disableHoverListener:{required:!1,tsType:{name:"boolean"},description:`Отключает прослушивание событий наведения мыши
@type {boolean}
@default false`,defaultValue:{value:"false",computed:!1}},disableFocusListener:{required:!1,tsType:{name:"boolean"},description:`Отключает прослушивание событий фокуса
@type {boolean}
@default false`,defaultValue:{value:"false",computed:!1}},disableTouchListener:{required:!1,tsType:{name:"boolean"},description:`Отключает прослушивание touch-событий
@type {boolean}
@default false`,defaultValue:{value:"false",computed:!1}},enterDelay:{required:!1,tsType:{name:"number"},description:`Задержка перед открытием тултипа в миллисекундах
@type {number}
@default 0`,defaultValue:{value:"0",computed:!1}},className:{required:!1,tsType:{name:"string"},description:`Дополнительный CSS класс для тултипа
@type {string}`,defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:`Inline стили для тултипа
@type {CSSProperties}`}}};export{Y as F};
