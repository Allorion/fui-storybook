import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-B3j06Xw8.js";import{Q as S,a as T}from"./QueryClientProvider-THqb51Ql.js";import{F as A}from"./FButton-wCVY7eIs.js";import"./FButtonFile-D2S8Q-gm.js";import"./FTextField-Bfcy-agq.js";import"./FStack-Bjsadt8I.js";import"./FGridRow-DPVPfH0m.js";import"./FContainer-D9oNryDS.js";import"./FPaper-Dn0vIXiP.js";import"./FTableFooter-WMoZ_F9z.js";import"./index-D_ywfbVi.js";import"./FDialogFooter-CkU-JZz2.js";import"./FProgress-CuUSEf8T.js";import"./FPreloader-Cq7UpuSU.js";import"./FCheckbox-CS1dTR8V.js";import"./FRadioButton-BLRA_gon.js";import"./FPagination-BKiZX-c7.js";import"./FTimelineCard-G_wv4YPr.js";import"./FOpenImgFull-yZcklQ0k.js";import"./FAccordion-DmXO5bBB.js";import"./FInputFileForm-CgROixNk.js";import"./FFile-BDXU6Ifc.js";import"./FSelectItem-C-_xf1fC.js";import"./FFullDateField-BAvOAkZw.js";import"./FSelectSearchDb-9J14UTwR.js";import"./FTextArea-D2Oj51U_.js";import"./FCloseIcon-DdRZhJBn.js";/* empty css                */import"./FTab-DB5xXUf7.js";import"./FDropdownItem-YzbPD2d9.js";import"./FSearchBox-6sTLn0W8.js";import"./FCarouselItem-DbNUFCsz.js";import"./FSkeleton-Bmt12B6C.js";import"./FNavigateBarItem-BtOG1U8l.js";import"./FMenuLinks-Cbdq1Y8F.js";import"./FTooltip-BJ8WMW_6.js";import"./FSearchableSelect-CuS-Phed.js";import{u as B,L as _}from"./LibraryProvider-C0W0iA46.js";import{u as k}from"./useQuery-BR0io2vp.js";import"./jszip.min-Dbd3Wm32.js";import"./allorion-exporting-html-to-docx.es-DCozvCwW.js";import"./server.browser-C_ryhKp0.js";import"./allorion-exporting-html-to-xlsx.es-VRd7k21f.js";import{f as Q}from"./fNotification-DiB-4WV0.js";import{f as u}from"./fNotificationDelete-B0P-aVAS.js";import"./FLoadIcon-CJgWVWfz.js";import"./index-DW0t0JKo.js";import"./FDialog-Ccy_5XvS.js";import"./FArrowIcon-e6BJPakw.js";import"./FTrashIcon-DpmD7QBY.js";import"./fGenerateUniqueId-BDtj4-Pu.js";const N=(r,n,s,a)=>{const{apiService:p}=B(),{onErrorNotification:f=!1,onErrorLog:g=!1,onLoadingLog:v=!1,notificationTitle:y="Ошибка выполнения запроса!",notificationBody:h=e=>(e==null?void 0:e.message)||"Неизвестная ошибка",loadingNotificationTitle:x="Загрузка",loadingNotificationBody:E="Идет загрузка, пожалуйста, подождите...",...j}=a||{},L=j.method??"GET",c=r.length>1?r[r.length-1]:void 0,F=typeof c=="object"&&c!==null?c:void 0,o=k({queryKey:r,queryFn:({signal:e})=>p.request(n,{method:L,signal:e,...s,...L==="POST"?{data:F}:{params:F}}),...j});d.useEffect(()=>{o.isError&&(f&&Q({variant:"error",title:y,body:h(o.error??null),timeSecClose:3}),g&&o.error&&console.error(o.error))},[o.isError,o.error,f,g,y,h]);const t=d.useRef(void 0);return d.useEffect(()=>{let e=!0;return(async()=>{if(v&&o.isLoading&&!t.current){const l=await Q({variant:"info",title:x,body:E});e?t.current=l:l&&u(l)}})(),!o.isLoading&&t.current&&(u(t.current),t.current=void 0),()=>{e=!1,t.current&&(u(t.current),t.current=void 0)}},[o.isLoading,v,x,E]),o},O={request:async()=>({id:1,name:"Алексей",email:"alex@example.com"})},M=({children:r})=>{const n=d.useMemo(()=>new S,[]),s=d.useMemo(()=>({apiService:O}),[]);return i.jsx(_,{config:s,children:i.jsx(T,{client:n,children:r})})},Mr={title:"Hooks/useFApiQuery",component:N,decorators:[r=>i.jsx(M,{children:i.jsx(r,{})})]},m=()=>{const{data:r,isLoading:n,isError:s,error:a,refetch:p}=N(["demo-user",{includeDetails:!0}],"/api/demo/user");return i.jsxs("div",{style:{display:"grid",gap:12},children:[i.jsx(A,{onClick:()=>p(),children:"Повторить запрос"}),n&&i.jsx("div",{children:"Загрузка..."}),s&&i.jsxs("div",{style:{color:"crimson"},children:["Ошибка: ",a==null?void 0:a.message]}),r&&i.jsxs("div",{children:[i.jsxs("div",{children:["Имя: ",r.name]}),i.jsxs("div",{children:["Email: ",r.email]})]})]})};m.__docgenInfo={description:"",methods:[],displayName:"Default"};var b,C,D;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch
  } = useFApiQuery<{
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
}`,...(D=(C=m.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};const Pr=["Default"];export{m as Default,Pr as __namedExportsOrder,Mr as default};
