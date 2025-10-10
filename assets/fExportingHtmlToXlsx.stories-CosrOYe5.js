import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{F as c}from"./FButton-CwfpvuGP.js";import"./FButtonFile-ChwVCasa.js";import"./FTextField-CQUFWKWA.js";import"./FStack-Bs-EBUEz.js";import"./FGridRow-CsF9MpPt.js";import"./FContainer-BatpkT-f.js";import"./FPaper-BFgg04dY.js";import"./FTableFooter-BWmkWvIu.js";import"./index-DY-snNUy.js";import"./index-xMzmejw-.js";import"./FDialogFooter-Bfbpy8Fv.js";import"./FProgress-DRPVoeAu.js";import"./FPreloader-B_LCaiJ_.js";import"./FCheckbox-NPMfrU2t.js";import"./FRadioButton-CiO-cZog.js";import"./FPagination-CqlZsmTv.js";import"./FTimelineCard-rb4LP-m6.js";import"./FOpenImgFull-Dh9z-cRV.js";import"./FAccordion-Cg__21gJ.js";import"./FInputFileForm-CUODYS1f.js";import"./FFile-BtYqhg3U.js";import"./FSelectItem-CJWtApxf.js";import"./FFullDateField-C0grZK2T.js";import"./FSelectSearchDb-Af25Ppp2.js";import"./FTextArea-D4UTr8NG.js";import"./FCloseIcon-ZR3e0z_J.js";/* empty css                */import"./FTab-CvAzYgoL.js";import"./FDropdownItem-s4asPjlH.js";import"./FSearchBox-DthhNhSx.js";import"./FCarouselItem-BzHKgllY.js";import"./FSkeleton-pmLFDKm2.js";import"./FNavigateBarItem-C_SaROZY.js";import"./FMenuLinks-D7zPlJ_g.js";import"./FTooltip-COBUcM1Z.js";import{x as s}from"./allorion-exporting-html-to-xlsx.es-CUWI16He.js";import{s as a}from"./server.browser-DKxXEjvy.js";import"./index-yBjzXJbu.js";import"./FLoadIcon-BM1DdYSY.js";import"./index-fNjTmf9T.js";import"./FDialog-DLm4K6IN.js";import"./FArrowIcon-DpFSaEY1.js";import"./FTrashIcon-Cxn1SHc6.js";const i={licenseKey:"fui",signature:"99626fe6091102cfb69544832775098aa38f28e76d771f928b8e12138688588537bc89f7dd8a3e73188d8ce58d11f4bdf26e6febf88021786f38f2c4440cdec6fb262ae2d1fa32d0b59068b8923b712bf0310501ab76b31fcc31b0a43073509a3bdc235fe7e3ed49506c1e086444af0c2fc8dff79cf23f417119d96ac4b4eb1588a56dc657db64f782012468ce03fd134c9245cd3f2464d920a30a4c4af831b0f4868f738b815855d846eaa992e55cb73d2aa0bc4e24aa5992751b9721d241f0aa8b0d080359bd19ab74d738dd69bc9f22de22aa888023b4e7d3154a9dc76beb277a3fa3dec115fa591a8d16593d4fae9e604fcf0fc9965e3799145b64cccc0d"},f=async r=>{const o=await s(i);return o===null?(console.error("Лицензия для модуля allorion-exporting-html-to-xlsx устарела"),()=>{}):(console.log("Лицензия для модуля allorion-exporting-html-to-xlsx установлена"),r.jsxElement!==void 0&&typeof r.jsxElement!="string"&&(r.jsxElement=a.renderToStaticMarkup(r.jsxElement)),o(r))},tn={title:"Function Elements/fExportingHtmlToXlsx",component:f},t=()=>n.jsxs(n.Fragment,{children:[n.jsx(c,{onClick:async()=>{await f({divId:"test-export-xlsx",fileName:"example.xlsx"})},children:"Экспортировать таблицу в xlsx"}),n.jsxs("div",{id:"test-export-xlsx",children:[n.jsx("h2",{children:"Тестовая таблица с объединениями ячеек"}),n.jsxs("table",{border:1,cellPadding:8,cellSpacing:0,style:{borderCollapse:"collapse",width:"100%",maxWidth:"800px",margin:"20px 0"},children:[n.jsxs("thead",{children:[n.jsx("tr",{children:n.jsx("th",{colSpan:5,style:{backgroundColor:"#f0f0f0",textAlign:"center",padding:"12px"},children:"Объединённый заголовок (colSpan=5)"})}),n.jsxs("tr",{children:[n.jsx("th",{style:{backgroundColor:"#e6f3ff"},children:"Колонка 1"}),n.jsx("th",{style:{backgroundColor:"#e6f3ff"},children:"Колонка 2"}),n.jsx("th",{style:{backgroundColor:"#e6f3ff"},children:"Колонка 3"}),n.jsx("th",{style:{backgroundColor:"#e6f3ff"},children:"Колонка 4"}),n.jsx("th",{style:{backgroundColor:"#e6f3ff"},children:"Колонка 5"})]})]}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{style:{backgroundColor:"#fff8e6"},children:"Ячейка 1.1"}),n.jsx("td",{style:{backgroundColor:"#fff8e6"},children:"Ячейка 1.2"}),n.jsx("td",{style:{backgroundColor:"#fff8e6"},children:"Ячейка 1.3"}),n.jsx("td",{style:{backgroundColor:"#fff8e6"},children:"Ячейка 1.4"}),n.jsx("td",{style:{backgroundColor:"#fff8e6"},children:"Ячейка 1.5"})]}),n.jsxs("tr",{children:[n.jsxs("td",{rowSpan:2,style:{backgroundColor:"#e8f5e8"},children:["Объединение по вертикали (rowSpan=2)",n.jsx("br",{}),"Строка 1"]}),n.jsx("td",{style:{backgroundColor:"#f0e6ff"},children:"Ячейка 2.2"}),n.jsx("td",{colSpan:2,style:{backgroundColor:"#ffe6f0",textAlign:"center"},children:"Объединение по горизонтали (colSpan=2)"}),n.jsx("td",{style:{backgroundColor:"#f0e6ff"},children:"Ячейка 2.5"})]}),n.jsxs("tr",{children:[n.jsx("td",{style:{backgroundColor:"#f0e6ff"},children:"Ячейка 3.2"}),n.jsx("td",{style:{backgroundColor:"#ffe6f0"},children:"Ячейка 3.3"}),n.jsx("td",{style:{backgroundColor:"#ffe6f0"},children:"Ячейка 3.4"}),n.jsx("td",{style:{backgroundColor:"#f0e6ff"},children:"Ячейка 3.5"})]}),n.jsxs("tr",{children:[n.jsx("td",{colSpan:2,style:{backgroundColor:"#e6fff0",textAlign:"center"},children:"Объединение по горизонтали (colSpan=2)"}),n.jsx("td",{rowSpan:3,style:{backgroundColor:"#ffe6e6",textAlign:"center",verticalAlign:"middle"},children:"Объединение по вертикали (rowSpan=3)"}),n.jsx("td",{style:{backgroundColor:"#f5f5f5"},children:"Ячейка 4.4"}),n.jsx("td",{style:{backgroundColor:"#f5f5f5"},children:"Ячейка 4.5"})]}),n.jsxs("tr",{children:[n.jsx("td",{colSpan:2,style:{backgroundColor:"#e6fff0",textAlign:"center"},children:"Продолжение объединения (colSpan=2)"}),n.jsx("td",{style:{backgroundColor:"#f5f5f5"},children:"Ячейка 5.4"}),n.jsx("td",{style:{backgroundColor:"#f5f5f5"},children:"Ячейка 5.5"})]}),n.jsxs("tr",{children:[n.jsx("td",{style:{backgroundColor:"#e6fff0"},children:"Ячейка 6.1"}),n.jsx("td",{style:{backgroundColor:"#e6fff0"},children:"Ячейка 6.2"}),n.jsx("td",{style:{backgroundColor:"#f5f5f5"},children:"Ячейка 6.4"}),n.jsx("td",{style:{backgroundColor:"#f5f5f5"},children:"Ячейка 6.5"})]}),n.jsxs("tr",{children:[n.jsx("td",{style:{backgroundColor:"#f9f9f9"},children:"Ячейка 7.1"}),n.jsxs("td",{rowSpan:2,colSpan:2,style:{backgroundColor:"#ffcccb",textAlign:"center",verticalAlign:"middle"},children:[n.jsx("strong",{children:"ОДНОВРЕМЕННОЕ ОБЪЕДИНЕНИЕ"}),n.jsx("br",{}),"rowSpan=2 + colSpan=2",n.jsx("br",{}),"Занимает 4 ячейки:",n.jsx("br",{}),"(7.2, 7.3, 8.2, 8.3)"]}),n.jsx("td",{style:{backgroundColor:"#f9f9f9"},children:"Ячейка 7.4"}),n.jsx("td",{style:{backgroundColor:"#f9f9f9"},children:"Ячейка 7.5"})]}),n.jsxs("tr",{children:[n.jsx("td",{style:{backgroundColor:"#f9f9f9"},children:"Ячейка 8.1"}),n.jsx("td",{style:{backgroundColor:"#f9f9f9"},children:"Ячейка 8.4"}),n.jsx("td",{style:{backgroundColor:"#f9f9f9"},children:"Ячейка 8.5"})]}),n.jsxs("tr",{children:[n.jsxs("td",{rowSpan:2,colSpan:3,style:{backgroundColor:"#add8e6",textAlign:"center",verticalAlign:"middle"},children:[n.jsx("strong",{children:"ВТОРОЕ ОДНОВРЕМЕННОЕ ОБЪЕДИНЕНИЕ"}),n.jsx("br",{}),"rowSpan=2 + colSpan=3",n.jsx("br",{}),"Занимает 6 ячеек:",n.jsx("br",{}),"(9.1, 9.2, 9.3, 10.1, 10.2, 10.3)"]}),n.jsx("td",{style:{backgroundColor:"#f9f9f9"},children:"Ячейка 9.4"}),n.jsx("td",{style:{backgroundColor:"#f9f9f9"},children:"Ячейка 9.5"})]}),n.jsxs("tr",{children:[n.jsx("td",{style:{backgroundColor:"#f9f9f9"},children:"Ячейка 10.4"}),n.jsx("td",{style:{backgroundColor:"#f9f9f9"},children:"Ячейка 10.5"})]}),n.jsxs("tr",{children:[n.jsx("td",{style:{backgroundColor:"#f9f9f9"},children:"Ячейка 11.1"}),n.jsx("td",{style:{backgroundColor:"#f9f9f9"},children:"Ячейка 11.2"}),n.jsx("td",{style:{backgroundColor:"#f9f9f9"},children:"Ячейка 11.3"}),n.jsx("td",{style:{backgroundColor:"#f9f9f9"},children:"Ячейка 11.4"}),n.jsx("td",{style:{backgroundColor:"#f9f9f9"},children:"Ячейка 11.5"})]})]})]})]})]});t.__docgenInfo={description:"",methods:[],displayName:"Default"};var e,l,d;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => <>
    <FButton onClick={async () => {
    await fExportingHtmlToXlsx({
      divId: 'test-export-xlsx',
      fileName: 'example.xlsx'
    });
  }}>
      Экспортировать таблицу в xlsx
    </FButton>
    <div id={'test-export-xlsx'}>
      <h2>Тестовая таблица с объединениями ячеек</h2>

      <table border={1} cellPadding={8} cellSpacing={0} style={{
      borderCollapse: 'collapse',
      width: '100%',
      maxWidth: '800px',
      margin: '20px 0'
    }}>
        <thead>
          <tr>
            <th colSpan={5} style={{
            backgroundColor: '#f0f0f0',
            textAlign: 'center',
            padding: '12px'
          }}>
              Объединённый заголовок (colSpan=5)
            </th>
          </tr>
          <tr>
            <th style={{
            backgroundColor: '#e6f3ff'
          }}>Колонка 1</th>
            <th style={{
            backgroundColor: '#e6f3ff'
          }}>Колонка 2</th>
            <th style={{
            backgroundColor: '#e6f3ff'
          }}>Колонка 3</th>
            <th style={{
            backgroundColor: '#e6f3ff'
          }}>Колонка 4</th>
            <th style={{
            backgroundColor: '#e6f3ff'
          }}>Колонка 5</th>
          </tr>
        </thead>

        <tbody>
          {/* Строка 1 - обычные ячейки */}
          <tr>
            <td style={{
            backgroundColor: '#fff8e6'
          }}>Ячейка 1.1</td>
            <td style={{
            backgroundColor: '#fff8e6'
          }}>Ячейка 1.2</td>
            <td style={{
            backgroundColor: '#fff8e6'
          }}>Ячейка 1.3</td>
            <td style={{
            backgroundColor: '#fff8e6'
          }}>Ячейка 1.4</td>
            <td style={{
            backgroundColor: '#fff8e6'
          }}>Ячейка 1.5</td>
          </tr>

          {/* Строка 2 - объединение по горизонтали */}
          <tr>
            <td rowSpan={2} style={{
            backgroundColor: '#e8f5e8'
          }}>
              Объединение по вертикали (rowSpan=2)<br />
              Строка 1
            </td>
            <td style={{
            backgroundColor: '#f0e6ff'
          }}>Ячейка 2.2</td>
            <td colSpan={2} style={{
            backgroundColor: '#ffe6f0',
            textAlign: 'center'
          }}>
              Объединение по горизонтали (colSpan=2)
            </td>
            <td style={{
            backgroundColor: '#f0e6ff'
          }}>Ячейка 2.5</td>
          </tr>

          {/* Строка 3 - продолжение объединения */}
          <tr>
            <td style={{
            backgroundColor: '#f0e6ff'
          }}>Ячейка 3.2</td>
            <td style={{
            backgroundColor: '#ffe6f0'
          }}>Ячейка 3.3</td>
            <td style={{
            backgroundColor: '#ffe6f0'
          }}>Ячейка 3.4</td>
            <td style={{
            backgroundColor: '#f0e6ff'
          }}>Ячейка 3.5</td>
          </tr>

          {/* Строка 4 - сложное объединение */}
          <tr>
            <td colSpan={2} style={{
            backgroundColor: '#e6fff0',
            textAlign: 'center'
          }}>
              Объединение по горизонтали (colSpan=2)
            </td>
            <td rowSpan={3} style={{
            backgroundColor: '#ffe6e6',
            textAlign: 'center',
            verticalAlign: 'middle'
          }}>
              Объединение по вертикали (rowSpan=3)
            </td>
            <td style={{
            backgroundColor: '#f5f5f5'
          }}>Ячейка 4.4</td>
            <td style={{
            backgroundColor: '#f5f5f5'
          }}>Ячейка 4.5</td>
          </tr>

          {/* Строка 5 - продолжение сложного объединения */}
          <tr>
            <td colSpan={2} style={{
            backgroundColor: '#e6fff0',
            textAlign: 'center'
          }}>
              Продолжение объединения (colSpan=2)
            </td>
            <td style={{
            backgroundColor: '#f5f5f5'
          }}>Ячейка 5.4</td>
            <td style={{
            backgroundColor: '#f5f5f5'
          }}>Ячейка 5.5</td>
          </tr>

          {/* Строка 6 - продолжение сложного объединения */}
          <tr>
            <td style={{
            backgroundColor: '#e6fff0'
          }}>Ячейка 6.1</td>
            <td style={{
            backgroundColor: '#e6fff0'
          }}>Ячейка 6.2</td>
            <td style={{
            backgroundColor: '#f5f5f5'
          }}>Ячейка 6.4</td>
            <td style={{
            backgroundColor: '#f5f5f5'
          }}>Ячейка 6.5</td>
          </tr>

          {/* Строка 7 - ОДНОВРЕМЕННОЕ объединение через colSpan и rowSpan */}
          <tr>
            <td style={{
            backgroundColor: '#f9f9f9'
          }}>Ячейка 7.1</td>
            <td rowSpan={2} colSpan={2} style={{
            backgroundColor: '#ffcccb',
            textAlign: 'center',
            verticalAlign: 'middle'
          }}>
              <strong>ОДНОВРЕМЕННОЕ ОБЪЕДИНЕНИЕ</strong><br />
              rowSpan=2 + colSpan=2<br />
              Занимает 4 ячейки:<br />
              (7.2, 7.3, 8.2, 8.3)
            </td>
            <td style={{
            backgroundColor: '#f9f9f9'
          }}>Ячейка 7.4</td>
            <td style={{
            backgroundColor: '#f9f9f9'
          }}>Ячейка 7.5</td>
          </tr>

          {/* Строка 8 - продолжение одновременного объединения */}
          <tr>
            <td style={{
            backgroundColor: '#f9f9f9'
          }}>Ячейка 8.1</td>
            {/* Ячейки 8.2 и 8.3 отсутствуют - они объединены с ячейкой 7.2 */}
            <td style={{
            backgroundColor: '#f9f9f9'
          }}>Ячейка 8.4</td>
            <td style={{
            backgroundColor: '#f9f9f9'
          }}>Ячейка 8.5</td>
          </tr>

          {/* Строка 9 - ещё один пример одновременного объединения */}
          <tr>
            <td rowSpan={2} colSpan={3} style={{
            backgroundColor: '#add8e6',
            textAlign: 'center',
            verticalAlign: 'middle'
          }}>
              <strong>ВТОРОЕ ОДНОВРЕМЕННОЕ ОБЪЕДИНЕНИЕ</strong><br />
              rowSpan=2 + colSpan=3<br />
              Занимает 6 ячеек:<br />
              (9.1, 9.2, 9.3, 10.1, 10.2, 10.3)
            </td>
            <td style={{
            backgroundColor: '#f9f9f9'
          }}>Ячейка 9.4</td>
            <td style={{
            backgroundColor: '#f9f9f9'
          }}>Ячейка 9.5</td>
          </tr>

          {/* Строка 10 - продолжение второго одновременного объединения */}
          <tr>
            <td style={{
            backgroundColor: '#f9f9f9'
          }}>Ячейка 10.4</td>
            <td style={{
            backgroundColor: '#f9f9f9'
          }}>Ячейка 10.5</td>
          </tr>

          {/* Строка 11 - обычные ячейки для завершения */}
          <tr>
            <td style={{
            backgroundColor: '#f9f9f9'
          }}>Ячейка 11.1</td>
            <td style={{
            backgroundColor: '#f9f9f9'
          }}>Ячейка 11.2</td>
            <td style={{
            backgroundColor: '#f9f9f9'
          }}>Ячейка 11.3</td>
            <td style={{
            backgroundColor: '#f9f9f9'
          }}>Ячейка 11.4</td>
            <td style={{
            backgroundColor: '#f9f9f9'
          }}>Ячейка 11.5</td>
          </tr>
        </tbody>
      </table>
    </div>
  </>`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const on=["Default"];export{t as Default,on as __namedExportsOrder,tn as default};
