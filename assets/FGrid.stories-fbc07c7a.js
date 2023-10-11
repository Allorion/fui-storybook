import{j as r,a as e}from"./jsx-runtime-03b4ddbf.js";/* empty css                  */import{F as i}from"./FGrid-bad13094.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const I={title:"Components/LAYOUT/FGrid",tags:["autodocs"],component:i},b=m=>r(i,{obj:"container",...m,children:[e(i,{obj:"item",...m,sm:8,md:8,lg:8,xl:8,xxl:8,children:e("div",{className:"item",children:"Item 1"})}),e(i,{obj:"item",...m,sm:4,md:4,lg:4,xl:4,xxl:4,children:e("div",{className:"item",children:"Item 2"})}),e(i,{obj:"item",...m,sm:4,md:4,lg:4,xl:4,xxl:4,children:e("div",{className:"item",children:"Item 3"})}),e(i,{obj:"item",...m,sm:8,md:8,lg:8,xl:8,xxl:8,children:e("div",{className:"item",children:"Item 1"})})]}),s=b.bind({});s.args={id:"grid-id",className:"grid-className",st:{marginTop:"20px"}};const j=m=>r(i,{obj:"container",children:[e(i,{obj:"item",sm:2,md:2,lg:2,xl:2,xxl:2,children:e("div",{className:"item",children:"1 of 3"})}),e(i,{obj:"item",...m,children:e("div",{className:"item",children:"Содержание переменной ширины"})}),e(i,{obj:"item",sm:5,md:5,lg:5,xl:5,xxl:5,children:e("div",{className:"item",children:"3 of 3"})})]}),d=j.bind({});d.args={sm:1,md:1,lg:1,xl:1,xxl:1};const p=m=>r(i,{obj:"container",children:[e(i,{obj:"item",sm:2,md:2,lg:2,xl:2,xxl:2,children:e("div",{className:"item",children:"1 of 3"})}),e(i,{obj:"item",...m,children:e("div",{className:"item",children:"Содержание переменной ширины"})}),e(i,{obj:"item",sm:5,md:5,lg:5,xl:5,xxl:5,children:e("div",{className:"item",children:"3 of 3"})})]}),l=p.bind({});l.argTypes={colAuto:{options:["col-sm-auto","col-md-auto","col-lg-auto","col-xl-auto","col-xxl-auto"],control:{type:"select"}}};l.args={colAuto:"col-sm-auto"};var o,t,a;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`args => <FGrid obj={'container'} {...args}>
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
  </FGrid>`,...(a=(t=s.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};var n,c,x;d.parameters={...d.parameters,docs:{...(n=d.parameters)==null?void 0:n.docs,source:{originalSource:`args => <FGrid obj={'container'}>
    <FGrid obj={'item'} sm={2} md={2} lg={2} xl={2} xxl={2}>
      <div className={'item'}>1 of 3</div>
    </FGrid>
    <FGrid obj={'item'} {...args}>
      <div className={'item'}>Содержание переменной ширины</div>
    </FGrid>
    <FGrid obj={'item'} sm={5} md={5} lg={5} xl={5} xxl={5}>
      <div className={'item'}>3 of 3</div>
    </FGrid>
  </FGrid>`,...(x=(c=d.parameters)==null?void 0:c.docs)==null?void 0:x.source}}};var g,v,F;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`args => <FGrid obj={'container'}>
    <FGrid obj={'item'} sm={2} md={2} lg={2} xl={2} xxl={2}>
      <div className={'item'}>1 of 3</div>
    </FGrid>
    <FGrid obj={'item'} {...args}>
      <div className={'item'}>Содержание переменной ширины</div>
    </FGrid>
    <FGrid obj={'item'} sm={5} md={5} lg={5} xl={5} xxl={5}>
      <div className={'item'}>3 of 3</div>
    </FGrid>
  </FGrid>`,...(F=(v=l.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};const C=["Default","Col","ColAuto"];export{d as Col,l as ColAuto,s as Default,C as __namedExportsOrder,I as default};
//# sourceMappingURL=FGrid.stories-fbc07c7a.js.map
