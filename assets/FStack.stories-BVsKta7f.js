import{j as l}from"./jsx-runtime-Cf8x2fCZ.js";import{r as y,e as x}from"./index-DY-snNUy.js";import{F as c}from"./FStack-CaU3HVIe.js";import"./index-yBjzXJbu.js";const j={title:"Material/FStack",component:c,argTypes:{direction:{control:{type:"select"},options:["row","row-reverse","column","column-reverse"],defaultValue:"column"},spacing:{control:{type:"number",min:0,max:8},defaultValue:2},alignItems:{control:{type:"select"},options:["flex-start","center","flex-end","stretch","baseline",void 0]},justifyContent:{control:{type:"select"},options:["flex-start","center","flex-end","space-between","space-around","space-evenly",void 0]},wrap:{control:{type:"select"},options:["nowrap","wrap","wrap-reverse",void 0]},count:{control:{type:"number",min:1,max:12},defaultValue:3}}},g={background:"#e3f2fd",border:"1px solid #90caf9",borderRadius:4,padding:"12px 20px",color:"#1565c0",fontWeight:500,fontSize:16},e=({direction:m,spacing:p,alignItems:u,justifyContent:d,wrap:n,count:r})=>{const[f,v]=y.useState(Array.from({length:r??3},(t,a)=>a+1));return x.useEffect(()=>{v(Array.from({length:r??3},(t,a)=>a+1))},[r]),l.jsx(c,{direction:m,spacing:p,alignItems:u,justifyContent:d,wrap:n,st:{minHeight:80,maxWidth:n?350:void 0,border:n?"1px dashed #90caf9":void 0},children:f.map(t=>l.jsx("div",{style:{...g,minWidth:80,marginBottom:n?4:0},children:`Box ${t}`},t))})};e.args={direction:"row",spacing:2,alignItems:"center",justifyContent:"center",wrap:"wrap",count:5};e.__docgenInfo={description:"",methods:[],displayName:"Playground",props:{direction:{required:!1,tsType:{name:"union",raw:"'row' | 'row-reverse' | 'column' | 'column-reverse'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'row-reverse'"},{name:"literal",value:"'column'"},{name:"literal",value:"'column-reverse'"}]},description:""},spacing:{required:!1,tsType:{name:"number"},description:""},alignItems:{required:!1,tsType:{name:"union",raw:"'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'",elements:[{name:"literal",value:"'flex-start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'flex-end'"},{name:"literal",value:"'stretch'"},{name:"literal",value:"'baseline'"}]},description:""},justifyContent:{required:!1,tsType:{name:"union",raw:"'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'",elements:[{name:"literal",value:"'flex-start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'flex-end'"},{name:"literal",value:"'space-between'"},{name:"literal",value:"'space-around'"},{name:"literal",value:"'space-evenly'"}]},description:""},wrap:{required:!1,tsType:{name:"union",raw:"'nowrap' | 'wrap' | 'wrap-reverse'",elements:[{name:"literal",value:"'nowrap'"},{name:"literal",value:"'wrap'"},{name:"literal",value:"'wrap-reverse'"}]},description:""},count:{required:!1,tsType:{name:"number"},description:""}}};var s,o,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
  direction,
  spacing,
  alignItems,
  justifyContent,
  wrap,
  count
}: PlaygroundProps) => {
  const [elements, setElements] = useState(Array.from({
    length: count ?? 3
  }, (_, i) => i + 1));
  React.useEffect(() => {
    setElements(Array.from({
      length: count ?? 3
    }, (_, i) => i + 1));
  }, [count]);
  return <FStack direction={direction} spacing={spacing} alignItems={alignItems} justifyContent={justifyContent} wrap={wrap} st={{
    minHeight: 80,
    maxWidth: wrap ? 350 : undefined,
    border: wrap ? '1px dashed #90caf9' : undefined
  }}>\r
            {elements.map(n => <div key={n} style={{
      ...boxStyle,
      minWidth: 80,
      marginBottom: wrap ? 4 : 0
    }}>\r
                    {\`Box \${n}\`}\r
                </div>)}\r
        </FStack>;
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const _=["Playground"];export{e as Playground,_ as __namedExportsOrder,j as default};
