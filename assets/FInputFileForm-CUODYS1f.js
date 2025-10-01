import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as m}from"./index-DY-snNUy.js";import{F as O}from"./FFile-BtYqhg3U.js";const H="_container_6r9j2_1",a={container:H,"custom-file":"_custom-file_6r9j2_6","custom-file-input":"_custom-file-input_6r9j2_9","custom-file-dropzone":"_custom-file-dropzone_6r9j2_24","custom-file-label":"_custom-file-label_6r9j2_24","svg-icon":"_svg-icon_6r9j2_35","icon-md":"_icon-md_6r9j2_49","custom-files-preview":"_custom-files-preview_6r9j2_71"},J=({id:_,className:q,st:D,dataMaxSize:i,name:I,accept:u,multiple:$=!1,onChange:y,disabled:l=!1,deleteFile:T,title:S,required:N,onValidationError:p,showPreview:P=!0,maxFiles:v})=>{const h=m.useRef(null),[z,F]=m.useState(!1),[j,d]=m.useState([]),[L,b]=m.useState({}),[x,f]=m.useState([]),C=e=>{const s=[];return v&&e.length>v&&s.push(`Максимальное количество файлов: ${v}`),e.forEach(n=>{if(i){const t=i.dimension==="МБ"?i.size*1024*1024:i.size*1024;n.size>t&&s.push(`Файл ${n.name} превышает максимальный размер ${i.size} ${i.dimension}`)}if(u){const t=n.type,c=n.name.toLowerCase();u.split(",").map(o=>o.trim()).some(o=>{if(o.includes("/")){if(o.endsWith("/*")){const B=o.split("/")[0];return t.startsWith(`${B}/`)}return o===t}else return c.endsWith(o.toLowerCase())})||s.push(`Файл ${n.name} имеет недопустимый формат`)}}),s},R=e=>{if(!e.target.files)return;const s=Array.from(e.target.files),n=C(s);if(n.length>0){f(n),p==null||p(n);return}f([]),d(s);const t=new DataTransfer;s.forEach(c=>t.items.add(c)),y(t.files),s.forEach(c=>{let g=0;const w=setInterval(()=>{g+=10,b(o=>({...o,[c.name]:g})),g>=100&&clearInterval(w)},200)})},E=e=>{e.preventDefault(),F(!0)},k=e=>{e.preventDefault(),F(!1)},A=e=>{if(e.preventDefault(),F(!1),l)return;const s=Array.from(e.dataTransfer.files),n=C(s);if(n.length>0){f(n),p==null||p(n);return}f([]),d(s);const t=new DataTransfer;s.forEach(c=>t.items.add(c)),y(t.files)},W=e=>{d(n=>n.filter(t=>t.name!==e)),b(n=>{const t={...n};return delete t[e],t});const s=new DataTransfer;j.filter(n=>n.name!==e).forEach(n=>s.items.add(n)),y(s.files)};return m.useEffect(()=>{T&&h.current&&(h.current.value="",d([]),b({}))},[T]),r.jsxs("div",{className:a.container,children:[r.jsxs("div",{className:`${a["custom-file"]} ${a["custom-file-dropzone"]} ${z?a.dragging:""}`,style:D,onDragOver:E,onDragLeave:k,onDrop:A,children:[r.jsx("input",{required:N,accept:u,type:"file",className:`${a["custom-file-input"]} ${q||""}`,name:I,id:_,title:S,"data-max-size":i==null?void 0:i.size,multiple:$,onChange:R,disabled:l,ref:h}),r.jsxs("label",{htmlFor:_,className:a["custom-file-label"],style:l?{backgroundColor:"#F3F3F3",border:"1px dashed #C4C4C4"}:void 0,children:[r.jsx("svg",{className:`${a["svg-icon"]} ${a["icon-md"]}`,focusable:"false",role:"img",viewBox:"0 0 36 35",style:l?{color:"#888888"}:void 0,children:r.jsx("path",{d:"M19.035 16.465a1.458 1.458 0 0 0-2.041 0l-4.376 4.229a1.459 1.459 0 1 0 2.013 2.1l1.91-1.852v8.225a1.458 1.458 0 1 0 2.917 0v-8.152l1.881 1.895a1.459 1.459 0 0 0 2.071 0 1.457 1.457 0 1 0 0-2.07 4.375 4.375 0 0 1 3.282-7.292h.145a1.458 1.458 0 0 0 1.459-1.167 5.833 5.833 0 0 1 11.433 0 1.458 1.458 0 0 0 1.458 1.167h.088a4.375 4.375 0 0 1 3.281 7.292 1.457 1.457 0 1 0 .131 2.07 1.458 1.458 0 0 0 1.563.235c.189-.085.357-.21.494-.366a7.292 7.292 0 0 0-4.491-12.06z"})}),r.jsx("br",{}),r.jsxs("span",{style:l?{color:"#C4C4C4"}:void 0,children:[r.jsx("b",{style:l?{color:"#888888"}:void 0,children:"Выберите"})," или перетащите файл для загрузки",r.jsx("br",{}),u!==void 0?r.jsxs(r.Fragment,{children:["Разрешается загрузить файлы с форматом: ",r.jsx("b",{style:l?{color:"#888888"}:void 0,children:u}),r.jsx("br",{})]}):"Разрешается загрузить любой формат файлов",i&&r.jsxs("small",{children:["Максимальный размер ",i.size," ",i.dimension]})]})]})]}),x.length>0&&r.jsx("div",{className:a.errors,children:x.map((e,s)=>r.jsx("div",{className:a.error,children:e},s))}),P&&j.length>0&&r.jsx("div",{className:a["custom-files-preview"],children:j.map((e,s)=>r.jsx("div",{className:a.fileItem,children:r.jsx(O,{name:e.name,size:e.size,progress:L[e.name],handleDelete:l?void 0:()=>W(e.name)})},s))})]})};J.__docgenInfo={description:`Компонент \`FInputFileForm\` — кастомная зона загрузки файлов с поддержкой:
- drag & drop
- ограничения по размеру
- отображения допустимых форматов
- темизации через CSS Modules

@component
@example
<FInputFileForm
  multiple={true}
  accept="image/*"
  dataMaxSize={{ dimension: "МБ", size: 5 }}
  onChange={(files) => console.log(files)}
/>

@example
// Отключённое состояние
<FInputFileForm
  disabled
  onChange={() => {}}
/>

@param {string} [id] - ID элемента.
@param {string} [className] - Пользовательский класс.
@param {React.CSSProperties} [st] - Инлайновые стили.
@param {IMaxSize} [dataMaxSize] - Ограничение на размер файла.
@param {string} [accept] - Допустимые форматы.
@param {boolean} [multiple=false] - Множественная загрузка.
@param {Function} onChange - Обработчик изменения файлов.
@param {boolean} [disabled=false] - Блокировка поля.
@param {boolean} [deleteFile] - Очистка файла.
@param {string} [title] - HTML атрибут \`title\`.
@param {boolean} [required] - Флаг обязательности.
@param {Function} [onValidationError] - Обработчик ошибок валидации.
@param {boolean} [showPreview=true] - Показывать ли предварительный просмотр.
@param {number} [maxFiles] - Максимальное количество файлов для загрузки.

@returns {JSX.Element} — Рендерит зону загрузки файлов с иконкой и текстом.`,methods:[],displayName:"FInputFileForm",props:{id:{required:!1,tsType:{name:"string"},description:`Уникальный идентификатор поля ввода.
@type {string | undefined}`},className:{required:!1,tsType:{name:"string"},description:`Дополнительный CSS-класс для кастомизации.
@type {string | undefined}`},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Инлайновые стили для контейнера.
@type {React.CSSProperties | undefined}`},dataMaxSize:{required:!1,tsType:{name:"IMaxSize"},description:`Ограничение на максимальный размер загружаемого файла.
@type {IMaxSize | undefined}`},name:{required:!1,tsType:{name:"string"},description:'Атрибут name у `<input type="file">`.\n@type {string | undefined}'},accept:{required:!1,tsType:{name:"string"},description:'Форматы файлов, разрешённые к загрузке.\nНапример: `"image/*"`, `"application/pdf"`, `"audio/*"`\n@type {string | undefined}'},multiple:{required:!1,tsType:{name:"boolean"},description:`Разрешить ли множественную загрузку.
@type {boolean | undefined}`,defaultValue:{value:"false",computed:!1}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(files: FileList) => void",signature:{arguments:[{type:{name:"FileList"},name:"files"}],return:{name:"void"}}},description:`Callback, вызываемый при изменении списка файлов.
@param {FileList} files - Список выбранных файлов.`},disabled:{required:!1,tsType:{name:"boolean"},description:`Заблокировать ли поле загрузки.
@type {boolean}`,defaultValue:{value:"false",computed:!1}},deleteFile:{required:!1,tsType:{name:"boolean"},description:`Сбросить выбранное значение (очистка инпута).
@type {boolean}`},title:{required:!1,tsType:{name:"string"},description:`Заголовок элемента input (title).
@type {string | undefined}`},required:{required:!1,tsType:{name:"boolean"},description:`Указывает, что поле обязательно для заполнения.
@type {boolean}`},onValidationError:{required:!1,tsType:{name:"signature",type:"function",raw:"(errors: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"errors"}],return:{name:"void"}}},description:`Callback, вызываемый при возникновении ошибок валидации.
@param {string[]} errors - Массив ошибок.`},showPreview:{required:!1,tsType:{name:"boolean"},description:`Показывать ли предварительный просмотр загруженных файлов.
@type {boolean}`,defaultValue:{value:"true",computed:!1}},maxFiles:{required:!1,tsType:{name:"number"},description:`Максимальное количество файлов для загрузки.
@type {number | undefined}`}}};export{J as F};
