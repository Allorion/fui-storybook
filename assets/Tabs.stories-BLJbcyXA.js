import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{F as o,a as r}from"./FTab-4EmqzD2P.js";import{r as v}from"./index-B3j06Xw8.js";const F={title:"Material/FTabs",component:o,parameters:{controls:{expanded:!0}}},u=a=>{const[e,i]=v.useState("tab1");return t.jsxs(o,{orientation:a.orientation,children:[t.jsx(r,{active:e==="tab1",onClick:()=>i("tab1"),disabled:a.disabled,children:"Вкладка 1"}),t.jsx(r,{active:e==="tab2",onClick:()=>i("tab2"),disabled:a.disabled,children:"Вкладка 2"}),t.jsx(r,{active:e==="tab3",onClick:()=>i("tab3"),disabled:a.disabled,children:"Вкладка 3"})]})},n={render:a=>t.jsx(u,{...a}),args:{orientation:"horizontal"},argTypes:{orientation:{control:"select",options:["horizontal","vertical"],description:"Ориентация вкладок"}}},s={render:()=>{const[a,e]=v.useState("tab1");return t.jsxs(o,{children:[t.jsx(r,{active:a==="tab1",onClick:()=>e("tab1"),children:"Вкладка 1"}),t.jsx(r,{active:a==="tab2",onClick:()=>e("tab2"),disabled:!0,children:"Отключенная вкладка"}),t.jsx(r,{active:a==="tab3",onClick:()=>e("tab3"),children:"Вкладка 3"})]})}};var c,b,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(b=n.parameters)==null?void 0:b.docs)==null?void 0:d.source}}};var l,T,p;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState('tab1');
    return <FTabs>\r
                <FTab active={activeTab === 'tab1'} onClick={() => setActiveTab('tab1')}>\r
                    Вкладка 1\r
                </FTab>\r
                <FTab active={activeTab === 'tab2'} onClick={() => setActiveTab('tab2')} disabled>\r
                    Отключенная вкладка\r
                </FTab>\r
                <FTab active={activeTab === 'tab3'} onClick={() => setActiveTab('tab3')}>\r
                    Вкладка 3\r
                </FTab>\r
            </FTabs>;
  }
}`,...(p=(T=s.parameters)==null?void 0:T.docs)==null?void 0:p.source}}};const j=["Playground","DisabledTabs"];export{s as DisabledTabs,n as Playground,j as __namedExportsOrder,F as default};
