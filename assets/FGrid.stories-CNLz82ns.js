import{j as e}from"./jsx-runtime-DEdD30eg.js";import{F as i}from"./FGrid-Cf0t3TO0.js";import"./index-RYns6xqu.js";const h={title:"Components/LAYOUT/FGrid",tags:["autodocs"],component:i},v=s=>e.jsxs(i,{obj:"container",...s,children:[e.jsx(i,{obj:"item",...s,sm:8,md:8,lg:8,xl:8,xxl:8,children:e.jsx("div",{className:"item",children:"Item 1"})}),e.jsx(i,{obj:"item",...s,sm:4,md:4,lg:4,xl:4,xxl:4,children:e.jsx("div",{className:"item",children:"Item 2"})}),e.jsx(i,{obj:"item",...s,sm:4,md:4,lg:4,xl:4,xxl:4,children:e.jsx("div",{className:"item",children:"Item 3"})}),e.jsx(i,{obj:"item",...s,sm:8,md:8,lg:8,xl:8,xxl:8,children:e.jsx("div",{className:"item",children:"Item 1"})})]}),l=v.bind({});l.args={id:"grid-id",className:"grid-className",st:{marginTop:"20px"}};const F=s=>e.jsxs(i,{obj:"container",children:[e.jsx(i,{obj:"item",sm:2,md:2,lg:2,xl:2,xxl:2,children:e.jsx("div",{className:"item",children:"1 of 3"})}),e.jsx(i,{obj:"item",...s,children:e.jsx("div",{className:"item",children:"Содержание переменной ширины"})}),e.jsx(i,{obj:"item",sm:5,md:5,lg:5,xl:5,xxl:5,children:e.jsx("div",{className:"item",children:"3 of 3"})})]}),d=F.bind({});d.args={sm:1,md:1,lg:1,xl:1,xxl:1};const b=s=>e.jsxs(i,{obj:"container",children:[e.jsx(i,{obj:"item",sm:2,md:2,lg:2,xl:2,xxl:2,children:e.jsx("div",{className:"item",children:"1 of 3"})}),e.jsx(i,{obj:"item",...s,children:e.jsx("div",{className:"item",children:"Содержание переменной ширины"})}),e.jsx(i,{obj:"item",sm:5,md:5,lg:5,xl:5,xxl:5,children:e.jsx("div",{className:"item",children:"3 of 3"})})]}),m=b.bind({});m.argTypes={colAuto:{options:["col-sm-auto","col-md-auto","col-lg-auto","col-xl-auto","col-xxl-auto"],control:{type:"select"}}};m.args={colAuto:"col-sm-auto"};var r,o,t;l.parameters={...l.parameters,docs:{...(r=l.parameters)==null?void 0:r.docs,source:{originalSource:`args => <FGrid obj={'container'} {...args}>
    <FGrid obj={'item'} {...args} sm={8} md={8} lg={8} xl={8} xxl={8}>
      <div className={'item'}>Item 1</div>
    </FGrid>
    <FGrid obj={'item'} {...args} sm={4} md={4} lg={4} xl={4} xxl={4}>
      <div className={'item'}>Item 2</div>
    </FGrid>
    <FGrid obj={'item'} {...args} sm={4} md={4} lg={4} xl={4} xxl={4}>
      <div className={'item'}>Item 3</div>
    </FGrid>
    <FGrid obj={'item'} {...args} sm={8} md={8} lg={8} xl={8} xxl={8}>
      <div className={'item'}>Item 1</div>
    </FGrid>
  </FGrid>`,...(t=(o=l.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var a,n,c;d.parameters={...d.parameters,docs:{...(a=d.parameters)==null?void 0:a.docs,source:{originalSource:`args => <FGrid obj={'container'}>
    <FGrid obj={'item'} sm={2} md={2} lg={2} xl={2} xxl={2}>
      <div className={'item'}>1 of 3</div>
    </FGrid>
    <FGrid obj={'item'} {...args}>
      <div className={'item'}>Содержание переменной ширины</div>
    </FGrid>
    <FGrid obj={'item'} sm={5} md={5} lg={5} xl={5} xxl={5}>
      <div className={'item'}>3 of 3</div>
    </FGrid>
  </FGrid>`,...(c=(n=d.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var x,j,g;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`args => <FGrid obj={'container'}>
    <FGrid obj={'item'} sm={2} md={2} lg={2} xl={2} xxl={2}>
      <div className={'item'}>1 of 3</div>
    </FGrid>
    <FGrid obj={'item'} {...args}>
      <div className={'item'}>Содержание переменной ширины</div>
    </FGrid>
    <FGrid obj={'item'} sm={5} md={5} lg={5} xl={5} xxl={5}>
      <div className={'item'}>3 of 3</div>
    </FGrid>
  </FGrid>`,...(g=(j=m.parameters)==null?void 0:j.docs)==null?void 0:g.source}}};const N=["Default","Col","ColAuto"];export{d as Col,m as ColAuto,l as Default,N as __namedExportsOrder,h as default};
