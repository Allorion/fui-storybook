import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{e as P}from"./index-B3j06Xw8.js";import{within as w,userEvent as G}from"./index-DH-M5T-F.js";const n=P.forwardRef(({color:s="primary",size:c=30,st:i,className:k,id:h,handleClick:l,["data-testid"]:C,...I},V)=>t.jsx("svg",{ref:V,onClick:l,className:`f-icon ${l?" clicking-icon":""} ${s} ${k||""}`,id:h,width:c,style:i,focusable:"false","aria-hidden":"true",viewBox:"0 0 24 24","data-testid":C,...I,children:t.jsx("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"})}));n.displayName="FPlusIcon";n.__docgenInfo={description:`Компонент FPlusIcon представляет собой SVG иконку плюса с возможностью настройки цвета, размера и обработки кликов.\r
\r
@function FPlusIcon\r
@param {IFPlusIcon} props - Пропсы компонента.\r
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
<FPlusIcon\r
  color="primary"\r
  size={40}\r
  handleClick={() => console.log('Icon clicked!')}\r
/>`,methods:[],displayName:"FPlusIcon",props:{color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'link'"}]},description:`Цвет иконки. Определяет цветовую схему иконки.\r
@type {('primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link')}\r
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"number"},description:`Размер иконки.\r
@type {number}\r
@default 30`,defaultValue:{value:"30",computed:!1}},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Дополнительные стили для SVG элемента.\r
@type {React.CSSProperties}`},id:{required:!1,tsType:{name:"string"},description:`Уникальный идентификатор для SVG элемента.\r
@type {string | undefined}`},className:{required:!1,tsType:{name:"string"},description:`Дополнительные CSS классы для SVG элемента.\r
@type {string | undefined}`},handleClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Обработчик события клика по иконке.\r
@type {(() => void) | undefined}`},"data-testid":{required:!1,tsType:{name:"string"},description:"Data-testid для тестирования (опционально)"}}};const z={title:"Icons/FPlusIcon",tags:["autodocs"],component:n,argTypes:{color:{control:"select",options:["primary","secondary","success","danger","warning","info","light","dark","link"],description:"Цвет иконки. Определяет цветовую схему иконки"},size:{control:"number",description:"Размер иконки"},st:{control:"object",description:"Дополнительные стили для SVG элемента"},id:{control:"text",description:"Уникальный идентификатор для SVG элемента"},className:{control:"text",description:"Дополнительные CSS классы для SVG элемента"},handleClick:{action:"clicked",description:"Обработчик события клика по иконке"}},parameters:{docs:{description:{component:"Иконка плюса. Используйте для обозначения добавления или создания новых объектов."}}}},o=s=>t.jsx(n,{...s}),r=o.bind({});r.args={handleClick:void 0};r.parameters={docs:{description:{story:"Базовая иконка без дополнительных свойств."}}};const e=o.bind({});e.args={handleClick:()=>alert("Иконка нажата!"),"data-testid":"icon-svg"};e.parameters={docs:{description:{story:"Иконка с обработчиком клика."}}};e.play=async({canvasElement:s})=>{const i=await w(s).findByTestId("icon-svg");await G.click(i)};const a=o.bind({});a.args={color:"danger",size:40,handleClick:void 0};a.parameters={docs:{description:{story:"Иконка с кастомным цветом и размером."}}};var d,p,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:"args => <FPlusIcon {...args} />",...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,g,y;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:"args => <FPlusIcon {...args} />",...(y=(g=e.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var f,S,v;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:"args => <FPlusIcon {...args} />",...(v=(S=a.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};const T=["Default","Clickable","CustomColorAndSize"];export{e as Clickable,a as CustomColorAndSize,r as Default,T as __namedExportsOrder,z as default};
