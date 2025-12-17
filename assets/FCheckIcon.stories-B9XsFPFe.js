import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{e as w}from"./index-DY-snNUy.js";import{w as G,u as F}from"./index-CUyYkyAM.js";import"./index-yBjzXJbu.js";const n=w.forwardRef(({color:s="primary",size:c=30,st:i,id:C,className:h,handleClick:l,["data-testid"]:v,...I},V)=>t.jsx("svg",{ref:V,width:c,viewBox:"0 0 16 16",className:`f-icon ${l?" clicking-icon":""} ${s} ${h||""}`,id:C,onClick:l,style:i,"data-testid":v,...I,children:t.jsx("path",{clipRule:"evenodd",d:"M15.4142 4.41421L6 13.8284L0.585785 8.41421L3.41421 5.58578L6 8.17157L12.5858 1.58578L15.4142 4.41421Z",fillRule:"evenodd"})}));n.displayName="FCheckIcon";n.__docgenInfo={description:`Компонент FCheckIcon представляет собой SVG иконку галочки с возможностью настройки цвета, размера и обработки кликов.\r
\r
@function FCheckIcon\r
@param {IFCheckIcon} props - Пропсы компонента.\r
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
<FCheckIcon\r
  color="success"\r
  size={40}\r
  handleClick={() => console.log('Icon clicked!')}\r
/>`,methods:[],displayName:"FCheckIcon",props:{color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'link'"}]},description:`Цвет иконки. Определяет цветовую схему иконки.\r
@type {('primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link')}\r
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"number"},description:`Размер иконки.\r
@type {number}\r
@default 30`,defaultValue:{value:"30",computed:!1}},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Дополнительные стили для SVG элемента.\r
@type {React.CSSProperties}`},id:{required:!1,tsType:{name:"string"},description:`Уникальный идентификатор для SVG элемента.\r
@type {string | undefined}`},className:{required:!1,tsType:{name:"string"},description:`Дополнительные CSS классы для SVG элемента.\r
@type {string | undefined}`},handleClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Обработчик события клика по иконке.\r
@type {(() => void) | undefined}`},"data-testid":{required:!1,tsType:{name:"string"},description:"Data-testid для тестирования (опционально)"}}};const q={title:"Icons/FCheckIcon",tags:["autodocs"],component:n,argTypes:{color:{control:"select",options:["primary","secondary","success","danger","warning","info","light","dark","link"],description:"Цвет иконки. Определяет цветовую схему иконки"},size:{control:"number",description:"Размер иконки"},st:{control:"object",description:"Дополнительные стили для SVG элемента"},id:{control:"text",description:"Уникальный идентификатор для SVG элемента"},className:{control:"text",description:"Дополнительные CSS классы для SVG элемента"},handleClick:{action:"clicked",description:"Обработчик события клика по иконке"}},parameters:{docs:{description:{component:"Иконка галочки. Используйте для обозначения подтверждения или успешного действия."}}}},o=s=>t.jsx(n,{...s}),r=o.bind({});r.args={handleClick:void 0};r.parameters={docs:{description:{story:"Базовая иконка без дополнительных свойств."}}};const e=o.bind({});e.args={handleClick:()=>alert("Иконка нажата!"),"data-testid":"icon-svg"};e.parameters={docs:{description:{story:"Иконка с обработчиком клика."}}};e.play=async({canvasElement:s})=>{const i=await G(s).findByTestId("icon-svg");await F.click(i)};const a=o.bind({});a.args={color:"success",size:40,handleClick:void 0};a.parameters={docs:{description:{story:"Иконка с кастомным цветом и размером."}}};var d,p,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:"args => <FCheckIcon {...args} />",...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,g,y;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:"args => <FCheckIcon {...args} />",...(y=(g=e.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var f,k,S;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:"args => <FCheckIcon {...args} />",...(S=(k=a.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};const z=["Default","Clickable","CustomColorAndSize"];export{e as Clickable,a as CustomColorAndSize,r as Default,z as __namedExportsOrder,q as default};
