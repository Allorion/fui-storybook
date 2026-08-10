import{j as f}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-B3j06Xw8.js";const y="_skeleton_1ojrt_1",d={"skeleton-block":"_skeleton-block_1ojrt_1",skeleton:y},g=({children:p,enable:l,width:u,height:m})=>{const a=i.useRef(null),o=i.useRef([]),s=i.useRef([]),h=n=>{const t=document.createElement("div");t.className=d.skeleton;const e=window.getComputedStyle(n);return t.style.width=u??e.width,t.style.height=m??e.height,t.style.borderRadius=e.borderRadius==="0px"?"10px":e.borderRadius,t.style.margin=e.margin,t.style.display=e.display||"block",t.style.position=e.position||"relative",t},k=()=>{const n=a.current;if(!n)return;const t=Array.from(n.children);o.current=[],s.current=[],t.forEach(e=>{const r=h(e);o.current.push(e),s.current.push(r),e.parentNode&&e.parentNode.replaceChild(r,e)})},c=()=>{a.current&&(o.current.forEach((t,e)=>{const r=s.current[e];r&&t&&r.parentNode&&r.parentNode.replaceChild(t,r)}),s.current=[],o.current=[])};return i.useEffect(()=>(l?k():c(),()=>{c()}),[l]),f.jsx("div",{ref:a,className:d["skeleton-block"],children:p})};g.__docgenInfo={description:`Компонент \`FSkeleton\` — временная заглушка вместо контента во время загрузки.\r
\r
@component\r
@example\r
<FSkeleton enable={loading} width="100%" height="20px">\r
  <div>Контент</div>\r
</FSkeleton>\r
\r
@param {ReactNode} children - Элементы, которые будут заменены на скелетон при \`enable={true}\`.\r
@param {boolean} enable - Включает режим скелетона.\r
@param {string} [width] - Кастомная ширина скелетона. По умолчанию — как у исходного элемента.\r
@param {string} [height] - Кастомная высота скелетона. По умолчанию — как у исходного элемента.\r
\r
@returns {JSX.Element} - Рендерит либо скелетон, либо оригинальный контент.`,methods:[],displayName:"FSkeleton",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Дочерние элементы, которые будут заменены на скелетон."},enable:{required:!0,tsType:{name:"boolean"},description:"Флаг включения скелетона (показывает загрузку)."},width:{required:!1,tsType:{name:"string"},description:`Кастомная ширина скелетона.\r
Если не указана — берётся из оригинального элемента.`},height:{required:!1,tsType:{name:"string"},description:`Кастомная высота скелетона.\r
Если не указана — берётся из оригинального элемента.`}}};export{g as F};
