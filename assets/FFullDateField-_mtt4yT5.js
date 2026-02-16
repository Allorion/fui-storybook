import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-DEgj3Fem.js";import{F as f}from"./FTextField-DSrbz1g8.js";const g=o.forwardRef(({label:r,st:t,value:i,fullWidth:a,load:e=!1,errText:n,helpText:s,width:l,height:d,...p},u)=>m.jsx(f,{label:r,st:t,width:l,height:d,fullWidth:a,ref:u,load:e,value:e?"":i,type:e?"text":"date",helpText:s,errText:typeof n=="string"?[n]:n,...p}));g.__docgenInfo={description:`Компонент \`FFullDateField\` — универсальное поле ввода даты с поддержкой:\r
- метки (\`label\`)\r
- сообщений об ошибках (\`errText\`)\r
- вспомогательного текста (\`helpText\`)\r
- состояния загрузки (\`load\`)\r
- пользовательских стилей и классов\r
\r
Использует стандартный \`<input type="date">\` с расширенным UI.\r
\r
@component\r
@example\r
// Пример базового использования\r
<FFullDateField\r
  label="Выберите дату"\r
  value="2024-06-15"\r
  fullWidth\r
/>\r
\r
@example\r
// С ошибкой и кастомной шириной\r
<FFullDateField\r
  label="Дата рождения"\r
  errText={['Поле обязательное']}\r
  width="300px"\r
/>\r
\r
@param {IFFullDateField} props - Пропсы компонента.\r
@param {React.Ref<HTMLInputElement>} ref - Референс на DOM-элемент \`<input>\`.\r
@returns {JSX.Element} — Рендерит поле ввода даты с меткой, стилями и иконкой загрузки.`,methods:[],displayName:"FFullDateField",props:{label:{required:!1,tsType:{name:"string"},description:`Текст метки (label), отображается над полем ввода.\r
@type {string | undefined}`},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Дополнительные инлайновые стили для контейнера поля ввода.\r
@type {React.CSSProperties | undefined}`},value:{required:!1,tsType:{name:"union",raw:"string | number | readonly string[]",elements:[{name:"string"},{name:"number"},{name:"unknown"}]},description:`Значение поля даты. Может быть строкой или числом.\r
@type {string | number | readonly string[] | undefined}`},fullWidth:{required:!1,tsType:{name:"boolean"},description:`Флаг, указывающий, должно ли поле занимать всю ширину родителя.\r
@type {boolean}`},load:{required:!1,tsType:{name:"boolean"},description:`Флаг состояния загрузки — если true, показывает спиннер и блокирует ввод.\r
@type {boolean}`,defaultValue:{value:"false",computed:!1}},errText:{required:!1,tsType:{name:"union",raw:"string[] | string | undefined",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"},{name:"undefined"}]},description:`Массив текстов ошибок, связанных с полем ввода.\r
@type {string[] | string | undefined}`},helpText:{required:!1,tsType:{name:"string"},description:`Вспомогательный текст под полем даты.\r
@type {string | undefined}`},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:`Ширина поля ввода.\r
@type {string | number | undefined}`},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:`Высота поля ввода.\r
@type {string | number | undefined}`}}};export{g as F};
