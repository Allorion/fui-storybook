import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-B3j06Xw8.js";import{u as D,Q as K,a as G}from"./QueryClientProvider-THqb51Ql.js";import{F as H}from"./FButton-WshjMl_j.js";import"./FButtonFile-ndsUyZDv.js";import"./FTextField-G4sFh9Uf.js";import"./FStack-Bjsadt8I.js";import"./FGridRow-DPVPfH0m.js";import"./FContainer-D9oNryDS.js";import"./FPaper-C96cUb7h.js";import"./FTableActions-BFXkna1l.js";import"./index-D_ywfbVi.js";import"./FDialogFooter-BIStOcG8.js";import"./FProgress-B1PkuN98.js";import"./FPreloader-Cq7UpuSU.js";import"./FCheckbox-C2Fn5p4I.js";import"./FRadioButton-CCi8vwMO.js";import"./FPagination-DkwE8RRm.js";import"./FTimelineCard-G_wv4YPr.js";import"./FOpenImgFull-CxKvm-Cn.js";import"./FAccordion-B22xNC65.js";import"./FInputFileForm-CI_bUF6k.js";import"./FFile-ALKQqT-R.js";import"./FSelectItem-BAXWPI2S.js";import"./FFullDateField-bov5uJB9.js";import"./FSelectSearchDb-5nHlLFKL.js";import"./FTextArea-ChmymgEf.js";import"./FCloseIcon-DdRZhJBn.js";/* empty css                */import"./FTab-4EmqzD2P.js";import"./FDropdownItem-3TiL9ogE.js";import"./FSearchBox-fdjYAM33.js";import"./FCarouselItem-DbNUFCsz.js";import"./FSkeleton-iaIByH-O.js";import"./FNavigateBarItem-BtOG1U8l.js";import"./FMenuLinks-Cbdq1Y8F.js";import"./FTooltip-BJ8WMW_6.js";import"./FSearchableSelect-DPsz2xcQ.js";import"./FSegmentedControl-DhW7n95-.js";import"./FStatusBadge-CaCHJHW5.js";import{u as I,F as W}from"./FLibraryProvider-CqwcohxZ.js";import{u as z}from"./useQuery-BR0io2vp.js";import"./jszip.min-Dbd3Wm32.js";import"./allorion-exporting-html-to-docx.es-DCozvCwW.js";import"./server.browser-C_ryhKp0.js";import"./allorion-exporting-html-to-xlsx.es-VRd7k21f.js";import{f as V}from"./fNotification-vnFpW_Yq.js";import"./FLoadIcon-B2O1XWAm.js";import"./index-DW0t0JKo.js";import"./FDialog-snE0jNMB.js";import"./FArrowIcon-e6BJPakw.js";import"./FTrashIcon-DpmD7QBY.js";import"./fGenerateUniqueId-BDtj4-Pu.js";function R(t,i,n,g,d){const{apiService:y}=I(),q=D(),[m,_]=o.useState(n),[a,w]=o.useState(d==null?void 0:d.urlParams),[F,B]=o.useState(void 0),{onErrorNotification:k=!1,onErrorLog:E=!1,onLoadingLog:L=!1,notificationTitle:O="Ошибка выполнения запроса!",notificationBody:A=r=>(r==null?void 0:r.message)||"Неизвестная ошибка",...u}=d||{},b=u.method??"GET",S=[t];m&&S.push(m),a&&S.push(a);const P=o.useCallback((r,l,x,c)=>{const f=r!==void 0?r:m,s=l!==void 0?l:a,p=x!==void 0?x:F,Q=p!==void 0?i+p:i;return y.request(Q,{method:b,signal:c,...g,...b==="POST"?{data:f,params:s}:{params:s?{...f,...s}:f}})},[y,m,a,F,i,b,g]),j=z({queryKey:S,queryFn:({signal:r})=>P(void 0,void 0,void 0,r),enabled:!1,...u}),M=o.useCallback(r=>{k&&V({variant:"error",title:O,body:A(r??null),timeSecClose:3}),E&&console.error(r)},[k,O,A,E]);o.useEffect(()=>{L&&j.isFetching&&console.log(`[useFManualApiQuery] Loading: ${i}`)},[j.isFetching,L,i]);const J=o.useCallback(async({newParams:r,newUrlParams:l,preserveParams:x=!1,dopUrl:c,preserveUrlParams:f=!1}={})=>{const s=x&&r===void 0?m:r,p=l===void 0?a:f?{...a,...l}:l,Q=c!==void 0?c:F;_(s),w(p),c!==void 0&&B(c);const C=[t];s&&C.push(s),p&&C.push(p);try{const v=await q.fetchQuery({queryKey:C,queryFn:({signal:$})=>P(s,p,Q,$),staleTime:u.staleTime});return u.select?u.select(v):v}catch(v){throw M(v),v}},[m,a,F,t,P,q,u,M]);return{...j,run:J,params:m,urlParams:a}}const X={request:async(t,i)=>{if(t==="/api/demo/manual"){const n=(i==null?void 0:i.data)??{};return{items:[{id:n.page??1,label:`Результат для ${n.q??"all"}`}]}}throw new Error(`Неизвестный URL: ${t}`)}},Y=({children:t})=>{const i=o.useMemo(()=>new K,[]),n=o.useMemo(()=>({apiService:X}),[]);return e.jsx(W,{config:n,children:e.jsx(G,{client:i,children:t})})},Yr={title:"Hooks/useFManualApiQuery",component:R,decorators:[t=>e.jsx(Y,{children:e.jsx(t,{})})]},h=()=>{var y;const{data:t,isFetching:i,run:n,params:g,urlParams:d}=R("manual-demo","/api/demo/manual",{page:1},void 0,{method:"POST"});return e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx(H,{onClick:()=>n({newParams:{page:2,q:"storybook"},newUrlParams:{mode:"demo"}}),children:"Выполнить ручной запрос"}),i&&e.jsx("div",{children:"Загрузка..."}),t&&e.jsxs("div",{children:[e.jsxs("div",{children:["Параметры: ",JSON.stringify(g)]}),e.jsxs("div",{children:["URL-параметры: ",JSON.stringify(d)]}),e.jsxs("div",{children:["Результат: ",(y=t.items[0])==null?void 0:y.label]})]})]})};h.__docgenInfo={description:"",methods:[],displayName:"Default"};var N,T,U;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  const {
    data,
    isFetching,
    run,
    params,
    urlParams
  } = useFManualApiQuery<{
    items: Array<{
      id: number;
      label: string;
    }>;
  }, {
    items: Array<{
      id: number;
      label: string;
    }>;
  }, {
    page: number;
    q?: string;
  }>('manual-demo', '/api/demo/manual', {
    page: 1
  }, undefined, {
    method: 'POST'
  });
  return <div style={{
    display: 'grid',
    gap: 12
  }}>\r
            <FButton onClick={() => run({
      newParams: {
        page: 2,
        q: 'storybook'
      },
      newUrlParams: {
        mode: 'demo'
      }
    })}>\r
                Выполнить ручной запрос\r
            </FButton>\r
            {isFetching && <div>Загрузка...</div>}\r
            {data && <div>\r
                    <div>Параметры: {JSON.stringify(params)}</div>\r
                    <div>URL-параметры: {JSON.stringify(urlParams)}</div>\r
                    <div>Результат: {data.items[0]?.label}</div>\r
                </div>}\r
        </div>;
}`,...(U=(T=h.parameters)==null?void 0:T.docs)==null?void 0:U.source}}};const Zr=["Default"];export{h as Default,Zr as __namedExportsOrder,Yr as default};
