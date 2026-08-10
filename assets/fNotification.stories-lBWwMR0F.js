import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{F as a}from"./FButton-DQOEJPUH.js";import"./FButtonFile-Cc8ubo-m.js";import"./FTextField-DSrbz1g8.js";import"./FStack-Bjsadt8I.js";import"./FGridRow-DPVPfH0m.js";import"./FContainer-D9oNryDS.js";import"./FPaper-ByA2FQvy.js";import"./FTableFooter-CoEhsmhU.js";import"./index-DEgj3Fem.js";import"./index-BknSE3li.js";import"./FDialogFooter-EZrNysQM.js";import"./FProgress-CuUSEf8T.js";import"./FPreloader-C0DO9d3w.js";import"./FCheckbox-CvjAvqQ6.js";import"./FRadioButton-CWco8Ir1.js";import"./FPagination-Bh5ADW89.js";import"./FTimelineCard-G_wv4YPr.js";import"./FOpenImgFull-BzaYDndu.js";import"./FAccordion-CUm2A8fo.js";import"./FInputFileForm-KMotnIpw.js";import"./FFile-BHJQGV29.js";import"./FSelectItem-BnNI1hqM.js";import"./FFullDateField-_mtt4yT5.js";import"./FSelectSearchDb-CtdF7gtg.js";import"./FTextArea-9qVfGzxf.js";import"./FCloseIcon-Dr7AIYCl.js";/* empty css                */import"./FTab-DHwok_rz.js";import"./FDropdownItem-D17eYKAm.js";import"./FSearchBox-Czmsapd1.js";import"./FCarouselItem-DRfQet_0.js";import"./FSkeleton-qmKtpPTy.js";import"./FNavigateBarItem-CQ1yOoQk.js";import"./FMenuLinks-CHiLRQZa.js";import"./FTooltip-CCrWwCPn.js";import"./FSearchableSelect-DXwJBXJB.js";import{f as t}from"./fNotification-DiB-4WV0.js";import{f as v}from"./fNotificationDelete-B0P-aVAS.js";import"./FLoadIcon-1-Td29NS.js";import"./index-DM3MU96Y.js";import"./FDialog-DPCiHy6F.js";import"./FArrowIcon-C21crw0H.js";import"./FTrashIcon-Da5Dd79F.js";import"./fGenerateUniqueId-BDtj4-Pu.js";const Nt={title:"Function Elements/fNotification",component:t},o=()=>r.jsx(a,{onClick:()=>t({title:"Информация",body:"Это информационное уведомление.",variant:"info",timeSecClose:3,buttonClose:!0}),children:"Показать Info Notification"}),i=()=>r.jsx(a,{onClick:()=>t({title:"Успех",body:"Операция прошла успешно!",variant:"success",timeSecClose:3,buttonClose:!0}),children:"Показать Success Notification"}),n=()=>r.jsx(a,{onClick:()=>t({title:"Ошибка",body:"Произошла ошибка при выполнении операции.",variant:"error",timeSecClose:3,buttonClose:!0}),children:"Показать Error Notification"}),e=()=>r.jsx(a,{onClick:()=>t({title:"Внимание",body:"Проверьте введённые данные.",variant:"warning",timeSecClose:3,buttonClose:!0}),children:"Показать Warning Notification"}),s={render:()=>r.jsx(a,{onClick:async()=>{const k=await t({title:"Удаляемое уведомление",body:"Это уведомление исчезнет через 2 секунды",variant:"info",buttonClose:!1});setTimeout(()=>{v(k)},2e3)},children:"Показать и удалить уведомление"}),parameters:{docs:{source:{code:`
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
        `.trim()}}}};o.__docgenInfo={description:"",methods:[],displayName:"Info"};i.__docgenInfo={description:"",methods:[],displayName:"Success"};n.__docgenInfo={description:"",methods:[],displayName:"Error"};e.__docgenInfo={description:"",methods:[],displayName:"Warning"};var c,m,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`() => <FButton onClick={() => fNotification({
  title: 'Информация',
  body: 'Это информационное уведомление.',
  variant: 'info',
  timeSecClose: 3,
  buttonClose: true
})}>\r
    Показать Info Notification\r
  </FButton>`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var l,f,u;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`() => <FButton onClick={() => fNotification({
  title: 'Успех',
  body: 'Операция прошла успешно!',
  variant: 'success',
  timeSecClose: 3,
  buttonClose: true
})}>\r
    Показать Success Notification\r
  </FButton>`,...(u=(f=i.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var d,C,N;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`() => <FButton onClick={() => fNotification({
  title: 'Ошибка',
  body: 'Произошла ошибка при выполнении операции.',
  variant: 'error',
  timeSecClose: 3,
  buttonClose: true
})}>\r
    Показать Error Notification\r
  </FButton>`,...(N=(C=n.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var b,y,S;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`() => <FButton onClick={() => fNotification({
  title: 'Внимание',
  body: 'Проверьте введённые данные.',
  variant: 'warning',
  timeSecClose: 3,
  buttonClose: true
})}>\r
    Показать Warning Notification\r
  </FButton>`,...(S=(y=e.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var F,g,B;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(B=(g=s.parameters)==null?void 0:g.docs)==null?void 0:B.source}}};const bt=["Info","Success","Error","Warning","DeleteNotification"];export{s as DeleteNotification,n as Error,o as Info,i as Success,e as Warning,bt as __namedExportsOrder,Nt as default};
