import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{r as m}from"./index-DY-snNUy.js";import{F as O}from"./FFile-CjATirsC.js";const W="_container_6r9j2_1",a={container:W,"custom-file":"_custom-file_6r9j2_6","custom-file-input":"_custom-file-input_6r9j2_9","custom-file-dropzone":"_custom-file-dropzone_6r9j2_24","custom-file-label":"_custom-file-label_6r9j2_24","svg-icon":"_svg-icon_6r9j2_35","icon-md":"_icon-md_6r9j2_49","custom-files-preview":"_custom-files-preview_6r9j2_71"},H=({id:T,className:w,st:D,dataMaxSize:i,name:I,accept:u,multiple:$=!1,onChange:y,disabled:o=!1,deleteFile:x,title:S,required:N,onValidationError:p,showPreview:P=!0,maxFiles:v})=>{const h=m.useRef(null),[z,F]=m.useState(!1),[j,d]=m.useState([]),[R,b]=m.useState({}),[C,f]=m.useState([]),q=e=>{const r=[];return v&&e.length>v&&r.push(`Максимальное количество файлов: ${v}`),e.forEach(n=>{if(i){const t=i.dimension==="МБ"?i.size*1024*1024:i.size*1024;n.size>t&&r.push(`Файл ${n.name} превышает максимальный размер ${i.size} ${i.dimension}`)}if(u){const t=n.type;u.split(",").map(l=>l.trim()).some(l=>{if(l.endsWith("/*")){const _=l.split("/")[0];return t.startsWith(`${_}/`)}return l===t})||r.push(`Файл ${n.name} имеет недопустимый формат`)}}),r},E=e=>{if(!e.target.files)return;const r=Array.from(e.target.files),n=q(r);if(n.length>0){f(n),p==null||p(n);return}f([]),d(r);const t=new DataTransfer;r.forEach(c=>t.items.add(c)),y(t.files),r.forEach(c=>{let g=0;const l=setInterval(()=>{g+=10,b(_=>({..._,[c.name]:g})),g>=100&&clearInterval(l)},200)})},L=e=>{e.preventDefault(),F(!0)},k=e=>{e.preventDefault(),F(!1)},A=e=>{if(e.preventDefault(),F(!1),o)return;const r=Array.from(e.dataTransfer.files),n=q(r);if(n.length>0){f(n),p==null||p(n);return}f([]),d(r);const t=new DataTransfer;r.forEach(c=>t.items.add(c)),y(t.files)},B=e=>{d(n=>n.filter(t=>t.name!==e)),b(n=>{const t={...n};return delete t[e],t});const r=new DataTransfer;j.filter(n=>n.name!==e).forEach(n=>r.items.add(n)),y(r.files)};return m.useEffect(()=>{x&&h.current&&(h.current.value="",d([]),b({}))},[x]),s.jsxs("div",{className:a.container,children:[s.jsxs("div",{className:`${a["custom-file"]} ${a["custom-file-dropzone"]} ${z?a.dragging:""}`,style:D,onDragOver:L,onDragLeave:k,onDrop:A,children:[s.jsx("input",{required:N,accept:u,type:"file",className:`${a["custom-file-input"]} ${w||""}`,name:I,id:T,title:S,"data-max-size":i==null?void 0:i.size,multiple:$,onChange:E,disabled:o,ref:h}),s.jsxs("label",{htmlFor:T,className:a["custom-file-label"],style:o?{backgroundColor:"#F3F3F3",border:"1px dashed #C4C4C4"}:void 0,children:[s.jsx("svg",{className:`${a["svg-icon"]} ${a["icon-md"]}`,focusable:"false",role:"img",viewBox:"0 0 36 35",style:o?{color:"#888888"}:void 0,children:s.jsx("path",{d:"M19.035 16.465a1.458 1.458 0 0 0-2.041 0l-4.376 4.229a1.459 1.459 0 1 0 2.013 2.1l1.91-1.852v8.225a1.458 1.458 0 1 0 2.917 0v-8.152l1.881 1.895a1.459 1.459 0 0 0 2.071 0 1.457 1.457 0 1 0 0-2.07 4.375 4.375 0 0 1 3.282-7.292h.145a1.458 1.458 0 0 0 1.459-1.167 5.833 5.833 0 0 1 11.433 0 1.458 1.458 0 0 0 1.458 1.167h.088a4.375 4.375 0 0 1 3.281 7.292 1.457 1.457 0 1 0 .131 2.07 1.458 1.458 0 0 0 1.563.235c.189-.085.357-.21.494-.366a7.292 7.292 0 0 0-4.491-12.06z"})}),s.jsx("br",{}),s.jsxs("span",{style:o?{color:"#C4C4C4"}:void 0,children:[s.jsx("b",{style:o?{color:"#888888"}:void 0,children:"Выберите"})," или перетащите файл для загрузки",s.jsx("br",{}),u!==void 0?s.jsxs(s.Fragment,{children:["Разрешается загрузить файлы с форматом: ",s.jsx("b",{style:o?{color:"#888888"}:void 0,children:u}),s.jsx("br",{})]}):"Разрешается загрузить любой формат файлов",i&&s.jsxs("small",{children:["Максимальный размер ",i.size," ",i.dimension]})]})]})]}),C.length>0&&s.jsx("div",{className:a.errors,children:C.map((e,r)=>s.jsx("div",{className:a.error,children:e},r))}),P&&j.length>0&&s.jsx("div",{className:a["custom-files-preview"],children:j.map((e,r)=>s.jsx("div",{className:a.fileItem,children:s.jsx(O,{name:e.name,size:e.size,progress:R[e.name],handleDelete:o?void 0:()=>B(e.name)})},r))})]})};H.__docgenInfo={description:`Компонент \`FInputFileForm\` — кастомная зона загрузки файлов с поддержкой:\r
- drag & drop\r
- ограничения по размеру\r
- отображения допустимых форматов\r
- темизации через CSS Modules\r
\r
@component\r
@example\r
<FInputFileForm\r
  multiple={true}\r
  accept="image/*"\r
  dataMaxSize={{ dimension: "МБ", size: 5 }}\r
  onChange={(files) => console.log(files)}\r
/>\r
\r
@example\r
// Отключённое состояние\r
<FInputFileForm\r
  disabled\r
  onChange={() => {}}\r
/>\r
\r
@param {string} [id] - ID элемента.\r
@param {string} [className] - Пользовательский класс.\r
@param {React.CSSProperties} [st] - Инлайновые стили.\r
@param {IMaxSize} [dataMaxSize] - Ограничение на размер файла.\r
@param {string} [accept] - Допустимые форматы.\r
@param {boolean} [multiple=false] - Множественная загрузка.\r
@param {Function} onChange - Обработчик изменения файлов.\r
@param {boolean} [disabled=false] - Блокировка поля.\r
@param {boolean} [deleteFile] - Очистка файла.\r
@param {string} [title] - HTML атрибут \`title\`.\r
@param {boolean} [required] - Флаг обязательности.\r
@param {Function} [onValidationError] - Обработчик ошибок валидации.\r
@param {boolean} [showPreview=true] - Показывать ли предварительный просмотр.\r
@param {number} [maxFiles] - Максимальное количество файлов для загрузки.\r
\r
@returns {JSX.Element} — Рендерит зону загрузки файлов с иконкой и текстом.`,methods:[],displayName:"FInputFileForm",props:{id:{required:!1,tsType:{name:"string"},description:`Уникальный идентификатор поля ввода.\r
@type {string | undefined}`},className:{required:!1,tsType:{name:"string"},description:`Дополнительный CSS-класс для кастомизации.\r
@type {string | undefined}`},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Инлайновые стили для контейнера.\r
@type {React.CSSProperties | undefined}`},dataMaxSize:{required:!1,tsType:{name:"IMaxSize"},description:`Ограничение на максимальный размер загружаемого файла.\r
@type {IMaxSize | undefined}`},name:{required:!1,tsType:{name:"string"},description:'Атрибут name у `<input type="file">`.\r\n@type {string | undefined}'},accept:{required:!1,tsType:{name:"string"},description:'Форматы файлов, разрешённые к загрузке.\r\nНапример: `"image/*"`, `"application/pdf"`, `"audio/*"`\r\n@type {string | undefined}'},multiple:{required:!1,tsType:{name:"boolean"},description:`Разрешить ли множественную загрузку.\r
@type {boolean | undefined}`,defaultValue:{value:"false",computed:!1}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(files: FileList) => void",signature:{arguments:[{type:{name:"FileList"},name:"files"}],return:{name:"void"}}},description:`Callback, вызываемый при изменении списка файлов.\r
@param {FileList} files - Список выбранных файлов.`},disabled:{required:!1,tsType:{name:"boolean"},description:`Заблокировать ли поле загрузки.\r
@type {boolean}`,defaultValue:{value:"false",computed:!1}},deleteFile:{required:!1,tsType:{name:"boolean"},description:`Сбросить выбранное значение (очистка инпута).\r
@type {boolean}`},title:{required:!1,tsType:{name:"string"},description:`Заголовок элемента input (title).\r
@type {string | undefined}`},required:{required:!1,tsType:{name:"boolean"},description:`Указывает, что поле обязательно для заполнения.\r
@type {boolean}`},onValidationError:{required:!1,tsType:{name:"signature",type:"function",raw:"(errors: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"errors"}],return:{name:"void"}}},description:`Callback, вызываемый при возникновении ошибок валидации.\r
@param {string[]} errors - Массив ошибок.`},showPreview:{required:!1,tsType:{name:"boolean"},description:`Показывать ли предварительный просмотр загруженных файлов.\r
@type {boolean}`,defaultValue:{value:"true",computed:!1}},maxFiles:{required:!1,tsType:{name:"number"},description:`Максимальное количество файлов для загрузки.\r
@type {number | undefined}`}}};export{H as F};
