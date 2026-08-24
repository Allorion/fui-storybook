import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as g,e as c}from"./index-B3j06Xw8.js";const C="_reportsPageContainer_14i30_3",F="_searchBar_14i30_11",N="_reportsGrid_14i30_48",S="_card_14i30_57",T="_cardHeader_14i30_97",B="_countBadge_14i30_114",M="_linksList_14i30_124",j="_linkItem_14i30_131",q="_badge_14i30_172",v="_disabled_14i30_197",s={reportsPageContainer:C,searchBar:F,reportsGrid:N,card:S,cardHeader:T,countBadge:B,linksList:M,linkItem:j,badge:q,disabled:v},R=({children:r,className:k,st:_,id:h,columns:p,withSearch:u=!1})=>{const[t,m]=g.useState(""),i={...p?{"--cols":p}:{},..._},o=g.Children.map(r,a=>g.isValidElement(a)?g.cloneElement(a,{searchTerm:t}):a);return n.jsxs("div",{className:`${s.reportsPageContainer} ${k??""}`.trim(),id:h,children:[u&&n.jsx("div",{className:s.searchBar,children:n.jsx("input",{type:"text",placeholder:"Быстрый поиск отчета",value:t,onChange:a=>m(a.target.value)})}),n.jsx("div",{className:s.reportsGrid,style:i,children:o})]})};R.__docgenInfo={description:`Компонент-карточка для группировки ссылок меню.\r
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
@returns {JSX.Element}`,methods:[],displayName:"FMenuBlockLinks",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Содержимое блока. Компонент `<FMenuLinks>` с набором ссылок."},className:{required:!1,tsType:{name:"string"},description:"Дополнительный CSS-класс для контейнера карточки."},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Инлайновые стили для контейнера карточки."},id:{required:!1,tsType:{name:"string"},description:"Уникальный идентификатор элемента."},columns:{required:!1,tsType:{name:"number"},description:"Количество столбцов в контейнере Grid."},withSearch:{required:!1,tsType:{name:"boolean"},description:"Включает функционал стеклянной поисковой строки.",defaultValue:{value:"false",computed:!1}}}};const y=r=>typeof r=="string"||typeof r=="number"?String(r):Array.isArray(r)?r.map(y).join(""):c.isValidElement(r)&&r.props?y(r.props.children):"",w=({children:r,className:k,st:_,id:h,disabled:p=[],badges:u=[],title:t,searchTerm:m=""})=>{const i=c.Children.toArray(r),o=i.filter(e=>{if(!m)return!0;const d=y(e).toLowerCase(),f=i.indexOf(e),l=u[f]||(c.isValidElement(e)?e.props["data-badge"]:"");return(l?`${l} ${d}`.toLowerCase():d).includes(m.toLowerCase())});if(o.length===0)return null;const a=o.map(e=>{if(!c.isValidElement(e))return e;const d=i.indexOf(e),f=p.includes(d),l=u[d]||e.props["data-badge"],L=[e.props.className,s.linkItem,f?s.disabled:""].filter(Boolean).join(" "),x=l?n.jsxs(n.Fragment,{children:[n.jsx("span",{className:s.badge,children:l}),e.props.children]}):e.props.children;return c.cloneElement(e,{className:L,children:x,...f&&{onClick:b=>b.preventDefault(),tabIndex:-1,"aria-disabled":!0}})});return n.jsxs("div",{className:`${s.card} ${k??""}`.trim(),style:_,id:h,children:[t&&n.jsxs("div",{className:s.cardHeader,children:[n.jsx("h3",{children:t}),n.jsx("span",{className:s.countBadge,children:o.length})]}),n.jsx("div",{className:s.linksList,children:a})]})};w.__docgenInfo={description:`Компонент FMenuLinks — единый стилизованный список ссылок меню в виде карточки.\r
\r
Автоматически добавляет классы ко всем дочерним элементам,\r
поддерживает отключение отдельных пунктов, добавление бейджей (кодов) \r
и фильтрацию через встроенный поиск.\r
\r
Используется внутри \`FMenuBlockLinks\` или самостоятельно.\r
\r
@component\r
@example\r
<FMenuLinks title="Регламентные отчеты" badges={["А"]}>\r
  <Link to="/reports/a">Общие показатели использования воды</Link>\r
</FMenuLinks>`,methods:[],displayName:"FMenuLinks",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Дочерние элементы (обычно `<a>`, `<Link>` или `<button>`). \r\nК каждому будет добавлен класс стилизации."},className:{required:!1,tsType:{name:"string"},description:"Дополнительный класс для внешнего контейнера карточки"},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Инлайновые стили для внешнего контейнера карточки"},id:{required:!1,tsType:{name:"string"},description:"Уникальный ID элемента контейнера"},disabled:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:`Массив индексов (начиная с 0) дочерних элементов, которые нужно отключить.\r
@example disabled={[0, 2]} // отключит первую и третью ссылку`,defaultValue:{value:"[]",computed:!1}},badges:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | undefined)[]"},description:'Массив бейджей (кодов) для пунктов меню. Индекс соответствует дочернему элементу.\r\nАльтернативно, можно передать проп `data-badge="A"` самому дочернему элементу.\r\n@example badges={["А", "П1", undefined, "Д1"]}',defaultValue:{value:"[]",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"Заголовок блока (отображается над списком ссылок)"},searchTerm:{required:!1,tsType:{name:"string"},description:"Строка поиска. Передается автоматически компонентом-оберткой `FMenuBlockLinks`.\r\nФильтрует ссылки по их текстовому содержимому и коду бейджа.",defaultValue:{value:'""',computed:!1}}}};export{w as F,R as a};
