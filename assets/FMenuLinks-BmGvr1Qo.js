import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{e as o}from"./index-DY-snNUy.js";const _="_disabled_w47ps_49",e={"sections-routes":"_sections-routes_w47ps_2","sections-routes_card":"_sections-routes_card_w47ps_9","sections-routes_card__title":"_sections-routes_card__title_w47ps_25","sections-routes_card__links":"_sections-routes_card__links_w47ps_31",disabled:_},L=({children:i,className:t,st:r,id:a})=>s.jsx("div",{className:`${e["sections-routes"]} ${t??""}`.trim(),style:r,id:a,children:i});L.__docgenInfo={description:`Компонент-карточка для группировки ссылок меню.
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
<FMenuBlockLinks>
  <FMenuLinks>
    <Link to="/card">Карточка учета</Link>
    <Link to="/report">Отчет</Link>
  </FMenuLinks>
</FMenuBlockLinks>

@param {IFMenuBlockLinksProps} props
@returns {JSX.Element}`,methods:[],displayName:"FMenuBlockLinks",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Содержимое блока. Компонент `<FMenuLinks>` с набором ссылок."},className:{required:!1,tsType:{name:"string"},description:"Дополнительный CSS-класс для контейнера карточки."},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Инлайновые стили для контейнера карточки."},id:{required:!1,tsType:{name:"string"},description:"Уникальный идентификатор элемента."}}};const f=({children:i,className:t,st:r,id:a,disabled:l=[],title:c})=>{const p=o.Children.map(i,(n,u)=>{if(!o.isValidElement(n))return n;const d=l.includes(u),m=[n.props.className,e.link,d&&e.disabled].filter(Boolean).join(" ");return o.cloneElement(n,{className:m,...d&&{onClick:k=>k.preventDefault()}})});return s.jsxs("div",{className:`${e["sections-routes_card"]} ${t??""}`.trim(),style:r,id:a,children:[c&&s.jsx("div",{className:e["sections-routes_card__title"],children:c}),s.jsx("div",{className:e["sections-routes_card__links"],children:p})]})};f.__docgenInfo={description:`Компонент FMenuLinks — единый стилизованный список ссылок меню.
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
