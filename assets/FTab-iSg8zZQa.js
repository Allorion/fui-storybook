import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import{r as d}from"./index-DY-snNUy.js";const m="_horizontal_zlvc7_1",b="_vertical_zlvc7_7",T="_active_zlvc7_50",e={"f-tabs":"_f-tabs_zlvc7_1",horizontal:m,vertical:b,"f-tabs__tab":"_f-tabs__tab_zlvc7_16",active:T},u=({children:a,id:t,className:n,st:r,orientation:s="horizontal"})=>i.jsx("div",{id:t,style:r,className:`${e["f-tabs"]} ${e[s]} ${n||""}`,children:a});u.__docgenInfo={description:`Компонент \`FTabs\` — контейнер для системы вкладок.

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
@default 'horizontal'`,defaultValue:{value:"'horizontal'",computed:!1}}}};const o=d.forwardRef(({children:a,id:t,className:n,st:r,onClick:s,disabled:l,active:c},p)=>i.jsx("button",{ref:p,type:"button",id:t,style:r,className:`${e["f-tabs__tab"]} ${c?e.active:""} ${n||""}`,disabled:l,onClick:s,children:a}));o.displayName="FTab";o.__docgenInfo={description:`Компонент \`FTab\` — отдельная вкладка в горизонтальной/вертикальной навигации.

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

@returns {JSX.Element} — Рендерит \`<button>\` с поддержкой состояния активности и дизейбла.`,methods:[],displayName:"FTab",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Контент вкладки — может быть текстом, иконкой или JSX."},id:{required:!1,tsType:{name:"string"},description:"HTML ID элемента."},className:{required:!1,tsType:{name:"string"},description:"Кастомный CSS класс для дополнительной стилизации."},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Инлайновые стили для кнопки вкладки."},disabled:{required:!1,tsType:{name:"boolean"},description:"Если true — вкладка заблокирована и не реагирует на клик."},active:{required:!1,tsType:{name:"boolean"},description:"Если true — вкладка активна (отображается как выбранная)."},onClick:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:"Callback, вызываемый при клике на вкладку."}}};export{u as F,o as a};
