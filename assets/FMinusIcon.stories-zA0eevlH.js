import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{e as w}from"./index-DEgj3Fem.js";import{within as G,userEvent as M}from"./index-CH2Su9EI.js";const i=w.forwardRef(({color:s="primary",size:c=30,st:t,className:k,id:C,handleClick:l,["data-testid"]:h,...I},V)=>n.jsxs("svg",{ref:V,width:c,style:t,className:`f-icon ${l?" clicking-icon":""} ${s} ${k||""}`,viewBox:"0 0 16 16",onClick:l,id:C,"data-testid":h,...I,children:[n.jsx("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"}),n.jsx("path",{d:"M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"})]}));i.displayName="FMinusIcon";i.__docgenInfo={description:`Компонент FMinusIcon представляет собой SVG иконку минуса с возможностью настройки цвета, размера и обработки кликов.\r
\r
@function FMinusIcon\r
@param {IFMinusIcon} props - Пропсы компонента.\r
@param {('primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link')} [color='primary'] - Цвет иконки. По умолчанию 'primary'.\r
@param {number} [size=30] - Размер иконки в пикселях. По умолчанию 30.\r
@param {React.CSSProperties} [st] - Дополнительные стили для SVG элемента.\r
@param {string} [id] - Уникальный идентификатор для SVG элемента.\r
@param {string} [className] - Дополнительные CSS классы для SVG элемента.\r
@param {() => void} [handleClick] - Обработчик события клика по иконке.\r
@param {React.Ref<SVGSVGElement>} ref - Ref для SVG элемента.\r
@returns {JSX.Element} - Возвращает SVG элемент с заданными параметрами.\r
\r
@example\r
<FMinusIcon\r
  color="primary"\r
  size={40}\r
  handleClick={() => console.log('Icon clicked!')}\r
/>`,methods:[],displayName:"FMinusIcon",props:{color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'link'"}]},description:`Цвет иконки. Определяет цветовую схему иконки.\r
@type {('primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link')}\r
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"number"},description:`Размер иконки.\r
@type {number}\r
@default 30`,defaultValue:{value:"30",computed:!1}},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Дополнительные стили для SVG элемента.\r
@type {React.CSSProperties}`},id:{required:!1,tsType:{name:"string"},description:`Уникальный идентификатор для SVG элемента.\r
@type {string | undefined}`},className:{required:!1,tsType:{name:"string"},description:`Дополнительные CSS классы для SVG элемента.\r
@type {string | undefined}`},handleClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Обработчик события клика по иконке.\r
@type {(() => void) | undefined}`},"data-testid":{required:!1,tsType:{name:"string"},description:"Data-testid для тестирования (опционально)"}}};const T={title:"Icons/FMinusIcon",tags:["autodocs"],component:i,argTypes:{color:{control:"select",options:["primary","secondary","success","danger","warning","info","light","dark","link"],description:"Цвет иконки. Определяет цветовую схему иконки"},size:{control:"number",description:"Размер иконки"},st:{control:"object",description:"Дополнительные стили для SVG элемента"},id:{control:"text",description:"Уникальный идентификатор для SVG элемента"},className:{control:"text",description:"Дополнительные CSS классы для SVG элемента"},handleClick:{action:"clicked",description:"Обработчик события клика по иконке"}},parameters:{docs:{description:{component:"Иконка минуса. Используйте для обозначения удаления или уменьшения количества объектов."}}}},o=s=>n.jsx(i,{...s}),r=o.bind({});r.args={handleClick:void 0};r.parameters={docs:{description:{story:"Базовая иконка без дополнительных свойств."}}};const e=o.bind({});e.args={handleClick:()=>alert("Иконка нажата!"),"data-testid":"icon-svg"};e.parameters={docs:{description:{story:"Иконка с обработчиком клика."}}};e.play=async({canvasElement:s})=>{const t=await G(s).findByTestId("icon-svg");await M.click(t)};const a=o.bind({});a.args={color:"warning",size:40,handleClick:void 0};a.parameters={docs:{description:{story:"Иконка с кастомным цветом и размером."}}};var d,p,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:"args => <FMinusIcon {...args} />",...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,g,y;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:"args => <FMinusIcon {...args} />",...(y=(g=e.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var f,S,v;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:"args => <FMinusIcon {...args} />",...(v=(S=a.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};const R=["Default","Clickable","CustomColorAndSize"];export{e as Clickable,a as CustomColorAndSize,r as Default,R as __namedExportsOrder,T as default};
