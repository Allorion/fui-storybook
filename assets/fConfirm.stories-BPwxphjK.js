import{j as y}from"./jsx-runtime-D_zvdyIk.js";import{s as t,F as w}from"./FButton-DQOEJPUH.js";import"./FButtonFile-Cc8ubo-m.js";import"./FTextField-DSrbz1g8.js";import"./FStack-Bjsadt8I.js";import"./FGridRow-DPVPfH0m.js";import"./FContainer-D9oNryDS.js";import"./FPaper-ByA2FQvy.js";import"./FTableFooter-CQM2ANzx.js";import"./index-DEgj3Fem.js";import"./index-BknSE3li.js";import"./FDialogFooter-EZrNysQM.js";import"./FProgress-CuUSEf8T.js";import"./FPreloader-C0DO9d3w.js";import"./FCheckbox-CvjAvqQ6.js";import"./FRadioButton-CWco8Ir1.js";import"./FPagination-Cudve55R.js";import"./FTimelineCard-G_wv4YPr.js";import"./FOpenImgFull-BzaYDndu.js";import"./FAccordion-CUm2A8fo.js";import"./FInputFileForm-KMotnIpw.js";import"./FFile-BHJQGV29.js";import"./FSelectItem-BnNI1hqM.js";import"./FFullDateField-_mtt4yT5.js";import"./FSelectSearchDb-CtdF7gtg.js";import"./FTextArea-9qVfGzxf.js";import"./FCloseIcon-Dr7AIYCl.js";/* empty css                */import"./FTab-DHwok_rz.js";import"./FDropdownItem-D17eYKAm.js";import"./FSearchBox-Czmsapd1.js";import"./FCarouselItem-DRfQet_0.js";import"./FSkeleton-qmKtpPTy.js";import"./FNavigateBarItem-CQ1yOoQk.js";import"./FMenuLinks-CHiLRQZa.js";import"./FTooltip-CCrWwCPn.js";import"./FSearchableSelect-BZIN-NqS.js";import"./FLoadIcon-1-Td29NS.js";import"./index-DM3MU96Y.js";import"./FDialog-DPCiHy6F.js";import"./FArrowIcon-C21crw0H.js";import"./FTrashIcon-Da5Dd79F.js";const h="_warning_de5a5_31",n={"f-function-block-confirm":"_f-function-block-confirm_de5a5_1","f-function-confirm":"_f-function-confirm_de5a5_16","f-function-confirm-ico":"_f-function-confirm-ico_de5a5_24",warning:h,"f-function-confirm-inside":"_f-function-confirm-inside_de5a5_36","f-function-confirm-header":"_f-function-confirm-header_de5a5_43","f-function-confirm-body":"_f-function-confirm-body_de5a5_51","f-function-confirm-footer":"_f-function-confirm-footer_de5a5_65"},_=({title:e,body:b})=>new Promise(a=>{window.document.body.insertAdjacentHTML("afterbegin",`
                <div class='${n["f-function-block-confirm"]}' id='f-function-block-confirm'>
                    <div class='${n["f-function-confirm"]}'>
                        <div class='${n["f-function-confirm-ico"]} ${n.warning}'>
                            <svg width="28" height="28" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                            </svg>
                        </div>
                        <div class='${n["f-function-confirm-inside"]}'>
                            <div class='${n["f-function-confirm-header"]}'>
                                <h4>${e||""}</h4>
                            </div>
                            <div class='${n["f-function-confirm-body"]}'>
                                <span>${b}</span>
                            </div>
                            <div class='${n["f-function-confirm-footer"]}'>
                                <button
                                    id="f-function-confirm-ok"
                                    class='${t.btn} ${t["btn-sm"]} ${t["btn-success"]}'
                                >
                                    Ок
                                </button>
                                <button
                                    id="f-function-confirm-cancellation"
                                    class='${t.btn} ${t["btn-sm"]} ${t["btn-danger"]}'
                                >
                                    Отменить
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `);const c=document.getElementById("f-function-block-confirm"),o=document.getElementById("f-function-confirm-ok"),i=document.getElementById("f-function-confirm-cancellation"),d=()=>{window.removeEventListener("keydown",p),o==null||o.removeEventListener("click",f),i==null||i.removeEventListener("click",m),c==null||c.remove()},f=()=>{d(),a(!0)},m=()=>{d(),a(!1)},p=s=>{s.key==="Enter"&&(s.preventDefault(),f()),s.key==="Escape"&&m()};o==null||o.addEventListener("click",f),i==null||i.addEventListener("click",m),window.addEventListener("keydown",p)}),an={title:"Function Elements/fConfirm",component:_},r=()=>y.jsx(w,{onClick:async()=>{const e=await _({title:"Подтверждение",body:"Вы уверены, что хотите продолжить?"});alert(e?"Подтверждено":"Отменено")},children:"Показать Confirm"});r.__docgenInfo={description:"",methods:[],displayName:"Default"};var u,l,v;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`() => <FButton onClick={async () => {
  const result = await fConfirm({
    title: 'Подтверждение',
    body: 'Вы уверены, что хотите продолжить?'
  });
  alert(result ? 'Подтверждено' : 'Отменено');
}}>\r
    Показать Confirm\r
  </FButton>`,...(v=(l=r.parameters)==null?void 0:l.docs)==null?void 0:v.source}}};const dn=["Default"];export{r as Default,dn as __namedExportsOrder,an as default};
