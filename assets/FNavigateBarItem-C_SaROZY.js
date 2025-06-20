import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{F as s,a as o}from"./FGridRow-CsF9MpPt.js";const m="_active_1tib7_71",a={"f-nav-bar":"_f-nav-bar_1tib7_1","f-nav-bar__menu":"_f-nav-bar__menu_1tib7_8","f-nav-bar__menu-route":"_f-nav-bar__menu-route_1tib7_31",active:m},p=({st:t,children:n,id:r,className:i})=>e.jsx(s,{obj:"container",id:r,className:i,children:e.jsx(o,{children:e.jsx(s,{obj:"item",sm:12,children:e.jsx("nav",{style:t,className:a["f-nav-bar"],children:e.jsx("ul",{className:a["f-nav-bar__menu"],children:n})})})})});p.__docgenInfo={description:`Компонент \`FNavigateBar\` — обёртка для навигационной панели.

Содержит список пунктов меню в семантической обёртке \`<nav>\`.
Поддерживает адаптивность через сетку (\`FGrid\`, \`FGridRow\`, \`FGridItem\`).

@component
@example
const getActiveClass = (route: string) => {
    const pathMatch = matchPath({ path: route + '/*' }, location.pathname);
    return pathMatch ? 'nav-rout active' : 'nav-rout';
};

<FNavigateBar>
  <Link to="/">
    <FNavigateBarItem getActiveClass={getActiveClass('/')} className="nav-link">
      Главная
    </FNavigateBarItem>
  </Link>
</FNavigateBar>

@param {React.CSSProperties} [st] - Инлайновые стили для \`<nav>\`.
@param {React.ReactNode} [children] - Пункты меню (обычно \`<li>\`), оборачиваемые в \`<ul>\`.
@param {string} [id] - HTML ID для контейнера.
@param {string} [className] - Кастомный класс для контейнера.

@returns {JSX.Element} — Рендерит панель навигации с адаптивным расположением.`,methods:[],displayName:"FNavigateBar",props:{st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Инлайновые стили для элемента `<nav>`."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Дочерние элементы, обычно пункты меню (`<li>`), оборачиваемые в `<ul>`."},id:{required:!1,tsType:{name:"string"},description:"HTML ID компонента."},className:{required:!1,tsType:{name:"string"},description:"Кастомный CSS класс."}}};const l=({st:t,children:n,id:r,className:i,activeClass:c})=>e.jsx("li",{id:r,style:t,className:`${a["f-nav-bar__menu-route"]} ${c?a.active:""} ${i||""}`,children:n});l.__docgenInfo={description:`Компонент \`FNavigateBarItem\` — пункт горизонтального меню навигации.

Отображает отдельный элемент меню (\`<li>\`), применяя стиль активности на основе переданного флага.

@component
@example
<FNavigateBarItem activeClass={location.pathname === '/'}>
  Главная
</FNavigateBarItem>

@param {boolean} activeClass - Определяет, является ли пункт активным.
@param {string} [route] - Необязательный путь, может использоваться для динамической проверки.
@param {React.ReactNode} [children] - Контент пункта меню (текст, иконка и т.д.).
@param {string} [className] - Кастомный класс для дополнительной стилизации.
@param {React.CSSProperties} [st] - Инлайновые стили.
@param {string} [id] - HTML ID элемента.

@returns {JSX.Element} — Рендерит \`<li>\` с возможностью активного состояния.`,methods:[],displayName:"FNavigateBarItem",props:{activeClass:{required:!0,tsType:{name:"boolean"},description:"Флаг, указывающий, является ли пункт меню активным."},route:{required:!1,tsType:{name:"string"},description:`Путь или имя маршрута для проверки активности (необязательный).
Может использоваться в будущем для расширения логики.`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Контент пункта меню (например, текст или иконка)."},className:{required:!1,tsType:{name:"string"},description:"Кастомный CSS класс для дополнительной стилизации."},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Инлайновые стили для элемента `<li>`."},id:{required:!1,tsType:{name:"string"},description:"HTML ID элемента."}}};export{p as F,l as a};
