import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as b}from"./index-B3j06Xw8.js";import{F as r}from"./FFile-BDXU6Ifc.js";import"./FTrashIcon-DpmD7QBY.js";const N={title:"Material/FFile",component:r,argTypes:{name:{control:{type:"text"},defaultValue:"Документ.pdf"},size:{control:{type:"number",min:0,max:10*1024*1024},defaultValue:1024*120},className:{control:{type:"text"}},st:{control:{type:"object"}}}},s=({name:y,size:x,className:g,st:z})=>{const[F,i]=b.useState(!0);return F?e.jsx(r,{name:y,size:x,className:g,st:z,handleDelete:()=>i(!1),progress:10}):e.jsx("button",{onClick:()=>i(!0),children:"Восстановить файл"})};s.args={name:"Документ.pdf",size:1024*120};const t=()=>e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx(r,{name:"Маленький.txt",size:512}),e.jsx(r,{name:"Средний.docx",size:1024*200}),e.jsx(r,{name:"Большой_архив.zip",size:1024*1024*5})]}),a=()=>e.jsx(r,{name:"С кастомным классом",className:"my-file-class"});s.__docgenInfo={description:"",methods:[],displayName:"Playground",props:{name:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"number"},description:""},className:{required:!1,tsType:{name:"string"},description:""},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};t.__docgenInfo={description:"",methods:[],displayName:"DifferentSizes"};a.__docgenInfo={description:"",methods:[],displayName:"CustomClass"};var o,n,l;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`({
  name,
  size,
  className,
  st
}: PlaygroundProps) => {
  const [visible, setVisible] = useState(true);
  return visible ? <FFile name={name} size={size} className={className} st={st} handleDelete={() => setVisible(false)} progress={10} /> : <button onClick={() => setVisible(true)}>Восстановить файл</button>;
}`,...(l=(n=s.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var m,c,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  gap: 16
}}>\r
        <FFile name="Маленький.txt" size={512} />\r
        <FFile name="Средний.docx" size={1024 * 200} />\r
        <FFile name="Большой_архив.zip" size={1024 * 1024 * 5} />\r
    </div>`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,u,f;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:'() => <FFile name="С кастомным классом" className="my-file-class" />',...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const h=["Playground","DifferentSizes","CustomClass"];export{a as CustomClass,t as DifferentSizes,s as Playground,h as __namedExportsOrder,N as default};
