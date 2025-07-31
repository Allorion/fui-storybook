import{j as l}from"./jsx-runtime-Cf8x2fCZ.js";import{r as u}from"./index-DY-snNUy.js";import{F as j}from"./FButton-CwfpvuGP.js";import{F as k}from"./FFile-D-P1EwbC.js";const m={"f-button-file":"_f-button-file_i2hex_1","file-preview-list":"_file-preview-list_i2hex_1"},P=({children:g,variant:F="contained",color:b="primary",size:h="btn-sm",disabled:p,st:c,className:w,fullWidth:T,id:R,onChange:i,multiple:x=!1,accept:S,direction:q="row",required:C})=>{const r=u.useRef(null),[s,d]=u.useState([]),[B,f]=u.useState({}),y=T?{...c,width:"100%"}:c,N=e=>{if(!e.target.files||e.target.files.length===0)return;const a=Array.from(e.target.files);d(t=>[...t,...a]),i([...a]),a.forEach(t=>{let n=0;const v=setInterval(()=>{n+=10,f(o=>({...o,[t.name]:n})),n>=100&&clearInterval(v)},200)})},_=e=>{d(t=>{const n=t.filter((v,o)=>o!==e);return n.length===0?(i(null),r.current&&(r.current.value="")):i(n),n});const a=s[e].name;f(t=>{const n={...t};return delete n[a],n})};return l.jsxs("div",{className:m["f-button-file"],style:y,children:[l.jsx(j,{variant:F,color:b,size:h,disabled:p,className:w,style:y,id:R,onClick:()=>{var e;return(e=r.current)==null?void 0:e.click()},children:g}),l.jsx("input",{ref:r,type:"file",style:{display:"none"},multiple:x,accept:S,onChange:N,disabled:p,required:C}),s.length>0&&l.jsx("div",{className:m["custom-files-preview"],id:"files",style:{marginTop:"16px"},children:l.jsx("div",{className:m["file-preview-list"],style:{flexDirection:q},children:s.map((e,a)=>l.jsx(k,{name:e.name,size:e.size,handleDelete:()=>_(a),progress:B[e.name]},a))})})]})};P.__docgenInfo={description:`Компонент \`FButtonFile\` — кнопка для выбора файла(ов), которая:
- оборачивает стандартный \`<input type="file">\`
- предоставляет предпросмотр файлов
- поддерживает удаление загруженных файлов
- интегрирована с \`FButton\` и \`FTrashIcon\`

@component
@example
<FButtonFile
  variant="contained"
  color="primary"
  multiple={true}
  onChange={(files) => console.log(files)}
>
  Загрузить файлы
</FButtonFile>

@example
// Только изображения
<FButtonFile
  variant="default"
  color="secondary"
  accept="image/*"
  onChange={(files) => files && alert(\`\${files.length} файл(ов) загружено\`)}
/>

@param {React.ReactNode} [children] - Контент кнопки.
@param {ButtonVariantType} [variant='contained'] - Вариант кнопки.
@param {ButtonColorType} [color='primary'] - Цвет кнопки.
@param {ButtonSizeType} [size='btn-sm'] - Размер кнопки.
@param {boolean} [disabled=false] - Блокировка кнопки.
@param {React.CSSProperties} [st] - Инлайновые стили.
@param {string} [className] - Дополнительный CSS-класс.
@param {boolean} [fullWidth=false] - Настройка ширины.
@param {string} [id] - ID элемента.
@param {boolean} [multiple=false] - Поддержка множественного выбора.
@param {string} [accept] - Фильтр допустимых форматов.
@param {FlexDirectionType} [direction='row'] - Расположение файлов.
@param {Function} onChange - Callback с массивом файлов.`,methods:[],displayName:"FButtonFile",props:{children:{required:!1,tsType:{name:"union",raw:"React.ReactElement | React.ReactNode",elements:[{name:"ReactReactElement",raw:"React.ReactElement"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:`Дочерние элементы, отображаемые внутри кнопки.
@type {React.ReactNode}`},variant:{required:!1,tsType:{name:"union",raw:"'contained' | 'default'",elements:[{name:"literal",value:"'contained'"},{name:"literal",value:"'default'"}]},description:"Вариант кнопки: заполненный (`contained`) или контурный (`default`).\n@type {ButtonVariantType}\n@default contained",defaultValue:{value:"'contained'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'link'"}]},description:`Цветовая схема кнопки.
@type {ButtonColorType}
@default primary`,defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'btn-lg' | 'btn-sm' | 'btn-xs'",elements:[{name:"literal",value:"'btn-lg'"},{name:"literal",value:"'btn-sm'"},{name:"literal",value:"'btn-xs'"}]},description:`Размер кнопки.
@type {ButtonSizeType}
@default btn-sm`,defaultValue:{value:"'btn-sm'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`Флаг блокировки кнопки и поля ввода файла.
@type {boolean}`},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Дополнительные инлайновые стили для контейнера.
@type {React.CSSProperties}`},className:{required:!1,tsType:{name:"string"},description:`Пользовательский CSS-класс.
@type {string}`},fullWidth:{required:!1,tsType:{name:"boolean"},description:`Флаг, указывающий, должно ли поле занимать всю ширину.
@type {boolean}`},id:{required:!1,tsType:{name:"string"},description:`Уникальный идентификатор элемента.
@type {string}`},required:{required:!1,tsType:{name:"boolean"},description:`Обязательное поле (HTML5 required).
@type {boolean}`},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(file: File[] | null) => void",signature:{arguments:[{type:{name:"union",raw:"File[] | null",elements:[{name:"Array",elements:[{name:"File"}],raw:"File[]"},{name:"null"}]},name:"file"}],return:{name:"void"}}},description:"Callback, вызываемый при выборе файла(ов).\n@param {File[] | null} file - Массив выбранных файлов или `null`, если файлы удалены."},multiple:{required:!1,tsType:{name:"boolean"},description:`Разрешает выбор нескольких файлов.
@type {boolean}`,defaultValue:{value:"false",computed:!1}},accept:{required:!1,tsType:{name:"string"},description:"Список типов файлов, разрешённых к загрузке.\nНапример: `'image/*'`, `'application/pdf'`\n@type {string}"},direction:{required:!1,tsType:{name:"union",raw:"'row' | 'row-reverse' | 'column' | 'column-reverse'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'row-reverse'"},{name:"literal",value:"'column'"},{name:"literal",value:"'column-reverse'"}]},description:`Направление отображения предпросмотра файлов.
@type {FlexDirectionType}`,defaultValue:{value:"'row'",computed:!1}}}};export{P as F};
