import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import{F as u}from"./FButton-CwfpvuGP.js";import"./FButtonFile-ChwVCasa.js";import"./FTextField-CQUFWKWA.js";import"./FStack-Bs-EBUEz.js";import"./FGridRow-CsF9MpPt.js";import"./FContainer-BatpkT-f.js";import"./FPaper-BFgg04dY.js";import"./FTableFooter-BWmkWvIu.js";import"./index-DY-snNUy.js";import"./index-xMzmejw-.js";import"./FDialogFooter-Bfbpy8Fv.js";import"./FProgress-DRPVoeAu.js";import"./FPreloader-B_LCaiJ_.js";import"./FCheckbox-NPMfrU2t.js";import"./FRadioButton-CiO-cZog.js";import"./FPagination-CqlZsmTv.js";import"./FTimelineCard-rb4LP-m6.js";import"./FOpenImgFull-Dh9z-cRV.js";import"./FAccordion-Cg__21gJ.js";import"./FInputFileForm-CUODYS1f.js";import"./FFile-BtYqhg3U.js";import"./FSelectItem-CJWtApxf.js";import"./FFullDateField-C0grZK2T.js";import"./FSelectSearchDb-N4Kgdsi6.js";import"./FTextArea-D4UTr8NG.js";import"./FCloseIcon-ZR3e0z_J.js";/* empty css                */import"./FTab-CvAzYgoL.js";import"./FDropdownItem-Bl-qhMDP.js";import"./FSearchBox-DO4X67c3.js";import"./FCarouselItem-BzHKgllY.js";import"./FSkeleton-pmLFDKm2.js";import"./FNavigateBarItem-C_SaROZY.js";import"./FMenuLinks-D7zPlJ_g.js";import"./FTooltip-COBUcM1Z.js";import{a}from"./index-B-lxVbXh.js";import"./index-yBjzXJbu.js";import"./FLoadIcon-BM1DdYSY.js";import"./index-fNjTmf9T.js";import"./FDialog-DLm4K6IN.js";import"./FArrowIcon-DpFSaEY1.js";import"./FTrashIcon-Cxn1SHc6.js";import"./v4-CtRu48qb.js";function b(m,t){t==null&&(t=2);const r=Math.pow(10,t),n=Math.round(m*r)/r,e=n.toString(),d=e.indexOf(".");if(d===-1)return n;const l=e.slice(d+1);return l.length<=t?n:l[t]==="5"&&+l[t-1]%2!==0?+(n+Math.pow(10,-t)).toFixed(t):+n.toFixed(t)}const o=(m,t)=>{if(typeof m!="number"||isNaN(m))return t!=null&&t.returnNumber?NaN:"";let r=m;if(t!=null&&t.useBankRound){const e=t.bankRoundDecimalPlaces??2;r=b(r,e)}if(t!=null&&t.returnNumber){if(t.maximumFractionDigits!==void 0||t.minimumFractionDigits!==void 0){const e=t.minimumFractionDigits??0,d=t.maximumFractionDigits??20;r=Number(r.toLocaleString("en-US",{minimumFractionDigits:e,maximumFractionDigits:d,useGrouping:!1}))}return r}const n={};return(t==null?void 0:t.maximumFractionDigits)!==void 0&&(n.maximumFractionDigits=t.maximumFractionDigits),(t==null?void 0:t.minimumFractionDigits)!==void 0&&(n.minimumFractionDigits=t.minimumFractionDigits),new Intl.NumberFormat("ru-RU",n).format(r)},lt={title:"Function Elements/fFormatRuNumber",component:o},c=()=>i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[i.jsx(u,{onClick:()=>{a("Базовое форматирование")(o(1234.567))},children:"Базовое форматирование"}),i.jsx(u,{onClick:()=>{a("С банковским округлением")(o(1234.567,{useBankRound:!0}))},children:"С банковским округлением"}),i.jsx(u,{onClick:()=>{a("Настройка десятичных знаков")(o(1234.567,{maximumFractionDigits:2}))},children:"Ограничение десятичных знаков"})]}),s=()=>i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[i.jsx(u,{onClick:()=>{a("Возврат числа")(o(1234.567,{useBankRound:!0,returnNumber:!0}))},children:"Возврат числа"}),i.jsx(u,{onClick:()=>{a("Минимальное количество знаков")(o(1234.5,{minimumFractionDigits:3}))},children:"Минимум 3 знака после запятой"}),i.jsx(u,{onClick:()=>{a("Некорректные данные")(o(NaN))},children:"Обработка некорректных данных"})]});c.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"AdvancedOptions"};var f,p,F;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
}}>
    <FButton onClick={() => {
    action('Базовое форматирование')(fFormatRuNumber(1234.567));
  }}>
      Базовое форматирование
    </FButton>

    <FButton onClick={() => {
    action('С банковским округлением')(fFormatRuNumber(1234.567, {
      useBankRound: true
    }));
  }}>
      С банковским округлением
    </FButton>

    <FButton onClick={() => {
    action('Настройка десятичных знаков')(fFormatRuNumber(1234.567, {
      maximumFractionDigits: 2
    }));
  }}>
      Ограничение десятичных знаков
    </FButton>
  </div>`,...(F=(p=c.parameters)==null?void 0:p.docs)==null?void 0:F.source}}};var x,g,D;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
}}>
    <FButton onClick={() => {
    const number = 1234.567;
    action('Возврат числа')(fFormatRuNumber(number, {
      useBankRound: true,
      returnNumber: true
    }));
  }}>
      Возврат числа
    </FButton>

    <FButton onClick={() => {
    const number = 1234.5;
    action('Минимальное количество знаков')(fFormatRuNumber(number, {
      minimumFractionDigits: 3
    }));
  }}>
      Минимум 3 знака после запятой
    </FButton>

    <FButton onClick={() => {
    action('Некорректные данные')(fFormatRuNumber(NaN));
  }}>
      Обработка некорректных данных
    </FButton>
  </div>`,...(D=(g=s.parameters)==null?void 0:g.docs)==null?void 0:D.source}}};const ft=["Default","AdvancedOptions"];export{s as AdvancedOptions,c as Default,ft as __namedExportsOrder,lt as default};
