import{j as n}from"./jsx-runtime-CkxqCPlQ.js";import{F as u}from"./FButton-CFnu8VPD.js";import"./FButtonFile-CHKnFrKb.js";import"./FTextField-DWvp23El.js";import{F as f}from"./FStack-DvJS5si1.js";import"./FGrid-BWTo3lRs.js";import"./FContainer-Du0Di049.js";import"./FPaper-D6Oo0WgV.js";import"./FAlert-CefPhZQR.js";import"./FOpenImgFull-BCfLM3yy.js";import"./FProgress-C0i2V36s.js";import"./FCheckbox-D5toGIZf.js";import"./FRadioButton-DGCmVmG5.js";import"./FPagination-DPUVS4zR.js";import"./FTimelineCard-iMEw_La2.js";import"./FInputFileForm-Dh3UBGxg.js";import"./FFile-Cct2s-rO.js";import"./FSelectItem-C7ZDPLu7.js";import"./FFullDateField-Cszra0xD.js";import"./FSelectSearchDb-rImFaTjC.js";import"./FTextArea-DNeFs9G0.js";import"./FNative-D_ve21w6.js";import"./FTab-DIAeKHIc.js";import"./FDropdownItem-BzWoduQa.js";import"./FSearchBox-r2FvCsLg.js";import"./FCarouselItem-Diq-YX18.js";import"./FSkeleton-DuR3f4nd.js";import"./jszip.min-BzP_Wsuk.js";import{f as r}from"./fConfirm-Bgf3VGVx.js";/* empty css                      */import"./index-DJO9vBfz.js";/* empty css               *//* empty css                   */import"./FLoadIcon-8HypuZKP.js";import"./FCloseIcon-DM6S50X-.js";import"./FArrowIcon-lNeI-if7.js";import"./index-DLC2J04D.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";function d(t){return t?t.value:null}const v=({title:t,body:p})=>new Promise(i=>{window.document.body.insertAdjacentHTML("afterbegin",`
            <div class='f-function-block-prompt' id='f-function-block-prompt'>
                <div class='f-function-prompt'>
                   <div class='f-function-prompt-ico warning'>
                        <svg width="28" height="28" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                            <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                        </svg>
                    </div>
                   <div class='f-function-prompt-inside'>
                        <div class='f-function-prompt-header'>
                            <h4>${t}</h4>
                        </div>
                        <div class='f-function-prompt-body'>
                            <span>${p}</span>
                            <input 
                                type="text" 
                                id="f-function-prompt-input"
                                class="form-control f-function-prompt-input"
                            />
                        </div>
                        <div class='f-function-prompt-footer'>
                            <button
                                id="f-function-prompt-ok"
                                class='btn btn-success btn-sm'
                                onclick='document.querySelector("#f-function-block-prompt").remove()'
                            >
                                Ок
                            </button>
                            <button
                                id="f-function-prompt-cancellation"
                                class='btn btn-danger btn-sm'
                                onclick='document.querySelector("#f-function-block-prompt").remove()'
                            >
                                Отменить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `);const s=document.querySelector("#f-function-prompt-ok"),m=document.querySelector("#f-function-prompt-cancellation"),l=document.querySelector("#f-function-prompt-input");s.addEventListener("click",function(){i(d(l))}),m.addEventListener("click",function(){i(null)})}),tt={title:"Function Elements/fPrompt",tags:["autodocs"]},o=()=>n.jsx(f,{spacing:2,direction:"row",children:n.jsx(u,{color:"primary",onClick:async()=>{const t=await v({title:"Вам нравится работа в РосНИИВХ?",body:'Думаю вы понимаете почему нельзя отвечать "НЕТ"'});t!==null&&t.toLowerCase()==="нет"?r({body:"Ты сделал не верный выбор и за тобой уже выехали",variant:"error"}):t!==null&&t.toLowerCase()==="да"?r({body:"Ситх, ты выбрал правильную, темную, сторону",variant:"success"}):r({body:`Не бойся, мы же оба знаем правильный ответ
Попробуй снова!`,variant:"info"})},children:"Ответить на главный вопрос жизни"})});o.__docgenInfo={description:"",methods:[],displayName:"Default"};var e,a,c;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`() => <FStack spacing={2} direction={'row'}>\r
        <FButton color={'primary'} onClick={async () => {
    const a = await fPrompt({
      title: 'Вам нравится работа в РосНИИВХ?',
      body: 'Думаю вы понимаете почему нельзя отвечать "НЕТ"'
    });
    if (a !== null && a.toLowerCase() === 'нет') {
      fAlert({
        body: 'Ты сделал не верный выбор и за тобой уже выехали',
        variant: 'error'
      });
    } else if (a !== null && a.toLowerCase() === 'да') {
      fAlert({
        body: 'Ситх, ты выбрал правильную, темную, сторону',
        variant: 'success'
      });
    } else {
      fAlert({
        body: 'Не бойся, мы же оба знаем правильный ответ\\nПопробуй снова!',
        variant: 'info'
      });
    }
  }}>\r
            Ответить на главный вопрос жизни\r
        </FButton>\r
    </FStack>`,...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const ot=["Default"];export{o as Default,ot as __namedExportsOrder,tt as default};
