import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./index-B3j06Xw8.js";import{F as d}from"./FSelectSearchDb-5nHlLFKL.js";import{a as u}from"./index-B-lxVbXh.js";import"./index-D_ywfbVi.js";import"./index-DW0t0JKo.js";import"./FArrowIcon-e6BJPakw.js";import"./FTextField-G4sFh9Uf.js";import"./FLoadIcon-B2O1XWAm.js";import"./v4-CtRu48qb.js";const O={title:"Material/FSelectSearchDb",component:d,argTypes:{label:{control:{type:"text"},defaultValue:"Поиск"},placeholder:{control:{type:"text"},defaultValue:"Введите запрос"},fullWidth:{control:{type:"boolean"},defaultValue:!1},disabled:{control:{type:"boolean"},defaultValue:!1},readOnly:{control:{type:"boolean"},defaultValue:!1},required:{control:{type:"boolean"},defaultValue:!1},errText:{control:{type:"object"}},helpText:{control:{type:"text"}},minLengthText:{control:{type:"number"},defaultValue:3},defaultValue:{control:{type:"text"}}}},i=async e=>(await new Promise(l=>setTimeout(l,1e3)),[{id:1,name:"Москва"},{id:2,name:"Санкт-Петербург"},{id:3,name:"Новосибирск"},{id:4,name:"Екатеринбург"},{id:5,name:"Казань"}].filter(l=>l.name.toLowerCase().includes(e.toLowerCase()))),c=e=>{const[l,n]=a.useState(null);a.useEffect(()=>{l!==null&&u("Выбранный элемент")(l)},[l]);const t=f=>{n(f??null)};return m.jsx(d,{...e,fetchingFunc:i,selectedElement:t,selectItem:f=>f.name})};c.args={label:"Выберите город",placeholder:"Введите название города",helpText:"Введите минимум 3 символа для поиска",fullWidth:!1};const s=()=>{const[e,l]=a.useState(null);a.useEffect(()=>{e!==null&&u("Выбранный элемент")(e)},[e]);const n=t=>{l(t??null)};return m.jsx(d,{label:"Выберите город",placeholder:"Введите название города",fetchingFunc:i,selectedElement:n,selectItem:t=>t.name,errText:["Поле обязательно для заполнения"]})},o=()=>{const[e,l]=a.useState(null);a.useEffect(()=>{e!==null&&u("Выбранный элемент")(e)},[e]);const n=t=>{l(t??null)};return m.jsx(d,{label:"Выберите город",placeholder:"Введите название города",fetchingFunc:i,selectedElement:n,selectItem:t=>t.name,defaultValue:"Москва"})},r=()=>{const[e,l]=a.useState(null);a.useEffect(()=>{e!==null&&u("Выбранный элемент")(e)},[e]);const n=t=>{console.log(t),l(t??null)};return m.jsx(d,{label:"Выберите город",placeholder:"Введите название города",fetchingFunc:i,selectedElement:n,selectItem:t=>t.name,disabled:!0})};c.__docgenInfo={description:"",methods:[],displayName:"Playground"};s.__docgenInfo={description:"",methods:[],displayName:"WithError"};o.__docgenInfo={description:"",methods:[],displayName:"WithDefaultValue"};r.__docgenInfo={description:"",methods:[],displayName:"Disabled"};var I,p,h;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`(args: Partial<IFSelectSearchDb<IData>>) => {
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
}`,...(E=(D=s.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var b,g,F;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
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
}`,...(F=(g=o.parameters)==null?void 0:g.docs)==null?void 0:F.source}}};var y,x,V;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const [selectedItem, setSelectedItem] = useState<IData | null>(null);
  useEffect(() => {
    if (selectedItem !== null) {
      action('Выбранный элемент')(selectedItem);
    }
  }, [selectedItem]);
  const handleSelectedElement = (item: IData | null | undefined) => {
    console.log(item);
    setSelectedItem(item ?? null);
  };
  return <FSelectSearchDb<IData> label="Выберите город" placeholder="Введите название города" fetchingFunc={mockFetchData} selectedElement={handleSelectedElement} selectItem={(item: IData) => item.name} disabled />;
}`,...(V=(x=r.parameters)==null?void 0:x.docs)==null?void 0:V.source}}};const q=["Playground","WithError","WithDefaultValue","Disabled"];export{r as Disabled,c as Playground,o as WithDefaultValue,s as WithError,q as __namedExportsOrder,O as default};
