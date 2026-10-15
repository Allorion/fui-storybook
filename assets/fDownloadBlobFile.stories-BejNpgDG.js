import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{F as m}from"./FButton-WshjMl_j.js";import"./FButtonFile-ndsUyZDv.js";import"./FTextField-G4sFh9Uf.js";import"./FStack-Bjsadt8I.js";import"./FGridRow-DPVPfH0m.js";import"./FContainer-D9oNryDS.js";import"./FPaper-C96cUb7h.js";import"./FTableActions-CSP0-rhc.js";import"./index-B3j06Xw8.js";import"./index-D_ywfbVi.js";import"./FDialogFooter-BsOGDZKD.js";import"./FProgress-B1PkuN98.js";import"./FPreloader-Cq7UpuSU.js";import"./FCheckbox-C2Fn5p4I.js";import"./FRadioButton-CCi8vwMO.js";import"./FPagination-DkwE8RRm.js";import"./FTimelineCard-G_wv4YPr.js";import"./FCloseIcon-DdRZhJBn.js";import"./FArrowIcon-e6BJPakw.js";import"./FDownloadIcon-CBN19oNF.js";import{f as i}from"./FOpenImgFull-CaZNMJDa.js";import"./FImagePreview-Cr6Bzrel.js";import"./FVideoPlayer-BgLjSeQA.js";import"./FAccordion-B22xNC65.js";import"./FInputFileForm-CI_bUF6k.js";import"./FFile-ALKQqT-R.js";import"./FSelectItem-BAXWPI2S.js";import"./FFullDateField-bov5uJB9.js";import"./FSelectSearchDb-5nHlLFKL.js";import"./FTextArea-ChmymgEf.js";import"./FProgressiveList-BSFzbP1E.js";import"./FTab-4EmqzD2P.js";import"./FDropdownItem-3TiL9ogE.js";import"./FSearchBox-fdjYAM33.js";import"./FCarouselItem-DbNUFCsz.js";import"./FSkeleton-iaIByH-O.js";import"./FNavigateBarItem-BtOG1U8l.js";import"./FMenuLinks-Cbdq1Y8F.js";import"./FTooltip-BJ8WMW_6.js";import"./FSearchableSelect-DPsz2xcQ.js";import"./FSegmentedControl-DhW7n95-.js";import"./FStatusBadge-CaCHJHW5.js";import{a as e}from"./index-B-lxVbXh.js";import"./FLoadIcon-B2O1XWAm.js";import"./index-DW0t0JKo.js";import"./FTrashIcon-DpmD7QBY.js";import"./v4-CtRu48qb.js";const lo={title:"Function Elements/fDownloadBlobFile",component:i},t=()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[r.jsx(m,{onClick:()=>{const o="Привет, мир!";i(o,"hello.txt"),e("Скачивание текста")(`Контент: ${o}`)},children:"Скачать текстовый файл"}),r.jsx(m,{onClick:()=>{const o={message:"Hello",timestamp:new Date().toISOString()};i(JSON.stringify(o),"data.json"),e("Скачивание JSON")(o)},children:"Скачать JSON файл"})]}),n=()=>r.jsx(m,{onClick:async()=>{try{const o=new Blob(["Тестовые данные в Blob"],{type:"text/plain"});i(o,"blob-test.txt"),e("Скачивание Blob")("Успешно")}catch(o){e("Ошибка")(o.message)}},children:"Скачать файл из Blob"});t.__docgenInfo={description:"",methods:[],displayName:"Default"};n.__docgenInfo={description:"",methods:[],displayName:"BlobExample"};var l,a,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => <div style={{
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
  </div>`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var s,c,d;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`() => <FButton onClick={async () => {
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
  </FButton>`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const ao=["Default","BlobExample"];export{n as BlobExample,t as Default,ao as __namedExportsOrder,lo as default};
