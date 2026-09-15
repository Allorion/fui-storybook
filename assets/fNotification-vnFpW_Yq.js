import{f as x}from"./fGenerateUniqueId-BDtj4-Pu.js";const w="_info_lgyph_91",$="_error_lgyph_95",T="_success_lgyph_99",L="_warning_lgyph_103",o={"f-function-block-notification":"_f-function-block-notification_lgyph_35","f-function-notification-visible":"_f-function-notification-visible_lgyph_44","f-function-notification-hidden":"_f-function-notification-hidden_lgyph_48","f-function-notification":"_f-function-notification_lgyph_44","f-function-notification-ico":"_f-function-notification-ico_lgyph_77","info-notification":"_info-notification_lgyph_91","error-notification":"_error-notification_lgyph_95","success-notification":"_success-notification_lgyph_99","warning-notification":"_warning-notification_lgyph_103","f-function-notification-inside":"_f-function-notification-inside_lgyph_107","f-function-notification-header":"_f-function-notification-header_lgyph_115","f-function-notification-body":"_f-function-notification-body_lgyph_137","close-not":"_close-not_lgyph_175","f-notification-progress":"_f-notification-progress_lgyph_201","f-notification-progress-bar":"_f-notification-progress-bar_lgyph_210","f-notification-progress-value":"_f-notification-progress-value_lgyph_215","notification-progress-shrink":"_notification-progress-shrink_lgyph_1",info:w,error:$,success:T,warning:L},h=i=>{if(!i||i.dataset.closing==="true")return;i.dataset.closing="true";const f=i._cancelTimer;typeof f=="function"&&f();const s=i.offsetHeight;i.style.maxHeight=`${s}px`,i.offsetHeight,requestAnimationFrame(()=>{i.classList.remove(o["f-function-notification-visible"]),i.classList.add(o["f-function-notification-hidden"]),i.style.maxHeight="0px"});let c=!1;const r=()=>{var l;if(c)return;c=!0,i.parentNode&&i.parentNode.removeChild(i);const e=document.querySelector("#block-notification");e&&e.children.length===0&&((l=e.parentNode)==null||l.removeChild(e))};i.addEventListener("transitionend",e=>{e.target===i&&r()}),setTimeout(r,360)},B=({title:i,body:f,variant:s="info",timeSecClose:c,buttonClose:r=!1,id:e})=>new Promise(l=>{let a="";switch(s){case"info":a=`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="16" x2="12" y2="12"/>
                    <line x1="12" y1="8" x2="12.01" y2="8"/>
                </svg>`;break;case"success":a=`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="m9 12 2 2 4-4"/>
                </svg>`;break;case"error":a=`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="15" y1="9" x2="9" y2="15"/>
                    <line x1="9" y1="9" x2="15" y2="15"/>
                </svg>`;break;case"warning":a=`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
                    <line x1="12" y1="9" x2="12" y2="13"/>
                    <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>`;break}const m=f.split(`
`).map(n=>`<span>${n}</span>`),k=x(),u=e!==void 0?e:"f-function-block-notification-"+k,b=`
            <div class='${o["f-function-block-notification"]}' id="${u}">
                <div class='${o["f-function-notification"]}'>
                    <div class='${o["f-function-notification-ico"]} ${o[s+"-notification"]}'>
                        ${a}
                    </div>
                    <div class='${o["f-function-notification-inside"]}'>
                        <div class='${o["f-function-notification-header"]}'>
                            <h4>${i!==void 0?i:""}</h4>
                            ${r?`<button type="button" aria-label="Закрыть" class="${o["close-not"]}">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"/>
                                    <line x1="6" y1="6" x2="18" y2="18"/>
                                </svg>
                            </button>`:""}
                        </div>
                        <div class='${o["f-function-notification-body"]}'>
                             ${m.join("")}
                        </div>
                    </div>
                    ${c?`<div class="${o["f-notification-progress"]}">
                        <div class="${o["f-notification-progress-bar"]}">
                            <div class="${o["f-notification-progress-value"]} ${o[s]}" style="animation-duration: ${c}s;"></div>
                        </div>
                    </div>`:""}
                </div>
            </div>
        `,_=(()=>{let n=document.querySelector("#block-notification");return n===null&&(n=document.createElement("div"),n.id="block-notification",document.body.appendChild(n)),n})();_.insertAdjacentHTML("afterbegin",b),_.scrollTo({top:0,behavior:"smooth"});const t=window.document.querySelector(`#${u}`);if(t!==null){if(t._dismiss=()=>h(t),typeof requestAnimationFrame=="function"?requestAnimationFrame(()=>{requestAnimationFrame(()=>{t.classList.add(o["f-function-notification-visible"])})}):setTimeout(()=>{t.classList.add(o["f-function-notification-visible"])},20),r){const n=t.querySelector(`.${o["close-not"]}`);n!==null&&n.addEventListener("click",d=>{d.stopPropagation(),h(t)})}if(c!==void 0&&c>0){let n=null,d=Date.now(),g=c*1e3;const p=()=>{d=Date.now(),n=setTimeout(()=>{h(t)},g)},v=()=>{n&&(clearTimeout(n),n=null,g-=Date.now()-d)},y=()=>{g>0&&t.dataset.closing!=="true"&&p()};t._cancelTimer=()=>{n&&(clearTimeout(n),n=null),t.removeEventListener("mouseenter",v),t.removeEventListener("mouseleave",y)},t.addEventListener("mouseenter",v),t.addEventListener("mouseleave",y),p()}}l(`#${u}`)});export{h as d,B as f};
