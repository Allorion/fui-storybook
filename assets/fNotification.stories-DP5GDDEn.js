import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{F as a}from"./FButton-C6QFu6NS.js";import"./FButtonFile-DLpwmVhR.js";import"./FTextField-CvQDvwqw.js";import"./FStack-CaU3HVIe.js";import"./FGridRow-Cd5Ey8la.js";import"./FContainer-CBRWva3t.js";import"./FPaper-B4Vv-l4z.js";import"./FTableFooter-BCw1QWwU.js";import"./index-DY-snNUy.js";import"./index-xMzmejw-.js";import"./FDialogFooter-DtCnoDK1.js";import"./FProgress-CEE1n2UA.js";import"./FPreloader-DjsC-NoF.js";import"./FCheckbox-0HygKZ_H.js";import"./FRadioButton-BnB7wthJ.js";import"./FPagination-CGjwqwi5.js";import"./FTimelineCard-rb4LP-m6.js";import"./FOpenImgFull-DrOhw3hj.js";import"./FAccordion-DoHEzoJ5.js";import"./FInputFileForm-C-P9ko8T.js";import"./FFile-CjATirsC.js";import"./FSelectItem-Cuzv67AL.js";import"./FFullDateField-D-sWaVhN.js";import"./FSelectSearchDb-CDblKRL_.js";import"./FTextArea-BuLFvaa0.js";import"./FCloseIcon-6J1vWEif.js";/* empty css                */import"./FTab-CeQvFWdj.js";import"./FDropdownItem-Ca8ENcru.js";import"./FSearchBox-BdMFAORn.js";import"./FCarouselItem-CPrVz-TT.js";import"./FSkeleton-VCBpHstM.js";import"./FNavigateBarItem-CEkWKOcn.js";import"./FMenuLinks-CfzWJGgP.js";import{s as l,f as o}from"./fNotification-1jUJQXTa.js";import"./index-yBjzXJbu.js";import"./FLoadIcon-BHsw31Xd.js";import"./index-fNjTmf9T.js";import"./FDialog-DLm4K6IN.js";import"./FArrowIcon-Bx2-MjZ4.js";import"./FTrashIcon-BUKZ78xj.js";import"./fGenerateUniqueId-BDtj4-Pu.js";const _=m=>{const t=window.document.querySelector(m);t!==null&&(t.className=l["f-function-notification-hidden"],setTimeout(()=>{t.classList.remove(l["f-function-notification-visible"])},1e3),setTimeout(()=>{t.parentNode&&t.parentNode.removeChild(t)},2e3))},Ct={title:"Function Elements/fNotification",component:o},i=()=>s.jsx(a,{onClick:()=>o({title:"Информация",body:"Это информационное уведомление.",variant:"info",timeSecClose:3,buttonClose:!0}),children:"Показать Info Notification"}),n=()=>s.jsx(a,{onClick:()=>o({title:"Успех",body:"Операция прошла успешно!",variant:"success",timeSecClose:3,buttonClose:!0}),children:"Показать Success Notification"}),e=()=>s.jsx(a,{onClick:()=>o({title:"Ошибка",body:"Произошла ошибка при выполнении операции.",variant:"error",timeSecClose:3,buttonClose:!0}),children:"Показать Error Notification"}),r=()=>s.jsx(a,{onClick:()=>o({title:"Внимание",body:"Проверьте введённые данные.",variant:"warning",timeSecClose:3,buttonClose:!0}),children:"Показать Warning Notification"}),c={render:()=>s.jsx(a,{onClick:async()=>{const m=await o({title:"Удаляемое уведомление",body:"Это уведомление исчезнет через 2 секунды",variant:"info",buttonClose:!1});setTimeout(()=>{_(m)},2e3)},children:"Показать и удалить уведомление"}),parameters:{docs:{source:{code:`
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
})}>\r
    Показать Info Notification\r
  </FButton>`,...(u=(f=i.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var d,N,C;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`() => <FButton onClick={() => fNotification({
  title: 'Успех',
  body: 'Операция прошла успешно!',
  variant: 'success',
  timeSecClose: 3,
  buttonClose: true
})}>\r
    Показать Success Notification\r
  </FButton>`,...(C=(N=n.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var b,y,S;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`() => <FButton onClick={() => fNotification({
  title: 'Ошибка',
  body: 'Произошла ошибка при выполнении операции.',
  variant: 'error',
  timeSecClose: 3,
  buttonClose: true
})}>\r
    Показать Error Notification\r
  </FButton>`,...(S=(y=e.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var F,g,v;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`() => <FButton onClick={() => fNotification({
  title: 'Внимание',
  body: 'Проверьте введённые данные.',
  variant: 'warning',
  timeSecClose: 3,
  buttonClose: true
})}>\r
    Показать Warning Notification\r
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
}`,...(h=(k=c.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};const bt=["Info","Success","Error","Warning","DeleteNotification"];export{c as DeleteNotification,e as Error,i as Info,n as Success,r as Warning,bt as __namedExportsOrder,Ct as default};
