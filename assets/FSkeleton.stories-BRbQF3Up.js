import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{F as C}from"./FSkeleton-pmLFDKm2.js";import"./index-yBjzXJbu.js";import"./index-DY-snNUy.js";const T={title:"Material/FSkeleton",component:C,argTypes:{enable:{control:"boolean",description:"Включает режим скелетона"},width:{control:"text",description:"Кастомная ширина скелетона"},height:{control:"text",description:"Кастомная высота скелетона"}}},n={args:{enable:!0,children:e.jsx("div",{style:{padding:"20px",backgroundColor:"#f5f5f5"},children:"Пример текста"})}},r={args:{enable:!0,children:e.jsxs("div",{style:{width:"300px",padding:"20px",borderRadius:"8px",backgroundColor:"#fff",boxShadow:"0 2px 4px rgba(0,0,0,0.1)"},children:[e.jsx("h3",{style:{margin:"0 0 10px 0"},children:"Заголовок карточки"}),e.jsx("p",{style:{margin:"0 0 15px 0"},children:"Описание карточки с некоторым текстом"}),e.jsx("button",{style:{padding:"8px 16px"},children:"Кнопка"})]})}},i={args:{enable:!0,width:"200px",height:"100px",children:e.jsx("div",{children:"Контент с кастомными размерами"})}},d={args:{enable:!0,children:e.jsxs("div",{style:{display:"flex",gap:"20px"},children:[e.jsx("div",{style:{width:"100px",height:"100px",backgroundColor:"#e0e0e0"},children:"Квадрат 1"}),e.jsx("div",{style:{width:"150px",height:"80px",backgroundColor:"#e0e0e0"},children:"Прямоугольник"}),e.jsx("div",{style:{width:"100px",height:"100px",backgroundColor:"#e0e0e0"},children:"Квадрат 2"})]})}},s={args:{enable:!0,children:e.jsxs("div",{style:{padding:"20px"},children:[e.jsxs("div",{style:{marginBottom:"20px"},children:[e.jsx("h2",{style:{margin:"0 0 10px 0"},children:"Заголовок страницы"}),e.jsx("p",{style:{margin:"0"},children:"Описание страницы"})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"20px"},children:[1,2,3].map(t=>e.jsxs("div",{style:{padding:"15px",backgroundColor:"#f5f5f5",borderRadius:"8px"},children:[e.jsxs("h3",{style:{margin:"0 0 10px 0"},children:["Карточка ",t]}),e.jsx("p",{style:{margin:"0"},children:"Содержимое карточки"})]},t))})]})}};var a,o,p;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    enable: true,
    children: <div style={{
      padding: '20px',
      backgroundColor: '#f5f5f5'
    }}>Пример текста</div>
  }
}`,...(p=(o=n.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var l,c,x;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    enable: true,
    children: <div style={{
      width: '300px',
      padding: '20px',
      borderRadius: '8px',
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
        <h3 style={{
        margin: '0 0 10px 0'
      }}>Заголовок карточки</h3>
        <p style={{
        margin: '0 0 15px 0'
      }}>Описание карточки с некоторым текстом</p>
        <button style={{
        padding: '8px 16px'
      }}>Кнопка</button>
      </div>
  }
}`,...(x=(c=r.parameters)==null?void 0:c.docs)==null?void 0:x.source}}};var g,h,m;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    enable: true,
    width: '200px',
    height: '100px',
    children: <div>Контент с кастомными размерами</div>
  }
}`,...(m=(h=i.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var u,y,b;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    enable: true,
    children: <div style={{
      display: 'flex',
      gap: '20px'
    }}>
        <div style={{
        width: '100px',
        height: '100px',
        backgroundColor: '#e0e0e0'
      }}>Квадрат 1</div>
        <div style={{
        width: '150px',
        height: '80px',
        backgroundColor: '#e0e0e0'
      }}>Прямоугольник</div>
        <div style={{
        width: '100px',
        height: '100px',
        backgroundColor: '#e0e0e0'
      }}>Квадрат 2</div>
      </div>
  }
}`,...(b=(y=d.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var v,f,j;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    enable: true,
    children: <div style={{
      padding: '20px'
    }}>
        <div style={{
        marginBottom: '20px'
      }}>
          <h2 style={{
          margin: '0 0 10px 0'
        }}>Заголовок страницы</h2>
          <p style={{
          margin: '0'
        }}>Описание страницы</p>
        </div>
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px'
      }}>
          {[1, 2, 3].map(i => <div key={i} style={{
          padding: '15px',
          backgroundColor: '#f5f5f5',
          borderRadius: '8px'
        }}>
              <h3 style={{
            margin: '0 0 10px 0'
          }}>Карточка {i}</h3>
              <p style={{
            margin: '0'
          }}>Содержимое карточки</p>
            </div>)}
        </div>
      </div>
  }
}`,...(j=(f=s.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};const E=["Text","Card","CustomSize","MultipleElements","LoadingState"];export{r as Card,i as CustomSize,s as LoadingState,d as MultipleElements,n as Text,E as __namedExportsOrder,T as default};
