import{j as f}from"./jsx-runtime-Cf8x2fCZ.js";import{r as b}from"./index-DY-snNUy.js";import{F as l}from"./FCheckbox-0HygKZ_H.js";import"./index-yBjzXJbu.js";const y={title:"Material/FCheckbox",component:l,argTypes:{label:{control:{type:"text"},defaultValue:"Согласен с условиями"},checked:{control:{type:"boolean"}},defaultChecked:{control:{type:"boolean"},defaultValue:!1},disabled:{control:{type:"boolean"}}}},e=({label:n,checked:t,defaultChecked:a,disabled:c})=>{const[i,p]=b.useState(t??a??!1),o=t!==void 0;return f.jsx(l,{label:n,checked:o?t:i,defaultChecked:a,disabled:c,onChange:u=>{o||p(u.target.checked)}})};e.args={label:"Согласен с условиями",defaultChecked:!1,disabled:!1};e.__docgenInfo={description:"",methods:[],displayName:"Playground",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:""},defaultChecked:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};var s,d,r;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
  label,
  checked,
  defaultChecked,
  disabled
}: PlaygroundProps) => {
  const [state, setState] = useState(checked ?? defaultChecked ?? false);
  const isControlled = checked !== undefined;
  return <FCheckbox label={label} checked={isControlled ? checked : state} defaultChecked={defaultChecked} disabled={disabled} onChange={e => {
    if (!isControlled) setState(e.target.checked);
  }} />;
}`,...(r=(d=e.parameters)==null?void 0:d.docs)==null?void 0:r.source}}};const g=["Playground"];export{e as Playground,g as __namedExportsOrder,y as default};
