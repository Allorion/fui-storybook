import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-B3j06Xw8.js";const c="_horizontal_zlvc7_1",d="_vertical_zlvc7_7",p="_active_zlvc7_50",a={"f-tabs":"_f-tabs_zlvc7_1",horizontal:c,vertical:d,"f-tabs__tab":"_f-tabs__tab_zlvc7_16",active:p},m=({children:r,id:t,className:n,st:e,orientation:s="horizontal"})=>i.jsx("div",{id:t,style:e,className:`${a["f-tabs"]} ${a[s]} ${n||""}`,children:r});m.__docgenInfo={description:`Компонент \`FTabs\` — контейнер для системы вкладок.\r
\r
Используется вместе с \`FTab\` и \`FTabContent\` для создания переключаемых вкладок.\r
\r
@component\r
@example\r
<FTabs orientation="vertical">\r
  <FTab>Вкладка 1</FTab>\r
  <FTab>Вкладка 2</FTab>\r
</FTabs>\r
\r
@param {React.ReactNode} [children] - Список вкладок (\`<FTab>\`).\r
@param {string} [id] - HTML ID контейнера.\r
@param {string} [className] - Кастомный класс.\r
@param {React.CSSProperties} [st] - Инлайновые стили.\r
@param {'horizontal'|'vertical'} [orientation='horizontal'] - Ориентация табов.\r
\r
@returns {JSX.Element} — Рендерит контейнер с вкладками.`,methods:[],displayName:"FTabs",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Дочерние элементы, обычно список `<FTab>` компонентов."},id:{required:!1,tsType:{name:"string"},description:"HTML ID контейнера."},className:{required:!1,tsType:{name:"string"},description:"Кастомный CSS класс для дополнительной стилизации."},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Инлайновые стили для контейнера."},orientation:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:`Ориентация вкладок: горизонтальная или вертикальная.\r
@default 'horizontal'`,defaultValue:{value:"'horizontal'",computed:!1}}}};const o=l.forwardRef(({children:r,st:t,active:n,...e},s)=>i.jsx("button",{ref:s,type:"button",style:t,className:`${a["f-tabs__tab"]} ${n?a.active:""} ${e.className||""}`,...e,children:r}));o.displayName="FTab";o.__docgenInfo={description:`Компонент \`FTab\` — отдельная вкладка в горизонтальной/вертикальной навигации.\r
\r
Используется внутри \`FTabs\` для отображения переключаемых вкладок.\r
\r
@component\r
@example\r
<FTab\r
  active={true}\r
  disabled={false}\r
  onClick={() => setActiveTab('tab-1')}\r
>\r
  Вкладка 1\r
</FTab>\r
\r
@param {React.ReactNode} [children] - Контент вкладки.\r
@param {string} [id] - HTML ID кнопки.\r
@param {string} [className] - Пользовательский класс.\r
@param {React.CSSProperties} [st] - Инлайновые стили.\r
@param {boolean} [disabled=false] - Блокировка вкладки.\r
@param {boolean} [active=false] - Активное состояние вкладки.\r
@param {Function} [onClick] - Callback при клике по вкладке.\r
\r
@returns {JSX.Element} — Рендерит \`<button>\` с поддержкой состояния активности и дизейбла.`,methods:[],displayName:"FTab",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Контент вкладки — может быть текстом, иконкой или JSX."},id:{required:!1,tsType:{name:"string"},description:"HTML ID элемента."},className:{required:!1,tsType:{name:"string"},description:"Кастомный CSS класс для дополнительной стилизации."},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Инлайновые стили для кнопки вкладки."},disabled:{required:!1,tsType:{name:"boolean"},description:"Если true — вкладка заблокирована и не реагирует на клик."},active:{required:!1,tsType:{name:"boolean"},description:"Если true — вкладка активна (отображается как выбранная)."},onClick:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:"Callback, вызываемый при клике на вкладку."}}};export{m as F,o as a};
