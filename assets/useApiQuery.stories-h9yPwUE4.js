import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-DEgj3Fem.js";import{Q as T,a as A}from"./QueryClientProvider-DsghdHsE.js";import{F as B}from"./FButton-DQOEJPUH.js";import"./FButtonFile-Cc8ubo-m.js";import"./FTextField-DSrbz1g8.js";import"./FStack-Bjsadt8I.js";import"./FGridRow-DPVPfH0m.js";import"./FContainer-D9oNryDS.js";import"./FPaper-ByA2FQvy.js";import"./FTableFooter-CoEhsmhU.js";import"./index-BknSE3li.js";import"./FDialogFooter-EZrNysQM.js";import"./FProgress-CuUSEf8T.js";import"./FPreloader-C0DO9d3w.js";import"./FCheckbox-CvjAvqQ6.js";import"./FRadioButton-CWco8Ir1.js";import"./FPagination-Bh5ADW89.js";import"./FTimelineCard-G_wv4YPr.js";import"./FOpenImgFull-BzaYDndu.js";import"./FAccordion-CUm2A8fo.js";import"./FInputFileForm-KMotnIpw.js";import"./FFile-BHJQGV29.js";import"./FSelectItem-BnNI1hqM.js";import"./FFullDateField-_mtt4yT5.js";import"./FSelectSearchDb-CtdF7gtg.js";import"./FTextArea-9qVfGzxf.js";import"./FCloseIcon-Dr7AIYCl.js";/* empty css                */import"./FTab-DHwok_rz.js";import"./FDropdownItem-D17eYKAm.js";import"./FSearchBox-Czmsapd1.js";import"./FCarouselItem-DRfQet_0.js";import"./FSkeleton-qmKtpPTy.js";import"./FNavigateBarItem-CQ1yOoQk.js";import"./FMenuLinks-CHiLRQZa.js";import"./FTooltip-CCrWwCPn.js";import"./FSearchableSelect-DXwJBXJB.js";import{u as F,L as _}from"./LibraryProvider-C02C9fZ4.js";import{u as k}from"./useQuery-BAgIxCx8.js";import"./jszip.min-DCsl6vQm.js";import"./allorion-exporting-html-to-docx.es-0JnQx4VA.js";import"./server.browser-b0nCMo6l.js";import"./allorion-exporting-html-to-xlsx.es-CK-z7zJe.js";import{f as b}from"./fNotification-DiB-4WV0.js";import{f as u}from"./fNotificationDelete-B0P-aVAS.js";import"./FLoadIcon-1-Td29NS.js";import"./index-DM3MU96Y.js";import"./FDialog-DPCiHy6F.js";import"./FArrowIcon-C21crw0H.js";import"./FTrashIcon-Da5Dd79F.js";import"./fGenerateUniqueId-BDtj4-Pu.js";const S=(r,n,s,a)=>{const{apiService:p}=F(),{onErrorNotification:f=!1,onErrorLog:g=!1,onLoadingLog:v=!1,notificationTitle:y="Ошибка выполнения запроса!",notificationBody:h=e=>(e==null?void 0:e.message)||"Неизвестная ошибка",loadingNotificationTitle:x="Загрузка",loadingNotificationBody:E="Идет загрузка, пожалуйста, подождите...",...j}=a||{},L=j.method??"GET",c=r.length>1?r[r.length-1]:void 0,Q=typeof c=="object"&&c!==null?c:void 0,o=k({queryKey:r,queryFn:({signal:e})=>p.request(n,{method:L,signal:e,...s,...L==="POST"?{data:Q}:{params:Q}}),...j});d.useEffect(()=>{o.isError&&(f&&b({variant:"error",title:y,body:h(o.error??null),timeSecClose:3}),g&&o.error&&console.error(o.error))},[o.isError,o.error,f,g,y,h]);const t=d.useRef(void 0);return d.useEffect(()=>{let e=!0;return(async()=>{if(v&&o.isLoading&&!t.current){const l=await b({variant:"info",title:x,body:E});e?t.current=l:l&&u(l)}})(),!o.isLoading&&t.current&&(u(t.current),t.current=void 0),()=>{e=!1,t.current&&(u(t.current),t.current=void 0)}},[o.isLoading,v,x,E]),o},O={request:async()=>({id:1,name:"Алексей",email:"alex@example.com"})},M=({children:r})=>{const n=d.useMemo(()=>new T,[]),s=d.useMemo(()=>({apiService:O}),[]);return i.jsx(_,{config:s,children:i.jsx(A,{client:n,children:r})})},Mr={title:"Hooks/useApiQuery",component:S,decorators:[r=>i.jsx(M,{children:i.jsx(r,{})})]},m=()=>{const{data:r,isLoading:n,isError:s,error:a,refetch:p}=S(["demo-user",{includeDetails:!0}],"/api/demo/user");return i.jsxs("div",{style:{display:"grid",gap:12},children:[i.jsx(B,{onClick:()=>p(),children:"Повторить запрос"}),n&&i.jsx("div",{children:"Загрузка..."}),s&&i.jsxs("div",{style:{color:"crimson"},children:["Ошибка: ",a==null?void 0:a.message]}),r&&i.jsxs("div",{children:[i.jsxs("div",{children:["Имя: ",r.name]}),i.jsxs("div",{children:["Email: ",r.email]})]})]})};m.__docgenInfo={description:"",methods:[],displayName:"Default"};var C,D,N;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch
  } = useApiQuery<{
    id: number;
    name: string;
    email: string;
  }, {
    id: number;
    name: string;
    email: string;
  }>(['demo-user', {
    includeDetails: true
  }], '/api/demo/user');
  return <div style={{
    display: 'grid',
    gap: 12
  }}>\r
            <FButton onClick={() => refetch()}>Повторить запрос</FButton>\r
            {isLoading && <div>Загрузка...</div>}\r
            {isError && <div style={{
      color: 'crimson'
    }}>Ошибка: {error?.message}</div>}\r
            {data && <div>\r
                    <div>Имя: {data.name}</div>\r
                    <div>Email: {data.email}</div>\r
                </div>}\r
        </div>;
}`,...(N=(D=m.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};const Pr=["Default"];export{m as Default,Pr as __namedExportsOrder,Mr as default};
