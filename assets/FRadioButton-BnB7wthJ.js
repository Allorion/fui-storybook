import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";const o={"f-radio":"_f-radio_cwhmx_1"},l=({label:n,onClick:r,className:a,id:t,st:s,checked:i,disabled:d})=>e.jsx("div",{className:`${o["f-radio"]} ${a||""}`,style:s,id:t,children:e.jsxs("label",{children:[e.jsx("input",{type:"radio",onClick:r,checked:i,disabled:d}),n]})});l.__docgenInfo={description:`Компонент \`FRadioButton\` — кастомная радио-кнопка с поддержкой:\r
- различных цветовых вариантов\r
- метки (label)\r
- инлайновых стилей\r
- темизации через CSS Modules\r
\r
@component\r
@example\r
<FRadioButton\r
  label="Выбрать"\r
  checked={isChecked}\r
/>\r
\r
@example\r
// С пользовательским классом и стилем\r
<FRadioButton\r
  label="Заблокировано"\r
  disabled\r
  className={styles.danger}\r
  st={{ margin: '1rem 0' }}\r
/>\r
\r
@param {React.ReactNode} [label] - Текст или элемент рядом с радио.\r
@param {Function} [onClick] - Callback при клике.\r
@param {string} [className] - Пользовательский класс для цвета/стилей.\r
@param {string} [id] - ID элемента.\r
@param {React.CSSProperties} [st] - Инлайновые стили.\r
@param {boolean} [checked] - Состояние радиокнопки.\r
@param {boolean} [disabled=false] - Заблокирована ли радиокнопка.\r
\r
@returns {JSX.Element} — Рендерит кастомную радио-кнопку с меткой.`,methods:[],displayName:"FRadioButton",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Дочерний элемент, отображается рядом с радио-кнопкой (например, текст или иконка).\r
@type {React.ReactNode}`},onClick:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:`Обработчик клика на радио-кнопку.\r
@type {React.MouseEventHandler<HTMLInputElement> | undefined}`},className:{required:!1,tsType:{name:"string"},description:`Дополнительный CSS-класс для внешнего контейнера.\r
@type {string | undefined}`},id:{required:!1,tsType:{name:"string"},description:`Уникальный идентификатор элемента.\r
@type {string | undefined}`},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Инлайновые стили для контейнера.\r
@type {React.CSSProperties | undefined}`},checked:{required:!1,tsType:{name:"boolean"},description:`Флаг, указывающий, выбрана ли кнопка.\r
@type {boolean | undefined}`},disabled:{required:!1,tsType:{name:"boolean"},description:`Флаг, указывающий, заблокирована ли кнопка.\r
@type {boolean}`}}};export{l as F};
