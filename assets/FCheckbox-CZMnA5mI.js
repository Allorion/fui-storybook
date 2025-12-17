import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as s}from"./index-DY-snNUy.js";const o={"f-checkbox":"_f-checkbox_9rvqg_1"},p=s.forwardRef(({label:r,className:t,st:n,...a},c)=>e.jsx("div",{className:`${o["f-checkbox"]} ${t||""}`,style:n,children:e.jsxs("label",{children:[e.jsx("input",{ref:c,type:"checkbox",...a}),r]})}));p.__docgenInfo={description:`Компонент \`FCheckbox\` — кастомный чекбокс с поддержкой:\r
- метки (label)\r
- пользовательских классов и стилей\r
- всех стандартных атрибутов \`<input type="checkbox">\`\r
\r
Использует CSS Modules для изоляции стилей.\r
\r
@component\r
@example\r
<FCheckbox\r
  label="Согласен с условиями"\r
  defaultChecked={true}\r
/>\r
\r
@example\r
// С пользовательским классом и стилем\r
<FCheckbox\r
  label={<span>Подписаться на рассылку</span>}\r
  className="my-custom-checkbox"\r
  st={{ marginBottom: '1rem' }}\r
/>\r
\r
@param {React.ReactNode} [label] - Текст/элемент рядом с чекбоксом.\r
@param {string} [className] - Дополнительный CSS-класс для обёртки.\r
@param {string} [id] - ID для контейнера.\r
@param {React.CSSProperties} [st] - Инлайновые стили для контейнера.\r
@param {...React.InputHTMLAttributes<HTMLInputElement>} props - Атрибуты HTMLInputElement.\r
\r
@returns {JSX.Element} - Рендерит кастомный чекбокс с меткой.`,methods:[],displayName:"FCheckbox",props:{label:{required:!1,tsType:{name:"union",raw:"React.ReactElement | React.ReactNode",elements:[{name:"ReactReactElement",raw:"React.ReactElement"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:`Текст или элемент, отображаемый рядом с чекбоксом.\r
@type {React.ReactElement | React.ReactNode}`},className:{required:!1,tsType:{name:"string"},description:`Дополнительный CSS-класс для стилизации контейнера.\r
@type {string}`},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Инлайновые стили для контейнера.\r
@type {React.CSSProperties | undefined}`}}};export{p as F};
