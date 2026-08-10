import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{F as n,a as e}from"./FDropdownItem-YzbPD2d9.js";import{a as r}from"./index-B-lxVbXh.js";import{F as z}from"./FButton-wCVY7eIs.js";import{F as d}from"./FTooltip-BJ8WMW_6.js";import"./index-B3j06Xw8.js";import"./FStack-Bjsadt8I.js";import"./FArrowIcon-e6BJPakw.js";import"./v4-CtRu48qb.js";import"./index-D_ywfbVi.js";import"./index-DW0t0JKo.js";const q={title:"Material/FDropdown",component:n,argTypes:{label:{control:"text",description:"Текст или элемент внутри кнопки"},variant:{control:"select",options:["contained","default"],description:"Вариант стиля кнопки"},color:{control:"select",options:["primary","secondary","success","danger","warning","info","light","dark","link"],description:"Цвет кнопки"},size:{control:"select",options:["btn-lg","btn-sm","btn-xs"],description:"Размер кнопки"},disabled:{control:"boolean",description:"Блокировка кнопки"}}},l={args:{label:"Меню",children:o.jsxs(o.Fragment,{children:[o.jsx(e,{onClick:()=>r("Выбран")("Пункт 1"),children:"Пункт 1"}),o.jsx(e,{onClick:()=>r("Выбран")("Пункт 2"),children:"Пункт 2"}),o.jsx(e,{onClick:()=>r("Выбран")("Пункт 2"),children:"Пункт 3"})]})}},i={args:{label:"Профиль",children:o.jsxs("div",{style:{padding:12},children:[o.jsx("div",{style:{fontWeight:600},children:"Иван Иванов"}),o.jsx("div",{style:{fontSize:13,color:"#888"},children:"user@email.com"}),o.jsx("hr",{style:{margin:"8px 0"}}),o.jsx(z,{color:"danger",variant:"default",style:{width:"100%"},onClick:()=>r("Пользователь вышел из аккаунта")('По нажатию на кнопку "Выход"'),children:"Выйти"})]})}},t={render:()=>o.jsxs("div",{style:{display:"flex",gap:16},children:[o.jsx(n,{label:"Primary",color:"primary",children:o.jsx(e,{onClick:()=>r("Выбран")("Пункт"),children:"Пункт"})}),o.jsx(n,{label:"Success",color:"success",children:o.jsx(e,{onClick:()=>r("Выбран")("Пункт"),children:"Пункт"})}),o.jsx(n,{label:"Danger",color:"danger",children:o.jsx(e,{onClick:()=>r("Выбран")("Пункт"),children:"Пункт"})}),o.jsx(n,{label:"Dark",color:"dark",children:o.jsx(e,{onClick:()=>r("Выбран")("Пункт"),children:"Пункт"})})]})},s={render:()=>o.jsxs("div",{style:{display:"flex",gap:16},children:[o.jsx(n,{label:"Large",size:"btn-lg",children:o.jsx(e,{onClick:()=>r("Выбран")("Пункт"),children:"Пункт"})}),o.jsx(n,{label:"Small",size:"btn-sm",children:o.jsx(e,{onClick:()=>r("Выбран")("Пункт"),children:"Пункт"})}),o.jsx(n,{label:"XS",size:"btn-xs",children:o.jsx(e,{onClick:()=>r("Выбран")("Пункт"),children:"Пункт"})})]})},a={args:{label:"Недоступно",disabled:!0,children:o.jsx(e,{onClick:()=>r("Выбран")("Пункт меню"),children:"Пункт меню"})}},c={render:()=>o.jsxs("div",{style:{display:"flex",gap:16,padding:50},children:[o.jsx(d,{title:"Это подсказка для дропдауна",placement:"top",arrow:!0,children:o.jsxs(n,{label:"Дропдаун с подсказкой",children:[o.jsx(e,{onClick:()=>r("Выбран")("Пункт 1"),children:"Пункт 1"}),o.jsx(e,{onClick:()=>r("Выбран")("Пункт 2"),children:"Пункт 2"}),o.jsx(e,{onClick:()=>r("Выбран")("Пункт 3"),children:"Пункт 3"})]})}),o.jsx(d,{title:"Подсказка справа",placement:"right",arrow:!0,children:o.jsx(n,{label:"Справа",color:"success",children:o.jsx(e,{onClick:()=>r("Выбран")("Действие"),children:"Действие"})})}),o.jsx(d,{title:"Длинная подсказка с описанием функционала этого дропдауна",placement:"bottom",arrow:!0,children:o.jsx(n,{label:"Снизу",color:"warning",children:o.jsx(e,{onClick:()=>r("Выбран")("Опция"),children:"Опция"})})})]})};var p,m,F;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Меню',
    children: <>\r
        <FDropdownItem onClick={() => action('Выбран')('Пункт 1')}>Пункт 1</FDropdownItem>\r
        <FDropdownItem onClick={() => action('Выбран')('Пункт 2')}>Пункт 2</FDropdownItem>\r
        <FDropdownItem onClick={() => action('Выбран')('Пункт 2')}>Пункт 3</FDropdownItem>\r
      </>
  }
}`,...(F=(m=l.parameters)==null?void 0:m.docs)==null?void 0:F.source}}};var w,D,h;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Профиль',
    children: <div style={{
      padding: 12
    }}>\r
        <div style={{
        fontWeight: 600
      }}>Иван Иванов</div>\r
        <div style={{
        fontSize: 13,
        color: '#888'
      }}>user@email.com</div>\r
        <hr style={{
        margin: '8px 0'
      }} />\r
        <FButton color={'danger'} variant={'default'} style={{
        width: '100%'
      }} onClick={() => action('Пользователь вышел из аккаунта')('По нажатию на кнопку "Выход"')}>Выйти</FButton>\r
      </div>
  }
}`,...(h=(D=i.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};var x,g,b;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16
  }}>\r
      <FDropdown label="Primary" color="primary"><FDropdownItem onClick={() => action('Выбран')('Пункт')}>Пункт</FDropdownItem></FDropdown>\r
      <FDropdown label="Success" color="success"><FDropdownItem onClick={() => action('Выбран')('Пункт')}>Пункт</FDropdownItem></FDropdown>\r
      <FDropdown label="Danger" color="danger"><FDropdownItem onClick={() => action('Выбран')('Пункт')}>Пункт</FDropdownItem></FDropdown>\r
      <FDropdown label="Dark" color="dark"><FDropdownItem onClick={() => action('Выбран')('Пункт')}>Пункт</FDropdownItem></FDropdown>\r
    </div>
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var u,j,k;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16
  }}>\r
      <FDropdown label="Large" size="btn-lg"><FDropdownItem onClick={() => action('Выбран')('Пункт')}>Пункт</FDropdownItem></FDropdown>\r
      <FDropdown label="Small" size="btn-sm"><FDropdownItem onClick={() => action('Выбран')('Пункт')}>Пункт</FDropdownItem></FDropdown>\r
      <FDropdown label="XS" size="btn-xs"><FDropdownItem onClick={() => action('Выбран')('Пункт')}>Пункт</FDropdownItem></FDropdown>\r
    </div>
}`,...(k=(j=s.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var C,I,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Недоступно',
    disabled: true,
    children: <FDropdownItem onClick={() => action('Выбран')('Пункт меню')}>Пункт меню</FDropdownItem>
  }
}`,...(y=(I=a.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var v,f,S;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    padding: 50
  }}>\r
      <FTooltip title="Это подсказка для дропдауна" placement="top" arrow>\r
        <FDropdown label="Дропдаун с подсказкой">\r
          <FDropdownItem onClick={() => action('Выбран')('Пункт 1')}>Пункт 1</FDropdownItem>\r
          <FDropdownItem onClick={() => action('Выбран')('Пункт 2')}>Пункт 2</FDropdownItem>\r
          <FDropdownItem onClick={() => action('Выбран')('Пункт 3')}>Пункт 3</FDropdownItem>\r
        </FDropdown>\r
      </FTooltip>\r
      \r
      <FTooltip title="Подсказка справа" placement="right" arrow>\r
        <FDropdown label="Справа" color="success">\r
          <FDropdownItem onClick={() => action('Выбран')('Действие')}>Действие</FDropdownItem>\r
        </FDropdown>\r
      </FTooltip>\r
      \r
      <FTooltip title="Длинная подсказка с описанием функционала этого дропдауна" placement="bottom" arrow>\r
        <FDropdown label="Снизу" color="warning">\r
          <FDropdownItem onClick={() => action('Выбран')('Опция')}>Опция</FDropdownItem>\r
        </FDropdown>\r
      </FTooltip>\r
    </div>
}`,...(S=(f=c.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const A=["Basic","CustomContent","Colors","Sizes","Disabled","WithTooltip"];export{l as Basic,t as Colors,i as CustomContent,a as Disabled,s as Sizes,c as WithTooltip,A as __namedExportsOrder,q as default};
