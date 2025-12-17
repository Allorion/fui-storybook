import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{F as i}from"./FButton-C9wpY3zS.js";import"./FButtonFile-C-97Bcy4.js";import"./FTextField-9__gOwG2.js";import"./FStack-CaU3HVIe.js";import"./FGridRow-Cd5Ey8la.js";import"./FContainer-CBRWva3t.js";import"./FPaper-B4Vv-l4z.js";import"./FTableFooter-rhoceIn9.js";import"./index-DY-snNUy.js";import"./index-xMzmejw-.js";import"./FDialogFooter-DHGI5gTe.js";import"./FProgress-CEE1n2UA.js";import"./FPreloader-DSvNfYRU.js";import"./FCheckbox-CZMnA5mI.js";import"./FRadioButton-zWvdnqFb.js";import"./FPagination-CGjwqwi5.js";import"./FTimelineCard-rb4LP-m6.js";import"./FOpenImgFull-DSjId0kY.js";import"./FAccordion-DoHEzoJ5.js";import"./FInputFileForm-xXWG0l7e.js";import"./FFile-4snuIDkx.js";import"./FSelectItem-BBA9sko8.js";import"./FFullDateField-u765GOI1.js";import"./FSelectSearchDb-fqVQhS3d.js";import"./FTextArea-Pz35vTJd.js";import"./FCloseIcon-DSg2auC9.js";/* empty css                */import"./FTab-DVr93HwX.js";import"./FDropdownItem-CulPidhO.js";import"./FSearchBox-rNKAd81p.js";import"./FCarouselItem-CPrVz-TT.js";import"./FSkeleton-VCBpHstM.js";import"./FNavigateBarItem-CEkWKOcn.js";import"./FMenuLinks-Do6hEIXs.js";import"./FTooltip-DablkKvs.js";import"./FSearchableSelect-DVzczKgm.js";import{a as m}from"./index-B-lxVbXh.js";import"./index-yBjzXJbu.js";import"./FLoadIcon-BNGbbN3E.js";import"./index-fNjTmf9T.js";import"./FDialog-DLm4K6IN.js";import"./FArrowIcon-BBsChLs-.js";import"./FTrashIcon-CD7BhDB1.js";import"./v4-CtRu48qb.js";function o(t,r){const d=(r==null?void 0:r.format)??"iso",F=(r==null?void 0:r.locale)??"ru-RU";if(t==null||t==="")return d==="date"?void 0:"";const e=t instanceof Date?t:new Date(t);if(isNaN(e.getTime()))return d==="date"?void 0:"";const a=u=>String(u).padStart(2,"0");switch(d){case"iso":return e.toISOString().slice(0,10);case"ru":return e.toLocaleDateString("ru-RU");case"ru-datetime":{const u=e.toLocaleDateString("ru-RU"),w=`${a(e.getHours())}:${a(e.getMinutes())}:${a(e.getSeconds())}`;return`${u} ${w}`}case"time":return`${a(e.getHours())}:${a(e.getMinutes())}:${a(e.getSeconds())}`;case"date":return e;case"custom":return new Intl.DateTimeFormat(F,r==null?void 0:r.customOptions).format(e);default:return""}}const ut={title:"Function Elements/fConvertDate",component:o},c=()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[n.jsx(i,{onClick:()=>{const t=new Date;m("ISO формат:")(o(t,{format:"iso"}))},children:"ISO формат"}),n.jsx(i,{onClick:()=>{const t=new Date;m("Русский формат:")(o(t,{format:"ru"}))},children:"Русский формат"}),n.jsx(i,{onClick:()=>{const t=new Date;m("Дата и время:")(o(t,{format:"ru-datetime"}))},children:"Дата и время"}),n.jsx(i,{onClick:()=>{const t=new Date;m("Дата и время:")(o(t,{format:"date"}))},children:"Дата"}),n.jsx(i,{onClick:()=>{const t=new Date;m("Только время:")(o(t,{format:"time"}))},children:"Только время"})]}),s=()=>n.jsx(i,{onClick:()=>{const r=o(new Date,{format:"custom",locale:"ru-RU",customOptions:{weekday:"long",year:"numeric",month:"long",day:"numeric"}});m("Кастомный формат:")(r)},children:"Кастомный формат"});c.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"CustomFormat"};var l,p,f;c.parameters={...c.parameters,docs:{...(l=c.parameters)==null?void 0:l.docs,source:{originalSource:`() => <div style={{
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
    </FButton>`,...(g=(C=s.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};const lt=["Default","CustomFormat"];export{s as CustomFormat,c as Default,lt as __namedExportsOrder,ut as default};
