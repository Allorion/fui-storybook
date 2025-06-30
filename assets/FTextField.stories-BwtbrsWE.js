import{j as W}from"./jsx-runtime-Cf8x2fCZ.js";import{r as L}from"./index-DY-snNUy.js";import{F as y}from"./FTextField-DtoXRif2.js";import"./index-yBjzXJbu.js";import"./FLoadIcon-Dfwkb_VK.js";const P={title:"Material/FTextField",component:y,argTypes:{label:{control:{type:"text"},defaultValue:"Label"},placeholder:{control:{type:"text"},defaultValue:"Placeholder"},value:{control:{type:"text"}},onChange:{action:"value changed"},fullWidth:{control:{type:"boolean"},defaultValue:!1},disabled:{control:{type:"boolean"},defaultValue:!1},readOnly:{control:{type:"boolean"},defaultValue:!1},errText:{control:{type:"object"}},helpText:{control:{type:"text"}},load:{control:{type:"boolean"},defaultValue:!1},type:{control:{type:"text"},defaultValue:"text"}}},o=a=>{const[E,S]=L.useState(a.value||""),I=s=>{var u;S(s.target.value),(u=a.onChange)==null||u.call(a,s)};return W.jsx(y,{...a,value:E,onChange:I})},e=o.bind({});e.args={label:"Поле ввода",placeholder:"Введите что-нибудь...",value:"",helpText:"Это вспомогательный текст.",errText:void 0,load:!1,disabled:!1,readOnly:!1,fullWidth:!1,type:"text"};const t=o.bind({});t.args={...e.args,label:"Поле с ошибкой",errText:["Некорректное значение"]};const n=o.bind({});n.args={...e.args,label:"Поле с подсказкой",helpText:"Введите не менее 5 символов."};const l=o.bind({});l.args={...e.args,label:"Поле в состоянии загрузки",placeholder:"Загрузка...",load:!0};const r=o.bind({});r.args={...e.args,label:"Поле на всю ширину",fullWidth:!0};var d,c,g;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`(args: IFTextField) => {
  const [value, setValue] = useState(args.value || '');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    args.onChange?.(e);
  };
  return <FTextField {...args} value={value} onChange={handleChange} />;
}`,...(g=(c=e.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var h,p,i;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`(args: IFTextField) => {
  const [value, setValue] = useState(args.value || '');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    args.onChange?.(e);
  };
  return <FTextField {...args} value={value} onChange={handleChange} />;
}`,...(i=(p=t.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var m,v,x;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`(args: IFTextField) => {
  const [value, setValue] = useState(args.value || '');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    args.onChange?.(e);
  };
  return <FTextField {...args} value={value} onChange={handleChange} />;
}`,...(x=(v=n.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var C,F,T;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`(args: IFTextField) => {
  const [value, setValue] = useState(args.value || '');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    args.onChange?.(e);
  };
  return <FTextField {...args} value={value} onChange={handleChange} />;
}`,...(T=(F=l.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var f,b,V;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`(args: IFTextField) => {
  const [value, setValue] = useState(args.value || '');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    args.onChange?.(e);
  };
  return <FTextField {...args} value={value} onChange={handleChange} />;
}`,...(V=(b=r.parameters)==null?void 0:b.docs)==null?void 0:V.source}}};const _=["Playground","WithError","WithHelpText","Loading","FullWidth"];export{r as FullWidth,l as Loading,e as Playground,t as WithError,n as WithHelpText,_ as __namedExportsOrder,P as default};
