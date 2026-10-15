import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./index-B3j06Xw8.js";import{Q as Pe,a as je}from"./QueryClientProvider-THqb51Ql.js";import{F as w}from"./FButton-WshjMl_j.js";import"./FButtonFile-ndsUyZDv.js";import{F as Se}from"./FTextField-G4sFh9Uf.js";import"./FStack-Bjsadt8I.js";import"./FGridRow-DPVPfH0m.js";import"./FContainer-D9oNryDS.js";import{F as B}from"./FPaper-C96cUb7h.js";import{F as Te,a as Ie,b as J,c as _,d as ze,e as E}from"./FTableActions-CSP0-rhc.js";import"./index-D_ywfbVi.js";import"./FDialogFooter-BsOGDZKD.js";import"./FProgress-B1PkuN98.js";import"./FPreloader-Cq7UpuSU.js";import"./FCheckbox-C2Fn5p4I.js";import"./FRadioButton-CCi8vwMO.js";import{F as se}from"./FPagination-DkwE8RRm.js";import"./FTimelineCard-G_wv4YPr.js";import"./FCloseIcon-DdRZhJBn.js";import"./FArrowIcon-e6BJPakw.js";import"./FDownloadIcon-CBN19oNF.js";import"./FImagePreview-Cr6Bzrel.js";import"./FVideoPlayer-BgLjSeQA.js";import"./FAccordion-B22xNC65.js";import"./FInputFileForm-CI_bUF6k.js";import"./FFile-ALKQqT-R.js";import"./FSelectItem-BAXWPI2S.js";import"./FFullDateField-bov5uJB9.js";import"./FSelectSearchDb-5nHlLFKL.js";import"./FTextArea-ChmymgEf.js";import{F as Me}from"./FProgressiveList-CMvlYDf2.js";import"./FTab-4EmqzD2P.js";import"./FDropdownItem-3TiL9ogE.js";import"./FSearchBox-fdjYAM33.js";import"./FCarouselItem-DbNUFCsz.js";import"./FSkeleton-iaIByH-O.js";import"./FNavigateBarItem-BtOG1U8l.js";import"./FMenuLinks-Cbdq1Y8F.js";import"./FTooltip-BJ8WMW_6.js";import"./FSearchableSelect-DPsz2xcQ.js";import"./FSegmentedControl-DhW7n95-.js";import"./FStatusBadge-CaCHJHW5.js";import{F as Ce}from"./FLibraryProvider-DeR-DKlD.js";import{u as Ae}from"./useFManualApiQuery-TJgWTP1U.js";import"./FLoadIcon-B2O1XWAm.js";import"./index-DW0t0JKo.js";import"./FOpenImgFull-CaZNMJDa.js";import"./FTrashIcon-DpmD7QBY.js";import"./useQuery-BR0io2vp.js";import"./jszip.min-Dbd3Wm32.js";import"./allorion-exporting-html-to-docx.es-DCozvCwW.js";import"./server.browser-C_ryhKp0.js";import"./allorion-exporting-html-to-xlsx.es-VRd7k21f.js";import"./fNotification-vnFpW_Yq.js";import"./fGenerateUniqueId-BDtj4-Pu.js";function V(r){if(!r||typeof r!="object")return r;const a=r,i=a.result??a.items??a.content??a.data;return i!==void 0?i:r}function Re(r,a,i){if(!r||typeof r!="object")return;const n=r,t=n.page??n.pagination;if(!t||typeof t!="object")return;const s=Number(t.totalItems??t.totalElements??t.totalCount??t.total??0),o=Number(t.size??t.pageSize??t.limit??a),c=Number(t.totalPages??t.pageCount??(o>0?Math.ceil(s/o):1)),p=Number(t.number??t.currentPage??t.page??i);return{totalItems:s,size:o,totalPages:c,number:p}}function De(r,a){if(!r)return a;if(Array.isArray(a))return[...Array.isArray(r)?r:[],...a];if(a&&typeof a=="object"&&r&&typeof r=="object"){const i=a,n=r,t=["result","items","content","data","posts","rows","list"];for(const s of t)if(Array.isArray(i[s]))return{...i,[s]:[...Array.isArray(n[s])?n[s]:[],...i[s]]};if(i.result&&typeof i.result=="object"&&!Array.isArray(i.result)){const s=i.result,o=n.result&&typeof n.result=="object"?n.result:{},c={...s};let p=!1;for(const g of Object.keys(s))Array.isArray(s[g])&&(p=!0,c[g]=[...Array.isArray(o[g])?o[g]:[],...s[g]]);if(p)return{...i,result:c}}}return a}function A(r){const{queryKey:a,url:i,defaultPageSize:n=20,initialFilters:t,method:s="POST",config:o,mode:c="pagination",select:p,selectPage:g,appendData:u,onErrorNotification:x=!0,onErrorLog:h=!1,onLoadingLog:oe=!1,onSuccessNotification:le=!1,notificationTitle:de,notificationBody:ce,loadingNotificationTitle:me,loadingNotificationBody:pe,successNotificationTitle:ue,successNotificationBody:ge}=r,[b,R]=m.useState(1),[F,ye]=m.useState(n),[H,D]=m.useState(void 0),[L,q]=m.useState(!1),[K,O]=m.useState(!1),j=c==="infinite";m.useEffect(()=>{ye(n)},[n]);const f=Ae(a,i,t?{...t,page:1,size:n}:void 0,o,{method:s,onErrorNotification:x,onErrorLog:h,onLoadingLog:oe,onSuccessNotification:le,notificationTitle:de,notificationBody:ce,loadingNotificationTitle:me,loadingNotificationBody:pe,successNotificationTitle:ue,successNotificationBody:ge}),y=f.data,l=m.useMemo(()=>{if(y)return g?g(y):Re(y,F,b)},[y,g,F,b]),W=m.useMemo(()=>{if(y)return p?p(y):V(y)},[y,p]),fe=m.useMemo(()=>{if(!(!y||typeof y!="object"))return y.meta},[y]),U=j?H:W,T=m.useCallback(d=>p?p(d):V(d),[p]),$=m.useCallback((d,v)=>u?u(d,v):De(d,v),[u]),he=m.useCallback(async({payload:d,resetPage:v=!0,dopUrl:C})=>{const P=d&&typeof d=="object"?d:void 0,N=P&&typeof P.page=="number"?P.page:v?1:b,Q=P&&typeof P.size=="number"?P.size:F||n||20;v&&(R(N),j&&D(void 0)),O(!0);try{const xe=await f.run({newParams:{...d,page:N,size:Q},newUrlParams:{page:N,size:Q},dopUrl:C}),G=T(xe);return j&&D(G),G}finally{O(!1)}},[f,b,F,n,j,T]),S=m.useCallback(async d=>{if(j){q(!0);try{const v=await f.run({newParams:{page:d,size:F},newUrlParams:{page:d,size:F},mergeParams:!0}),C=T(v);return D(P=>$(P,C)),R(d),C}finally{q(!1)}}else{R(d);const v=await f.run({newParams:{page:d,size:F},newUrlParams:{page:d,size:F},mergeParams:!0});return T(v)}},[f,F,j,T,$]),k=m.useMemo(()=>l?l.number<l.totalPages:!1,[l]),be=m.useCallback(async()=>{if(f.isFetching||L||!k)return;const d=((l==null?void 0:l.number)??b)+1;return S(d)},[f.isFetching,L,k,l,b,S]),Fe=m.useMemo(()=>({currentPage:(l==null?void 0:l.number)??b,totalCount:(l==null?void 0:l.totalItems)??0,pageSize:(l==null?void 0:l.size)??F,siblingCount:1,onPageChange:d=>{if(typeof d=="number")S(d).catch(()=>{});else if(d==="prev")S(Math.max(1,((l==null?void 0:l.number)??b)-1)).catch(()=>{});else if(d==="next"){const v=(l==null?void 0:l.totalPages)??b;S(Math.min(v,((l==null?void 0:l.number)??b)+1)).catch(()=>{})}}}),[l,b,F,S]),ve=j?K||f.isLoading&&!H:K||f.isLoading&&!W;return{data:U,result:U,rawResponse:y,meta:fe,pageMeta:l,isLoading:ve,isFetching:f.isFetching,isFetchingMore:L,hasMore:k,error:f.error,submitFilters:he,changePage:S,loadMore:be,paginationProps:Fe}}const Le={request:async(r,a)=>{if(r==="/api/demo/reports/paginated"){const i=(a==null?void 0:a.data)??{},n=i.size??5,t=i.page??1,s=23,o=Math.ceil(s/n),c=(t-1)*n,p=Math.max(0,Math.min(n,s-c)),g=Array.from({length:p},(u,x)=>{const h=c+x+1;return{id:`table-${h}`,title:`Таблица №${h} (Форма ${i.uid_form??8})`,rows:[{code:"010",name:"Выручка",val:h*1250},{code:"020",name:"Себестоимость",val:h*780},{code:"030",name:"Чистая прибыль",val:h*470}]}});return{meta:{reportName:"Сводный отчет",generatedAt:"2026-10-15"},page:{totalItems:s,size:n,totalPages:o,number:t},result:g}}if(r==="/data/asvActivities"){const i=(a==null?void 0:a.data)??{},n=i.size??5,t=i.page??1,s=18,o=Math.ceil(s/n),c=(t-1)*n,p=Math.max(0,Math.min(n,s-c));return{_embedded:{asvActivities:Array.from({length:p},(u,x)=>{const h=c+x+1;return{id:h,activityName:`Вид деятельности #${h} (Spring Data REST)`,code:`ACT-${h.toString().padStart(3,"0")}`}})},page:{size:n,totalElements:s,totalPages:o,number:t}}}throw new Error(`Неизвестный URL: ${r}`)}},ke=({children:r})=>{const a=m.useMemo(()=>new Pe,[]),i=m.useMemo(()=>({apiService:Le}),[]);return e.jsx(Ce,{config:i,children:e.jsx(je,{client:a,children:r})})},Et={title:"Hooks/useFManualPagination",component:A,decorators:[r=>e.jsx(ke,{children:e.jsx(r,{})})]},I=()=>{const[r,a]=m.useState(8),{data:i,meta:n,pageMeta:t,isLoading:s,isFetching:o,submitFilters:c,paginationProps:p}=A({queryKey:"demo-paginated-report",url:"/api/demo/reports/paginated",defaultPageSize:5,select:u=>u.result,selectPage:u=>u.page}),g=()=>{c({payload:{uid_form:r,years:["2025","2026"]},resetPage:!0})};return e.jsxs("div",{style:{display:"grid",gap:16,maxWidth:800},children:[e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"flex-end"},children:[e.jsx("div",{style:{width:180},children:e.jsx(Se,{label:"ID формы",value:String(r),onChange:u=>a(Number(u.target.value)||0)})}),e.jsx(w,{onClick:g,disabled:s||o,children:o?"Загрузка...":"Сформировать отчет"})]}),n&&e.jsxs("div",{style:{fontSize:13,color:"#666"},children:["Отчет: ",e.jsx("strong",{children:String(n.reportName)})," | Всего записей:"," ",t==null?void 0:t.totalItems," | Страница: ",t==null?void 0:t.number," из ",t==null?void 0:t.totalPages]}),i&&i.length>0&&e.jsxs("div",{style:{display:"grid",gap:12},children:[i.map(u=>e.jsxs(B,{st:{padding:12},children:[e.jsx("h4",{style:{margin:"0 0 8px 0"},children:u.title}),e.jsxs(Te,{layout:"fixed",children:[e.jsx(Ie,{children:e.jsxs(J,{children:[e.jsx(_,{children:"Код"}),e.jsx(_,{children:"Показатель"}),e.jsx(_,{children:"Значение (руб.)"})]})}),e.jsx(ze,{children:u.rows.map(x=>e.jsxs(J,{children:[e.jsx(E,{children:x.code}),e.jsx(E,{children:x.name}),e.jsx(E,{children:x.val.toLocaleString("ru-RU")})]},x.code))})]})]},u.id)),e.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:12},children:e.jsx(se,{...p})})]})]})},z=()=>{const{data:r,pageMeta:a,isLoading:i,isFetching:n,submitFilters:t,paginationProps:s}=A({queryKey:"demo-spring-activities",url:"/data/asvActivities",defaultPageSize:5,select:o=>o._embedded.asvActivities,selectPage:o=>({totalItems:o.page.totalElements,size:o.page.size,totalPages:o.page.totalPages,number:o.page.number})});return e.jsxs("div",{style:{display:"grid",gap:16,maxWidth:650},children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Spring Data REST (_embedded + totalElements)"}),e.jsx(w,{onClick:()=>t({payload:{},resetPage:!0}),disabled:i||n,children:i||n?"Загрузка...":"Загрузить виды деятельности"})]}),a&&e.jsxs("div",{style:{fontSize:13,color:"#666"},children:["Всего элементов: ",a.totalItems," | Страница ",a.number," из ",a.totalPages]}),r&&e.jsxs("div",{style:{display:"grid",gap:8},children:[r.map(o=>e.jsxs(B,{st:{padding:12},children:[e.jsx("strong",{children:o.code})," — ",o.activityName]},o.id)),e.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:12},children:e.jsx(se,{...s})})]})]})},M=()=>{const{data:r,pageMeta:a,isLoading:i,isFetchingMore:n,hasMore:t,loadMore:s,submitFilters:o}=A({queryKey:"demo-infinite-report",url:"/api/demo/reports/paginated",defaultPageSize:5,mode:"infinite",select:c=>c.result,selectPage:c=>c.page});return e.jsxs("div",{style:{maxWidth:700},children:[e.jsxs("div",{style:{marginBottom:16},children:[e.jsx("h3",{children:"Бесконечный скролл с порционным монтированием"}),e.jsx(w,{onClick:()=>o({payload:{uid_form:1,years:["2026"]}}),disabled:i,children:"Запустить отчет (mode: 'infinite')"})]}),r&&e.jsx(Me,{items:r,chunkSize:3,estimatedItemHeight:140,keyExtractor:c=>c.id,onLoadMore:s,hasMore:t,isLoadingMore:n,children:c=>e.jsxs(B,{st:{padding:12},children:[e.jsx("h4",{children:c.title}),e.jsxs("div",{style:{fontSize:13,color:"#666"},children:["Строк в таблице: ",c.rows.length]})]})}),a&&!t&&e.jsxs("div",{style:{textAlign:"center",padding:16,color:"#888"},children:["Достигнут конец отчета (",r==null?void 0:r.length," таблиц)"]})]})};I.__docgenInfo={description:"",methods:[],displayName:"Default"};z.__docgenInfo={description:"",methods:[],displayName:"SpringDataRestFormat"};M.__docgenInfo={description:"",methods:[],displayName:"InfiniteScrollMode"};var X,Y,Z;I.parameters={...I.parameters,docs:{...(X=I.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
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
}`,...(Z=(Y=I.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,re;z.parameters={...z.parameters,docs:{...(ee=z.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
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
}`,...(re=(te=z.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ae,ie,ne;M.parameters={...M.parameters,docs:{...(ae=M.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
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
}`,...(ne=(ie=M.parameters)==null?void 0:ie.docs)==null?void 0:ne.source}}};const wt=["Default","SpringDataRestFormat","InfiniteScrollMode"];export{I as Default,M as InfiniteScrollMode,z as SpringDataRestFormat,wt as __namedExportsOrder,Et as default};
