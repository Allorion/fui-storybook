import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{s as n,F as d}from"./FButton-C2kYOskP.js";import"./FButtonFile-DEql8rEI.js";import"./FTextField-Bfcy-agq.js";import"./FStack-Bjsadt8I.js";import"./FGridRow-DPVPfH0m.js";import"./FContainer-D9oNryDS.js";import"./FPaper-Dn0vIXiP.js";import"./FTableFooter-WMoZ_F9z.js";import"./index-B3j06Xw8.js";import"./index-D_ywfbVi.js";import"./FDialogFooter-CkU-JZz2.js";import"./FProgress-CuUSEf8T.js";import"./FPreloader-Cq7UpuSU.js";import"./FCheckbox-CS1dTR8V.js";import"./FRadioButton-BLRA_gon.js";import"./FPagination-BKiZX-c7.js";import"./FTimelineCard-G_wv4YPr.js";import"./FOpenImgFull-yZcklQ0k.js";import"./FAccordion-DmXO5bBB.js";import"./FInputFileForm-CgROixNk.js";import"./FFile-BDXU6Ifc.js";import"./FSelectItem-C-_xf1fC.js";import"./FFullDateField-BAvOAkZw.js";import"./FSelectSearchDb-9J14UTwR.js";import"./FTextArea-D2Oj51U_.js";import"./FCloseIcon-DdRZhJBn.js";/* empty css                */import"./FTab-DB5xXUf7.js";import"./FDropdownItem-CaEuoX1f.js";import"./FSearchBox-BVWGhoqR.js";import"./FCarouselItem-DbNUFCsz.js";import"./FSkeleton-Bmt12B6C.js";import"./FNavigateBarItem-BtOG1U8l.js";import"./FMenuLinks-Cbdq1Y8F.js";import"./FTooltip-BJ8WMW_6.js";import"./FSearchableSelect-CuS-Phed.js";import"./FSegmentedControl-DhW7n95-.js";import"./FLoadIcon-CJgWVWfz.js";import"./index-DW0t0JKo.js";import"./FDialog-Ccy_5XvS.js";import"./FArrowIcon-e6BJPakw.js";import"./FTrashIcon-DpmD7QBY.js";const _="_warning_1o5ku_31",t={"f-function-block-prompt":"_f-function-block-prompt_1o5ku_1","f-function-prompt":"_f-function-prompt_1o5ku_16","f-function-prompt-ico":"_f-function-prompt-ico_1o5ku_24",warning:_,"f-function-prompt-inside":"_f-function-prompt-inside_1o5ku_36","f-function-prompt-header":"_f-function-prompt-header_1o5ku_43","f-function-prompt-body":"_f-function-prompt-body_1o5ku_51","f-function-prompt-footer":"_f-function-prompt-footer_1o5ku_66"};function b(o){return o?o.value:null}const e=({title:o,body:u})=>new Promise(r=>{window.document.body.insertAdjacentHTML("afterbegin",`
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
        `);const f=document.querySelector("#f-function-prompt-ok"),s=document.querySelector("#f-function-prompt-cancellation"),a=document.querySelector("#f-function-prompt-input");f.addEventListener("click",function(){r(b(a))}),s.addEventListener("click",function(){r(null)})}),ct={title:"Function Elements/fPrompt",component:e},i=()=>l.jsx(d,{onClick:async()=>{const o=await e({title:"Введите имя",body:"Пожалуйста, введите ваше имя:"});alert(o?`Введено: ${o}`:"Отменено")},children:"Показать Prompt"});i.__docgenInfo={description:"",methods:[],displayName:"Default"};var p,c,m;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`() => <FButton onClick={async () => {
  const result = await fPrompt({
    title: 'Введите имя',
    body: 'Пожалуйста, введите ваше имя:'
  });
  alert(result ? \`Введено: \${result}\` : 'Отменено');
}}>\r
    Показать Prompt\r
  </FButton>`,...(m=(c=i.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const mt=["Default"];export{i as Default,mt as __namedExportsOrder,ct as default};
