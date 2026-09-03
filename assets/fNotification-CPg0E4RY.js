import{f as j}from"./fGenerateUniqueId-BDtj4-Pu.js";const w="_info_1s6rj_93",x="_error_1s6rj_97",$="_success_1s6rj_101",T="_warning_1s6rj_105",n={"f-function-block-notification":"_f-function-block-notification_1s6rj_35","f-function-notification-visible":"_f-function-notification-visible_1s6rj_45","f-function-notification-hidden":"_f-function-notification-hidden_1s6rj_50","f-function-notification":"_f-function-notification_1s6rj_45","f-function-notification-ico":"_f-function-notification-ico_1s6rj_79","info-notification":"_info-notification_1s6rj_93","error-notification":"_error-notification_1s6rj_97","success-notification":"_success-notification_1s6rj_101","warning-notification":"_warning-notification_1s6rj_105","f-function-notification-inside":"_f-function-notification-inside_1s6rj_109","f-function-notification-header":"_f-function-notification-header_1s6rj_117","f-function-notification-body":"_f-function-notification-body_1s6rj_136","close-not":"_close-not_1s6rj_153","f-notification-progress":"_f-notification-progress_1s6rj_179","f-notification-progress-bar":"_f-notification-progress-bar_1s6rj_188","f-notification-progress-value":"_f-notification-progress-value_1s6rj_193","notification-progress-shrink":"_notification-progress-shrink_1s6rj_1",info:w,error:x,success:$,warning:T},_=o=>{if(!o||o.dataset.closing==="true")return;o.dataset.closing="true";const f=o._cancelTimer;typeof f=="function"&&f(),o.classList.remove(n["f-function-notification-visible"]),o.classList.add(n["f-function-notification-hidden"]);let r=!1;const s=()=>{var c;if(r)return;r=!0,o.parentNode&&o.parentNode.removeChild(o);const e=document.querySelector("#block-notification");e&&e.children.length===0&&((c=e.parentNode)==null||c.removeChild(e))};o.addEventListener("transitionend",e=>{e.target===o&&s()}),setTimeout(s,360)},B=({title:o,body:f,variant:r="info",timeSecClose:s,buttonClose:e=!1,id:c})=>new Promise(k=>{let a="";switch(r){case"info":a=`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
`).map(i=>`<span>${i}</span>`),y=j(),d=c!==void 0?c:"f-function-block-notification-"+y,b=`
            <div class='${n["f-function-block-notification"]}' id="${d}">
                <div class='${n["f-function-notification"]}'>
                    <div class='${n["f-function-notification-ico"]} ${n[r+"-notification"]}'>
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
                    ${s?`<div class="${n["f-notification-progress"]}">
                        <div class="${n["f-notification-progress-bar"]}">
                            <div class="${n["f-notification-progress-value"]} ${n[r]}" style="animation-duration: ${s}s;"></div>
                        </div>
                    </div>`:""}
                </div>
            </div>
        `,v=(()=>{let i=document.querySelector("#block-notification");return i===null&&(i=document.createElement("div"),i.id="block-notification",document.body.appendChild(i)),i})();v.insertAdjacentHTML("afterbegin",b),v.scrollTo({top:0,behavior:"smooth"});const t=window.document.querySelector(`#${d}`);if(t!==null){if(t._dismiss=()=>_(t),typeof requestAnimationFrame=="function"?requestAnimationFrame(()=>{requestAnimationFrame(()=>{t.classList.add(n["f-function-notification-visible"])})}):setTimeout(()=>{t.classList.add(n["f-function-notification-visible"])},20),e){const i=t.querySelector(`.${n["close-not"]}`);i!==null&&i.addEventListener("click",l=>{l.stopPropagation(),_(t)})}if(s!==void 0&&s>0){let i=null,l=Date.now(),u=s*1e3;const m=()=>{l=Date.now(),i=setTimeout(()=>{_(t)},u)},g=()=>{i&&(clearTimeout(i),i=null,u-=Date.now()-l)},h=()=>{u>0&&t.dataset.closing!=="true"&&m()};t._cancelTimer=()=>{i&&(clearTimeout(i),i=null),t.removeEventListener("mouseenter",g),t.removeEventListener("mouseleave",h)},t.addEventListener("mouseenter",g),t.addEventListener("mouseleave",h),m()}}k(`#${d}`)});export{_ as d,B as f};
