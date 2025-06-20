import{j as f}from"./jsx-runtime-Cf8x2fCZ.js";import{r as i}from"./index-DY-snNUy.js";const y="_skeleton_1ojrt_1",d={"skeleton-block":"_skeleton-block_1ojrt_1",skeleton:y},g=({children:p,enable:l,width:u,height:m})=>{const a=i.useRef(null),o=i.useRef([]),s=i.useRef([]),h=r=>{const t=document.createElement("div");t.className=d.skeleton;const e=window.getComputedStyle(r);return t.style.width=u??e.width,t.style.height=m??e.height,t.style.borderRadius=e.borderRadius==="0px"?"10px":e.borderRadius,t.style.margin=e.margin,t.style.display=e.display||"block",t.style.position=e.position||"relative",t},k=()=>{const r=a.current;if(!r)return;const t=Array.from(r.children);o.current=[],s.current=[],t.forEach(e=>{const n=h(e);o.current.push(e),s.current.push(n),e.parentNode&&e.parentNode.replaceChild(n,e)})},c=()=>{a.current&&(o.current.forEach((t,e)=>{const n=s.current[e];n&&t&&n.parentNode&&n.parentNode.replaceChild(t,n)}),s.current=[],o.current=[])};return i.useEffect(()=>(l?k():c(),()=>{c()}),[l]),f.jsx("div",{ref:a,className:d["skeleton-block"],children:p})};g.__docgenInfo={description:`Компонент \`FSkeleton\` — временная заглушка вместо контента во время загрузки.

@component
@example
<FSkeleton enable={loading} width="100%" height="20px">
  <div>Контент</div>
</FSkeleton>

@param {ReactNode} children - Элементы, которые будут заменены на скелетон при \`enable={true}\`.
@param {boolean} enable - Включает режим скелетона.
@param {string} [width] - Кастомная ширина скелетона. По умолчанию — как у исходного элемента.
@param {string} [height] - Кастомная высота скелетона. По умолчанию — как у исходного элемента.

@returns {JSX.Element} - Рендерит либо скелетон, либо оригинальный контент.`,methods:[],displayName:"FSkeleton",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Дочерние элементы, которые будут заменены на скелетон."},enable:{required:!0,tsType:{name:"boolean"},description:"Флаг включения скелетона (показывает загрузку)."},width:{required:!1,tsType:{name:"string"},description:`Кастомная ширина скелетона.
Если не указана — берётся из оригинального элемента.`},height:{required:!1,tsType:{name:"string"},description:`Кастомная высота скелетона.
Если не указана — берётся из оригинального элемента.`}}};export{g as F};
