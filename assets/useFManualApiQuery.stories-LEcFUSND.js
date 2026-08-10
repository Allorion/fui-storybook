import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-B3j06Xw8.js";import{u as D,Q as K,a as G}from"./QueryClientProvider-THqb51Ql.js";import{F as H}from"./FButton-wCVY7eIs.js";import"./FButtonFile-D2S8Q-gm.js";import"./FTextField-Bfcy-agq.js";import"./FStack-Bjsadt8I.js";import"./FGridRow-DPVPfH0m.js";import"./FContainer-D9oNryDS.js";import"./FPaper-Dn0vIXiP.js";import"./FTableFooter-WMoZ_F9z.js";import"./index-D_ywfbVi.js";import"./FDialogFooter-BenDTTL6.js";import"./FProgress-CuUSEf8T.js";import"./FPreloader-Cq7UpuSU.js";import"./FCheckbox-CS1dTR8V.js";import"./FRadioButton-BLRA_gon.js";import"./FPagination-BKiZX-c7.js";import"./FTimelineCard-G_wv4YPr.js";import"./FOpenImgFull-BmEgMMd7.js";import"./FAccordion-DmXO5bBB.js";import"./FInputFileForm-CgROixNk.js";import"./FFile-BDXU6Ifc.js";import"./FSelectItem-C-_xf1fC.js";import"./FFullDateField-BAvOAkZw.js";import"./FSelectSearchDb-9J14UTwR.js";import"./FTextArea-D2Oj51U_.js";import"./FCloseIcon-DdRZhJBn.js";/* empty css                */import"./FTab-DB5xXUf7.js";import"./FDropdownItem-YzbPD2d9.js";import"./FSearchBox-6sTLn0W8.js";import"./FCarouselItem-DbNUFCsz.js";import"./FSkeleton-Bmt12B6C.js";import"./FNavigateBarItem-CQ1yOoQk.js";import"./FMenuLinks-Dc7Ra43h.js";import"./FTooltip-BJ8WMW_6.js";import"./FSearchableSelect-B2Q4P3qF.js";import{u as I,L as W}from"./LibraryProvider-C0W0iA46.js";import{u as z}from"./useQuery-BR0io2vp.js";import"./jszip.min-Dbd3Wm32.js";import"./allorion-exporting-html-to-docx.es-DCozvCwW.js";import"./server.browser-C_ryhKp0.js";import"./allorion-exporting-html-to-xlsx.es-VRd7k21f.js";import{f as V}from"./fNotification-DiB-4WV0.js";import"./FLoadIcon-CJgWVWfz.js";import"./index-DW0t0JKo.js";import"./FDialog-B0I80EdC.js";import"./FArrowIcon-e6BJPakw.js";import"./FTrashIcon-DpmD7QBY.js";import"./fGenerateUniqueId-BDtj4-Pu.js";function _(t,i,n,v,d){const{apiService:c}=I(),q=D(),[m,B]=o.useState(n),[a,J]=o.useState(d==null?void 0:d.urlParams),[h,R]=o.useState(void 0),{onErrorNotification:L=!1,onErrorLog:k=!1,onLoadingLog:E=!1,notificationTitle:O="Ошибка выполнения запроса!",notificationBody:A=r=>(r==null?void 0:r.message)||"Неизвестная ошибка",...g}=d||{},b=g.method??"GET",S=[t];m&&S.push(m),a&&S.push(a);const F=o.useCallback((r,u,x,l)=>{const y=r!==void 0?r:m,s=u!==void 0?u:a,p=x!==void 0?x:h,j=p!==void 0?i+p:i;return c.request(j,{method:b,signal:l,...v,...b==="POST"?{data:y,params:s}:{params:s?{...y,...s}:y}})},[c,m,a,h,i,b,v]),P=z({queryKey:S,queryFn:({signal:r})=>F(void 0,void 0,void 0,r),enabled:!1,...g}),T=o.useCallback(r=>{L&&V({variant:"error",title:O,body:A(r??null),timeSecClose:3}),k&&console.error(r)},[L,O,A,k]);o.useEffect(()=>{E&&P.isFetching&&console.log(`[useFManualApiQuery] Loading: ${i}`)},[P.isFetching,E,i]);const w=o.useCallback(async({newParams:r,newUrlParams:u,preserveParams:x=!1,dopUrl:l,preserveUrlParams:y=!1}={})=>{const s=x&&r===void 0?m:r,p=u===void 0?a:y?{...a,...u}:u,j=l!==void 0?l:h;B(s),J(p),l!==void 0&&R(l);const Q=[t];s&&Q.push(s),p&&Q.push(p);try{return await q.fetchQuery({queryKey:Q,queryFn:({signal:$})=>F(s,p,j,$),staleTime:g.staleTime})}catch(C){throw T(C),C}},[m,a,h,t,F,q,g.staleTime,T]);return{...P,run:w,params:m,urlParams:a}}const X={request:async(t,i)=>{if(t==="/api/demo/manual"){const n=(i==null?void 0:i.data)??{};return{items:[{id:n.page??1,label:`Результат для ${n.q??"all"}`}]}}throw new Error(`Неизвестный URL: ${t}`)}},Y=({children:t})=>{const i=o.useMemo(()=>new K,[]),n=o.useMemo(()=>({apiService:X}),[]);return e.jsx(W,{config:n,children:e.jsx(G,{client:i,children:t})})},Vr={title:"Hooks/useFManualApiQuery",component:_,decorators:[t=>e.jsx(Y,{children:e.jsx(t,{})})]},f=()=>{var c;const{data:t,isFetching:i,run:n,params:v,urlParams:d}=_("manual-demo","/api/demo/manual",{page:1},void 0,{method:"POST"});return e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx(H,{onClick:()=>n({newParams:{page:2,q:"storybook"},newUrlParams:{mode:"demo"}}),children:"Выполнить ручной запрос"}),i&&e.jsx("div",{children:"Загрузка..."}),t&&e.jsxs("div",{children:[e.jsxs("div",{children:["Параметры: ",JSON.stringify(v)]}),e.jsxs("div",{children:["URL-параметры: ",JSON.stringify(d)]}),e.jsxs("div",{children:["Результат: ",(c=t.items[0])==null?void 0:c.label]})]})]})};f.__docgenInfo={description:"",methods:[],displayName:"Default"};var M,N,U;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
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
}`,...(U=(N=f.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};const Xr=["Default"];export{f as Default,Xr as __namedExportsOrder,Vr as default};
