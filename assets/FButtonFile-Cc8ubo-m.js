import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-DEgj3Fem.js";import{F as j}from"./FButton-DQOEJPUH.js";import{F as k}from"./FFile-BHJQGV29.js";const m={"f-button-file":"_f-button-file_i2hex_1","file-preview-list":"_file-preview-list_i2hex_1"},P=({children:g,variant:F="contained",color:b="primary",size:h="btn-sm",disabled:p,st:c,className:w,fullWidth:T,id:R,onChange:i,multiple:x=!1,accept:S,direction:q="row",required:C})=>{const l=u.useRef(null),[s,d]=u.useState([]),[B,f]=u.useState({}),y=T?{...c,width:"100%"}:c,N=e=>{if(!e.target.files||e.target.files.length===0)return;const a=Array.from(e.target.files);d(r=>[...r,...a]),i([...a]),a.forEach(r=>{let n=0;const v=setInterval(()=>{n+=10,f(o=>({...o,[r.name]:n})),n>=100&&clearInterval(v)},200)})},_=e=>{d(r=>{const n=r.filter((v,o)=>o!==e);return n.length===0?(i(null),l.current&&(l.current.value="")):i(n),n});const a=s[e].name;f(r=>{const n={...r};return delete n[a],n})};return t.jsxs("div",{className:m["f-button-file"],style:y,children:[t.jsx(j,{variant:F,color:b,size:h,disabled:p,className:w,style:y,id:R,onClick:()=>{var e;return(e=l.current)==null?void 0:e.click()},children:g}),t.jsx("input",{ref:l,type:"file",style:{display:"none"},multiple:x,accept:S,onChange:N,disabled:p,required:C}),s.length>0&&t.jsx("div",{className:m["custom-files-preview"],id:"files",style:{marginTop:"16px"},children:t.jsx("div",{className:m["file-preview-list"],style:{flexDirection:q},children:s.map((e,a)=>t.jsx(k,{name:e.name,size:e.size,handleDelete:()=>_(a),progress:B[e.name]},a))})})]})};P.__docgenInfo={description:`Компонент \`FButtonFile\` — кнопка для выбора файла(ов), которая:\r
- оборачивает стандартный \`<input type="file">\`\r
- предоставляет предпросмотр файлов\r
- поддерживает удаление загруженных файлов\r
- интегрирована с \`FButton\` и \`FTrashIcon\`\r
\r
@component\r
@example\r
<FButtonFile\r
  variant="contained"\r
  color="primary"\r
  multiple={true}\r
  onChange={(files) => console.log(files)}\r
>\r
  Загрузить файлы\r
</FButtonFile>\r
\r
@example\r
// Только изображения\r
<FButtonFile\r
  variant="default"\r
  color="secondary"\r
  accept="image/*"\r
  onChange={(files) => files && alert(\`\${files.length} файл(ов) загружено\`)}\r
/>\r
\r
@param {React.ReactNode} [children] - Контент кнопки.\r
@param {ButtonVariantType} [variant='contained'] - Вариант кнопки.\r
@param {ButtonColorType} [color='primary'] - Цвет кнопки.\r
@param {ButtonSizeType} [size='btn-sm'] - Размер кнопки.\r
@param {boolean} [disabled=false] - Блокировка кнопки.\r
@param {React.CSSProperties} [st] - Инлайновые стили.\r
@param {string} [className] - Дополнительный CSS-класс.\r
@param {boolean} [fullWidth=false] - Настройка ширины.\r
@param {string} [id] - ID элемента.\r
@param {boolean} [multiple=false] - Поддержка множественного выбора.\r
@param {string} [accept] - Фильтр допустимых форматов.\r
@param {FlexDirectionType} [direction='row'] - Расположение файлов.\r
@param {Function} onChange - Callback с массивом файлов.`,methods:[],displayName:"FButtonFile",props:{children:{required:!1,tsType:{name:"union",raw:"React.ReactElement | React.ReactNode",elements:[{name:"ReactReactElement",raw:"React.ReactElement"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:`Дочерние элементы, отображаемые внутри кнопки.\r
@type {React.ReactNode}`},variant:{required:!1,tsType:{name:"union",raw:"'contained' | 'default'",elements:[{name:"literal",value:"'contained'"},{name:"literal",value:"'default'"}]},description:"Вариант кнопки: заполненный (`contained`) или контурный (`default`).\r\n@type {ButtonVariantType}\r\n@default contained",defaultValue:{value:"'contained'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'link'"}]},description:`Цветовая схема кнопки.\r
@type {ButtonColorType}\r
@default primary`,defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'btn-lg' | 'btn-sm' | 'btn-xs'",elements:[{name:"literal",value:"'btn-lg'"},{name:"literal",value:"'btn-sm'"},{name:"literal",value:"'btn-xs'"}]},description:`Размер кнопки.\r
@type {ButtonSizeType}\r
@default btn-sm`,defaultValue:{value:"'btn-sm'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`Флаг блокировки кнопки и поля ввода файла.\r
@type {boolean}`},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Дополнительные инлайновые стили для контейнера.\r
@type {React.CSSProperties}`},className:{required:!1,tsType:{name:"string"},description:`Пользовательский CSS-класс.\r
@type {string}`},fullWidth:{required:!1,tsType:{name:"boolean"},description:`Флаг, указывающий, должно ли поле занимать всю ширину.\r
@type {boolean}`},id:{required:!1,tsType:{name:"string"},description:`Уникальный идентификатор элемента.\r
@type {string}`},required:{required:!1,tsType:{name:"boolean"},description:`Обязательное поле (HTML5 required).\r
@type {boolean}`},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(file: File[] | null) => void",signature:{arguments:[{type:{name:"union",raw:"File[] | null",elements:[{name:"Array",elements:[{name:"File"}],raw:"File[]"},{name:"null"}]},name:"file"}],return:{name:"void"}}},description:"Callback, вызываемый при выборе файла(ов).\r\n@param {File[] | null} file - Массив выбранных файлов или `null`, если файлы удалены."},multiple:{required:!1,tsType:{name:"boolean"},description:`Разрешает выбор нескольких файлов.\r
@type {boolean}`,defaultValue:{value:"false",computed:!1}},accept:{required:!1,tsType:{name:"string"},description:"Список типов файлов, разрешённых к загрузке.\r\nНапример: `'image/*'`, `'application/pdf'`\r\n@type {string}"},direction:{required:!1,tsType:{name:"union",raw:"'row' | 'row-reverse' | 'column' | 'column-reverse'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'row-reverse'"},{name:"literal",value:"'column'"},{name:"literal",value:"'column-reverse'"}]},description:`Направление отображения предпросмотра файлов.\r
@type {FlexDirectionType}`,defaultValue:{value:"'row'",computed:!1}}}};export{P as F};
