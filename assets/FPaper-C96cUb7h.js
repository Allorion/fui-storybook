import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-B3j06Xw8.js";const u="_panel_q7in0_1",n={panel:u,"panel-default":"_panel-default_q7in0_6","panel-heading":"_panel-heading_q7in0_12","panel-body":"_panel-body_q7in0_24","portlet-body":"_portlet-body_q7in0_29","panel-title":"_panel-title_q7in0_29","panel-group":"_panel-group_q7in0_30","panel-group-accordion":"_panel-group-accordion_q7in0_30","form-title":"_form-title_q7in0_31"},f=({label:r,children:i,st:s,fontSizeLabel:p,fontSizeBody:l,id:o,className:d,onAnimationEnd:m,animated:e})=>(c.useEffect(()=>{if(e){const t=document.getElementsByClassName(`animated-${e.name}`)[0];t&&t.setAttribute(e.name,e.value)}},[e]),a.jsxs("div",{className:`${n.panel} ${n["panel-default"]} ${d||""} ${e?`${n[`animated-${e.name}`]} ${e.name}`:""}`,style:s,id:o,onAnimationEnd:m,children:[r&&a.jsx("div",{className:n["panel-heading"],children:a.jsx("h3",{className:n["panel-title"],style:{fontSize:p},children:r})}),a.jsx("div",{className:n["panel-body"],style:{fontSize:l},children:i})]}));f.__docgenInfo={description:`Компонент \`FPaper\` — универсальная панель с поддержкой:\r
- заголовка (\`label\`)\r
- компактного режима (\`compact\`)\r
- динамических стилей (\`st\`, \`fontSizeLabel\`, \`fontSizeBody\`)\r
- анимаций через \`animated\`\r
- пользовательских классов (\`className\`)\r
\r
Основан на Bootstrap-подобной структуре: \`.panel .panel-default\`\r
\r
@component\r
@example\r
// Пример базового использования\r
<FPaper label="Информация">\r
  Это текстовое содержимое панели.\r
</FPaper>\r
\r
@example\r
// Компактный режим\r
<FPaper label="Компактная панель" compact>\r
  <p>Панель с уменьшенными отступами</p>\r
</FPaper>\r
\r
@example\r
// С пользовательским стилем и анимацией\r
<FPaper\r
  label="Настройки"\r
  fontSizeLabel="18px"\r
  fontSizeBody="14px"\r
  className="custom-paper"\r
  animated={{ name: 'data-animation', value: 'fade-in' }}\r
>\r
  <p>С настраиваемым размером шрифта и анимацией</p>\r
</FPaper>\r
\r
@param {string} [label] - Текст заголовка панели.\r
@param {React.ReactNode} [children] - Содержимое панели.\r
@param {React.CSSProperties} [st] - Инлайновые стили для контейнера.\r
@param {string} [fontSizeLabel] - Размер шрифта заголовка.\r
@param {string} [fontSizeBody] - Размер шрифта тела панели.\r
@param {string} [id] - HTML ID.\r
@param {string} [className] - Пользовательский CSS-класс.\r
@param {Function} [onAnimationEnd] - Callback при завершении анимации.\r
@param {{name: string, value: string}} [animated] - Атрибут анимации.\r
@param {boolean} [compact=false] - Флаг компактного режима (уменьшенные отступы).\r
\r
@returns {JSX.Element} — Рендерит панель с заголовком и содержимым.`,methods:[],displayName:"FPaper",props:{label:{required:!1,tsType:{name:"string"},description:"Заголовок панели (необязательно).\r\nОтображается в `.panel-heading`.\r\n@type {string | undefined}"},children:{required:!1,tsType:{name:"union",raw:"React.ReactElement | React.ReactNode",elements:[{name:"ReactReactElement",raw:"React.ReactElement"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"Дочерние элементы, отображаемые внутри `.panel-body`.\r\n@type {React.ReactElement | React.ReactNode}"},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Инлайновые стили для внешнего контейнера.\r
@type {React.CSSProperties | undefined}`},fontSizeLabel:{required:!1,tsType:{name:"string"},description:`Размер шрифта заголовка (например: '16px').\r
@type {string | undefined}`},fontSizeBody:{required:!1,tsType:{name:"string"},description:`Размер шрифта содержимого (например: '14px').\r
@type {string | undefined}`},id:{required:!1,tsType:{name:"string"},description:`Уникальный ID элемента.\r
@type {string | undefined}`},className:{required:!1,tsType:{name:"string"},description:`Дополнительный CSS-класс для кастомизации.\r
@type {string | undefined}`},onAnimationEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Callback, вызываемый при завершении анимации.\r
@type {() => void | undefined}`},animated:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
    name: string;\r
    value: string;\r
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}},description:"Настройки анимации. Например: `{ name: 'data-animation', value: 'fade-in' }`\r\n@type {{ name: string; value: string } | undefined}"}}};export{f as F};
