import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{F as c}from"./FButton-DQOEJPUH.js";import"./FButtonFile-Cc8ubo-m.js";import"./FTextField-DSrbz1g8.js";import"./FStack-Bjsadt8I.js";import"./FGridRow-DPVPfH0m.js";import"./FContainer-D9oNryDS.js";import"./FPaper-ByA2FQvy.js";import"./FTableFooter-EbsKXXEI.js";import"./index-DEgj3Fem.js";import"./index-BknSE3li.js";import"./FDialogFooter-EZrNysQM.js";import"./FProgress-CuUSEf8T.js";import"./FPreloader-C0DO9d3w.js";import"./FCheckbox-CvjAvqQ6.js";import"./FRadioButton-CWco8Ir1.js";import"./FPagination-Cudve55R.js";import"./FTimelineCard-G_wv4YPr.js";import"./FOpenImgFull-BzaYDndu.js";import"./FAccordion-CUm2A8fo.js";import"./FInputFileForm-KMotnIpw.js";import"./FFile-BHJQGV29.js";import"./FSelectItem-BnNI1hqM.js";import"./FFullDateField-_mtt4yT5.js";import"./FSelectSearchDb-CtdF7gtg.js";import"./FTextArea-9qVfGzxf.js";import"./FCloseIcon-Dr7AIYCl.js";/* empty css                */import"./FTab-DHwok_rz.js";import"./FDropdownItem-D17eYKAm.js";import"./FSearchBox-Czmsapd1.js";import"./FCarouselItem-DRfQet_0.js";import"./FSkeleton-qmKtpPTy.js";import"./FNavigateBarItem-CQ1yOoQk.js";import"./FMenuLinks-CHiLRQZa.js";import"./FTooltip-CCrWwCPn.js";import"./FSearchableSelect-BZIN-NqS.js";import{a as s}from"./index-B-lxVbXh.js";import"./FLoadIcon-1-Td29NS.js";import"./index-DM3MU96Y.js";import"./FDialog-DPCiHy6F.js";import"./FArrowIcon-C21crw0H.js";import"./FTrashIcon-Da5Dd79F.js";import"./v4-CtRu48qb.js";function _(m,r=2){const t=String(m).trim();if(!/^[-+]?\d+(\.\d+)?$/.test(t))return NaN;if(r<0)return NaN;const u=t.startsWith("-")?-1:1,l=t.replace(/^[-+]/,""),[a,d=""]=l.split(".");if(d.length<=r)return Number(t);const f=r,x=Number(d[f]),D=d.slice(f+1),C=D.length>0&&/[1-9]/.test(D);let g;f>0?g=Number(d[f-1]):g=a.length>0?Number(a[a.length-1]):0;const j=u<0;let b=0;(x>5||x===5&&(C||j||g%2===1))&&(b=1);let n=d.slice(0,f).padEnd(r,"0"),p=a||"0";if(b)if(r===0)p=(Number(p)+1).toString();else{let i=r-1;for(;i>=0;){if(n[i]!=="9"){n=n.slice(0,i)+(Number(n[i])+1)+n.slice(i+1);break}n=n.slice(0,i)+"0"+n.slice(i+1),i--}i<0&&(p=(Number(p)+1).toString(),n="0".repeat(r))}const S=p+(r>0?"."+n:"");return u*Number(S)}const o=(m,r)=>{if(typeof m!="number"||isNaN(m))return r!=null&&r.returnNumber?NaN:"";let t=m;if(r!=null&&r.useBankRound){const l=r.bankRoundDecimalPlaces??2;t=_(t,l)}if(r!=null&&r.returnNumber){if(r.maximumFractionDigits!==void 0||r.minimumFractionDigits!==void 0){const l=r.minimumFractionDigits??0,a=r.maximumFractionDigits??20;t=Number(t.toLocaleString("en-US",{minimumFractionDigits:l,maximumFractionDigits:a,useGrouping:!1}))}return t}const u={};return(r==null?void 0:r.maximumFractionDigits)!==void 0&&(u.maximumFractionDigits=r.maximumFractionDigits),(r==null?void 0:r.minimumFractionDigits)!==void 0&&(u.minimumFractionDigits=r.minimumFractionDigits),new Intl.NumberFormat("ru-RU",u).format(t)},kr={title:"Function Elements/fFormatRuNumber",component:o},F=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(c,{onClick:()=>{s("Базовое форматирование")(o(1234.567))},children:"Базовое форматирование"}),e.jsx(c,{onClick:()=>{s("С банковским округлением")(o(1234.567,{useBankRound:!0}))},children:"С банковским округлением"}),e.jsx(c,{onClick:()=>{s("Настройка десятичных знаков")(o(1234.567,{maximumFractionDigits:2}))},children:"Ограничение десятичных знаков"})]}),N=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(c,{onClick:()=>{s("Возврат числа")(o(1234.567,{useBankRound:!0,returnNumber:!0}))},children:"Возврат числа"}),e.jsx(c,{onClick:()=>{s("Минимальное количество знаков")(o(1234.5,{minimumFractionDigits:3}))},children:"Минимум 3 знака после запятой"}),e.jsx(c,{onClick:()=>{s("Некорректные данные")(o(NaN))},children:"Обработка некорректных данных"})]});F.__docgenInfo={description:"",methods:[],displayName:"Default"};N.__docgenInfo={description:"",methods:[],displayName:"AdvancedOptions"};var k,B,R;F.parameters={...F.parameters,docs:{...(k=F.parameters)==null?void 0:k.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
}}>\r
    <FButton onClick={() => {
    action('Базовое форматирование')(fFormatRuNumber(1234.567));
  }}>\r
      Базовое форматирование\r
    </FButton>\r
\r
    <FButton onClick={() => {
    action('С банковским округлением')(fFormatRuNumber(1234.567, {
      useBankRound: true
    }));
  }}>\r
      С банковским округлением\r
    </FButton>\r
\r
    <FButton onClick={() => {
    action('Настройка десятичных знаков')(fFormatRuNumber(1234.567, {
      maximumFractionDigits: 2
    }));
  }}>\r
      Ограничение десятичных знаков\r
    </FButton>\r
  </div>`,...(R=(B=F.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var h,v,y;N.parameters={...N.parameters,docs:{...(h=N.parameters)==null?void 0:h.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
}}>\r
    <FButton onClick={() => {
    const number = 1234.567;
    action('Возврат числа')(fFormatRuNumber(number, {
      useBankRound: true,
      returnNumber: true
    }));
  }}>\r
      Возврат числа\r
    </FButton>\r
\r
    <FButton onClick={() => {
    const number = 1234.5;
    action('Минимальное количество знаков')(fFormatRuNumber(number, {
      minimumFractionDigits: 3
    }));
  }}>\r
      Минимум 3 знака после запятой\r
    </FButton>\r
\r
    <FButton onClick={() => {
    action('Некорректные данные')(fFormatRuNumber(NaN));
  }}>\r
      Обработка некорректных данных\r
    </FButton>\r
  </div>`,...(y=(v=N.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const Br=["Default","AdvancedOptions"];export{N as AdvancedOptions,F as Default,Br as __namedExportsOrder,kr as default};
