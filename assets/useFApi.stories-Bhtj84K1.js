import{j as p}from"./jsx-runtime-D_zvdyIk.js";import{F as B}from"./FButton-WshjMl_j.js";import"./FButtonFile-ndsUyZDv.js";import"./FTextField-G4sFh9Uf.js";import"./FStack-Bjsadt8I.js";import"./FGridRow-DPVPfH0m.js";import"./FContainer-D9oNryDS.js";import"./FPaper-C96cUb7h.js";import"./FTableActions-BFXkna1l.js";import{r as d}from"./index-B3j06Xw8.js";import"./index-D_ywfbVi.js";import"./FDialogFooter-BIStOcG8.js";import"./FProgress-B1PkuN98.js";import"./FPreloader-Cq7UpuSU.js";import"./FCheckbox-C2Fn5p4I.js";import"./FRadioButton-CCi8vwMO.js";import"./FPagination-DkwE8RRm.js";import"./FTimelineCard-G_wv4YPr.js";import"./FOpenImgFull-CxKvm-Cn.js";import"./FAccordion-B22xNC65.js";import"./FInputFileForm-CI_bUF6k.js";import"./FFile-ALKQqT-R.js";import"./FSelectItem-BAXWPI2S.js";import"./FFullDateField-bov5uJB9.js";import"./FSelectSearchDb-5nHlLFKL.js";import"./FTextArea-ChmymgEf.js";import"./FCloseIcon-DdRZhJBn.js";/* empty css                */import"./FTab-4EmqzD2P.js";import"./FDropdownItem-3TiL9ogE.js";import"./FSearchBox-fdjYAM33.js";import"./FCarouselItem-DbNUFCsz.js";import"./FSkeleton-iaIByH-O.js";import"./FNavigateBarItem-BtOG1U8l.js";import"./FMenuLinks-Cbdq1Y8F.js";import"./FTooltip-BJ8WMW_6.js";import"./FSearchableSelect-DPsz2xcQ.js";import"./FSegmentedControl-DhW7n95-.js";import"./FStatusBadge-CaCHJHW5.js";import{a as L,g as S,b as T,n as C,c as E,d as $}from"./FLibraryProvider-CqwcohxZ.js";import"./jszip.min-Dbd3Wm32.js";import"./allorion-exporting-html-to-docx.es-DCozvCwW.js";import"./server.browser-C_ryhKp0.js";import"./allorion-exporting-html-to-xlsx.es-VRd7k21f.js";import{f as G}from"./fNotification-vnFpW_Yq.js";import{a as H}from"./index-B-lxVbXh.js";import"./FLoadIcon-B2O1XWAm.js";import"./index-DW0t0JKo.js";import"./FDialog-snE0jNMB.js";import"./FArrowIcon-e6BJPakw.js";import"./FTrashIcon-DpmD7QBY.js";import"./fGenerateUniqueId-BDtj4-Pu.js";import"./v4-CtRu48qb.js";const O=({doNotUseState:r=!1,defaultState:e=null,getValueByPath:s=void 0,requestObserver:l=void 0}={})=>{const i=L(),n=l??(i==null?void 0:i.requestObserver),[_,u]=d.useState(e===void 0?null:e),[q,v]=d.useState(!1),[w,h]=d.useState(null);return{data:_,loading:q,error:w,execute:async a=>{var F,j,b;v(!0),h(null);const x=n?S():0,y=(a.method||"GET").toUpperCase(),g=a.url??"";try{const o=await T(a);if(n&&C(n,{method:y,url:g,status:o.status,durationMs:E(x),outcome:"success"}),s){let t=o.data;const c=s.split(".");for(const f of c)if(t=t==null?void 0:t[f],t===void 0)break;return r||u(t??null),t??null}else return r||u(o.data),o.data}catch(o){if(n){const{outcome:f,errorCategory:M,status:R}=$(o);C(n,{method:y,url:g,status:R,durationMs:E(x),outcome:f,errorCategory:M})}const t=o,c=((j=(F=t.response)==null?void 0:F.data)==null?void 0:j.message)||t.message||"Неизвестная ошибка";return G({variant:"error",title:"Ошибка",body:`- Произошла ошибка ${(b=t.response)==null?void 0:b.status}
- ${c}`,timeSecClose:5}),h(c),null}finally{v(!1)}},reset:a=>{r||u(a)}}},Nt={title:"Hooks/useFApi",component:O},m=()=>{const{data:r,loading:e,error:s,execute:l}=O(),i=async()=>{await l({url:"https://jsonplaceholder.typicode.com/users/1"})};return d.useEffect(()=>{r&&H("Данные из useFApi")(r)},[r]),p.jsxs("div",{children:[p.jsx(B,{onClick:i,disabled:e,children:"Получить имя пользователя"}),e&&p.jsx("div",{children:"Загрузка..."}),s&&p.jsxs("div",{style:{color:"red"},children:["Ошибка: ",s]}),r&&p.jsxs("div",{children:["Имя: ",r.name]})]})};m.__docgenInfo={description:"",methods:[],displayName:"Default"};var k,A,D;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const {
    data,
    loading,
    error,
    execute
  } = useFApi<{
    name: string;
  }>();
  const handleClick = async () => {
    await execute({
      url: 'https://jsonplaceholder.typicode.com/users/1'
    });
  };
  useEffect(() => {
    if (data) {
      action('Данные из useFApi')(data);
    }
  }, [data]);
  return <div>\r
            <FButton onClick={handleClick} disabled={loading}>\r
                Получить имя пользователя\r
            </FButton>\r
            {loading && <div>Загрузка...</div>}\r
            {error && <div style={{
      color: 'red'
    }}>Ошибка: {error}</div>}\r
            {data && <div>Имя: {data.name}</div>}\r
        </div>;
}`,...(D=(A=m.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const zt=["Default"];export{m as Default,zt as __namedExportsOrder,Nt as default};
