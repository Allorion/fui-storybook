import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{F as s,a as o}from"./FGridRow-Cd5Ey8la.js";const m="_active_1tib7_71",a={"f-nav-bar":"_f-nav-bar_1tib7_1","f-nav-bar__menu":"_f-nav-bar__menu_1tib7_8","f-nav-bar__menu-route":"_f-nav-bar__menu-route_1tib7_31",active:m},p=({st:r,children:t,id:n,className:i})=>e.jsx(s,{obj:"container",id:n,className:i,children:e.jsx(o,{children:e.jsx(s,{obj:"item",sm:12,children:e.jsx("nav",{style:r,className:a["f-nav-bar"],children:e.jsx("ul",{className:a["f-nav-bar__menu"],children:t})})})})});p.__docgenInfo={description:`Компонент \`FNavigateBar\` — обёртка для навигационной панели.\r
\r
Содержит список пунктов меню в семантической обёртке \`<nav>\`.\r
Поддерживает адаптивность через сетку (\`FGrid\`, \`FGridRow\`, \`FGridItem\`).\r
\r
@component\r
@example\r
const getActiveClass = (route: string) => {\r
    const pathMatch = matchPath({ path: route + '/*' }, location.pathname);\r
    return pathMatch ? 'nav-rout active' : 'nav-rout';\r
};\r
\r
<FNavigateBar>\r
  <Link to="/">\r
    <FNavigateBarItem getActiveClass={getActiveClass('/')} className="nav-link">\r
      Главная\r
    </FNavigateBarItem>\r
  </Link>\r
</FNavigateBar>\r
\r
@param {React.CSSProperties} [st] - Инлайновые стили для \`<nav>\`.\r
@param {React.ReactNode} [children] - Пункты меню (обычно \`<li>\`), оборачиваемые в \`<ul>\`.\r
@param {string} [id] - HTML ID для контейнера.\r
@param {string} [className] - Кастомный класс для контейнера.\r
\r
@returns {JSX.Element} — Рендерит панель навигации с адаптивным расположением.`,methods:[],displayName:"FNavigateBar",props:{st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Инлайновые стили для элемента `<nav>`."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Дочерние элементы, обычно пункты меню (`<li>`), оборачиваемые в `<ul>`."},id:{required:!1,tsType:{name:"string"},description:"HTML ID компонента."},className:{required:!1,tsType:{name:"string"},description:"Кастомный CSS класс."}}};const l=({st:r,children:t,id:n,className:i,activeClass:c})=>e.jsx("li",{id:n,style:r,className:`${a["f-nav-bar__menu-route"]} ${c?a.active:""} ${i||""}`,children:t});l.__docgenInfo={description:`Компонент \`FNavigateBarItem\` — пункт горизонтального меню навигации.\r
\r
Отображает отдельный элемент меню (\`<li>\`), применяя стиль активности на основе переданного флага.\r
\r
@component\r
@example\r
<FNavigateBarItem activeClass={location.pathname === '/'}>\r
  Главная\r
</FNavigateBarItem>\r
\r
@param {boolean} activeClass - Определяет, является ли пункт активным.\r
@param {string} [route] - Необязательный путь, может использоваться для динамической проверки.\r
@param {React.ReactNode} [children] - Контент пункта меню (текст, иконка и т.д.).\r
@param {string} [className] - Кастомный класс для дополнительной стилизации.\r
@param {React.CSSProperties} [st] - Инлайновые стили.\r
@param {string} [id] - HTML ID элемента.\r
\r
@returns {JSX.Element} — Рендерит \`<li>\` с возможностью активного состояния.`,methods:[],displayName:"FNavigateBarItem",props:{activeClass:{required:!0,tsType:{name:"boolean"},description:"Флаг, указывающий, является ли пункт меню активным."},route:{required:!1,tsType:{name:"string"},description:`Путь или имя маршрута для проверки активности (необязательный).\r
Может использоваться в будущем для расширения логики.`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Контент пункта меню (например, текст или иконка)."},className:{required:!1,tsType:{name:"string"},description:"Кастомный CSS класс для дополнительной стилизации."},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Инлайновые стили для элемента `<li>`."},id:{required:!1,tsType:{name:"string"},description:"HTML ID элемента."}}};export{p as F,l as a};
