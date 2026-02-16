import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./index-DEgj3Fem.js";const r={"f-carousel":"_f-carousel_d5w12_1","f-carousel__viewport":"_f-carousel__viewport_d5w12_8","f-carousel__track":"_f-carousel__track_d5w12_12","f-carousel__track--animating":"_f-carousel__track--animating_d5w12_17","f-carousel__item":"_f-carousel__item_d5w12_20","f-carousel__arrow":"_f-carousel__arrow_d5w12_26","f-carousel__arrow--left":"_f-carousel__arrow--left_d5w12_43","f-carousel__arrow--right":"_f-carousel__arrow--right_d5w12_46","f-carousel__indicators":"_f-carousel__indicators_d5w12_60","f-carousel__indicator":"_f-carousel__indicator_d5w12_60","f-carousel__indicator--active":"_f-carousel__indicator--active_d5w12_75","f-carousel-item":"_f-carousel-item_d5w12_79"},N="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iMTI4cHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMjggMTI4OyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgd2lkdGg9IjEyOHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48Zz48bGluZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMkYzNDM1O3N0cm9rZS13aWR0aDoxMjtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLW1pdGVybGltaXQ6MTA7IiB4MT0iODcuNSIgeDI9IjQwLjUiIHkxPSIxMTEiIHkyPSI2NCIvPjxsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMyRjM0MzU7c3Ryb2tlLXdpZHRoOjEyO3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtbWl0ZXJsaW1pdDoxMDsiIHgxPSI0MC41IiB4Mj0iODcuNSIgeTE9IjY0IiB5Mj0iMTciLz48L2c+PC9zdmc+",Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iMTI4cHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMjggMTI4OyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgd2lkdGg9IjEyOHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48Zz48bGluZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMkYzNDM1O3N0cm9rZS13aWR0aDoxMjtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLW1pdGVybGltaXQ6MTA7IiB4MT0iNDAuNSIgeDI9Ijg3LjUiIHkxPSIxNyIgeTI9IjY0Ii8+PGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzJGMzQzNTtzdHJva2Utd2lkdGg6MTI7c3Ryb2tlLWxpbmVjYXA6c3F1YXJlO3N0cm9rZS1taXRlcmxpbWl0OjEwOyIgeDE9Ijg3LjUiIHgyPSI0MC41IiB5MT0iNjQiIHkyPSIxMTEiLz48L2c+PC9zdmc+",z=({children:d,visibleCount:t=1,showArrows:m=!0,loop:o=!1,autoplay:p=!1,autoplayInterval:y=3e3,className:M})=>{const[f,i]=n.useState(0),[c,_]=n.useState(!1),s=d.length,b=n.useRef(null),I=n.useRef(null);n.useEffect(()=>{if(p)return I.current=setInterval(()=>{_(!0),i(e=>e>=s-t?o?0:e:e+1)},y),()=>{I.current&&clearInterval(I.current)}},[p,y,s,t]),n.useEffect(()=>{if(c){const e=setTimeout(()=>_(!1),500);return()=>clearTimeout(e)}},[c]),n.useEffect(()=>{i(0)},[s,t]);const g=()=>{c||(_(!0),i(e=>e===0?o?s-t:0:e-1))},h=()=>{c||(_(!0),i(e=>e>=s-t?o?0:e:e+1))},u=n.useRef(null),v=e=>{u.current=e.touches[0].clientX},w=e=>{if(u.current===null)return;const l=u.current-e.touches[0].clientX;Math.abs(l)>50&&(l>0?h():g(),u.current=null)},j=()=>{u.current=null},T=[r["f-carousel"],M].filter(Boolean).join(" "),x=[r["f-carousel__track"],c?r["f-carousel__track--animating"]:""].filter(Boolean).join(" "),S={transform:`translateX(-${100/s*f}%)`,transition:c?"transform 0.6s cubic-bezier(.4,0,.2,1)":"none",width:`${100*s/t}%`};return a.jsxs("div",{className:T,children:[m&&a.jsx("button",{className:`${r["f-carousel__arrow"]} ${r["f-carousel__arrow--left"]}`,onClick:g,disabled:!o&&f===0,"aria-label":"Назад",children:a.jsx("img",{src:N,alt:"Предыдущий слайд"})}),a.jsx("div",{className:r["f-carousel__viewport"],onTouchStart:v,onTouchMove:w,onTouchEnd:j,children:a.jsx("div",{ref:b,className:x,style:S,children:d.map((e,l)=>a.jsx("div",{className:r["f-carousel__item"],style:{width:`${100/s}%`},children:e},l))})}),m&&a.jsx("button",{className:`${r["f-carousel__arrow"]} ${r["f-carousel__arrow--right"]}`,onClick:h,disabled:!o&&f>=s-t,"aria-label":"Вперёд",children:a.jsx("img",{src:Z,alt:"Следующий слайд"})}),a.jsx("div",{className:r["f-carousel__indicators"],children:Array.from({length:s-t+1}).map((e,l)=>a.jsx("button",{className:[r["f-carousel__indicator"],l===f?r["f-carousel__indicator--active"]:""].join(" "),onClick:()=>i(l),"aria-label":`Перейти к слайду ${l+1}`},l))})]})};z.__docgenInfo={description:`Горизонтальный карусель с поддержкой:\r
- ручной и автоматической прокрутки\r
- свайпов на мобильных устройствах\r
- индикаторов текущего слайда\r
- циклической прокрутки\r
\r
@component\r
@example\r
<FCarousel\r
  visibleCount={3}\r
  showArrows={true}\r
  loop={false}\r
  autoplay={true}\r
  autoplayInterval={4000}\r
>\r
  <div>Слайд 1</div>\r
  <div>Слайд 2</div>\r
  <div>Слайд 3</div>\r
</FCarousel>\r
\r
@param {ReactNode[]} children - Список слайдов.\r
@param {number} [visibleCount=1] - Количество видимых слайдов одновременно.\r
@param {boolean} [showArrows=true] - Отображать ли стрелки навигации.\r
@param {boolean} [loop=false] - Включить зацикливание при достижении конца.\r
@param {boolean} [autoplay=false] - Автопрокрутка слайдов.\r
@param {number} [autoplayInterval=3000] - Интервал автопрокрутки в мс.\r
@param {string} [className] - Кастомный класс для внешнего контейнера.\r
\r
@returns {JSX.Element} — Рендерит карусель с кнопками и точками-индикаторами.`,methods:[],displayName:"FCarousel",props:{children:{required:!0,tsType:{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"},description:"Массив дочерних элементов (обычно слайды в виде JSX)."},visibleCount:{required:!1,tsType:{name:"number"},description:`Количество одновременно отображаемых элементов.\r
@default 1`,defaultValue:{value:"1",computed:!1}},showArrows:{required:!1,tsType:{name:"boolean"},description:`Отображение стрелок навигации (вкл/выкл).\r
@default true`,defaultValue:{value:"true",computed:!1}},loop:{required:!1,tsType:{name:"boolean"},description:`Включает цикличную прокрутку (зацикливание).\r
@default false`,defaultValue:{value:"false",computed:!1}},autoplay:{required:!1,tsType:{name:"boolean"},description:`Автоматическое переключение слайдов.\r
@default false`,defaultValue:{value:"false",computed:!1}},autoplayInterval:{required:!1,tsType:{name:"number"},description:`Задержка автопрокрутки в миллисекундах.\r
@default 3000`,defaultValue:{value:"3000",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Пользовательский CSS класс для контейнера карусели."}}};const R=({children:d,className:t,id:m})=>a.jsx("div",{className:`${r["f-carousel-item"]} ${t||""}`,id:m,children:d});R.__docgenInfo={description:`Компонент \`FCarouselItem\` — отдельный элемент карусели.\r
\r
Используется внутри \`FCarousel\` как обёртка для каждого слайда.\r
\r
@component\r
@example\r
<FCarouselItem className="custom-slide">\r
  <img src="/slide1.jpg" alt="Слайд 1" />\r
</FCarouselItem>\r
\r
@param {React.ReactNode} children - Контент слайда.\r
@param {string} [className] - Пользовательский класс.\r
@param {string} [id] - HTML ID.\r
\r
@returns {JSX.Element} — Рендерит \`<div>\` со стилями карусели и кастомным классом.`,methods:[],displayName:"FCarouselItem",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Контент слайда (обычно изображение или JSX)."},className:{required:!1,tsType:{name:"string"},description:"Кастомный CSS класс для дополнительной стилизации."},id:{required:!1,tsType:{name:"string"},description:`Уникальный идентификатор элемента.\r
@type {string | undefined}`}}};export{R as F,z as a};
