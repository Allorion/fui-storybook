import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";const c="_horizontal_zlvc7_1",p="_vertical_zlvc7_7",d="_active_zlvc7_50",e={"f-tabs":"_f-tabs_zlvc7_1",horizontal:c,vertical:p,"f-tabs__tab":"_f-tabs__tab_zlvc7_16",active:d},m=({children:a,id:r,className:t,st:n,orientation:s="horizontal"})=>i.jsx("div",{id:r,style:n,className:`${e["f-tabs"]} ${e[s]} ${t||""}`,children:a});m.__docgenInfo={description:`Компонент \`FTabs\` — контейнер для системы вкладок.\r
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
@default 'horizontal'`,defaultValue:{value:"'horizontal'",computed:!1}}}};const b=({children:a,id:r,className:t,st:n,onClick:s,disabled:o,active:l})=>i.jsx("button",{type:"button",id:r,style:n,className:`${e["f-tabs__tab"]} ${l?e.active:""} ${t||""}`,disabled:o,onClick:s,children:a});b.__docgenInfo={description:`Компонент \`FTab\` — отдельная вкладка в горизонтальной/вертикальной навигации.\r
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
@returns {JSX.Element} — Рендерит \`<button>\` с поддержкой состояния активности и дизейбла.`,methods:[],displayName:"FTab",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Контент вкладки — может быть текстом, иконкой или JSX."},id:{required:!1,tsType:{name:"string"},description:"HTML ID элемента."},className:{required:!1,tsType:{name:"string"},description:"Кастомный CSS класс для дополнительной стилизации."},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Инлайновые стили для кнопки вкладки."},disabled:{required:!1,tsType:{name:"boolean"},description:"Если true — вкладка заблокирована и не реагирует на клик."},active:{required:!1,tsType:{name:"boolean"},description:"Если true — вкладка активна (отображается как выбранная)."},onClick:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:"Callback, вызываемый при клике на вкладку."}}};export{m as F,b as a};
