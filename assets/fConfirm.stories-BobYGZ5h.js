import{j as _}from"./jsx-runtime-Cf8x2fCZ.js";import{s as t,F as v}from"./FButton-CdBoQZas.js";import"./FButtonFile-B1-dGwQ8.js";import"./FTextField-CQUFWKWA.js";import"./FStack-Bs-EBUEz.js";import"./FGridRow-CsF9MpPt.js";import"./FContainer-BatpkT-f.js";import"./FPaper-BFgg04dY.js";import"./FTableFooter-BWmkWvIu.js";import"./index-DY-snNUy.js";import"./index-xMzmejw-.js";import"./FDialogFooter-Bfbpy8Fv.js";import"./FProgress-DRPVoeAu.js";import"./FPreloader-B_LCaiJ_.js";import"./FCheckbox-NPMfrU2t.js";import"./FRadioButton-CiO-cZog.js";import"./FPagination-CqlZsmTv.js";import"./FTimelineCard-rb4LP-m6.js";import"./FOpenImgFull-Dh9z-cRV.js";import"./FAccordion-Cg__21gJ.js";import"./FInputFileForm-CUODYS1f.js";import"./FFile-BtYqhg3U.js";import"./FSelectItem-CJWtApxf.js";import"./FFullDateField-C0grZK2T.js";import"./FSelectSearchDb-Af25Ppp2.js";import"./FTextArea-D4UTr8NG.js";import"./FCloseIcon-ZR3e0z_J.js";/* empty css                */import"./FTab-CvAzYgoL.js";import"./FDropdownItem-C_UcoqQE.js";import"./FSearchBox-D0FHvEmT.js";import"./FCarouselItem-BzHKgllY.js";import"./FSkeleton-pmLFDKm2.js";import"./FNavigateBarItem-C_SaROZY.js";import"./FMenuLinks-CLXKb6B9.js";import"./FTooltip-COBUcM1Z.js";import"./index-yBjzXJbu.js";import"./FLoadIcon-BM1DdYSY.js";import"./index-fNjTmf9T.js";import"./FDialog-DLm4K6IN.js";import"./FArrowIcon-DpFSaEY1.js";import"./FTrashIcon-Cxn1SHc6.js";const b="_warning_de5a5_31",o={"f-function-block-confirm":"_f-function-block-confirm_de5a5_1","f-function-confirm":"_f-function-confirm_de5a5_16","f-function-confirm-ico":"_f-function-confirm-ico_de5a5_24",warning:b,"f-function-confirm-inside":"_f-function-confirm-inside_de5a5_36","f-function-confirm-header":"_f-function-confirm-header_de5a5_43","f-function-confirm-body":"_f-function-confirm-body_de5a5_51","f-function-confirm-footer":"_f-function-confirm-footer_de5a5_65"},d=({title:e,body:u})=>new Promise(c=>{window.document.body.insertAdjacentHTML("afterbegin",`
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
            `);const n=document.querySelector("#f-function-confirm-ok"),i=document.querySelector("#f-function-confirm-cancellation"),p=()=>c(!0),l=()=>c(!1);n==null||n.addEventListener("click",()=>{f(),c(!0)}),i==null||i.addEventListener("click",()=>{f(),c(!1)});const f=()=>{n==null||n.removeEventListener("click",p),i==null||i.removeEventListener("click",l)}}),eo={title:"Function Elements/fConfirm",component:d},r=()=>_.jsx(v,{onClick:async()=>{const e=await d({title:"Подтверждение",body:"Вы уверены, что хотите продолжить?"});alert(e?"Подтверждено":"Отменено")},children:"Показать Confirm"});r.__docgenInfo={description:"",methods:[],displayName:"Default"};var m,s,a;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`() => <FButton onClick={async () => {
  const result = await fConfirm({
    title: 'Подтверждение',
    body: 'Вы уверены, что хотите продолжить?'
  });
  alert(result ? 'Подтверждено' : 'Отменено');
}}>
    Показать Confirm
  </FButton>`,...(a=(s=r.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const fo=["Default"];export{r as Default,fo as __namedExportsOrder,eo as default};
