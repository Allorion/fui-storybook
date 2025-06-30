import{j as _}from"./jsx-runtime-Cf8x2fCZ.js";import{s as t,F as v}from"./FButton-B6qhCJHc.js";import"./FButtonFile-C0VhEx3-.js";import"./FTextField-DtoXRif2.js";import"./FStack-Bs-EBUEz.js";import"./FGridRow-CsF9MpPt.js";import"./FContainer-BatpkT-f.js";import"./FPaper-BFgg04dY.js";import"./FTableFooter-CnqI0XYV.js";import"./index-DY-snNUy.js";import"./index-xMzmejw-.js";import"./FDialogFooter-DD6a7jOd.js";import"./FProgress-DRPVoeAu.js";import"./FPreloader-B_LCaiJ_.js";import"./FCheckbox-crXA0XCP.js";import"./FRadioButton-CHcr2FcC.js";import"./FPagination-CqlZsmTv.js";import"./FTimelineCard-rb4LP-m6.js";import"./FOpenImgFull-sWjjnLxR.js";import"./FAccordion-Cg__21gJ.js";import"./FInputFileForm-D47n6HKf.js";import"./FFile-D-P1EwbC.js";import"./FSelectItem-DWYUveAJ.js";import"./FFullDateField-d-ExAxY-.js";import"./FSelectSearchDb-CBryvi2r.js";import"./FTextArea-Dlb0Nce-.js";import"./FCloseIcon-4crl2uvv.js";/* empty css                */import"./FTab-CcBvhxU_.js";import"./FDropdownItem-C9WTnCuX.js";import"./FSearchBox-BB7BW799.js";import"./FCarouselItem-BzHKgllY.js";import"./FSkeleton-pmLFDKm2.js";import"./FNavigateBarItem-C_SaROZY.js";import"./FMenuLinks-D7zPlJ_g.js";import"./index-yBjzXJbu.js";import"./FLoadIcon-Dfwkb_VK.js";import"./index-fNjTmf9T.js";import"./FDialog-DLm4K6IN.js";import"./FArrowIcon-AjsFl5uk.js";import"./FTrashIcon-C1tCBYA9.js";const b="_warning_de5a5_31",o={"f-function-block-confirm":"_f-function-block-confirm_de5a5_1","f-function-confirm":"_f-function-confirm_de5a5_16","f-function-confirm-ico":"_f-function-confirm-ico_de5a5_24",warning:b,"f-function-confirm-inside":"_f-function-confirm-inside_de5a5_36","f-function-confirm-header":"_f-function-confirm-header_de5a5_43","f-function-confirm-body":"_f-function-confirm-body_de5a5_51","f-function-confirm-footer":"_f-function-confirm-footer_de5a5_65"},d=({title:e,body:u})=>new Promise(c=>{window.document.body.insertAdjacentHTML("afterbegin",`
                <div class='${o["f-function-block-confirm"]}' id='f-function-block-confirm'>
                    <div class='${o["f-function-confirm"]}'>
                        <div class='${o["f-function-confirm-ico"]} ${o.warning}'>
                            <svg width="28" height="28" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                            </svg>
                        </div>
                        <div class='${o["f-function-confirm-inside"]}'>
                            <div class='${o["f-function-confirm-header"]}'>
                                <h4>${e||""}</h4>
                            </div>
                            <div class='${o["f-function-confirm-body"]}'>
                                <span>${u}</span>
                            </div>
                            <div class='${o["f-function-confirm-footer"]}'>
                                <FButton
                                    id="f-function-confirm-ok"
                                    class='${t.btn} ${t["btn-sm"]} ${t["btn-success"]}'
                                    onclick='document.querySelector("#f-function-block-confirm").remove()'
                                >
                                    Ок
                                </FButton>
                                <FButton
                                    id="f-function-confirm-cancellation"
                                    class='${t.btn} ${t["btn-sm"]} ${t["btn-danger"]}'
                                    onclick='document.querySelector("#f-function-block-confirm").remove()'
                                >
                                    Отменить
                                </FButton>
                            </div>
                        </div>
                    </div>
                </div>
            `);const n=document.querySelector("#f-function-confirm-ok"),i=document.querySelector("#f-function-confirm-cancellation"),p=()=>c(!0),l=()=>c(!1);n==null||n.addEventListener("click",()=>{f(),c(!0)}),i==null||i.addEventListener("click",()=>{f(),c(!1)});const f=()=>{n==null||n.removeEventListener("click",p),i==null||i.removeEventListener("click",l)}}),co={title:"Function Elements/fConfirm",component:d},r=()=>_.jsx(v,{onClick:async()=>{const e=await d({title:"Подтверждение",body:"Вы уверены, что хотите продолжить?"});alert(e?"Подтверждено":"Отменено")},children:"Показать Confirm"});r.__docgenInfo={description:"",methods:[],displayName:"Default"};var m,s,a;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`() => <FButton onClick={async () => {
  const result = await fConfirm({
    title: 'Подтверждение',
    body: 'Вы уверены, что хотите продолжить?'
  });
  alert(result ? 'Подтверждено' : 'Отменено');
}}>
    Показать Confirm
  </FButton>`,...(a=(s=r.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const eo=["Default"];export{r as Default,eo as __namedExportsOrder,co as default};
