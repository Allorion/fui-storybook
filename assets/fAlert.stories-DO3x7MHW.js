import{j as u}from"./jsx-runtime-D_zvdyIk.js";import{F as f}from"./FButton-Bm7SLZDh.js";import"./FButtonFile-2hnyxxUz.js";import"./FTextField-G4sFh9Uf.js";import"./FStack-Bjsadt8I.js";import"./FGridRow-DPVPfH0m.js";import"./FContainer-D9oNryDS.js";import"./FPaper-Dw44gAGj.js";import"./FTableFooter-V7VQ4Rth.js";import"./index-B3j06Xw8.js";import"./index-D_ywfbVi.js";import"./FDialogFooter-DEKgFpT2.js";import"./FProgress-B1PkuN98.js";import"./FPreloader-Cq7UpuSU.js";import"./FCheckbox-vG_g993e.js";import"./FRadioButton-CCi8vwMO.js";import"./FPagination-DkwE8RRm.js";import"./FTimelineCard-G_wv4YPr.js";import"./FOpenImgFull-CjVGNnQc.js";import"./FAccordion-DQ536p-c.js";import"./FInputFileForm-CI_bUF6k.js";import"./FFile-ALKQqT-R.js";import"./FSelectItem-BAXWPI2S.js";import"./FFullDateField-bov5uJB9.js";import"./FSelectSearchDb-5nHlLFKL.js";import"./FTextArea-ChmymgEf.js";import"./FCloseIcon-DdRZhJBn.js";/* empty css                */import"./FTab-CVUcQ5FF.js";import"./FDropdownItem-BJkfltKt.js";import"./FSearchBox-BhywZClE.js";import"./FCarouselItem-DbNUFCsz.js";import"./FSkeleton-iaIByH-O.js";import"./FNavigateBarItem-BtOG1U8l.js";import"./FMenuLinks-Cbdq1Y8F.js";import"./FTooltip-BJ8WMW_6.js";import"./FSearchableSelect-DPsz2xcQ.js";import"./FSegmentedControl-DhW7n95-.js";import{f as U}from"./fGenerateUniqueId-BDtj4-Pu.js";import"./FLoadIcon-B2O1XWAm.js";import"./index-DW0t0JKo.js";import"./FDialog-Cl6TNCBH.js";import"./FArrowIcon-e6BJPakw.js";import"./FTrashIcon-DpmD7QBY.js";const G="_visible_1ryqy_19",K="_hidden_1ryqy_22",O="_info_1ryqy_71",P="_success_1ryqy_79",R="_warning_1ryqy_83",Z="_error_1ryqy_75",t={"f-function-block-alert":"_f-function-block-alert_1ryqy_1",visible:G,hidden:K,"f-function-alert":"_f-function-alert_1ryqy_27","f-function-alert-top":"_f-function-alert-top_1ryqy_51","f-function-alert-ico":"_f-function-alert-ico_1ryqy_57","info-alert":"_info-alert_1ryqy_71","error-alert":"_error-alert_1ryqy_75","success-alert":"_success-alert_1ryqy_79","warning-alert":"_warning-alert_1ryqy_83","f-function-alert-inside":"_f-function-alert-inside_1ryqy_87","f-function-alert-header":"_f-function-alert-header_1ryqy_94","f-function-alert-body":"_f-function-alert-body_1ryqy_112","f-function-alert-footer":"_f-function-alert-footer_1ryqy_128","btn-action":"_btn-action_1ryqy_135",info:O,success:P,warning:R,error:Z,"close-btn":"_close-btn_1ryqy_197"},n=({title:T,body:W,variant:p="info"})=>new Promise(v=>{let i="";switch(p){case"info":i=`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
                </svg>`;break}const D=W.split(`
`).map(e=>`<span>${e}</span>`),o="f-function-block-alert-"+U(),H=`
            <div class='${t["f-function-block-alert"]}' id='${o}'>
                <div class='${t["f-function-alert"]}'>
                    <div class='${t["f-function-alert-top"]}'>
                        <div class='${t["f-function-alert-ico"]} ${t[`${p}-alert`]}'>
                            ${i}
                        </div>
                        <div class='${t["f-function-alert-header"]}'>
                            <h4>${T||""}</h4>
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
        `;window.document.body.insertAdjacentHTML("afterbegin",H);const r=document.getElementById(o),y=document.getElementById(`${o}-ok`),_=document.getElementById(`${o}-close-x`);if(!r){v();return}typeof requestAnimationFrame=="function"?requestAnimationFrame(()=>{requestAnimationFrame(()=>{r.classList.add(t.visible)})}):setTimeout(()=>{r.classList.add(t.visible)},20);let k=!1;const m=()=>{if(k)return;k=!0,window.removeEventListener("keydown",g),r.classList.remove(t.visible),r.classList.add(t.hidden);let e=!1;const b=()=>{e||(e=!0,r.remove(),v())};r.addEventListener("transitionend",M=>{M.target===r&&b()}),setTimeout(b,280)},g=e=>{(e.key==="Escape"||e.key==="Enter")&&(e.preventDefault(),m())};r.addEventListener("click",e=>{e.target===r&&m()}),y==null||y.addEventListener("click",m),_==null||_.addEventListener("click",m),window.addEventListener("keydown",g)}),Dt={title:"Function Elements/fAlert",component:n},s=()=>u.jsx(f,{onClick:()=>n({title:"Информация",body:"Это информационное сообщение.",variant:"info"}),children:"Показать Info Alert"}),c=()=>u.jsx(f,{onClick:()=>n({title:"Успех",body:"Операция прошла успешно!",variant:"success"}),children:"Показать Success Alert"}),a=()=>u.jsx(f,{onClick:()=>n({title:"Ошибка",body:"Произошла ошибка при выполнении операции.",variant:"error"}),children:"Показать Error Alert"}),l=()=>u.jsx(f,{onClick:()=>n({title:"Внимание",body:"Проверьте введённые данные.",variant:"warning"}),children:"Показать Warning Alert"}),d=()=>u.jsx(f,{onClick:()=>n({body:"Сообщение без заголовка.",variant:"info"}),children:"Показать Alert без заголовка"});s.__docgenInfo={description:"",methods:[],displayName:"Info"};c.__docgenInfo={description:"",methods:[],displayName:"Success"};a.__docgenInfo={description:"",methods:[],displayName:"Error"};l.__docgenInfo={description:"",methods:[],displayName:"Warning"};d.__docgenInfo={description:"",methods:[],displayName:"NoTitle"};var h,x,w;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`() => <FButton onClick={() => fAlert({
  title: 'Информация',
  body: 'Это информационное сообщение.',
  variant: 'info'
})}>\r
    Показать Info Alert\r
  </FButton>`,...(w=(x=s.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var q,A,$;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`() => <FButton onClick={() => fAlert({
  title: 'Успех',
  body: 'Операция прошла успешно!',
  variant: 'success'
})}>\r
    Показать Success Alert\r
  </FButton>`,...($=(A=c.parameters)==null?void 0:A.docs)==null?void 0:$.source}}};var E,B,C;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`() => <FButton onClick={() => fAlert({
  title: 'Ошибка',
  body: 'Произошла ошибка при выполнении операции.',
  variant: 'error'
})}>\r
    Показать Error Alert\r
  </FButton>`,...(C=(B=a.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var F,I,j;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`() => <FButton onClick={() => fAlert({
  title: 'Внимание',
  body: 'Проверьте введённые данные.',
  variant: 'warning'
})}>\r
    Показать Warning Alert\r
  </FButton>`,...(j=(I=l.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var L,S,N;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`() => <FButton onClick={() => fAlert({
  body: 'Сообщение без заголовка.',
  variant: 'info'
})}>\r
    Показать Alert без заголовка\r
  </FButton>`,...(N=(S=d.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};const Ht=["Info","Success","Error","Warning","NoTitle"];export{a as Error,s as Info,d as NoTitle,c as Success,l as Warning,Ht as __namedExportsOrder,Dt as default};
