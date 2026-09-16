import{j as u}from"./jsx-runtime-D_zvdyIk.js";import{F as m}from"./FButton-WshjMl_j.js";import"./FButtonFile-ndsUyZDv.js";import"./FTextField-G4sFh9Uf.js";import"./FStack-Bjsadt8I.js";import"./FGridRow-DPVPfH0m.js";import"./FContainer-D9oNryDS.js";import"./FPaper-C96cUb7h.js";import"./FTableActions-BFXkna1l.js";import"./index-B3j06Xw8.js";import"./index-D_ywfbVi.js";import"./FDialogFooter-BIStOcG8.js";import"./FProgress-B1PkuN98.js";import"./FPreloader-Cq7UpuSU.js";import"./FCheckbox-C2Fn5p4I.js";import"./FRadioButton-CCi8vwMO.js";import"./FPagination-DkwE8RRm.js";import"./FTimelineCard-G_wv4YPr.js";import"./FOpenImgFull-CxKvm-Cn.js";import"./FAccordion-B22xNC65.js";import"./FInputFileForm-CI_bUF6k.js";import"./FFile-ALKQqT-R.js";import"./FSelectItem-BAXWPI2S.js";import"./FFullDateField-bov5uJB9.js";import"./FSelectSearchDb-5nHlLFKL.js";import"./FTextArea-ChmymgEf.js";import"./FCloseIcon-DdRZhJBn.js";/* empty css                */import"./FTab-4EmqzD2P.js";import"./FDropdownItem-3TiL9ogE.js";import"./FSearchBox-fdjYAM33.js";import"./FCarouselItem-DbNUFCsz.js";import"./FSkeleton-iaIByH-O.js";import"./FNavigateBarItem-BtOG1U8l.js";import"./FMenuLinks-Cbdq1Y8F.js";import"./FTooltip-BJ8WMW_6.js";import"./FSearchableSelect-DPsz2xcQ.js";import"./FSegmentedControl-DhW7n95-.js";import"./FStatusBadge-CaCHJHW5.js";import{f as U}from"./fGenerateUniqueId-BDtj4-Pu.js";import"./FLoadIcon-B2O1XWAm.js";import"./index-DW0t0JKo.js";import"./FDialog-snE0jNMB.js";import"./FArrowIcon-e6BJPakw.js";import"./FTrashIcon-DpmD7QBY.js";const G="_visible_dicu2_19",K="_hidden_dicu2_22",O="_info_dicu2_75",P="_success_dicu2_83",R="_warning_dicu2_87",Z="_error_dicu2_79",t={"f-function-block-alert":"_f-function-block-alert_dicu2_1",visible:G,hidden:K,"f-function-alert":"_f-function-alert_dicu2_27","f-function-alert-top":"_f-function-alert-top_dicu2_55","f-function-alert-ico":"_f-function-alert-ico_dicu2_61","info-alert":"_info-alert_dicu2_75","error-alert":"_error-alert_dicu2_79","success-alert":"_success-alert_dicu2_83","warning-alert":"_warning-alert_dicu2_87","f-function-alert-inside":"_f-function-alert-inside_dicu2_91","f-function-alert-header":"_f-function-alert-header_dicu2_98","f-function-alert-body":"_f-function-alert-body_dicu2_116","f-function-alert-footer":"_f-function-alert-footer_dicu2_132","btn-action":"_btn-action_dicu2_139",info:O,success:P,warning:R,error:Z,"close-btn":"_close-btn_dicu2_214"},n=({title:W,body:q,variant:p="info"})=>new Promise(y=>{let i="";switch(p){case"info":i=`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="16" x2="12" y2="12"/>
                    <line x1="12" y1="8" x2="12.01" y2="8"/>
                </svg>`;break;case"success":i=`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="m9 12 2 2 4-4"/>
                </svg>`;break;case"error":i=`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="15" y1="9" x2="9" y2="15"/>
                    <line x1="9" y1="9" x2="15" y2="15"/>
                </svg>`;break;case"warning":i=`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
                    <line x1="12" y1="9" x2="12" y2="13"/>
                    <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>`;break}const D=q.split(`
`).map(r=>`<span>${r}</span>`),o="f-function-block-alert-"+U(),H=`
            <div class='${t["f-function-block-alert"]}' id='${o}'>
                <div class='${t["f-function-alert"]}'>
                    <div class='${t["f-function-alert-top"]}'>
                        <div class='${t["f-function-alert-ico"]} ${t[`${p}-alert`]}'>
                            ${i}
                        </div>
                        <div class='${t["f-function-alert-header"]}'>
                            <h4>${W||""}</h4>
                        </div>
                        <button type="button" aria-label="Закрыть" class="${t["close-btn"]}" id="${o}-close-x">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"/>
                                <line x1="6" y1="6" x2="18" y2="18"/>
                            </svg>
                        </button>
                    </div>
                    <div class='${t["f-function-alert-body"]}'>
                        ${D.join("")}
                    </div>
                    <div class='${t["f-function-alert-footer"]}'>
                        <button
                            type="button"
                            class='${t["btn-action"]} ${t[p]}'
                            id='${o}-ok'
                        >
                            Закрыть
                        </button>
                    </div>
                </div>
            </div>
        `;window.document.body.insertAdjacentHTML("afterbegin",H);const e=document.getElementById(o),_=document.getElementById(`${o}-ok`),v=document.getElementById(`${o}-close-x`);if(!e){y();return}typeof requestAnimationFrame=="function"?requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.classList.add(t.visible)})}):setTimeout(()=>{e.classList.add(t.visible)},20);let k=!1;const f=()=>{if(k)return;k=!0,window.removeEventListener("keydown",g),e.classList.remove(t.visible),e.classList.add(t.hidden);let r=!1;const b=()=>{r||(r=!0,e.remove(),y())};e.addEventListener("transitionend",M=>{M.target===e&&b()}),setTimeout(b,280)},g=r=>{(r.key==="Escape"||r.key==="Enter")&&(r.preventDefault(),f())};e.addEventListener("click",r=>{r.target===e&&f()}),_==null||_.addEventListener("click",f),v==null||v.addEventListener("click",f),window.addEventListener("keydown",g)}),Ht={title:"Function Elements/fAlert",component:n},s=()=>u.jsx(m,{onClick:()=>n({title:"Информация",body:"Это информационное сообщение.",variant:"info"}),children:"Показать Info Alert"}),c=()=>u.jsx(m,{onClick:()=>n({title:"Успех",body:"Операция прошла успешно!",variant:"success"}),children:"Показать Success Alert"}),a=()=>u.jsx(m,{onClick:()=>n({title:"Ошибка",body:"Произошла ошибка при выполнении операции.",variant:"error"}),children:"Показать Error Alert"}),l=()=>u.jsx(m,{onClick:()=>n({title:"Внимание",body:"Проверьте введённые данные.",variant:"warning"}),children:"Показать Warning Alert"}),d=()=>u.jsx(m,{onClick:()=>n({body:"Сообщение без заголовка.",variant:"info"}),children:"Показать Alert без заголовка"});s.__docgenInfo={description:"",methods:[],displayName:"Info"};c.__docgenInfo={description:"",methods:[],displayName:"Success"};a.__docgenInfo={description:"",methods:[],displayName:"Error"};l.__docgenInfo={description:"",methods:[],displayName:"Warning"};d.__docgenInfo={description:"",methods:[],displayName:"NoTitle"};var h,x,w;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`() => <FButton onClick={() => fAlert({
  title: 'Информация',
  body: 'Это информационное сообщение.',
  variant: 'info'
})}>\r
    Показать Info Alert\r
  </FButton>`,...(w=(x=s.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var A,$,E;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`() => <FButton onClick={() => fAlert({
  title: 'Успех',
  body: 'Операция прошла успешно!',
  variant: 'success'
})}>\r
    Показать Success Alert\r
  </FButton>`,...(E=($=c.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var B,C,F;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`() => <FButton onClick={() => fAlert({
  title: 'Ошибка',
  body: 'Произошла ошибка при выполнении операции.',
  variant: 'error'
})}>\r
    Показать Error Alert\r
  </FButton>`,...(F=(C=a.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var I,j,L;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`() => <FButton onClick={() => fAlert({
  title: 'Внимание',
  body: 'Проверьте введённые данные.',
  variant: 'warning'
})}>\r
    Показать Warning Alert\r
  </FButton>`,...(L=(j=l.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var S,N,T;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`() => <FButton onClick={() => fAlert({
  body: 'Сообщение без заголовка.',
  variant: 'info'
})}>\r
    Показать Alert без заголовка\r
  </FButton>`,...(T=(N=d.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};const Mt=["Info","Success","Error","Warning","NoTitle"];export{a as Error,s as Info,d as NoTitle,c as Success,l as Warning,Mt as __namedExportsOrder,Ht as default};
