import{j as c}from"./jsx-runtime-D_zvdyIk.js";const e={"f-container":"_f-container_g9ck3_1","container-fluid":"_container-fluid_g9ck3_1","container-xxl":"_container-xxl_g9ck3_1","container-xl":"_container-xl_g9ck3_1","container-lg":"_container-lg_g9ck3_1","container-md":"_container-md_g9ck3_1","container-sm":"_container-sm_g9ck3_1","container-xs":"_container-xs_g9ck3_1"},o=({children:n,className:a,st:r,id:t,maxWidth:i="container-xs"})=>c.jsx("div",{className:`${e["f-container"]} ${e[i]} ${a||""}`,style:r,id:t,children:n});o.__docgenInfo={description:`Компонент \`FContainer\` — универсальный контейнер с разными размерами (\`maxWidth\`) и поддержкой пользовательских классов и стилей.\r
\r
Используется для ограничения ширины макета в зависимости от устройства:\r
- \`container-xs\`: 576px\r
- \`container-sm\`: 768px\r
- \`container-md\`: 992px\r
- \`container-lg\`: 1200px\r
- \`container-xl\`: 1400px\r
- \`container-xxl\`: 1600px\r
- \`container-fluid\`: 100%\r
\r
@component\r
@example\r
<FContainer maxWidth="container-md" className="my-container" st={{ padding: '2rem' }}>\r
  <div>Контент</div>\r
</FContainer>\r
\r
@param {ContainerSizeType} [maxWidth='container-xs'] - Размер контейнера.\r
@param {React.ReactNode} [children] - Содержимое контейнера.\r
@param {string} [className] - Дополнительный CSS-класс.\r
@param {React.CSSProperties} [st] - Инлайновые стили.\r
@param {string} [id] - ID элемента.\r
\r
@returns {JSX.Element} - Рендерит \`<div>\` с заданным классом и стилями.`,methods:[],displayName:"FContainer",props:{maxWidth:{required:!1,tsType:{name:"union",raw:"'container-xs' | 'container-sm' | 'container-md' | 'container-lg' | 'container-xl' | 'container-xxl' | 'container-fluid'",elements:[{name:"literal",value:"'container-xs'"},{name:"literal",value:"'container-sm'"},{name:"literal",value:"'container-md'"},{name:"literal",value:"'container-lg'"},{name:"literal",value:"'container-xl'"},{name:"literal",value:"'container-xxl'"},{name:"literal",value:"'container-fluid'"}]},description:`Размер контейнера — влияет на максимальную ширину.\r
@type {ContainerSizeType}\r
@default 'container-xs'`,defaultValue:{value:"'container-xs'",computed:!1}},children:{required:!1,tsType:{name:"union",raw:"React.ReactElement | React.ReactNode",elements:[{name:"ReactReactElement",raw:"React.ReactElement"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:`Дочерние элементы, отображаемые внутри контейнера.\r
@type {React.ReactNode}`},className:{required:!1,tsType:{name:"string"},description:`Дополнительный CSS-класс для стилизации.\r
@type {string}`},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Инлайновые стили для контейнера.\r
@type {React.CSSProperties}`},id:{required:!1,tsType:{name:"string"},description:`Уникальный идентификатор элемента.\r
@type {string}`}}};export{o as F};
