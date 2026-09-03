import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-B3j06Xw8.js";const i={"f-radio":"_f-radio_1oidm_1"},c=o.forwardRef(({label:r,className:t,st:n,...a},s)=>e.jsx("div",{className:`${i["f-radio"]} ${t||""}`,style:n,children:e.jsxs("label",{children:[e.jsx("input",{ref:s,type:"radio",...a}),r]})}));c.__docgenInfo={description:`Компонент \`FRadioButton\` — кастомная радио-кнопка с поддержкой:\r
- различных цветовых вариантов\r
- метки (label)\r
- инлайновых стилей\r
- темизации через CSS Modules\r
- всех стандартных атрибутов \`<input type="radio">\`\r
\r
@component\r
@example\r
<FRadioButton\r
  label="Выбрать"\r
  checked={isChecked}\r
  onChange={handleChange}\r
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
@param {string} [className] - Пользовательский класс для цвета/стилей.\r
@param {string} [id] - ID элемента.\r
@param {React.CSSProperties} [st] - Инлайновые стили.\r
@param {...React.InputHTMLAttributes<HTMLInputElement>} props - Атрибуты HTMLInputElement.\r
\r
@returns {JSX.Element} — Рендерит кастомную радио-кнопку с меткой.`,methods:[],displayName:"FRadioButton",props:{label:{required:!1,tsType:{name:"union",raw:"React.ReactElement | React.ReactNode",elements:[{name:"ReactReactElement",raw:"React.ReactElement"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:`Дочерний элемент, отображается рядом с радио-кнопкой (например, текст или иконка).\r
@type {React.ReactElement | React.ReactNode}`},className:{required:!1,tsType:{name:"string"},description:`Дополнительный CSS-класс для внешнего контейнера.\r
@type {string}`},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Инлайновые стили для контейнера.\r
@type {React.CSSProperties | undefined}`}}};export{c as F};
