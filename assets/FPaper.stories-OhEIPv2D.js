import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{F as t}from"./FPaper-Dw44gAGj.js";import"./index-B3j06Xw8.js";const y={title:"Material/FPaper",component:t,argTypes:{label:{control:{type:"text"},defaultValue:"Заголовок панели"},compact:{control:{type:"boolean"},defaultValue:!1},fontSizeLabel:{control:{type:"text"},defaultValue:"18px"},fontSizeBody:{control:{type:"text"},defaultValue:"14px"},className:{control:{type:"text"}},st:{control:{type:"object"}},id:{control:{type:"text"}},animated:{control:{type:"object"}}}},r=p=>e.jsx(t,{...p,children:e.jsxs("div",{children:[e.jsx("p",{children:"Это содержимое панели. Вы можете передать любой JSX."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Пункт 1"}),e.jsx("li",{children:"Пункт 2"})]})]})});r.args={label:"Заголовок панели",compact:!1,fontSizeLabel:"18px",fontSizeBody:"14px"};const n=()=>e.jsx(t,{label:"Компактная панель",compact:!0,children:e.jsxs("div",{children:[e.jsx("p",{children:"Это содержимое компактной панели с уменьшенными отступами."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Пункт 1"}),e.jsx("li",{children:"Пункт 2"})]})]})});r.__docgenInfo={description:"",methods:[],displayName:"Playground",props:{label:{required:!1,tsType:{name:"string"},description:"Заголовок панели (необязательно).\r\nОтображается в `.panel-heading`.\r\n@type {string | undefined}"},children:{required:!1,tsType:{name:"union",raw:"React.ReactElement | React.ReactNode",elements:[{name:"ReactReactElement",raw:"React.ReactElement"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"Дочерние элементы, отображаемые внутри `.panel-body`.\r\n@type {React.ReactElement | React.ReactNode}"},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Инлайновые стили для внешнего контейнера.\r
@type {React.CSSProperties | undefined}`},fontSizeLabel:{required:!1,tsType:{name:"string"},description:`Размер шрифта заголовка (например: '16px').\r
@type {string | undefined}`},fontSizeBody:{required:!1,tsType:{name:"string"},description:`Размер шрифта содержимого (например: '14px').\r
@type {string | undefined}`},id:{required:!1,tsType:{name:"string"},description:`Уникальный ID элемента.\r
@type {string | undefined}`},className:{required:!1,tsType:{name:"string"},description:`Дополнительный CSS-класс для кастомизации.\r
@type {string | undefined}`},onAnimationEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Callback, вызываемый при завершении анимации.\r
@type {() => void | undefined}`},animated:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
    name: string;\r
    value: string;\r
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}},description:"Настройки анимации. Например: `{ name: 'data-animation', value: 'fade-in' }`\r\n@type {{ name: string; value: string } | undefined}"},compact:{required:!1,tsType:{name:"boolean"},description:`Включает компактный режим с уменьшенными внутренними и внешними отступами.\r
@type {boolean | undefined}\r
@default false`}}};n.__docgenInfo={description:"",methods:[],displayName:"Compact"};var a,i,s;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`(props: IFPaper) => <FPaper {...props}>\r
        <div>\r
            <p>Это содержимое панели. Вы можете передать любой JSX.</p>\r
            <ul>\r
                <li>Пункт 1</li>\r
                <li>Пункт 2</li>\r
            </ul>\r
        </div>\r
    </FPaper>`,...(s=(i=r.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var o,l,d;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`() => <FPaper label="Компактная панель" compact>\r
        <div>\r
            <p>Это содержимое компактной панели с уменьшенными отступами.</p>\r
            <ul>\r
                <li>Пункт 1</li>\r
                <li>Пункт 2</li>\r
            </ul>\r
        </div>\r
    </FPaper>`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const f=["Playground","Compact"];export{n as Compact,r as Playground,f as __namedExportsOrder,y as default};
