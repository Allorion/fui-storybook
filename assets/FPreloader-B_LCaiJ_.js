import{j as d}from"./jsx-runtime-Cf8x2fCZ.js";import{r as l}from"./index-DY-snNUy.js";const r={"f-preloader":"_f-preloader_17f9x_1","active-preloader":"_active-preloader_17f9x_10"},s=({st:n,backgroundColor:a="#e0e0e0",children:o,open:e})=>{const t={backgroundColor:a,...n};return l.useEffect(()=>(document.querySelectorAll(".active-preloader").length>0?document.body.classList.add("open-preloader"):document.body.classList.remove("open-preloader"),()=>{document.body.classList.remove("open-preloader")}),[e]),d.jsx("div",{className:`${r["f-preloader"]} ${e?r["active-preloader"]:""}`,style:t,children:o})};s.__docgenInfo={description:`Компонент \`FPreloader\` — универсальный прелоадер (спиннер) с возможностью:
- управления состоянием через \`open\`
- кастомного цвета фона
- добавления дочерних элементов (например, логотипа)
- поддержка темизации через CSS Module

При \`open={true}\` блокирует \`body\` скролл и показывает спиннер.

@component
@example
// Базовое использование
<FPreloader open={true}>
  <FLoadIcon size={24} />
</FPreloader>

@example
// С пользовательским стилем и фоном
<FPreloader
  open={isLoading}
  backgroundColor="#ffffffaa"
  st={{ zIndex: 9999 }}
>
  <div>Загрузка...</div>
</FPreloader>

@param {React.CSSProperties} [st] - Инлайновые стили для контейнера.
@param {string} [backgroundColor='#e0e0e0'] - Цвет фона спиннера.
@param {React.ReactNode} [children] - Элементы, отображаемые внутри.
@param {boolean} open - Открывать ли спиннер.

@returns {JSX.Element} — Рендерит прелоадер поверх всего содержимого.`,methods:[],displayName:"FPreloader",props:{st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Инлайновые стили для контейнера прелоадера.
@type {React.CSSProperties | undefined}`},backgroundColor:{required:!1,tsType:{name:"string"},description:`Цвет фона спиннера (прозрачности и т.д.)
@default '#e0e0e0'`,defaultValue:{value:"'#e0e0e0'",computed:!1}},children:{required:!1,tsType:{name:"union",raw:"React.ReactElement | React.ReactNode",elements:[{name:"ReactReactElement",raw:"React.ReactElement"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:`Дочерние элементы — обычно это SVG или индикатор загрузки.
@type {React.ReactElement | React.ReactNode | undefined}`},open:{required:!0,tsType:{name:"boolean"},description:`Флаг открытия/закрытия прелоадера.
@type {boolean}`}}};export{s as F};
