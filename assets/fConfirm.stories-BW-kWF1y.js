import{j as g}from"./jsx-runtime-D_zvdyIk.js";import{F as h}from"./FButton-WshjMl_j.js";import"./FButtonFile-ndsUyZDv.js";import"./FTextField-G4sFh9Uf.js";import"./FStack-Bjsadt8I.js";import"./FGridRow-DPVPfH0m.js";import"./FContainer-D9oNryDS.js";import"./FPaper-C96cUb7h.js";import"./FTableActions-QvNqcSYP.js";import"./index-B3j06Xw8.js";import"./index-D_ywfbVi.js";import"./FDialogFooter-BIStOcG8.js";import"./FProgress-B1PkuN98.js";import"./FPreloader-Cq7UpuSU.js";import"./FCheckbox-C2Fn5p4I.js";import"./FRadioButton-CCi8vwMO.js";import"./FPagination-DkwE8RRm.js";import"./FTimelineCard-G_wv4YPr.js";import"./FOpenImgFull-CxKvm-Cn.js";import"./FAccordion-B22xNC65.js";import"./FInputFileForm-CI_bUF6k.js";import"./FFile-ALKQqT-R.js";import"./FSelectItem-BAXWPI2S.js";import"./FFullDateField-bov5uJB9.js";import"./FSelectSearchDb-5nHlLFKL.js";import"./FTextArea-ChmymgEf.js";import"./FCloseIcon-DdRZhJBn.js";/* empty css                */import"./FTab-4EmqzD2P.js";import"./FDropdownItem-3TiL9ogE.js";import"./FSearchBox-fdjYAM33.js";import"./FCarouselItem-DbNUFCsz.js";import"./FSkeleton-iaIByH-O.js";import"./FNavigateBarItem-BtOG1U8l.js";import"./FMenuLinks-Cbdq1Y8F.js";import"./FTooltip-BJ8WMW_6.js";import"./FSearchableSelect-DPsz2xcQ.js";import"./FSegmentedControl-DhW7n95-.js";import{f as $}from"./fGenerateUniqueId-BDtj4-Pu.js";import{f as j}from"./fNotification-vnFpW_Yq.js";import"./FLoadIcon-B2O1XWAm.js";import"./index-DW0t0JKo.js";import"./FDialog-snE0jNMB.js";import"./FArrowIcon-e6BJPakw.js";import"./FTrashIcon-DpmD7QBY.js";const x="_visible_7mdjn_19",C="_hidden_7mdjn_22",E="_warning_7mdjn_78",t={"f-function-block-confirm":"_f-function-block-confirm_7mdjn_1",visible:x,hidden:C,"f-function-confirm":"_f-function-confirm_7mdjn_27","f-function-confirm-top":"_f-function-confirm-top_7mdjn_56","f-function-confirm-ico":"_f-function-confirm-ico_7mdjn_62",warning:E,"f-function-confirm-header":"_f-function-confirm-header_7mdjn_89","f-function-confirm-body":"_f-function-confirm-body_7mdjn_107","f-function-confirm-footer":"_f-function-confirm-footer_7mdjn_123","btn-cancel":"_btn-cancel_7mdjn_130","btn-ok":"_btn-ok_7mdjn_152","close-btn":"_close-btn_7mdjn_189"},y=({title:s,body:k})=>new Promise(d=>{const o="f-function-block-confirm-"+$();window.document.body.insertAdjacentHTML("afterbegin",`
                <div class='${t["f-function-block-confirm"]}' id='${o}'>
                    <div class='${t["f-function-confirm"]}'>
                        <div class='${t["f-function-confirm-top"]}'>
                            <div class='${t["f-function-confirm-ico"]} ${t.warning}'>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                                    <line x1="12" y1="9" x2="12" y2="13"/>
                                    <line x1="12" y1="17" x2="12.01" y2="17"/>
                                </svg>
                            </div>
                            <div class='${t["f-function-confirm-header"]}'>
                                <h4>${s||""}</h4>
                            </div>
                            <button type="button" aria-label="Закрыть" class="${t["close-btn"]}" id="${o}-close-x">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"/>
                                    <line x1="6" y1="6" x2="18" y2="18"/>
                                </svg>
                            </button>
                        </div>
                        <div class='${t["f-function-confirm-body"]}'>
                            <span>${k}</span>
                        </div>
                        <div class='${t["f-function-confirm-footer"]}'>
                            <button
                                type="button"
                                id="${o}-cancel"
                                class='${t["btn-cancel"]}'
                            >
                                Отменить
                            </button>
                            <button
                                type="button"
                                id="${o}-ok"
                                class='${t["btn-ok"]}'
                            >
                                Ок
                            </button>
                        </div>
                    </div>
                </div>
            `);const n=document.getElementById(o),c=document.getElementById(`${o}-ok`),m=document.getElementById(`${o}-cancel`),f=document.getElementById(`${o}-close-x`);if(!n){d(!1);return}typeof requestAnimationFrame=="function"?requestAnimationFrame(()=>{requestAnimationFrame(()=>{n.classList.add(t.visible)})}):setTimeout(()=>{n.classList.add(t.visible)},20);let a=!1;const e=i=>{if(a)return;a=!0,window.removeEventListener("keydown",l),n.classList.remove(t.visible),n.classList.add(t.hidden);let u=!1;const p=()=>{u||(u=!0,n.remove(),d(i))};n.addEventListener("transitionend",w=>{w.target===n&&p()}),setTimeout(p,280)},l=i=>{i.key==="Enter"?(i.preventDefault(),e(!0)):i.key==="Escape"&&(i.preventDefault(),e(!1))};n.addEventListener("click",i=>{i.target===n&&e(!1)}),c==null||c.addEventListener("click",()=>e(!0)),m==null||m.addEventListener("click",()=>e(!1)),f==null||f.addEventListener("click",()=>e(!1)),window.addEventListener("keydown",l)}),kt={title:"Function Elements/fConfirm",component:y},r=()=>g.jsx(h,{onClick:async()=>{const s=await y({title:"Подтверждение действия",body:"Вы действительно хотите продолжить выполнение операции?"});j({title:"Результат",body:s?"Действие подтверждено":"Действие отменено",variant:s?"success":"warning",timeSecClose:3,buttonClose:!0})},children:"Показать Confirm"});r.__docgenInfo={description:"",methods:[],displayName:"Default"};var _,b,v;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`() => <FButton onClick={async () => {
  const result = await fConfirm({
    title: 'Подтверждение действия',
    body: 'Вы действительно хотите продолжить выполнение операции?'
  });
  fNotification({
    title: 'Результат',
    body: result ? 'Действие подтверждено' : 'Действие отменено',
    variant: result ? 'success' : 'warning',
    timeSecClose: 3,
    buttonClose: true
  });
}}>\r
    Показать Confirm\r
  </FButton>`,...(v=(b=r.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const wt=["Default"];export{r as Default,wt as __namedExportsOrder,kt as default};
