import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{r as o}from"./index-DY-snNUy.js";const l=({size:e=30,st:i,id:t,className:n,color:s="primary"})=>{const r=o.useRef((Math.random()+1).toString(36).substring(2));return a.jsxs("div",{style:{margin:0,padding:0},children:[a.jsxs("style",{children:[`
                    .f-load-icon-${r.current} {
                        width: ${e}px;
                        height: ${e*2.25}px;
                        -webkit-animation: anim-f-load-icon-${r.current} 2s linear infinite alternate;
                        animation: anim-f-load-icon-${r.current} 2s linear infinite alternate;
                        transform: perspective(${e*2.5}px) rotateX(-45deg);
                        border-width: ${e/10}px !important;
                    }
                    `,`@-webkit-keyframes anim-f-load-icon-${r.current} {
                        0% {
                            box-shadow: 0 0 inset;
                        }
                        100% {
                            box-shadow: 0 calc((${e*2.25}px - 2px) * -1) inset;
                        }
                    }`,`@keyframes anim-f-load-icon-${r.current} {
                        0% {
                            box-shadow: 0 0 inset;
                        }
                        100% {
                            box-shadow: 0 calc((${e*2.25}px - 2px) * -1) inset;
                        }
                    }`]}),a.jsx("span",{className:`f-load-icon f-load-icon-${r.current} ${s} ${n!==void 0?n:""}`,style:i,id:t})]})};l.__docgenInfo={description:`Компонент FLoadIcon представляет собой анимированную SVG иконку загрузки с возможностью настройки цвета, размера и обработки кликов.\r
\r
@function FLoadIcon\r
@param {IFLoadIcon} props - Пропсы компонента.\r
@param {('primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link')} [color='primary'] - Цвет иконки. По умолчанию 'primary'.\r
@param {number} [size=30] - Размер иконки в пикселях. По умолчанию 35.\r
@param {React.CSSProperties} [st] - Дополнительные стили для SVG элемента.\r
@param {string} [id] - Уникальный идентификатор для SVG элемента.\r
@param {string} [className] - Дополнительные CSS классы для SVG элемента.\r
@returns {JSX.Element} - Возвращает анимированный SVG элемент с заданными параметрами.\r
\r
@example\r
<FLoadIcon\r
  color="success"\r
  size={50}\r
/>`,methods:[],displayName:"FLoadIcon",props:{color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'link'"}]},description:`Цвет иконки. Определяет цветовую схему иконки.\r
@type {('primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link')}\r
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"number"},description:`Размер иконки.\r
@type {number}\r
@default 30`,defaultValue:{value:"30",computed:!1}},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Дополнительные стили для SVG элемента.\r
@type {React.CSSProperties}`},id:{required:!1,tsType:{name:"string"},description:`Уникальный идентификатор для SVG элемента.\r
@type {string | undefined}`},className:{required:!1,tsType:{name:"string"},description:`Дополнительные CSS классы для SVG элемента.\r
@type {string | undefined}`}}};export{l as F};
