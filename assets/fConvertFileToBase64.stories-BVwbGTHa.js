import{j as l}from"./jsx-runtime-Cf8x2fCZ.js";import{F as u}from"./FButton-CdBoQZas.js";import"./FButtonFile-B1-dGwQ8.js";import"./FTextField-CQUFWKWA.js";import"./FStack-Bs-EBUEz.js";import"./FGridRow-CsF9MpPt.js";import"./FContainer-BatpkT-f.js";import"./FPaper-BFgg04dY.js";import"./FTableFooter-DVs5nPTb.js";import"./index-DY-snNUy.js";import"./index-xMzmejw-.js";import"./FDialogFooter-Bfbpy8Fv.js";import"./FProgress-DRPVoeAu.js";import"./FPreloader-B_LCaiJ_.js";import"./FCheckbox-NPMfrU2t.js";import"./FRadioButton-CiO-cZog.js";import"./FPagination-CqlZsmTv.js";import"./FTimelineCard-rb4LP-m6.js";import"./FOpenImgFull-Dh9z-cRV.js";import"./FAccordion-Cg__21gJ.js";import"./FInputFileForm-BKkDwdgT.js";import"./FFile-BtYqhg3U.js";import"./FSelectItem-CPfHgaOQ.js";import"./FFullDateField-C0grZK2T.js";import"./FSelectSearchDb-Af25Ppp2.js";import"./FTextArea-D4UTr8NG.js";import"./FCloseIcon-ZR3e0z_J.js";/* empty css                */import"./FTab-CvAzYgoL.js";import"./FDropdownItem-C_UcoqQE.js";import"./FSearchBox-D0FHvEmT.js";import"./FCarouselItem-BzHKgllY.js";import"./FSkeleton-pmLFDKm2.js";import"./FNavigateBarItem-C_SaROZY.js";import"./FMenuLinks-CLXKb6B9.js";import"./FTooltip-DERxuMdc.js";import{a as f}from"./index-B-lxVbXh.js";import"./index-yBjzXJbu.js";import"./FLoadIcon-BM1DdYSY.js";import"./index-fNjTmf9T.js";import"./FDialog-DLm4K6IN.js";import"./FArrowIcon-DpFSaEY1.js";import"./FTrashIcon-Cxn1SHc6.js";import"./v4-CtRu48qb.js";const c=(t,n=!1)=>new Promise((e,p)=>{const r=new FileReader;r.onload=()=>{const i=r.result;e(n?i.split(",")[1]:i)},r.onerror=i=>{p(i)},r.readAsDataURL(t)}),it={title:"Function Elements/fConvertFileToBase64",component:c},o=()=>l.jsx(u,{onClick:async()=>{const t=document.createElement("input");t.type="file",t.onchange=async n=>{const e=n.target.files[0];if(e){const p=await c(e);f("Base64 результат")(p)}},t.click()},children:"Конвертировать файл в Base64"});o.__docgenInfo={description:"",methods:[],displayName:"Default"};var m,s,a;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`() => <FButton onClick={async () => {
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
