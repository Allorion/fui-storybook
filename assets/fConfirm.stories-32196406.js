import{a as i}from"./jsx-runtime-03b4ddbf.js";/* empty css                  */import{q as l,E as m}from"./FSearchBox-fdeba1ad.js";import{f as c}from"./index-124d210f.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./FFilterIcon-754ee43f.js";const u=({title:o,body:s})=>new Promise(t=>{window.document.body.insertAdjacentHTML("afterbegin",`
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
                            <h4>${o!==void 0?o:""}</h4>
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
        `);let f=document.querySelector("#f-function-confirm-ok"),d=document.querySelector("#f-function-confirm-cancellation");f.addEventListener("click",function(){t(!0)}),d.addEventListener("click",function(){t(!1)})}),w={title:"Function Elements/fConfirm",tags:["autodocs"]},n=()=>i(l,{spacing:2,direction:"row",children:i(m,{color:"primary",onClick:async()=>{await u({title:"Вам нравится работа в РосНИИВХ?",body:'Думаю вы понимаете почему тут нет ответа "НЕТ"'})?c({body:"Ситх, ты выбрал правильную, темную, сторону",variant:"success"}):c({body:`Не бойся, мы же оба знаем правильный ответ
Попробуй снова!`,variant:"error"})},children:"Ответить на главный вопрос жизни"})});var r,a,e;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`() => <FStack spacing={2} direction={'row'}>
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
    </FStack>`,...(e=(a=n.parameters)==null?void 0:a.docs)==null?void 0:e.source}}};const S=["Default"];export{n as Default,S as __namedExportsOrder,w as default};
//# sourceMappingURL=fConfirm.stories-32196406.js.map
