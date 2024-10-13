import{j as n}from"./jsx-runtime-DEdD30eg.js";import{F as u}from"./FButton-BMyxDZM2.js";import"./FButtonFile-A8ZoCR_A.js";import"./FTextField-c_bEAKdc.js";import{F as f}from"./FStack-DUahO965.js";import"./FGrid-Cf0t3TO0.js";import"./FContainer-CXdPSwYt.js";import"./FPaper-iPHHMhvA.js";import"./FAlert-DS38ZrBT.js";import"./index-RYns6xqu.js";import"./index-DAfSkmQi.js";import"./FOpenImgFull-BkT-3Av1.js";import"./FProgress-D9nQnxt0.js";import"./FCheckbox-CxRlIa0S.js";import"./FRadioButton-DU8OSBsH.js";import"./FPagination-HBLTjFx2.js";import"./FTimelineCard-PPBHv0K9.js";import"./FInputFileForm-D_0H5T3f.js";import"./FFile-Bcn0aMAy.js";import"./FSelectItem-BZmd-Lca.js";import"./FFullDateField-CWzNzzif.js";import"./FSelectSearchDb-Clr1GNKo.js";import"./FTextArea-DW0uzDSc.js";import"./FNative-F3FG8R_5.js";import"./FTab-BIi-RzkL.js";import"./FDropdownItem-Cj8HQD5i.js";import"./FSearchBox--q_Kwtu0.js";import"./FCarouselItem-C39m6uj5.js";import"./FSkeleton-D8rY3jBa.js";import"./jszip.min-DdMmZOXI.js";import{f as r}from"./fConfirm-Bgf3VGVx.js";/* empty css                      *//* empty css               *//* empty css                   */import"./FLoadIcon-DK9LdIdw.js";import"./FCloseIcon-Dh2aLPHG.js";import"./FArrowIcon-q9p_-0kR.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";function d(t){return t?t.value:null}const v=({title:t,body:p})=>new Promise(i=>{window.document.body.insertAdjacentHTML("afterbegin",`
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
Попробуй снова!`,variant:"info"})},children:"Ответить на главный вопрос жизни"})});o.__docgenInfo={description:"",methods:[],displayName:"Default"};var e,a,c;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`() => <FStack spacing={2} direction={'row'}>
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
  }}>
            Ответить на главный вопрос жизни
        </FButton>
    </FStack>`,...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const ot=["Default"];export{o as Default,ot as __namedExportsOrder,tt as default};
