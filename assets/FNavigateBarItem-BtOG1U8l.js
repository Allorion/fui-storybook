import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{F as s,a as m}from"./FGridRow-DPVPfH0m.js";const o="_active_lv3xi_122",e={"wave-nav-wrapper":"_wave-nav-wrapper_lv3xi_5","wave-nav-grid-item":"_wave-nav-grid-item_lv3xi_17","wave-nav-bar":"_wave-nav-bar_lv3xi_27","wave-nav-list":"_wave-nav-list_lv3xi_48","wave-nav-item":"_wave-nav-item_lv3xi_75",active:o},p=({st:r,children:n,id:t,className:i})=>a.jsx(s,{obj:"container",id:t,className:`${e["wave-nav-wrapper"]} ${i||""}`,children:a.jsx(m,{children:a.jsx(s,{obj:"item",sm:12,className:e["wave-nav-grid-item"],children:a.jsx("nav",{style:r,className:e["wave-nav-bar"],children:a.jsx("ul",{className:e["wave-nav-list"],children:n})})})})});p.__docgenInfo={description:`Компонент \`FNavigateBar\` — стеклянная навигационная панель (Glassmorphism + Wave Effect).\r
\r
Содержит список пунктов меню в семантической обёртке \`<nav>\`.\r
Поддерживает адаптивность через сетку (\`FGrid\`, \`FGridRow\`, \`FGridItem\`).\r
\r
@component\r
@example\r
<FNavigateBar>\r
  <FNavigateBarItem activeClass={location.pathname === '/'}>\r
    <Link to="/" className="wave-nav-link">Главная</Link>\r
  </FNavigateBarItem>\r
  <FNavigateBarItem activeClass={location.pathname === '/about'}>\r
    <Link to="/about" className="wave-nav-link">О нас</Link>\r
  </FNavigateBarItem>\r
</FNavigateBar>\r
\r
@param {React.CSSProperties} [st] - Инлайновые стили для \`<nav>\`.\r
@param {React.ReactNode} [children] - Пункты меню (обычно \`<li>\`), оборачиваемые в \`<ul>\`.\r
@param {string} [id] - HTML ID для контейнера.\r
@param {string} [className] - Кастомный класс для контейнера.\r
\r
@returns {JSX.Element} — Рендерит панель навигации со стеклянным фоном и эффектом размытия.`,methods:[],displayName:"FNavigateBar",props:{st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Инлайновые стили для элемента `<nav>`."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Дочерние элементы, обычно пункты меню (`<li>`), оборачиваемые в `<ul>`."},id:{required:!1,tsType:{name:"string"},description:"HTML ID компонента."},className:{required:!1,tsType:{name:"string"},description:"Кастомный CSS класс."}}};const d=({st:r,style:n,children:t,id:i,className:c,activeClass:l,...v})=>a.jsx("li",{id:i,style:r||n,className:`${e["wave-nav-item"]} ${l?e.active:""} ${c||""}`,...v,children:t});d.__docgenInfo={description:`Компонент \`FNavigateBarItem\` — пункт горизонтального меню навигации с волновой анимацией.\r
\r
Отображает отдельный элемент меню (\`<li>\`), применяя стиль активности (волновой подъем,\r
градиент #2F80ED, неоновую точку-индикатор) на основе переданного флага \`activeClass\`.\r
\r
@component\r
@example\r
<FNavigateBarItem activeClass={location.pathname === '/'}>\r
  <Link to="/" className="wave-nav-link">Главная</Link>\r
</FNavigateBarItem>\r
\r
@param {boolean} [activeClass] - Определяет, является ли пункт активным.\r
@param {string} [route] - Необязательный путь, может использоваться для динамической проверки.\r
@param {React.ReactNode} [children] - Контент пункта меню (текст, иконка, ссылка и т.д.).\r
@param {string} [className] - Кастомный класс для дополнительной стилизации.\r
@param {React.CSSProperties} [st] - Инлайновые стили.\r
@param {string} [id] - HTML ID элемента.\r
\r
@returns {JSX.Element} — Рендерит \`<li>\` с поддержкой активного состояния и волнового эффекта.`,methods:[],displayName:"FNavigateBarItem",props:{activeClass:{required:!1,tsType:{name:"boolean"},description:"Флаг, указывающий, является ли пункт меню активным."},route:{required:!1,tsType:{name:"string"},description:`Путь или имя маршрута для проверки активности (необязательный).\r
Может использоваться в будущем для расширения логики.`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Контент пункта меню (например, текст, иконка или компонент Link)."},className:{required:!1,tsType:{name:"string"},description:"Кастомный CSS класс для дополнительной стилизации."},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Инлайновые стили для элемента `<li>`."},id:{required:!1,tsType:{name:"string"},description:"HTML ID элемента."}}};export{p as F,d as a};
