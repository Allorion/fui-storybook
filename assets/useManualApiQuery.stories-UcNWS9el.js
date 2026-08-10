import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-DEgj3Fem.js";import{u as D,b as K,Q as G,L as H,a as I}from"./LibraryProvider-CnJbD0Iv.js";import{F as W}from"./FButton-DQOEJPUH.js";import"./FButtonFile-Cc8ubo-m.js";import"./FTextField-DSrbz1g8.js";import"./FStack-Bjsadt8I.js";import"./FGridRow-DPVPfH0m.js";import"./FContainer-D9oNryDS.js";import"./FPaper-ByA2FQvy.js";import"./FTableFooter-CoEhsmhU.js";import"./index-BknSE3li.js";import"./FDialogFooter-EZrNysQM.js";import"./FProgress-CuUSEf8T.js";import"./FPreloader-C0DO9d3w.js";import"./FCheckbox-CvjAvqQ6.js";import"./FRadioButton-CWco8Ir1.js";import"./FPagination-Bh5ADW89.js";import"./FTimelineCard-G_wv4YPr.js";import"./FOpenImgFull-BzaYDndu.js";import"./FAccordion-CUm2A8fo.js";import"./FInputFileForm-KMotnIpw.js";import"./FFile-BHJQGV29.js";import"./FSelectItem-BnNI1hqM.js";import"./FFullDateField-_mtt4yT5.js";import"./FSelectSearchDb-CtdF7gtg.js";import"./FTextArea-9qVfGzxf.js";import"./FCloseIcon-Dr7AIYCl.js";/* empty css                */import"./FTab-DHwok_rz.js";import"./FDropdownItem-D17eYKAm.js";import"./FSearchBox-Czmsapd1.js";import"./FCarouselItem-DRfQet_0.js";import"./FSkeleton-qmKtpPTy.js";import"./FNavigateBarItem-CQ1yOoQk.js";import"./FMenuLinks-CHiLRQZa.js";import"./FTooltip-CCrWwCPn.js";import"./FSearchableSelect-DXwJBXJB.js";import{u as z}from"./useQuery-C7ppLtS3.js";import"./jszip.min-DCsl6vQm.js";import"./allorion-exporting-html-to-docx.es-0JnQx4VA.js";import"./server.browser-b0nCMo6l.js";import"./allorion-exporting-html-to-xlsx.es-CK-z7zJe.js";import{f as V}from"./fNotification-DiB-4WV0.js";import"./FLoadIcon-1-Td29NS.js";import"./index-DM3MU96Y.js";import"./FDialog-DPCiHy6F.js";import"./FArrowIcon-C21crw0H.js";import"./FTrashIcon-Da5Dd79F.js";import"./fGenerateUniqueId-BDtj4-Pu.js";function _(t,e,n,v,d){const{apiService:c}=D(),F=K(),[m,B]=o.useState(n),[a,J]=o.useState(d==null?void 0:d.urlParams),[h,R]=o.useState(void 0),{onErrorNotification:L=!1,onErrorLog:k=!1,onLoadingLog:E=!1,notificationTitle:O="Ошибка выполнения запроса!",notificationBody:A=r=>(r==null?void 0:r.message)||"Неизвестная ошибка",...g}=d||{},x=g.method??"GET",S=[t];m&&S.push(m),a&&S.push(a);const P=o.useCallback((r,u,b,l)=>{const y=r!==void 0?r:m,s=u!==void 0?u:a,p=b!==void 0?b:h,Q=p!==void 0?e+p:e;return c.request(Q,{method:x,signal:l,...v,...x==="POST"?{data:y,params:s}:{params:s?{...y,...s}:y}})},[c,m,a,h,e,x,v]),j=z({queryKey:S,queryFn:({signal:r})=>P(void 0,void 0,void 0,r),enabled:!1,...g}),T=o.useCallback(r=>{L&&V({variant:"error",title:O,body:A(r??null),timeSecClose:3}),k&&console.error(r)},[L,O,A,k]);o.useEffect(()=>{E&&j.isFetching&&console.log(`[useManualApiQuery] Loading: ${e}`)},[j.isFetching,E,e]);const w=o.useCallback(async({newParams:r,newUrlParams:u,preserveParams:b=!1,dopUrl:l,preserveUrlParams:y=!1}={})=>{const s=b&&r===void 0?m:r,p=u===void 0?a:y?{...a,...u}:u,Q=l!==void 0?l:h;B(s),J(p),l!==void 0&&R(l);const C=[t];s&&C.push(s),p&&C.push(p);try{return await F.fetchQuery({queryKey:C,queryFn:({signal:$})=>P(s,p,Q,$),staleTime:g.staleTime})}catch(q){throw T(q),q}},[m,a,h,t,P,F,g.staleTime,T]);return{...j,run:w,params:m,urlParams:a}}const X={request:async(t,e)=>{if(t==="/api/demo/manual"){const n=(e==null?void 0:e.data)??{};return{items:[{id:n.page??1,label:`Результат для ${n.q??"all"}`}]}}throw new Error(`Неизвестный URL: ${t}`)}},Y=({children:t})=>{const e=o.useMemo(()=>new G,[]),n=o.useMemo(()=>({apiService:X}),[]);return i.jsx(H,{config:n,children:i.jsx(I,{client:e,children:t})})},zr={title:"Hooks/useManualApiQuery",component:_,decorators:[t=>i.jsx(Y,{children:i.jsx(t,{})})]},f=()=>{var c;const{data:t,isFetching:e,run:n,params:v,urlParams:d}=_("manual-demo","/api/demo/manual",{page:1},void 0,{method:"POST"});return i.jsxs("div",{style:{display:"grid",gap:12},children:[i.jsx(W,{onClick:()=>n({newParams:{page:2,q:"storybook"},newUrlParams:{mode:"demo"}}),children:"Выполнить ручной запрос"}),e&&i.jsx("div",{children:"Загрузка..."}),t&&i.jsxs("div",{children:[i.jsxs("div",{children:["Параметры: ",JSON.stringify(v)]}),i.jsxs("div",{children:["URL-параметры: ",JSON.stringify(d)]}),i.jsxs("div",{children:["Результат: ",(c=t.items[0])==null?void 0:c.label]})]})]})};f.__docgenInfo={description:"",methods:[],displayName:"Default"};var M,N,U;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  const {
    data,
    isFetching,
    run,
    params,
    urlParams
  } = useManualApiQuery<{
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
}`,...(U=(N=f.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};const Vr=["Default"];export{f as Default,Vr as __namedExportsOrder,zr as default};
