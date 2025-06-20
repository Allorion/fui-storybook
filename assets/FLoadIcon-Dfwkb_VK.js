import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as o}from"./index-DY-snNUy.js";const l=({size:e=30,st:i,id:t,className:n,color:s="primary"})=>{const a=o.useRef((Math.random()+1).toString(36).substring(2));return r.jsxs("div",{style:{margin:0,padding:0},children:[r.jsxs("style",{children:[`
                    .f-load-icon-${a.current} {
                        width: ${e}px;
                        height: ${e*2.25}px;
                        -webkit-animation: anim-f-load-icon-${a.current} 2s linear infinite alternate;
                        animation: anim-f-load-icon-${a.current} 2s linear infinite alternate;
                        transform: perspective(${e*2.5}px) rotateX(-45deg);
                        border-width: ${e/10}px !important;
                    }
                    `,`@-webkit-keyframes anim-f-load-icon-${a.current} {
                        0% {
                            box-shadow: 0 0 inset;
                        }
                        100% {
                            box-shadow: 0 calc((${e*2.25}px - 2px) * -1) inset;
                        }
                    }`,`@keyframes anim-f-load-icon-${a.current} {
                        0% {
                            box-shadow: 0 0 inset;
                        }
                        100% {
                            box-shadow: 0 calc((${e*2.25}px - 2px) * -1) inset;
                        }
                    }`]}),r.jsx("span",{className:`f-load-icon f-load-icon-${a.current} ${s} ${n!==void 0?n:""}`,style:i,id:t})]})};l.__docgenInfo={description:`Компонент FLoadIcon представляет собой анимированную SVG иконку загрузки с возможностью настройки цвета, размера и обработки кликов.

@function FLoadIcon
@param {IFLoadIcon} props - Пропсы компонента.
@param {('primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link')} [color='primary'] - Цвет иконки. По умолчанию 'primary'.
@param {number} [size=30] - Размер иконки в пикселях. По умолчанию 35.
@param {React.CSSProperties} [st] - Дополнительные стили для SVG элемента.
@param {string} [id] - Уникальный идентификатор для SVG элемента.
@param {string} [className] - Дополнительные CSS классы для SVG элемента.
@returns {JSX.Element} - Возвращает анимированный SVG элемент с заданными параметрами.

@example
<FLoadIcon
  color="success"
  size={50}
/>`,methods:[],displayName:"FLoadIcon",props:{color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'link'"}]},description:`Цвет иконки. Определяет цветовую схему иконки.
@type {('primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link')}
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"number"},description:`Размер иконки.
@type {number}
@default 30`,defaultValue:{value:"30",computed:!1}},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Дополнительные стили для SVG элемента.
@type {React.CSSProperties}`},id:{required:!1,tsType:{name:"string"},description:`Уникальный идентификатор для SVG элемента.
@type {string | undefined}`},className:{required:!1,tsType:{name:"string"},description:`Дополнительные CSS классы для SVG элемента.
@type {string | undefined}`}}};export{l as F};
