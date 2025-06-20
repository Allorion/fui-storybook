import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{F as o,a as n}from"./FTab-CcBvhxU_.js";import{r as v}from"./index-DY-snNUy.js";import"./index-yBjzXJbu.js";const j={title:"Material/FTabs",component:o,parameters:{controls:{expanded:!0}}},m=a=>{const[e,i]=v.useState("tab1");return t.jsxs(o,{orientation:a.orientation,children:[t.jsx(n,{active:e==="tab1",onClick:()=>i("tab1"),disabled:a.disabled,children:"Вкладка 1"}),t.jsx(n,{active:e==="tab2",onClick:()=>i("tab2"),disabled:a.disabled,children:"Вкладка 2"}),t.jsx(n,{active:e==="tab3",onClick:()=>i("tab3"),disabled:a.disabled,children:"Вкладка 3"})]})},r={render:a=>t.jsx(m,{...a}),args:{orientation:"horizontal"},argTypes:{orientation:{control:"select",options:["horizontal","vertical"],description:"Ориентация вкладок"}}},s={render:()=>{const[a,e]=v.useState("tab1");return t.jsxs(o,{children:[t.jsx(n,{active:a==="tab1",onClick:()=>e("tab1"),children:"Вкладка 1"}),t.jsx(n,{active:a==="tab2",onClick:()=>e("tab2"),disabled:!0,children:"Отключенная вкладка"}),t.jsx(n,{active:a==="tab3",onClick:()=>e("tab3"),children:"Вкладка 3"})]})}};var c,b,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <TabsPlayground {...args} />,
  args: {
    orientation: 'horizontal'
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Ориентация вкладок'
    }
  }
}`,...(d=(b=r.parameters)==null?void 0:b.docs)==null?void 0:d.source}}};var l,T,p;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState('tab1');
    return <FTabs>
                <FTab active={activeTab === 'tab1'} onClick={() => setActiveTab('tab1')}>
                    Вкладка 1
                </FTab>
                <FTab active={activeTab === 'tab2'} onClick={() => setActiveTab('tab2')} disabled>
                    Отключенная вкладка
                </FTab>
                <FTab active={activeTab === 'tab3'} onClick={() => setActiveTab('tab3')}>
                    Вкладка 3
                </FTab>
            </FTabs>;
  }
}`,...(p=(T=s.parameters)==null?void 0:T.docs)==null?void 0:p.source}}};const g=["Playground","DisabledTabs"];export{s as DisabledTabs,r as Playground,g as __namedExportsOrder,j as default};
