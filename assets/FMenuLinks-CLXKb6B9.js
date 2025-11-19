import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{e as d}from"./index-DY-snNUy.js";const _="_disabled_w47ps_49",e={"sections-routes":"_sections-routes_w47ps_2","sections-routes_card":"_sections-routes_card_w47ps_9","sections-routes_card__title":"_sections-routes_card__title_w47ps_25","sections-routes_card__links":"_sections-routes_card__links_w47ps_31",disabled:_},L=({children:a,className:o,st:n,id:c,columns:s=3})=>{const i=n!==void 0?{...n,columns:s}:{columns:s};return r.jsx("div",{className:`${e["sections-routes"]} ${o??""}`.trim(),style:i,id:c,children:a})};L.__docgenInfo={description:`Компонент-карточка для группировки ссылок меню.
Используется вместе с \`FMenuLinks\` для создания блоков вида:

\`\`\`
┌─────────────────────┐
│     Заголовок       │
├─────────────────────┤
│ Ссылка 1            │
│ Ссылка 2            │
└─────────────────────┘
\`\`\`

@component
@example
<FMenuBlockLinks columns={3}>
  <FMenuLinks>
    <Link to="/card">Карточка учета</Link>
    <Link to="/report">Отчет</Link>
  </FMenuLinks>
</FMenuBlockLinks>

@param {IFMenuBlockLinksProps} props
@returns {JSX.Element}`,methods:[],displayName:"FMenuBlockLinks",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Содержимое блока. Компонент `<FMenuLinks>` с набором ссылок."},className:{required:!1,tsType:{name:"string"},description:"Дополнительный CSS-класс для контейнера карточки."},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Инлайновые стили для контейнера карточки."},id:{required:!1,tsType:{name:"string"},description:"Уникальный идентификатор элемента."},columns:{required:!1,tsType:{name:"number"},description:"Количество столбцов в контейнере Grid.",defaultValue:{value:"3",computed:!1}}}};const f=({children:a,className:o,st:n,id:c,disabled:s=[],title:i})=>{const u=d.Children.map(a,(t,p)=>{if(!d.isValidElement(t))return t;const l=s.includes(p),m=[t.props.className,e.link,l&&e.disabled].filter(Boolean).join(" ");return d.cloneElement(t,{className:m,...l&&{onClick:k=>k.preventDefault()}})});return r.jsxs("div",{className:`${e["sections-routes_card"]} ${o??""}`.trim(),style:n,id:c,children:[i&&r.jsx("div",{className:e["sections-routes_card__title"],children:i}),r.jsx("div",{className:e["sections-routes_card__links"],children:u})]})};f.__docgenInfo={description:`Компонент FMenuLinks — единый стилизованный список ссылок меню.
Автоматически добавляет класс \`link\` ко всем дочерним элементам,
поддерживает отключение отдельных пунктов и опциональный заголовок.

Используется внутри \`FMenuBlockLinks\` или самостоятельно.

@component
@example
<FMenuLinks title="Документы">
  <Link to="/cards">Карточка учета</Link>
  <Link to="/reports">Сводная ведомость</Link>
</FMenuLinks>

@example
// Отключение второй ссылки
<FMenuLinks disabled={[1]}>
  <Link to="/profile">Профиль</Link>
  <Link to="/settings">Настройки</Link>
</FMenuLinks>`,methods:[],displayName:"FMenuLinks",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Дочерние элементы (обычно <a>, <Link> или <button>). К каждому будет добавлен класс `link`."},className:{required:!1,tsType:{name:"string"},description:"Дополнительный класс для внешнего контейнера"},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Инлайновые стили для внешнего контейнера"},id:{required:!1,tsType:{name:"string"},description:"ID элемента"},disabled:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"Индексы дочерних элементов (начиная с 0), которые нужно отключить",defaultValue:{value:"[]",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"Заголовок блока (отображается над списком ссылок)"}}};export{f as F,L as a};
