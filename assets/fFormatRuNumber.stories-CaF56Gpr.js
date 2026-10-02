import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{F as c}from"./FButton-WshjMl_j.js";import"./FButtonFile-ndsUyZDv.js";import"./FTextField-G4sFh9Uf.js";import"./FStack-Bjsadt8I.js";import"./FGridRow-DPVPfH0m.js";import"./FContainer-D9oNryDS.js";import"./FPaper-C96cUb7h.js";import"./FTableActions-CSP0-rhc.js";import"./index-B3j06Xw8.js";import"./index-D_ywfbVi.js";import"./FDialogFooter-BsOGDZKD.js";import"./FProgress-B1PkuN98.js";import"./FPreloader-Cq7UpuSU.js";import"./FCheckbox-C2Fn5p4I.js";import"./FRadioButton-CCi8vwMO.js";import"./FPagination-DkwE8RRm.js";import"./FTimelineCard-G_wv4YPr.js";import"./FCloseIcon-DdRZhJBn.js";import"./FArrowIcon-e6BJPakw.js";import"./FDownloadIcon-CBN19oNF.js";import"./FImagePreview-BI_HHImE.js";import"./FVideoPlayer-BgLjSeQA.js";import"./FAccordion-B22xNC65.js";import"./FInputFileForm-CI_bUF6k.js";import"./FFile-ALKQqT-R.js";import"./FSelectItem-BAXWPI2S.js";import"./FFullDateField-bov5uJB9.js";import"./FSelectSearchDb-5nHlLFKL.js";import"./FTextArea-ChmymgEf.js";/* empty css                */import"./FTab-4EmqzD2P.js";import"./FDropdownItem-3TiL9ogE.js";import"./FSearchBox-fdjYAM33.js";import"./FCarouselItem-DbNUFCsz.js";import"./FSkeleton-iaIByH-O.js";import"./FNavigateBarItem-BtOG1U8l.js";import"./FMenuLinks-Cbdq1Y8F.js";import"./FTooltip-BJ8WMW_6.js";import"./FSearchableSelect-DPsz2xcQ.js";import"./FSegmentedControl-DhW7n95-.js";import"./FStatusBadge-CaCHJHW5.js";import{a as s}from"./index-B-lxVbXh.js";import"./FLoadIcon-B2O1XWAm.js";import"./index-DW0t0JKo.js";import"./FOpenImgFull-D3oCg-l2.js";import"./FTrashIcon-DpmD7QBY.js";import"./v4-CtRu48qb.js";function _(m,r=2){const t=String(m).trim();if(!/^[-+]?\d+(\.\d+)?$/.test(t))return NaN;if(r<0)return NaN;const u=t.startsWith("-")?-1:1,l=t.replace(/^[-+]/,""),[a,d=""]=l.split(".");if(d.length<=r)return Number(t);const p=r,x=Number(d[p]),D=d.slice(p+1),C=D.length>0&&/[1-9]/.test(D);let g;p>0?g=Number(d[p-1]):g=a.length>0?Number(a[a.length-1]):0;const j=u<0;let b=0;(x>5||x===5&&(C||j||g%2===1))&&(b=1);let i=d.slice(0,p).padEnd(r,"0"),f=a||"0";if(b)if(r===0)f=(Number(f)+1).toString();else{let n=r-1;for(;n>=0;){if(i[n]!=="9"){i=i.slice(0,n)+(Number(i[n])+1)+i.slice(n+1);break}i=i.slice(0,n)+"0"+i.slice(n+1),n--}n<0&&(f=(Number(f)+1).toString(),i="0".repeat(r))}const S=f+(r>0?"."+i:"");return u*Number(S)}const o=(m,r)=>{if(typeof m!="number"||isNaN(m))return r!=null&&r.returnNumber?NaN:"";let t=m;if(r!=null&&r.useBankRound){const l=r.bankRoundDecimalPlaces??2;t=_(t,l)}if(r!=null&&r.returnNumber){if(r.maximumFractionDigits!==void 0||r.minimumFractionDigits!==void 0){const l=r.minimumFractionDigits??0,a=r.maximumFractionDigits??20;t=Number(t.toLocaleString("en-US",{minimumFractionDigits:l,maximumFractionDigits:a,useGrouping:!1}))}return t}const u={};return(r==null?void 0:r.maximumFractionDigits)!==void 0&&(u.maximumFractionDigits=r.maximumFractionDigits),(r==null?void 0:r.minimumFractionDigits)!==void 0&&(u.minimumFractionDigits=r.minimumFractionDigits),new Intl.NumberFormat("ru-RU",u).format(t)},vr={title:"Function Elements/fFormatRuNumber",component:o},F=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(c,{onClick:()=>{s("Базовое форматирование")(o(1234.567))},children:"Базовое форматирование"}),e.jsx(c,{onClick:()=>{s("С банковским округлением")(o(1234.567,{useBankRound:!0}))},children:"С банковским округлением"}),e.jsx(c,{onClick:()=>{s("Настройка десятичных знаков")(o(1234.567,{maximumFractionDigits:2}))},children:"Ограничение десятичных знаков"})]}),N=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(c,{onClick:()=>{s("Возврат числа")(o(1234.567,{useBankRound:!0,returnNumber:!0}))},children:"Возврат числа"}),e.jsx(c,{onClick:()=>{s("Минимальное количество знаков")(o(1234.5,{minimumFractionDigits:3}))},children:"Минимум 3 знака после запятой"}),e.jsx(c,{onClick:()=>{s("Некорректные данные")(o(NaN))},children:"Обработка некорректных данных"})]});F.__docgenInfo={description:"",methods:[],displayName:"Default"};N.__docgenInfo={description:"",methods:[],displayName:"AdvancedOptions"};var k,B,R;F.parameters={...F.parameters,docs:{...(k=F.parameters)==null?void 0:k.docs,source:{originalSource:`() => <div style={{
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
  </div>`,...(y=(v=N.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const yr=["Default","AdvancedOptions"];export{N as AdvancedOptions,F as Default,yr as __namedExportsOrder,vr as default};
