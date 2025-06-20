import{j as u}from"./jsx-runtime-Cf8x2fCZ.js";import{e as a}from"./index-DY-snNUy.js";const k="_link_1desp_10",f="_disabled_1desp_36",n={"page-links":"_page-links_1desp_3",link:k,disabled:f},y=({children:i,className:t,st:r,id:l,disabled:d=[]})=>{const p=a.Children.map(i,(e,c)=>{if(a.isValidElement(e)){const s=d.includes(c),m=e.props.className?`${e.props.className} ${n.link} ${s?n.disabled:""}`:`${n.link} ${s?n.disabled:""}`;return a.cloneElement(e,{className:m,...s&&{onClick:o=>o.preventDefault()}})}return e});return u.jsx("div",{className:`${n["page-links"]} ${t||""}`,style:r,id:l,children:p})};y.__docgenInfo={description:`Компонент \`FMenuLinks\` оборачивает переданные дочерние элементы в общий контейнер
и добавляет каждому из них CSS-класс \`link\`, чтобы они соответствовали единой стилистике меню.

Используется как обёртка для создания вертикального меню с ссылками.

@component
@example
// Базовое использование
<FMenuLinks>
  <a href="/home">Главная</a>
  <a href="/about">О нас</a>
</FMenuLinks>

@example
// С пользовательским классом
<FMenuLinks className="custom-menu">
  <a href="/contact">Контакты</a>
</FMenuLinks>

@example
// С инлайновыми стилями
<FMenuLinks style={{ margin: '1rem 0' }}>
  <a href="/profile">Профиль</a>
</FMenuLinks>

@param {React.ReactNode} children - Элементы (обычно ссылки), к которым будет применён класс \`link\`.
@param {string} [className] - Пользовательский CSS-класс для внешнего контейнера.
@param {React.CSSProperties} [.style] - Инлайновые стили.
@param {string} [id] - ID элемента.

@returns {JSX.Element} — Рендерит \`<div class="page-links">\` с обёрнутыми дочерними элементами.`,methods:[],displayName:"FMenuLinks",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Дочерние элементы, обычно это `<a>` или `<Link>`.\nКаждому дочернему элементу будет добавлен класс `link`.\n@type {React.ReactNode}"},className:{required:!1,tsType:{name:"string"},description:`Дополнительный CSS-класс для стилизации контейнера.
@type {string | undefined}`},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Инлайновые стили для контейнера.
@type {React.CSSProperties | undefined}`},id:{required:!1,tsType:{name:"string"},description:`Уникальный идентификатор элемента.
@type {string | undefined}`},disabled:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:`Массив индексов ссылок, которые должны быть отключены.
@type {number[] | undefined}`,defaultValue:{value:"[]",computed:!1}}}};export{y as F};
