import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{F as d,a as t}from"./FGridRow-Cd5Ey8la.js";import"./index-yBjzXJbu.js";const A={title:"Material/FGridComponents",component:d,argTypes:{obj:{control:{type:"select"},options:["container","item"],defaultValue:"container",description:"Тип элемента сетки: контейнер или колонка"},xs:{control:{type:"number",min:1,max:12,step:1},defaultValue:12,description:"Ширина на мобильных устройствах (0-576px)"},sm:{control:{type:"number",min:1,max:12,step:1},description:"Ширина на малых устройствах (≥576px)"},md:{control:{type:"number",min:1,max:12,step:1},description:"Ширина на планшетах (≥768px)"},lg:{control:{type:"number",min:1,max:12,step:1},description:"Ширина на десктопах (≥992px)"},xl:{control:{type:"number",min:1,max:12,step:1},description:"Ширина на больших десктопах (≥1200px)"},xxl:{control:{type:"number",min:1,max:12,step:1},description:"Ширина на очень больших экранах (≥1400px)"},colAuto:{control:{type:"boolean"},defaultValue:!1,description:"Если true, элемент занимает только необходимое пространство"},className:{control:{type:"text"},description:"Пользовательский CSS-класс"},st:{control:{type:"object"},description:"Инлайновые стили"}}},b=({props:e})=>{const c=Object.entries(e).filter(([o,i])=>i!==void 0).map(([o,i])=>typeof i=="string"?`${o}="${i}"`:typeof i=="object"?`${o}={${JSON.stringify(i)}}`:`${o}={${i}}`).join(`
  `);return r.jsx("pre",{style:{background:"#f5f5f5",padding:"16px",borderRadius:"8px",fontSize:"14px",marginTop:"16px"},children:r.jsx("code",{children:`<FGrid
  ${c}
>`})})},n=({obj:e,xs:c,sm:o,md:i,lg:l,xl:x,xxl:g,colAuto:f,className:m,st:p})=>{const u={obj:e,xs:c,sm:o,md:i,lg:l,xl:x,xxl:g,colAuto:f,className:m,st:p};return e==="container"?r.jsxs("div",{children:[r.jsx(d,{obj:e,className:m,st:p,children:r.jsxs(t,{children:[r.jsx(d,{obj:"item",xs:12,md:6,children:r.jsx("div",{style:{background:"#e3f2fd",borderRadius:8,padding:24,textAlign:"center",color:"#1565c0",fontWeight:500},children:"Колонка 1"})}),r.jsx(d,{obj:"item",xs:12,md:6,children:r.jsx("div",{style:{background:"#e3f2fd",borderRadius:8,padding:24,textAlign:"center",color:"#1565c0",fontWeight:500},children:"Колонка 2"})})]})}),r.jsx(b,{props:u})]}):r.jsxs("div",{children:[r.jsx(d,{obj:"container",children:r.jsx(t,{children:r.jsx(d,{obj:"item",xs:c,sm:o,md:i,lg:l,xl:x,xxl:g,colAuto:f,className:m,st:p,children:r.jsx("div",{style:{background:"#e3f2fd",borderRadius:8,padding:24,textAlign:"center",color:"#1565c0",fontWeight:500},children:"Содержимое колонки"})})})}),r.jsx(b,{props:u})]})};n.args={obj:"container",xs:12,md:6,st:{marginTop:32,marginBottom:32}};const s=()=>r.jsxs("div",{children:[r.jsx("h3",{style:{marginBottom:"16px"},children:"Адаптивная сетка (изменяйте размер окна для просмотра)"}),r.jsx(d,{obj:"container",children:r.jsx(t,{children:[12,6,4,3,2,1].map(e=>r.jsx(d,{obj:"item",xs:12,md:e,st:{marginBottom:8},children:r.jsxs("div",{style:{background:"#fffde7",borderRadius:8,padding:20,textAlign:"center",color:"#b28704",fontWeight:500,border:"1px solid #fbc02d"},children:[e,"/12",r.jsxs("div",{style:{fontSize:"12px",marginTop:"4px",color:"#f57f17"},children:["xs: 12, md: ",e]})]})},e))})}),r.jsx("pre",{style:{background:"#f5f5f5",padding:"16px",borderRadius:"8px",fontSize:"14px",marginTop:"16px"},children:r.jsx("code",{children:`<FGrid obj="container">
  <FGridRow>
    <FGrid obj="item" xs={12} md={12}>...</FGrid>
    <FGrid obj="item" xs={12} md={6}>...</FGrid>
    <FGrid obj="item" xs={12} md={4}>...</FGrid>
    <FGrid obj="item" xs={12} md={3}>...</FGrid>
    <FGrid obj="item" xs={12} md={2}>...</FGrid>
    <FGrid obj="item" xs={12} md={1}>...</FGrid>
  </FGridRow>
</FGrid>`})})]}),a=()=>r.jsxs("div",{children:[r.jsx("h3",{style:{marginBottom:"16px"},children:"Примеры выравнивания"}),r.jsxs(d,{obj:"container",children:[r.jsx(t,{justifyContent:"center",alignItems:"center",st:{marginBottom:16,minHeight:100,background:"#f5f5f5",borderRadius:8},children:r.jsx("div",{style:{background:"#e3f2fd",padding:16,borderRadius:8,margin:8},children:"Центрированный элемент"})}),r.jsxs(t,{justifyContent:"between",st:{marginBottom:16,minHeight:100,background:"#f5f5f5",borderRadius:8},children:[r.jsx("div",{style:{background:"#e3f2fd",padding:16,borderRadius:8,margin:8},children:"Слева"}),r.jsx("div",{style:{background:"#e3f2fd",padding:16,borderRadius:8,margin:8},children:"Справа"})]}),r.jsxs(t,{justifyContent:"around",st:{minHeight:100,background:"#f5f5f5",borderRadius:8},children:[r.jsx("div",{style:{background:"#e3f2fd",padding:16,borderRadius:8,margin:8},children:"Равномерно"}),r.jsx("div",{style:{background:"#e3f2fd",padding:16,borderRadius:8,margin:8},children:"Равномерно"}),r.jsx("div",{style:{background:"#e3f2fd",padding:16,borderRadius:8,margin:8},children:"Равномерно"})]})]}),r.jsx("pre",{style:{background:"#f5f5f5",padding:"16px",borderRadius:"8px",fontSize:"14px",marginTop:"16px"},children:r.jsx("code",{children:`// Центрирование
<FGridRow justifyContent="center" alignItems="center">
  <div>Центрированный элемент</div>
</FGridRow>

// Пространство между
<FGridRow justifyContent="between">
  <div>Слева</div>
  <div>Справа</div>
</FGridRow>

// Равномерное распределение
<FGridRow justifyContent="around">
  <div>Равномерно</div>
  <div>Равномерно</div>
  <div>Равномерно</div>
</FGridRow>`})})]});n.__docgenInfo={description:"",methods:[],displayName:"Playground",props:{obj:{required:!1,tsType:{name:"union",raw:"'container' | 'item'",elements:[{name:"literal",value:"'container'"},{name:"literal",value:"'item'"}]},description:""},xs:{required:!1,tsType:{name:"number"},description:""},sm:{required:!1,tsType:{name:"number"},description:""},md:{required:!1,tsType:{name:"number"},description:""},lg:{required:!1,tsType:{name:"number"},description:""},xl:{required:!1,tsType:{name:"number"},description:""},xxl:{required:!1,tsType:{name:"number"},description:""},colAuto:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};s.__docgenInfo={description:"",methods:[],displayName:"ResponsiveExample"};a.__docgenInfo={description:"",methods:[],displayName:"AlignmentExample"};var j,F,G;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`({
  obj,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  colAuto,
  className,
  st
}: PlaygroundProps) => {
  const props = {
    obj,
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
    colAuto,
    className,
    st
  };
  if (obj === 'container') {
    return <div>\r
                <FGrid obj={obj} className={className} st={st}>\r
                    <FGridRow>\r
                        <FGrid obj="item" xs={12} md={6}>\r
                            <div style={{
              background: '#e3f2fd',
              borderRadius: 8,
              padding: 24,
              textAlign: 'center',
              color: '#1565c0',
              fontWeight: 500
            }}>\r
                                Колонка 1\r
                            </div>\r
                        </FGrid>\r
                        <FGrid obj="item" xs={12} md={6}>\r
                            <div style={{
              background: '#e3f2fd',
              borderRadius: 8,
              padding: 24,
              textAlign: 'center',
              color: '#1565c0',
              fontWeight: 500
            }}>\r
                                Колонка 2\r
                            </div>\r
                        </FGrid>\r
                    </FGridRow>\r
                </FGrid>\r
                <CodePreview props={props} />\r
            </div>;
  }
  return <div>\r
            <FGrid obj="container">\r
                <FGridRow>\r
                    <FGrid obj="item" xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl} colAuto={colAuto} className={className} st={st}>\r
                        <div style={{
            background: '#e3f2fd',
            borderRadius: 8,
            padding: 24,
            textAlign: 'center',
            color: '#1565c0',
            fontWeight: 500
          }}>\r
                            Содержимое колонки\r
                        </div>\r
                    </FGrid>\r
                </FGridRow>\r
            </FGrid>\r
            <CodePreview props={props} />\r
        </div>;
}`,...(G=(F=n.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var v,y,R;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`() => <div>\r
        <h3 style={{
    marginBottom: '16px'
  }}>Адаптивная сетка (изменяйте размер окна для просмотра)</h3>\r
        <FGrid obj="container">\r
            <FGridRow>\r
                {[12, 6, 4, 3, 2, 1].map(size => <FGrid key={size} obj="item" xs={12} md={size} st={{
        marginBottom: 8
      }}>\r
                        <div style={{
          background: '#fffde7',
          borderRadius: 8,
          padding: 20,
          textAlign: 'center',
          color: '#b28704',
          fontWeight: 500,
          border: '1px solid #fbc02d'
        }}>\r
                            {size}/12\r
                            <div style={{
            fontSize: '12px',
            marginTop: '4px',
            color: '#f57f17'
          }}>\r
                                xs: 12, md: {size}\r
                            </div>\r
                        </div>\r
                    </FGrid>)}\r
            </FGridRow>\r
        </FGrid>\r
        <pre style={{
    background: '#f5f5f5',
    padding: '16px',
    borderRadius: '8px',
    fontSize: '14px',
    marginTop: '16px'
  }}>\r
            <code>{\`<FGrid obj="container">
  <FGridRow>
    <FGrid obj="item" xs={12} md={12}>...</FGrid>
    <FGrid obj="item" xs={12} md={6}>...</FGrid>
    <FGrid obj="item" xs={12} md={4}>...</FGrid>
    <FGrid obj="item" xs={12} md={3}>...</FGrid>
    <FGrid obj="item" xs={12} md={2}>...</FGrid>
    <FGrid obj="item" xs={12} md={1}>...</FGrid>
  </FGridRow>
</FGrid>\`}</code>\r
        </pre>\r
    </div>`,...(R=(y=s.parameters)==null?void 0:y.docs)==null?void 0:R.source}}};var h,w,k;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`() => <div>\r
        <h3 style={{
    marginBottom: '16px'
  }}>Примеры выравнивания</h3>\r
        <FGrid obj="container">\r
            <FGridRow justifyContent="center" alignItems="center" st={{
      marginBottom: 16,
      minHeight: 100,
      background: '#f5f5f5',
      borderRadius: 8
    }}>\r
                <div style={{
        background: '#e3f2fd',
        padding: 16,
        borderRadius: 8,
        margin: 8
      }}>Центрированный элемент</div>\r
            </FGridRow>\r
            <FGridRow justifyContent="between" st={{
      marginBottom: 16,
      minHeight: 100,
      background: '#f5f5f5',
      borderRadius: 8
    }}>\r
                <div style={{
        background: '#e3f2fd',
        padding: 16,
        borderRadius: 8,
        margin: 8
      }}>Слева</div>\r
                <div style={{
        background: '#e3f2fd',
        padding: 16,
        borderRadius: 8,
        margin: 8
      }}>Справа</div>\r
            </FGridRow>\r
            <FGridRow justifyContent="around" st={{
      minHeight: 100,
      background: '#f5f5f5',
      borderRadius: 8
    }}>\r
                <div style={{
        background: '#e3f2fd',
        padding: 16,
        borderRadius: 8,
        margin: 8
      }}>Равномерно</div>\r
                <div style={{
        background: '#e3f2fd',
        padding: 16,
        borderRadius: 8,
        margin: 8
      }}>Равномерно</div>\r
                <div style={{
        background: '#e3f2fd',
        padding: 16,
        borderRadius: 8,
        margin: 8
      }}>Равномерно</div>\r
            </FGridRow>\r
        </FGrid>\r
        <pre style={{
    background: '#f5f5f5',
    padding: '16px',
    borderRadius: '8px',
    fontSize: '14px',
    marginTop: '16px'
  }}>\r
            <code>{\`// Центрирование
<FGridRow justifyContent="center" alignItems="center">
  <div>Центрированный элемент</div>
</FGridRow>

// Пространство между
<FGridRow justifyContent="between">
  <div>Слева</div>
  <div>Справа</div>
</FGridRow>

// Равномерное распределение
<FGridRow justifyContent="around">
  <div>Равномерно</div>
  <div>Равномерно</div>
  <div>Равномерно</div>
</FGridRow>\`}</code>\r
        </pre>\r
    </div>`,...(k=(w=a.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};const B=["Playground","ResponsiveExample","AlignmentExample"];export{a as AlignmentExample,n as Playground,s as ResponsiveExample,B as __namedExportsOrder,A as default};
