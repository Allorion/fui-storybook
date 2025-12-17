import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{F as a}from"./FButton-C9wpY3zS.js";import"./FButtonFile-C-97Bcy4.js";import"./FTextField-9__gOwG2.js";import"./FStack-CaU3HVIe.js";import"./FGridRow-Cd5Ey8la.js";import"./FContainer-CBRWva3t.js";import"./FPaper-B4Vv-l4z.js";import"./FTableFooter-rhoceIn9.js";import"./index-DY-snNUy.js";import"./index-xMzmejw-.js";import"./FDialogFooter-DHGI5gTe.js";import"./FProgress-CEE1n2UA.js";import"./FPreloader-DSvNfYRU.js";import"./FCheckbox-CZMnA5mI.js";import"./FRadioButton-zWvdnqFb.js";import"./FPagination-CGjwqwi5.js";import"./FTimelineCard-rb4LP-m6.js";import"./FOpenImgFull-DSjId0kY.js";import"./FAccordion-DoHEzoJ5.js";import"./FInputFileForm-xXWG0l7e.js";import"./FFile-4snuIDkx.js";import"./FSelectItem-BBA9sko8.js";import"./FFullDateField-u765GOI1.js";import"./FSelectSearchDb-fqVQhS3d.js";import"./FTextArea-Pz35vTJd.js";import"./FCloseIcon-DSg2auC9.js";/* empty css                */import"./FTab-DVr93HwX.js";import"./FDropdownItem-CulPidhO.js";import"./FSearchBox-rNKAd81p.js";import"./FCarouselItem-CPrVz-TT.js";import"./FSkeleton-VCBpHstM.js";import"./FNavigateBarItem-CEkWKOcn.js";import"./FMenuLinks-Do6hEIXs.js";import"./FTooltip-DablkKvs.js";import"./FSearchableSelect-DVzczKgm.js";import{s as f,f as o}from"./fNotification-DiB-4WV0.js";import"./index-yBjzXJbu.js";import"./FLoadIcon-BNGbbN3E.js";import"./index-fNjTmf9T.js";import"./FDialog-DLm4K6IN.js";import"./FArrowIcon-BBsChLs-.js";import"./FTrashIcon-CD7BhDB1.js";import"./fGenerateUniqueId-BDtj4-Pu.js";const D=m=>{const t=window.document.querySelector(m);if(!t)return;const l=document.getElementById("block-notification");l&&(t.className=f["f-function-notification-hidden"],setTimeout(()=>{t.classList.remove(f["f-function-notification-visible"])},1e3),setTimeout(()=>{t.parentNode&&t.parentNode.removeChild(t),l.children.length===0&&l.remove()},2e3))},St={title:"Function Elements/fNotification",component:o},i=()=>s.jsx(a,{onClick:()=>o({title:"Информация",body:"Это информационное уведомление.",variant:"info",timeSecClose:3,buttonClose:!0}),children:"Показать Info Notification"}),n=()=>s.jsx(a,{onClick:()=>o({title:"Успех",body:"Операция прошла успешно!",variant:"success",timeSecClose:3,buttonClose:!0}),children:"Показать Success Notification"}),e=()=>s.jsx(a,{onClick:()=>o({title:"Ошибка",body:"Произошла ошибка при выполнении операции.",variant:"error",timeSecClose:3,buttonClose:!0}),children:"Показать Error Notification"}),r=()=>s.jsx(a,{onClick:()=>o({title:"Внимание",body:"Проверьте введённые данные.",variant:"warning",timeSecClose:3,buttonClose:!0}),children:"Показать Warning Notification"}),c={render:()=>s.jsx(a,{onClick:async()=>{const m=await o({title:"Удаляемое уведомление",body:"Это уведомление исчезнет через 2 секунды",variant:"info",buttonClose:!1});setTimeout(()=>{D(m)},2e3)},children:"Показать и удалить уведомление"}),parameters:{docs:{source:{code:`
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
})}>\r
    Показать Info Notification\r
  </FButton>`,...(d=(u=i.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var N,C,b;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`() => <FButton onClick={() => fNotification({
  title: 'Успех',
  body: 'Операция прошла успешно!',
  variant: 'success',
  timeSecClose: 3,
  buttonClose: true
})}>\r
    Показать Success Notification\r
  </FButton>`,...(b=(C=n.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var y,S,g;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`() => <FButton onClick={() => fNotification({
  title: 'Ошибка',
  body: 'Произошла ошибка при выполнении операции.',
  variant: 'error',
  timeSecClose: 3,
  buttonClose: true
})}>\r
    Показать Error Notification\r
  </FButton>`,...(g=(S=e.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var F,v,B;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`() => <FButton onClick={() => fNotification({
  title: 'Внимание',
  body: 'Проверьте введённые данные.',
  variant: 'warning',
  timeSecClose: 3,
  buttonClose: true
})}>\r
    Показать Warning Notification\r
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
  }}>\r
      Показать и удалить уведомление\r
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
}`,...(_=(k=c.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};const gt=["Info","Success","Error","Warning","DeleteNotification"];export{c as DeleteNotification,e as Error,i as Info,n as Success,r as Warning,gt as __namedExportsOrder,St as default};
