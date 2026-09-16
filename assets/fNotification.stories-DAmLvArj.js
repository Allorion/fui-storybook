import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{F as n}from"./FButton-WshjMl_j.js";import"./FButtonFile-ndsUyZDv.js";import"./FTextField-G4sFh9Uf.js";import"./FStack-Bjsadt8I.js";import"./FGridRow-DPVPfH0m.js";import"./FContainer-D9oNryDS.js";import"./FPaper-C96cUb7h.js";import"./FTableActions-QvNqcSYP.js";import"./index-B3j06Xw8.js";import"./index-D_ywfbVi.js";import"./FDialogFooter-BIStOcG8.js";import"./FProgress-B1PkuN98.js";import"./FPreloader-Cq7UpuSU.js";import"./FCheckbox-C2Fn5p4I.js";import"./FRadioButton-CCi8vwMO.js";import"./FPagination-DkwE8RRm.js";import"./FTimelineCard-G_wv4YPr.js";import"./FOpenImgFull-CxKvm-Cn.js";import"./FAccordion-B22xNC65.js";import"./FInputFileForm-CI_bUF6k.js";import"./FFile-ALKQqT-R.js";import"./FSelectItem-BAXWPI2S.js";import"./FFullDateField-bov5uJB9.js";import"./FSelectSearchDb-5nHlLFKL.js";import"./FTextArea-ChmymgEf.js";import"./FCloseIcon-DdRZhJBn.js";/* empty css                */import"./FTab-4EmqzD2P.js";import"./FDropdownItem-3TiL9ogE.js";import"./FSearchBox-fdjYAM33.js";import"./FCarouselItem-DbNUFCsz.js";import"./FSkeleton-iaIByH-O.js";import"./FNavigateBarItem-BtOG1U8l.js";import"./FMenuLinks-Cbdq1Y8F.js";import"./FTooltip-BJ8WMW_6.js";import"./FSearchableSelect-DPsz2xcQ.js";import"./FSegmentedControl-DhW7n95-.js";import{f as o}from"./fNotification-vnFpW_Yq.js";import{f as $}from"./fNotificationDelete-D_dBNHfQ.js";import"./FLoadIcon-B2O1XWAm.js";import"./index-DW0t0JKo.js";import"./FDialog-snE0jNMB.js";import"./FArrowIcon-e6BJPakw.js";import"./FTrashIcon-DpmD7QBY.js";import"./fGenerateUniqueId-BDtj4-Pu.js";const wt={title:"Function Elements/fNotification",component:o},i=()=>t.jsx(n,{onClick:()=>o({title:"Информация",body:"Это информационное уведомление с обновленным современным дизайном.",variant:"info",timeSecClose:4,buttonClose:!0}),children:"Показать Info Notification"}),e=()=>t.jsx(n,{onClick:()=>o({title:"Успешно сохранено",body:"Все изменения были успешно применены к вашей учетной записи.",variant:"success",timeSecClose:4,buttonClose:!0}),children:"Показать Success Notification"}),r=()=>t.jsx(n,{onClick:()=>o({title:"Ошибка подключения",body:`Не удалось установить связь с сервером.
Пожалуйста, проверьте интернет-соединение.`,variant:"error",timeSecClose:5,buttonClose:!0}),children:"Показать Error Notification"}),a=()=>t.jsx(n,{onClick:()=>o({title:"Внимание",body:"Срок действия вашей сессии истекает через несколько минут.",variant:"warning",timeSecClose:4,buttonClose:!0}),children:"Показать Warning Notification"}),s=()=>t.jsx("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:t.jsx(n,{onClick:()=>{["info","success","warning","error"].forEach((m,d)=>{setTimeout(()=>{o({title:`Уведомление #${d+1} (${m})`,body:"Тестовое сообщение для проверки стека, скролла и анимаций в контейнере.",variant:m,timeSecClose:8,buttonClose:!0})},d*200)})},children:"Запустить пачку уведомлений (тест скролла)"})}),c=()=>t.jsx(n,{onClick:()=>o({title:"Ошибки валидации формы",body:["- Водный объект №1 → Место водопользования №1 → Параметры водопользования №11 → Payment Year: Параметры водопользования должны относиться к периоду 2008–2017 гг.","- Водный объект №1 → Место водопользования №1 → Параметры водопользования №12 → Payment Year: Параметры водопользования должны относиться к периоду 2008–2017 гг.","- Водный объект №1 → Место водопользования №1 → Параметры водопользования №13 → Payment Year: Параметры водопользования должны относиться к периоду 2008–2017 гг."].join(`
`),variant:"error",timeSecClose:10,buttonClose:!0}),children:"Показать длинное уведомление"}),l=()=>t.jsx(n,{onClick:()=>o({title:"Множественные ошибки валидации",body:Array.from({length:15},(f,m)=>`- Строка ${m+1}: Поле "Параметры водопользования" содержит недопустимое значение для выбранного периода.`).join(`
`),variant:"error",timeSecClose:15,buttonClose:!0}),children:"Показать очень длинное уведомление (со скроллом)"}),p={render:()=>t.jsx(n,{onClick:async()=>{const f=await o({title:"Удаляемое уведомление",body:"Это уведомление будет автоматически удалено через вызов fNotificationDelete через 2 секунды.",variant:"info",buttonClose:!1});setTimeout(()=>{$(f)},2e3)},children:"Показать и удалить через fNotificationDelete"}),parameters:{docs:{source:{code:`
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
        `.trim()}}}};i.__docgenInfo={description:"",methods:[],displayName:"Info"};e.__docgenInfo={description:"",methods:[],displayName:"Success"};r.__docgenInfo={description:"",methods:[],displayName:"Error"};a.__docgenInfo={description:"",methods:[],displayName:"Warning"};s.__docgenInfo={description:"",methods:[],displayName:"MultipleNotifications"};c.__docgenInfo={description:"",methods:[],displayName:"LongNotification"};l.__docgenInfo={description:"",methods:[],displayName:"ScrollableLongNotification"};var u,N,C;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`() => <FButton onClick={() => fNotification({
  title: 'Информация',
  body: 'Это информационное уведомление с обновленным современным дизайном.',
  variant: 'info',
  timeSecClose: 4,
  buttonClose: true
})}>\r
    Показать Info Notification\r
  </FButton>`,...(C=(N=i.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var y,b,g;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`() => <FButton onClick={() => fNotification({
  title: 'Успешно сохранено',
  body: 'Все изменения были успешно применены к вашей учетной записи.',
  variant: 'success',
  timeSecClose: 4,
  buttonClose: true
})}>\r
    Показать Success Notification\r
  </FButton>`,...(g=(b=e.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var S,v,F;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`() => <FButton onClick={() => fNotification({
  title: 'Ошибка подключения',
  body: 'Не удалось установить связь с сервером.\\nПожалуйста, проверьте интернет-соединение.',
  variant: 'error',
  timeSecClose: 5,
  buttonClose: true
})}>\r
    Показать Error Notification\r
  </FButton>`,...(F=(v=r.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};var x,B,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`() => <FButton onClick={() => fNotification({
  title: 'Внимание',
  body: 'Срок действия вашей сессии истекает через несколько минут.',
  variant: 'warning',
  timeSecClose: 4,
  buttonClose: true
})}>\r
    Показать Warning Notification\r
  </FButton>`,...(h=(B=a.parameters)==null?void 0:B.docs)==null?void 0:h.source}}};var _,k,j;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`() => <div style={{
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
  </div>`,...(j=(k=s.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var D,I,w;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`() => <FButton onClick={() => fNotification({
  title: 'Ошибки валидации формы',
  body: ['- Водный объект №1 → Место водопользования №1 → Параметры водопользования №11 → Payment Year: Параметры водопользования должны относиться к периоду 2008–2017 гг.', '- Водный объект №1 → Место водопользования №1 → Параметры водопользования №12 → Payment Year: Параметры водопользования должны относиться к периоду 2008–2017 гг.', '- Водный объект №1 → Место водопользования №1 → Параметры водопользования №13 → Payment Year: Параметры водопользования должны относиться к периоду 2008–2017 гг.'].join('\\n'),
  variant: 'error',
  timeSecClose: 10,
  buttonClose: true
})}>\r
    Показать длинное уведомление\r
  </FButton>`,...(w=(I=c.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var E,W,L;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`() => <FButton onClick={() => fNotification({
  title: 'Множественные ошибки валидации',
  body: Array.from({
    length: 15
  }, (_, i) => \`- Строка \${i + 1}: Поле "Параметры водопользования" содержит недопустимое значение для выбранного периода.\`).join('\\n'),
  variant: 'error',
  timeSecClose: 15,
  buttonClose: true
})}>\r
    Показать очень длинное уведомление (со скроллом)\r
  </FButton>`,...(L=(W=l.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var P,T,Y;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(Y=(T=p.parameters)==null?void 0:T.docs)==null?void 0:Y.source}}};const Et=["Info","Success","Error","Warning","MultipleNotifications","LongNotification","ScrollableLongNotification","DeleteNotification"];export{p as DeleteNotification,r as Error,i as Info,c as LongNotification,s as MultipleNotifications,l as ScrollableLongNotification,e as Success,a as Warning,Et as __namedExportsOrder,wt as default};
