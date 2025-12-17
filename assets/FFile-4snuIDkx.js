import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{F as l}from"./FTrashIcon-CD7BhDB1.js";const d="_progressBar_1xp9s_48",m="_completed_1xp9s_60",c="_progress_1xp9s_48",r={"file-preview-card":"_file-preview-card_1xp9s_1","file-preview-info":"_file-preview-info_1xp9s_22","file-preview-name":"_file-preview-name_1xp9s_28","file-preview-size":"_file-preview-size_1xp9s_36","trash-icon":"_trash-icon_1xp9s_42",progressBar:d,completed:m,progress:c},f=({id:t,className:p,st:o,handleDelete:s,name:i,size:a,progress:n})=>e.jsxs("div",{className:`${r["file-preview-card"]} ${p||""}`,id:t,style:o,children:[e.jsxs("div",{className:r["file-preview-info"],children:[e.jsx("span",{className:r["file-preview-name"],title:i,children:i}),typeof a=="number"&&e.jsxs("span",{className:r["file-preview-size"],children:[Math.round(a/1024)," КБ"]})]}),s&&e.jsx("div",{className:r["trash-icon"],children:e.jsx(l,{size:20,color:"danger",handleClick:s})}),typeof n=="number"&&e.jsx("div",{className:`${r.progressBar} ${n===100?r.completed:""}`,children:e.jsx("div",{className:r.progress,style:{width:`${n}%`}})})]});f.__docgenInfo={description:`Компонент \`FFile\` — отображает карточку одного файла с возможностью удаления\r
и индикатором прогресса загрузки.\r
\r
Используется в связке с \`FButtonFile\` или другими компонентами,\r
где нужно показать загруженный файл с именем, размером и кнопкой удаления.\r
\r
@component\r
@example\r
<FFile\r
  name="report.pdf"\r
  size={20480} // 20 КБ\r
  progress={75} // 75% загружено\r
  handleDelete={() => console.log('Файл удален')}\r
/>\r
\r
@example\r
// С пользовательским классом и стилем\r
<FFile\r
  name="photo.jpg"\r
  size={987654} // ~964 КБ\r
  className="custom-file-card"\r
  st={{ margin: '1rem 0' }}\r
/>\r
\r
@param {string} [id] - ID элемента.\r
@param {string} [className] - Пользовательский CSS-класс.\r
@param {React.CSSProperties} [st] - Инлайновые стили.\r
@param {() => void} [handleDelete] - Callback при клике на удаление.\r
@param {string} name - Имя файла (обязательное).\r
@param {number} [size] - Размер файла в байтах (необязательно, отображается в КБ).\r
@param {number} [progress] - Прогресс загрузки в процентах (0-100).\r
\r
@returns {JSX.Element} — Рендерит карточку файла с именем, размером, прогрессом и иконкой удаления.`,methods:[],displayName:"FFile",props:{id:{required:!1,tsType:{name:"string"},description:`Уникальный идентификатор элемента (HTML id).\r
@type {string | undefined}`},className:{required:!1,tsType:{name:"string"},description:`Дополнительный CSS-класс для кастомизации внешнего вида.\r
@type {string | undefined}`},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Инлайновые стили, применяемые к контейнеру файла.\r
@type {React.CSSProperties | undefined}`},handleDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Функция-обработчик удаления файла.\r
Вызывается при нажатии на иконку "Удалить".\r
@type {() => void | undefined}`},name:{required:!0,tsType:{name:"string"},description:`Обязательное имя файла, отображается в интерфейсе.\r
@type {string}`},size:{required:!1,tsType:{name:"number"},description:`Размер файла в байтах. Отображается в КБ.\r
@type {number | undefined}`},progress:{required:!1,tsType:{name:"number"},description:`Прогресс загрузки файла в процентах (0-100).\r
@type {number | undefined}`}}};export{f as F};
