import{j as l}from"./jsx-runtime-Cf8x2fCZ.js";import{r as n}from"./index-DY-snNUy.js";import{r as U}from"./index-xMzmejw-.js";import{F as W}from"./FButton-CwfpvuGP.js";import"./index-yBjzXJbu.js";import"./index-fNjTmf9T.js";const p={"f-tooltip":"_f-tooltip_1d4l5_1","f-tooltip--open":"_f-tooltip--open_1d4l5_17","f-tooltip--exiting":"_f-tooltip--exiting_1d4l5_22","f-tooltip__wrapper":"_f-tooltip__wrapper_1d4l5_27","f-tooltip__content":"_f-tooltip__content_1d4l5_30","f-tooltip__arrow":"_f-tooltip__arrow_1d4l5_35","f-tooltip--top":"_f-tooltip--top_1d4l5_44","f-tooltip--bottom":"_f-tooltip--bottom_1d4l5_50","f-tooltip--left":"_f-tooltip--left_1d4l5_56","f-tooltip--right":"_f-tooltip--right_1d4l5_62","f-tooltip--with-arrow":"_f-tooltip--with-arrow_1d4l5_104"},S=({title:b,children:a,placement:h="bottom",arrow:u=!1,open:_,onOpen:g,onClose:v,disableHoverListener:k=!1,disableFocusListener:M=!1,disableTouchListener:O=!1,enterDelay:H=0,leaveDelay:I=0,className:P="",style:z})=>{const[A,q]=n.useState(!1),[$,L]=n.useState(!1),[c,j]=n.useState(!1),[X,F]=n.useState(!1),[Y,G]=n.useState({}),x=n.useRef(null),w=n.useRef(null),i=n.useRef(null),r=n.useRef(null),f=n.useRef(null),J=_!==void 0?_:A,V=()=>{i.current&&clearTimeout(i.current),r.current&&clearTimeout(r.current),i.current=setTimeout(()=>{_===void 0&&q(!0),L(!0),F(!1),f.current&&cancelAnimationFrame(f.current),f.current=requestAnimationFrame(()=>{j(!0),g==null||g(),R()})},H)},E=()=>{i.current&&clearTimeout(i.current),r.current&&clearTimeout(r.current),(J||c)&&(_===void 0&&q(!1),j(!1),F(!0),r.current=setTimeout(()=>{F(!1),L(!1),v==null||v()},I||220))},R=()=>{if(!x.current||!w.current)return;const e=x.current.getBoundingClientRect(),t=w.current.getBoundingClientRect(),o=window.scrollX,T=window.scrollY;let d=0,m=0;switch(h){case"top":d=e.top+T-t.height-(u?8:0),m=e.left+o+(e.width-t.width)/2;break;case"bottom":d=e.bottom+T+(u?8:0),m=e.left+o+(e.width-t.width)/2;break;case"left":d=e.top+T+(e.height-t.height)/2,m=e.left+o-t.width-(u?8:0);break;case"right":d=e.top+T+(e.height-t.height)/2,m=e.right+o+(u?8:0);break}G({top:`${d}px`,left:`${m}px`})};n.useEffect(()=>{c&&R()},[c,h]),n.useEffect(()=>{const e=()=>{c&&R()};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e),i.current&&clearTimeout(i.current),r.current&&clearTimeout(r.current),f.current&&cancelAnimationFrame(f.current)}},[c]);const s={ref:x};k||(s.onMouseEnter=e=>{var t,o;V(),(o=(t=a.props).onMouseEnter)==null||o.call(t,e)},s.onMouseLeave=e=>{var t,o;E(),(o=(t=a.props).onMouseLeave)==null||o.call(t,e)}),M||(s.onFocus=e=>{var t,o;V(),(o=(t=a.props).onFocus)==null||o.call(t,e)},s.onBlur=e=>{var t,o;E(),(o=(t=a.props).onBlur)==null||o.call(t,e)}),O||(s.onTouchStart=e=>{var t,o;V(),(o=(t=a.props).onTouchStart)==null||o.call(t,e)},s.onTouchEnd=e=>{var t,o;E(),(o=(t=a.props).onTouchEnd)==null||o.call(t,e)});const K=n.cloneElement(a,s),Q=[p["f-tooltip"],p[`f-tooltip--${h}`],u?p["f-tooltip--with-arrow"]:"",c?p["f-tooltip--open"]:"",X?p["f-tooltip--exiting"]:"",P].filter(Boolean).join(" "),C=$&&b?l.jsxs("div",{ref:w,className:Q,style:{...z,...Y},role:"tooltip",children:[u&&l.jsx("div",{className:p["f-tooltip__arrow"]}),l.jsx("div",{className:p["f-tooltip__content"],children:b})]}):null;return l.jsxs(l.Fragment,{children:[K,C&&U.createPortal(C,document.body)]})};S.__docgenInfo={description:`Компонент FTooltip - отображает всплывающую подсказку при взаимодействии с дочерним элементом

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
@type {CSSProperties}`}}};const ie={title:"Material/FTooltip",component:S,argTypes:{title:{control:{type:"text"},defaultValue:"Подсказка"},placement:{control:{type:"radio"},options:["top","bottom","left","right"],defaultValue:"bottom"},arrow:{control:{type:"boolean"},defaultValue:!1},open:{control:{type:"boolean"}},disableHoverListener:{control:{type:"boolean"},defaultValue:!1},disableFocusListener:{control:{type:"boolean"},defaultValue:!1},disableTouchListener:{control:{type:"boolean"},defaultValue:!1},enterDelay:{control:{type:"number"},defaultValue:0},leaveDelay:{control:{type:"number"},defaultValue:0},className:{control:{type:"text"}},style:{control:{type:"object"}}}},Z=b=>l.jsx("div",{style:{padding:80,display:"flex",justifyContent:"center"},children:l.jsx(S,{...b,children:l.jsx(W,{children:"Наведи на меня"})})}),y=Z.bind({});y.args={title:"Это всплывающая подсказка",placement:"bottom",arrow:!1,enterDelay:0,leaveDelay:0,disableHoverListener:!1,disableFocusListener:!1,disableTouchListener:!1};var D,B,N;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`args => <div style={{
  padding: 80,
  display: 'flex',
  justifyContent: 'center'
}}>
        <FTooltip {...args}>
            <FButton>Наведи на меня</FButton>
        </FTooltip>
    </div>`,...(N=(B=y.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};const re=["Playground"];export{y as Playground,re as __namedExportsOrder,ie as default};
