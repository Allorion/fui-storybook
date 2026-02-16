import{j as m}from"./jsx-runtime-D_zvdyIk.js";const d=({children:r,alignItems:a,justifyContent:t,direction:l="column",wrap:i,spacing:s=0,className:p,st:n,id:c})=>{let e={gap:`${+s*8}px`,display:"flex",flexDirection:l,justifyContent:t,alignItems:a,flexWrap:i};return n!==void 0&&(e=Object.assign(e,n)),m.jsx("div",{className:p,style:e,id:c,children:r})};d.__docgenInfo={description:`Компонент \`FStack\` — гибкий контейнер с возможностью управления расположением дочерних элементов.\r
\r
Основан на Flexbox. Позволяет:\r
- задавать направление (\`direction\`)\r
- управлять отступами (\`spacing\`)\r
- выравнивать элементы (\`alignItems\`, \`justifyContent\`)\r
- добавлять кастомные классы и стили\r
\r
@component\r
@example\r
<FStack\r
  direction="row"\r
  spacing={2}\r
  alignItems="center"\r
  justifyContent="space-between"\r
>\r
  <div>Элемент 1</div>\r
  <div>Элемент 2</div>\r
</FStack>\r
\r
@param {DirectionType} [direction='column'] - Направление дочерних элементов.\r
@param {AlignItemsType} [alignItems] - Выравнивание по перекрёстной оси.\r
@param {JustifyContentType} [justifyContent] - Выравнивание по главной оси.\r
@param {number} [spacing=0] - Отступ между элементами (умножается на 8px).\r
@param {React.ReactNode} [children] - Дочерние элементы.\r
@param {string} [className] - Пользовательский CSS-класс.\r
@param {React.CSSProperties} [st] - Инлайновые стили.\r
@param {string} [id] - ID элемента.\r
@param {WrapType} [wrap] - Перенос дочерних элементов на следующую строку.\r
\r
@returns {JSX.Element} — Рендерит \`<div>\` с Flexbox-стилями и переданными свойствами.`,methods:[],displayName:"FStack",props:{direction:{required:!1,tsType:{name:"union",raw:"'row' | 'row-reverse' | 'column' | 'column-reverse'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'row-reverse'"},{name:"literal",value:"'column'"},{name:"literal",value:"'column-reverse'"}]},description:`Направление расположения дочерних элементов.\r
@type {DirectionType}\r
@default 'column'`,defaultValue:{value:"'column'",computed:!1}},alignItems:{required:!1,tsType:{name:"union",raw:'"flex-start" | "center" | "flex-end" | "stretch" | "baseline"',elements:[{name:"literal",value:'"flex-start"'},{name:"literal",value:'"center"'},{name:"literal",value:'"flex-end"'},{name:"literal",value:'"stretch"'},{name:"literal",value:'"baseline"'}]},description:`Выравнивание элементов по перекрёстной оси.\r
@type {AlignItemsType | undefined}`},justifyContent:{required:!1,tsType:{name:"union",raw:`| "flex-start"\r
| "center"\r
| "flex-end"\r
| "space-between"\r
| "space-around"\r
| "space-evenly"`,elements:[{name:"literal",value:'"flex-start"'},{name:"literal",value:'"center"'},{name:"literal",value:'"flex-end"'},{name:"literal",value:'"space-between"'},{name:"literal",value:'"space-around"'},{name:"literal",value:'"space-evenly"'}]},description:`Выравнивание элементов по главной оси.\r
@type {JustifyContentType | undefined}`},spacing:{required:!1,tsType:{name:"number"},description:`Расстояние между элементами (умножается на 8px).\r
@type {number | undefined}\r
@default 0`,defaultValue:{value:"0",computed:!1}},children:{required:!1,tsType:{name:"union",raw:"React.ReactElement | React.ReactNode",elements:[{name:"ReactReactElement",raw:"React.ReactElement"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:`Дочерние элементы, которые будут отрендерены внутри контейнера.\r
@type {React.ReactElement | React.ReactNode | undefined}`},className:{required:!1,tsType:{name:"string"},description:`Дополнительный CSS-класс для стилизации.\r
@type {string | undefined}`},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Дополнительные инлайновые стили.\r
@type {React.CSSProperties | undefined}`},id:{required:!1,tsType:{name:"string"},description:`Уникальный идентификатор элемента.\r
@type {string | undefined}`},wrap:{required:!1,tsType:{name:"union",raw:'"nowrap" | "wrap" | "wrap-reverse" | undefined',elements:[{name:"literal",value:'"nowrap"'},{name:"literal",value:'"wrap"'},{name:"literal",value:'"wrap-reverse"'},{name:"undefined"}]},description:`Флаг, указывающий, должен ли контейнер переносить дочерние элементы на новую строку.\r
@type {WrapType}`}}};export{d as F};
