import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{F as V,a as c}from"./FSelectItem-BAXWPI2S.js";import{r as R}from"./index-B3j06Xw8.js";import"./FLoadIcon-B2O1XWAm.js";const z={title:"Material/FSelectComponents",component:V,argTypes:{label:{control:"text",description:"Подпись к select"},placeholder:{control:"text",description:"Плейсхолдер"},disabled:{control:"boolean",description:"Отключение select"},multiple:{control:"boolean",description:"Множественный выбор"},style:{control:"object",description:"Инлайн-стили"},errText:{control:"object",description:"Текст ошибки"},helpText:{control:"text",description:"Вспомогательный текст"},load:{control:"boolean",description:"Состояние загрузки"},fullWidth:{control:"boolean",description:"На всю ширину"}},parameters:{controls:{expanded:!0}}},_=[s.jsx(c,{value:"1",children:"Вариант 1"},"1"),s.jsx(c,{value:"2",children:"Вариант 2"},"2"),s.jsx(c,{value:"3",children:"Вариант 3"},"3")],e={args:{label:"Выберите значение",placeholder:"Выберите что-нибудь...",disabled:!1,multiple:!1,errText:void 0,helpText:void 0,load:!1,fullWidth:!1},render:r=>{const[H,i]=R.useState(r.multiple?[]:""),L=d=>{var u;if(r.multiple){const O=Array.from(d.target.selectedOptions).map(A=>A.value);i(O)}else i(d.target.value);(u=r.onChange)==null||u.call(r,d)};return s.jsx(V,{...r,value:H,onChange:L,children:_})}},a={args:{...e.args,label:"Поле с ошибкой",errText:["Некорректное значение"]},render:e.render},l={args:{...e.args,label:"Поле с подсказкой",helpText:"Введите не менее 5 символов."},render:e.render},t={args:{...e.args,label:"Поле в состоянии загрузки",placeholder:"Загрузка...",load:!0},render:e.render},o={args:{...e.args,label:"Поле на всю ширину",fullWidth:!0},render:e.render},n={args:{...e.args,label:"Поле на всю ширину",multiple:!0},render:e.render};var p,g,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Выберите значение',
    placeholder: 'Выберите что-нибудь...',
    disabled: false,
    multiple: false,
    errText: undefined,
    helpText: undefined,
    load: false,
    fullWidth: false
  },
  render: args => {
    const [value, setValue] = useState<string | string[]>(args.multiple ? [] : "");
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (args.multiple) {
        const selected = Array.from(e.target.selectedOptions).map(opt => opt.value);
        setValue(selected);
      } else {
        setValue(e.target.value);
      }
      args.onChange?.(e);
    };
    return <FSelect {...args} value={value} onChange={handleChange}>\r
                {options}\r
            </FSelect>;
  }
}`,...(m=(g=e.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var h,x,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Playground.args,
    label: 'Поле с ошибкой',
    errText: ['Некорректное значение']
  },
  render: Playground.render
}`,...(f=(x=a.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var b,y,v;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Playground.args,
    label: 'Поле с подсказкой',
    helpText: 'Введите не менее 5 символов.'
  },
  render: Playground.render
}`,...(v=(y=l.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var S,T,P;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Playground.args,
    label: 'Поле в состоянии загрузки',
    placeholder: "Загрузка...",
    load: true
  },
  render: Playground.render
}`,...(P=(T=t.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var W,C,j;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...Playground.args,
    label: 'Поле на всю ширину',
    fullWidth: true
  },
  render: Playground.render
}`,...(j=(C=o.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var F,E,M;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...Playground.args,
    label: 'Поле на всю ширину',
    multiple: true
  },
  render: Playground.render
}`,...(M=(E=n.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};const B=["Playground","WithError","WithHelpText","Loading","FullWidth","Multiple"];export{o as FullWidth,t as Loading,n as Multiple,e as Playground,a as WithError,l as WithHelpText,B as __namedExportsOrder,z as default};
