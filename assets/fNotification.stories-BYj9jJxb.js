import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{F as a}from"./FButton-B6qhCJHc.js";import"./FButtonFile-C0VhEx3-.js";import"./FTextField-IIiRIgld.js";import"./FStack-Bs-EBUEz.js";import"./FGridRow-CsF9MpPt.js";import"./FContainer-BatpkT-f.js";import"./FPaper-BFgg04dY.js";import"./FTableFooter-CnqI0XYV.js";import"./index-DY-snNUy.js";import"./index-xMzmejw-.js";import"./FDialogFooter-DD6a7jOd.js";import"./FProgress-DRPVoeAu.js";import"./FPreloader-Cr6IHq0t.js";import"./FCheckbox-crXA0XCP.js";import"./FRadioButton-CHcr2FcC.js";import"./FPagination-CqlZsmTv.js";import"./FTimelineCard-rb4LP-m6.js";import"./FOpenImgFull-sWjjnLxR.js";import"./FAccordion-Cg__21gJ.js";import"./FInputFileForm-D47n6HKf.js";import"./FFile-D-P1EwbC.js";import"./FSelectItem-DLHXmGVb.js";import"./FFullDateField-Cfy5vkmh.js";import"./FSelectSearchDb-B1VhK_sN.js";import"./FTextArea-Br_2y22c.js";import"./FCloseIcon-4crl2uvv.js";/* empty css                */import"./FTab-CcBvhxU_.js";import"./FDropdownItem-C9WTnCuX.js";import"./FSearchBox-V7hn6O40.js";import"./FCarouselItem-BzHKgllY.js";import"./FSkeleton-pmLFDKm2.js";import"./FNavigateBarItem-C_SaROZY.js";import"./FMenuLinks-D7zPlJ_g.js";import{s as l,f as o}from"./fNotification-1jUJQXTa.js";import"./index-yBjzXJbu.js";import"./FLoadIcon-Dfwkb_VK.js";import"./index-fNjTmf9T.js";import"./FDialog-DLm4K6IN.js";import"./FArrowIcon-AjsFl5uk.js";import"./FTrashIcon-C1tCBYA9.js";import"./fGenerateUniqueId-BDtj4-Pu.js";const _=m=>{const t=window.document.querySelector(m);t!==null&&(t.className=l["f-function-notification-hidden"],setTimeout(()=>{t.classList.remove(l["f-function-notification-visible"])},1e3),setTimeout(()=>{t.parentNode&&t.parentNode.removeChild(t)},2e3))},Ct={title:"Function Elements/fNotification",component:o},i=()=>s.jsx(a,{onClick:()=>o({title:"Информация",body:"Это информационное уведомление.",variant:"info",timeSecClose:3,buttonClose:!0}),children:"Показать Info Notification"}),n=()=>s.jsx(a,{onClick:()=>o({title:"Успех",body:"Операция прошла успешно!",variant:"success",timeSecClose:3,buttonClose:!0}),children:"Показать Success Notification"}),e=()=>s.jsx(a,{onClick:()=>o({title:"Ошибка",body:"Произошла ошибка при выполнении операции.",variant:"error",timeSecClose:3,buttonClose:!0}),children:"Показать Error Notification"}),r=()=>s.jsx(a,{onClick:()=>o({title:"Внимание",body:"Проверьте введённые данные.",variant:"warning",timeSecClose:3,buttonClose:!0}),children:"Показать Warning Notification"}),c={render:()=>s.jsx(a,{onClick:async()=>{const m=await o({title:"Удаляемое уведомление",body:"Это уведомление исчезнет через 2 секунды",variant:"info",buttonClose:!1});setTimeout(()=>{_(m)},2e3)},children:"Показать и удалить уведомление"}),parameters:{docs:{source:{code:`
import fNotificationDelete from '../fNotificationDelete';

<FButton onClick={async () => {
  const id = await fNotification({
    title: 'Удаляемое уведомление',
    body: 'Это уведомление исчезнет через 2 секунды',
    variant: 'info',
    buttonClose: false,
  });
  setTimeout(() => {
    fNotificationDelete(id);
  }, 2000);
}}>
  Показать и удалить уведомление
</FButton>
        `.trim()}}}};i.__docgenInfo={description:"",methods:[],displayName:"Info"};n.__docgenInfo={description:"",methods:[],displayName:"Success"};e.__docgenInfo={description:"",methods:[],displayName:"Error"};r.__docgenInfo={description:"",methods:[],displayName:"Warning"};var p,f,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`() => <FButton onClick={() => fNotification({
  title: 'Информация',
  body: 'Это информационное уведомление.',
  variant: 'info',
  timeSecClose: 3,
  buttonClose: true
})}>
    Показать Info Notification
  </FButton>`,...(u=(f=i.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var d,N,C;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`() => <FButton onClick={() => fNotification({
  title: 'Успех',
  body: 'Операция прошла успешно!',
  variant: 'success',
  timeSecClose: 3,
  buttonClose: true
})}>
    Показать Success Notification
  </FButton>`,...(C=(N=n.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var b,y,S;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`() => <FButton onClick={() => fNotification({
  title: 'Ошибка',
  body: 'Произошла ошибка при выполнении операции.',
  variant: 'error',
  timeSecClose: 3,
  buttonClose: true
})}>
    Показать Error Notification
  </FButton>`,...(S=(y=e.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var F,g,v;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`() => <FButton onClick={() => fNotification({
  title: 'Внимание',
  body: 'Проверьте введённые данные.',
  variant: 'warning',
  timeSecClose: 3,
  buttonClose: true
})}>
    Показать Warning Notification
  </FButton>`,...(v=(g=r.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var B,k,h;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <FButton onClick={async () => {
    const id = await fNotification({
      title: 'Удаляемое уведомление',
      body: 'Это уведомление исчезнет через 2 секунды',
      variant: 'info',
      buttonClose: false
    });
    setTimeout(() => {
      fNotificationDelete(id);
    }, 2000);
  }}>
      Показать и удалить уведомление
    </FButton>,
  parameters: {
    docs: {
      source: {
        code: \`
import fNotificationDelete from '../fNotificationDelete';

<FButton onClick={async () => {
  const id = await fNotification({
    title: 'Удаляемое уведомление',
    body: 'Это уведомление исчезнет через 2 секунды',
    variant: 'info',
    buttonClose: false,
  });
  setTimeout(() => {
    fNotificationDelete(id);
  }, 2000);
}}>
  Показать и удалить уведомление
</FButton>
        \`.trim()
      }
    }
  }
}`,...(h=(k=c.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};const bt=["Info","Success","Error","Warning","DeleteNotification"];export{c as DeleteNotification,e as Error,i as Info,n as Success,r as Warning,bt as __namedExportsOrder,Ct as default};
