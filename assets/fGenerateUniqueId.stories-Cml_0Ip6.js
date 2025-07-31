import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{e as i}from"./index-DY-snNUy.js";import{f as a}from"./fGenerateUniqueId-BDtj4-Pu.js";import{F as c}from"./FButton-CwfpvuGP.js";import"./index-yBjzXJbu.js";const I={title:"DopFunction/fGenerateUniqueId",parameters:{docs:{description:{component:"Генерирует уникальный идентификатор (строку)."}}}},n=()=>{const[s,d]=i.useState("");return e.jsxs("div",{children:[e.jsx(c,{onClick:()=>d(a()),children:"Сгенерировать ID"}),e.jsxs("div",{style:{marginTop:12},children:[e.jsx("b",{children:"Результат:"})," ",e.jsx("code",{children:s})]})]})};n.__docgenInfo={description:"",methods:[],displayName:"Playground"};var t,r,o;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  const [id, setId] = React.useState<string>("");
  return <div>
      <FButton onClick={() => setId(fGenerateUniqueId())}>
        Сгенерировать ID
      </FButton>
      <div style={{
      marginTop: 12
    }}>
        <b>Результат:</b> <code>{id}</code>
      </div>
    </div>;
}`,...(o=(r=n.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const x=["Playground"];export{n as Playground,x as __namedExportsOrder,I as default};
