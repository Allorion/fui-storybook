import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{a as W}from"./index-B-lxVbXh.js";import{F as e}from"./FButton-Bm7SLZDh.js";import"./FCloseIcon-DdRZhJBn.js";import"./FArrowIcon-e6BJPakw.js";import{F as C}from"./FPlusIcon-DwR-eoL3.js";import{F as S}from"./FTrashIcon-DpmD7QBY.js";import{F as A}from"./FCheckIcon-Bhytte9q.js";import"./FListIcon-CTJfFb0S.js";import"./FPenIcon-BDns7egu.js";import"./FUploadIcon-CCFVbMKK.js";import{F as R}from"./FDownloadIcon-CBN19oNF.js";import"./FCopyAddIcon-4a2QP-mW.js";import"./FUnlinkIcon-C48V0MSb.js";import"./FFilterIcon-CNoE_Ar4.js";import"./FLoadIcon-B2O1XWAm.js";import"./FDocumentIcon-DAoBQI1z.js";import"./FReloadIcon-yjgW-o1f.js";import"./FMinusIcon-B8NU5Y6s.js";import"./FInfoCircleIcon-CBON5OPE.js";import"./FSafeIcon-DLcwlfRh.js";import"./FArrowRightCircleIcon-BumrcrH8.js";import"./FArrowLeftCircleIcon-CoUzqwcj.js";import"./FArrowUpCircleIcon-CNL-8OWU.js";import"./FArrowDownCircleIcon-BpdfGVJN.js";import"./v4-CtRu48qb.js";import"./index-B3j06Xw8.js";const ir={title:"Material/FButton",component:e,argTypes:{color:{control:"select",options:["primary","secondary","success","danger","warning","info","light","dark","link"]},variant:{control:"select",options:["contained","default"]},size:{control:"select",options:["btn-lg","btn-sm","btn-xs"]},fullWidth:{control:"boolean"},disabled:{control:"boolean"},onClick:{action:"clicked"}}},a={args:{children:"Нажми меня",color:"primary",variant:"contained",size:"btn-sm",fullWidth:!1,disabled:!1,onClick:()=>W("clicked")("Button clicked")}},o={render:()=>{const d=["primary","secondary","success","danger","warning","info","light","dark","link"];return r.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"12px",alignItems:"center",padding:"16px",background:"#f8fafc",borderRadius:"12px"},children:d.map(t=>r.jsx(e,{variant:"contained",color:t,children:t.charAt(0).toUpperCase()+t.slice(1)},t))})}},s={render:()=>{const d=["primary","secondary","success","danger","warning","info","light","dark","link"];return r.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"12px",alignItems:"center",padding:"16px",background:"#f8fafc",borderRadius:"12px"},children:d.map(t=>r.jsx(e,{variant:"default",color:t,children:t.charAt(0).toUpperCase()+t.slice(1)},t))})}},i={render:()=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px",padding:"16px"},children:[r.jsx(e,{size:"btn-xs",color:"primary",children:"Extra Small (xs)"}),r.jsx(e,{size:"btn-sm",color:"primary",children:"Small (sm / default)"}),r.jsx(e,{size:"btn-lg",color:"primary",children:"Large (lg)"})]})},n={render:()=>r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"12px",alignItems:"center",padding:"16px"},children:[r.jsxs(e,{color:"primary",size:"btn-sm",children:[r.jsx(C,{width:14,height:14}),"Добавить"]}),r.jsxs(e,{color:"success",size:"btn-sm",children:[r.jsx(A,{width:14,height:14}),"Сохранено"]}),r.jsxs(e,{variant:"default",color:"primary",size:"btn-sm",children:[r.jsx(R,{width:14,height:14}),"Скачать файл"]}),r.jsxs(e,{variant:"default",color:"danger",size:"btn-sm",children:[r.jsx(S,{width:14,height:14}),"Удалить"]})]})},l={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"16px",maxWidth:"400px"},children:[r.jsxs("div",{style:{display:"flex",gap:"12px"},children:[r.jsx(e,{color:"primary",children:"Обычная"}),r.jsx(e,{color:"primary",disabled:!0,children:"Отключена (disabled)"})]}),r.jsxs("div",{style:{display:"flex",gap:"12px"},children:[r.jsx(e,{variant:"default",color:"danger",children:"Обычная"}),r.jsx(e,{variant:"default",color:"danger",disabled:!0,children:"Отключена (disabled)"})]}),r.jsx(e,{color:"primary",fullWidth:!0,children:"Кнопка на всю ширину (fullWidth)"})]})};var c,p,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'Нажми меня',
    color: 'primary',
    variant: 'contained',
    size: 'btn-sm',
    fullWidth: false,
    disabled: false,
    onClick: () => action('clicked')('Button clicked')
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,x,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link'] as const;
    return <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '12px',
      alignItems: 'center',
      padding: '16px',
      background: '#f8fafc',
      borderRadius: '12px'
    }}>\r
        {colors.map(color => <FButton key={color} variant="contained" color={color}>\r
            {color.charAt(0).toUpperCase() + color.slice(1)}\r
          </FButton>)}\r
      </div>;
  }
}`,...(g=(x=o.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var f,h,y;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link'] as const;
    return <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '12px',
      alignItems: 'center',
      padding: '16px',
      background: '#f8fafc',
      borderRadius: '12px'
    }}>\r
        {colors.map(color => <FButton key={color} variant="default" color={color}>\r
            {color.charAt(0).toUpperCase() + color.slice(1)}\r
          </FButton>)}\r
      </div>;
  }
}`,...(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var F,b,v;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    padding: '16px'
  }}>\r
      <FButton size="btn-xs" color="primary">Extra Small (xs)</FButton>\r
      <FButton size="btn-sm" color="primary">Small (sm / default)</FButton>\r
      <FButton size="btn-lg" color="primary">Large (lg)</FButton>\r
    </div>
}`,...(v=(b=i.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var B,j,k;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
    alignItems: 'center',
    padding: '16px'
  }}>\r
      <FButton color="primary" size="btn-sm">\r
        <FPlusIcon width={14} height={14} />\r
        Добавить\r
      </FButton>\r
      <FButton color="success" size="btn-sm">\r
        <FCheckIcon width={14} height={14} />\r
        Сохранено\r
      </FButton>\r
      <FButton variant="default" color="primary" size="btn-sm">\r
        <FDownloadIcon width={14} height={14} />\r
        Скачать файл\r
      </FButton>\r
      <FButton variant="default" color="danger" size="btn-sm">\r
        <FTrashIcon width={14} height={14} />\r
        Удалить\r
      </FButton>\r
    </div>
}`,...(k=(j=n.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var w,z,I;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '16px',
    maxWidth: '400px'
  }}>\r
      <div style={{
      display: 'flex',
      gap: '12px'
    }}>\r
        <FButton color="primary">Обычная</FButton>\r
        <FButton color="primary" disabled>Отключена (disabled)</FButton>\r
      </div>\r
      <div style={{
      display: 'flex',
      gap: '12px'
    }}>\r
        <FButton variant="default" color="danger">Обычная</FButton>\r
        <FButton variant="default" color="danger" disabled>Отключена (disabled)</FButton>\r
      </div>\r
      <FButton color="primary" fullWidth>\r
        Кнопка на всю ширину (fullWidth)\r
      </FButton>\r
    </div>
}`,...(I=(z=l.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};const nr=["Playground","AllColorsContained","AllColorsOutline","Sizes","WithIcons","States"];export{o as AllColorsContained,s as AllColorsOutline,a as Playground,i as Sizes,l as States,n as WithIcons,nr as __namedExportsOrder,ir as default};
