import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as g}from"./index-B3j06Xw8.js";import{F as d}from"./FSearchableSelect-B2Q4P3qF.js";import"./FLoadIcon-CJgWVWfz.js";const M={title:"Material/FSearchableSelect",component:d,argTypes:{label:{control:"text",description:"Подпись к полю"},placeholder:{control:"text",description:"Плейсхолдер"},disabled:{control:"boolean",description:"Отключение поля"},fullWidth:{control:"boolean",description:"Растянуть на всю ширину"},load:{control:"boolean",description:"Состояние загрузки (блокирует ввод)"},allowCreate:{control:"boolean",description:"Разрешить создание новых значений. Если false — работает как строгий Select."},errText:{control:"object",description:"Массив с текстами ошибок"},helpText:{control:"text",description:"Вспомогательный текст снизу"},st:{control:"object",description:"Инлайн-стили контейнера"},value:{control:"text",description:"Текущее значение (контролируемое)"}},parameters:{controls:{expanded:!0},docs:{description:{component:"Компонент выбора с поиском. Поддерживает создание новых значений (как ComboBox) или строгий выбор из списка. Полностью совместим с React Hook Form."}}}},O=[{value:"msk",label:"Москва"},{value:"spb",label:"Санкт-Петербург"},{value:"kzn",label:"Казань"},{value:"ekb",label:"Екатеринбург"},{value:"nsk",label:"Новосибирск"},{value:"vlad",label:"Владивосток"}],V=O.map(e=>a.jsx("option",{value:e.value,children:e.label},e.value)),r={args:{label:"Выберите город",placeholder:"Начните вводить...",disabled:!1,fullWidth:!1,load:!1,allowCreate:!0,errText:void 0,helpText:"Можно выбрать из списка или ввести свой вариант"},render:e=>{const[c,i]=g.useState(String(e.value||""));g.useEffect(()=>{e.value!==void 0&&i(String(e.value))},[e.value]);const z=u=>{var p;i(u.target.value),(p=e.onChange)==null||p.call(e,u)};return a.jsxs("div",{style:{minHeight:"250px"},children:[a.jsx(d,{...e,value:c,onChange:z,children:V}),a.jsxs("div",{style:{marginTop:20,fontSize:12,fontFamily:"monospace",color:"#666"},children:["Current Value: ",a.jsx("strong",{children:c||"(empty)"})]})]})}},l={args:{...r.args,label:"Строгий выбор (allowCreate=false)",helpText:"Ввод текста только фильтрует список. Свое значение ввести нельзя.",allowCreate:!1},render:r.render},t={args:{...r.args,label:"Поле с ошибкой",errText:["Это поле обязательно для заполнения","Некорректный формат"],value:"wrong_value"},render:r.render},n={args:{...r.args,label:"Поле с подсказкой",helpText:"Выберите город доставки из списка"},render:r.render},o={args:{...r.args,label:"Загрузка данных...",placeholder:"Пожалуйста, подождите...",load:!0},render:r.render},s={args:{...r.args,label:"Поле на всю ширину",fullWidth:!0,width:"100%"},render:e=>a.jsxs("div",{style:{width:"100%",border:"1px dashed #ccc",padding:10},children:[a.jsx("p",{style:{marginBottom:10,fontSize:12},children:"Контейнер 100% ширины:"}),a.jsx(d,{...e,children:V})]})};var h,m,v;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Выберите город',
    placeholder: 'Начните вводить...',
    disabled: false,
    fullWidth: false,
    load: false,
    allowCreate: true,
    errText: undefined,
    helpText: 'Можно выбрать из списка или ввести свой вариант'
  },
  render: args => {
    // Эмуляция контролируемого состояния
    const [value, setValue] = useState<string>(String(args.value || ""));

    // Синхронизация с контролами Storybook
    useEffect(() => {
      if (args.value !== undefined) setValue(String(args.value));
    }, [args.value]);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | {
      target: {
        name: string;
        value: string;
      };
    }) => {
      setValue(e.target.value);
      args.onChange?.(e as any);
    };
    return <div style={{
      minHeight: '250px'
    }}>\r
                <FSearchableSelect {...args} value={value} onChange={handleChange}>\r
                    {childrenOptions}\r
                </FSearchableSelect>\r
                \r
                <div style={{
        marginTop: 20,
        fontSize: 12,
        fontFamily: 'monospace',
        color: '#666'
      }}>\r
                    Current Value: <strong>{value || '(empty)'}</strong>\r
                </div>\r
            </div>;
  }
}`,...(v=(m=r.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var b,x,f;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Playground.args,
    label: 'Строгий выбор (allowCreate=false)',
    helpText: 'Ввод текста только фильтрует список. Свое значение ввести нельзя.',
    allowCreate: false
  },
  render: Playground.render
}`,...(f=(x=l.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var S,y,C;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Playground.args,
    label: 'Поле с ошибкой',
    errText: ['Это поле обязательно для заполнения', 'Некорректный формат'],
    value: 'wrong_value'
  },
  render: Playground.render
}`,...(C=(y=t.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var T,w,j;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Playground.args,
    label: 'Поле с подсказкой',
    helpText: 'Выберите город доставки из списка'
  },
  render: Playground.render
}`,...(j=(w=n.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var F,P,W;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...Playground.args,
    label: 'Загрузка данных...',
    placeholder: "Пожалуйста, подождите...",
    load: true
  },
  render: Playground.render
}`,...(W=(P=o.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var E,k,H;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Playground.args,
    label: 'Поле на всю ширину',
    fullWidth: true,
    width: '100%'
  },
  render: args => <div style={{
    width: '100%',
    border: '1px dashed #ccc',
    padding: 10
  }}>\r
            <p style={{
      marginBottom: 10,
      fontSize: 12
    }}>Контейнер 100% ширины:</p>\r
            <FSearchableSelect {...args}>\r
                {childrenOptions}\r
            </FSearchableSelect>\r
        </div>
}`,...(H=(k=s.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};const D=["Playground","StrictSelect","WithError","WithHelpText","Loading","FullWidth"];export{s as FullWidth,o as Loading,r as Playground,l as StrictSelect,t as WithError,n as WithHelpText,D as __namedExportsOrder,M as default};
