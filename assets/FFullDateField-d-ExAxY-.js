import{j as m}from"./jsx-runtime-Cf8x2fCZ.js";import{r as o}from"./index-DY-snNUy.js";import{F as f}from"./FTextField-DtoXRif2.js";const y=o.forwardRef(({label:n,st:t,value:r,fullWidth:i,load:e=!1,errText:a,helpText:s,width:l,height:p,...d},u)=>m.jsx(f,{label:n,st:t,width:l,height:p,fullWidth:i,ref:u,load:e,value:e?"":r,type:e?"text":"date",helpText:s,errText:a,...d}));y.__docgenInfo={description:`Компонент \`FFullDateField\` — универсальное поле ввода даты с поддержкой:
- метки (\`label\`)
- сообщений об ошибках (\`errText\`)
- вспомогательного текста (\`helpText\`)
- состояния загрузки (\`load\`)
- пользовательских стилей и классов

Использует стандартный \`<input type="date">\` с расширенным UI.

@component
@example
// Пример базового использования
<FFullDateField
  label="Выберите дату"
  value="2024-06-15"
  fullWidth
/>

@example
// С ошибкой и кастомной шириной
<FFullDateField
  label="Дата рождения"
  errText={['Поле обязательное']}
  width="300px"
/>

@param {IFFullDateField} props - Пропсы компонента.
@param {React.Ref<HTMLInputElement>} ref - Референс на DOM-элемент \`<input>\`.
@returns {JSX.Element} — Рендерит поле ввода даты с меткой, стилями и иконкой загрузки.`,methods:[],displayName:"FFullDateField",props:{label:{required:!1,tsType:{name:"string"},description:`Текст метки (label), отображается над полем ввода.
@type {string | undefined}`},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Дополнительные инлайновые стили для контейнера поля ввода.
@type {React.CSSProperties | undefined}`},value:{required:!1,tsType:{name:"union",raw:"string | number | readonly string[]",elements:[{name:"string"},{name:"number"},{name:"unknown"}]},description:`Значение поля даты. Может быть строкой или числом.
@type {string | number | readonly string[] | undefined}`},fullWidth:{required:!1,tsType:{name:"boolean"},description:`Флаг, указывающий, должно ли поле занимать всю ширину родителя.
@type {boolean}`},load:{required:!1,tsType:{name:"boolean"},description:`Флаг состояния загрузки — если true, показывает спиннер и блокирует ввод.
@type {boolean}`,defaultValue:{value:"false",computed:!1}},errText:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:`Массив текстов ошибок, связанных с полем даты.
@type {string[] | undefined}`},helpText:{required:!1,tsType:{name:"string"},description:`Вспомогательный текст под полем даты.
@type {string | undefined}`},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:`Ширина поля ввода.
@type {string | number | undefined}`},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:`Высота поля ввода.
@type {string | number | undefined}`}}};export{y as F};
