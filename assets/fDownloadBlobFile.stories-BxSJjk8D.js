import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{F as m}from"./FButton-C9wpY3zS.js";import"./FButtonFile-C-97Bcy4.js";import"./FTextField-9__gOwG2.js";import"./FStack-CaU3HVIe.js";import"./FGridRow-Cd5Ey8la.js";import"./FContainer-CBRWva3t.js";import"./FPaper-B4Vv-l4z.js";import"./FTableFooter-rhoceIn9.js";import"./index-DY-snNUy.js";import"./index-xMzmejw-.js";import"./FDialogFooter-DHGI5gTe.js";import"./FProgress-CEE1n2UA.js";import"./FPreloader-DSvNfYRU.js";import"./FCheckbox-CZMnA5mI.js";import"./FRadioButton-zWvdnqFb.js";import"./FPagination-CGjwqwi5.js";import"./FTimelineCard-rb4LP-m6.js";import"./FOpenImgFull-DSjId0kY.js";import"./FAccordion-DoHEzoJ5.js";import"./FInputFileForm-xXWG0l7e.js";import"./FFile-4snuIDkx.js";import"./FSelectItem-BBA9sko8.js";import"./FFullDateField-u765GOI1.js";import"./FSelectSearchDb-fqVQhS3d.js";import"./FTextArea-Pz35vTJd.js";import"./FCloseIcon-DSg2auC9.js";/* empty css                */import"./FTab-DVr93HwX.js";import"./FDropdownItem-CulPidhO.js";import"./FSearchBox-rNKAd81p.js";import"./FCarouselItem-CPrVz-TT.js";import"./FSkeleton-VCBpHstM.js";import"./FNavigateBarItem-CEkWKOcn.js";import"./FMenuLinks-Do6hEIXs.js";import"./FTooltip-DablkKvs.js";import"./FSearchableSelect-DVzczKgm.js";import{a as i}from"./index-B-lxVbXh.js";import"./index-yBjzXJbu.js";import"./FLoadIcon-BNGbbN3E.js";import"./index-fNjTmf9T.js";import"./FDialog-DLm4K6IN.js";import"./FArrowIcon-BBsChLs-.js";import"./FTrashIcon-CD7BhDB1.js";import"./v4-CtRu48qb.js";function l(o,B){if(!o)throw new Error("Blob or string content must not be empty");const f=typeof o=="string"?new Blob([o],{type:"text/plain;charset=utf-8"}):o,t=document.createElement("a"),a=window.URL.createObjectURL(f);t.href=a,t.download=B,t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t),window.URL.revokeObjectURL(a)}const ao={title:"Function Elements/fDownloadBlobFile",component:l},n=()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[r.jsx(m,{onClick:()=>{const o="Привет, мир!";l(o,"hello.txt"),i("Скачивание текста")(`Контент: ${o}`)},children:"Скачать текстовый файл"}),r.jsx(m,{onClick:()=>{const o={message:"Hello",timestamp:new Date().toISOString()};l(JSON.stringify(o),"data.json"),i("Скачивание JSON")(o)},children:"Скачать JSON файл"})]}),e=()=>r.jsx(m,{onClick:async()=>{try{const o=new Blob(["Тестовые данные в Blob"],{type:"text/plain"});l(o,"blob-test.txt"),i("Скачивание Blob")("Успешно")}catch(o){i("Ошибка")(o.message)}},children:"Скачать файл из Blob"});n.__docgenInfo={description:"",methods:[],displayName:"Default"};e.__docgenInfo={description:"",methods:[],displayName:"BlobExample"};var s,p,c;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`() => <div style={{
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
  </div>`,...(c=(p=n.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,b,u;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`() => <FButton onClick={async () => {
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
  </FButton>`,...(u=(b=e.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};const so=["Default","BlobExample"];export{e as BlobExample,n as Default,so as __namedExportsOrder,ao as default};
