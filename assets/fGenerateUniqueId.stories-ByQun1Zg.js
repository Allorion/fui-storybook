import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{e as i}from"./index-DY-snNUy.js";import{f as a}from"./fGenerateUniqueId-BDtj4-Pu.js";import{F as c}from"./FButton-C6QFu6NS.js";import"./index-yBjzXJbu.js";const I={title:"DopFunction/fGenerateUniqueId",parameters:{docs:{description:{component:"Генерирует уникальный идентификатор (строку)."}}}},r=()=>{const[s,d]=i.useState("");return e.jsxs("div",{children:[e.jsx(c,{onClick:()=>d(a()),children:"Сгенерировать ID"}),e.jsxs("div",{style:{marginTop:12},children:[e.jsx("b",{children:"Результат:"})," ",e.jsx("code",{children:s})]})]})};r.__docgenInfo={description:"",methods:[],displayName:"Playground"};var n,t,o;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(o=(t=r.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const x=["Playground"];export{r as Playground,x as __namedExportsOrder,I as default};
