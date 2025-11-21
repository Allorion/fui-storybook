import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{F as a}from"./FButton-CdBoQZas.js";import"./FButtonFile-B1-dGwQ8.js";import"./FTextField-CQUFWKWA.js";import"./FStack-Bs-EBUEz.js";import"./FGridRow-CsF9MpPt.js";import"./FContainer-BatpkT-f.js";import"./FPaper-BFgg04dY.js";import"./FTableFooter-DVs5nPTb.js";import"./index-DY-snNUy.js";import"./index-xMzmejw-.js";import"./FDialogFooter-Bfbpy8Fv.js";import"./FProgress-DRPVoeAu.js";import"./FPreloader-B_LCaiJ_.js";import"./FCheckbox-NPMfrU2t.js";import"./FRadioButton-CiO-cZog.js";import"./FPagination-CqlZsmTv.js";import"./FTimelineCard-rb4LP-m6.js";import"./FOpenImgFull-Dh9z-cRV.js";import"./FAccordion-Cg__21gJ.js";import"./FInputFileForm-BKkDwdgT.js";import"./FFile-BtYqhg3U.js";import"./FSelectItem-CPfHgaOQ.js";import"./FFullDateField-C0grZK2T.js";import"./FSelectSearchDb-Af25Ppp2.js";import"./FTextArea-D4UTr8NG.js";import"./FCloseIcon-ZR3e0z_J.js";/* empty css                */import"./FTab-CvAzYgoL.js";import"./FDropdownItem-C_UcoqQE.js";import"./FSearchBox-D0FHvEmT.js";import"./FCarouselItem-BzHKgllY.js";import"./FSkeleton-pmLFDKm2.js";import"./FNavigateBarItem-C_SaROZY.js";import"./FMenuLinks-CLXKb6B9.js";import"./FTooltip-DERxuMdc.js";import{s as f,f as o}from"./fNotification-DiB-4WV0.js";import"./index-yBjzXJbu.js";import"./FLoadIcon-BM1DdYSY.js";import"./index-fNjTmf9T.js";import"./FDialog-DLm4K6IN.js";import"./FArrowIcon-DpFSaEY1.js";import"./FTrashIcon-Cxn1SHc6.js";import"./fGenerateUniqueId-BDtj4-Pu.js";const D=m=>{const t=window.document.querySelector(m);if(!t)return;const l=document.getElementById("block-notification");l&&(t.className=f["f-function-notification-hidden"],setTimeout(()=>{t.classList.remove(f["f-function-notification-visible"])},1e3),setTimeout(()=>{t.parentNode&&t.parentNode.removeChild(t),l.children.length===0&&l.remove()},2e3))},yt={title:"Function Elements/fNotification",component:o},i=()=>s.jsx(a,{onClick:()=>o({title:"Информация",body:"Это информационное уведомление.",variant:"info",timeSecClose:3,buttonClose:!0}),children:"Показать Info Notification"}),n=()=>s.jsx(a,{onClick:()=>o({title:"Успех",body:"Операция прошла успешно!",variant:"success",timeSecClose:3,buttonClose:!0}),children:"Показать Success Notification"}),e=()=>s.jsx(a,{onClick:()=>o({title:"Ошибка",body:"Произошла ошибка при выполнении операции.",variant:"error",timeSecClose:3,buttonClose:!0}),children:"Показать Error Notification"}),r=()=>s.jsx(a,{onClick:()=>o({title:"Внимание",body:"Проверьте введённые данные.",variant:"warning",timeSecClose:3,buttonClose:!0}),children:"Показать Warning Notification"}),c={render:()=>s.jsx(a,{onClick:async()=>{const m=await o({title:"Удаляемое уведомление",body:"Это уведомление исчезнет через 2 секунды",variant:"info",buttonClose:!1});setTimeout(()=>{D(m)},2e3)},children:"Показать и удалить уведомление"}),parameters:{docs:{source:{code:`
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
        `.trim()}}}};i.__docgenInfo={description:"",methods:[],displayName:"Info"};n.__docgenInfo={description:"",methods:[],displayName:"Success"};e.__docgenInfo={description:"",methods:[],displayName:"Error"};r.__docgenInfo={description:"",methods:[],displayName:"Warning"};var p,u,d;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`() => <FButton onClick={() => fNotification({
  title: 'Информация',
  body: 'Это информационное уведомление.',
  variant: 'info',
  timeSecClose: 3,
  buttonClose: true
})}>
    Показать Info Notification
  </FButton>`,...(d=(u=i.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var N,C,b;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`() => <FButton onClick={() => fNotification({
  title: 'Успех',
  body: 'Операция прошла успешно!',
  variant: 'success',
  timeSecClose: 3,
  buttonClose: true
})}>
    Показать Success Notification
  </FButton>`,...(b=(C=n.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var y,S,g;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`() => <FButton onClick={() => fNotification({
  title: 'Ошибка',
  body: 'Произошла ошибка при выполнении операции.',
  variant: 'error',
  timeSecClose: 3,
  buttonClose: true
})}>
    Показать Error Notification
  </FButton>`,...(g=(S=e.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var F,v,B;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`() => <FButton onClick={() => fNotification({
  title: 'Внимание',
  body: 'Проверьте введённые данные.',
  variant: 'warning',
  timeSecClose: 3,
  buttonClose: true
})}>
    Показать Warning Notification
  </FButton>`,...(B=(v=r.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var h,k,_;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(_=(k=c.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};const St=["Info","Success","Error","Warning","DeleteNotification"];export{c as DeleteNotification,e as Error,i as Info,n as Success,r as Warning,St as __namedExportsOrder,yt as default};
