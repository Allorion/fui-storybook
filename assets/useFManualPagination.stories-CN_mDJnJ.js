import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./index-B3j06Xw8.js";import{Q as fe,a as be}from"./QueryClientProvider-THqb51Ql.js";import{F as E}from"./FButton-WshjMl_j.js";import"./FButtonFile-ndsUyZDv.js";import{F as Fe}from"./FTextField-G4sFh9Uf.js";import"./FStack-Bjsadt8I.js";import"./FGridRow-DPVPfH0m.js";import"./FContainer-D9oNryDS.js";import{F as w}from"./FPaper-C96cUb7h.js";import{F as ve,a as xe,b as W,c as k,d as Pe,e as _}from"./FTableActions-CSP0-rhc.js";import"./index-D_ywfbVi.js";import"./FDialogFooter-BsOGDZKD.js";import"./FProgress-B1PkuN98.js";import"./FPreloader-Cq7UpuSU.js";import"./FCheckbox-C2Fn5p4I.js";import"./FRadioButton-CCi8vwMO.js";import{F as ee}from"./FPagination-DkwE8RRm.js";import"./FTimelineCard-G_wv4YPr.js";import"./FCloseIcon-DdRZhJBn.js";import"./FArrowIcon-e6BJPakw.js";import"./FDownloadIcon-CBN19oNF.js";import"./FImagePreview-Cr6Bzrel.js";import"./FVideoPlayer-BgLjSeQA.js";import"./FAccordion-B22xNC65.js";import"./FInputFileForm-CI_bUF6k.js";import"./FFile-ALKQqT-R.js";import"./FSelectItem-BAXWPI2S.js";import"./FFullDateField-bov5uJB9.js";import"./FSelectSearchDb-5nHlLFKL.js";import"./FTextArea-ChmymgEf.js";import{F as Se}from"./FProgressiveList-BSFzbP1E.js";import"./FTab-4EmqzD2P.js";import"./FDropdownItem-3TiL9ogE.js";import"./FSearchBox-fdjYAM33.js";import"./FCarouselItem-DbNUFCsz.js";import"./FSkeleton-iaIByH-O.js";import"./FNavigateBarItem-BtOG1U8l.js";import"./FMenuLinks-Cbdq1Y8F.js";import"./FTooltip-BJ8WMW_6.js";import"./FSearchableSelect-DPsz2xcQ.js";import"./FSegmentedControl-DhW7n95-.js";import"./FStatusBadge-CaCHJHW5.js";import{F as je}from"./FLibraryProvider-DeR-DKlD.js";import{u as Te}from"./useFManualApiQuery-TJgWTP1U.js";import"./FLoadIcon-B2O1XWAm.js";import"./index-DW0t0JKo.js";import"./FOpenImgFull-CaZNMJDa.js";import"./FTrashIcon-DpmD7QBY.js";import"./useQuery-BR0io2vp.js";import"./jszip.min-Dbd3Wm32.js";import"./allorion-exporting-html-to-docx.es-DCozvCwW.js";import"./server.browser-C_ryhKp0.js";import"./allorion-exporting-html-to-xlsx.es-VRd7k21f.js";import"./fNotification-vnFpW_Yq.js";import"./fGenerateUniqueId-BDtj4-Pu.js";function $(r){if(!r||typeof r!="object")return r;const i=r,o=i.result??i.items??i.content??i.data;return o!==void 0?o:r}function Ie(r,i,o){if(!r||typeof r!="object")return;const n=r,t=n.page??n.pagination;if(!t||typeof t!="object")return;const c=Number(t.totalItems??t.totalElements??t.totalCount??t.total??0),s=Number(t.size??t.pageSize??t.limit??i),l=Number(t.totalPages??t.pageCount??(s>0?Math.ceil(c/s):1)),u=Number(t.number??t.currentPage??t.page??o);return{totalItems:c,size:s,totalPages:l,number:u}}function z(r){const{queryKey:i,url:o,defaultPageSize:n=20,initialFilters:t,method:c="POST",config:s,mode:l="pagination",select:u,selectPage:x,appendData:p,onErrorNotification:F=!0,onErrorLog:h=!1,onLoadingLog:te=!1,onSuccessNotification:re=!1,notificationTitle:ae,notificationBody:ie,loadingNotificationTitle:ne,loadingNotificationBody:se,successNotificationTitle:oe,successNotificationBody:le}=r,[f,D]=m.useState(1),[v,de]=m.useState(n),[ce,L]=m.useState(void 0),[A,B]=m.useState(!1),S=l==="infinite";m.useEffect(()=>{de(n)},[n]);const b=Te(i,o,t?{...t,page:1,size:n}:void 0,s,{method:c,onErrorNotification:F,onErrorLog:h,onLoadingLog:te,onSuccessNotification:re,notificationTitle:ae,notificationBody:ie,loadingNotificationTitle:ne,loadingNotificationBody:se,successNotificationTitle:oe,successNotificationBody:le}),g=b.data,a=m.useMemo(()=>{if(g)return x?x(g):Ie(g,v,f)},[g,x,v,f]),me=m.useMemo(()=>{if(g)return u?u(g):$(g)},[g,u]),pe=m.useMemo(()=>{if(!(!g||typeof g!="object"))return g.meta},[g]),H=S?ce:me,j=m.useCallback(d=>u?u(d):$(d),[u]),q=m.useCallback((d,y)=>p?p(d,y):Array.isArray(y)?[...Array.isArray(d)?d:[],...y]:y,[p]),ue=m.useCallback(async({payload:d,resetPage:y=!0,dopUrl:T})=>{const N=y?1:f;y&&(D(1),S&&L(void 0));const he=await b.run({newParams:{...d,page:N,size:v},dopUrl:T}),K=j(he);return S&&L(K),K},[b,f,v,S,j]),P=m.useCallback(async d=>{if(S){B(!0);try{const y=await b.run({newParams:{page:d,size:v},mergeParams:!0}),T=j(y);return L(N=>q(N,T)),D(d),T}finally{B(!1)}}else{D(d);const y=await b.run({newParams:{page:d,size:v},mergeParams:!0});return j(y)}},[b,v,S,j,q]),R=m.useMemo(()=>a?a.number<a.totalPages:!1,[a]),ge=m.useCallback(async()=>{if(b.isFetching||A||!R)return;const d=((a==null?void 0:a.number)??f)+1;return P(d)},[b.isFetching,A,R,a,f,P]),ye=m.useMemo(()=>({currentPage:(a==null?void 0:a.number)??f,totalCount:(a==null?void 0:a.totalItems)??0,pageSize:(a==null?void 0:a.size)??v,siblingCount:1,onPageChange:d=>{if(typeof d=="number")P(d).catch(()=>{});else if(d==="prev")P(Math.max(1,((a==null?void 0:a.number)??f)-1)).catch(()=>{});else if(d==="next"){const y=(a==null?void 0:a.totalPages)??f;P(Math.min(y,((a==null?void 0:a.number)??f)+1)).catch(()=>{})}}}),[a,f,v,P]);return{data:H,result:H,rawResponse:g,meta:pe,pageMeta:a,isLoading:b.isLoading,isFetching:b.isFetching,isFetchingMore:A,hasMore:R,error:b.error,submitFilters:ue,changePage:P,loadMore:ge,paginationProps:ye}}const Me={request:async(r,i)=>{if(r==="/api/demo/reports/paginated"){const o=(i==null?void 0:i.data)??{},n=o.size??5,t=o.page??1,c=23,s=Math.ceil(c/n),l=(t-1)*n,u=Math.max(0,Math.min(n,c-l)),x=Array.from({length:u},(p,F)=>{const h=l+F+1;return{id:`table-${h}`,title:`Таблица №${h} (Форма ${o.uid_form??8})`,rows:[{code:"010",name:"Выручка",val:h*1250},{code:"020",name:"Себестоимость",val:h*780},{code:"030",name:"Чистая прибыль",val:h*470}]}});return{meta:{reportName:"Сводный отчет",generatedAt:"2026-10-15"},page:{totalItems:c,size:n,totalPages:s,number:t},result:x}}if(r==="/data/asvActivities"){const o=(i==null?void 0:i.data)??{},n=o.size??5,t=o.page??1,c=18,s=Math.ceil(c/n),l=(t-1)*n,u=Math.max(0,Math.min(n,c-l));return{_embedded:{asvActivities:Array.from({length:u},(p,F)=>{const h=l+F+1;return{id:h,activityName:`Вид деятельности #${h} (Spring Data REST)`,code:`ACT-${h.toString().padStart(3,"0")}`}})},page:{size:n,totalElements:c,totalPages:s,number:t}}}throw new Error(`Неизвестный URL: ${r}`)}},Ce=({children:r})=>{const i=m.useMemo(()=>new fe,[]),o=m.useMemo(()=>({apiService:Me}),[]);return e.jsx(je,{config:o,children:e.jsx(be,{client:i,children:r})})},Lt={title:"Hooks/useFManualPagination",component:z,decorators:[r=>e.jsx(Ce,{children:e.jsx(r,{})})]},I=()=>{const[r,i]=m.useState(8),{data:o,meta:n,pageMeta:t,isLoading:c,isFetching:s,submitFilters:l,paginationProps:u}=z({queryKey:"demo-paginated-report",url:"/api/demo/reports/paginated",defaultPageSize:5,select:p=>p.result,selectPage:p=>p.page}),x=()=>{l({payload:{uid_form:r,years:["2025","2026"]},resetPage:!0})};return e.jsxs("div",{style:{display:"grid",gap:16,maxWidth:800},children:[e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"flex-end"},children:[e.jsx("div",{style:{width:180},children:e.jsx(Fe,{label:"ID формы",value:String(r),onChange:p=>i(Number(p.target.value)||0)})}),e.jsx(E,{onClick:x,disabled:c||s,children:s?"Загрузка...":"Сформировать отчет"})]}),n&&e.jsxs("div",{style:{fontSize:13,color:"#666"},children:["Отчет: ",e.jsx("strong",{children:String(n.reportName)})," | Всего записей:"," ",t==null?void 0:t.totalItems," | Страница: ",t==null?void 0:t.number," из ",t==null?void 0:t.totalPages]}),o&&o.length>0&&e.jsxs("div",{style:{display:"grid",gap:12},children:[o.map(p=>e.jsxs(w,{st:{padding:12},children:[e.jsx("h4",{style:{margin:"0 0 8px 0"},children:p.title}),e.jsxs(ve,{layout:"fixed",children:[e.jsx(xe,{children:e.jsxs(W,{children:[e.jsx(k,{children:"Код"}),e.jsx(k,{children:"Показатель"}),e.jsx(k,{children:"Значение (руб.)"})]})}),e.jsx(Pe,{children:p.rows.map(F=>e.jsxs(W,{children:[e.jsx(_,{children:F.code}),e.jsx(_,{children:F.name}),e.jsx(_,{children:F.val.toLocaleString("ru-RU")})]},F.code))})]})]},p.id)),e.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:12},children:e.jsx(ee,{...u})})]})]})},M=()=>{const{data:r,pageMeta:i,isLoading:o,isFetching:n,submitFilters:t,paginationProps:c}=z({queryKey:"demo-spring-activities",url:"/data/asvActivities",defaultPageSize:5,select:s=>s._embedded.asvActivities,selectPage:s=>({totalItems:s.page.totalElements,size:s.page.size,totalPages:s.page.totalPages,number:s.page.number})});return e.jsxs("div",{style:{display:"grid",gap:16,maxWidth:650},children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Spring Data REST (_embedded + totalElements)"}),e.jsx(E,{onClick:()=>t({payload:{},resetPage:!0}),disabled:o||n,children:o||n?"Загрузка...":"Загрузить виды деятельности"})]}),i&&e.jsxs("div",{style:{fontSize:13,color:"#666"},children:["Всего элементов: ",i.totalItems," | Страница ",i.number," из ",i.totalPages]}),r&&e.jsxs("div",{style:{display:"grid",gap:8},children:[r.map(s=>e.jsxs(w,{st:{padding:12},children:[e.jsx("strong",{children:s.code})," — ",s.activityName]},s.id)),e.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:12},children:e.jsx(ee,{...c})})]})]})},C=()=>{const{data:r,pageMeta:i,isLoading:o,isFetchingMore:n,hasMore:t,loadMore:c,submitFilters:s}=z({queryKey:"demo-infinite-report",url:"/api/demo/reports/paginated",defaultPageSize:5,mode:"infinite",select:l=>l.result,selectPage:l=>l.page});return e.jsxs("div",{style:{maxWidth:700},children:[e.jsxs("div",{style:{marginBottom:16},children:[e.jsx("h3",{children:"Бесконечный скролл с порционным монтированием"}),e.jsx(E,{onClick:()=>s({payload:{uid_form:1,years:["2026"]}}),disabled:o,children:"Запустить отчет (mode: 'infinite')"})]}),r&&e.jsx(Se,{items:r,chunkSize:3,estimatedItemHeight:140,keyExtractor:l=>l.id,onLoadMore:c,hasMore:t,isLoadingMore:n,children:l=>e.jsxs(w,{st:{padding:12},children:[e.jsx("h4",{children:l.title}),e.jsxs("div",{style:{fontSize:13,color:"#666"},children:["Строк в таблице: ",l.rows.length]})]})}),i&&!t&&e.jsxs("div",{style:{textAlign:"center",padding:16,color:"#888"},children:["Достигнут конец отчета (",r==null?void 0:r.length," таблиц)"]})]})};I.__docgenInfo={description:"",methods:[],displayName:"Default"};M.__docgenInfo={description:"",methods:[],displayName:"SpringDataRestFormat"};C.__docgenInfo={description:"",methods:[],displayName:"InfiniteScrollMode"};var Q,G,O;I.parameters={...I.parameters,docs:{...(Q=I.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  const [formId, setFormId] = useState<number>(8);
  const {
    data: tables,
    meta,
    pageMeta,
    isLoading,
    isFetching,
    submitFilters,
    paginationProps
  } = useFManualPagination<IStandardReportResp, ITableItem[], IFilterPayload>({
    queryKey: 'demo-paginated-report',
    url: '/api/demo/reports/paginated',
    defaultPageSize: 5,
    select: res => res.result,
    selectPage: res => res.page
  });
  const handleGenerate = () => {
    submitFilters({
      payload: {
        uid_form: formId,
        years: ['2025', '2026']
      },
      resetPage: true
    });
  };
  return <div style={{
    display: 'grid',
    gap: 16,
    maxWidth: 800
  }}>\r
            <div style={{
      display: 'flex',
      gap: 12,
      alignItems: 'flex-end'
    }}>\r
                <div style={{
        width: 180
      }}>\r
                    <FTextField label="ID формы" value={String(formId)} onChange={e => setFormId(Number(e.target.value) || 0)} />\r
                </div>\r
                <FButton onClick={handleGenerate} disabled={isLoading || isFetching}>\r
                    {isFetching ? 'Загрузка...' : 'Сформировать отчет'}\r
                </FButton>\r
            </div>\r
\r
            {meta && <div style={{
      fontSize: 13,
      color: '#666'
    }}>\r
                    Отчет: <strong>{String((meta as Record<string, unknown>).reportName)}</strong> | Всего записей:{' '}\r
                    {pageMeta?.totalItems} | Страница: {pageMeta?.number} из {pageMeta?.totalPages}\r
                </div>}\r
\r
            {tables && tables.length > 0 && <div style={{
      display: 'grid',
      gap: 12
    }}>\r
                    {tables.map(table => <FPaper key={table.id} st={{
        padding: 12
      }}>\r
                            <h4 style={{
          margin: '0 0 8px 0'
        }}>{table.title}</h4>\r
                            <FTable layout="fixed">\r
                                <FTableHead>\r
                                    <FTableRow>\r
                                        <FTableHeaderCell>Код</FTableHeaderCell>\r
                                        <FTableHeaderCell>Показатель</FTableHeaderCell>\r
                                        <FTableHeaderCell>Значение (руб.)</FTableHeaderCell>\r
                                    </FTableRow>\r
                                </FTableHead>\r
                                <FTableBody>\r
                                    {table.rows.map(row => <FTableRow key={row.code}>\r
                                            <FTableDataCell>{row.code}</FTableDataCell>\r
                                            <FTableDataCell>{row.name}</FTableDataCell>\r
                                            <FTableDataCell>{row.val.toLocaleString('ru-RU')}</FTableDataCell>\r
                                        </FTableRow>)}\r
                                </FTableBody>\r
                            </FTable>\r
                        </FPaper>)}\r
\r
                    <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: 12
      }}>\r
                        <FPagination {...paginationProps} />\r
                    </div>\r
                </div>}\r
        </div>;
}`,...(O=(G=I.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var U,J,V;M.parameters={...M.parameters,docs:{...(U=M.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  const {
    data: activities,
    pageMeta,
    isLoading,
    isFetching,
    submitFilters,
    paginationProps
  } = useFManualPagination<ISpringActivitiesResp, ISpringActivity[]>({
    queryKey: 'demo-spring-activities',
    url: '/data/asvActivities',
    defaultPageSize: 5,
    // Адаптивный маршрут до данных:
    select: res => res._embedded.asvActivities,
    // Адаптивный маршрут до пагинации Spring:
    selectPage: res => ({
      totalItems: res.page.totalElements,
      size: res.page.size,
      totalPages: res.page.totalPages,
      number: res.page.number
    })
  });
  return <div style={{
    display: 'grid',
    gap: 16,
    maxWidth: 650
  }}>\r
            <div>\r
                <h3>Spring Data REST (_embedded + totalElements)</h3>\r
                <FButton onClick={() => submitFilters({
        payload: {},
        resetPage: true
      })} disabled={isLoading || isFetching}>\r
                    {isLoading || isFetching ? 'Загрузка...' : 'Загрузить виды деятельности'}\r
                </FButton>\r
            </div>\r
\r
            {pageMeta && <div style={{
      fontSize: 13,
      color: '#666'
    }}>\r
                    Всего элементов: {pageMeta.totalItems} | Страница {pageMeta.number} из {pageMeta.totalPages}\r
                </div>}\r
\r
            {activities && <div style={{
      display: 'grid',
      gap: 8
    }}>\r
                    {activities.map(act => <FPaper key={act.id} st={{
        padding: 12
      }}>\r
                            <strong>{act.code}</strong> — {act.activityName}\r
                        </FPaper>)}\r
                    <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: 12
      }}>\r
                        <FPagination {...paginationProps} />\r
                    </div>\r
                </div>}\r
        </div>;
}`,...(V=(J=M.parameters)==null?void 0:J.docs)==null?void 0:V.source}}};var X,Y,Z;C.parameters={...C.parameters,docs:{...(X=C.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  const {
    data: tables,
    pageMeta,
    isLoading,
    isFetchingMore,
    hasMore,
    loadMore,
    submitFilters
  } = useFManualPagination<IStandardReportResp, ITableItem[], IFilterPayload>({
    queryKey: 'demo-infinite-report',
    url: '/api/demo/reports/paginated',
    defaultPageSize: 5,
    mode: 'infinite',
    // Режим накопления данных для скролла
    select: res => res.result,
    selectPage: res => res.page
  });
  return <div style={{
    maxWidth: 700
  }}>\r
            <div style={{
      marginBottom: 16
    }}>\r
                <h3>Бесконечный скролл с порционным монтированием</h3>\r
                <FButton onClick={() => submitFilters({
        payload: {
          uid_form: 1,
          years: ['2026']
        }
      })} disabled={isLoading}>\r
                    Запустить отчет (mode: 'infinite')\r
                </FButton>\r
            </div>\r
\r
            {tables && <FProgressiveList items={tables} chunkSize={3} estimatedItemHeight={140} keyExtractor={t => t.id} onLoadMore={loadMore} hasMore={hasMore} isLoadingMore={isFetchingMore}>\r
                    {table => <FPaper st={{
        padding: 12
      }}>\r
                            <h4>{table.title}</h4>\r
                            <div style={{
          fontSize: 13,
          color: '#666'
        }}>Строк в таблице: {table.rows.length}</div>\r
                        </FPaper>}\r
                </FProgressiveList>}\r
\r
            {pageMeta && !hasMore && <div style={{
      textAlign: 'center',
      padding: 16,
      color: '#888'
    }}>\r
                    Достигнут конец отчета ({tables?.length} таблиц)\r
                </div>}\r
        </div>;
}`,...(Z=(Y=C.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const At=["Default","SpringDataRestFormat","InfiniteScrollMode"];export{I as Default,C as InfiniteScrollMode,M as SpringDataRestFormat,At as __namedExportsOrder,Lt as default};
