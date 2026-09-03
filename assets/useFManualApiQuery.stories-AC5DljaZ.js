import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-B3j06Xw8.js";import{u as D,Q as K,a as G}from"./QueryClientProvider-THqb51Ql.js";import{F as H}from"./FButton-WshjMl_j.js";import"./FButtonFile-ndsUyZDv.js";import"./FTextField-G4sFh9Uf.js";import"./FStack-Bjsadt8I.js";import"./FGridRow-DPVPfH0m.js";import"./FContainer-D9oNryDS.js";import"./FPaper-C96cUb7h.js";import"./FTableFooter-C_TeVRSf.js";import"./index-D_ywfbVi.js";import"./FDialogFooter-DEKgFpT2.js";import"./FProgress-B1PkuN98.js";import"./FPreloader-Cq7UpuSU.js";import"./FCheckbox-C2Fn5p4I.js";import"./FRadioButton-CCi8vwMO.js";import"./FPagination-DkwE8RRm.js";import"./FTimelineCard-G_wv4YPr.js";import"./FOpenImgFull-CjVGNnQc.js";import"./FAccordion-B22xNC65.js";import"./FInputFileForm-CI_bUF6k.js";import"./FFile-ALKQqT-R.js";import"./FSelectItem-BAXWPI2S.js";import"./FFullDateField-bov5uJB9.js";import"./FSelectSearchDb-5nHlLFKL.js";import"./FTextArea-ChmymgEf.js";import"./FCloseIcon-DdRZhJBn.js";/* empty css                */import"./FTab-4EmqzD2P.js";import"./FDropdownItem-3TiL9ogE.js";import"./FSearchBox-fdjYAM33.js";import"./FCarouselItem-DbNUFCsz.js";import"./FSkeleton-iaIByH-O.js";import"./FNavigateBarItem-BtOG1U8l.js";import"./FMenuLinks-Cbdq1Y8F.js";import"./FTooltip-BJ8WMW_6.js";import"./FSearchableSelect-DPsz2xcQ.js";import"./FSegmentedControl-DhW7n95-.js";import{u as I,L as W}from"./LibraryProvider-C0W0iA46.js";import{u as z}from"./useQuery-BR0io2vp.js";import"./jszip.min-Dbd3Wm32.js";import"./allorion-exporting-html-to-docx.es-DCozvCwW.js";import"./server.browser-C_ryhKp0.js";import"./allorion-exporting-html-to-xlsx.es-VRd7k21f.js";import{f as V}from"./fNotification-B39e5n7E.js";import"./FLoadIcon-B2O1XWAm.js";import"./index-DW0t0JKo.js";import"./FDialog-Cl6TNCBH.js";import"./FArrowIcon-e6BJPakw.js";import"./FTrashIcon-DpmD7QBY.js";import"./fGenerateUniqueId-BDtj4-Pu.js";function R(t,e,n,g,d){const{apiService:y}=I(),q=D(),[m,_]=o.useState(n),[a,w]=o.useState(d==null?void 0:d.urlParams),[x,B]=o.useState(void 0),{onErrorNotification:L=!1,onErrorLog:k=!1,onLoadingLog:E=!1,notificationTitle:O="Ошибка выполнения запроса!",notificationBody:A=r=>(r==null?void 0:r.message)||"Неизвестная ошибка",...u}=d||{},S=u.method??"GET",F=[t];m&&F.push(m),a&&F.push(a);const P=o.useCallback((r,l,b,c)=>{const f=r!==void 0?r:m,s=l!==void 0?l:a,p=b!==void 0?b:x,Q=p!==void 0?e+p:e;return y.request(Q,{method:S,signal:c,...g,...S==="POST"?{data:f,params:s}:{params:s?{...f,...s}:f}})},[y,m,a,x,e,S,g]),j=z({queryKey:F,queryFn:({signal:r})=>P(void 0,void 0,void 0,r),enabled:!1,...u}),M=o.useCallback(r=>{L&&V({variant:"error",title:O,body:A(r??null),timeSecClose:3}),k&&console.error(r)},[L,O,A,k]);o.useEffect(()=>{E&&j.isFetching&&console.log(`[useFManualApiQuery] Loading: ${e}`)},[j.isFetching,E,e]);const J=o.useCallback(async({newParams:r,newUrlParams:l,preserveParams:b=!1,dopUrl:c,preserveUrlParams:f=!1}={})=>{const s=b&&r===void 0?m:r,p=l===void 0?a:f?{...a,...l}:l,Q=c!==void 0?c:x;_(s),w(p),c!==void 0&&B(c);const C=[t];s&&C.push(s),p&&C.push(p);try{const v=await q.fetchQuery({queryKey:C,queryFn:({signal:$})=>P(s,p,Q,$),staleTime:u.staleTime});return u.select?u.select(v):v}catch(v){throw M(v),v}},[m,a,x,t,P,q,u,M]);return{...j,run:J,params:m,urlParams:a}}const X={request:async(t,e)=>{if(t==="/api/demo/manual"){const n=(e==null?void 0:e.data)??{};return{items:[{id:n.page??1,label:`Результат для ${n.q??"all"}`}]}}throw new Error(`Неизвестный URL: ${t}`)}},Y=({children:t})=>{const e=o.useMemo(()=>new K,[]),n=o.useMemo(()=>({apiService:X}),[]);return i.jsx(W,{config:n,children:i.jsx(G,{client:e,children:t})})},Xr={title:"Hooks/useFManualApiQuery",component:R,decorators:[t=>i.jsx(Y,{children:i.jsx(t,{})})]},h=()=>{var y;const{data:t,isFetching:e,run:n,params:g,urlParams:d}=R("manual-demo","/api/demo/manual",{page:1},void 0,{method:"POST"});return i.jsxs("div",{style:{display:"grid",gap:12},children:[i.jsx(H,{onClick:()=>n({newParams:{page:2,q:"storybook"},newUrlParams:{mode:"demo"}}),children:"Выполнить ручной запрос"}),e&&i.jsx("div",{children:"Загрузка..."}),t&&i.jsxs("div",{children:[i.jsxs("div",{children:["Параметры: ",JSON.stringify(g)]}),i.jsxs("div",{children:["URL-параметры: ",JSON.stringify(d)]}),i.jsxs("div",{children:["Результат: ",(y=t.items[0])==null?void 0:y.label]})]})]})};h.__docgenInfo={description:"",methods:[],displayName:"Default"};var N,T,U;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
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
}`,...(U=(T=h.parameters)==null?void 0:T.docs)==null?void 0:U.source}}};const Yr=["Default"];export{h as Default,Yr as __namedExportsOrder,Xr as default};
