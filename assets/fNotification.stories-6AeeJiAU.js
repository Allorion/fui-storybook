import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{F as i}from"./FButton-Bm7SLZDh.js";import"./FButtonFile-2hnyxxUz.js";import"./FTextField-G4sFh9Uf.js";import"./FStack-Bjsadt8I.js";import"./FGridRow-DPVPfH0m.js";import"./FContainer-D9oNryDS.js";import"./FPaper-Dw44gAGj.js";import"./FTableFooter-V7VQ4Rth.js";import"./index-B3j06Xw8.js";import"./index-D_ywfbVi.js";import"./FDialogFooter-DEKgFpT2.js";import"./FProgress-B1PkuN98.js";import"./FPreloader-Cq7UpuSU.js";import"./FCheckbox-vG_g993e.js";import"./FRadioButton-CCi8vwMO.js";import"./FPagination-DkwE8RRm.js";import"./FTimelineCard-G_wv4YPr.js";import"./FOpenImgFull-CjVGNnQc.js";import"./FAccordion-DQ536p-c.js";import"./FInputFileForm-CI_bUF6k.js";import"./FFile-ALKQqT-R.js";import"./FSelectItem-BAXWPI2S.js";import"./FFullDateField-bov5uJB9.js";import"./FSelectSearchDb-5nHlLFKL.js";import"./FTextArea-ChmymgEf.js";import"./FCloseIcon-DdRZhJBn.js";/* empty css                */import"./FTab-CVUcQ5FF.js";import"./FDropdownItem-BJkfltKt.js";import"./FSearchBox-BhywZClE.js";import"./FCarouselItem-DbNUFCsz.js";import"./FSkeleton-iaIByH-O.js";import"./FNavigateBarItem-BtOG1U8l.js";import"./FMenuLinks-Cbdq1Y8F.js";import"./FTooltip-BJ8WMW_6.js";import"./FSearchableSelect-DPsz2xcQ.js";import"./FSegmentedControl-DhW7n95-.js";import{f as o}from"./fNotification-CPg0E4RY.js";import{f as E}from"./fNotificationDelete-nRxTapdC.js";import"./FLoadIcon-B2O1XWAm.js";import"./index-DW0t0JKo.js";import"./FDialog-Cl6TNCBH.js";import"./FArrowIcon-e6BJPakw.js";import"./FTrashIcon-DpmD7QBY.js";import"./fGenerateUniqueId-BDtj4-Pu.js";const Ft={title:"Function Elements/fNotification",component:o},n=()=>t.jsx(i,{onClick:()=>o({title:"Информация",body:"Это информационное уведомление с обновленным современным дизайном.",variant:"info",timeSecClose:4,buttonClose:!0}),children:"Показать Info Notification"}),e=()=>t.jsx(i,{onClick:()=>o({title:"Успешно сохранено",body:"Все изменения были успешно применены к вашей учетной записи.",variant:"success",timeSecClose:4,buttonClose:!0}),children:"Показать Success Notification"}),r=()=>t.jsx(i,{onClick:()=>o({title:"Ошибка подключения",body:`Не удалось установить связь с сервером.
Пожалуйста, проверьте интернет-соединение.`,variant:"error",timeSecClose:5,buttonClose:!0}),children:"Показать Error Notification"}),a=()=>t.jsx(i,{onClick:()=>o({title:"Внимание",body:"Срок действия вашей сессии истекает через несколько минут.",variant:"warning",timeSecClose:4,buttonClose:!0}),children:"Показать Warning Notification"}),s=()=>t.jsx("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:t.jsx(i,{onClick:()=>{["info","success","warning","error"].forEach((l,p)=>{setTimeout(()=>{o({title:`Уведомление #${p+1} (${l})`,body:"Тестовое сообщение для проверки стека, скролла и анимаций в контейнере.",variant:l,timeSecClose:8,buttonClose:!0})},p*200)})},children:"Запустить пачку уведомлений (тест скролла)"})}),c={render:()=>t.jsx(i,{onClick:async()=>{const m=await o({title:"Удаляемое уведомление",body:"Это уведомление будет автоматически удалено через вызов fNotificationDelete через 2 секунды.",variant:"info",buttonClose:!1});setTimeout(()=>{E(m)},2e3)},children:"Показать и удалить через fNotificationDelete"}),parameters:{docs:{source:{code:`
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
        `.trim()}}}};n.__docgenInfo={description:"",methods:[],displayName:"Info"};e.__docgenInfo={description:"",methods:[],displayName:"Success"};r.__docgenInfo={description:"",methods:[],displayName:"Error"};a.__docgenInfo={description:"",methods:[],displayName:"Warning"};s.__docgenInfo={description:"",methods:[],displayName:"MultipleNotifications"};var f,u,d;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`() => <FButton onClick={() => fNotification({
  title: 'Информация',
  body: 'Это информационное уведомление с обновленным современным дизайном.',
  variant: 'info',
  timeSecClose: 4,
  buttonClose: true
})}>\r
    Показать Info Notification\r
  </FButton>`,...(d=(u=n.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var N,C,b;e.parameters={...e.parameters,docs:{...(N=e.parameters)==null?void 0:N.docs,source:{originalSource:`() => <FButton onClick={() => fNotification({
  title: 'Успешно сохранено',
  body: 'Все изменения были успешно применены к вашей учетной записи.',
  variant: 'success',
  timeSecClose: 4,
  buttonClose: true
})}>\r
    Показать Success Notification\r
  </FButton>`,...(b=(C=e.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var y,g,v;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`() => <FButton onClick={() => fNotification({
  title: 'Ошибка подключения',
  body: 'Не удалось установить связь с сервером.\\nПожалуйста, проверьте интернет-соединение.',
  variant: 'error',
  timeSecClose: 5,
  buttonClose: true
})}>\r
    Показать Error Notification\r
  </FButton>`,...(v=(g=r.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var S,x,F;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`() => <FButton onClick={() => fNotification({
  title: 'Внимание',
  body: 'Срок действия вашей сессии истекает через несколько минут.',
  variant: 'warning',
  timeSecClose: 4,
  buttonClose: true
})}>\r
    Показать Warning Notification\r
  </FButton>`,...(F=(x=a.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};var B,h,k;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  gap: '12px',
  flexWrap: 'wrap'
}}>\r
    <FButton onClick={() => {
    const variants: ('info' | 'success' | 'warning' | 'error')[] = ['info', 'success', 'warning', 'error'];
    variants.forEach((v, index) => {
      setTimeout(() => {
        fNotification({
          title: \`Уведомление #\${index + 1} (\${v})\`,
          body: \`Тестовое сообщение для проверки стека, скролла и анимаций в контейнере.\`,
          variant: v,
          timeSecClose: 8,
          buttonClose: true
        });
      }, index * 200);
    });
  }}>\r
      Запустить пачку уведомлений (тест скролла)\r
    </FButton>\r
  </div>`,...(k=(h=s.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var D,_,w;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <FButton onClick={async () => {
    const id = await fNotification({
      title: 'Удаляемое уведомление',
      body: 'Это уведомление будет автоматически удалено через вызов fNotificationDelete через 2 секунды.',
      variant: 'info',
      buttonClose: false
    });
    setTimeout(() => {
      fNotificationDelete(id);
    }, 2000);
  }}>\r
      Показать и удалить через fNotificationDelete\r
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
}`,...(w=(_=c.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};const Bt=["Info","Success","Error","Warning","MultipleNotifications","DeleteNotification"];export{c as DeleteNotification,r as Error,n as Info,s as MultipleNotifications,e as Success,a as Warning,Bt as __namedExportsOrder,Ft as default};
