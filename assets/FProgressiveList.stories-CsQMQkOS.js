import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./index-B3j06Xw8.js";import{F as c}from"./FProgressiveList-BSFzbP1E.js";import{F as $}from"./FButton-WshjMl_j.js";import"./FButtonFile-ndsUyZDv.js";import"./FTextField-G4sFh9Uf.js";import"./FStack-Bjsadt8I.js";import"./FGridRow-DPVPfH0m.js";import"./FContainer-D9oNryDS.js";import{F as f}from"./FPaper-C96cUb7h.js";import{F as E,a as D,b as S,c as x,d as A,e as y}from"./FTableActions-CSP0-rhc.js";import"./index-D_ywfbVi.js";import"./FDialogFooter-BsOGDZKD.js";import"./FProgress-B1PkuN98.js";import"./FPreloader-Cq7UpuSU.js";import"./FCheckbox-C2Fn5p4I.js";import"./FRadioButton-CCi8vwMO.js";import"./FPagination-DkwE8RRm.js";import"./FTimelineCard-G_wv4YPr.js";import"./FCloseIcon-DdRZhJBn.js";import"./FArrowIcon-e6BJPakw.js";import"./FDownloadIcon-CBN19oNF.js";import"./FImagePreview-Cr6Bzrel.js";import"./FVideoPlayer-BgLjSeQA.js";import"./FAccordion-B22xNC65.js";import"./FInputFileForm-CI_bUF6k.js";import"./FFile-ALKQqT-R.js";import"./FSelectItem-BAXWPI2S.js";import"./FFullDateField-bov5uJB9.js";import"./FSelectSearchDb-5nHlLFKL.js";import"./FTextArea-ChmymgEf.js";import"./FTab-4EmqzD2P.js";import"./FDropdownItem-3TiL9ogE.js";import"./FSearchBox-fdjYAM33.js";import"./FCarouselItem-DbNUFCsz.js";import"./FSkeleton-iaIByH-O.js";import"./FNavigateBarItem-BtOG1U8l.js";import"./FMenuLinks-Cbdq1Y8F.js";import"./FTooltip-BJ8WMW_6.js";import"./FSearchableSelect-DPsz2xcQ.js";import"./FSegmentedControl-DhW7n95-.js";import"./FStatusBadge-CaCHJHW5.js";import"./FLoadIcon-B2O1XWAm.js";import"./index-DW0t0JKo.js";import"./FOpenImgFull-CaZNMJDa.js";import"./FTrashIcon-DpmD7QBY.js";const g=r=>Array.from({length:r},(n,t)=>({id:`item-${t+1}`,title:`Элемент списка #${t+1}`,description:`Детальное описание для блока данных #${t+1}. Содержит структурированные поля и значения.`,value:(t+1)*250})),Ce={title:"Material/FProgressiveList",component:c,argTypes:{chunkSize:{control:{type:"number",min:1,max:20},defaultValue:6},estimatedItemHeight:{control:{type:"number",min:50,max:500},defaultValue:100},showProgress:{control:{type:"boolean"},defaultValue:!0}}},o=r=>{const[n,t]=a.useState(()=>g(50)),p=()=>{t(g(50))};return e.jsxs("div",{style:{maxWidth:700,padding:16},children:[e.jsxs("div",{style:{marginBottom:16,display:"flex",gap:12,alignItems:"center"},children:[e.jsx($,{onClick:p,children:"Перегенерировать список (50 элементов)"}),e.jsxs("span",{style:{fontSize:13,color:"#666"},children:["Всего элементов: ",n.length]})]}),e.jsx(c,{items:n,chunkSize:r.chunkSize??6,estimatedItemHeight:r.estimatedItemHeight??100,showProgress:r.showProgress??!0,keyExtractor:i=>i.id,children:i=>e.jsxs(f,{st:{padding:16,background:"#fafafa",border:"1px solid #e0e0e0"},children:[e.jsx("div",{style:{fontWeight:600,fontSize:15,marginBottom:4},children:i.title}),e.jsx("div",{style:{fontSize:13,color:"#555",marginBottom:8},children:i.description}),e.jsxs("div",{style:{fontSize:12,color:"#1976d2",fontWeight:500},children:["Сумма: ",i.value.toLocaleString("ru-RU")," руб."]})]})})]})};o.args={chunkSize:6,estimatedItemHeight:100,showProgress:!0};const d=()=>{const r=a.useMemo(()=>Array.from({length:30},(n,t)=>({id:`table-${t+1}`,title:`Финансовая ведомость №${t+1}`,rows:[{code:"001",name:"Основные средства",val:(t+1)*15e3},{code:"002",name:"Оборотные активы",val:(t+1)*8500},{code:"003",name:"Капитал и резервы",val:(t+1)*12e3},{code:"004",name:"Краткосрочные обязательства",val:(t+1)*4500}]})),[]);return e.jsxs("div",{style:{maxWidth:800,padding:16},children:[e.jsx("h3",{style:{marginBottom:16},children:"30 тяжелых таблиц с инкрементальным монтированием"}),e.jsx(c,{items:r,chunkSize:4,estimatedItemHeight:220,keyExtractor:n=>n.id,children:n=>e.jsxs(f,{st:{padding:16},children:[e.jsx("h4",{style:{margin:"0 0 10px 0"},children:n.title}),e.jsxs(E,{layout:"fixed",children:[e.jsx(D,{children:e.jsxs(S,{children:[e.jsx(x,{children:"Код"}),e.jsx(x,{children:"Наименование показателя"}),e.jsx(x,{children:"Сумма"})]})}),e.jsx(A,{children:n.rows.map(t=>e.jsxs(S,{children:[e.jsx(y,{children:t.code}),e.jsx(y,{children:t.name}),e.jsxs(y,{children:[t.val.toLocaleString("ru-RU")," руб."]})]},t.code))})]})]})})]})},l=()=>{const r=a.useMemo(()=>g(40),[]);return e.jsx("div",{style:{maxWidth:600,padding:16},children:e.jsx(c,{items:r,chunkSize:5,estimatedItemHeight:80,keyExtractor:n=>n.id,renderProgress:(n,t)=>e.jsxs("div",{style:{padding:"8px 16px",background:"#e3f2fd",color:"#0d47a1",borderRadius:4,display:"inline-block",fontWeight:500},children:["⏳ Загружено ",n," из ",t," (",Math.round(n/t*100),"%)"]}),children:n=>e.jsxs("div",{style:{padding:12,background:"#fff",border:"1px solid #ddd",borderRadius:4},children:[e.jsx("strong",{children:n.title})," — ",n.value," руб."]})})})},m=()=>{const[r,n]=a.useState(1),[t,p]=a.useState(()=>g(12)),[i,v]=a.useState(!1),b=4,h=r<b,R=()=>{i||!h||(v(!0),setTimeout(()=>{const s=r+1,W=Array.from({length:12},(F,_)=>{const u=(s-1)*12+_+1;return{id:`item-${u}`,title:`Подгруженный элемент #${u} (Страница ${s})`,description:"Автоматически подгружен IntersectionObserver при скролле вниз.",value:u*250}});p(F=>[...F,...W]),n(s),v(!1)},700))};return e.jsxs("div",{style:{maxWidth:650,padding:16},children:[e.jsx("h3",{style:{marginBottom:8},children:"Бесконечный скролл (Infinite Scroll)"}),e.jsxs("p",{style:{fontSize:13,color:"#666",marginBottom:16},children:["Скролльте страницу вниз. При приближении к концу списка автоматически подгрузится следующая порция данных (страница ",r," из ",b,")."]}),e.jsx(c,{items:t,chunkSize:4,estimatedItemHeight:90,keyExtractor:s=>s.id,onLoadMore:R,hasMore:h,isLoadingMore:i,children:s=>e.jsxs(f,{st:{padding:14},children:[e.jsx("div",{style:{fontWeight:600},children:s.title}),e.jsx("div",{style:{fontSize:12,color:"#666"},children:s.description})]})}),!h&&e.jsxs("div",{style:{textAlign:"center",padding:16,color:"#888",fontSize:13},children:["🎉 Все данные загружены (",t.length," элементов)"]})]})};o.__docgenInfo={description:"",methods:[],displayName:"Playground",props:{chunkSize:{required:!1,tsType:{name:"number"},description:""},estimatedItemHeight:{required:!1,tsType:{name:"number"},description:""},showProgress:{required:!1,tsType:{name:"boolean"},description:""}}};d.__docgenInfo={description:"",methods:[],displayName:"HeavyTables"};l.__docgenInfo={description:"",methods:[],displayName:"CustomProgress"};m.__docgenInfo={description:"",methods:[],displayName:"InfiniteScroll"};var I,P,j;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`(args: {
  chunkSize?: number;
  estimatedItemHeight?: number;
  showProgress?: boolean;
}) => {
  const [items, setItems] = useState<IDemoItem[]>(() => generateItems(50));
  const handleRegenerate = () => {
    setItems(generateItems(50));
  };
  return <div style={{
    maxWidth: 700,
    padding: 16
  }}>\r
            <div style={{
      marginBottom: 16,
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }}>\r
                <FButton onClick={handleRegenerate}>\r
                    Перегенерировать список (50 элементов)\r
                </FButton>\r
                <span style={{
        fontSize: 13,
        color: '#666'
      }}>\r
                    Всего элементов: {items.length}\r
                </span>\r
            </div>\r
\r
            <FProgressiveList items={items} chunkSize={args.chunkSize ?? 6} estimatedItemHeight={args.estimatedItemHeight ?? 100} showProgress={args.showProgress ?? true} keyExtractor={item => item.id}>\r
                {item => <FPaper st={{
        padding: 16,
        background: '#fafafa',
        border: '1px solid #e0e0e0'
      }}>\r
                        <div style={{
          fontWeight: 600,
          fontSize: 15,
          marginBottom: 4
        }}>{item.title}</div>\r
                        <div style={{
          fontSize: 13,
          color: '#555',
          marginBottom: 8
        }}>{item.description}</div>\r
                        <div style={{
          fontSize: 12,
          color: '#1976d2',
          fontWeight: 500
        }}>\r
                            Сумма: {item.value.toLocaleString('ru-RU')} руб.\r
                        </div>\r
                    </FPaper>}\r
            </FProgressiveList>\r
        </div>;
}`,...(j=(P=o.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var T,k,L;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const tables = useMemo(() => Array.from({
    length: 30
  }, (_, i) => ({
    id: \`table-\${i + 1}\`,
    title: \`Финансовая ведомость №\${i + 1}\`,
    rows: [{
      code: '001',
      name: 'Основные средства',
      val: (i + 1) * 15000
    }, {
      code: '002',
      name: 'Оборотные активы',
      val: (i + 1) * 8500
    }, {
      code: '003',
      name: 'Капитал и резервы',
      val: (i + 1) * 12000
    }, {
      code: '004',
      name: 'Краткосрочные обязательства',
      val: (i + 1) * 4500
    }]
  })), []);
  return <div style={{
    maxWidth: 800,
    padding: 16
  }}>\r
            <h3 style={{
      marginBottom: 16
    }}>30 тяжелых таблиц с инкрементальным монтированием</h3>\r
            <FProgressiveList items={tables} chunkSize={4} estimatedItemHeight={220} keyExtractor={table => table.id}>\r
                {table => <FPaper st={{
        padding: 16
      }}>\r
                        <h4 style={{
          margin: '0 0 10px 0'
        }}>{table.title}</h4>\r
                        <FTable layout="fixed">\r
                            <FTableHead>\r
                                <FTableRow>\r
                                    <FTableHeaderCell>Код</FTableHeaderCell>\r
                                    <FTableHeaderCell>Наименование показателя</FTableHeaderCell>\r
                                    <FTableHeaderCell>Сумма</FTableHeaderCell>\r
                                </FTableRow>\r
                            </FTableHead>\r
                            <FTableBody>\r
                                {table.rows.map(row => <FTableRow key={row.code}>\r
                                        <FTableDataCell>{row.code}</FTableDataCell>\r
                                        <FTableDataCell>{row.name}</FTableDataCell>\r
                                        <FTableDataCell>{row.val.toLocaleString('ru-RU')} руб.</FTableDataCell>\r
                                    </FTableRow>)}\r
                            </FTableBody>\r
                        </FTable>\r
                    </FPaper>}\r
            </FProgressiveList>\r
        </div>;
}`,...(L=(k=d.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var z,H,M;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  const items = useMemo(() => generateItems(40), []);
  return <div style={{
    maxWidth: 600,
    padding: 16
  }}>\r
            <FProgressiveList items={items} chunkSize={5} estimatedItemHeight={80} keyExtractor={item => item.id} renderProgress={(rendered, total) => <div style={{
      padding: '8px 16px',
      background: '#e3f2fd',
      color: '#0d47a1',
      borderRadius: 4,
      display: 'inline-block',
      fontWeight: 500
    }}>\r
                        ⏳ Загружено {rendered} из {total} ({Math.round(rendered / total * 100)}%)\r
                    </div>}>\r
                {item => <div style={{
        padding: 12,
        background: '#fff',
        border: '1px solid #ddd',
        borderRadius: 4
      }}>\r
                        <strong>{item.title}</strong> — {item.value} руб.\r
                    </div>}\r
            </FProgressiveList>\r
        </div>;
}`,...(M=(H=l.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var w,B,C;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState<IDemoItem[]>(() => generateItems(12));
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const maxPages = 4;
  const hasMore = page < maxPages;
  const handleLoadMore = () => {
    if (isLoadingMore || !hasMore) return;
    setIsLoadingMore(true);
    setTimeout(() => {
      const nextPage = page + 1;
      const newBatch = Array.from({
        length: 12
      }, (_, i) => {
        const num = (nextPage - 1) * 12 + i + 1;
        return {
          id: \`item-\${num}\`,
          title: \`Подгруженный элемент #\${num} (Страница \${nextPage})\`,
          description: \`Автоматически подгружен IntersectionObserver при скролле вниз.\`,
          value: num * 250
        };
      });
      setItems(prev => [...prev, ...newBatch]);
      setPage(nextPage);
      setIsLoadingMore(false);
    }, 700);
  };
  return <div style={{
    maxWidth: 650,
    padding: 16
  }}>\r
            <h3 style={{
      marginBottom: 8
    }}>Бесконечный скролл (Infinite Scroll)</h3>\r
            <p style={{
      fontSize: 13,
      color: '#666',
      marginBottom: 16
    }}>\r
                Скролльте страницу вниз. При приближении к концу списка автоматически подгрузится следующая порция данных (страница {page} из {maxPages}).\r
            </p>\r
            <FProgressiveList items={items} chunkSize={4} estimatedItemHeight={90} keyExtractor={item => item.id} onLoadMore={handleLoadMore} hasMore={hasMore} isLoadingMore={isLoadingMore}>\r
                {item => <FPaper st={{
        padding: 14
      }}>\r
                        <div style={{
          fontWeight: 600
        }}>{item.title}</div>\r
                        <div style={{
          fontSize: 12,
          color: '#666'
        }}>{item.description}</div>\r
                    </FPaper>}\r
            </FProgressiveList>\r
            {!hasMore && <div style={{
      textAlign: 'center',
      padding: 16,
      color: '#888',
      fontSize: 13
    }}>\r
                    🎉 Все данные загружены ({items.length} элементов)\r
                </div>}\r
        </div>;
}`,...(C=(B=m.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};const Re=["Playground","HeavyTables","CustomProgress","InfiniteScroll"];export{l as CustomProgress,d as HeavyTables,m as InfiniteScroll,o as Playground,Re as __namedExportsOrder,Ce as default};
