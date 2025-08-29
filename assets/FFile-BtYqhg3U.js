import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{F as l}from"./FTrashIcon-Cxn1SHc6.js";const d="_progressBar_1xp9s_48",m="_completed_1xp9s_60",c="_progress_1xp9s_48",n={"file-preview-card":"_file-preview-card_1xp9s_1","file-preview-info":"_file-preview-info_1xp9s_22","file-preview-name":"_file-preview-name_1xp9s_28","file-preview-size":"_file-preview-size_1xp9s_36","trash-icon":"_trash-icon_1xp9s_42",progressBar:d,completed:m,progress:c},f=({id:t,className:p,st:o,handleDelete:r,name:i,size:a,progress:s})=>e.jsxs("div",{className:`${n["file-preview-card"]} ${p||""}`,id:t,style:o,children:[e.jsxs("div",{className:n["file-preview-info"],children:[e.jsx("span",{className:n["file-preview-name"],title:i,children:i}),typeof a=="number"&&e.jsxs("span",{className:n["file-preview-size"],children:[Math.round(a/1024)," КБ"]})]}),r&&e.jsx("div",{className:n["trash-icon"],children:e.jsx(l,{size:20,color:"danger",handleClick:r})}),typeof s=="number"&&e.jsx("div",{className:`${n.progressBar} ${s===100?n.completed:""}`,children:e.jsx("div",{className:n.progress,style:{width:`${s}%`}})})]});f.__docgenInfo={description:`Компонент \`FFile\` — отображает карточку одного файла с возможностью удаления
и индикатором прогресса загрузки.

Используется в связке с \`FButtonFile\` или другими компонентами,
где нужно показать загруженный файл с именем, размером и кнопкой удаления.

@component
@example
<FFile
  name="report.pdf"
  size={20480} // 20 КБ
  progress={75} // 75% загружено
  handleDelete={() => console.log('Файл удален')}
/>

@example
// С пользовательским классом и стилем
<FFile
  name="photo.jpg"
  size={987654} // ~964 КБ
  className="custom-file-card"
  st={{ margin: '1rem 0' }}
/>

@param {string} [id] - ID элемента.
@param {string} [className] - Пользовательский CSS-класс.
@param {React.CSSProperties} [st] - Инлайновые стили.
@param {() => void} [handleDelete] - Callback при клике на удаление.
@param {string} name - Имя файла (обязательное).
@param {number} [size] - Размер файла в байтах (необязательно, отображается в КБ).
@param {number} [progress] - Прогресс загрузки в процентах (0-100).

@returns {JSX.Element} — Рендерит карточку файла с именем, размером, прогрессом и иконкой удаления.`,methods:[],displayName:"FFile",props:{id:{required:!1,tsType:{name:"string"},description:`Уникальный идентификатор элемента (HTML id).
@type {string | undefined}`},className:{required:!1,tsType:{name:"string"},description:`Дополнительный CSS-класс для кастомизации внешнего вида.
@type {string | undefined}`},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Инлайновые стили, применяемые к контейнеру файла.
@type {React.CSSProperties | undefined}`},handleDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Функция-обработчик удаления файла.
Вызывается при нажатии на иконку "Удалить".
@type {() => void | undefined}`},name:{required:!0,tsType:{name:"string"},description:`Обязательное имя файла, отображается в интерфейсе.
@type {string}`},size:{required:!1,tsType:{name:"number"},description:`Размер файла в байтах. Отображается в КБ.
@type {number | undefined}`},progress:{required:!1,tsType:{name:"number"},description:`Прогресс загрузки файла в процентах (0-100).
@type {number | undefined}`}}};export{f as F};
