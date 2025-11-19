import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{F as m}from"./FButton-CdBoQZas.js";import"./FButtonFile-B1-dGwQ8.js";import"./FTextField-CQUFWKWA.js";import"./FStack-Bs-EBUEz.js";import"./FGridRow-CsF9MpPt.js";import"./FContainer-BatpkT-f.js";import"./FPaper-BFgg04dY.js";import"./FTableFooter-BWmkWvIu.js";import"./index-DY-snNUy.js";import"./index-xMzmejw-.js";import"./FDialogFooter-Bfbpy8Fv.js";import"./FProgress-DRPVoeAu.js";import"./FPreloader-B_LCaiJ_.js";import"./FCheckbox-NPMfrU2t.js";import"./FRadioButton-CiO-cZog.js";import"./FPagination-CqlZsmTv.js";import"./FTimelineCard-rb4LP-m6.js";import"./FOpenImgFull-Dh9z-cRV.js";import"./FAccordion-Cg__21gJ.js";import"./FInputFileForm-CUODYS1f.js";import"./FFile-BtYqhg3U.js";import"./FSelectItem-CJWtApxf.js";import"./FFullDateField-C0grZK2T.js";import"./FSelectSearchDb-Af25Ppp2.js";import"./FTextArea-D4UTr8NG.js";import"./FCloseIcon-ZR3e0z_J.js";/* empty css                */import"./FTab-CvAzYgoL.js";import"./FDropdownItem-C_UcoqQE.js";import"./FSearchBox-D0FHvEmT.js";import"./FCarouselItem-BzHKgllY.js";import"./FSkeleton-pmLFDKm2.js";import"./FNavigateBarItem-C_SaROZY.js";import"./FMenuLinks-CLXKb6B9.js";import"./FTooltip-COBUcM1Z.js";import{a as i}from"./index-B-lxVbXh.js";import"./index-yBjzXJbu.js";import"./FLoadIcon-BM1DdYSY.js";import"./index-fNjTmf9T.js";import"./FDialog-DLm4K6IN.js";import"./FArrowIcon-DpFSaEY1.js";import"./FTrashIcon-Cxn1SHc6.js";import"./v4-CtRu48qb.js";function l(o,B){if(!o)throw new Error("Blob or string content must not be empty");const f=typeof o=="string"?new Blob([o],{type:"text/plain;charset=utf-8"}):o,t=document.createElement("a"),a=window.URL.createObjectURL(f);t.href=a,t.download=B,t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t),window.URL.revokeObjectURL(a)}const mo={title:"Function Elements/fDownloadBlobFile",component:l},n=()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[r.jsx(m,{onClick:()=>{const o="Привет, мир!";l(o,"hello.txt"),i("Скачивание текста")(`Контент: ${o}`)},children:"Скачать текстовый файл"}),r.jsx(m,{onClick:()=>{const o={message:"Hello",timestamp:new Date().toISOString()};l(JSON.stringify(o),"data.json"),i("Скачивание JSON")(o)},children:"Скачать JSON файл"})]}),e=()=>r.jsx(m,{onClick:async()=>{try{const o=new Blob(["Тестовые данные в Blob"],{type:"text/plain"});l(o,"blob-test.txt"),i("Скачивание Blob")("Успешно")}catch(o){i("Ошибка")(o.message)}},children:"Скачать файл из Blob"});n.__docgenInfo={description:"",methods:[],displayName:"Default"};e.__docgenInfo={description:"",methods:[],displayName:"BlobExample"};var s,p,c;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
}}>
    <FButton onClick={() => {
    const content = 'Привет, мир!';
    fDownloadBlobFile(content, 'hello.txt');
    action('Скачивание текста')(\`Контент: \${content}\`);
  }}>
      Скачать текстовый файл
    </FButton>

    <FButton onClick={() => {
    const jsonData = {
      message: 'Hello',
      timestamp: new Date().toISOString()
    };
    fDownloadBlobFile(JSON.stringify(jsonData), 'data.json');
    action('Скачивание JSON')(jsonData);
  }}>
      Скачать JSON файл
    </FButton>
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
}}>
    Скачать файл из Blob
  </FButton>`,...(u=(b=e.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};const ao=["Default","BlobExample"];export{e as BlobExample,n as Default,ao as __namedExportsOrder,mo as default};
