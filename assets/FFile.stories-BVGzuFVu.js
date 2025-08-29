import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as b}from"./index-DY-snNUy.js";import{F as t}from"./FFile-BtYqhg3U.js";import"./index-yBjzXJbu.js";import"./FTrashIcon-Cxn1SHc6.js";const h={title:"Material/FFile",component:t,argTypes:{name:{control:{type:"text"},defaultValue:"Документ.pdf"},size:{control:{type:"number",min:0,max:10*1024*1024},defaultValue:1024*120},className:{control:{type:"text"}},st:{control:{type:"object"}}}},s=({name:y,size:x,className:g,st:z})=>{const[F,i]=b.useState(!0);return F?e.jsx(t,{name:y,size:x,className:g,st:z,handleDelete:()=>i(!1),progress:10}):e.jsx("button",{onClick:()=>i(!0),children:"Восстановить файл"})};s.args={name:"Документ.pdf",size:1024*120};const r=()=>e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx(t,{name:"Маленький.txt",size:512}),e.jsx(t,{name:"Средний.docx",size:1024*200}),e.jsx(t,{name:"Большой_архив.zip",size:1024*1024*5})]}),a=()=>e.jsx(t,{name:"С кастомным классом",className:"my-file-class"});s.__docgenInfo={description:"",methods:[],displayName:"Playground",props:{name:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"number"},description:""},className:{required:!1,tsType:{name:"string"},description:""},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};r.__docgenInfo={description:"",methods:[],displayName:"DifferentSizes"};a.__docgenInfo={description:"",methods:[],displayName:"CustomClass"};var o,n,l;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`({
  name,
  size,
  className,
  st
}: PlaygroundProps) => {
  const [visible, setVisible] = useState(true);
  return visible ? <FFile name={name} size={size} className={className} st={st} handleDelete={() => setVisible(false)} progress={10} /> : <button onClick={() => setVisible(true)}>Восстановить файл</button>;
}`,...(l=(n=s.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var m,c,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  gap: 16
}}>
        <FFile name="Маленький.txt" size={512} />
        <FFile name="Средний.docx" size={1024 * 200} />
        <FFile name="Большой_архив.zip" size={1024 * 1024 * 5} />
    </div>`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,u,f;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:'() => <FFile name="С кастомным классом" className="my-file-class" />',...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const P=["Playground","DifferentSizes","CustomClass"];export{a as CustomClass,r as DifferentSizes,s as Playground,P as __namedExportsOrder,h as default};
