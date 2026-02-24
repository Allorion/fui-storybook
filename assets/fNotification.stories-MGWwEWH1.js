import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{F as a}from"./FButton-DQOEJPUH.js";import"./FButtonFile-Cc8ubo-m.js";import"./FTextField-DSrbz1g8.js";import"./FStack-Bjsadt8I.js";import"./FGridRow-DPVPfH0m.js";import"./FContainer-D9oNryDS.js";import"./FPaper-ByA2FQvy.js";import"./FTableFooter-BgRQPjyP.js";import"./index-DEgj3Fem.js";import"./index-BknSE3li.js";import"./FDialogFooter-EZrNysQM.js";import"./FProgress-CuUSEf8T.js";import"./FPreloader-C0DO9d3w.js";import"./FCheckbox-CvjAvqQ6.js";import"./FRadioButton-CWco8Ir1.js";import"./FPagination-Cudve55R.js";import"./FTimelineCard-G_wv4YPr.js";import"./FOpenImgFull-BzaYDndu.js";import"./FAccordion-CUm2A8fo.js";import"./FInputFileForm-KMotnIpw.js";import"./FFile-BHJQGV29.js";import"./FSelectItem-BnNI1hqM.js";import"./FFullDateField-_mtt4yT5.js";import"./FSelectSearchDb-CtdF7gtg.js";import"./FTextArea-9qVfGzxf.js";import"./FCloseIcon-Dr7AIYCl.js";/* empty css                */import"./FTab-DHwok_rz.js";import"./FDropdownItem-D17eYKAm.js";import"./FSearchBox-Czmsapd1.js";import"./FCarouselItem-DRfQet_0.js";import"./FSkeleton-qmKtpPTy.js";import"./FNavigateBarItem-CQ1yOoQk.js";import"./FMenuLinks-CHiLRQZa.js";import"./FTooltip-CCrWwCPn.js";import"./FSearchableSelect-BZIN-NqS.js";import{s as f,f as o}from"./fNotification-DiB-4WV0.js";import"./FLoadIcon-1-Td29NS.js";import"./index-DM3MU96Y.js";import"./FDialog-DPCiHy6F.js";import"./FArrowIcon-C21crw0H.js";import"./FTrashIcon-Da5Dd79F.js";import"./fGenerateUniqueId-BDtj4-Pu.js";const D=m=>{const t=window.document.querySelector(m);if(!t)return;const l=document.getElementById("block-notification");l&&(t.className=f["f-function-notification-hidden"],setTimeout(()=>{t.classList.remove(f["f-function-notification-visible"])},1e3),setTimeout(()=>{t.parentNode&&t.parentNode.removeChild(t),l.children.length===0&&l.remove()},2e3))},yt={title:"Function Elements/fNotification",component:o},i=()=>s.jsx(a,{onClick:()=>o({title:"Информация",body:"Это информационное уведомление.",variant:"info",timeSecClose:3,buttonClose:!0}),children:"Показать Info Notification"}),n=()=>s.jsx(a,{onClick:()=>o({title:"Успех",body:"Операция прошла успешно!",variant:"success",timeSecClose:3,buttonClose:!0}),children:"Показать Success Notification"}),e=()=>s.jsx(a,{onClick:()=>o({title:"Ошибка",body:"Произошла ошибка при выполнении операции.",variant:"error",timeSecClose:3,buttonClose:!0}),children:"Показать Error Notification"}),r=()=>s.jsx(a,{onClick:()=>o({title:"Внимание",body:"Проверьте введённые данные.",variant:"warning",timeSecClose:3,buttonClose:!0}),children:"Показать Warning Notification"}),c={render:()=>s.jsx(a,{onClick:async()=>{const m=await o({title:"Удаляемое уведомление",body:"Это уведомление исчезнет через 2 секунды",variant:"info",buttonClose:!1});setTimeout(()=>{D(m)},2e3)},children:"Показать и удалить уведомление"}),parameters:{docs:{source:{code:`
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
}`,...(_=(k=c.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};const St=["Info","Success","Error","Warning","DeleteNotification"];export{c as DeleteNotification,e as Error,i as Info,n as Success,r as Warning,St as __namedExportsOrder,yt as default};
