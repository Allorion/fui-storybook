import{j as l}from"./jsx-runtime-Cf8x2fCZ.js";import{F as u}from"./FButton-C6QFu6NS.js";import"./FButtonFile-DLpwmVhR.js";import"./FTextField-CvQDvwqw.js";import"./FStack-CaU3HVIe.js";import"./FGridRow-Cd5Ey8la.js";import"./FContainer-CBRWva3t.js";import"./FPaper-B4Vv-l4z.js";import"./FTableFooter-BCw1QWwU.js";import"./index-DY-snNUy.js";import"./index-xMzmejw-.js";import"./FDialogFooter-DtCnoDK1.js";import"./FProgress-CEE1n2UA.js";import"./FPreloader-DjsC-NoF.js";import"./FCheckbox-0HygKZ_H.js";import"./FRadioButton-BnB7wthJ.js";import"./FPagination-CGjwqwi5.js";import"./FTimelineCard-rb4LP-m6.js";import"./FOpenImgFull-DrOhw3hj.js";import"./FAccordion-DoHEzoJ5.js";import"./FInputFileForm-C-P9ko8T.js";import"./FFile-CjATirsC.js";import"./FSelectItem-Cuzv67AL.js";import"./FFullDateField-D-sWaVhN.js";import"./FSelectSearchDb-CDblKRL_.js";import"./FTextArea-BuLFvaa0.js";import"./FCloseIcon-6J1vWEif.js";/* empty css                */import"./FTab-CeQvFWdj.js";import"./FDropdownItem-Ca8ENcru.js";import"./FSearchBox-BdMFAORn.js";import"./FCarouselItem-CPrVz-TT.js";import"./FSkeleton-VCBpHstM.js";import"./FNavigateBarItem-CEkWKOcn.js";import"./FMenuLinks-CfzWJGgP.js";import{a as f}from"./index-B-lxVbXh.js";import"./index-yBjzXJbu.js";import"./FLoadIcon-BHsw31Xd.js";import"./index-fNjTmf9T.js";import"./FDialog-DLm4K6IN.js";import"./FArrowIcon-Bx2-MjZ4.js";import"./FTrashIcon-BUKZ78xj.js";import"./v4-CtRu48qb.js";const c=(t,n=!1)=>new Promise((e,p)=>{const r=new FileReader;r.onload=()=>{const i=r.result;e(n?i.split(",")[1]:i)},r.onerror=i=>{p(i)},r.readAsDataURL(t)}),rt={title:"Function Elements/fConvertFileToBase64",component:c},o=()=>l.jsx(u,{onClick:async()=>{const t=document.createElement("input");t.type="file",t.onchange=async n=>{const e=n.target.files[0];if(e){const p=await c(e);f("Base64 результат")(p)}},t.click()},children:"Конвертировать файл в Base64"});o.__docgenInfo={description:"",methods:[],displayName:"Default"};var m,s,a;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`() => <FButton onClick={async () => {
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
  </FButton>`,...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const it=["Default"];export{o as Default,it as __namedExportsOrder,rt as default};
