import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import{e as V}from"./index-DY-snNUy.js";import{w,u as G}from"./index-CUyYkyAM.js";import"./index-yBjzXJbu.js";const t=V.forwardRef(({color:s="primary",size:c=30,st:n,id:k,className:F,handleClick:l,["data-testid"]:C,...h},I)=>i.jsxs("svg",{ref:I,width:c,viewBox:"0 0 24 24",className:`f-icon ${l?" clicking-icon":""} ${s} ${F||""}`,id:k,onClick:l,style:n,"data-testid":C,...h,children:[i.jsx("path",{fill:"none",d:"M0 0h24v24H0z"}),i.jsx("path",{fillRule:"nonzero",d:"M14 14v6l-4 2v-8L4 5V3h16v2l-6 9zM6.404 5L12 13.394 17.596 5H6.404z"})]}));t.displayName="FFilterIcon";t.__docgenInfo={description:`Компонент FFilterIcon представляет собой SVG иконку фильтра с возможностью настройки цвета, размера и обработки кликов.

@function FFilterIcon
@param {IFFilterIcon} props - Пропсы компонента.
@param {('primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link')} [color='primary'] - Цвет иконки. По умолчанию 'primary'.
@param {number} [size=30] - Размер иконки в пикселях. По умолчанию 30.
@param {React.CSSProperties} [st] - Дополнительные стили для SVG элемента.
@param {string} [id] - Уникальный идентификатор для SVG элемента.
@param {string} [className] - Дополнительные CSS классы для SVG элемента.
@param {() => void} [handleClick] - Обработчик события клика по иконке.
@param {React.Ref<SVGSVGElement>} ref - Ref для SVG элемента.
@returns {JSX.Element} - Возвращает SVG элемент с заданными параметрами.

@example
<FFilterIcon
  color="dark"
  size={40}
  handleClick={() => console.log('Icon clicked!')}
/>`,methods:[],displayName:"FFilterIcon",props:{color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'link'"}]},description:`Цвет иконки. Определяет цветовую схему иконки.
@type {('primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link')}
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"number"},description:`Размер иконки.
@type {number}
@default 30`,defaultValue:{value:"30",computed:!1}},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Дополнительные стили для SVG элемента.
@type {React.CSSProperties}`},id:{required:!1,tsType:{name:"string"},description:`Уникальный идентификатор для SVG элемента.
@type {string | undefined}`},className:{required:!1,tsType:{name:"string"},description:`Дополнительные CSS классы для SVG элемента.
@type {string | undefined}`},handleClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Обработчик события клика по иконке.
@type {(() => void) | undefined}`},"data-testid":{required:!1,tsType:{name:"string"},description:"Data-testid для тестирования (опционально)"}}};const T={title:"Icons/FFilterIcon",tags:["autodocs"],component:t,argTypes:{color:{control:"select",options:["primary","secondary","success","danger","warning","info","light","dark","link"],description:"Цвет иконки. Определяет цветовую схему иконки"},size:{control:"number",description:"Размер иконки"},st:{control:"object",description:"Дополнительные стили для SVG элемента"},id:{control:"text",description:"Уникальный идентификатор для SVG элемента"},className:{control:"text",description:"Дополнительные CSS классы для SVG элемента"},handleClick:{action:"clicked",description:"Обработчик события клика по иконке"}},parameters:{docs:{description:{component:"Иконка фильтра. Используйте для обозначения фильтрации или настройки отображения данных."}}}},o=s=>i.jsx(t,{...s}),r=o.bind({});r.args={handleClick:void 0};r.parameters={docs:{description:{story:"Базовая иконка без дополнительных свойств."}}};const e=o.bind({});e.args={handleClick:()=>alert("Иконка нажата!"),"data-testid":"icon-svg"};e.parameters={docs:{description:{story:"Иконка с обработчиком клика."}}};e.play=async({canvasElement:s})=>{const n=await w(s).findByTestId("icon-svg");await G.click(n)};const a=o.bind({});a.args={color:"info",size:40,handleClick:void 0};a.parameters={docs:{description:{story:"Иконка с кастомным цветом и размером."}}};var d,p,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:"args => <FFilterIcon {...args} />",...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,g,f;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:"args => <FFilterIcon {...args} />",...(f=(g=e.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,S,v;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:"args => <FFilterIcon {...args} />",...(v=(S=a.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};const j=["Default","Clickable","CustomColorAndSize"];export{e as Clickable,a as CustomColorAndSize,r as Default,j as __namedExportsOrder,T as default};
