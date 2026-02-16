import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as i}from"./index-DEgj3Fem.js";import{f as a}from"./fGenerateUniqueId-BDtj4-Pu.js";import{F as c}from"./FButton-DQOEJPUH.js";const f={title:"DopFunction/fGenerateUniqueId",parameters:{docs:{description:{component:"Генерирует уникальный идентификатор (строку)."}}}},r=()=>{const[s,d]=i.useState("");return e.jsxs("div",{children:[e.jsx(c,{onClick:()=>d(a()),children:"Сгенерировать ID"}),e.jsxs("div",{style:{marginTop:12},children:[e.jsx("b",{children:"Результат:"})," ",e.jsx("code",{children:s})]})]})};r.__docgenInfo={description:"",methods:[],displayName:"Playground"};var n,t,o;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const [id, setId] = React.useState<string>("");
  return <div>\r
      <FButton onClick={() => setId(fGenerateUniqueId())}>\r
        Сгенерировать ID\r
      </FButton>\r
      <div style={{
      marginTop: 12
    }}>\r
        <b>Результат:</b> <code>{id}</code>\r
      </div>\r
    </div>;
}`,...(o=(t=r.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const I=["Playground"];export{r as Playground,I as __namedExportsOrder,f as default};
