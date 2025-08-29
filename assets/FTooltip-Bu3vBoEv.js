import{j as m}from"./jsx-runtime-Cf8x2fCZ.js";import{r as i}from"./index-DY-snNUy.js";import{r as K}from"./index-xMzmejw-.js";const p={"f-tooltip":"_f-tooltip_1d4l5_1","f-tooltip--open":"_f-tooltip--open_1d4l5_17","f-tooltip--exiting":"_f-tooltip--exiting_1d4l5_22","f-tooltip__wrapper":"_f-tooltip__wrapper_1d4l5_27","f-tooltip__content":"_f-tooltip__content_1d4l5_30","f-tooltip__arrow":"_f-tooltip__arrow_1d4l5_35","f-tooltip--top":"_f-tooltip--top_1d4l5_44","f-tooltip--bottom":"_f-tooltip--bottom_1d4l5_50","f-tooltip--left":"_f-tooltip--left_1d4l5_56","f-tooltip--right":"_f-tooltip--right_1d4l5_62","f-tooltip--with-arrow":"_f-tooltip--with-arrow_1d4l5_104"},Q=({title:L,children:s,placement:E="bottom",arrow:u=!1,open:y,onOpen:x,onClose:c,disableHoverListener:k=!1,disableFocusListener:M=!1,disableTouchListener:H=!1,enterDelay:O=0,disableOnDisabled:B=!1,className:C="",style:I})=>{const[z,V]=i.useState(!1),[A,R]=i.useState(!1),[f,N]=i.useState(!1),[P,v]=i.useState(!1),[$,X]=i.useState({}),g=i.useRef(null),w=i.useRef(null),a=i.useRef(null),d=i.useRef(null),b=i.useRef(null),Y=y!==void 0?y:z,S=()=>{a.current&&clearTimeout(a.current),d.current&&clearTimeout(d.current),a.current=setTimeout(()=>{y===void 0&&V(!0),R(!0),v(!1),b.current&&cancelAnimationFrame(b.current),b.current=requestAnimationFrame(()=>{N(!0),x==null||x(),F()})},O)},q=()=>{if(a.current&&clearTimeout(a.current),d.current&&clearTimeout(d.current),Y||f){y===void 0&&V(!1),N(!1),v(!0);const e=w.current;if(e){const t=o=>{o.propertyName==="opacity"&&(v(!1),R(!1),c==null||c(),e.removeEventListener("transitionend",t))};e.addEventListener("transitionend",t)}else v(!1),R(!1),c==null||c()}},F=()=>{if(!g.current||!w.current)return;const e=g.current.getBoundingClientRect(),t=w.current.getBoundingClientRect(),o=window.scrollX,l=window.scrollY;let n=0,h=0;switch(E){case"top":n=e.top+l-t.height-(u?8:0),h=e.left+o+(e.width-t.width)/2;break;case"bottom":n=e.bottom+l+(u?8:0),h=e.left+o+(e.width-t.width)/2;break;case"left":n=e.top+l+(e.height-t.height)/2,h=e.left+o-t.width-(u?8:0);break;case"right":n=e.top+l+(e.height-t.height)/2,h=e.right+o+(u?8:0);break}X({top:`${n}px`,left:`${h}px`})};i.useEffect(()=>{f&&F()},[f,E]),i.useEffect(()=>{const e=()=>{f&&F()};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e),a.current&&clearTimeout(a.current),d.current&&clearTimeout(d.current),b.current&&cancelAnimationFrame(b.current)}},[f,F]);const _=s.props.disabled;if(_&&B)return i.cloneElement(s,{ref:g});const r={ref:g},T={};if(!k){const e=o=>{var l,n;S(),(n=(l=s.props).onMouseEnter)==null||n.call(l,o)},t=o=>{var l,n;q(),(n=(l=s.props).onMouseLeave)==null||n.call(l,o)};_?(T.onMouseEnter=e,T.onMouseLeave=t):(r.onMouseEnter=e,r.onMouseLeave=t)}if(!M&&!_&&(r.onFocus=e=>{var t,o;S(),(o=(t=s.props).onFocus)==null||o.call(t,e)},r.onBlur=e=>{var t,o;q(),(o=(t=s.props).onBlur)==null||o.call(t,e)}),!H){const e=o=>{var l,n;S(),(n=(l=s.props).onTouchStart)==null||n.call(l,o)},t=o=>{var l,n;q(),(n=(l=s.props).onTouchEnd)==null||n.call(l,o)};_?(T.onTouchStart=e,T.onTouchEnd=t):(r.onTouchStart=e,r.onTouchEnd=t)}const j=i.cloneElement(s,r),G=_?m.jsx("div",{style:{display:"inline-block",cursor:"not-allowed"},...T,children:j}):j,J=[p["f-tooltip"],p[`f-tooltip--${E}`],u?p["f-tooltip--with-arrow"]:"",f?p["f-tooltip--open"]:"",P?p["f-tooltip--exiting"]:"",C].filter(Boolean).join(" "),D=A&&L?m.jsxs("div",{ref:w,className:J,style:{...I,...$},role:"tooltip",children:[u&&m.jsx("div",{className:p["f-tooltip__arrow"]}),m.jsx("div",{className:p["f-tooltip__content"],children:L})]}):null;return m.jsxs(m.Fragment,{children:[G,D&&K.createPortal(D,document.body)]})};Q.__docgenInfo={description:`Компонент FTooltip - отображает всплывающую подсказку при взаимодействии с дочерним элементом

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
</FTooltip>

@example
// Тултип для disabled элемента
<FTooltip title="Эта кнопка заблокирована">
  <button disabled>Disabled кнопка</button>
</FTooltip>

@example
// Отключить тултип для disabled элементов
<FTooltip title="Не покажется" disableOnDisabled>
  <button disabled>Disabled кнопка</button>
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
@default 0`,defaultValue:{value:"0",computed:!1}},disableOnDisabled:{required:!1,tsType:{name:"boolean"},description:`Отключает тултип для disabled элементов
@type {boolean}
@default false`,defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:`Дополнительный CSS класс для тултипа
@type {string}`,defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:`Inline стили для тултипа
@type {CSSProperties}`}}};export{Q as F};
