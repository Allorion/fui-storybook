import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{F as d,a as t}from"./FGridRow-CsF9MpPt.js";import"./index-yBjzXJbu.js";const A={title:"Material/FGridComponents",component:d,argTypes:{obj:{control:{type:"select"},options:["container","item"],defaultValue:"container",description:"Тип элемента сетки: контейнер или колонка"},xs:{control:{type:"number",min:1,max:12,step:1},defaultValue:12,description:"Ширина на мобильных устройствах (0-576px)"},sm:{control:{type:"number",min:1,max:12,step:1},description:"Ширина на малых устройствах (≥576px)"},md:{control:{type:"number",min:1,max:12,step:1},description:"Ширина на планшетах (≥768px)"},lg:{control:{type:"number",min:1,max:12,step:1},description:"Ширина на десктопах (≥992px)"},xl:{control:{type:"number",min:1,max:12,step:1},description:"Ширина на больших десктопах (≥1200px)"},xxl:{control:{type:"number",min:1,max:12,step:1},description:"Ширина на очень больших экранах (≥1400px)"},colAuto:{control:{type:"boolean"},defaultValue:!1,description:"Если true, элемент занимает только необходимое пространство"},className:{control:{type:"text"},description:"Пользовательский CSS-класс"},st:{control:{type:"object"},description:"Инлайновые стили"}}},b=({props:i})=>{const c=Object.entries(i).filter(([o,r])=>r!==void 0).map(([o,r])=>typeof r=="string"?`${o}="${r}"`:typeof r=="object"?`${o}={${JSON.stringify(r)}}`:`${o}={${r}}`).join(`
  `);return e.jsx("pre",{style:{background:"#f5f5f5",padding:"16px",borderRadius:"8px",fontSize:"14px",marginTop:"16px"},children:e.jsx("code",{children:`<FGrid
  ${c}
>`})})},n=({obj:i,xs:c,sm:o,md:r,lg:l,xl:x,xxl:g,colAuto:f,className:m,st:p})=>{const u={obj:i,xs:c,sm:o,md:r,lg:l,xl:x,xxl:g,colAuto:f,className:m,st:p};return i==="container"?e.jsxs("div",{children:[e.jsx(d,{obj:i,className:m,st:p,children:e.jsxs(t,{children:[e.jsx(d,{obj:"item",xs:12,md:6,children:e.jsx("div",{style:{background:"#e3f2fd",borderRadius:8,padding:24,textAlign:"center",color:"#1565c0",fontWeight:500},children:"Колонка 1"})}),e.jsx(d,{obj:"item",xs:12,md:6,children:e.jsx("div",{style:{background:"#e3f2fd",borderRadius:8,padding:24,textAlign:"center",color:"#1565c0",fontWeight:500},children:"Колонка 2"})})]})}),e.jsx(b,{props:u})]}):e.jsxs("div",{children:[e.jsx(d,{obj:"container",children:e.jsx(t,{children:e.jsx(d,{obj:"item",xs:c,sm:o,md:r,lg:l,xl:x,xxl:g,colAuto:f,className:m,st:p,children:e.jsx("div",{style:{background:"#e3f2fd",borderRadius:8,padding:24,textAlign:"center",color:"#1565c0",fontWeight:500},children:"Содержимое колонки"})})})}),e.jsx(b,{props:u})]})};n.args={obj:"container",xs:12,md:6,st:{marginTop:32,marginBottom:32}};const s=()=>e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px"},children:"Адаптивная сетка (изменяйте размер окна для просмотра)"}),e.jsx(d,{obj:"container",children:e.jsx(t,{children:[12,6,4,3,2,1].map(i=>e.jsx(d,{obj:"item",xs:12,md:i,st:{marginBottom:8},children:e.jsxs("div",{style:{background:"#fffde7",borderRadius:8,padding:20,textAlign:"center",color:"#b28704",fontWeight:500,border:"1px solid #fbc02d"},children:[i,"/12",e.jsxs("div",{style:{fontSize:"12px",marginTop:"4px",color:"#f57f17"},children:["xs: 12, md: ",i]})]})},i))})}),e.jsx("pre",{style:{background:"#f5f5f5",padding:"16px",borderRadius:"8px",fontSize:"14px",marginTop:"16px"},children:e.jsx("code",{children:`<FGrid obj="container">
  <FGridRow>
    <FGrid obj="item" xs={12} md={12}>...</FGrid>
    <FGrid obj="item" xs={12} md={6}>...</FGrid>
    <FGrid obj="item" xs={12} md={4}>...</FGrid>
    <FGrid obj="item" xs={12} md={3}>...</FGrid>
    <FGrid obj="item" xs={12} md={2}>...</FGrid>
    <FGrid obj="item" xs={12} md={1}>...</FGrid>
  </FGridRow>
</FGrid>`})})]}),a=()=>e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px"},children:"Примеры выравнивания"}),e.jsxs(d,{obj:"container",children:[e.jsx(t,{justifyContent:"center",alignItems:"center",st:{marginBottom:16,minHeight:100,background:"#f5f5f5",borderRadius:8},children:e.jsx("div",{style:{background:"#e3f2fd",padding:16,borderRadius:8,margin:8},children:"Центрированный элемент"})}),e.jsxs(t,{justifyContent:"between",st:{marginBottom:16,minHeight:100,background:"#f5f5f5",borderRadius:8},children:[e.jsx("div",{style:{background:"#e3f2fd",padding:16,borderRadius:8,margin:8},children:"Слева"}),e.jsx("div",{style:{background:"#e3f2fd",padding:16,borderRadius:8,margin:8},children:"Справа"})]}),e.jsxs(t,{justifyContent:"around",st:{minHeight:100,background:"#f5f5f5",borderRadius:8},children:[e.jsx("div",{style:{background:"#e3f2fd",padding:16,borderRadius:8,margin:8},children:"Равномерно"}),e.jsx("div",{style:{background:"#e3f2fd",padding:16,borderRadius:8,margin:8},children:"Равномерно"}),e.jsx("div",{style:{background:"#e3f2fd",padding:16,borderRadius:8,margin:8},children:"Равномерно"})]})]}),e.jsx("pre",{style:{background:"#f5f5f5",padding:"16px",borderRadius:"8px",fontSize:"14px",marginTop:"16px"},children:e.jsx("code",{children:`// Центрирование
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
    return <div>
                <FGrid obj={obj} className={className} st={st}>
                    <FGridRow>
                        <FGrid obj="item" xs={12} md={6}>
                            <div style={{
              background: '#e3f2fd',
              borderRadius: 8,
              padding: 24,
              textAlign: 'center',
              color: '#1565c0',
              fontWeight: 500
            }}>
                                Колонка 1
                            </div>
                        </FGrid>
                        <FGrid obj="item" xs={12} md={6}>
                            <div style={{
              background: '#e3f2fd',
              borderRadius: 8,
              padding: 24,
              textAlign: 'center',
              color: '#1565c0',
              fontWeight: 500
            }}>
                                Колонка 2
                            </div>
                        </FGrid>
                    </FGridRow>
                </FGrid>
                <CodePreview props={props} />
            </div>;
  }
  return <div>
            <FGrid obj="container">
                <FGridRow>
                    <FGrid obj="item" xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl} colAuto={colAuto} className={className} st={st}>
                        <div style={{
            background: '#e3f2fd',
            borderRadius: 8,
            padding: 24,
            textAlign: 'center',
            color: '#1565c0',
            fontWeight: 500
          }}>
                            Содержимое колонки
                        </div>
                    </FGrid>
                </FGridRow>
            </FGrid>
            <CodePreview props={props} />
        </div>;
}`,...(G=(F=n.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var v,y,R;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`() => <div>
        <h3 style={{
    marginBottom: '16px'
  }}>Адаптивная сетка (изменяйте размер окна для просмотра)</h3>
        <FGrid obj="container">
            <FGridRow>
                {[12, 6, 4, 3, 2, 1].map(size => <FGrid key={size} obj="item" xs={12} md={size} st={{
        marginBottom: 8
      }}>
                        <div style={{
          background: '#fffde7',
          borderRadius: 8,
          padding: 20,
          textAlign: 'center',
          color: '#b28704',
          fontWeight: 500,
          border: '1px solid #fbc02d'
        }}>
                            {size}/12
                            <div style={{
            fontSize: '12px',
            marginTop: '4px',
            color: '#f57f17'
          }}>
                                xs: 12, md: {size}
                            </div>
                        </div>
                    </FGrid>)}
            </FGridRow>
        </FGrid>
        <pre style={{
    background: '#f5f5f5',
    padding: '16px',
    borderRadius: '8px',
    fontSize: '14px',
    marginTop: '16px'
  }}>
            <code>{\`<FGrid obj="container">
  <FGridRow>
    <FGrid obj="item" xs={12} md={12}>...</FGrid>
    <FGrid obj="item" xs={12} md={6}>...</FGrid>
    <FGrid obj="item" xs={12} md={4}>...</FGrid>
    <FGrid obj="item" xs={12} md={3}>...</FGrid>
    <FGrid obj="item" xs={12} md={2}>...</FGrid>
    <FGrid obj="item" xs={12} md={1}>...</FGrid>
  </FGridRow>
</FGrid>\`}</code>
        </pre>
    </div>`,...(R=(y=s.parameters)==null?void 0:y.docs)==null?void 0:R.source}}};var h,w,k;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`() => <div>
        <h3 style={{
    marginBottom: '16px'
  }}>Примеры выравнивания</h3>
        <FGrid obj="container">
            <FGridRow justifyContent="center" alignItems="center" st={{
      marginBottom: 16,
      minHeight: 100,
      background: '#f5f5f5',
      borderRadius: 8
    }}>
                <div style={{
        background: '#e3f2fd',
        padding: 16,
        borderRadius: 8,
        margin: 8
      }}>Центрированный элемент</div>
            </FGridRow>
            <FGridRow justifyContent="between" st={{
      marginBottom: 16,
      minHeight: 100,
      background: '#f5f5f5',
      borderRadius: 8
    }}>
                <div style={{
        background: '#e3f2fd',
        padding: 16,
        borderRadius: 8,
        margin: 8
      }}>Слева</div>
                <div style={{
        background: '#e3f2fd',
        padding: 16,
        borderRadius: 8,
        margin: 8
      }}>Справа</div>
            </FGridRow>
            <FGridRow justifyContent="around" st={{
      minHeight: 100,
      background: '#f5f5f5',
      borderRadius: 8
    }}>
                <div style={{
        background: '#e3f2fd',
        padding: 16,
        borderRadius: 8,
        margin: 8
      }}>Равномерно</div>
                <div style={{
        background: '#e3f2fd',
        padding: 16,
        borderRadius: 8,
        margin: 8
      }}>Равномерно</div>
                <div style={{
        background: '#e3f2fd',
        padding: 16,
        borderRadius: 8,
        margin: 8
      }}>Равномерно</div>
            </FGridRow>
        </FGrid>
        <pre style={{
    background: '#f5f5f5',
    padding: '16px',
    borderRadius: '8px',
    fontSize: '14px',
    marginTop: '16px'
  }}>
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
</FGridRow>\`}</code>
        </pre>
    </div>`,...(k=(w=a.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};const B=["Playground","ResponsiveExample","AlignmentExample"];export{a as AlignmentExample,n as Playground,s as ResponsiveExample,B as __namedExportsOrder,A as default};
