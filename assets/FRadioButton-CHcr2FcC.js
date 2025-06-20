import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";const o={"f-radio":"_f-radio_cwhmx_1"},l=({label:n,onClick:a,className:t,id:s,st:r,checked:i,disabled:d})=>e.jsx("div",{className:`${o["f-radio"]} ${t||""}`,style:r,id:s,children:e.jsxs("label",{children:[e.jsx("input",{type:"radio",onClick:a,checked:i,disabled:d}),n]})});l.__docgenInfo={description:`Компонент \`FRadioButton\` — кастомная радио-кнопка с поддержкой:
- различных цветовых вариантов
- метки (label)
- инлайновых стилей
- темизации через CSS Modules

@component
@example
<FRadioButton
  label="Выбрать"
  checked={isChecked}
/>

@example
// С пользовательским классом и стилем
<FRadioButton
  label="Заблокировано"
  disabled
  className={styles.danger}
  st={{ margin: '1rem 0' }}
/>

@param {React.ReactNode} [label] - Текст или элемент рядом с радио.
@param {Function} [onClick] - Callback при клике.
@param {string} [className] - Пользовательский класс для цвета/стилей.
@param {string} [id] - ID элемента.
@param {React.CSSProperties} [st] - Инлайновые стили.
@param {boolean} [checked] - Состояние радиокнопки.
@param {boolean} [disabled=false] - Заблокирована ли радиокнопка.

@returns {JSX.Element} — Рендерит кастомную радио-кнопку с меткой.`,methods:[],displayName:"FRadioButton",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Дочерний элемент, отображается рядом с радио-кнопкой (например, текст или иконка).
@type {React.ReactNode}`},onClick:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:`Обработчик клика на радио-кнопку.
@type {React.MouseEventHandler<HTMLInputElement> | undefined}`},className:{required:!1,tsType:{name:"string"},description:`Дополнительный CSS-класс для внешнего контейнера.
@type {string | undefined}`},id:{required:!1,tsType:{name:"string"},description:`Уникальный идентификатор элемента.
@type {string | undefined}`},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Инлайновые стили для контейнера.
@type {React.CSSProperties | undefined}`},checked:{required:!1,tsType:{name:"boolean"},description:`Флаг, указывающий, выбрана ли кнопка.
@type {boolean | undefined}`},disabled:{required:!1,tsType:{name:"boolean"},description:`Флаг, указывающий, заблокирована ли кнопка.
@type {boolean}`}}};export{l as F};
