import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{f as n}from"./fConfirm-Bgf3VGVx.js";import{F as d}from"./FButton-vcukfBP4.js";import"./FButtonFile-CHKnFrKb.js";import"./FTextField-DWvp23El.js";import{F as p}from"./FStack-DvJS5si1.js";import"./FGrid-BWTo3lRs.js";import"./FContainer-Du0Di049.js";import"./FPaper-D6Oo0WgV.js";import"./FAlert-CefPhZQR.js";import"./FOpenImgFull-BCfLM3yy.js";import"./FProgress-C0i2V36s.js";import"./FCheckbox-D5toGIZf.js";import"./FRadioButton-DGCmVmG5.js";import"./FPagination-BzSu5zBc.js";import"./FTimelineCard-iMEw_La2.js";import"./FInputFileForm-Dh3UBGxg.js";import"./FFile-Cct2s-rO.js";import"./FSelectItem-C7ZDPLu7.js";import"./FFullDateField-Cszra0xD.js";import"./FSelectSearchDb-rImFaTjC.js";import"./FTextArea-DNeFs9G0.js";import"./FNative-D_ve21w6.js";import"./FTab-DIAeKHIc.js";import"./FDropdownItem-DoRp9Pst.js";import"./FSearchBox-CE5z04S0.js";import"./FCarouselItem-Diq-YX18.js";import"./FSkeleton-DuR3f4nd.js";import"./index-DJO9vBfz.js";/* empty css               *//* empty css                   */import"./FLoadIcon-8HypuZKP.js";import"./FCloseIcon-DM6S50X-.js";import"./FArrowIcon-lNeI-if7.js";import"./index-DLC2J04D.js";const l=({title:t,body:s})=>new Promise(i=>{window.document.body.insertAdjacentHTML("afterbegin",`
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
        `);const m=document.querySelector("#f-function-confirm-ok"),f=document.querySelector("#f-function-confirm-cancellation");m.addEventListener("click",function(){i(!0)}),f.addEventListener("click",function(){i(!1)})}),U={title:"Function Elements/fConfirm",tags:["autodocs"]},o=()=>r.jsx(p,{spacing:2,direction:"row",children:r.jsx(d,{color:"primary",onClick:async()=>{await l({title:"Вам нравится работа в РосНИИВХ?",body:'Думаю вы понимаете почему тут нет ответа "НЕТ"'})?n({body:"Ситх, ты выбрал правильную, темную, сторону",variant:"success"}):n({body:`Не бойся, мы же оба знаем правильный ответ
Попробуй снова!`,variant:"error"})},children:"Ответить на главный вопрос жизни"})});o.__docgenInfo={description:"",methods:[],displayName:"Default"};var c,e,a;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`() => <FStack spacing={2} direction={'row'}>\r
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
  }}>\r
            Ответить на главный вопрос жизни\r
        </FButton>\r
    </FStack>`,...(a=(e=o.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
