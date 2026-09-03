import{f as w}from"./fGenerateUniqueId-BDtj4-Pu.js";const x="_info_hz0rr_93",$="_error_hz0rr_97",z="_success_hz0rr_101",T="_warning_hz0rr_105",n={"f-function-block-notification":"_f-function-block-notification_hz0rr_35","f-function-notification-visible":"_f-function-notification-visible_hz0rr_45","f-function-notification-hidden":"_f-function-notification-hidden_hz0rr_50","f-function-notification":"_f-function-notification_hz0rr_45","f-function-notification-ico":"_f-function-notification-ico_hz0rr_79","info-notification":"_info-notification_hz0rr_93","error-notification":"_error-notification_hz0rr_97","success-notification":"_success-notification_hz0rr_101","warning-notification":"_warning-notification_hz0rr_105","f-function-notification-inside":"_f-function-notification-inside_hz0rr_109","f-function-notification-header":"_f-function-notification-header_hz0rr_117","f-function-notification-body":"_f-function-notification-body_hz0rr_136","close-not":"_close-not_hz0rr_153","f-notification-progress":"_f-notification-progress_hz0rr_179","f-notification-progress-bar":"_f-notification-progress-bar_hz0rr_188","f-notification-progress-value":"_f-notification-progress-value_hz0rr_193","notification-progress-shrink":"_notification-progress-shrink_hz0rr_1",info:x,error:$,success:z,warning:T},_=o=>{if(!o||o.dataset.closing==="true")return;o.dataset.closing="true";const f=o._cancelTimer;typeof f=="function"&&f(),o.classList.remove(n["f-function-notification-visible"]),o.classList.add(n["f-function-notification-hidden"]);let c=!1;const r=()=>{var s;if(c)return;c=!0,o.parentNode&&o.parentNode.removeChild(o);const e=document.querySelector("#block-notification");e&&e.children.length===0&&((s=e.parentNode)==null||s.removeChild(e))};o.addEventListener("transitionend",e=>{e.target===o&&r()}),setTimeout(r,360)},B=({title:o,body:f,variant:c="info",timeSecClose:r,buttonClose:e=!1,id:s})=>new Promise(k=>{let a="";switch(c){case"info":a=`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
                </svg>`;break}const p=f.split(`
`).map(i=>`<span>${i}</span>`),y=w(),d=s!==void 0?s:"f-function-block-notification-"+y,b=`
            <div class='${n["f-function-block-notification"]}' id="${d}">
                <div class='${n["f-function-notification"]}'>
                    <div class='${n["f-function-notification-ico"]} ${n[c+"-notification"]}'>
                        ${a}
                    </div>
                    <div class='${n["f-function-notification-inside"]}'>
                        <div class='${n["f-function-notification-header"]}'>
                            <h4>${o!==void 0?o:""}</h4>
                            ${e?`<button type="button" aria-label="Закрыть" class="${n["close-not"]}">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"/>
                                    <line x1="6" y1="6" x2="18" y2="18"/>
                                </svg>
                            </button>`:""}
                        </div>
                        <div class='${n["f-function-notification-body"]}'>
                             ${p.join("")}
                        </div>
                    </div>
                    ${r?`<div class="${n["f-notification-progress"]}">
                        <div class="${n["f-notification-progress-bar"]}">
                            <div class="${n["f-notification-progress-value"]} ${n[c]}" style="animation-duration: ${r}s;"></div>
                        </div>
                    </div>`:""}
                </div>
            </div>
        `,h=(()=>{let i=document.querySelector("#block-notification");return i===null&&(i=document.createElement("div"),i.id="block-notification",document.body.appendChild(i)),i})();h.insertAdjacentHTML("afterbegin",b),h.scrollTo({top:0,behavior:"smooth"});const t=window.document.querySelector(`#${d}`);if(t!==null){if(t._dismiss=()=>_(t),typeof requestAnimationFrame=="function"?requestAnimationFrame(()=>{requestAnimationFrame(()=>{t.classList.add(n["f-function-notification-visible"])})}):setTimeout(()=>{t.classList.add(n["f-function-notification-visible"])},20),e){const i=t.querySelector(`.${n["close-not"]}`);i!==null&&i.addEventListener("click",l=>{l.stopPropagation(),_(t)})}if(r!==void 0&&r>0){let i=null,l=Date.now(),u=r*1e3;const v=()=>{l=Date.now(),i=setTimeout(()=>{_(t)},u)},m=()=>{i&&(clearTimeout(i),i=null,u-=Date.now()-l)},g=()=>{u>0&&t.dataset.closing!=="true"&&v()};t._cancelTimer=()=>{i&&(clearTimeout(i),i=null),t.removeEventListener("mouseenter",m),t.removeEventListener("mouseleave",g)},t.addEventListener("mouseenter",m),t.addEventListener("mouseleave",g),v()}}k(`#${d}`)});export{_ as d,B as f};
