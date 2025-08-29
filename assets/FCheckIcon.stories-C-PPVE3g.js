import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{e as w}from"./index-DY-snNUy.js";import{w as G,u as F}from"./index-CUyYkyAM.js";import"./index-yBjzXJbu.js";const n=w.forwardRef(({color:s="primary",size:c=30,st:i,id:C,className:h,handleClick:l,["data-testid"]:v,...I},V)=>t.jsx("svg",{ref:V,width:c,viewBox:"0 0 16 16",className:`f-icon ${l?" clicking-icon":""} ${s} ${h||""}`,id:C,onClick:l,style:i,"data-testid":v,...I,children:t.jsx("path",{clipRule:"evenodd",d:"M15.4142 4.41421L6 13.8284L0.585785 8.41421L3.41421 5.58578L6 8.17157L12.5858 1.58578L15.4142 4.41421Z",fillRule:"evenodd"})}));n.displayName="FCheckIcon";n.__docgenInfo={description:`Компонент FCheckIcon представляет собой SVG иконку галочки с возможностью настройки цвета, размера и обработки кликов.

@function FCheckIcon
@param {IFCheckIcon} props - Пропсы компонента.
@param {('primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link')} [color='primary'] - Цвет иконки. По умолчанию 'primary'.
@param {number} [size=30] - Размер иконки в пикселях. По умолчанию 30.
@param {React.CSSProperties} [st] - Дополнительные стили для SVG элемента.
@param {string} [id] - Уникальный идентификатор для SVG элемента.
@param {string} [className] - Дополнительные CSS классы для SVG элемента.
@param {() => void} [handleClick] - Обработчик события клика по иконке.
@param {React.Ref<SVGSVGElement>} ref - Ref для SVG элемента.
@returns {JSX.Element} - Возвращает SVG элемент с заданными параметрами.

@example
<FCheckIcon
  color="success"
  size={40}
  handleClick={() => console.log('Icon clicked!')}
/>`,methods:[],displayName:"FCheckIcon",props:{color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'link'"}]},description:`Цвет иконки. Определяет цветовую схему иконки.
@type {('primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link')}
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"number"},description:`Размер иконки.
@type {number}
@default 30`,defaultValue:{value:"30",computed:!1}},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Дополнительные стили для SVG элемента.
@type {React.CSSProperties}`},id:{required:!1,tsType:{name:"string"},description:`Уникальный идентификатор для SVG элемента.
@type {string | undefined}`},className:{required:!1,tsType:{name:"string"},description:`Дополнительные CSS классы для SVG элемента.
@type {string | undefined}`},handleClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Обработчик события клика по иконке.
@type {(() => void) | undefined}`},"data-testid":{required:!1,tsType:{name:"string"},description:"Data-testid для тестирования (опционально)"}}};const q={title:"Icons/FCheckIcon",tags:["autodocs"],component:n,argTypes:{color:{control:"select",options:["primary","secondary","success","danger","warning","info","light","dark","link"],description:"Цвет иконки. Определяет цветовую схему иконки"},size:{control:"number",description:"Размер иконки"},st:{control:"object",description:"Дополнительные стили для SVG элемента"},id:{control:"text",description:"Уникальный идентификатор для SVG элемента"},className:{control:"text",description:"Дополнительные CSS классы для SVG элемента"},handleClick:{action:"clicked",description:"Обработчик события клика по иконке"}},parameters:{docs:{description:{component:"Иконка галочки. Используйте для обозначения подтверждения или успешного действия."}}}},o=s=>t.jsx(n,{...s}),a=o.bind({});a.args={handleClick:void 0};a.parameters={docs:{description:{story:"Базовая иконка без дополнительных свойств."}}};const e=o.bind({});e.args={handleClick:()=>alert("Иконка нажата!"),"data-testid":"icon-svg"};e.parameters={docs:{description:{story:"Иконка с обработчиком клика."}}};e.play=async({canvasElement:s})=>{const i=await G(s).findByTestId("icon-svg");await F.click(i)};const r=o.bind({});r.args={color:"success",size:40,handleClick:void 0};r.parameters={docs:{description:{story:"Иконка с кастомным цветом и размером."}}};var d,p,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"args => <FCheckIcon {...args} />",...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,g,y;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:"args => <FCheckIcon {...args} />",...(y=(g=e.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var f,k,S;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:"args => <FCheckIcon {...args} />",...(S=(k=r.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};const z=["Default","Clickable","CustomColorAndSize"];export{e as Clickable,r as CustomColorAndSize,a as Default,z as __namedExportsOrder,q as default};
