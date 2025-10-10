import{j as m}from"./jsx-runtime-Cf8x2fCZ.js";import{F as u}from"./FButton-CwfpvuGP.js";import"./FButtonFile-ChwVCasa.js";import"./FTextField-CQUFWKWA.js";import"./FStack-Bs-EBUEz.js";import"./FGridRow-CsF9MpPt.js";import"./FContainer-BatpkT-f.js";import"./FPaper-BFgg04dY.js";import"./FTableFooter-BWmkWvIu.js";import"./index-DY-snNUy.js";import"./index-xMzmejw-.js";import"./FDialogFooter-Bfbpy8Fv.js";import"./FProgress-DRPVoeAu.js";import"./FPreloader-B_LCaiJ_.js";import"./FCheckbox-NPMfrU2t.js";import"./FRadioButton-CiO-cZog.js";import"./FPagination-CqlZsmTv.js";import"./FTimelineCard-rb4LP-m6.js";import"./FOpenImgFull-Dh9z-cRV.js";import"./FAccordion-Cg__21gJ.js";import"./FInputFileForm-CUODYS1f.js";import"./FFile-BtYqhg3U.js";import"./FSelectItem-CJWtApxf.js";import"./FFullDateField-C0grZK2T.js";import"./FSelectSearchDb-Af25Ppp2.js";import"./FTextArea-D4UTr8NG.js";import"./FCloseIcon-ZR3e0z_J.js";/* empty css                */import"./FTab-CvAzYgoL.js";import"./FDropdownItem-s4asPjlH.js";import"./FSearchBox-DthhNhSx.js";import"./FCarouselItem-BzHKgllY.js";import"./FSkeleton-pmLFDKm2.js";import"./FNavigateBarItem-C_SaROZY.js";import"./FMenuLinks-D7zPlJ_g.js";import"./FTooltip-COBUcM1Z.js";import{a}from"./index-B-lxVbXh.js";import"./index-yBjzXJbu.js";import"./FLoadIcon-BM1DdYSY.js";import"./index-fNjTmf9T.js";import"./FDialog-DLm4K6IN.js";import"./FArrowIcon-DpFSaEY1.js";import"./FTrashIcon-Cxn1SHc6.js";import"./v4-CtRu48qb.js";function v(r,t=2){const n=typeof r=="number"?r.toString():r;if(!/^[-+]?\d+(\.\d+)?$/.test(n))throw new Error("Некорректное число");const[o,i=""]=n.split(".");if(t<0)throw new Error("Количество знаков не может быть отрицательным");if(i.length<=t)return Number(r);const l=Number(i[t]),k=i.slice(t+1),d=i.slice(0,t),R=o.startsWith("-")?-1:1,h=BigInt(o.replace("-","")),y=/[1-9]/.test(k);let p=d,f=0;if(l>5||l===5&&(y||Number(d[t-1]??0)%2!==0)){const F=BigInt(p||"0")+BigInt(1),j=BigInt(10)**BigInt(t);F>=j?(f=1,p="0".repeat(t)):p=F.toString().padStart(t,"0")}const C=h+BigInt(f),I=(R<0?"-":"")+C.toString()+(t>0?"."+p.padEnd(t,"0"):"");return Number(I)}const e=(r,t)=>{if(typeof r!="number"||isNaN(r))return t!=null&&t.returnNumber?NaN:"";let n=r;if(t!=null&&t.useBankRound){const i=t.bankRoundDecimalPlaces??2;n=v(n,i)}if(t!=null&&t.returnNumber){if(t.maximumFractionDigits!==void 0||t.minimumFractionDigits!==void 0){const i=t.minimumFractionDigits??0,l=t.maximumFractionDigits??20;n=Number(n.toLocaleString("en-US",{minimumFractionDigits:i,maximumFractionDigits:l,useGrouping:!1}))}return n}const o={};return(t==null?void 0:t.maximumFractionDigits)!==void 0&&(o.maximumFractionDigits=t.maximumFractionDigits),(t==null?void 0:t.minimumFractionDigits)!==void 0&&(o.minimumFractionDigits=t.minimumFractionDigits),new Intl.NumberFormat("ru-RU",o).format(n)},Bt={title:"Function Elements/fFormatRuNumber",component:e},c=()=>m.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[m.jsx(u,{onClick:()=>{a("Базовое форматирование")(e(1234.567))},children:"Базовое форматирование"}),m.jsx(u,{onClick:()=>{a("С банковским округлением")(e(1234.567,{useBankRound:!0}))},children:"С банковским округлением"}),m.jsx(u,{onClick:()=>{a("Настройка десятичных знаков")(e(1234.567,{maximumFractionDigits:2}))},children:"Ограничение десятичных знаков"})]}),s=()=>m.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[m.jsx(u,{onClick:()=>{a("Возврат числа")(e(1234.567,{useBankRound:!0,returnNumber:!0}))},children:"Возврат числа"}),m.jsx(u,{onClick:()=>{a("Минимальное количество знаков")(e(1234.5,{minimumFractionDigits:3}))},children:"Минимум 3 знака после запятой"}),m.jsx(u,{onClick:()=>{a("Некорректные данные")(e(NaN))},children:"Обработка некорректных данных"})]});c.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"AdvancedOptions"};var g,b,x;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`() => <div style={{
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
  </div>`,...(x=(b=c.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var N,B,D;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`() => <div style={{
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
  </div>`,...(D=(B=s.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};const Dt=["Default","AdvancedOptions"];export{s as AdvancedOptions,c as Default,Dt as __namedExportsOrder,Bt as default};
