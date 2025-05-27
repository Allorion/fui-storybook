import{j as u}from"./jsx-runtime-Cf8x2fCZ.js";import{e as s}from"./index-DY-snNUy.js";const k="_link_1desp_10",f="_disabled_1desp_36",n={"page-links":"_page-links_1desp_3",link:k,disabled:f},y=({children:a,className:i,st:t,id:l,disabled:d=[]})=>{const p=s.Children.map(a,(e,c)=>{if(s.isValidElement(e)){const r=d.includes(c),m=e.props.className?`${e.props.className} ${n.link} ${r?n.disabled:""}`:`${n.link} ${r?n.disabled:""}`;return s.cloneElement(e,{className:m,...r&&{onClick:o=>o.preventDefault()}})}return e});return u.jsx("div",{className:`${n["page-links"]} ${i||""}`,style:t,id:l,children:p})};y.__docgenInfo={description:`Компонент \`FMenuLinks\` оборачивает переданные дочерние элементы в общий контейнер\r
и добавляет каждому из них CSS-класс \`link\`, чтобы они соответствовали единой стилистике меню.\r
\r
Используется как обёртка для создания вертикального меню с ссылками.\r
\r
@component\r
@example\r
// Базовое использование\r
<FMenuLinks>\r
  <a href="/home">Главная</a>\r
  <a href="/about">О нас</a>\r
</FMenuLinks>\r
\r
@example\r
// С пользовательским классом\r
<FMenuLinks className="custom-menu">\r
  <a href="/contact">Контакты</a>\r
</FMenuLinks>\r
\r
@example\r
// С инлайновыми стилями\r
<FMenuLinks style={{ margin: '1rem 0' }}>\r
  <a href="/profile">Профиль</a>\r
</FMenuLinks>\r
\r
@param {React.ReactNode} children - Элементы (обычно ссылки), к которым будет применён класс \`link\`.\r
@param {string} [className] - Пользовательский CSS-класс для внешнего контейнера.\r
@param {React.CSSProperties} [.style] - Инлайновые стили.\r
@param {string} [id] - ID элемента.\r
\r
@returns {JSX.Element} — Рендерит \`<div class="page-links">\` с обёрнутыми дочерними элементами.`,methods:[],displayName:"FMenuLinks",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Дочерние элементы, обычно это `<a>` или `<Link>`.\r\nКаждому дочернему элементу будет добавлен класс `link`.\r\n@type {React.ReactNode}"},className:{required:!1,tsType:{name:"string"},description:`Дополнительный CSS-класс для стилизации контейнера.\r
@type {string | undefined}`},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Инлайновые стили для контейнера.\r
@type {React.CSSProperties | undefined}`},id:{required:!1,tsType:{name:"string"},description:`Уникальный идентификатор элемента.\r
@type {string | undefined}`},disabled:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:`Массив индексов ссылок, которые должны быть отключены.\r
@type {number[] | undefined}`,defaultValue:{value:"[]",computed:!1}}}};export{y as F};
