import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as s}from"./index-DY-snNUy.js";const o={"f-checkbox":"_f-checkbox_9rvqg_1"},p=s.forwardRef(({label:t,className:n,st:a,...c},r)=>e.jsx("div",{className:`${o["f-checkbox"]} ${n||""}`,style:a,children:e.jsxs("label",{children:[e.jsx("input",{ref:r,type:"checkbox",...c}),t]})}));p.__docgenInfo={description:`Компонент \`FCheckbox\` — кастомный чекбокс с поддержкой:
- метки (label)
- пользовательских классов и стилей
- всех стандартных атрибутов \`<input type="checkbox">\`

Использует CSS Modules для изоляции стилей.

@component
@example
<FCheckbox
  label="Согласен с условиями"
  defaultChecked={true}
/>

@example
// С пользовательским классом и стилем
<FCheckbox
  label={<span>Подписаться на рассылку</span>}
  className="my-custom-checkbox"
  st={{ marginBottom: '1rem' }}
/>

@param {React.ReactNode} [label] - Текст/элемент рядом с чекбоксом.
@param {string} [className] - Дополнительный CSS-класс для обёртки.
@param {string} [id] - ID для контейнера.
@param {React.CSSProperties} [st] - Инлайновые стили для контейнера.
@param {...React.InputHTMLAttributes<HTMLInputElement>} props - Атрибуты HTMLInputElement.

@returns {JSX.Element} - Рендерит кастомный чекбокс с меткой.`,methods:[],displayName:"FCheckbox",props:{label:{required:!1,tsType:{name:"union",raw:"React.ReactElement | React.ReactNode",elements:[{name:"ReactReactElement",raw:"React.ReactElement"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:`Текст или элемент, отображаемый рядом с чекбоксом.
@type {React.ReactElement | React.ReactNode}`},className:{required:!1,tsType:{name:"string"},description:`Дополнительный CSS-класс для стилизации контейнера.
@type {string}`},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Инлайновые стили для контейнера.
@type {React.CSSProperties | undefined}`}}};export{p as F};
