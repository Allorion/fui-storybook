import{j as w}from"./jsx-runtime-D_zvdyIk.js";import{F as h}from"./FButton-Bm7SLZDh.js";import"./FButtonFile-2hnyxxUz.js";import"./FTextField-G4sFh9Uf.js";import"./FStack-Bjsadt8I.js";import"./FGridRow-DPVPfH0m.js";import"./FContainer-D9oNryDS.js";import"./FPaper-Dw44gAGj.js";import"./FTableFooter-V7VQ4Rth.js";import"./index-B3j06Xw8.js";import"./index-D_ywfbVi.js";import"./FDialogFooter-DEKgFpT2.js";import"./FProgress-B1PkuN98.js";import"./FPreloader-Cq7UpuSU.js";import"./FCheckbox-vG_g993e.js";import"./FRadioButton-CCi8vwMO.js";import"./FPagination-DkwE8RRm.js";import"./FTimelineCard-G_wv4YPr.js";import"./FOpenImgFull-CjVGNnQc.js";import"./FAccordion-DQ536p-c.js";import"./FInputFileForm-CI_bUF6k.js";import"./FFile-ALKQqT-R.js";import"./FSelectItem-BAXWPI2S.js";import"./FFullDateField-bov5uJB9.js";import"./FSelectSearchDb-5nHlLFKL.js";import"./FTextArea-ChmymgEf.js";import"./FCloseIcon-DdRZhJBn.js";/* empty css                */import"./FTab-CVUcQ5FF.js";import"./FDropdownItem-BJkfltKt.js";import"./FSearchBox-BhywZClE.js";import"./FCarouselItem-DbNUFCsz.js";import"./FSkeleton-iaIByH-O.js";import"./FNavigateBarItem-BtOG1U8l.js";import"./FMenuLinks-Cbdq1Y8F.js";import"./FTooltip-BJ8WMW_6.js";import"./FSearchableSelect-DPsz2xcQ.js";import"./FSegmentedControl-DhW7n95-.js";import{f as E}from"./fGenerateUniqueId-BDtj4-Pu.js";import{f as L}from"./fNotification-CPg0E4RY.js";import"./FLoadIcon-B2O1XWAm.js";import"./index-DW0t0JKo.js";import"./FDialog-Cl6TNCBH.js";import"./FArrowIcon-e6BJPakw.js";import"./FTrashIcon-DpmD7QBY.js";const C="_visible_1nxa7_19",F="_hidden_1nxa7_22",I="_warning_1nxa7_73",t={"f-function-block-prompt":"_f-function-block-prompt_1nxa7_1",visible:C,hidden:F,"f-function-prompt":"_f-function-prompt_1nxa7_27","f-function-prompt-top":"_f-function-prompt-top_1nxa7_51","f-function-prompt-ico":"_f-function-prompt-ico_1nxa7_57",warning:I,"f-function-prompt-header":"_f-function-prompt-header_1nxa7_84","f-function-prompt-body":"_f-function-prompt-body_1nxa7_102","f-function-prompt-input":"_f-function-prompt-input_1nxa7_121","f-function-prompt-footer":"_f-function-prompt-footer_1nxa7_142","btn-cancel":"_btn-cancel_1nxa7_149","btn-ok":"_btn-ok_1nxa7_171","close-btn":"_close-btn_1nxa7_195"};function v(e){return e?e.value:null}const $=({title:e,body:m})=>new Promise(u=>{const o="f-function-block-prompt-"+E();window.document.body.insertAdjacentHTML("afterbegin",`
            <div class='${t["f-function-block-prompt"]}' id='${o}'>
                <div class='${t["f-function-prompt"]}'>
                    <div class='${t["f-function-prompt-top"]}'>
                        <div class='${t["f-function-prompt-ico"]} ${t.warning}'>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                            </svg>
                        </div>
                        <div class='${t["f-function-prompt-header"]}'>
                            <h4>${e||""}</h4>
                        </div>
                        <button type="button" aria-label="Закрыть" class="${t["close-btn"]}" id="${o}-close-x">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"/>
                                <line x1="6" y1="6" x2="18" y2="18"/>
                            </svg>
                        </button>
                    </div>
                    <div class='${t["f-function-prompt-body"]}'>
                        ${m?`<span>${m}</span>`:""}
                        <input 
                            type="text" 
                            id="${o}-input"
                            class="${t["f-function-prompt-input"]}"
                            placeholder="Введите значение..."
                            autocomplete="off"
                        />
                    </div>
                    <div class='${t["f-function-prompt-footer"]}'>
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
        `);const n=document.getElementById(o),c=document.getElementById(`${o}-ok`),l=document.getElementById(`${o}-cancel`),a=document.getElementById(`${o}-close-x`),i=document.getElementById(`${o}-input`);if(!n){u(null);return}typeof requestAnimationFrame=="function"?requestAnimationFrame(()=>{requestAnimationFrame(()=>{n.classList.add(t.visible),i==null||i.focus()})}):setTimeout(()=>{n.classList.add(t.visible),i==null||i.focus()},20);let d=!1;const s=r=>{if(d)return;d=!0,window.removeEventListener("keydown",f),n.classList.remove(t.visible),n.classList.add(t.hidden);let _=!1;const b=()=>{_||(_=!0,n.remove(),u(r))};n.addEventListener("transitionend",g=>{g.target===n&&b()}),setTimeout(b,280)},f=r=>{r.key==="Enter"?(r.preventDefault(),s(v(i))):r.key==="Escape"&&(r.preventDefault(),s(null))};n.addEventListener("click",r=>{r.target===n&&s(null)}),c==null||c.addEventListener("click",()=>s(v(i))),l==null||l.addEventListener("click",()=>s(null)),a==null||a.addEventListener("click",()=>s(null)),window.addEventListener("keydown",f)}),$t={title:"Function Elements/fPrompt",component:$},p=()=>w.jsx(h,{onClick:async()=>{const e=await $({title:"Введите ваше имя",body:"Пожалуйста, укажите имя пользователя для профиля:"});L({title:"Результат ввода",body:e!==null?`Вы ввели: ${e}`:"Ввод отменён",variant:e!==null?"info":"warning",timeSecClose:3,buttonClose:!0})},children:"Показать Prompt"});p.__docgenInfo={description:"",methods:[],displayName:"Default"};var y,k,x;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`() => <FButton onClick={async () => {
  const result = await fPrompt({
    title: 'Введите ваше имя',
    body: 'Пожалуйста, укажите имя пользователя для профиля:'
  });
  fNotification({
    title: 'Результат ввода',
    body: result !== null ? \`Вы ввели: \${result}\` : 'Ввод отменён',
    variant: result !== null ? 'info' : 'warning',
    timeSecClose: 3,
    buttonClose: true
  });
}}>\r
    Показать Prompt\r
  </FButton>`,...(x=(k=p.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const gt=["Default"];export{p as Default,gt as __namedExportsOrder,$t as default};
