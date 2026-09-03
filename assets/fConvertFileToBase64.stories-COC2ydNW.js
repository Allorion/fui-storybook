import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{F as u}from"./FButton-Bm7SLZDh.js";import"./FButtonFile-2hnyxxUz.js";import"./FTextField-G4sFh9Uf.js";import"./FStack-Bjsadt8I.js";import"./FGridRow-DPVPfH0m.js";import"./FContainer-D9oNryDS.js";import"./FPaper-Dw44gAGj.js";import"./FTableFooter-V7VQ4Rth.js";import"./index-B3j06Xw8.js";import"./index-D_ywfbVi.js";import"./FDialogFooter-DEKgFpT2.js";import"./FProgress-B1PkuN98.js";import"./FPreloader-Cq7UpuSU.js";import"./FCheckbox-vG_g993e.js";import"./FRadioButton-CCi8vwMO.js";import"./FPagination-DkwE8RRm.js";import"./FTimelineCard-G_wv4YPr.js";import"./FOpenImgFull-CjVGNnQc.js";import"./FAccordion-DQ536p-c.js";import"./FInputFileForm-CI_bUF6k.js";import"./FFile-ALKQqT-R.js";import"./FSelectItem-BAXWPI2S.js";import"./FFullDateField-bov5uJB9.js";import"./FSelectSearchDb-5nHlLFKL.js";import"./FTextArea-ChmymgEf.js";import"./FCloseIcon-DdRZhJBn.js";/* empty css                */import"./FTab-CVUcQ5FF.js";import"./FDropdownItem-BJkfltKt.js";import"./FSearchBox-BhywZClE.js";import"./FCarouselItem-DbNUFCsz.js";import"./FSkeleton-iaIByH-O.js";import"./FNavigateBarItem-BtOG1U8l.js";import"./FMenuLinks-Cbdq1Y8F.js";import"./FTooltip-BJ8WMW_6.js";import"./FSearchableSelect-DPsz2xcQ.js";import"./FSegmentedControl-DhW7n95-.js";import{a as f}from"./index-B-lxVbXh.js";import"./FLoadIcon-B2O1XWAm.js";import"./index-DW0t0JKo.js";import"./FDialog-Cl6TNCBH.js";import"./FArrowIcon-e6BJPakw.js";import"./FTrashIcon-DpmD7QBY.js";import"./v4-CtRu48qb.js";const c=(t,n=!1)=>new Promise((r,p)=>{const e=new FileReader;e.onload=()=>{const i=e.result;r(n?i.split(",")[1]:i)},e.onerror=i=>{p(i)},e.readAsDataURL(t)}),nt={title:"Function Elements/fConvertFileToBase64",component:c},o=()=>l.jsx(u,{onClick:async()=>{const t=document.createElement("input");t.type="file",t.onchange=async n=>{const r=n.target.files[0];if(r){const p=await c(r);f("Base64 результат")(p)}},t.click()},children:"Конвертировать файл в Base64"});o.__docgenInfo={description:"",methods:[],displayName:"Default"};var m,s,a;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`() => <FButton onClick={async () => {
  const input = document.createElement('input');
  input.type = 'file';
  input.onchange = async (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const base64 = await fConvertFileToBase64(file);
      action('Base64 результат')(base64);
    }
  };
  input.click();
}}>\r
    Конвертировать файл в Base64\r
  </FButton>`,...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const pt=["Default"];export{o as Default,pt as __namedExportsOrder,nt as default};
