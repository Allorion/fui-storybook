import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./index-B3j06Xw8.js";import{Q as c,a as y}from"./QueryClientProvider-THqb51Ql.js";import{F as v}from"./FButton-WshjMl_j.js";import"./FButtonFile-ndsUyZDv.js";import"./FTextField-G4sFh9Uf.js";import"./FStack-Bjsadt8I.js";import"./FGridRow-DPVPfH0m.js";import"./FContainer-D9oNryDS.js";import"./FPaper-C96cUb7h.js";import"./FTableActions-CSP0-rhc.js";import"./index-D_ywfbVi.js";import"./FDialogFooter-BsOGDZKD.js";import"./FProgress-B1PkuN98.js";import"./FPreloader-Cq7UpuSU.js";import"./FCheckbox-C2Fn5p4I.js";import"./FRadioButton-CCi8vwMO.js";import"./FPagination-DkwE8RRm.js";import"./FTimelineCard-G_wv4YPr.js";import"./FCloseIcon-DdRZhJBn.js";import"./FArrowIcon-e6BJPakw.js";import"./FDownloadIcon-CBN19oNF.js";import"./FImagePreview-Cr6Bzrel.js";import"./FVideoPlayer-BgLjSeQA.js";import"./FAccordion-B22xNC65.js";import"./FInputFileForm-CI_bUF6k.js";import"./FFile-ALKQqT-R.js";import"./FSelectItem-BAXWPI2S.js";import"./FFullDateField-bov5uJB9.js";import"./FSelectSearchDb-5nHlLFKL.js";import"./FTextArea-ChmymgEf.js";import"./FProgressiveList-CMvlYDf2.js";import"./FTab-4EmqzD2P.js";import"./FDropdownItem-3TiL9ogE.js";import"./FSearchBox-fdjYAM33.js";import"./FCarouselItem-DbNUFCsz.js";import"./FSkeleton-iaIByH-O.js";import"./FNavigateBarItem-BtOG1U8l.js";import"./FMenuLinks-Cbdq1Y8F.js";import"./FTooltip-BJ8WMW_6.js";import"./FSearchableSelect-DPsz2xcQ.js";import"./FSegmentedControl-DhW7n95-.js";import"./FStatusBadge-CaCHJHW5.js";import{F as g}from"./FLibraryProvider-DeR-DKlD.js";import{u as d}from"./useFManualApiQuery-TJgWTP1U.js";import"./FLoadIcon-B2O1XWAm.js";import"./index-DW0t0JKo.js";import"./FOpenImgFull-CaZNMJDa.js";import"./FTrashIcon-DpmD7QBY.js";import"./useQuery-BR0io2vp.js";import"./jszip.min-Dbd3Wm32.js";import"./allorion-exporting-html-to-docx.es-DCozvCwW.js";import"./server.browser-C_ryhKp0.js";import"./allorion-exporting-html-to-xlsx.es-VRd7k21f.js";import"./fNotification-vnFpW_Yq.js";import"./fGenerateUniqueId-BDtj4-Pu.js";const h={request:async(i,t)=>{if(i==="/api/demo/manual"){const o=(t==null?void 0:t.data)??{};return{items:[{id:o.page??1,label:`Результат для ${o.q??"all"}`}]}}throw new Error(`Неизвестный URL: ${i}`)}},x=({children:i})=>{const t=m.useMemo(()=>new c,[]),o=m.useMemo(()=>({apiService:h}),[]);return r.jsx(g,{config:o,children:r.jsx(y,{client:t,children:i})})},Fr={title:"Hooks/useFManualApiQuery",component:d,decorators:[i=>r.jsx(x,{children:r.jsx(i,{})})]},n=()=>{var e;const{data:i,isFetching:t,run:o,params:l,urlParams:u}=d("manual-demo","/api/demo/manual",{page:1},void 0,{method:"POST"});return r.jsxs("div",{style:{display:"grid",gap:12},children:[r.jsx(v,{onClick:()=>o({newParams:{page:2,q:"storybook"},newUrlParams:{mode:"demo"}}),children:"Выполнить ручной запрос"}),t&&r.jsx("div",{children:"Загрузка..."}),i&&r.jsxs("div",{children:[r.jsxs("div",{children:["Параметры: ",JSON.stringify(l)]}),r.jsxs("div",{children:["URL-параметры: ",JSON.stringify(u)]}),r.jsxs("div",{children:["Результат: ",(e=i.items[0])==null?void 0:e.label]})]})]})};n.__docgenInfo={description:"",methods:[],displayName:"Default"};var a,s,p;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(p=(s=n.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const br=["Default"];export{n as Default,br as __namedExportsOrder,Fr as default};
