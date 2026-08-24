import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as x,e as c}from"./index-B3j06Xw8.js";const S="_reportsPageContainer_14i30_3",N="_searchBar_14i30_11",F="_reportsGrid_14i30_48",j="_card_14i30_57",M="_cardHeader_14i30_97",T="_countBadge_14i30_114",B="_linksList_14i30_124",v="_linkItem_14i30_131",q="_badge_14i30_172",R="_disabled_14i30_197",s={reportsPageContainer:S,searchBar:N,reportsGrid:F,card:j,cardHeader:M,countBadge:T,linksList:B,linkItem:v,badge:q,disabled:R},y=x.createContext(""),w=({children:n,className:g,st:f,id:k,columns:l,withSearch:p=!1})=>{const[t,u]=x.useState(""),a={...l?{"--cols":l}:{},...f};return r.jsxs("div",{className:`${s.reportsPageContainer} ${g??""}`.trim(),id:k,children:[p&&r.jsx("div",{className:s.searchBar,children:r.jsx("input",{type:"text",placeholder:"Быстрый поиск отчета",value:t,onChange:i=>u(i.target.value)})}),r.jsx(y.Provider,{value:t,children:r.jsx("div",{className:s.reportsGrid,style:a,children:n})})]})};w.__docgenInfo={description:`Компонент-карточка для группировки ссылок меню.\r
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
@returns {JSX.Element}`,methods:[],displayName:"FMenuBlockLinks",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Содержимое блока. Компонент `<FMenuLinks>` с набором ссылок."},className:{required:!1,tsType:{name:"string"},description:"Дополнительный CSS-класс для контейнера карточки."},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Инлайновые стили для контейнера карточки."},id:{required:!1,tsType:{name:"string"},description:"Уникальный идентификатор элемента."},columns:{required:!1,tsType:{name:"number"},description:"Количество столбцов в контейнере Grid."},withSearch:{required:!1,tsType:{name:"boolean"},description:"Включает функционал стеклянной поисковой строки.",defaultValue:{value:"false",computed:!1}}}};const _=n=>typeof n=="string"||typeof n=="number"?String(n):Array.isArray(n)?n.map(_).join(""):c.isValidElement(n)&&n.props?_(n.props.children):"",I=({children:n,className:g,st:f,id:k,disabled:l=[],badges:p=[],title:t})=>{const u=x.useContext(y),a=c.Children.toArray(n),i=a.filter(e=>{if(!u)return!0;const o=_(e).toLowerCase(),m=a.indexOf(e),d=p[m]||(c.isValidElement(e)?e.props["data-badge"]:"");return(d?`${d} ${o}`.toLowerCase():o).includes(u.toLowerCase())});if(i.length===0)return null;const L=i.map(e=>{if(!c.isValidElement(e))return e;const o=a.indexOf(e),m=l.includes(o),d=p[o]||e.props["data-badge"],h=[e.props.className,s.linkItem,m?s.disabled:""].filter(Boolean).join(" "),b=d?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:s.badge,children:d}),e.props.children]}):e.props.children;return c.cloneElement(e,{className:h,children:b,...m&&{onClick:C=>C.preventDefault(),tabIndex:-1,"aria-disabled":!0}})});return r.jsxs("div",{className:`${s.card} ${g??""}`.trim(),style:f,id:k,children:[t&&r.jsxs("div",{className:s.cardHeader,children:[r.jsx("h3",{children:t}),r.jsx("span",{className:s.countBadge,children:i.length})]}),r.jsx("div",{className:s.linksList,children:L})]})};I.__docgenInfo={description:`Компонент FMenuLinks — единый стилизованный список ссылок меню в виде карточки.\r
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
@example disabled={[0, 2]} // отключит первую и третью ссылку`,defaultValue:{value:"[]",computed:!1}},badges:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | undefined)[]"},description:'Массив бейджей (кодов) для пунктов меню. Индекс соответствует дочернему элементу.\r\nАльтернативно, можно передать проп `data-badge="A"` самому дочернему элементу.\r\n@example badges={["А", "П1", undefined, "Д1"]}',defaultValue:{value:"[]",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"Заголовок блока (отображается над списком ссылок)"}}};export{I as F,w as a};
