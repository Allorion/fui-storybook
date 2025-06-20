import{j as c}from"./jsx-runtime-Cf8x2fCZ.js";const e={"f-container":"_f-container_g9ck3_1","container-fluid":"_container-fluid_g9ck3_1","container-xxl":"_container-xxl_g9ck3_1","container-xl":"_container-xl_g9ck3_1","container-lg":"_container-lg_g9ck3_1","container-md":"_container-md_g9ck3_1","container-sm":"_container-sm_g9ck3_1","container-xs":"_container-xs_g9ck3_1"},o=({children:n,className:a,st:t,id:i,maxWidth:r="container-xs"})=>c.jsx("div",{className:`${e["f-container"]} ${e[r]} ${a||""}`,style:t,id:i,children:n});o.__docgenInfo={description:`Компонент \`FContainer\` — универсальный контейнер с разными размерами (\`maxWidth\`) и поддержкой пользовательских классов и стилей.

Используется для ограничения ширины макета в зависимости от устройства:
- \`container-xs\`: 576px
- \`container-sm\`: 768px
- \`container-md\`: 992px
- \`container-lg\`: 1200px
- \`container-xl\`: 1400px
- \`container-xxl\`: 1600px
- \`container-fluid\`: 100%

@component
@example
<FContainer maxWidth="container-md" className="my-container" st={{ padding: '2rem' }}>
  <div>Контент</div>
</FContainer>

@param {ContainerSizeType} [maxWidth='container-xs'] - Размер контейнера.
@param {React.ReactNode} [children] - Содержимое контейнера.
@param {string} [className] - Дополнительный CSS-класс.
@param {React.CSSProperties} [st] - Инлайновые стили.
@param {string} [id] - ID элемента.

@returns {JSX.Element} - Рендерит \`<div>\` с заданным классом и стилями.`,methods:[],displayName:"FContainer",props:{maxWidth:{required:!1,tsType:{name:"union",raw:"'container-xs' | 'container-sm' | 'container-md' | 'container-lg' | 'container-xl' | 'container-xxl' | 'container-fluid'",elements:[{name:"literal",value:"'container-xs'"},{name:"literal",value:"'container-sm'"},{name:"literal",value:"'container-md'"},{name:"literal",value:"'container-lg'"},{name:"literal",value:"'container-xl'"},{name:"literal",value:"'container-xxl'"},{name:"literal",value:"'container-fluid'"}]},description:`Размер контейнера — влияет на максимальную ширину.
@type {ContainerSizeType}
@default 'container-xs'`,defaultValue:{value:"'container-xs'",computed:!1}},children:{required:!1,tsType:{name:"union",raw:"React.ReactElement | React.ReactNode",elements:[{name:"ReactReactElement",raw:"React.ReactElement"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:`Дочерние элементы, отображаемые внутри контейнера.
@type {React.ReactNode}`},className:{required:!1,tsType:{name:"string"},description:`Дополнительный CSS-класс для стилизации.
@type {string}`},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Инлайновые стили для контейнера.
@type {React.CSSProperties}`},id:{required:!1,tsType:{name:"string"},description:`Уникальный идентификатор элемента.
@type {string}`}}};export{o as F};
