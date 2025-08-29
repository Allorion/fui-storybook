import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import{r as l}from"./index-DY-snNUy.js";const c="_horizontal_zlvc7_1",d="_vertical_zlvc7_7",p="_active_zlvc7_50",a={"f-tabs":"_f-tabs_zlvc7_1",horizontal:c,vertical:d,"f-tabs__tab":"_f-tabs__tab_zlvc7_16",active:p},m=({children:t,id:n,className:r,st:e,orientation:s="horizontal"})=>i.jsx("div",{id:n,style:e,className:`${a["f-tabs"]} ${a[s]} ${r||""}`,children:t});m.__docgenInfo={description:`Компонент \`FTabs\` — контейнер для системы вкладок.

Используется вместе с \`FTab\` и \`FTabContent\` для создания переключаемых вкладок.

@component
@example
<FTabs orientation="vertical">
  <FTab>Вкладка 1</FTab>
  <FTab>Вкладка 2</FTab>
</FTabs>

@param {React.ReactNode} [children] - Список вкладок (\`<FTab>\`).
@param {string} [id] - HTML ID контейнера.
@param {string} [className] - Кастомный класс.
@param {React.CSSProperties} [st] - Инлайновые стили.
@param {'horizontal'|'vertical'} [orientation='horizontal'] - Ориентация табов.

@returns {JSX.Element} — Рендерит контейнер с вкладками.`,methods:[],displayName:"FTabs",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Дочерние элементы, обычно список `<FTab>` компонентов."},id:{required:!1,tsType:{name:"string"},description:"HTML ID контейнера."},className:{required:!1,tsType:{name:"string"},description:"Кастомный CSS класс для дополнительной стилизации."},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Инлайновые стили для контейнера."},orientation:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:`Ориентация вкладок: горизонтальная или вертикальная.
@default 'horizontal'`,defaultValue:{value:"'horizontal'",computed:!1}}}};const o=l.forwardRef(({children:t,st:n,active:r,...e},s)=>i.jsx("button",{ref:s,type:"button",style:n,className:`${a["f-tabs__tab"]} ${r?a.active:""} ${e.className||""}`,...e,children:t}));o.displayName="FTab";o.__docgenInfo={description:`Компонент \`FTab\` — отдельная вкладка в горизонтальной/вертикальной навигации.

Используется внутри \`FTabs\` для отображения переключаемых вкладок.

@component
@example
<FTab
  active={true}
  disabled={false}
  onClick={() => setActiveTab('tab-1')}
>
  Вкладка 1
</FTab>

@param {React.ReactNode} [children] - Контент вкладки.
@param {string} [id] - HTML ID кнопки.
@param {string} [className] - Пользовательский класс.
@param {React.CSSProperties} [st] - Инлайновые стили.
@param {boolean} [disabled=false] - Блокировка вкладки.
@param {boolean} [active=false] - Активное состояние вкладки.
@param {Function} [onClick] - Callback при клике по вкладке.

@returns {JSX.Element} — Рендерит \`<button>\` с поддержкой состояния активности и дизейбла.`,methods:[],displayName:"FTab",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Контент вкладки — может быть текстом, иконкой или JSX."},id:{required:!1,tsType:{name:"string"},description:"HTML ID элемента."},className:{required:!1,tsType:{name:"string"},description:"Кастомный CSS класс для дополнительной стилизации."},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Инлайновые стили для кнопки вкладки."},disabled:{required:!1,tsType:{name:"boolean"},description:"Если true — вкладка заблокирована и не реагирует на клик."},active:{required:!1,tsType:{name:"boolean"},description:"Если true — вкладка активна (отображается как выбранная)."},onClick:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:"Callback, вызываемый при клике на вкладку."}}};export{m as F,o as a};
