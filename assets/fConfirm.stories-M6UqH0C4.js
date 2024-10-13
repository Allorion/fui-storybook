import{j as n}from"./jsx-runtime-DEdD30eg.js";import{f as r}from"./fConfirm-Bgf3VGVx.js";import{F as d}from"./FButton-BMyxDZM2.js";import"./FButtonFile-A8ZoCR_A.js";import"./FTextField-c_bEAKdc.js";import{F as p}from"./FStack-DUahO965.js";import"./FGrid-Cf0t3TO0.js";import"./FContainer-CXdPSwYt.js";import"./FPaper-iPHHMhvA.js";import"./FAlert-DS38ZrBT.js";import"./index-RYns6xqu.js";import"./index-DAfSkmQi.js";import"./FOpenImgFull-BkT-3Av1.js";import"./FProgress-D9nQnxt0.js";import"./FCheckbox-CxRlIa0S.js";import"./FRadioButton-DU8OSBsH.js";import"./FPagination-HBLTjFx2.js";import"./FTimelineCard-PPBHv0K9.js";import"./FInputFileForm-D_0H5T3f.js";import"./FFile-Bcn0aMAy.js";import"./FSelectItem-BZmd-Lca.js";import"./FFullDateField-CWzNzzif.js";import"./FSelectSearchDb-Clr1GNKo.js";import"./FTextArea-DW0uzDSc.js";import"./FNative-F3FG8R_5.js";import"./FTab-BIi-RzkL.js";import"./FDropdownItem-Cj8HQD5i.js";import"./FSearchBox--q_Kwtu0.js";import"./FCarouselItem-C39m6uj5.js";import"./FSkeleton-D8rY3jBa.js";/* empty css               *//* empty css                   */import"./FLoadIcon-DK9LdIdw.js";import"./FCloseIcon-Dh2aLPHG.js";import"./FArrowIcon-q9p_-0kR.js";const l=({title:t,body:s})=>new Promise(i=>{window.document.body.insertAdjacentHTML("afterbegin",`
            <div class='f-function-block-confirm' id='f-function-block-confirm'>
                <div class='f-function-confirm'>
                    <div class='f-function-confirm-ico warning'>
                        <svg width="28" height="28" viewBox="0 0 16 16">
                            <path
                                d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                            <path
                                d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                        </svg>
                    </div>
                    <div class='f-function-confirm-inside'>
                        <div class='f-function-confirm-header'>
                            <h4>${t!==void 0?t:""}</h4>
                        </div>
                        <div class='f-function-confirm-body'>
                            <span>${s}</span>
                        </div>
                        <div class='f-function-confirm-footer'>
                            <button
                                id="f-function-confirm-ok"
                                class='btn btn-success btn-sm'
                                onclick='document.querySelector("#f-function-block-confirm").remove()'
                            >
                                Ок
                            </button>
                            <button
                                id="f-function-confirm-cancellation"
                                class='btn btn-danger btn-sm'
                                onclick='document.querySelector("#f-function-block-confirm").remove()'
                            >
                                Отменить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `);const m=document.querySelector("#f-function-confirm-ok"),f=document.querySelector("#f-function-confirm-cancellation");m.addEventListener("click",function(){i(!0)}),f.addEventListener("click",function(){i(!1)})}),U={title:"Function Elements/fConfirm",tags:["autodocs"]},o=()=>n.jsx(p,{spacing:2,direction:"row",children:n.jsx(d,{color:"primary",onClick:async()=>{await l({title:"Вам нравится работа в РосНИИВХ?",body:'Думаю вы понимаете почему тут нет ответа "НЕТ"'})?r({body:"Ситх, ты выбрал правильную, темную, сторону",variant:"success"}):r({body:`Не бойся, мы же оба знаем правильный ответ
Попробуй снова!`,variant:"error"})},children:"Ответить на главный вопрос жизни"})});o.__docgenInfo={description:"",methods:[],displayName:"Default"};var c,e,a;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`() => <FStack spacing={2} direction={'row'}>
        <FButton color={'primary'} onClick={async () => {
    const a = await fConfirm({
      title: 'Вам нравится работа в РосНИИВХ?',
      body: 'Думаю вы понимаете почему тут нет ответа "НЕТ"'
    });
    if (a) {
      fAlert({
        body: 'Ситх, ты выбрал правильную, темную, сторону',
        variant: 'success'
      });
    } else {
      fAlert({
        body: 'Не бойся, мы же оба знаем правильный ответ\\nПопробуй снова!',
        variant: 'error'
      });
    }
  }}>
            Ответить на главный вопрос жизни
        </FButton>
    </FStack>`,...(a=(e=o.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
