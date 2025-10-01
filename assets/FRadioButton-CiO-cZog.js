import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as o}from"./index-DY-snNUy.js";const i={"f-radio":"_f-radio_cwhmx_1"},c=o.forwardRef(({label:t,className:n,st:a,...r},s)=>e.jsx("div",{className:`${i["f-radio"]} ${n||""}`,style:a,children:e.jsxs("label",{children:[e.jsx("input",{ref:s,type:"radio",...r}),t]})}));c.__docgenInfo={description:`Компонент \`FRadioButton\` — кастомная радио-кнопка с поддержкой:
- различных цветовых вариантов
- метки (label)
- инлайновых стилей
- темизации через CSS Modules
- всех стандартных атрибутов \`<input type="radio">\`

@component
@example
<FRadioButton
  label="Выбрать"
  checked={isChecked}
  onChange={handleChange}
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
@param {string} [className] - Пользовательский класс для цвета/стилей.
@param {string} [id] - ID элемента.
@param {React.CSSProperties} [st] - Инлайновые стили.
@param {...React.InputHTMLAttributes<HTMLInputElement>} props - Атрибуты HTMLInputElement.

@returns {JSX.Element} — Рендерит кастомную радио-кнопку с меткой.`,methods:[],displayName:"FRadioButton",props:{label:{required:!1,tsType:{name:"union",raw:"React.ReactElement | React.ReactNode",elements:[{name:"ReactReactElement",raw:"React.ReactElement"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:`Дочерний элемент, отображается рядом с радио-кнопкой (например, текст или иконка).
@type {React.ReactElement | React.ReactNode}`},className:{required:!1,tsType:{name:"string"},description:`Дополнительный CSS-класс для внешнего контейнера.
@type {string}`},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Инлайновые стили для контейнера.
@type {React.CSSProperties | undefined}`}}};export{c as F};
