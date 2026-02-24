import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{s as n,F as d}from"./FButton-DQOEJPUH.js";import"./FButtonFile-Cc8ubo-m.js";import"./FTextField-DSrbz1g8.js";import"./FStack-Bjsadt8I.js";import"./FGridRow-DPVPfH0m.js";import"./FContainer-D9oNryDS.js";import"./FPaper-ByA2FQvy.js";import"./FTableFooter-CQM2ANzx.js";import"./index-DEgj3Fem.js";import"./index-BknSE3li.js";import"./FDialogFooter-EZrNysQM.js";import"./FProgress-CuUSEf8T.js";import"./FPreloader-C0DO9d3w.js";import"./FCheckbox-CvjAvqQ6.js";import"./FRadioButton-CWco8Ir1.js";import"./FPagination-Cudve55R.js";import"./FTimelineCard-G_wv4YPr.js";import"./FOpenImgFull-BzaYDndu.js";import"./FAccordion-CUm2A8fo.js";import"./FInputFileForm-KMotnIpw.js";import"./FFile-BHJQGV29.js";import"./FSelectItem-BnNI1hqM.js";import"./FFullDateField-_mtt4yT5.js";import"./FSelectSearchDb-CtdF7gtg.js";import"./FTextArea-9qVfGzxf.js";import"./FCloseIcon-Dr7AIYCl.js";/* empty css                */import"./FTab-DHwok_rz.js";import"./FDropdownItem-D17eYKAm.js";import"./FSearchBox-Czmsapd1.js";import"./FCarouselItem-DRfQet_0.js";import"./FSkeleton-qmKtpPTy.js";import"./FNavigateBarItem-CQ1yOoQk.js";import"./FMenuLinks-CHiLRQZa.js";import"./FTooltip-CCrWwCPn.js";import"./FSearchableSelect-BZIN-NqS.js";import"./FLoadIcon-1-Td29NS.js";import"./index-DM3MU96Y.js";import"./FDialog-DPCiHy6F.js";import"./FArrowIcon-C21crw0H.js";import"./FTrashIcon-Da5Dd79F.js";const _="_warning_1o5ku_31",t={"f-function-block-prompt":"_f-function-block-prompt_1o5ku_1","f-function-prompt":"_f-function-prompt_1o5ku_16","f-function-prompt-ico":"_f-function-prompt-ico_1o5ku_24",warning:_,"f-function-prompt-inside":"_f-function-prompt-inside_1o5ku_36","f-function-prompt-header":"_f-function-prompt-header_1o5ku_43","f-function-prompt-body":"_f-function-prompt-body_1o5ku_51","f-function-prompt-footer":"_f-function-prompt-footer_1o5ku_66"};function b(o){return o?o.value:null}const e=({title:o,body:u})=>new Promise(r=>{window.document.body.insertAdjacentHTML("afterbegin",`
            <div class='${t["f-function-block-prompt"]}' id='f-function-block-prompt'>
                <div class='${t["f-function-prompt"]}'>
                   <div class='${t["f-function-prompt-ico"]} ${t.warning}'>
                        <svg width="28" height="28" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                            <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                        </svg>
                    </div>
                   <div class='${t["f-function-prompt-inside"]}'>
                        <div class='${t["f-function-prompt-header"]}'>
                            <h4>${o||""}</h4>
                        </div>
                        <div class='${t["f-function-prompt-body"]}'>
                            <span>${u||""}</span>
                            <input 
                                type="text" 
                                id="f-function-prompt-input"
                                class="form-control ${t["f-function-prompt-input"]}"
                            />
                        </div>
                        <div class='${t["f-function-prompt-footer"]}'>
                            <button
                                id="f-function-prompt-ok"
                                class='${n.btn} ${n["btn-sm"]} ${n["btn-success"]}'
                                onclick='document.querySelector("#f-function-block-prompt").remove()'
                            >
                                Ок
                            </button>
                            <button
                                id="f-function-prompt-cancellation"
                                class='${n.btn} ${n["btn-sm"]} ${n["btn-danger"]}'
                                onclick='document.querySelector("#f-function-block-prompt").remove()'
                            >
                                Отменить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `);const f=document.querySelector("#f-function-prompt-ok"),s=document.querySelector("#f-function-prompt-cancellation"),a=document.querySelector("#f-function-prompt-input");f.addEventListener("click",function(){r(b(a))}),s.addEventListener("click",function(){r(null)})}),pt={title:"Function Elements/fPrompt",component:e},i=()=>l.jsx(d,{onClick:async()=>{const o=await e({title:"Введите имя",body:"Пожалуйста, введите ваше имя:"});alert(o?`Введено: ${o}`:"Отменено")},children:"Показать Prompt"});i.__docgenInfo={description:"",methods:[],displayName:"Default"};var p,c,m;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`() => <FButton onClick={async () => {
  const result = await fPrompt({
    title: 'Введите имя',
    body: 'Пожалуйста, введите ваше имя:'
  });
  alert(result ? \`Введено: \${result}\` : 'Отменено');
}}>\r
    Показать Prompt\r
  </FButton>`,...(m=(c=i.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const ct=["Default"];export{i as Default,ct as __namedExportsOrder,pt as default};
