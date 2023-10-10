import{a as e}from"./jsx-runtime-03b4ddbf.js";/* empty css                  */import{t as f,E as d}from"./FSearchBox-dba6eceb.js";import{f as n}from"./index-124d210f.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./FFilterIcon-69b0ebaf.js";function m(t){return t?t.value:null}const v=({title:t,body:s})=>new Promise(r=>{window.document.body.insertAdjacentHTML("afterbegin",`
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
                            <span>${s}</span>
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
        `);let l=document.querySelector("#f-function-prompt-ok"),u=document.querySelector("#f-function-prompt-cancellation"),p=document.querySelector("#f-function-prompt-input");l.addEventListener("click",function(){r(m(p))}),u.addEventListener("click",function(){r(null)})}),L={title:"Function Elements/fPrompt",tags:["autodocs"]},o=()=>e(f,{spacing:2,direction:"row",children:e(d,{color:"primary",onClick:async()=>{const t=await v({title:"Вам нравится работа в РосНИИВХ?",body:'Думаю вы понимаете почему нельзя отвечать "НЕТ"'});t!==null&&t.toLowerCase()==="нет"?n({body:"Ты сделал не верный выбор и за тобой уже выехали",variant:"error"}):t!==null&&t.toLowerCase()==="да"?n({body:"Ситх, ты выбрал правильную, темную, сторону",variant:"success"}):n({body:`Не бойся, мы же оба знаем правильный ответ
Попробуй снова!`,variant:"info"})},children:"Ответить на главный вопрос жизни"})});var i,a,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`() => <FStack spacing={2} direction={'row'}>
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
    </FStack>`,...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const F=["Default"];export{o as Default,F as __namedExportsOrder,L as default};
//# sourceMappingURL=fPrompt.stories-3ccd66fc.js.map
