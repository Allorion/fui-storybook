import{j as m}from"./jsx-runtime-Cf8x2fCZ.js";import{r as a}from"./index-DY-snNUy.js";import{F as d}from"./FSelectSearchDb-CBryvi2r.js";import{a as u}from"./index-B-lxVbXh.js";import"./index-yBjzXJbu.js";import"./FArrowIcon-AjsFl5uk.js";import"./FTextField-DtoXRif2.js";import"./FLoadIcon-Dfwkb_VK.js";import"./v4-CtRu48qb.js";const C={title:"Material/FSelectSearchDb",component:d,argTypes:{label:{control:{type:"text"},defaultValue:"Поиск"},placeholder:{control:{type:"text"},defaultValue:"Введите запрос"},fullWidth:{control:{type:"boolean"},defaultValue:!1},disabled:{control:{type:"boolean"},defaultValue:!1},readOnly:{control:{type:"boolean"},defaultValue:!1},required:{control:{type:"boolean"},defaultValue:!1},errText:{control:{type:"object"}},helpText:{control:{type:"text"}},minLengthText:{control:{type:"number"},defaultValue:3},defaultValue:{control:{type:"text"}}}},i=async e=>(await new Promise(t=>setTimeout(t,1e3)),[{id:1,name:"Москва"},{id:2,name:"Санкт-Петербург"},{id:3,name:"Новосибирск"},{id:4,name:"Екатеринбург"},{id:5,name:"Казань"}].filter(t=>t.name.toLowerCase().includes(e.toLowerCase()))),c=e=>{const[t,n]=a.useState(null);a.useEffect(()=>{t!==null&&u("Выбранный элемент")(t)},[t]);const l=f=>{n(f??null)};return m.jsx(d,{...e,fetchingFunc:i,selectedElement:l,selectItem:f=>f.name})};c.args={label:"Выберите город",placeholder:"Введите название города",helpText:"Введите минимум 3 символа для поиска",fullWidth:!1};const s=()=>{const[e,t]=a.useState(null);a.useEffect(()=>{e!==null&&u("Выбранный элемент")(e)},[e]);const n=l=>{t(l??null)};return m.jsx(d,{label:"Выберите город",placeholder:"Введите название города",fetchingFunc:i,selectedElement:n,selectItem:l=>l.name,errText:["Поле обязательно для заполнения"]})},r=()=>{const[e,t]=a.useState(null);a.useEffect(()=>{e!==null&&u("Выбранный элемент")(e)},[e]);const n=l=>{t(l??null)};return m.jsx(d,{label:"Выберите город",placeholder:"Введите название города",fetchingFunc:i,selectedElement:n,selectItem:l=>l.name,defaultValue:"Москва"})},o=()=>{const[e,t]=a.useState(null);a.useEffect(()=>{e!==null&&u("Выбранный элемент")(e)},[e]);const n=l=>{t(l??null)};return m.jsx(d,{label:"Выберите город",placeholder:"Введите название города",fetchingFunc:i,selectedElement:n,selectItem:l=>l.name,disabled:!0})};c.__docgenInfo={description:"",methods:[],displayName:"Playground"};s.__docgenInfo={description:"",methods:[],displayName:"WithError"};r.__docgenInfo={description:"",methods:[],displayName:"WithDefaultValue"};o.__docgenInfo={description:"",methods:[],displayName:"Disabled"};var I,p,h;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`(args: Partial<IFSelectSearchDb<IData>>) => {
  const [selectedItem, setSelectedItem] = useState<IData | null>(null);
  useEffect(() => {
    if (selectedItem !== null) {
      action('Выбранный элемент')(selectedItem);
    }
  }, [selectedItem]);
  const handleSelectedElement = (item: IData | null | undefined) => {
    setSelectedItem(item ?? null);
  };
  return <FSelectSearchDb<IData> {...args} fetchingFunc={mockFetchData} selectedElement={handleSelectedElement} selectItem={(item: IData) => item.name} />;
}`,...(h=(p=c.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var S,D,E;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const [selectedItem, setSelectedItem] = useState<IData | null>(null);
  useEffect(() => {
    if (selectedItem !== null) {
      action('Выбранный элемент')(selectedItem);
    }
  }, [selectedItem]);
  const handleSelectedElement = (item: IData | null | undefined) => {
    setSelectedItem(item ?? null);
  };
  return <FSelectSearchDb<IData> label="Выберите город" placeholder="Введите название города" fetchingFunc={mockFetchData} selectedElement={handleSelectedElement} selectItem={(item: IData) => item.name} errText={['Поле обязательно для заполнения']} />;
}`,...(E=(D=s.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var b,g,F;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const [selectedItem, setSelectedItem] = useState<IData | null>(null);
  useEffect(() => {
    if (selectedItem !== null) {
      action('Выбранный элемент')(selectedItem);
    }
  }, [selectedItem]);
  const handleSelectedElement = (item: IData | null | undefined) => {
    setSelectedItem(item ?? null);
  };
  return <FSelectSearchDb<IData> label="Выберите город" placeholder="Введите название города" fetchingFunc={mockFetchData} selectedElement={handleSelectedElement} selectItem={(item: IData) => item.name} defaultValue="Москва" />;
}`,...(F=(g=r.parameters)==null?void 0:g.docs)==null?void 0:F.source}}};var y,x,V;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const [selectedItem, setSelectedItem] = useState<IData | null>(null);
  useEffect(() => {
    if (selectedItem !== null) {
      action('Выбранный элемент')(selectedItem);
    }
  }, [selectedItem]);
  const handleSelectedElement = (item: IData | null | undefined) => {
    setSelectedItem(item ?? null);
  };
  return <FSelectSearchDb<IData> label="Выберите город" placeholder="Введите название города" fetchingFunc={mockFetchData} selectedElement={handleSelectedElement} selectItem={(item: IData) => item.name} disabled />;
}`,...(V=(x=o.parameters)==null?void 0:x.docs)==null?void 0:V.source}}};const O=["Playground","WithError","WithDefaultValue","Disabled"];export{o as Disabled,c as Playground,r as WithDefaultValue,s as WithError,O as __namedExportsOrder,C as default};
