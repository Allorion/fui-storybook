import{j as l}from"./jsx-runtime-Cf8x2fCZ.js";import{F as u}from"./FButton-CwfpvuGP.js";import"./FButtonFile-CCjneR4u.js";import"./FTextField-DtoXRif2.js";import"./FStack-Bs-EBUEz.js";import"./FGridRow-CsF9MpPt.js";import"./FContainer-BatpkT-f.js";import"./FPaper-BFgg04dY.js";import"./FTableFooter-BWmkWvIu.js";import"./index-DY-snNUy.js";import"./index-xMzmejw-.js";import"./FDialogFooter-DD6a7jOd.js";import"./FProgress-DRPVoeAu.js";import"./FPreloader-B_LCaiJ_.js";import"./FCheckbox-crXA0XCP.js";import"./FRadioButton-CHcr2FcC.js";import"./FPagination-CqlZsmTv.js";import"./FTimelineCard-rb4LP-m6.js";import"./FOpenImgFull-sWjjnLxR.js";import"./FAccordion-Cg__21gJ.js";import"./FInputFileForm-D47n6HKf.js";import"./FFile-D-P1EwbC.js";import"./FSelectItem-DWYUveAJ.js";import"./FFullDateField-d-ExAxY-.js";import"./FSelectSearchDb-CBryvi2r.js";import"./FTextArea-Dlb0Nce-.js";import"./FCloseIcon-4crl2uvv.js";/* empty css                */import"./FTab-iSg8zZQa.js";import"./FDropdownItem-Cghl3g-Q.js";import"./FSearchBox-DaEjTnjH.js";import"./FCarouselItem-BzHKgllY.js";import"./FSkeleton-pmLFDKm2.js";import"./FNavigateBarItem-C_SaROZY.js";import"./FMenuLinks-D7zPlJ_g.js";import"./FTooltip-BC9R3ZYO.js";import{a as f}from"./index-B-lxVbXh.js";import"./index-yBjzXJbu.js";import"./FLoadIcon-Dfwkb_VK.js";import"./index-fNjTmf9T.js";import"./FDialog-DLm4K6IN.js";import"./FArrowIcon-AjsFl5uk.js";import"./FTrashIcon-C1tCBYA9.js";import"./v4-CtRu48qb.js";const c=(t,n=!1)=>new Promise((e,p)=>{const r=new FileReader;r.onload=()=>{const i=r.result;e(n?i.split(",")[1]:i)},r.onerror=i=>{p(i)},r.readAsDataURL(t)}),it={title:"Function Elements/fConvertFileToBase64",component:c},o=()=>l.jsx(u,{onClick:async()=>{const t=document.createElement("input");t.type="file",t.onchange=async n=>{const e=n.target.files[0];if(e){const p=await c(e);f("Base64 результат")(p)}},t.click()},children:"Конвертировать файл в Base64"});o.__docgenInfo={description:"",methods:[],displayName:"Default"};var m,s,a;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`() => <FButton onClick={async () => {
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
}}>
    Конвертировать файл в Base64
  </FButton>`,...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const nt=["Default"];export{o as Default,nt as __namedExportsOrder,it as default};
