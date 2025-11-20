import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{r as m}from"./index-DY-snNUy.js";import{F as H}from"./FFile-BtYqhg3U.js";const O="_container_6r9j2_1",a={container:O,"custom-file":"_custom-file_6r9j2_6","custom-file-input":"_custom-file-input_6r9j2_9","custom-file-dropzone":"_custom-file-dropzone_6r9j2_24","custom-file-label":"_custom-file-label_6r9j2_24","custom-files-preview":"_custom-files-preview_6r9j2_71"},J=({id:C,className:q,st:D,dataMaxSize:i,name:I,accept:u,multiple:S=!1,onChange:h,disabled:o=!1,deleteFile:T,title:$,required:L,onValidationError:c,showPreview:N=!0,maxFiles:y})=>{const v=m.useRef(null),[z,F]=m.useState(!1),[b,d]=m.useState([]),[P,j]=m.useState({}),[x,f]=m.useState([]),w=e=>{const r=[];return y&&e.length>y&&r.push(`Максимальное количество файлов: ${y}`),e.forEach(n=>{if(i){const t=i.dimension==="МБ"?i.size*1024*1024:i.size*1024;n.size>t&&r.push(`Файл ${n.name} превышает максимальный размер ${i.size} ${i.dimension}`)}if(u){const t=n.type,p=n.name.toLowerCase();u.split(",").map(l=>l.trim()).some(l=>{if(l.includes("/")){if(l.endsWith("/*")){const B=l.split("/")[0];return t.startsWith(`${B}/`)}return l===t}else return p.endsWith(l.toLowerCase())})||r.push(`Файл ${n.name} имеет недопустимый формат`)}}),r},R=e=>{if(!e.target.files)return;const r=Array.from(e.target.files),n=w(r);if(n.length>0){f(n),c==null||c(n);return}f([]),d(r);const t=new DataTransfer;r.forEach(p=>t.items.add(p)),h(t.files),r.forEach(p=>{let g=0;const _=setInterval(()=>{g+=10,j(l=>({...l,[p.name]:g})),g>=100&&clearInterval(_)},200)})},E=e=>{e.preventDefault(),F(!0)},A=e=>{e.preventDefault(),F(!1)},k=e=>{if(e.preventDefault(),F(!1),o)return;const r=Array.from(e.dataTransfer.files),n=w(r);if(n.length>0){f(n),c==null||c(n);return}f([]),d(r);const t=new DataTransfer;r.forEach(p=>t.items.add(p)),h(t.files)},W=e=>{d(n=>n.filter(t=>t.name!==e)),j(n=>{const t={...n};return delete t[e],t});const r=new DataTransfer;b.filter(n=>n.name!==e).forEach(n=>r.items.add(n)),h(r.files)};return m.useEffect(()=>{T&&v.current&&(v.current.value="",d([]),j({}))},[T]),s.jsxs("div",{className:a.container,children:[s.jsxs("div",{className:`${a["custom-file"]} ${a["custom-file-dropzone"]} ${z?a.dragging:""}`,style:D,onDragOver:E,onDragLeave:A,onDrop:k,children:[s.jsx("input",{required:L,accept:u,type:"file",className:`${a["custom-file-input"]} ${q||""}`,name:I,id:C,title:$,"data-max-size":i==null?void 0:i.size,multiple:S,onChange:R,disabled:o,ref:v}),s.jsxs("label",{htmlFor:C,className:a["custom-file-label"],style:o?{backgroundColor:"#F3F3F3",border:"1px dashed #C4C4C4"}:void 0,children:[s.jsxs("svg",{width:"30",height:"30",fill:"currentColor",viewBox:"0 0 16 16",children:[s.jsx("path",{"fill-rule":"evenodd",d:"M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708z"}),s.jsx("path",{d:"M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"})]}),s.jsx("br",{}),s.jsxs("span",{style:o?{color:"#C4C4C4"}:void 0,children:[s.jsx("b",{style:o?{color:"#888888"}:void 0,children:"Выберите"})," или перетащите файл для загрузки",s.jsx("br",{}),u!==void 0?s.jsxs(s.Fragment,{children:["Разрешается загрузить файлы с форматом: ",s.jsx("b",{style:o?{color:"#888888"}:void 0,children:u}),s.jsx("br",{})]}):"Разрешается загрузить любой формат файлов",i&&s.jsxs("small",{children:["Максимальный размер ",i.size," ",i.dimension]})]})]})]}),x.length>0&&s.jsx("div",{className:a.errors,children:x.map((e,r)=>s.jsx("div",{className:a.error,children:e},r))}),N&&b.length>0&&s.jsx("div",{className:a["custom-files-preview"],children:b.map((e,r)=>s.jsx("div",{className:a.fileItem,children:s.jsx(H,{name:e.name,size:e.size,progress:P[e.name],handleDelete:o?void 0:()=>W(e.name)})},r))})]})};J.__docgenInfo={description:`Компонент \`FInputFileForm\` — кастомная зона загрузки файлов с поддержкой:
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
