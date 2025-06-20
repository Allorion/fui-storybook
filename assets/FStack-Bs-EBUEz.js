import{j as m}from"./jsx-runtime-Cf8x2fCZ.js";const d=({children:a,alignItems:t,justifyContent:r,direction:l="column",wrap:i,spacing:s=0,className:p,st:n,id:c})=>{let e={gap:`${+s*8}px`,display:"flex",flexDirection:l,justifyContent:r,alignItems:t,flexWrap:i};return n!==void 0&&(e=Object.assign(e,n)),m.jsx("div",{className:p,style:e,id:c,children:a})};d.__docgenInfo={description:`Компонент \`FStack\` — гибкий контейнер с возможностью управления расположением дочерних элементов.

Основан на Flexbox. Позволяет:
- задавать направление (\`direction\`)
- управлять отступами (\`spacing\`)
- выравнивать элементы (\`alignItems\`, \`justifyContent\`)
- добавлять кастомные классы и стили

@component
@example
<FStack
  direction="row"
  spacing={2}
  alignItems="center"
  justifyContent="space-between"
>
  <div>Элемент 1</div>
  <div>Элемент 2</div>
</FStack>

@param {DirectionType} [direction='column'] - Направление дочерних элементов.
@param {AlignItemsType} [alignItems] - Выравнивание по перекрёстной оси.
@param {JustifyContentType} [justifyContent] - Выравнивание по главной оси.
@param {number} [spacing=0] - Отступ между элементами (умножается на 8px).
@param {React.ReactNode} [children] - Дочерние элементы.
@param {string} [className] - Пользовательский CSS-класс.
@param {React.CSSProperties} [st] - Инлайновые стили.
@param {string} [id] - ID элемента.
@param {WrapType} [wrap] - Перенос дочерних элементов на следующую строку.

@returns {JSX.Element} — Рендерит \`<div>\` с Flexbox-стилями и переданными свойствами.`,methods:[],displayName:"FStack",props:{direction:{required:!1,tsType:{name:"union",raw:"'row' | 'row-reverse' | 'column' | 'column-reverse'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'row-reverse'"},{name:"literal",value:"'column'"},{name:"literal",value:"'column-reverse'"}]},description:`Направление расположения дочерних элементов.
@type {DirectionType}
@default 'column'`,defaultValue:{value:"'column'",computed:!1}},alignItems:{required:!1,tsType:{name:"union",raw:'"flex-start" | "center" | "flex-end" | "stretch" | "baseline"',elements:[{name:"literal",value:'"flex-start"'},{name:"literal",value:'"center"'},{name:"literal",value:'"flex-end"'},{name:"literal",value:'"stretch"'},{name:"literal",value:'"baseline"'}]},description:`Выравнивание элементов по перекрёстной оси.
@type {AlignItemsType | undefined}`},justifyContent:{required:!1,tsType:{name:"union",raw:`| "flex-start"
| "center"
| "flex-end"
| "space-between"
| "space-around"
| "space-evenly"`,elements:[{name:"literal",value:'"flex-start"'},{name:"literal",value:'"center"'},{name:"literal",value:'"flex-end"'},{name:"literal",value:'"space-between"'},{name:"literal",value:'"space-around"'},{name:"literal",value:'"space-evenly"'}]},description:`Выравнивание элементов по главной оси.
@type {JustifyContentType | undefined}`},spacing:{required:!1,tsType:{name:"number"},description:`Расстояние между элементами (умножается на 8px).
@type {number | undefined}
@default 0`,defaultValue:{value:"0",computed:!1}},children:{required:!1,tsType:{name:"union",raw:"React.ReactElement | React.ReactNode",elements:[{name:"ReactReactElement",raw:"React.ReactElement"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:`Дочерние элементы, которые будут отрендерены внутри контейнера.
@type {React.ReactElement | React.ReactNode | undefined}`},className:{required:!1,tsType:{name:"string"},description:`Дополнительный CSS-класс для стилизации.
@type {string | undefined}`},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Дополнительные инлайновые стили.
@type {React.CSSProperties | undefined}`},id:{required:!1,tsType:{name:"string"},description:`Уникальный идентификатор элемента.
@type {string | undefined}`},wrap:{required:!1,tsType:{name:"union",raw:'"nowrap" | "wrap" | "wrap-reverse" | undefined',elements:[{name:"literal",value:'"nowrap"'},{name:"literal",value:'"wrap"'},{name:"literal",value:'"wrap-reverse"'},{name:"undefined"}]},description:`Флаг, указывающий, должен ли контейнер переносить дочерние элементы на новую строку.
@type {WrapType}`}}};export{d as F};
