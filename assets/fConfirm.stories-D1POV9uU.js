import{j as y}from"./jsx-runtime-D_zvdyIk.js";import{s as t,F as w}from"./FButton-wCVY7eIs.js";import"./FButtonFile-D2S8Q-gm.js";import"./FTextField-Bfcy-agq.js";import"./FStack-Bjsadt8I.js";import"./FGridRow-DPVPfH0m.js";import"./FContainer-D9oNryDS.js";import"./FPaper-Dn0vIXiP.js";import"./FTableFooter-WMoZ_F9z.js";import"./index-B3j06Xw8.js";import"./index-D_ywfbVi.js";import"./FDialogFooter-BenDTTL6.js";import"./FProgress-CuUSEf8T.js";import"./FPreloader-Cq7UpuSU.js";import"./FCheckbox-CS1dTR8V.js";import"./FRadioButton-BLRA_gon.js";import"./FPagination-BKiZX-c7.js";import"./FTimelineCard-G_wv4YPr.js";import"./FOpenImgFull-BmEgMMd7.js";import"./FAccordion-DmXO5bBB.js";import"./FInputFileForm-CgROixNk.js";import"./FFile-BDXU6Ifc.js";import"./FSelectItem-C-_xf1fC.js";import"./FFullDateField-BAvOAkZw.js";import"./FSelectSearchDb-9J14UTwR.js";import"./FTextArea-D2Oj51U_.js";import"./FCloseIcon-DdRZhJBn.js";/* empty css                */import"./FTab-DB5xXUf7.js";import"./FDropdownItem-YzbPD2d9.js";import"./FSearchBox-6sTLn0W8.js";import"./FCarouselItem-DbNUFCsz.js";import"./FSkeleton-Bmt12B6C.js";import"./FNavigateBarItem-BtOG1U8l.js";import"./FMenuLinks-Cbdq1Y8F.js";import"./FTooltip-BJ8WMW_6.js";import"./FSearchableSelect-CuS-Phed.js";import"./FLoadIcon-CJgWVWfz.js";import"./index-DW0t0JKo.js";import"./FDialog-B0I80EdC.js";import"./FArrowIcon-e6BJPakw.js";import"./FTrashIcon-DpmD7QBY.js";const h="_warning_de5a5_31",n={"f-function-block-confirm":"_f-function-block-confirm_de5a5_1","f-function-confirm":"_f-function-confirm_de5a5_16","f-function-confirm-ico":"_f-function-confirm-ico_de5a5_24",warning:h,"f-function-confirm-inside":"_f-function-confirm-inside_de5a5_36","f-function-confirm-header":"_f-function-confirm-header_de5a5_43","f-function-confirm-body":"_f-function-confirm-body_de5a5_51","f-function-confirm-footer":"_f-function-confirm-footer_de5a5_65"},_=({title:e,body:b})=>new Promise(a=>{window.document.body.insertAdjacentHTML("afterbegin",`
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
