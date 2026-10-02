import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{F as l}from"./FButton-WshjMl_j.js";import"./FButtonFile-ndsUyZDv.js";import"./FTextField-G4sFh9Uf.js";import"./FStack-Bjsadt8I.js";import"./FGridRow-DPVPfH0m.js";import"./FContainer-D9oNryDS.js";import"./FPaper-C96cUb7h.js";import"./FTableActions-CSP0-rhc.js";import"./index-B3j06Xw8.js";import"./index-D_ywfbVi.js";import"./FDialogFooter-BsOGDZKD.js";import"./FProgress-B1PkuN98.js";import"./FPreloader-Cq7UpuSU.js";import"./FCheckbox-C2Fn5p4I.js";import"./FRadioButton-CCi8vwMO.js";import"./FPagination-DkwE8RRm.js";import"./FTimelineCard-G_wv4YPr.js";import"./FCloseIcon-DdRZhJBn.js";import"./FArrowIcon-e6BJPakw.js";import"./FDownloadIcon-CBN19oNF.js";import"./FImagePreview-BI_HHImE.js";import"./FVideoPlayer-BgLjSeQA.js";import"./FAccordion-B22xNC65.js";import"./FInputFileForm-CI_bUF6k.js";import"./FFile-ALKQqT-R.js";import"./FSelectItem-BAXWPI2S.js";import"./FFullDateField-bov5uJB9.js";import"./FSelectSearchDb-5nHlLFKL.js";import"./FTextArea-ChmymgEf.js";/* empty css                */import"./FTab-4EmqzD2P.js";import"./FDropdownItem-3TiL9ogE.js";import"./FSearchBox-fdjYAM33.js";import"./FCarouselItem-DbNUFCsz.js";import"./FSkeleton-iaIByH-O.js";import"./FNavigateBarItem-BtOG1U8l.js";import"./FMenuLinks-Cbdq1Y8F.js";import"./FTooltip-BJ8WMW_6.js";import"./FSearchableSelect-DPsz2xcQ.js";import"./FSegmentedControl-DhW7n95-.js";import"./FStatusBadge-CaCHJHW5.js";import{a as i}from"./index-B-lxVbXh.js";import"./FLoadIcon-B2O1XWAm.js";import"./index-DW0t0JKo.js";import"./FOpenImgFull-D3oCg-l2.js";import"./FTrashIcon-DpmD7QBY.js";import"./v4-CtRu48qb.js";function m(o,B){if(!o)throw new Error("Blob or string content must not be empty");const f=typeof o=="string"?new Blob([o],{type:"text/plain;charset=utf-8"}):o,t=document.createElement("a"),a=window.URL.createObjectURL(f);t.href=a,t.download=B,t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t),window.URL.revokeObjectURL(a)}const co={title:"Function Elements/fDownloadBlobFile",component:m},n=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(l,{onClick:()=>{const o="Привет, мир!";m(o,"hello.txt"),i("Скачивание текста")(`Контент: ${o}`)},children:"Скачать текстовый файл"}),e.jsx(l,{onClick:()=>{const o={message:"Hello",timestamp:new Date().toISOString()};m(JSON.stringify(o),"data.json"),i("Скачивание JSON")(o)},children:"Скачать JSON файл"})]}),r=()=>e.jsx(l,{onClick:async()=>{try{const o=new Blob(["Тестовые данные в Blob"],{type:"text/plain"});m(o,"blob-test.txt"),i("Скачивание Blob")("Успешно")}catch(o){i("Ошибка")(o.message)}},children:"Скачать файл из Blob"});n.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"BlobExample"};var p,s,c;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
}}>\r
    <FButton onClick={() => {
    const content = 'Привет, мир!';
    fDownloadBlobFile(content, 'hello.txt');
    action('Скачивание текста')(\`Контент: \${content}\`);
  }}>\r
      Скачать текстовый файл\r
    </FButton>\r
\r
    <FButton onClick={() => {
    const jsonData = {
      message: 'Hello',
      timestamp: new Date().toISOString()
    };
    fDownloadBlobFile(JSON.stringify(jsonData), 'data.json');
    action('Скачивание JSON')(jsonData);
  }}>\r
      Скачать JSON файл\r
    </FButton>\r
  </div>`,...(c=(s=n.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var d,b,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`() => <FButton onClick={async () => {
  try {
    // Создаем простой Blob для демонстрации
    const blob = new Blob(['Тестовые данные в Blob'], {
      type: 'text/plain'
    });
    fDownloadBlobFile(blob, 'blob-test.txt');
    action('Скачивание Blob')('Успешно');
  } catch (error) {
    action('Ошибка')(error.message);
  }
}}>\r
    Скачать файл из Blob\r
  </FButton>`,...(u=(b=r.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};const bo=["Default","BlobExample"];export{r as BlobExample,n as Default,bo as __namedExportsOrder,co as default};
