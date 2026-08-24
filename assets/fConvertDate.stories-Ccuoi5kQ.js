import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{F as i}from"./FButton-wCVY7eIs.js";import"./FButtonFile-D2S8Q-gm.js";import"./FTextField-Bfcy-agq.js";import"./FStack-Bjsadt8I.js";import"./FGridRow-DPVPfH0m.js";import"./FContainer-D9oNryDS.js";import"./FPaper-Dn0vIXiP.js";import"./FTableFooter-WMoZ_F9z.js";import"./index-B3j06Xw8.js";import"./index-D_ywfbVi.js";import"./FDialogFooter-BenDTTL6.js";import"./FProgress-CuUSEf8T.js";import"./FPreloader-Cq7UpuSU.js";import"./FCheckbox-CS1dTR8V.js";import"./FRadioButton-BLRA_gon.js";import"./FPagination-BKiZX-c7.js";import"./FTimelineCard-G_wv4YPr.js";import"./FOpenImgFull-BmEgMMd7.js";import"./FAccordion-DmXO5bBB.js";import"./FInputFileForm-CgROixNk.js";import"./FFile-BDXU6Ifc.js";import"./FSelectItem-C-_xf1fC.js";import"./FFullDateField-BAvOAkZw.js";import"./FSelectSearchDb-9J14UTwR.js";import"./FTextArea-D2Oj51U_.js";import"./FCloseIcon-DdRZhJBn.js";/* empty css                */import"./FTab-DB5xXUf7.js";import"./FDropdownItem-YzbPD2d9.js";import"./FSearchBox-6sTLn0W8.js";import"./FCarouselItem-DbNUFCsz.js";import"./FSkeleton-Bmt12B6C.js";import"./FNavigateBarItem-BtOG1U8l.js";import"./FMenuLinks-BBV8LcxR.js";import"./FTooltip-BJ8WMW_6.js";import"./FSearchableSelect-B2Q4P3qF.js";import{a as m}from"./index-B-lxVbXh.js";import"./FLoadIcon-CJgWVWfz.js";import"./index-DW0t0JKo.js";import"./FDialog-B0I80EdC.js";import"./FArrowIcon-e6BJPakw.js";import"./FTrashIcon-DpmD7QBY.js";import"./v4-CtRu48qb.js";function o(t,r){const d=(r==null?void 0:r.format)??"iso",F=(r==null?void 0:r.locale)??"ru-RU";if(t==null||t==="")return d==="date"?void 0:"";const e=t instanceof Date?t:new Date(t);if(isNaN(e.getTime()))return d==="date"?void 0:"";const a=u=>String(u).padStart(2,"0");switch(d){case"iso":return e.toISOString().slice(0,10);case"ru":return e.toLocaleDateString("ru-RU");case"ru-datetime":{const u=e.toLocaleDateString("ru-RU"),w=`${a(e.getHours())}:${a(e.getMinutes())}:${a(e.getSeconds())}`;return`${u} ${w}`}case"time":return`${a(e.getHours())}:${a(e.getMinutes())}:${a(e.getSeconds())}`;case"date":return e;case"custom":return new Intl.DateTimeFormat(F,r==null?void 0:r.customOptions).format(e);default:return""}}const dt={title:"Function Elements/fConvertDate",component:o},c=()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[n.jsx(i,{onClick:()=>{const t=new Date;m("ISO формат:")(o(t,{format:"iso"}))},children:"ISO формат"}),n.jsx(i,{onClick:()=>{const t=new Date;m("Русский формат:")(o(t,{format:"ru"}))},children:"Русский формат"}),n.jsx(i,{onClick:()=>{const t=new Date;m("Дата и время:")(o(t,{format:"ru-datetime"}))},children:"Дата и время"}),n.jsx(i,{onClick:()=>{const t=new Date;m("Дата и время:")(o(t,{format:"date"}))},children:"Дата"}),n.jsx(i,{onClick:()=>{const t=new Date;m("Только время:")(o(t,{format:"time"}))},children:"Только время"})]}),s=()=>n.jsx(i,{onClick:()=>{const r=o(new Date,{format:"custom",locale:"ru-RU",customOptions:{weekday:"long",year:"numeric",month:"long",day:"numeric"}});m("Кастомный формат:")(r)},children:"Кастомный формат"});c.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"CustomFormat"};var l,p,f;c.parameters={...c.parameters,docs:{...(l=c.parameters)==null?void 0:l.docs,source:{originalSource:`() => <div style={{
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
