import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{F as i}from"./FButton-CwfpvuGP.js";import"./FButtonFile-ChwVCasa.js";import"./FTextField-CQUFWKWA.js";import"./FStack-Bs-EBUEz.js";import"./FGridRow-CsF9MpPt.js";import"./FContainer-BatpkT-f.js";import"./FPaper-BFgg04dY.js";import"./FTableFooter-BWmkWvIu.js";import"./index-DY-snNUy.js";import"./index-xMzmejw-.js";import"./FDialogFooter-Bfbpy8Fv.js";import"./FProgress-DRPVoeAu.js";import"./FPreloader-B_LCaiJ_.js";import"./FCheckbox-NPMfrU2t.js";import"./FRadioButton-CiO-cZog.js";import"./FPagination-CqlZsmTv.js";import"./FTimelineCard-rb4LP-m6.js";import"./FOpenImgFull-Dh9z-cRV.js";import"./FAccordion-Cg__21gJ.js";import"./FInputFileForm-CUODYS1f.js";import"./FFile-BtYqhg3U.js";import"./FSelectItem-CJWtApxf.js";import"./FFullDateField-C0grZK2T.js";import"./FSelectSearchDb-Af25Ppp2.js";import"./FTextArea-D4UTr8NG.js";import"./FCloseIcon-ZR3e0z_J.js";/* empty css                */import"./FTab-CvAzYgoL.js";import"./FDropdownItem-s4asPjlH.js";import"./FSearchBox-DthhNhSx.js";import"./FCarouselItem-BzHKgllY.js";import"./FSkeleton-pmLFDKm2.js";import"./FNavigateBarItem-C_SaROZY.js";import"./FMenuLinks-D7zPlJ_g.js";import"./FTooltip-COBUcM1Z.js";import{a as m}from"./index-B-lxVbXh.js";import"./index-yBjzXJbu.js";import"./FLoadIcon-BM1DdYSY.js";import"./index-fNjTmf9T.js";import"./FDialog-DLm4K6IN.js";import"./FArrowIcon-DpFSaEY1.js";import"./FTrashIcon-Cxn1SHc6.js";import"./v4-CtRu48qb.js";function r(t,n){const d=(n==null?void 0:n.format)??"iso",F=(n==null?void 0:n.locale)??"ru-RU";if(t==null||t==="")return d==="date"?void 0:"";const e=t instanceof Date?t:new Date(t);if(isNaN(e.getTime()))return d==="date"?void 0:"";const a=u=>String(u).padStart(2,"0");switch(d){case"iso":return e.toISOString().slice(0,10);case"ru":return e.toLocaleDateString("ru-RU");case"ru-datetime":{const u=e.toLocaleDateString("ru-RU"),w=`${a(e.getHours())}:${a(e.getMinutes())}:${a(e.getSeconds())}`;return`${u} ${w}`}case"time":return`${a(e.getHours())}:${a(e.getMinutes())}:${a(e.getSeconds())}`;case"date":return e;case"custom":return new Intl.DateTimeFormat(F,n==null?void 0:n.customOptions).format(e);default:return""}}const dt={title:"Function Elements/fConvertDate",component:r},c=()=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[o.jsx(i,{onClick:()=>{const t=new Date;m("ISO формат:")(r(t,{format:"iso"}))},children:"ISO формат"}),o.jsx(i,{onClick:()=>{const t=new Date;m("Русский формат:")(r(t,{format:"ru"}))},children:"Русский формат"}),o.jsx(i,{onClick:()=>{const t=new Date;m("Дата и время:")(r(t,{format:"ru-datetime"}))},children:"Дата и время"}),o.jsx(i,{onClick:()=>{const t=new Date;m("Дата и время:")(r(t,{format:"date"}))},children:"Дата"}),o.jsx(i,{onClick:()=>{const t=new Date;m("Только время:")(r(t,{format:"time"}))},children:"Только время"})]}),s=()=>o.jsx(i,{onClick:()=>{const n=r(new Date,{format:"custom",locale:"ru-RU",customOptions:{weekday:"long",year:"numeric",month:"long",day:"numeric"}});m("Кастомный формат:")(n)},children:"Кастомный формат"});c.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"CustomFormat"};var l,p,f;c.parameters={...c.parameters,docs:{...(l=c.parameters)==null?void 0:l.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
}}>
        <FButton onClick={() => {
    const date = new Date();
    action('ISO формат:')(fConvertDate(date, {
      format: 'iso'
    }));
  }}>
            ISO формат
        </FButton>

        <FButton onClick={() => {
    const date = new Date();
    action('Русский формат:')(fConvertDate(date, {
      format: 'ru'
    }));
  }}>
            Русский формат
        </FButton>

        <FButton onClick={() => {
    const date = new Date();
    action('Дата и время:')(fConvertDate(date, {
      format: 'ru-datetime'
    }));
  }}>
            Дата и время
        </FButton>

        <FButton onClick={() => {
    const date = new Date();
    action('Дата и время:')(fConvertDate(date, {
      format: 'date'
    }));
  }}>
            Дата
        </FButton>

        <FButton onClick={() => {
    const date = new Date();
    action('Только время:')(fConvertDate(date, {
      format: 'time'
    }));
  }}>
            Только время
        </FButton>
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
}}>
        Кастомный формат
    </FButton>`,...(g=(C=s.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};const ut=["Default","CustomFormat"];export{s as CustomFormat,c as Default,ut as __namedExportsOrder,dt as default};
