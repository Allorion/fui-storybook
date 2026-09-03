import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{F as i}from"./FPaper-C96cUb7h.js";import"./index-B3j06Xw8.js";const l={title:"Material/FPaper",component:i,argTypes:{label:{control:{type:"text"},defaultValue:"Заголовок панели"},fontSizeLabel:{control:{type:"text"},defaultValue:"18px"},fontSizeBody:{control:{type:"text"},defaultValue:"14px"},className:{control:{type:"text"}},st:{control:{type:"object"}},id:{control:{type:"text"}},animated:{control:{type:"object"}}}},t=s=>e.jsx(i,{...s,children:e.jsxs("div",{children:[e.jsx("p",{children:"Это содержимое панели. Вы можете передать любой JSX."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Пункт 1"}),e.jsx("li",{children:"Пункт 2"})]})]})});t.__docgenInfo={description:"",methods:[],displayName:"Playground",props:{label:{required:!1,tsType:{name:"string"},description:"Заголовок панели (необязательно).\r\nОтображается в `.panel-heading`.\r\n@type {string | undefined}"},children:{required:!1,tsType:{name:"union",raw:"React.ReactElement | React.ReactNode",elements:[{name:"ReactReactElement",raw:"React.ReactElement"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"Дочерние элементы, отображаемые внутри `.panel-body`.\r\n@type {React.ReactElement | React.ReactNode}"},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Инлайновые стили для внешнего контейнера.\r
@type {React.CSSProperties | undefined}`},fontSizeLabel:{required:!1,tsType:{name:"string"},description:`Размер шрифта заголовка (например: '16px').\r
@type {string | undefined}`},fontSizeBody:{required:!1,tsType:{name:"string"},description:`Размер шрифта содержимого (например: '14px').\r
@type {string | undefined}`},id:{required:!1,tsType:{name:"string"},description:`Уникальный ID элемента.\r
@type {string | undefined}`},className:{required:!1,tsType:{name:"string"},description:`Дополнительный CSS-класс для кастомизации.\r
@type {string | undefined}`},onAnimationEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Callback, вызываемый при завершении анимации.\r
@type {() => void | undefined}`},animated:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
    name: string;\r
    value: string;\r
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}},description:"Настройки анимации. Например: `{ name: 'data-animation', value: 'fade-in' }`\r\n@type {{ name: string; value: string } | undefined}"}}};var r,n,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`(props: IFPaper) => <FPaper {...props}>\r
        <div>\r
            <p>Это содержимое панели. Вы можете передать любой JSX.</p>\r
            <ul>\r
                <li>Пункт 1</li>\r
                <li>Пункт 2</li>\r
            </ul>\r
        </div>\r
    </FPaper>`,...(a=(n=t.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const c=["Playground"];export{t as Playground,c as __namedExportsOrder,l as default};
