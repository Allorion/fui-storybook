import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./index-B3j06Xw8.js";import{F as H}from"./FFile-ALKQqT-R.js";const O="_container_qk7bc_1",a={container:O,"custom-file":"_custom-file_qk7bc_6","custom-file-input":"_custom-file-input_qk7bc_9","custom-file-dropzone":"_custom-file-dropzone_qk7bc_24","custom-file-label":"_custom-file-label_qk7bc_24","custom-files-preview":"_custom-files-preview_qk7bc_71"},J=({id:T,className:_,st:D,dataMaxSize:i,name:I,accept:u,multiple:S=!1,onChange:h,disabled:o=!1,deleteFile:q,title:$,required:L,onValidationError:p,showPreview:N=!0,maxFiles:y})=>{const v=m.useRef(null),[k,F]=m.useState(!1),[b,d]=m.useState([]),[z,C]=m.useState({}),[x,f]=m.useState([]),j=e=>{const s=[];return y&&e.length>y&&s.push(`Максимальное количество файлов: ${y}`),e.forEach(r=>{if(i){const t=i.dimension==="МБ"?i.size*1024*1024:i.size*1024;r.size>t&&s.push(`Файл ${r.name} превышает максимальный размер ${i.size} ${i.dimension}`)}if(u){const t=r.type,c=r.name.toLowerCase();u.split(",").map(l=>l.trim()).some(l=>{if(l.includes("/")){if(l.endsWith("/*")){const B=l.split("/")[0];return t.startsWith(`${B}/`)}return l===t}else return c.endsWith(l.toLowerCase())})||s.push(`Файл ${r.name} имеет недопустимый формат`)}}),s},P=e=>{if(!e.target.files)return;const s=Array.from(e.target.files),r=j(s);if(r.length>0){f(r),p==null||p(r);return}f([]),d(s);const t=new DataTransfer;s.forEach(c=>t.items.add(c)),h(t.files),s.forEach(c=>{let g=0;const w=setInterval(()=>{g+=10,C(l=>({...l,[c.name]:g})),g>=100&&clearInterval(w)},200)})},R=e=>{e.preventDefault(),F(!0)},E=e=>{e.preventDefault(),F(!1)},A=e=>{if(e.preventDefault(),F(!1),o)return;const s=Array.from(e.dataTransfer.files),r=j(s);if(r.length>0){f(r),p==null||p(r);return}f([]),d(s);const t=new DataTransfer;s.forEach(c=>t.items.add(c)),h(t.files)},W=e=>{d(r=>r.filter(t=>t.name!==e)),C(r=>{const t={...r};return delete t[e],t});const s=new DataTransfer;b.filter(r=>r.name!==e).forEach(r=>s.items.add(r)),h(s.files)};return m.useEffect(()=>{q&&v.current&&(v.current.value="",d([]),C({}))},[q]),n.jsxs("div",{className:a.container,children:[n.jsxs("div",{className:`${a["custom-file"]} ${a["custom-file-dropzone"]} ${k?a.dragging:""}`,style:D,onDragOver:R,onDragLeave:E,onDrop:A,children:[n.jsx("input",{required:L,accept:u,type:"file",className:`${a["custom-file-input"]} ${_||""}`,name:I,id:T,title:$,"data-max-size":i==null?void 0:i.size,multiple:S,onChange:P,disabled:o,ref:v}),n.jsxs("label",{htmlFor:T,className:a["custom-file-label"],style:o?{backgroundColor:"#F3F3F3",border:"1px dashed #C4C4C4"}:void 0,children:[n.jsxs("svg",{width:"30",height:"30",fill:"currentColor",viewBox:"0 0 16 16",children:[n.jsx("path",{"fill-rule":"evenodd",d:"M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708z"}),n.jsx("path",{d:"M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"})]}),n.jsx("br",{}),n.jsxs("span",{style:o?{color:"#C4C4C4"}:void 0,children:[n.jsx("b",{style:o?{color:"#888888"}:void 0,children:"Выберите"})," или перетащите файл для загрузки",n.jsx("br",{}),u!==void 0?n.jsxs(n.Fragment,{children:["Разрешается загрузить файлы с форматом: ",n.jsx("b",{style:o?{color:"#888888"}:void 0,children:u}),n.jsx("br",{})]}):"Разрешается загрузить любой формат файлов",i&&n.jsxs("small",{children:["Максимальный размер ",i.size," ",i.dimension]})]})]})]}),x.length>0&&n.jsx("div",{className:a.errors,children:x.map((e,s)=>n.jsx("div",{className:a.error,children:e},s))}),N&&b.length>0&&n.jsx("div",{className:a["custom-files-preview"],children:b.map((e,s)=>n.jsx("div",{className:a.fileItem,children:n.jsx(H,{name:e.name,size:e.size,progress:z[e.name],handleDelete:o?void 0:()=>W(e.name)})},s))})]})};J.__docgenInfo={description:`Компонент \`FInputFileForm\` — кастомная зона загрузки файлов с поддержкой:\r
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
@type {number | undefined}`}}};export{J as F};
