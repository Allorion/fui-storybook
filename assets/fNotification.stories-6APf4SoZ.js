import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{F as a}from"./FButton-wCVY7eIs.js";import"./FButtonFile-D2S8Q-gm.js";import"./FTextField-Bfcy-agq.js";import"./FStack-Bjsadt8I.js";import"./FGridRow-DPVPfH0m.js";import"./FContainer-D9oNryDS.js";import"./FPaper-Dn0vIXiP.js";import"./FTableFooter-WMoZ_F9z.js";import"./index-B3j06Xw8.js";import"./index-D_ywfbVi.js";import"./FDialogFooter-BenDTTL6.js";import"./FProgress-CuUSEf8T.js";import"./FPreloader-Cq7UpuSU.js";import"./FCheckbox-CS1dTR8V.js";import"./FRadioButton-BLRA_gon.js";import"./FPagination-BKiZX-c7.js";import"./FTimelineCard-G_wv4YPr.js";import"./FOpenImgFull-BmEgMMd7.js";import"./FAccordion-DmXO5bBB.js";import"./FInputFileForm-CgROixNk.js";import"./FFile-BDXU6Ifc.js";import"./FSelectItem-C-_xf1fC.js";import"./FFullDateField-BAvOAkZw.js";import"./FSelectSearchDb-9J14UTwR.js";import"./FTextArea-D2Oj51U_.js";import"./FCloseIcon-DdRZhJBn.js";/* empty css                */import"./FTab-DB5xXUf7.js";import"./FDropdownItem-YzbPD2d9.js";import"./FSearchBox-6sTLn0W8.js";import"./FCarouselItem-DbNUFCsz.js";import"./FSkeleton-Bmt12B6C.js";import"./FNavigateBarItem-BtOG1U8l.js";import"./FMenuLinks-BBV8LcxR.js";import"./FTooltip-BJ8WMW_6.js";import"./FSearchableSelect-B2Q4P3qF.js";import{f as t}from"./fNotification-DiB-4WV0.js";import{f as v}from"./fNotificationDelete-B0P-aVAS.js";import"./FLoadIcon-CJgWVWfz.js";import"./index-DW0t0JKo.js";import"./FDialog-B0I80EdC.js";import"./FArrowIcon-e6BJPakw.js";import"./FTrashIcon-DpmD7QBY.js";import"./fGenerateUniqueId-BDtj4-Pu.js";const Nt={title:"Function Elements/fNotification",component:t},o=()=>r.jsx(a,{onClick:()=>t({title:"Информация",body:"Это информационное уведомление.",variant:"info",timeSecClose:3,buttonClose:!0}),children:"Показать Info Notification"}),i=()=>r.jsx(a,{onClick:()=>t({title:"Успех",body:"Операция прошла успешно!",variant:"success",timeSecClose:3,buttonClose:!0}),children:"Показать Success Notification"}),n=()=>r.jsx(a,{onClick:()=>t({title:"Ошибка",body:"Произошла ошибка при выполнении операции.",variant:"error",timeSecClose:3,buttonClose:!0}),children:"Показать Error Notification"}),e=()=>r.jsx(a,{onClick:()=>t({title:"Внимание",body:"Проверьте введённые данные.",variant:"warning",timeSecClose:3,buttonClose:!0}),children:"Показать Warning Notification"}),s={render:()=>r.jsx(a,{onClick:async()=>{const k=await t({title:"Удаляемое уведомление",body:"Это уведомление исчезнет через 2 секунды",variant:"info",buttonClose:!1});setTimeout(()=>{v(k)},2e3)},children:"Показать и удалить уведомление"}),parameters:{docs:{source:{code:`
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
