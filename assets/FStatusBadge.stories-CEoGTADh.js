import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{F as r}from"./FStatusBadge-CaCHJHW5.js";const M={title:"Material/FStatusBadge",component:r,argTypes:{variant:{control:"select",options:["primary","secondary","success","danger","warning","info","light","dark"],description:"Цветовая схема из палитры fui-kit"},size:{control:"radio",options:["sm","md","lg"],description:"Размер бейджа"},showDot:{control:"boolean",description:"Флаг отображения точки-индикатора"},pulseDot:{control:"boolean",description:"Включение пульсирующей анимации точки"},children:{control:"text",description:"Текст статуса"},className:{control:"text",description:"Дополнительные CSS-классы"}}},a={args:{variant:"warning",size:"md",showDot:!0,pulseDot:!0,children:"На регистрации"}},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(r,{variant:"info",size:"sm",pulseDot:!0,children:"Размер SM (10px)"}),e.jsx(r,{variant:"info",size:"md",pulseDot:!0,children:"Размер MD (11px)"}),e.jsx(r,{variant:"info",size:"lg",pulseDot:!0,children:"Размер LG (13px)"})]})},t={args:{variant:"primary",size:"md",showDot:!0,pulseDot:!0,children:"В обработке"}},n={args:{variant:"success",size:"md",showDot:!0,pulseDot:!1,children:"Действует"}},i={args:{variant:"secondary",size:"sm",showDot:!1,children:"Архив"}},o={render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"10px",alignItems:"center"},children:[e.jsx(r,{variant:"warning",pulseDot:!0,children:"На регистрации"}),e.jsx(r,{variant:"primary",pulseDot:!0,children:"В работе"}),e.jsx(r,{variant:"info",pulseDot:!0,children:"Проверка данных"}),e.jsx(r,{variant:"success",children:"Действует"}),e.jsx(r,{variant:"danger",children:"Прекращено"}),e.jsx(r,{variant:"secondary",children:"Архив"}),e.jsx(r,{variant:"light",children:"Черновик"}),e.jsx(r,{variant:"dark",children:"Служебный"})]})};var c,d,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    size: "md",
    showDot: true,
    pulseDot: true,
    children: "На регистрации"
  }
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,p,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "12px",
    alignItems: "center"
  }}>\r
            <FStatusBadge variant="info" size="sm" pulseDot>\r
                Размер SM (10px)\r
            </FStatusBadge>\r
            <FStatusBadge variant="info" size="md" pulseDot>\r
                Размер MD (11px)\r
            </FStatusBadge>\r
            <FStatusBadge variant="info" size="lg" pulseDot>\r
                Размер LG (13px)\r
            </FStatusBadge>\r
        </div>
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var m,v,S;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    showDot: true,
    pulseDot: true,
    children: "В обработке"
  }
}`,...(S=(v=t.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var h,x,D;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: "success",
    size: "md",
    showDot: true,
    pulseDot: false,
    children: "Действует"
  }
}`,...(D=(x=n.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var F,B,f;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    size: "sm",
    showDot: false,
    children: "Архив"
  }
}`,...(f=(B=i.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var y,z,w;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    alignItems: "center"
  }}>\r
            <FStatusBadge variant="warning" pulseDot>На регистрации</FStatusBadge>\r
            <FStatusBadge variant="primary" pulseDot>В работе</FStatusBadge>\r
            <FStatusBadge variant="info" pulseDot>Проверка данных</FStatusBadge>\r
            <FStatusBadge variant="success">Действует</FStatusBadge>\r
            <FStatusBadge variant="danger">Прекращено</FStatusBadge>\r
            <FStatusBadge variant="secondary">Архив</FStatusBadge>\r
            <FStatusBadge variant="light">Черновик</FStatusBadge>\r
            <FStatusBadge variant="dark">Служебный</FStatusBadge>\r
        </div>
}`,...(w=(z=o.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};const k=["PulsingWarning","Sizes","ActiveProcess","Success","WithoutDot","AllVariants"];export{t as ActiveProcess,o as AllVariants,a as PulsingWarning,s as Sizes,n as Success,i as WithoutDot,k as __namedExportsOrder,M as default};
