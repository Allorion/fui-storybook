import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{F as r}from"./FTooltip-CCrWwCPn.js";import{F as s}from"./FButton-DQOEJPUH.js";import"./index-DEgj3Fem.js";import"./index-BknSE3li.js";import"./index-DM3MU96Y.js";const y={title:"Material/FTooltip",component:r,argTypes:{title:{control:{type:"text"},defaultValue:"Подсказка"},placement:{control:{type:"radio"},options:["top","bottom","left","right"],defaultValue:"bottom"},arrow:{control:{type:"boolean"},defaultValue:!1},open:{control:{type:"boolean"}},disableHoverListener:{control:{type:"boolean"},defaultValue:!1},disableFocusListener:{control:{type:"boolean"},defaultValue:!1},disableTouchListener:{control:{type:"boolean"},defaultValue:!1},enterDelay:{control:{type:"number"},defaultValue:0},leaveDelay:{control:{type:"number"},defaultValue:0},className:{control:{type:"text"}},style:{control:{type:"object"}}}},i=n=>t.jsx("div",{style:{padding:80,display:"flex",justifyContent:"center"},children:t.jsx(r,{...n,children:t.jsx(s,{children:"Наведи на меня"})})}),e=i.bind({});e.args={title:"Это всплывающая подсказка",placement:"bottom",arrow:!1,enterDelay:0,disableHoverListener:!1,disableFocusListener:!1,disableTouchListener:!1};var o,l,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => <div style={{
  padding: 80,
  display: 'flex',
  justifyContent: 'center'
}}>\r
        <FTooltip {...args}>\r
            <FButton>Наведи на меня</FButton>\r
        </FTooltip>\r
    </div>`,...(a=(l=e.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const b=["Playground"];export{e as Playground,b as __namedExportsOrder,y as default};
