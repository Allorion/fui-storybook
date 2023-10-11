import{a as i}from"./jsx-runtime-03b4ddbf.js";/* empty css                  */import{F as d}from"./FButton-23548114.js";import"./FSearchBox-152125fe.js";import{F as l}from"./FStack-e49fc9aa.js";import"./FGrid-bad13094.js";import"./FContainer-040ae8b7.js";import"./FPaper-d5aa57d5.js";import"./FProgress-06696b81.js";import"./FCheckbox-a1e223c2.js";import"./FRadioButton-a987e6ee.js";import"./FPagination-90c139ef.js";import"./FInputFileForm-02e963c4.js";import"./FNative-c4016f0a.js";import"./FTab-d7a1be1e.js";import{f as r}from"./index-16d2322c.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./FCloseIcon-47d91238.js";import"./helpers-8a9e28f3.js";const u=({title:t,body:s})=>new Promise(n=>{window.document.body.insertAdjacentHTML("afterbegin",`
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
        `);let f=document.querySelector("#f-function-confirm-ok"),m=document.querySelector("#f-function-confirm-cancellation");f.addEventListener("click",function(){n(!0)}),m.addEventListener("click",function(){n(!1)})}),_={title:"Function Elements/fConfirm",tags:["autodocs"]},o=()=>i(l,{spacing:2,direction:"row",children:i(d,{color:"primary",onClick:async()=>{await u({title:"Вам нравится работа в РосНИИВХ?",body:'Думаю вы понимаете почему тут нет ответа "НЕТ"'})?r({body:"Ситх, ты выбрал правильную, темную, сторону",variant:"success"}):r({body:`Не бойся, мы же оба знаем правильный ответ
Попробуй снова!`,variant:"error"})},children:"Ответить на главный вопрос жизни"})});var c,a,e;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`() => <FStack spacing={2} direction={'row'}>
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
    </FStack>`,...(e=(a=o.parameters)==null?void 0:a.docs)==null?void 0:e.source}}};const j=["Default"];export{o as Default,j as __namedExportsOrder,_ as default};
//# sourceMappingURL=fConfirm.stories-0bbb510d.js.map
