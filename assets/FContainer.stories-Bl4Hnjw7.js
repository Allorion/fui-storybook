import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{F as r}from"./FContainer-BatpkT-f.js";import"./index-yBjzXJbu.js";const y={title:"Material/FContainer",component:r,argTypes:{maxWidth:{control:{type:"select"},options:["container-xs","container-sm","container-md","container-lg","container-xl","container-xxl","container-fluid"],defaultValue:"container-xs"},className:{control:{type:"text"}},st:{control:{type:"object"}},children:{control:{type:"text"},defaultValue:"Контент внутри контейнера"}}},e=({maxWidth:n,className:m,st:p,children:x})=>a.jsx(r,{maxWidth:n,className:m,st:p,children:a.jsx("div",{style:{background:"#e3f2fd",borderRadius:8,padding:24,textAlign:"center",color:"#1565c0",fontWeight:500},children:x})});e.args={maxWidth:"container-md",children:"Контент внутри контейнера",st:{marginTop:32,marginBottom:32}};const t=()=>a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:["container-xs","container-sm","container-md","container-lg","container-xl","container-xxl","container-fluid"].map(n=>a.jsx(r,{maxWidth:n,st:{marginBottom:8},children:a.jsx("div",{style:{background:"#fffde7",borderRadius:8,padding:20,textAlign:"center",color:"#b28704",fontWeight:500},children:n})},n))});e.__docgenInfo={description:"",methods:[],displayName:"Playground",props:{maxWidth:{required:!1,tsType:{name:"union",raw:`| 'container-xs'
| 'container-sm'
| 'container-md'
| 'container-lg'
| 'container-xl'
| 'container-xxl'
| 'container-fluid'`,elements:[{name:"literal",value:"'container-xs'"},{name:"literal",value:"'container-sm'"},{name:"literal",value:"'container-md'"},{name:"literal",value:"'container-lg'"},{name:"literal",value:"'container-xl'"},{name:"literal",value:"'container-xxl'"},{name:"literal",value:"'container-fluid'"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};t.__docgenInfo={description:"",methods:[],displayName:"AllSizes"};var i,o,s;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`({
  maxWidth,
  className,
  st,
  children
}: PlaygroundProps) => <FContainer maxWidth={maxWidth} className={className} st={st}>
        <div style={{
    background: '#e3f2fd',
    borderRadius: 8,
    padding: 24,
    textAlign: 'center',
    color: '#1565c0',
    fontWeight: 500
  }}>
            {children}
        </div>
    </FContainer>`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var l,c,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: 24
}}>
        {['container-xs', 'container-sm', 'container-md', 'container-lg', 'container-xl', 'container-xxl', 'container-fluid'].map(size => <FContainer key={size} maxWidth={size as PlaygroundProps['maxWidth']} st={{
    marginBottom: 8
  }}>
                <div style={{
      background: '#fffde7',
      borderRadius: 8,
      padding: 20,
      textAlign: 'center',
      color: '#b28704',
      fontWeight: 500
    }}>
                    {size}
                </div>
            </FContainer>)}
    </div>`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const h=["Playground","AllSizes"];export{t as AllSizes,e as Playground,h as __namedExportsOrder,y as default};
