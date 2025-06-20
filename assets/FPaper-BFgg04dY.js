import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{r as c}from"./index-DY-snNUy.js";const u="_panel_yplsg_1",n={panel:u,"panel-default":"_panel-default_yplsg_6","panel-heading":"_panel-heading_yplsg_12","panel-body":"_panel-body_yplsg_24","portlet-body":"_portlet-body_yplsg_29","panel-title":"_panel-title_yplsg_29","panel-group":"_panel-group_yplsg_30","panel-group-accordion":"_panel-group-accordion_yplsg_30","form-title":"_form-title_yplsg_31"},g=({label:t,children:i,st:s,fontSizeLabel:p,fontSizeBody:l,id:o,className:d,onAnimationEnd:m,animated:e})=>(c.useEffect(()=>{if(e){const r=document.getElementsByClassName(`animated-${e.name}`)[0];r&&r.setAttribute(e.name,e.value)}},[e]),a.jsxs("div",{className:`${n.panel} ${n["panel-default"]} ${d||""} ${e?`${n[`animated-${e.name}`]} ${e.name}`:""}`,style:s,id:o,onAnimationEnd:m,children:[t&&a.jsx("div",{className:n["panel-heading"],children:a.jsx("h3",{className:n["panel-title"],style:{fontSize:p},children:t})}),a.jsx("div",{className:n["panel-body"],style:{fontSize:l},children:i})]}));g.__docgenInfo={description:`Компонент \`FPaper\` — универсальная панель с поддержкой:
- заголовка (\`label\`)
- динамических стилей (\`st\`, \`fontSizeLabel\`, \`fontSizeBody\`)
- анимаций через \`animated\`
- пользовательских классов (\`className\`)

Основан на Bootstrap-подобной структуре: \`.panel .panel-default\`

@component
@example
// Пример базового использования
<FPaper label="Информация">
  Это текстовое содержимое панели.
</FPaper>

@example
// С пользовательским стилем и анимацией
<FPaper
  label="Настройки"
  fontSizeLabel="18px"
  fontSizeBody="14px"
  className="custom-paper"
  animated={{ name: 'data-animation', value: 'fade-in' }}
>
  <p>С настраиваемым размером шрифта и анимацией</p>
</FPaper>

@param {string} [label] - Текст заголовка панели.
@param {React.ReactNode} [children] - Содержимое панели.
@param {React.CSSProperties} [st] - Инлайновые стили для контейнера.
@param {string} [fontSizeLabel] - Размер шрифта заголовка.
@param {string} [fontSizeBody] - Размер шрифта тела панели.
@param {string} [id] - HTML ID.
@param {string} [className] - Пользовательский CSS-класс.
@param {Function} [onAnimationEnd] - Callback при завершении анимации.
@param {{name: string, value: string}} [animated] - Атрибут анимации.

@returns {JSX.Element} — Рендерит панель с заголовком и содержимым.`,methods:[],displayName:"FPaper",props:{label:{required:!1,tsType:{name:"string"},description:"Заголовок панели (необязательно).\nОтображается в `.panel-heading`.\n@type {string | undefined}"},children:{required:!1,tsType:{name:"union",raw:"React.ReactElement | React.ReactNode",elements:[{name:"ReactReactElement",raw:"React.ReactElement"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"Дочерние элементы, отображаемые внутри `.panel-body`.\n@type {React.ReactElement | React.ReactNode}"},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Инлайновые стили для внешнего контейнера.
@type {React.CSSProperties | undefined}`},fontSizeLabel:{required:!1,tsType:{name:"string"},description:`Размер шрифта заголовка (например: '16px').
@type {string | undefined}`},fontSizeBody:{required:!1,tsType:{name:"string"},description:`Размер шрифта содержимого (например: '14px').
@type {string | undefined}`},id:{required:!1,tsType:{name:"string"},description:`Уникальный ID элемента.
@type {string | undefined}`},className:{required:!1,tsType:{name:"string"},description:`Дополнительный CSS-класс для кастомизации.
@type {string | undefined}`},onAnimationEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Callback, вызываемый при завершении анимации.
@type {() => void | undefined}`},animated:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    name: string;
    value: string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}},description:"Настройки анимации. Например: `{ name: 'data-animation', value: 'fade-in' }`\n@type {{ name: string; value: string } | undefined}"}}};export{g as F};
