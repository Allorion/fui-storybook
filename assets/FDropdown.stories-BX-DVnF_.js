import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{F as n,a as e}from"./FDropdownItem-C9WTnCuX.js";import{a as r}from"./index-B-lxVbXh.js";import{F as y}from"./FButton-B6qhCJHc.js";import"./index-yBjzXJbu.js";import"./index-DY-snNUy.js";import"./FStack-Bs-EBUEz.js";import"./FArrowIcon-AjsFl5uk.js";import"./v4-CtRu48qb.js";const W={title:"Material/FDropdown",component:n,argTypes:{label:{control:"text",description:"Текст или элемент внутри кнопки"},variant:{control:"select",options:["contained","default"],description:"Вариант стиля кнопки"},color:{control:"select",options:["primary","secondary","success","danger","warning","info","light","dark","link"],description:"Цвет кнопки"},size:{control:"select",options:["btn-lg","btn-sm","btn-xs"],description:"Размер кнопки"},disabled:{control:"boolean",description:"Блокировка кнопки"}}},l={args:{label:"Меню",children:o.jsxs(o.Fragment,{children:[o.jsx(e,{onClick:()=>r("Выбран")("Пункт 1"),children:"Пункт 1"}),o.jsx(e,{onClick:()=>r("Выбран")("Пункт 2"),children:"Пункт 2"}),o.jsx(e,{onClick:()=>r("Выбран")("Пункт 2"),children:"Пункт 3"})]})}},s={args:{label:"Профиль",children:o.jsxs("div",{style:{padding:12},children:[o.jsx("div",{style:{fontWeight:600},children:"Иван Иванов"}),o.jsx("div",{style:{fontSize:13,color:"#888"},children:"user@email.com"}),o.jsx("hr",{style:{margin:"8px 0"}}),o.jsx(y,{color:"danger",variant:"default",style:{width:"100%"},onClick:()=>r("Пользователь вышел из аккаунта")('По нажатию на кнопку "Выход"'),children:"Выйти"})]})}},i={render:()=>o.jsxs("div",{style:{display:"flex",gap:16},children:[o.jsx(n,{label:"Primary",color:"primary",children:o.jsx(e,{onClick:()=>r("Выбран")("Пункт"),children:"Пункт"})}),o.jsx(n,{label:"Success",color:"success",children:o.jsx(e,{onClick:()=>r("Выбран")("Пункт"),children:"Пункт"})}),o.jsx(n,{label:"Danger",color:"danger",children:o.jsx(e,{onClick:()=>r("Выбран")("Пункт"),children:"Пункт"})}),o.jsx(n,{label:"Dark",color:"dark",children:o.jsx(e,{onClick:()=>r("Выбран")("Пункт"),children:"Пункт"})})]})},a={render:()=>o.jsxs("div",{style:{display:"flex",gap:16},children:[o.jsx(n,{label:"Large",size:"btn-lg",children:o.jsx(e,{onClick:()=>r("Выбран")("Пункт"),children:"Пункт"})}),o.jsx(n,{label:"Small",size:"btn-sm",children:o.jsx(e,{onClick:()=>r("Выбран")("Пункт"),children:"Пункт"})}),o.jsx(n,{label:"XS",size:"btn-xs",children:o.jsx(e,{onClick:()=>r("Выбран")("Пункт"),children:"Пункт"})})]})},t={args:{label:"Недоступно",disabled:!0,children:o.jsx(e,{onClick:()=>r("Выбран")("Пункт меню"),children:"Пункт меню"})}};var c,d,p;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Меню',
    children: <>
        <FDropdownItem onClick={() => action('Выбран')('Пункт 1')}>Пункт 1</FDropdownItem>
        <FDropdownItem onClick={() => action('Выбран')('Пункт 2')}>Пункт 2</FDropdownItem>
        <FDropdownItem onClick={() => action('Выбран')('Пункт 2')}>Пункт 3</FDropdownItem>
      </>
  }
}`,...(p=(d=l.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,D,F;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Профиль',
    children: <div style={{
      padding: 12
    }}>
        <div style={{
        fontWeight: 600
      }}>Иван Иванов</div>
        <div style={{
        fontSize: 13,
        color: '#888'
      }}>user@email.com</div>
        <hr style={{
        margin: '8px 0'
      }} />
        <FButton color={'danger'} variant={'default'} style={{
        width: '100%'
      }} onClick={() => action('Пользователь вышел из аккаунта')('По нажатию на кнопку "Выход"')}>Выйти</FButton>
      </div>
  }
}`,...(F=(D=s.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var w,x,h;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16
  }}>
      <FDropdown label="Primary" color="primary"><FDropdownItem onClick={() => action('Выбран')('Пункт')}>Пункт</FDropdownItem></FDropdown>
      <FDropdown label="Success" color="success"><FDropdownItem onClick={() => action('Выбран')('Пункт')}>Пункт</FDropdownItem></FDropdown>
      <FDropdown label="Danger" color="danger"><FDropdownItem onClick={() => action('Выбран')('Пункт')}>Пункт</FDropdownItem></FDropdown>
      <FDropdown label="Dark" color="dark"><FDropdownItem onClick={() => action('Выбран')('Пункт')}>Пункт</FDropdownItem></FDropdown>
    </div>
}`,...(h=(x=i.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var g,b,u;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16
  }}>
      <FDropdown label="Large" size="btn-lg"><FDropdownItem onClick={() => action('Выбран')('Пункт')}>Пункт</FDropdownItem></FDropdown>
      <FDropdown label="Small" size="btn-sm"><FDropdownItem onClick={() => action('Выбран')('Пункт')}>Пункт</FDropdownItem></FDropdown>
      <FDropdown label="XS" size="btn-xs"><FDropdownItem onClick={() => action('Выбран')('Пункт')}>Пункт</FDropdownItem></FDropdown>
    </div>
}`,...(u=(b=a.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var k,C,j;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Недоступно',
    disabled: true,
    children: <FDropdownItem onClick={() => action('Выбран')('Пункт меню')}>Пункт меню</FDropdownItem>
  }
}`,...(j=(C=t.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};const X=["Basic","CustomContent","Colors","Sizes","Disabled"];export{l as Basic,i as Colors,s as CustomContent,t as Disabled,a as Sizes,X as __namedExportsOrder,W as default};
