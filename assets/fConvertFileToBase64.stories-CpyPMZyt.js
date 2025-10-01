import{j as l}from"./jsx-runtime-Cf8x2fCZ.js";import{F as u}from"./FButton-CwfpvuGP.js";import"./FButtonFile-ChwVCasa.js";import"./FTextField-CQUFWKWA.js";import"./FStack-Bs-EBUEz.js";import"./FGridRow-CsF9MpPt.js";import"./FContainer-BatpkT-f.js";import"./FPaper-BFgg04dY.js";import"./FTableFooter-BWmkWvIu.js";import"./index-DY-snNUy.js";import"./index-xMzmejw-.js";import"./FDialogFooter-Bfbpy8Fv.js";import"./FProgress-DRPVoeAu.js";import"./FPreloader-B_LCaiJ_.js";import"./FCheckbox-NPMfrU2t.js";import"./FRadioButton-CiO-cZog.js";import"./FPagination-CqlZsmTv.js";import"./FTimelineCard-rb4LP-m6.js";import"./FOpenImgFull-Dh9z-cRV.js";import"./FAccordion-Cg__21gJ.js";import"./FInputFileForm-CUODYS1f.js";import"./FFile-BtYqhg3U.js";import"./FSelectItem-CJWtApxf.js";import"./FFullDateField-C0grZK2T.js";import"./FSelectSearchDb-N4Kgdsi6.js";import"./FTextArea-D4UTr8NG.js";import"./FCloseIcon-ZR3e0z_J.js";/* empty css                */import"./FTab-CvAzYgoL.js";import"./FDropdownItem-Bl-qhMDP.js";import"./FSearchBox-DO4X67c3.js";import"./FCarouselItem-BzHKgllY.js";import"./FSkeleton-pmLFDKm2.js";import"./FNavigateBarItem-C_SaROZY.js";import"./FMenuLinks-D7zPlJ_g.js";import"./FTooltip-COBUcM1Z.js";import{a as f}from"./index-B-lxVbXh.js";import"./index-yBjzXJbu.js";import"./FLoadIcon-BM1DdYSY.js";import"./index-fNjTmf9T.js";import"./FDialog-DLm4K6IN.js";import"./FArrowIcon-DpFSaEY1.js";import"./FTrashIcon-Cxn1SHc6.js";import"./v4-CtRu48qb.js";const c=(t,n=!1)=>new Promise((e,p)=>{const r=new FileReader;r.onload=()=>{const i=r.result;e(n?i.split(",")[1]:i)},r.onerror=i=>{p(i)},r.readAsDataURL(t)}),it={title:"Function Elements/fConvertFileToBase64",component:c},o=()=>l.jsx(u,{onClick:async()=>{const t=document.createElement("input");t.type="file",t.onchange=async n=>{const e=n.target.files[0];if(e){const p=await c(e);f("Base64 результат")(p)}},t.click()},children:"Конвертировать файл в Base64"});o.__docgenInfo={description:"",methods:[],displayName:"Default"};var m,s,a;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`() => <FButton onClick={async () => {
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
