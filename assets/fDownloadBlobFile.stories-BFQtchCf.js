import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{F as m}from"./FButton-C2kYOskP.js";import"./FButtonFile-DEql8rEI.js";import"./FTextField-Bfcy-agq.js";import"./FStack-Bjsadt8I.js";import"./FGridRow-DPVPfH0m.js";import"./FContainer-D9oNryDS.js";import"./FPaper-Dw44gAGj.js";import"./FTableFooter-WMoZ_F9z.js";import"./index-B3j06Xw8.js";import"./index-D_ywfbVi.js";import"./FDialogFooter-CkU-JZz2.js";import"./FProgress-CuUSEf8T.js";import"./FPreloader-Cq7UpuSU.js";import"./FCheckbox-CS1dTR8V.js";import"./FRadioButton-BLRA_gon.js";import"./FPagination-BKiZX-c7.js";import"./FTimelineCard-G_wv4YPr.js";import"./FOpenImgFull-yZcklQ0k.js";import"./FAccordion-DmXO5bBB.js";import"./FInputFileForm-CgROixNk.js";import"./FFile-BDXU6Ifc.js";import"./FSelectItem-C-_xf1fC.js";import"./FFullDateField-BAvOAkZw.js";import"./FSelectSearchDb-9J14UTwR.js";import"./FTextArea-D2Oj51U_.js";import"./FCloseIcon-DdRZhJBn.js";/* empty css                */import"./FTab-DB5xXUf7.js";import"./FDropdownItem-CaEuoX1f.js";import"./FSearchBox-BYSLYSh6.js";import"./FCarouselItem-DbNUFCsz.js";import"./FSkeleton-Bmt12B6C.js";import"./FNavigateBarItem-BtOG1U8l.js";import"./FMenuLinks-Cbdq1Y8F.js";import"./FTooltip-BJ8WMW_6.js";import"./FSearchableSelect-CuS-Phed.js";import"./FSegmentedControl-DhW7n95-.js";import{a as i}from"./index-B-lxVbXh.js";import"./FLoadIcon-CJgWVWfz.js";import"./index-DW0t0JKo.js";import"./FDialog-Ccy_5XvS.js";import"./FArrowIcon-e6BJPakw.js";import"./FTrashIcon-DpmD7QBY.js";import"./v4-CtRu48qb.js";function l(o,B){if(!o)throw new Error("Blob or string content must not be empty");const f=typeof o=="string"?new Blob([o],{type:"text/plain;charset=utf-8"}):o,t=document.createElement("a"),a=window.URL.createObjectURL(f);t.href=a,t.download=B,t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t),window.URL.revokeObjectURL(a)}const ao={title:"Function Elements/fDownloadBlobFile",component:l},n=()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[r.jsx(m,{onClick:()=>{const o="Привет, мир!";l(o,"hello.txt"),i("Скачивание текста")(`Контент: ${o}`)},children:"Скачать текстовый файл"}),r.jsx(m,{onClick:()=>{const o={message:"Hello",timestamp:new Date().toISOString()};l(JSON.stringify(o),"data.json"),i("Скачивание JSON")(o)},children:"Скачать JSON файл"})]}),e=()=>r.jsx(m,{onClick:async()=>{try{const o=new Blob(["Тестовые данные в Blob"],{type:"text/plain"});l(o,"blob-test.txt"),i("Скачивание Blob")("Успешно")}catch(o){i("Ошибка")(o.message)}},children:"Скачать файл из Blob"});n.__docgenInfo={description:"",methods:[],displayName:"Default"};e.__docgenInfo={description:"",methods:[],displayName:"BlobExample"};var s,p,c;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`() => <div style={{
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
