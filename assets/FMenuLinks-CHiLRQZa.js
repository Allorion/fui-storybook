import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{e as d}from"./index-DEgj3Fem.js";const _="_disabled_w47ps_49",e={"sections-routes":"_sections-routes_w47ps_2","sections-routes_card":"_sections-routes_card_w47ps_9","sections-routes_card__title":"_sections-routes_card__title_w47ps_25","sections-routes_card__links":"_sections-routes_card__links_w47ps_31",disabled:_},L=({children:a,className:o,st:n,id:c,columns:s=3})=>{const r=n!==void 0?{...n,columns:s}:{columns:s};return t.jsx("div",{className:`${e["sections-routes"]} ${o??""}`.trim(),style:r,id:c,children:a})};L.__docgenInfo={description:`Компонент-карточка для группировки ссылок меню.\r
Используется вместе с \`FMenuLinks\` для создания блоков вида:\r
\r
\`\`\`\r
┌─────────────────────┐\r
│     Заголовок       │\r
├─────────────────────┤\r
│ Ссылка 1            │\r
│ Ссылка 2            │\r
└─────────────────────┘\r
\`\`\`\r
\r
@component\r
@example\r
<FMenuBlockLinks columns={3}>\r
  <FMenuLinks>\r
    <Link to="/card">Карточка учета</Link>\r
    <Link to="/report">Отчет</Link>\r
  </FMenuLinks>\r
</FMenuBlockLinks>\r
\r
@param {IFMenuBlockLinksProps} props\r
@returns {JSX.Element}`,methods:[],displayName:"FMenuBlockLinks",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Содержимое блока. Компонент `<FMenuLinks>` с набором ссылок."},className:{required:!1,tsType:{name:"string"},description:"Дополнительный CSS-класс для контейнера карточки."},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Инлайновые стили для контейнера карточки."},id:{required:!1,tsType:{name:"string"},description:"Уникальный идентификатор элемента."},columns:{required:!1,tsType:{name:"number"},description:"Количество столбцов в контейнере Grid.",defaultValue:{value:"3",computed:!1}}}};const f=({children:a,className:o,st:n,id:c,disabled:s=[],title:r})=>{const u=d.Children.map(a,(i,p)=>{if(!d.isValidElement(i))return i;const l=s.includes(p),m=[i.props.className,e.link,l&&e.disabled].filter(Boolean).join(" ");return d.cloneElement(i,{className:m,...l&&{onClick:k=>k.preventDefault()}})});return t.jsxs("div",{className:`${e["sections-routes_card"]} ${o??""}`.trim(),style:n,id:c,children:[r&&t.jsx("div",{className:e["sections-routes_card__title"],children:r}),t.jsx("div",{className:e["sections-routes_card__links"],children:u})]})};f.__docgenInfo={description:`Компонент FMenuLinks — единый стилизованный список ссылок меню.\r
Автоматически добавляет класс \`link\` ко всем дочерним элементам,\r
поддерживает отключение отдельных пунктов и опциональный заголовок.\r
\r
Используется внутри \`FMenuBlockLinks\` или самостоятельно.\r
\r
@component\r
@example\r
<FMenuLinks title="Документы">\r
  <Link to="/cards">Карточка учета</Link>\r
  <Link to="/reports">Сводная ведомость</Link>\r
</FMenuLinks>\r
\r
@example\r
// Отключение второй ссылки\r
<FMenuLinks disabled={[1]}>\r
  <Link to="/profile">Профиль</Link>\r
  <Link to="/settings">Настройки</Link>\r
</FMenuLinks>`,methods:[],displayName:"FMenuLinks",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Дочерние элементы (обычно <a>, <Link> или <button>). К каждому будет добавлен класс `link`."},className:{required:!1,tsType:{name:"string"},description:"Дополнительный класс для внешнего контейнера"},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Инлайновые стили для внешнего контейнера"},id:{required:!1,tsType:{name:"string"},description:"ID элемента"},disabled:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"Индексы дочерних элементов (начиная с 0), которые нужно отключить",defaultValue:{value:"[]",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"Заголовок блока (отображается над списком ссылок)"}}};export{f as F,L as a};
