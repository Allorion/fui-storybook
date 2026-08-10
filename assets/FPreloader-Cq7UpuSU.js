import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-B3j06Xw8.js";const r={"f-preloader":"_f-preloader_17f9x_1","active-preloader":"_active-preloader_17f9x_10"},s=({st:n,backgroundColor:a="#e0e0e0",children:o,open:e})=>{const t={backgroundColor:a,...n};return l.useEffect(()=>(document.querySelectorAll(".active-preloader").length>0?document.body.classList.add("open-preloader"):document.body.classList.remove("open-preloader"),()=>{document.body.classList.remove("open-preloader")}),[e]),d.jsx("div",{className:`${r["f-preloader"]} ${e?r["active-preloader"]:""}`,style:t,children:o})};s.__docgenInfo={description:`Компонент \`FPreloader\` — универсальный прелоадер (спиннер) с возможностью:\r
- управления состоянием через \`open\`\r
- кастомного цвета фона\r
- добавления дочерних элементов (например, логотипа)\r
- поддержка темизации через CSS Module\r
\r
При \`open={true}\` блокирует \`body\` скролл и показывает спиннер.\r
\r
@component\r
@example\r
// Базовое использование\r
<FPreloader open={true}>\r
  <FLoadIcon size={24} />\r
</FPreloader>\r
\r
@example\r
// С пользовательским стилем и фоном\r
<FPreloader\r
  open={isLoading}\r
  backgroundColor="#ffffffaa"\r
  st={{ zIndex: 9999 }}\r
>\r
  <div>Загрузка...</div>\r
</FPreloader>\r
\r
@param {React.CSSProperties} [st] - Инлайновые стили для контейнера.\r
@param {string} [backgroundColor='#e0e0e0'] - Цвет фона спиннера.\r
@param {React.ReactNode} [children] - Элементы, отображаемые внутри.\r
@param {boolean} open - Открывать ли спиннер.\r
\r
@returns {JSX.Element} — Рендерит прелоадер поверх всего содержимого.`,methods:[],displayName:"FPreloader",props:{st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Инлайновые стили для контейнера прелоадера.\r
@type {React.CSSProperties | undefined}`},backgroundColor:{required:!1,tsType:{name:"string"},description:`Цвет фона спиннера (прозрачности и т.д.)\r
@default '#e0e0e0'`,defaultValue:{value:"'#e0e0e0'",computed:!1}},children:{required:!1,tsType:{name:"union",raw:"React.ReactElement | React.ReactNode",elements:[{name:"ReactReactElement",raw:"React.ReactElement"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:`Дочерние элементы — обычно это SVG или индикатор загрузки.\r
@type {React.ReactElement | React.ReactNode | undefined}`},open:{required:!0,tsType:{name:"boolean"},description:`Флаг открытия/закрытия прелоадера.\r
@type {boolean}`}}};export{s as F};
