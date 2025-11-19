import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{F as c}from"./FButton-CdBoQZas.js";import"./FButtonFile-B1-dGwQ8.js";import"./FTextField-CQUFWKWA.js";import"./FStack-Bs-EBUEz.js";import"./FGridRow-CsF9MpPt.js";import"./FContainer-BatpkT-f.js";import"./FPaper-BFgg04dY.js";import"./FTableFooter-BWmkWvIu.js";import"./index-DY-snNUy.js";import"./index-xMzmejw-.js";import"./FDialogFooter-Bfbpy8Fv.js";import"./FProgress-DRPVoeAu.js";import"./FPreloader-B_LCaiJ_.js";import"./FCheckbox-NPMfrU2t.js";import"./FRadioButton-CiO-cZog.js";import"./FPagination-CqlZsmTv.js";import"./FTimelineCard-rb4LP-m6.js";import"./FOpenImgFull-Dh9z-cRV.js";import"./FAccordion-Cg__21gJ.js";import"./FInputFileForm-CUODYS1f.js";import"./FFile-BtYqhg3U.js";import"./FSelectItem-CJWtApxf.js";import"./FFullDateField-C0grZK2T.js";import"./FSelectSearchDb-Af25Ppp2.js";import"./FTextArea-D4UTr8NG.js";import"./FCloseIcon-ZR3e0z_J.js";/* empty css                */import"./FTab-CvAzYgoL.js";import"./FDropdownItem-C_UcoqQE.js";import"./FSearchBox-D0FHvEmT.js";import"./FCarouselItem-BzHKgllY.js";import"./FSkeleton-pmLFDKm2.js";import"./FNavigateBarItem-C_SaROZY.js";import"./FMenuLinks-BmGvr1Qo.js";import"./FTooltip-COBUcM1Z.js";import{a as s}from"./index-B-lxVbXh.js";import"./index-yBjzXJbu.js";import"./FLoadIcon-BM1DdYSY.js";import"./index-fNjTmf9T.js";import"./FDialog-DLm4K6IN.js";import"./FArrowIcon-DpFSaEY1.js";import"./FTrashIcon-Cxn1SHc6.js";import"./v4-CtRu48qb.js";function _(m,t=2){const r=String(m).trim();if(!/^[-+]?\d+(\.\d+)?$/.test(r))return NaN;if(t<0)return NaN;const u=r.startsWith("-")?-1:1,l=r.replace(/^[-+]/,""),[a,d=""]=l.split(".");if(d.length<=t)return Number(r);const f=t,x=Number(d[f]),D=d.slice(f+1),C=D.length>0&&/[1-9]/.test(D);let g;f>0?g=Number(d[f-1]):g=a.length>0?Number(a[a.length-1]):0;const j=u<0;let b=0;(x>5||x===5&&(C||j||g%2===1))&&(b=1);let n=d.slice(0,f).padEnd(t,"0"),p=a||"0";if(b)if(t===0)p=(Number(p)+1).toString();else{let i=t-1;for(;i>=0;){if(n[i]!=="9"){n=n.slice(0,i)+(Number(n[i])+1)+n.slice(i+1);break}n=n.slice(0,i)+"0"+n.slice(i+1),i--}i<0&&(p=(Number(p)+1).toString(),n="0".repeat(t))}const S=p+(t>0?"."+n:"");return u*Number(S)}const o=(m,t)=>{if(typeof m!="number"||isNaN(m))return t!=null&&t.returnNumber?NaN:"";let r=m;if(t!=null&&t.useBankRound){const l=t.bankRoundDecimalPlaces??2;r=_(r,l)}if(t!=null&&t.returnNumber){if(t.maximumFractionDigits!==void 0||t.minimumFractionDigits!==void 0){const l=t.minimumFractionDigits??0,a=t.maximumFractionDigits??20;r=Number(r.toLocaleString("en-US",{minimumFractionDigits:l,maximumFractionDigits:a,useGrouping:!1}))}return r}const u={};return(t==null?void 0:t.maximumFractionDigits)!==void 0&&(u.maximumFractionDigits=t.maximumFractionDigits),(t==null?void 0:t.minimumFractionDigits)!==void 0&&(u.minimumFractionDigits=t.minimumFractionDigits),new Intl.NumberFormat("ru-RU",u).format(r)},kt={title:"Function Elements/fFormatRuNumber",component:o},F=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(c,{onClick:()=>{s("Базовое форматирование")(o(1234.567))},children:"Базовое форматирование"}),e.jsx(c,{onClick:()=>{s("С банковским округлением")(o(1234.567,{useBankRound:!0}))},children:"С банковским округлением"}),e.jsx(c,{onClick:()=>{s("Настройка десятичных знаков")(o(1234.567,{maximumFractionDigits:2}))},children:"Ограничение десятичных знаков"})]}),N=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(c,{onClick:()=>{s("Возврат числа")(o(1234.567,{useBankRound:!0,returnNumber:!0}))},children:"Возврат числа"}),e.jsx(c,{onClick:()=>{s("Минимальное количество знаков")(o(1234.5,{minimumFractionDigits:3}))},children:"Минимум 3 знака после запятой"}),e.jsx(c,{onClick:()=>{s("Некорректные данные")(o(NaN))},children:"Обработка некорректных данных"})]});F.__docgenInfo={description:"",methods:[],displayName:"Default"};N.__docgenInfo={description:"",methods:[],displayName:"AdvancedOptions"};var k,B,R;F.parameters={...F.parameters,docs:{...(k=F.parameters)==null?void 0:k.docs,source:{originalSource:`() => <div style={{
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
  </div>`,...(R=(B=F.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var h,v,y;N.parameters={...N.parameters,docs:{...(h=N.parameters)==null?void 0:h.docs,source:{originalSource:`() => <div style={{
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
  </div>`,...(y=(v=N.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const Bt=["Default","AdvancedOptions"];export{N as AdvancedOptions,F as Default,Bt as __namedExportsOrder,kt as default};
