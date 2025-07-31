import{j as m}from"./jsx-runtime-Cf8x2fCZ.js";import{r as n}from"./index-DY-snNUy.js";import{r as Y}from"./index-xMzmejw-.js";const r={"f-tooltip":"_f-tooltip_1d4l5_1","f-tooltip--open":"_f-tooltip--open_1d4l5_17","f-tooltip--exiting":"_f-tooltip--exiting_1d4l5_22","f-tooltip__wrapper":"_f-tooltip__wrapper_1d4l5_27","f-tooltip__content":"_f-tooltip__content_1d4l5_30","f-tooltip__arrow":"_f-tooltip__arrow_1d4l5_35","f-tooltip--top":"_f-tooltip--top_1d4l5_44","f-tooltip--bottom":"_f-tooltip--bottom_1d4l5_50","f-tooltip--left":"_f-tooltip--left_1d4l5_56","f-tooltip--right":"_f-tooltip--right_1d4l5_62","f-tooltip--with-arrow":"_f-tooltip--with-arrow_1d4l5_104"},G=({title:E,children:l,placement:b="bottom",arrow:u=!1,open:_,onOpen:y,onClose:h,disableHoverListener:L=!1,disableFocusListener:j=!1,disableTouchListener:N=!1,enterDelay:k=0,leaveDelay:B=0,className:D="",style:M})=>{const[I,S]=n.useState(!1),[O,q]=n.useState(!1),[p,V]=n.useState(!1),[z,v]=n.useState(!1),[A,$]=n.useState({}),g=n.useRef(null),w=n.useRef(null),i=n.useRef(null),s=n.useRef(null),f=n.useRef(null),H=_!==void 0?_:I,F=()=>{i.current&&clearTimeout(i.current),s.current&&clearTimeout(s.current),i.current=setTimeout(()=>{_===void 0&&S(!0),q(!0),v(!1),f.current&&cancelAnimationFrame(f.current),f.current=requestAnimationFrame(()=>{V(!0),y==null||y(),R()})},k)},x=()=>{i.current&&clearTimeout(i.current),s.current&&clearTimeout(s.current),(H||p)&&(_===void 0&&S(!1),V(!1),v(!0),s.current=setTimeout(()=>{v(!1),q(!1),h==null||h()},B||220))},R=()=>{if(!g.current||!w.current)return;const e=g.current.getBoundingClientRect(),t=w.current.getBoundingClientRect(),o=window.scrollX,T=window.scrollY;let c=0,d=0;switch(b){case"top":c=e.top+T-t.height-(u?8:0),d=e.left+o+(e.width-t.width)/2;break;case"bottom":c=e.bottom+T+(u?8:0),d=e.left+o+(e.width-t.width)/2;break;case"left":c=e.top+T+(e.height-t.height)/2,d=e.left+o-t.width-(u?8:0);break;case"right":c=e.top+T+(e.height-t.height)/2,d=e.right+o+(u?8:0);break}$({top:`${c}px`,left:`${d}px`})};n.useEffect(()=>{p&&R()},[p,b]),n.useEffect(()=>{const e=()=>{p&&R()};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e),i.current&&clearTimeout(i.current),s.current&&clearTimeout(s.current),f.current&&cancelAnimationFrame(f.current)}},[p]);const a={ref:g};L||(a.onMouseEnter=e=>{var t,o;F(),(o=(t=l.props).onMouseEnter)==null||o.call(t,e)},a.onMouseLeave=e=>{var t,o;x(),(o=(t=l.props).onMouseLeave)==null||o.call(t,e)}),j||(a.onFocus=e=>{var t,o;F(),(o=(t=l.props).onFocus)==null||o.call(t,e)},a.onBlur=e=>{var t,o;x(),(o=(t=l.props).onBlur)==null||o.call(t,e)}),N||(a.onTouchStart=e=>{var t,o;F(),(o=(t=l.props).onTouchStart)==null||o.call(t,e)},a.onTouchEnd=e=>{var t,o;x(),(o=(t=l.props).onTouchEnd)==null||o.call(t,e)});const P=n.cloneElement(l,a),X=[r["f-tooltip"],r[`f-tooltip--${b}`],u?r["f-tooltip--with-arrow"]:"",p?r["f-tooltip--open"]:"",z?r["f-tooltip--exiting"]:"",D].filter(Boolean).join(" "),C=O&&E?m.jsxs("div",{ref:w,className:X,style:{...M,...A},role:"tooltip",children:[u&&m.jsx("div",{className:r["f-tooltip__arrow"]}),m.jsx("div",{className:r["f-tooltip__content"],children:E})]}):null;return m.jsxs(m.Fragment,{children:[P,C&&Y.createPortal(C,document.body)]})};G.__docgenInfo={description:`Компонент FTooltip - отображает всплывающую подсказку при взаимодействии с дочерним элементом

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
@type {ReactNode}`},children:{required:!0,tsType:{name:"any"},description:`Дочерний элемент, к которому будет применен тултип. 
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
@default 0`,defaultValue:{value:"0",computed:!1}},leaveDelay:{required:!1,tsType:{name:"number"},description:`Задержка перед закрытием тултипа в миллисекундах
@type {number}
@default 0`,defaultValue:{value:"0",computed:!1}},className:{required:!1,tsType:{name:"string"},description:`Дополнительный CSS класс для тултипа
@type {string}`,defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:`Inline стили для тултипа
@type {CSSProperties}`}}};export{G as F};
