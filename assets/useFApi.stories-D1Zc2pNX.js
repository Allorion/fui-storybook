import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{F as S}from"./FButton-WshjMl_j.js";import"./FButtonFile-ndsUyZDv.js";import"./FTextField-G4sFh9Uf.js";import"./FStack-Bjsadt8I.js";import"./FGridRow-DPVPfH0m.js";import"./FContainer-D9oNryDS.js";import"./FPaper-C96cUb7h.js";import"./FTableActions-CSP0-rhc.js";import{r as l}from"./index-B3j06Xw8.js";import"./index-D_ywfbVi.js";import"./FDialogFooter-BsOGDZKD.js";import"./FProgress-B1PkuN98.js";import"./FPreloader-Cq7UpuSU.js";import"./FCheckbox-C2Fn5p4I.js";import"./FRadioButton-CCi8vwMO.js";import"./FPagination-DkwE8RRm.js";import"./FTimelineCard-G_wv4YPr.js";import"./FCloseIcon-DdRZhJBn.js";import"./FArrowIcon-e6BJPakw.js";import"./FDownloadIcon-CBN19oNF.js";import"./FImagePreview-BI_HHImE.js";import"./FVideoPlayer-BgLjSeQA.js";import"./FAccordion-B22xNC65.js";import"./FInputFileForm-CI_bUF6k.js";import"./FFile-ALKQqT-R.js";import"./FSelectItem-BAXWPI2S.js";import"./FFullDateField-bov5uJB9.js";import"./FSelectSearchDb-5nHlLFKL.js";import"./FTextArea-ChmymgEf.js";/* empty css                */import"./FTab-4EmqzD2P.js";import"./FDropdownItem-3TiL9ogE.js";import"./FSearchBox-fdjYAM33.js";import"./FCarouselItem-DbNUFCsz.js";import"./FSkeleton-iaIByH-O.js";import"./FNavigateBarItem-BtOG1U8l.js";import"./FMenuLinks-Cbdq1Y8F.js";import"./FTooltip-BJ8WMW_6.js";import"./FSearchableSelect-DPsz2xcQ.js";import"./FSegmentedControl-DhW7n95-.js";import"./FStatusBadge-CaCHJHW5.js";import{a as T,g as $,b as G,n as C,c as k,d as H,e as I,f as N}from"./FLibraryProvider-DOMQR_8P.js";import"./jszip.min-Dbd3Wm32.js";import"./allorion-exporting-html-to-docx.es-DCozvCwW.js";import"./server.browser-C_ryhKp0.js";import"./allorion-exporting-html-to-xlsx.es-VRd7k21f.js";import{f as z}from"./fNotification-vnFpW_Yq.js";import{a as J}from"./index-B-lxVbXh.js";import"./FLoadIcon-B2O1XWAm.js";import"./index-DW0t0JKo.js";import"./FOpenImgFull-D3oCg-l2.js";import"./FTrashIcon-DpmD7QBY.js";import"./fGenerateUniqueId-BDtj4-Pu.js";import"./v4-CtRu48qb.js";const O=({doNotUseState:r=!1,defaultState:i=null,getValueByPath:n=void 0,requestObserver:u=void 0}={})=>{const a=T(),e=u??(a==null?void 0:a.requestObserver),[_,f]=l.useState(i===void 0?null:i),[w,h]=l.useState(!1),[B,x]=l.useState(null);return{data:_,loading:w,error:B,execute:async s=>{var F,E,j;h(!0),x(null);const y=e?$():0,v=(s.method||"GET").toUpperCase(),g=s.url??"";try{const o=await G(s);if(e&&C(e,{method:v,url:g,status:o.status,durationMs:k(y),outcome:"success"}),n){let t=o.data;const d=n.split(".");for(const p of d)if(t=t==null?void 0:t[p],t===void 0)break;return r||f(t??null),t??null}else return r||f(o.data),o.data}catch(o){if(e){const{outcome:p,errorCategory:M,status:L}=H(o),R=p==="failure"?I(o):void 0,b=N(e,v,p,o,s.data);C(e,{method:v,url:g,status:L,durationMs:k(y),outcome:p,errorCategory:M,...R?{errorResponse:R}:{},...b!==void 0?{errorRequestBody:b}:{}})}const t=o,d=((E=(F=t.response)==null?void 0:F.data)==null?void 0:E.message)||t.message||"Неизвестная ошибка";return z({variant:"error",title:"Ошибка",body:`- Произошла ошибка ${(j=t.response)==null?void 0:j.status}
- ${d}`,timeSecClose:5}),x(d),null}finally{h(!1)}},reset:s=>{r||f(s)}}},Wt={title:"Hooks/useFApi",component:O},c=()=>{const{data:r,loading:i,error:n,execute:u}=O(),a=async()=>{await u({url:"https://jsonplaceholder.typicode.com/users/1"})};return l.useEffect(()=>{r&&J("Данные из useFApi")(r)},[r]),m.jsxs("div",{children:[m.jsx(S,{onClick:a,disabled:i,children:"Получить имя пользователя"}),i&&m.jsx("div",{children:"Загрузка..."}),n&&m.jsxs("div",{style:{color:"red"},children:["Ошибка: ",n]}),r&&m.jsxs("div",{children:["Имя: ",r.name]})]})};c.__docgenInfo={description:"",methods:[],displayName:"Default"};var q,A,D;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
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
}`,...(D=(A=c.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const Xt=["Default"];export{c as Default,Xt as __namedExportsOrder,Wt as default};
