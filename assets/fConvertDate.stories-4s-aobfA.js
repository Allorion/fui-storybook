import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{F as i}from"./FButton-DQOEJPUH.js";import"./FButtonFile-Cc8ubo-m.js";import"./FTextField-DSrbz1g8.js";import"./FStack-Bjsadt8I.js";import"./FGridRow-DPVPfH0m.js";import"./FContainer-D9oNryDS.js";import"./FPaper-ByA2FQvy.js";import"./FTableFooter-EbsKXXEI.js";import"./index-DEgj3Fem.js";import"./index-BknSE3li.js";import"./FDialogFooter-EZrNysQM.js";import"./FProgress-CuUSEf8T.js";import"./FPreloader-C0DO9d3w.js";import"./FCheckbox-CvjAvqQ6.js";import"./FRadioButton-CWco8Ir1.js";import"./FPagination-Cudve55R.js";import"./FTimelineCard-G_wv4YPr.js";import"./FOpenImgFull-BzaYDndu.js";import"./FAccordion-CUm2A8fo.js";import"./FInputFileForm-KMotnIpw.js";import"./FFile-BHJQGV29.js";import"./FSelectItem-BnNI1hqM.js";import"./FFullDateField-_mtt4yT5.js";import"./FSelectSearchDb-CtdF7gtg.js";import"./FTextArea-9qVfGzxf.js";import"./FCloseIcon-Dr7AIYCl.js";/* empty css                */import"./FTab-DHwok_rz.js";import"./FDropdownItem-D17eYKAm.js";import"./FSearchBox-Czmsapd1.js";import"./FCarouselItem-DRfQet_0.js";import"./FSkeleton-qmKtpPTy.js";import"./FNavigateBarItem-CQ1yOoQk.js";import"./FMenuLinks-CHiLRQZa.js";import"./FTooltip-CCrWwCPn.js";import"./FSearchableSelect-BZIN-NqS.js";import{a as m}from"./index-B-lxVbXh.js";import"./FLoadIcon-1-Td29NS.js";import"./index-DM3MU96Y.js";import"./FDialog-DPCiHy6F.js";import"./FArrowIcon-C21crw0H.js";import"./FTrashIcon-Da5Dd79F.js";import"./v4-CtRu48qb.js";function o(t,r){const d=(r==null?void 0:r.format)??"iso",F=(r==null?void 0:r.locale)??"ru-RU";if(t==null||t==="")return d==="date"?void 0:"";const e=t instanceof Date?t:new Date(t);if(isNaN(e.getTime()))return d==="date"?void 0:"";const a=u=>String(u).padStart(2,"0");switch(d){case"iso":return e.toISOString().slice(0,10);case"ru":return e.toLocaleDateString("ru-RU");case"ru-datetime":{const u=e.toLocaleDateString("ru-RU"),w=`${a(e.getHours())}:${a(e.getMinutes())}:${a(e.getSeconds())}`;return`${u} ${w}`}case"time":return`${a(e.getHours())}:${a(e.getMinutes())}:${a(e.getSeconds())}`;case"date":return e;case"custom":return new Intl.DateTimeFormat(F,r==null?void 0:r.customOptions).format(e);default:return""}}const dt={title:"Function Elements/fConvertDate",component:o},c=()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[n.jsx(i,{onClick:()=>{const t=new Date;m("ISO формат:")(o(t,{format:"iso"}))},children:"ISO формат"}),n.jsx(i,{onClick:()=>{const t=new Date;m("Русский формат:")(o(t,{format:"ru"}))},children:"Русский формат"}),n.jsx(i,{onClick:()=>{const t=new Date;m("Дата и время:")(o(t,{format:"ru-datetime"}))},children:"Дата и время"}),n.jsx(i,{onClick:()=>{const t=new Date;m("Дата и время:")(o(t,{format:"date"}))},children:"Дата"}),n.jsx(i,{onClick:()=>{const t=new Date;m("Только время:")(o(t,{format:"time"}))},children:"Только время"})]}),s=()=>n.jsx(i,{onClick:()=>{const r=o(new Date,{format:"custom",locale:"ru-RU",customOptions:{weekday:"long",year:"numeric",month:"long",day:"numeric"}});m("Кастомный формат:")(r)},children:"Кастомный формат"});c.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"CustomFormat"};var l,p,f;c.parameters={...c.parameters,docs:{...(l=c.parameters)==null?void 0:l.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
}}>\r
        <FButton onClick={() => {
    const date = new Date();
    action('ISO формат:')(fConvertDate(date, {
      format: 'iso'
    }));
  }}>\r
            ISO формат\r
        </FButton>\r
\r
        <FButton onClick={() => {
    const date = new Date();
    action('Русский формат:')(fConvertDate(date, {
      format: 'ru'
    }));
  }}>\r
            Русский формат\r
        </FButton>\r
\r
        <FButton onClick={() => {
    const date = new Date();
    action('Дата и время:')(fConvertDate(date, {
      format: 'ru-datetime'
    }));
  }}>\r
            Дата и время\r
        </FButton>\r
\r
        <FButton onClick={() => {
    const date = new Date();
    action('Дата и время:')(fConvertDate(date, {
      format: 'date'
    }));
  }}>\r
            Дата\r
        </FButton>\r
\r
        <FButton onClick={() => {
    const date = new Date();
    action('Только время:')(fConvertDate(date, {
      format: 'time'
    }));
  }}>\r
            Только время\r
        </FButton>\r
    </div>`,...(f=(p=c.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var D,C,g;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`() => <FButton onClick={() => {
  const date = new Date();
  const result = fConvertDate(date, {
    format: 'custom',
    locale: 'ru-RU',
    customOptions: {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
  });
  action('Кастомный формат:')(result);
}}>\r
        Кастомный формат\r
    </FButton>`,...(g=(C=s.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};const ut=["Default","CustomFormat"];export{s as CustomFormat,c as Default,ut as __namedExportsOrder,dt as default};
