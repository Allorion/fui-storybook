import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{F as c}from"./FButton-C9wpY3zS.js";import"./FButtonFile-C-97Bcy4.js";import"./FTextField-9__gOwG2.js";import"./FStack-CaU3HVIe.js";import"./FGridRow-Cd5Ey8la.js";import"./FContainer-CBRWva3t.js";import"./FPaper-B4Vv-l4z.js";import"./FTableFooter-rhoceIn9.js";import"./index-DY-snNUy.js";import"./index-xMzmejw-.js";import"./FDialogFooter-DHGI5gTe.js";import"./FProgress-CEE1n2UA.js";import"./FPreloader-DSvNfYRU.js";import"./FCheckbox-CZMnA5mI.js";import"./FRadioButton-zWvdnqFb.js";import"./FPagination-CGjwqwi5.js";import"./FTimelineCard-rb4LP-m6.js";import"./FOpenImgFull-DSjId0kY.js";import"./FAccordion-DoHEzoJ5.js";import"./FInputFileForm-xXWG0l7e.js";import"./FFile-4snuIDkx.js";import"./FSelectItem-BBA9sko8.js";import"./FFullDateField-u765GOI1.js";import"./FSelectSearchDb-fqVQhS3d.js";import"./FTextArea-Pz35vTJd.js";import"./FCloseIcon-DSg2auC9.js";/* empty css                */import"./FTab-DVr93HwX.js";import"./FDropdownItem-CulPidhO.js";import"./FSearchBox-rNKAd81p.js";import"./FCarouselItem-CPrVz-TT.js";import"./FSkeleton-VCBpHstM.js";import"./FNavigateBarItem-CEkWKOcn.js";import"./FMenuLinks-Do6hEIXs.js";import"./FTooltip-DablkKvs.js";import"./FSearchableSelect-DVzczKgm.js";import{x as s}from"./allorion-exporting-html-to-xlsx.es-CdaRoaU5.js";import{s as a}from"./server.browser-DKxXEjvy.js";import"./index-yBjzXJbu.js";import"./FLoadIcon-BNGbbN3E.js";import"./index-fNjTmf9T.js";import"./FDialog-DLm4K6IN.js";import"./FArrowIcon-BBsChLs-.js";import"./FTrashIcon-CD7BhDB1.js";const i={licenseKey:"fui",signature:"99626fe6091102cfb69544832775098aa38f28e76d771f928b8e12138688588537bc89f7dd8a3e73188d8ce58d11f4bdf26e6febf88021786f38f2c4440cdec6fb262ae2d1fa32d0b59068b8923b712bf0310501ab76b31fcc31b0a43073509a3bdc235fe7e3ed49506c1e086444af0c2fc8dff79cf23f417119d96ac4b4eb1588a56dc657db64f782012468ce03fd134c9245cd3f2464d920a30a4c4af831b0f4868f738b815855d846eaa992e55cb73d2aa0bc4e24aa5992751b9721d241f0aa8b0d080359bd19ab74d738dd69bc9f22de22aa888023b4e7d3154a9dc76beb277a3fa3dec115fa591a8d16593d4fae9e604fcf0fc9965e3799145b64cccc0d"},f=async n=>{const o=await s(i);return o===null?(console.error("Лицензия для модуля allorion-exporting-html-to-xlsx устарела"),()=>{}):(console.log("Лицензия для модуля allorion-exporting-html-to-xlsx установлена"),n.jsxElement!==void 0&&typeof n.jsxElement!="string"&&(n.jsxElement=a.renderToStaticMarkup(n.jsxElement)),o(n))},or={title:"Function Elements/fExportingHtmlToXlsx",component:f},t=()=>r.jsxs(r.Fragment,{children:[r.jsx(c,{onClick:async()=>{await f({divId:"test-export-xlsx",fileName:"example.xlsx"})},children:"Экспортировать таблицу в xlsx"}),r.jsxs("div",{id:"test-export-xlsx",children:[r.jsx("h2",{children:"Тестовая таблица с объединениями ячеек"}),r.jsxs("table",{border:1,cellPadding:8,cellSpacing:0,style:{borderCollapse:"collapse",width:"100%",maxWidth:"800px",margin:"20px 0"},children:[r.jsxs("thead",{children:[r.jsx("tr",{children:r.jsx("th",{colSpan:5,style:{backgroundColor:"#f0f0f0",textAlign:"center",padding:"12px"},children:"Объединённый заголовок (colSpan=5)"})}),r.jsxs("tr",{children:[r.jsx("th",{style:{backgroundColor:"#e6f3ff"},children:"Колонка 1"}),r.jsx("th",{style:{backgroundColor:"#e6f3ff"},children:"Колонка 2"}),r.jsx("th",{style:{backgroundColor:"#e6f3ff"},children:"Колонка 3"}),r.jsx("th",{style:{backgroundColor:"#e6f3ff"},children:"Колонка 4"}),r.jsx("th",{style:{backgroundColor:"#e6f3ff"},children:"Колонка 5"})]})]}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{style:{backgroundColor:"#fff8e6"},children:"Ячейка 1.1"}),r.jsx("td",{style:{backgroundColor:"#fff8e6"},children:"Ячейка 1.2"}),r.jsx("td",{style:{backgroundColor:"#fff8e6"},children:"Ячейка 1.3"}),r.jsx("td",{style:{backgroundColor:"#fff8e6"},children:"Ячейка 1.4"}),r.jsx("td",{style:{backgroundColor:"#fff8e6"},children:"Ячейка 1.5"})]}),r.jsxs("tr",{children:[r.jsxs("td",{rowSpan:2,style:{backgroundColor:"#e8f5e8"},children:["Объединение по вертикали (rowSpan=2)",r.jsx("br",{}),"Строка 1"]}),r.jsx("td",{style:{backgroundColor:"#f0e6ff"},children:"Ячейка 2.2"}),r.jsx("td",{colSpan:2,style:{backgroundColor:"#ffe6f0",textAlign:"center"},children:"Объединение по горизонтали (colSpan=2)"}),r.jsx("td",{style:{backgroundColor:"#f0e6ff"},children:"Ячейка 2.5"})]}),r.jsxs("tr",{children:[r.jsx("td",{style:{backgroundColor:"#f0e6ff"},children:"Ячейка 3.2"}),r.jsx("td",{style:{backgroundColor:"#ffe6f0"},children:"Ячейка 3.3"}),r.jsx("td",{style:{backgroundColor:"#ffe6f0"},children:"Ячейка 3.4"}),r.jsx("td",{style:{backgroundColor:"#f0e6ff"},children:"Ячейка 3.5"})]}),r.jsxs("tr",{children:[r.jsx("td",{colSpan:2,style:{backgroundColor:"#e6fff0",textAlign:"center"},children:"Объединение по горизонтали (colSpan=2)"}),r.jsx("td",{rowSpan:3,style:{backgroundColor:"#ffe6e6",textAlign:"center",verticalAlign:"middle"},children:"Объединение по вертикали (rowSpan=3)"}),r.jsx("td",{style:{backgroundColor:"#f5f5f5"},children:"Ячейка 4.4"}),r.jsx("td",{style:{backgroundColor:"#f5f5f5"},children:"Ячейка 4.5"})]}),r.jsxs("tr",{children:[r.jsx("td",{colSpan:2,style:{backgroundColor:"#e6fff0",textAlign:"center"},children:"Продолжение объединения (colSpan=2)"}),r.jsx("td",{style:{backgroundColor:"#f5f5f5"},children:"Ячейка 5.4"}),r.jsx("td",{style:{backgroundColor:"#f5f5f5"},children:"Ячейка 5.5"})]}),r.jsxs("tr",{children:[r.jsx("td",{style:{backgroundColor:"#e6fff0"},children:"Ячейка 6.1"}),r.jsx("td",{style:{backgroundColor:"#e6fff0"},children:"Ячейка 6.2"}),r.jsx("td",{style:{backgroundColor:"#f5f5f5"},children:"Ячейка 6.4"}),r.jsx("td",{style:{backgroundColor:"#f5f5f5"},children:"Ячейка 6.5"})]}),r.jsxs("tr",{children:[r.jsx("td",{style:{backgroundColor:"#f9f9f9"},children:"Ячейка 7.1"}),r.jsxs("td",{rowSpan:2,colSpan:2,style:{backgroundColor:"#ffcccb",textAlign:"center",verticalAlign:"middle"},children:[r.jsx("strong",{children:"ОДНОВРЕМЕННОЕ ОБЪЕДИНЕНИЕ"}),r.jsx("br",{}),"rowSpan=2 + colSpan=2",r.jsx("br",{}),"Занимает 4 ячейки:",r.jsx("br",{}),"(7.2, 7.3, 8.2, 8.3)"]}),r.jsx("td",{style:{backgroundColor:"#f9f9f9"},children:"Ячейка 7.4"}),r.jsx("td",{style:{backgroundColor:"#f9f9f9"},children:"Ячейка 7.5"})]}),r.jsxs("tr",{children:[r.jsx("td",{style:{backgroundColor:"#f9f9f9"},children:"Ячейка 8.1"}),r.jsx("td",{style:{backgroundColor:"#f9f9f9"},children:"Ячейка 8.4"}),r.jsx("td",{style:{backgroundColor:"#f9f9f9"},children:"Ячейка 8.5"})]}),r.jsxs("tr",{children:[r.jsxs("td",{rowSpan:2,colSpan:3,style:{backgroundColor:"#add8e6",textAlign:"center",verticalAlign:"middle"},children:[r.jsx("strong",{children:"ВТОРОЕ ОДНОВРЕМЕННОЕ ОБЪЕДИНЕНИЕ"}),r.jsx("br",{}),"rowSpan=2 + colSpan=3",r.jsx("br",{}),"Занимает 6 ячеек:",r.jsx("br",{}),"(9.1, 9.2, 9.3, 10.1, 10.2, 10.3)"]}),r.jsx("td",{style:{backgroundColor:"#f9f9f9"},children:"Ячейка 9.4"}),r.jsx("td",{style:{backgroundColor:"#f9f9f9"},children:"Ячейка 9.5"})]}),r.jsxs("tr",{children:[r.jsx("td",{style:{backgroundColor:"#f9f9f9"},children:"Ячейка 10.4"}),r.jsx("td",{style:{backgroundColor:"#f9f9f9"},children:"Ячейка 10.5"})]}),r.jsxs("tr",{children:[r.jsx("td",{style:{backgroundColor:"#f9f9f9"},children:"Ячейка 11.1"}),r.jsx("td",{style:{backgroundColor:"#f9f9f9"},children:"Ячейка 11.2"}),r.jsx("td",{style:{backgroundColor:"#f9f9f9"},children:"Ячейка 11.3"}),r.jsx("td",{style:{backgroundColor:"#f9f9f9"},children:"Ячейка 11.4"}),r.jsx("td",{style:{backgroundColor:"#f9f9f9"},children:"Ячейка 11.5"})]})]})]})]})]});t.__docgenInfo={description:"",methods:[],displayName:"Default"};var e,l,d;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => <>\r
    <FButton onClick={async () => {
    await fExportingHtmlToXlsx({
      divId: 'test-export-xlsx',
      fileName: 'example.xlsx'
    });
  }}>\r
      Экспортировать таблицу в xlsx\r
    </FButton>\r
    <div id={'test-export-xlsx'}>\r
      <h2>Тестовая таблица с объединениями ячеек</h2>\r
\r
      <table border={1} cellPadding={8} cellSpacing={0} style={{
      borderCollapse: 'collapse',
      width: '100%',
      maxWidth: '800px',
      margin: '20px 0'
    }}>\r
        <thead>\r
          <tr>\r
            <th colSpan={5} style={{
            backgroundColor: '#f0f0f0',
            textAlign: 'center',
            padding: '12px'
          }}>\r
              Объединённый заголовок (colSpan=5)\r
            </th>\r
          </tr>\r
          <tr>\r
            <th style={{
            backgroundColor: '#e6f3ff'
          }}>Колонка 1</th>\r
            <th style={{
            backgroundColor: '#e6f3ff'
          }}>Колонка 2</th>\r
            <th style={{
            backgroundColor: '#e6f3ff'
          }}>Колонка 3</th>\r
            <th style={{
            backgroundColor: '#e6f3ff'
          }}>Колонка 4</th>\r
            <th style={{
            backgroundColor: '#e6f3ff'
          }}>Колонка 5</th>\r
          </tr>\r
        </thead>\r
\r
        <tbody>\r
          {/* Строка 1 - обычные ячейки */}\r
          <tr>\r
            <td style={{
            backgroundColor: '#fff8e6'
          }}>Ячейка 1.1</td>\r
            <td style={{
            backgroundColor: '#fff8e6'
          }}>Ячейка 1.2</td>\r
            <td style={{
            backgroundColor: '#fff8e6'
          }}>Ячейка 1.3</td>\r
            <td style={{
            backgroundColor: '#fff8e6'
          }}>Ячейка 1.4</td>\r
            <td style={{
            backgroundColor: '#fff8e6'
          }}>Ячейка 1.5</td>\r
          </tr>\r
\r
          {/* Строка 2 - объединение по горизонтали */}\r
          <tr>\r
            <td rowSpan={2} style={{
            backgroundColor: '#e8f5e8'
          }}>\r
              Объединение по вертикали (rowSpan=2)<br />\r
              Строка 1\r
            </td>\r
            <td style={{
            backgroundColor: '#f0e6ff'
          }}>Ячейка 2.2</td>\r
            <td colSpan={2} style={{
            backgroundColor: '#ffe6f0',
            textAlign: 'center'
          }}>\r
              Объединение по горизонтали (colSpan=2)\r
            </td>\r
            <td style={{
            backgroundColor: '#f0e6ff'
          }}>Ячейка 2.5</td>\r
          </tr>\r
\r
          {/* Строка 3 - продолжение объединения */}\r
          <tr>\r
            <td style={{
            backgroundColor: '#f0e6ff'
          }}>Ячейка 3.2</td>\r
            <td style={{
            backgroundColor: '#ffe6f0'
          }}>Ячейка 3.3</td>\r
            <td style={{
            backgroundColor: '#ffe6f0'
          }}>Ячейка 3.4</td>\r
            <td style={{
            backgroundColor: '#f0e6ff'
          }}>Ячейка 3.5</td>\r
          </tr>\r
\r
          {/* Строка 4 - сложное объединение */}\r
          <tr>\r
            <td colSpan={2} style={{
            backgroundColor: '#e6fff0',
            textAlign: 'center'
          }}>\r
              Объединение по горизонтали (colSpan=2)\r
            </td>\r
            <td rowSpan={3} style={{
            backgroundColor: '#ffe6e6',
            textAlign: 'center',
            verticalAlign: 'middle'
          }}>\r
              Объединение по вертикали (rowSpan=3)\r
            </td>\r
            <td style={{
            backgroundColor: '#f5f5f5'
          }}>Ячейка 4.4</td>\r
            <td style={{
            backgroundColor: '#f5f5f5'
          }}>Ячейка 4.5</td>\r
          </tr>\r
\r
          {/* Строка 5 - продолжение сложного объединения */}\r
          <tr>\r
            <td colSpan={2} style={{
            backgroundColor: '#e6fff0',
            textAlign: 'center'
          }}>\r
              Продолжение объединения (colSpan=2)\r
            </td>\r
            <td style={{
            backgroundColor: '#f5f5f5'
          }}>Ячейка 5.4</td>\r
            <td style={{
            backgroundColor: '#f5f5f5'
          }}>Ячейка 5.5</td>\r
          </tr>\r
\r
          {/* Строка 6 - продолжение сложного объединения */}\r
          <tr>\r
            <td style={{
            backgroundColor: '#e6fff0'
          }}>Ячейка 6.1</td>\r
            <td style={{
            backgroundColor: '#e6fff0'
          }}>Ячейка 6.2</td>\r
            <td style={{
            backgroundColor: '#f5f5f5'
          }}>Ячейка 6.4</td>\r
            <td style={{
            backgroundColor: '#f5f5f5'
          }}>Ячейка 6.5</td>\r
          </tr>\r
\r
          {/* Строка 7 - ОДНОВРЕМЕННОЕ объединение через colSpan и rowSpan */}\r
          <tr>\r
            <td style={{
            backgroundColor: '#f9f9f9'
          }}>Ячейка 7.1</td>\r
            <td rowSpan={2} colSpan={2} style={{
            backgroundColor: '#ffcccb',
            textAlign: 'center',
            verticalAlign: 'middle'
          }}>\r
              <strong>ОДНОВРЕМЕННОЕ ОБЪЕДИНЕНИЕ</strong><br />\r
              rowSpan=2 + colSpan=2<br />\r
              Занимает 4 ячейки:<br />\r
              (7.2, 7.3, 8.2, 8.3)\r
            </td>\r
            <td style={{
            backgroundColor: '#f9f9f9'
          }}>Ячейка 7.4</td>\r
            <td style={{
            backgroundColor: '#f9f9f9'
          }}>Ячейка 7.5</td>\r
          </tr>\r
\r
          {/* Строка 8 - продолжение одновременного объединения */}\r
          <tr>\r
            <td style={{
            backgroundColor: '#f9f9f9'
          }}>Ячейка 8.1</td>\r
            {/* Ячейки 8.2 и 8.3 отсутствуют - они объединены с ячейкой 7.2 */}\r
            <td style={{
            backgroundColor: '#f9f9f9'
          }}>Ячейка 8.4</td>\r
            <td style={{
            backgroundColor: '#f9f9f9'
          }}>Ячейка 8.5</td>\r
          </tr>\r
\r
          {/* Строка 9 - ещё один пример одновременного объединения */}\r
          <tr>\r
            <td rowSpan={2} colSpan={3} style={{
            backgroundColor: '#add8e6',
            textAlign: 'center',
            verticalAlign: 'middle'
          }}>\r
              <strong>ВТОРОЕ ОДНОВРЕМЕННОЕ ОБЪЕДИНЕНИЕ</strong><br />\r
              rowSpan=2 + colSpan=3<br />\r
              Занимает 6 ячеек:<br />\r
              (9.1, 9.2, 9.3, 10.1, 10.2, 10.3)\r
            </td>\r
            <td style={{
            backgroundColor: '#f9f9f9'
          }}>Ячейка 9.4</td>\r
            <td style={{
            backgroundColor: '#f9f9f9'
          }}>Ячейка 9.5</td>\r
          </tr>\r
\r
          {/* Строка 10 - продолжение второго одновременного объединения */}\r
          <tr>\r
            <td style={{
            backgroundColor: '#f9f9f9'
          }}>Ячейка 10.4</td>\r
            <td style={{
            backgroundColor: '#f9f9f9'
          }}>Ячейка 10.5</td>\r
          </tr>\r
\r
          {/* Строка 11 - обычные ячейки для завершения */}\r
          <tr>\r
            <td style={{
            backgroundColor: '#f9f9f9'
          }}>Ячейка 11.1</td>\r
            <td style={{
            backgroundColor: '#f9f9f9'
          }}>Ячейка 11.2</td>\r
            <td style={{
            backgroundColor: '#f9f9f9'
          }}>Ячейка 11.3</td>\r
            <td style={{
            backgroundColor: '#f9f9f9'
          }}>Ячейка 11.4</td>\r
            <td style={{
            backgroundColor: '#f9f9f9'
          }}>Ячейка 11.5</td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
  </>`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const er=["Default"];export{t as Default,er as __namedExportsOrder,or as default};
