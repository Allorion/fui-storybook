import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import{w as I,u as P}from"./index-CUyYkyAM.js";import"./index-yBjzXJbu.js";const t=({color:s="primary",size:c=30,st:n,className:k,id:h,handleClick:l,["data-testid"]:C})=>i.jsx("svg",{onClick:l,className:`f-icon ${l?" clicking-icon":""} ${s} ${k||""}`,id:h,width:c,style:n,focusable:"false","aria-hidden":"true",viewBox:"0 0 24 24","data-testid":C,children:i.jsx("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"})});t.__docgenInfo={description:`Компонент FPlusIcon представляет собой SVG иконку плюса с возможностью настройки цвета, размера и обработки кликов.

@function FPlusIcon
@param {IFPlusIcon} props - Пропсы компонента.
@param {('primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link')} [color='primary'] - Цвет иконки. По умолчанию 'primary'.
@param {number} [size=30] - Размер иконки в пикселях. По умолчанию 30.
@param {React.CSSProperties} [st] - Дополнительные стили для SVG элемента.
@param {string} [id] - Уникальный идентификатор для SVG элемента.
@param {string} [className] - Дополнительные CSS классы для SVG элемента.
@param {() => void} [handleClick] - Обработчик события клика по иконке.
@returns {JSX.Element} - Возвращает SVG элемент с заданными параметрами.

@example
<FPlusIcon
  color="primary"
  size={40}
  handleClick={() => console.log('Icon clicked!')}
/>`,methods:[],displayName:"FPlusIcon",props:{color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'link'"}]},description:`Цвет иконки. Определяет цветовую схему иконки.
@type {('primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link')}
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"number"},description:`Размер иконки.
@type {number}
@default 30`,defaultValue:{value:"30",computed:!1}},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Дополнительные стили для SVG элемента.
@type {React.CSSProperties}`},id:{required:!1,tsType:{name:"string"},description:`Уникальный идентификатор для SVG элемента.
@type {string | undefined}`},className:{required:!1,tsType:{name:"string"},description:`Дополнительные CSS классы для SVG элемента.
@type {string | undefined}`},handleClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Обработчик события клика по иконке.
@type {(() => void) | undefined}`},"data-testid":{required:!1,tsType:{name:"string"},description:"Data-testid для тестирования (опционально)"}}};const x={title:"Icons/FPlusIcon",tags:["autodocs"],component:t,argTypes:{color:{control:"select",options:["primary","secondary","success","danger","warning","info","light","dark","link"],description:"Цвет иконки. Определяет цветовую схему иконки"},size:{control:"number",description:"Размер иконки"},st:{control:"object",description:"Дополнительные стили для SVG элемента"},id:{control:"text",description:"Уникальный идентификатор для SVG элемента"},className:{control:"text",description:"Дополнительные CSS классы для SVG элемента"},handleClick:{action:"clicked",description:"Обработчик события клика по иконке"}},parameters:{docs:{description:{component:"Иконка плюса. Используйте для обозначения добавления или создания новых объектов."}}}},o=s=>i.jsx(t,{...s}),a=o.bind({});a.args={handleClick:void 0};a.parameters={docs:{description:{story:"Базовая иконка без дополнительных свойств."}}};const e=o.bind({});e.args={handleClick:()=>alert("Иконка нажата!"),"data-testid":"icon-svg"};e.parameters={docs:{description:{story:"Иконка с обработчиком клика."}}};e.play=async({canvasElement:s})=>{const n=await I(s).findByTestId("icon-svg");await P.click(n)};const r=o.bind({});r.args={color:"danger",size:40,handleClick:void 0};r.parameters={docs:{description:{story:"Иконка с кастомным цветом и размером."}}};var d,p,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"args => <FPlusIcon {...args} />",...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,g,y;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:"args => <FPlusIcon {...args} />",...(y=(g=e.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var f,S,v;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:"args => <FPlusIcon {...args} />",...(v=(S=r.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};const F=["Default","Clickable","CustomColorAndSize"];export{e as Clickable,r as CustomColorAndSize,a as Default,F as __namedExportsOrder,x as default};
