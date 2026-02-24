import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{F as m}from"./FButton-DQOEJPUH.js";import"./FButtonFile-Cc8ubo-m.js";import"./FTextField-DSrbz1g8.js";import"./FStack-Bjsadt8I.js";import"./FGridRow-DPVPfH0m.js";import"./FContainer-D9oNryDS.js";import"./FPaper-ByA2FQvy.js";import"./FTableFooter-BgRQPjyP.js";import"./index-DEgj3Fem.js";import"./index-BknSE3li.js";import"./FDialogFooter-EZrNysQM.js";import"./FProgress-CuUSEf8T.js";import"./FPreloader-C0DO9d3w.js";import"./FCheckbox-CvjAvqQ6.js";import"./FRadioButton-CWco8Ir1.js";import"./FPagination-Cudve55R.js";import"./FTimelineCard-G_wv4YPr.js";import"./FOpenImgFull-BzaYDndu.js";import"./FAccordion-CUm2A8fo.js";import"./FInputFileForm-KMotnIpw.js";import"./FFile-BHJQGV29.js";import"./FSelectItem-BnNI1hqM.js";import"./FFullDateField-_mtt4yT5.js";import"./FSelectSearchDb-CtdF7gtg.js";import"./FTextArea-9qVfGzxf.js";import"./FCloseIcon-Dr7AIYCl.js";/* empty css                */import"./FTab-DHwok_rz.js";import"./FDropdownItem-D17eYKAm.js";import"./FSearchBox-Czmsapd1.js";import"./FCarouselItem-DRfQet_0.js";import"./FSkeleton-qmKtpPTy.js";import"./FNavigateBarItem-CQ1yOoQk.js";import"./FMenuLinks-CHiLRQZa.js";import"./FTooltip-CCrWwCPn.js";import"./FSearchableSelect-BZIN-NqS.js";import{a as i}from"./index-B-lxVbXh.js";import"./FLoadIcon-1-Td29NS.js";import"./index-DM3MU96Y.js";import"./FDialog-DPCiHy6F.js";import"./FArrowIcon-C21crw0H.js";import"./FTrashIcon-Da5Dd79F.js";import"./v4-CtRu48qb.js";function l(o,B){if(!o)throw new Error("Blob or string content must not be empty");const f=typeof o=="string"?new Blob([o],{type:"text/plain;charset=utf-8"}):o,t=document.createElement("a"),a=window.URL.createObjectURL(f);t.href=a,t.download=B,t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t),window.URL.revokeObjectURL(a)}const mo={title:"Function Elements/fDownloadBlobFile",component:l},n=()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[r.jsx(m,{onClick:()=>{const o="Привет, мир!";l(o,"hello.txt"),i("Скачивание текста")(`Контент: ${o}`)},children:"Скачать текстовый файл"}),r.jsx(m,{onClick:()=>{const o={message:"Hello",timestamp:new Date().toISOString()};l(JSON.stringify(o),"data.json"),i("Скачивание JSON")(o)},children:"Скачать JSON файл"})]}),e=()=>r.jsx(m,{onClick:async()=>{try{const o=new Blob(["Тестовые данные в Blob"],{type:"text/plain"});l(o,"blob-test.txt"),i("Скачивание Blob")("Успешно")}catch(o){i("Ошибка")(o.message)}},children:"Скачать файл из Blob"});n.__docgenInfo={description:"",methods:[],displayName:"Default"};e.__docgenInfo={description:"",methods:[],displayName:"BlobExample"};var s,p,c;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`() => <div style={{
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
  </FButton>`,...(u=(b=e.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};const ao=["Default","BlobExample"];export{e as BlobExample,n as Default,ao as __namedExportsOrder,mo as default};
