import{j as F}from"./jsx-runtime-CkxqCPlQ.js";import{F as $}from"./FButton-DnbOfcPR.js";import"./FButtonFile-CHKnFrKb.js";import"./FTextField-DWvp23El.js";import{F as Z}from"./FStack-DvJS5si1.js";import"./FGrid-BWTo3lRs.js";import"./FContainer-Du0Di049.js";import"./FPaper-D6Oo0WgV.js";import{f as Q,g as ee,h as E,i as I,j as te,k as D}from"./FAlert-CefPhZQR.js";import"./FOpenImgFull-BCfLM3yy.js";import"./FProgress-C0i2V36s.js";import"./FCheckbox-D5toGIZf.js";import"./FRadioButton-DGCmVmG5.js";import"./FPagination-BzSu5zBc.js";import"./FTimelineCard-iMEw_La2.js";import"./FInputFileForm-Dh3UBGxg.js";import"./FFile-Cct2s-rO.js";import"./FSelectItem-C7ZDPLu7.js";import"./FFullDateField-Cszra0xD.js";import"./FSelectSearchDb-rImFaTjC.js";import"./FTextArea-DNeFs9G0.js";import"./FNative-D_ve21w6.js";import"./FTab-DIAeKHIc.js";import"./FDropdownItem-BPnZt6Rc.js";import"./FSearchBox-DH0-q64p.js";import"./FCarouselItem-Diq-YX18.js";import"./FSkeleton-DuR3f4nd.js";import{f as A}from"./fConfirm-Bgf3VGVx.js";import{T as ae}from"./jszip.min-BzP_Wsuk.js";/* empty css                      */import"./index-DJO9vBfz.js";/* empty css               *//* empty css                   */import"./FLoadIcon-8HypuZKP.js";import"./FCloseIcon-DM6S50X-.js";import"./FArrowIcon-lNeI-if7.js";import"./index-DLC2J04D.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";class H{constructor(){this.sheet=null,this.workBook=new N("Uni"),this.cell=null,this.style=null,this.merge=null}ngOnInit(e){this.workBook=new N(e)}getWorkBook(e="Uni"){return new N(e)}getSheet(e){return new G(e)}getCell(e=null,t=null){return new K(e,t)}getStyle(e=1,t=0){return new f(e,t)}getMerge(e,t,a,l){return new Y(e,t,a,l)}save(e="file.xlsx"){return new re(this.workBook,e)}static exportDOMToXLSX(e,t="export.xlsx"){let a=function(o,i,n){return o.rowSpan==1?i==0?9:i!=o.colSpan-1?10:11:o.colSpan==1?n==0?12:n!=o.rowSpan-1?13:14:n==0?i==0?1:i!=o.colSpan-1?2:3:n!=o.rowSpan-1?i==0?4:i!=o.colSpan-1?null:5:i==0?6:i!=o.colSpan-1?7:8},l=function(o){if(typeof o>"u"||o.length==0)return 0;let i;for(i=0;i<o.length;i++)if(typeof o[i]>"u")return i;return i},r=function(o){let i=o.trim(),n=i.replace(",",".");return!Number.isNaN(Number.parseFloat(n))&&n==Number.parseFloat(n)?Number.parseFloat(n)<1e11?Number.parseFloat(n):i+" ":i},p=function(o){let i=[];return o.forEach(n=>{if(n.tagName=="TABLE"){let m={type:"table",head:0,merge:[],style:[],data:null,customWidth:{}},x=[],c=0;n.querySelector("thead")!==null&&n.querySelector("thead").querySelectorAll("tr").forEach(S=>{m.head++,typeof x[c]>"u"&&(x[c]=[]),typeof m.style[c]>"u"&&(m.style[c]=[]),S.querySelectorAll("th").forEach(u=>{let w=l(x[c]);if(x[c][w]=r(u.innerText),u.colSpan==1&&(m.customWidth[w+1]=u.clientWidth/9,m.customWidth[w+1]<3&&(m.customWidth[w+1]=19)),u.rowSpan>1||u.colSpan>1){m.merge.push([w+1,c+1,w+u.colSpan,c+u.rowSpan]);for(let C=0;C<u.rowSpan;C++)for(let v=0;v<u.colSpan;v++){if(typeof m.style[c+C]>"u"&&(m.style[c+C]=Array()),m.style[c+C][w+v]=a(u,v,C),C==0){if(v==0)continue}else typeof x[c+C]>"u"&&(x[c+C]=Array());x[c+C][w+v]=""}}else m.style[c][w]=0}),c++}),n.querySelector("tbody")!==null&&n.querySelector("tbody").querySelectorAll("tr").forEach(S=>{typeof x[c]>"u"&&(x[c]=[]),typeof m.style[c]>"u"&&(m.style[c]=[]),S.querySelectorAll("td, th").forEach(u=>{let w=l(x[c]);if(x[c][w]=r(u.innerText),u.colSpan==1&&(m.customWidth[w+1]=u.clientWidth/9,m.customWidth[w+1]<3&&(m.customWidth[w+1]=20)),u.rowSpan>1||u.colSpan>1){m.merge.push([w+1,c+1,w+u.colSpan,c+u.rowSpan]);for(let C=0;C<u.rowSpan;C++)for(let v=0;v<u.colSpan;v++){if(typeof m.style[c+C]>"u"&&(m.style[c+C]=Array()),m.style[c+C][w+v]=a(u,v,C),C==0){if(v==0)continue}else typeof x[c+C]>"u"&&(x[c+C]=Array());x[c+C][w+v]=""}}else m.style[c][w]=0}),c++}),m.data=x,i.push(m)}else if(n.tagName=="BR")i.push({type:"text",data:"",tags:[]});else if(n.childNodes.length>1)p(n.childNodes).forEach(m=>{i.push(m)});else if(n.tagName!="#text"&&n.innerText!==void 0){let m={type:"text",data:n.innerText,tags:[]};i.push(m)}else if(n.tagName=="#text"){let m={type:"text",data:n.textContent,tags:[]};i.push(m)}}),i};const b=function(o){return typeof o>"u"?"undefined":o===null?"null":Object.prototype.toString.call(o).match(/^\[object\s(.*)\]$/)[1]};let g=[];b(e)=="NodeList"?g=p(e):g=p(e.childNodes);let d=new H;d.workBook.createSheet("List 1");let T=1,y=!1,s=[];return g.forEach(o=>{if(o.type=="text"&&o.data.split(`
`).forEach(i=>{d.workBook.addCell(0,T,i),T++}),o.type=="table"){let i=d.workBook.sheet[0].getMaxRow();y||(H.createStyleTable().forEach(n=>{s.push(d.workBook.addStyle(n))}),H.createStyleNumberTable().forEach(n=>{s.push(d.workBook.addStyle(n))}),y=!0),o.data.forEach((n,m)=>{n.forEach((x,c)=>{let S=0;typeof o.style[m][c]!=null?typeof x=="number"?S=s[o.style[m][c]+15]:S=s[o.style[m][c]]:typeof x=="number"&&(S=2),d.workBook.addCell(0,T,x,S)}),T++}),o.merge.forEach(n=>{d.workBook.sheet[0].addMerges(n[0],n[1]+i,n[2],n[3]+i)}),Object.keys(o.customWidth).forEach(n=>{d.workBook.sheet[0].setCustomWidth(o.customWidth[n],n)})}}),d}static createStyleTable(){let e=new f;e.border={left:["thin",'rgb="FF000000"'],right:["thin",'rgb="FF000000"'],top:["thin",'rgb="FF000000"'],bottom:["thin",'rgb="FF000000"'],diagonal:[]},e.alignment.wrapText=!0;let t=new f;t.border={left:["thin",'rgb="FF000000"'],right:[],top:["thin",'rgb="FF000000"'],bottom:[],diagonal:[]},t.alignment.wrapText=!0;let a=new f;a.border={left:[],right:[],top:["thin",'rgb="FF000000"'],bottom:[],diagonal:[]},a.alignment.wrapText=!0;let l=new f;l.border={left:["thin",'rgb="FF000000"'],right:["thin",'rgb="FF000000"'],top:[],bottom:[],diagonal:[]},l.alignment.wrapText=!0;let r=new f;r.border={left:["thin",'rgb="FF000000"'],right:[],top:[],bottom:[],diagonal:[]},r.alignment.wrapText=!0;let p=new f;p.border={left:[],right:["thin",'rgb="FF000000"'],top:[],bottom:[],diagonal:[]},p.alignment.wrapText=!0;let b=new f;b.border={left:["thin",'rgb="FF000000"'],right:[],top:[],bottom:["thin",'rgb="FF000000"'],diagonal:[]},b.alignment.wrapText=!0;let g=new f;g.border={left:[],right:[],top:[],bottom:["thin",'rgb="FF000000"'],diagonal:[]},g.alignment.wrapText=!0;let d=new f;d.border={left:[],right:["thin",'rgb="FF000000"'],top:[],bottom:["thin",'rgb="FF000000"'],diagonal:[]},d.alignment.wrapText=!0;let T=new f;T.border={left:["thin",'rgb="FF000000"'],right:[],top:["thin",'rgb="FF000000"'],bottom:["thin",'rgb="FF000000"'],diagonal:[]},T.alignment.wrapText=!0;let y=new f;y.border={left:[],right:[],top:["thin",'rgb="FF000000"'],bottom:["thin",'rgb="FF000000"'],diagonal:[]},y.alignment.wrapText=!0;let s=new f;s.border={left:[],right:["thin",'rgb="FF000000"'],top:["thin",'rgb="FF000000"'],bottom:["thin",'rgb="FF000000"'],diagonal:[]};let o=new f;o.border={left:["thin",'rgb="FF000000"'],right:["thin",'rgb="FF000000"'],top:["thin",'rgb="FF000000"'],bottom:[],diagonal:[]};let i=new f;i.border={left:["thin",'rgb="FF000000"'],right:["thin",'rgb="FF000000"'],top:[],bottom:[],diagonal:[]};let n=new f;return n.border={left:["thin",'rgb="FF000000"'],right:["thin",'rgb="FF000000"'],top:[],bottom:["thin",'rgb="FF000000"'],diagonal:[]},s.alignment.wrapText=!0,[e,t,a,l,r,p,b,g,d,T,y,s,o,i,n]}static createStyleNumberTable(){let e=new f;e.border={left:["thin",'rgb="FF000000"'],right:["thin",'rgb="FF000000"'],top:["thin",'rgb="FF000000"'],bottom:["thin",'rgb="FF000000"'],diagonal:[]},e.numFmtId=164,e.alignment.wrapText=!0;let t=new f;t.border={left:["thin",'rgb="FF000000"'],right:[],top:["thin",'rgb="FF000000"'],bottom:[],diagonal:[]},t.alignment.wrapText=!0,t.numFmtId=164;let a=new f;a.border={left:[],right:[],top:["thin",'rgb="FF000000"'],bottom:[],diagonal:[]},a.alignment.wrapText=!0,a.numFmtId=164;let l=new f;l.border={left:["thin",'rgb="FF000000"'],right:["thin",'rgb="FF000000"'],top:[],bottom:[],diagonal:[]},l.alignment.wrapText=!0,l.numFmtId=164;let r=new f;r.border={left:["thin",'rgb="FF000000"'],right:[],top:[],bottom:[],diagonal:[]},r.alignment.wrapText=!0,r.numFmtId=164;let p=new f;p.border={left:[],right:["thin",'rgb="FF000000"'],top:[],bottom:[],diagonal:[]},p.alignment.wrapText=!0,p.numFmtId=164;let b=new f;b.border={left:["thin",'rgb="FF000000"'],right:[],top:[],bottom:["thin",'rgb="FF000000"'],diagonal:[]},b.alignment.wrapText=!0,b.numFmtId=164;let g=new f;g.border={left:[],right:[],top:[],bottom:["thin",'rgb="FF000000"'],diagonal:[]},g.alignment.wrapText=!0,g.numFmtId=164;let d=new f;d.border={left:[],right:["thin",'rgb="FF000000"'],top:[],bottom:["thin",'rgb="FF000000"'],diagonal:[]},d.alignment.wrapText=!0,d.numFmtId=164;let T=new f;T.border={left:["thin",'rgb="FF000000"'],right:[],top:["thin",'rgb="FF000000"'],bottom:["thin",'rgb="FF000000"'],diagonal:[]},T.alignment.wrapText=!0,T.numFmtId=164;let y=new f;y.border={left:[],right:[],top:["thin",'rgb="FF000000"'],bottom:["thin",'rgb="FF000000"'],diagonal:[]},y.alignment.wrapText=!0,y.numFmtId=164;let s=new f;s.border={left:[],right:["thin",'rgb="FF000000"'],top:["thin",'rgb="FF000000"'],bottom:["thin",'rgb="FF000000"'],diagonal:[]},s.numFmtId=164;let o=new f;o.border={left:["thin",'rgb="FF000000"'],right:["thin",'rgb="FF000000"'],top:["thin",'rgb="FF000000"'],bottom:[],diagonal:[]},o.numFmtId=164;let i=new f;i.border={left:["thin",'rgb="FF000000"'],right:["thin",'rgb="FF000000"'],top:[],bottom:[],diagonal:[]},i.numFmtId=164;let n=new f;return n.border={left:["thin",'rgb="FF000000"'],right:["thin",'rgb="FF000000"'],top:[],bottom:["thin",'rgb="FF000000"'],diagonal:[]},n.numFmtId=164,s.alignment.wrapText=!0,[e,t,a,l,r,p,b,g,d,T,y,s,o,i,n]}}class f{constructor(e=0,t=0){this.font={sz:11,color:"FF000000",name:"Calibri",tags:[]},this.border={left:[],right:[],top:[],bottom:[],diagonal:[]},this.fill={patternType:"none"},this.alignment={horizontal:null,vertical:null,wrapText:null},this.number=e,this.numFmtId=t}getXMLFont(){let e="<font>";return e+='<sz val="'+this.font.sz+'"/>',e+='<color rgb="'+this.font.color+'"/>',e+='<name val="'+this.font.name+'"/>',e+='<scheme val="minor"/>',this.font.tags.forEach(t=>{e+="<"+t+" />"}),e+="</font>",e}getXMLBorder(){let e="<border>";return this.border.left.length==0?e+="<left />":(e+='<left style="'+this.border.left[0]+'">',e+="<color "+this.border.left[1]+"/>",e+="</left>"),this.border.right.length==0?e+="<right />":(e+='<right style="'+this.border.right[0]+'">',e+="<color "+this.border.right[1]+"/>",e+="</right>"),this.border.top.length==0?e+="<top />":(e+='<top style="'+this.border.top[0]+'">',e+="<color "+this.border.top[1]+"/>",e+="</top>"),this.border.bottom.length==0?e+="<bottom />":(e+='<bottom style="'+this.border.bottom[0]+'">',e+="<color "+this.border.bottom[1]+"/>",e+="</bottom>"),this.border.diagonal.length==0?e+="<diagonal />":(e+='<diagonal style="'+this.border.diagonal[0]+'">',e+="<color "+this.border.diagonal[1]+"/>",e+="</diagonal>"),e+="</border>",e}getXMLFill(){}getNumber(){return this.number}isTrueAlignment(){return this.alignment.horizontal!==null||this.alignment.vertical!==null||this.alignment.wrapText!==null}addTag(e){this.font.tags.push(e)}getHashFont(){let e=this.font.sz+"px;";return e+=this.font.color+"rgb;",e+=this.font.name+"fa;",this.font.tags.forEach(t=>{e+=t+"tag;"}),L(e)}getHashBorder(){let e=this.border.top[0]+"st;";return e+=this.border.top[1]+"color;",e+=this.border.left[0]+"st;",e+=this.border.left[1]+"color;",e+=this.border.right[0]+"st;",e+=this.border.right[1]+"color;",e+=this.border.bottom[0]+"st;",e+=this.border.bottom[1]+"color;",e+=this.border.diagonal[0]+"st;",e+=this.border.diagonal[1]+"color;",L(e)}getHashFill(){let e=this.fill.patternType+"type;";return L(e)}getHash(){let e=this.font.sz+"px;";e+=this.font.color+"rgb;",e+=this.font.name+"fa;",this.font.tags.forEach(r=>{e+=r+"tag;"}),e+=this.border.top[0]+"st;",e+=this.border.top[1]+"color;",e+=this.border.left[0]+"st;",e+=this.border.left[1]+"color;",e+=this.border.right[0]+"st;",e+=this.border.right[1]+"color;",e+=this.border.bottom[0]+"st;",e+=this.border.bottom[1]+"color;",e+=this.border.diagonal[0]+"st;",e+=this.border.diagonal[1]+"color;",e+=this.fill.patternType+"type;",e+=this.numFmtId+"num;";let t=this.alignment.horizontal!==null?this.alignment.horizontal:"null";e+=t+"hor;";let a=this.alignment.vertical!==null?this.alignment.vertical:"null";e+=a+"ver;";let l=this.alignment.wrapText!==null?this.alignment.wrapText:"null";return e+=l+"wra;",L(e)}}class N{constructor(e="Uni"){this.sheet=[],this.nameSheet=[],this.styleList=[new f(1),new f(1,164)],this.nextStyle=2,this.author="Uni",this.author=e}createSheet(e){return this.sheet.push(new G(e)),this.nameSheet.push(e),this.sheet.length-1}getIndexSheet(e){return e.indexOf(e)}getNameSheet(){return this.nameSheet}getSheet(){return this.sheet}addRow(e,t=null){return this.sheet[e].addRow(t)}addCell(e,t,a,l=null){Number.isInteger(l)&&(l=this.styleList[l]),this.sheet[e].addCell(t,a,l)}getStyleList(){return this.styleList}getAuthor(){return this.author}addStyle(e){return e.number=this.nextStyle,this.nextStyle++,this.styleList.push(e),e.number}}class G{constructor(e){this.rows={},this.lastRow=1,this.maxCol=1,this.merges=[],this.autoFilter=[],this.name="",this.customWidth=[],this.name=e}getName(){return this.name}getRows(){return this.rows}getMerges(){return this.merges}getMaxCol(){return this.maxCol}getMaxRow(){return this.lastRow-1}addRow(e=null){return e!==null?this.rows[this.lastRow]=e:this.rows[this.lastRow]=new le,this.lastRow++,this.lastRow-1}addCell(e,t,a=null){for(;typeof this.rows[e]>"u";)this.addRow();this.rows[e].push(new K(t,a)),this.rows[e].length>this.maxCol&&(this.maxCol=this.rows[e].length)}addMerges(e,t,a,l){let r=new Y(e,t,a,l);this.merges.push(r)}setCustomWidth(e,t){this.customWidth[t]=e}}class le{constructor(){this.cells={},this.length=0,this.lastCell=1}push(e){this.cells[this.lastCell]=e,this.lastCell++,this.length++}getSizeRow(){return this.length}getCells(){return this.cells}}class K{constructor(e=null,t=null){this.data=null,this.style=null,this.data=e,this.style=t}isNumber(){return+this.data==this.data&&!this.haveWhitespace()}haveWhitespace(){return typeof this.data=="string"&&this.data.substr(-1)!=" "}isNull(){return this.data==""||this.data===null}getStyleNum(){return this.style===null?this.isNumber()?1:0:this.style.getNumber()}getData(){return this.data}setData(e){+e==e?this.data=+e:this.data=e}setStyle(e){this.style=e}}class Y{constructor(e,t,a,l){this.data=[e,t,a,l]}getFirst(){return[this.data[0],this.data[1]]}getLast(){return[this.data[2],this.data[3]]}getMerge(){return R(this.data[0])+this.data[1]+":"+R(this.data[2])+this.data[3]}}class re{constructor(e,t="file.xlsx"){this.sharedString=new Array,this.styleHash=new Array,this.sharedString=[];let a=new ae;a.file("[Content_Types].xml",this.createXMLContentTypes(e.getSheet().length)),a.folder("_rels"),a.file("_rels/.rels",this.returnRelsMain()),a.folder("docProps"),a.file("docProps/app.xml",this.createXMLApp(e.getNameSheet())),a.file("docProps/core.xml",this.createXMLCore(e.getAuthor())),a.folder("xl"),a.file("xl/workbook.xml",this.createXMLWorkBook(e.getNameSheet())),a.file("xl/styles.xml",this.createStyle(e.getStyleList())),a.folder("xl/worksheets"),e.getSheet().forEach((r,p)=>{a.file("xl/worksheets/sheet"+(p+1)+".xml",this.createXMLShell(r,e.getStyleList()))}),a.file("xl/sharedStrings.xml",this.createXMLSharedStrings()),a.folder("xl/_rels"),a.file("xl/_rels/workbook.xml.rels",this.createXMLRelsWorkBook(e.getSheet().length)),a.folder("xl/theme"),a.file("xl/theme/theme1.xml",this.returnThemeOne());var l=a.generate({type:"base64"});this.download(l,t)}createXMLApp(e){let t=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"><Application>XLSX-Uni</Application><DocSecurity>0</DocSecurity>`;return t+='<HeadingPairs><vt:vector size="2" baseType="variant"><vt:variant><vt:lpstr>Лист</vt:lpstr></vt:variant><vt:variant><vt:i4>'+e.length+"</vt:i4></vt:variant></vt:vector></HeadingPairs>",t+='<TitlesOfParts><vt:vector size="'+e.length+'" baseType="lpstr">',e.forEach(a=>{t+="<vt:lpstr>"+a+"</vt:lpstr>"}),t+="</vt:vector></TitlesOfParts>",t+="</Properties>",t}createXMLCore(e){let t=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">`;return t+="<dc:creator>"+e+"</dc:creator>",t+='<dcterms:created xsi:type="dcterms:W3CDTF">'+oe()+"</dcterms:created>",t+="</cp:coreProperties>",t}createXMLShell(e,t){let a=e.getRows(),l=`<?xml version="1.0" encoding="UTF-8"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:etc="http://www.wps.cn/officeDocument/2017/etCustomData" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main" xmlns:xdr="http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing">`;l+='<dimension ref="A1:'+R(e.getMaxCol())+e.getMaxRow()+'" />',l+='<sheetViews><sheetView tabSelected="1" workbookViewId="0"><selection activeCell="A1" sqref="A1" /></sheetView></sheetViews><sheetFormatPr defaultColWidth="9" defaultRowHeight="20" outlineLevelCol="6" />',e.customWidth.length>0&&(l+="<cols>",e.customWidth.forEach((b,g)=>{typeof b<"u"&&(l+='<col min="'+g+'" max="'+g+'" width="'+b+'" customWidth="1" />')}),l+="</cols>"),l+="<sheetData>";let r=0;Object.keys(a).forEach(b=>{let g=a[b],d=b+Number.parseInt(g.getSizeRow());l+='<row r="'+b+'" spans="'+b+":"+d+'">';let T=g.getCells();Object.keys(T).forEach(y=>{let s=Number.parseInt(y),o=T[s];typeof o.getData()=="number"?l+='<c r="'+R(s)+b+'" s="'+this.styleHash.indexOf(t[o.getStyleNum()].getHash())+'"><v>'+o.getData()+"</v></c>":o.isNull()?l+='<c r="'+R(s)+b+'" s="'+this.styleHash.indexOf(t[o.getStyleNum()].getHash())+'" />':(l+='<c r="'+R(s)+b+'" s="'+this.styleHash.indexOf(t[o.getStyleNum()].getHash())+'" t="s"><v>'+r+"</v></c>",this.sharedString.push(o.getData()),r++)}),l+="</row>"}),l+="</sheetData>";let p=e.getMerges();return p.length>0&&(l+='<mergeCells count="'+p.length+'">',p.forEach(b=>{l+='<mergeCell ref="'+b.getMerge()+'" />'}),l+="</mergeCells>"),l+="<headerFooter /></worksheet>",l}createXMLSharedStrings(){let e=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="9" uniqueCount="9">`;return this.sharedString.forEach(t=>{e+="<si><t>"+t+"</t></si>"}),e+="</sst>",e}createXMLWorkBook(e){let t=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><fileVersion appName="xl" lastEdited="3" lowestEdited="0" rupBuild="9302"/><workbookPr/>`;return t+='<bookViews><workbookView windowHeight="17715"  /></bookViews>',t+="<sheets>",e.forEach((a,l)=>{const r=l+1;t+='<sheet name="'+a+'" sheetId="'+r+'" r:id="rId'+r+'"/>'}),t+="</sheets>",t+='<calcPr calcId="0" />',t+="</workbook>",t}createXMLContentTypes(e){let t=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/>`;t+='<Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/>',t+='<Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>',t+='<Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>',t+='<Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>',t+='<Override PartName="/xl/theme/theme1.xml" ContentType="application/vnd.openxmlformats-officedocument.theme+xml"/>',t+='<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>';for(let a=1;a<=e;a++)t+='<Override PartName="/xl/worksheets/sheet'+a+'.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>';return t+="</Types>",t}createXMLRelsWorkBook(e){let t=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/><Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="theme/theme1.xml"/>`;for(let a=1;a<=e;a++)t+='<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet'+a+'.xml"/>';return t+="</Relationships>",t}returnRelsMain(){return`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/></Relationships>`}createStyle(e){let t=`<?xml version="1.0" encoding="UTF-8"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><numFmts count="1"><numFmt numFmtId="180" formatCode="0.000000" /></numFmts>`,a="",l=0,r=[];e.forEach(s=>{r.indexOf(s.getHashFont())===-1&&(a+=s.getXMLFont(),l++,r.push(s.getHashFont()))}),t+='<fonts count="'+l+'">'+a+"</fonts>",t+='<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>';let p="",b=0,g=[];e.forEach(s=>{g.indexOf(s.getHashBorder())===-1&&(p+=s.getXMLBorder(),b++,g.push(s.getHashBorder()))}),t+='<borders count="'+b+'">'+p+"</borders>",t+='<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" /></cellStyleXfs>';let d="",T=0,y=[];return e.forEach((s,o)=>{y.indexOf(s.getHash())===-1&&(d+='<xf numFmtId="'+0+'" fontId="'+r.indexOf(s.getHashFont())+'" fillId="0" borderId="'+g.indexOf(s.getHashBorder())+'" xfId="0" applyFont="1" applyFill="1" applyBorder="1" ',s.isTrueAlignment()?(d+='applyAlignment="1"><alignment ',s.alignment.horizontal!==null&&(d+='horizontal="'+s.alignment.horizontal+'" '),s.alignment.vertical!==null&&(d+='vertical="'+s.alignment.vertical+'" '),s.alignment.wrapText!==null&&(d+='wrapText="1" '),d+="/>"):d+=">",d+="</xf>",T++,y.push(s.getHash()))}),t+='<cellXfs count="'+T+'">'+d+"</cellXfs>",this.styleHash=y,t+='<cellStyles count="1"><cellStyle name="Обычный" xfId="0" builtinId="0" /></cellStyles><dxfs count="0" />',t+="</styleSheet>",t}returnThemeOne(){return`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office"><a:themeElements><a:clrScheme name="Office"><a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1><a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1><a:dk2><a:srgbClr val="44546A"/></a:dk2><a:lt2><a:srgbClr val="E7E6E6"/></a:lt2><a:accent1><a:srgbClr val="5B9BD5"/></a:accent1><a:accent2><a:srgbClr val="ED7D31"/></a:accent2><a:accent3><a:srgbClr val="A5A5A5"/></a:accent3><a:accent4><a:srgbClr val="FFC000"/></a:accent4><a:accent5><a:srgbClr val="4472C4"/></a:accent5><a:accent6><a:srgbClr val="70AD47"/></a:accent6><a:hlink><a:srgbClr val="0563C1"/></a:hlink><a:folHlink><a:srgbClr val="954F72"/></a:folHlink></a:clrScheme><a:fontScheme name="Office"><a:majorFont><a:latin typeface="Calibri Light"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="宋体"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Times New Roman"/><a:font script="Hebr" typeface="Times New Roman"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="MoolBoran"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Times New Roman"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:majorFont><a:minorFont><a:latin typeface="Calibri"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="宋体"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Arial"/><a:font script="Hebr" typeface="Arial"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="DaunPenh"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Arial"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:minorFont></a:fontScheme><a:fmtScheme name="Office"><a:fillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:lumMod val="110000"/><a:satMod val="105000"/><a:tint val="67000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="103000"/><a:tint val="73000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="109000"/><a:tint val="81000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:satMod val="103000"/><a:lumMod val="102000"/><a:tint val="94000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:satMod val="110000"/><a:lumMod val="100000"/><a:shade val="100000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="99000"/><a:satMod val="120000"/><a:shade val="78000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:fillStyleLst><a:lnStyleLst><a:ln w="6350" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="12700" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="19050" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln></a:lnStyleLst><a:effectStyleLst><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst><a:outerShdw blurRad="57150" dist="19050" dir="5400000" algn="ctr" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="63000"/></a:srgbClr></a:outerShdw></a:effectLst></a:effectStyle></a:effectStyleLst><a:bgFillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:solidFill><a:schemeClr val="phClr"><a:tint val="95000"/><a:satMod val="170000"/></a:schemeClr></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="93000"/><a:satMod val="150000"/><a:shade val="98000"/><a:lumMod val="102000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:tint val="98000"/><a:satMod val="130000"/><a:shade val="90000"/><a:lumMod val="103000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="63000"/><a:satMod val="120000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:bgFillStyleLst></a:fmtScheme></a:themeElements><a:objectDefaults/></a:theme>`}download(e,t){let a=document.createElement("a");for(var l=atob(e),r=[],p=0;p<l.length;p+=512){for(var b=l.slice(p,p+512),g=new Array(b.length),d=0;d<b.length;d++)g[d]=b.charCodeAt(d);var T=new Uint8Array(g);r.push(T)}var y=new Blob(r,{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});let s=URL.createObjectURL(y);a.href=s,a.download=t,document.body.appendChild(a),a.click(),setTimeout(function(){document.body.removeChild(a),window.URL.revokeObjectURL(s)},0)}}function oe(){const h=new Date,e=h.getUTCFullYear(),t=h.getUTCMonth()+1,a=h.getUTCDate(),l=h.getUTCHours(),r=h.getUTCMinutes(),p=h.getUTCSeconds();return e+"-"+(t>9?t:"0"+t)+"-"+(a>9?a:"0"+a)+"T"+(l>9?l:"0"+l)+":"+(r>9?r:"0"+r)+":"+(p>9?p:"0"+p)+"Z"}function R(h){const e=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];if(h<=26)return e[h-1];let t="";for(;h>0;){let a=h%26-1;t+=e[a>=0?a:25],h=Number.parseInt((h/26).toString())}return t.split("").reverse().join("")}function L(h,e=0){let t=3735928559^e,a=1103547991^e;for(let l=0,r;l<h.length;l++)r=h.charCodeAt(l),t=Math.imul(t^r,2654435761),a=Math.imul(a^r,1597334677);return t=Math.imul(t^t>>>16,2246822507)^Math.imul(a^a>>>13,3266489909),a=Math.imul(a^a>>>16,2246822507)^Math.imul(t^t>>>13,3266489909),4294967296*(2097151&a)+(t>>>0)}function ne(h){return new Promise(e=>{const t=document.createElement("div");t.innerHTML=h;const a=Array.from(t.querySelectorAll("table, span, br, p, h1, h2, h3, h4, h5"));if(a){const l=document.createElement("div");a.forEach(r=>{l.appendChild(r)}),e(l)}else e(null)})}const J=async({tableId:h,fileName:e,jsxElement:t,divId:a})=>{if(h!==void 0&&t===void 0&&a===void 0){const l=document.getElementById(h);if(l){const r=document.createElement("div"),p=l.cloneNode(!0);return r.appendChild(p),H.exportDOMToXLSX(r).save(`${e}.xlsx`),!0}else return!1}else if(t!==void 0&&a===void 0&&h===void 0){let l=!1;return await ne(t).then(r=>{r!==null?(H.exportDOMToXLSX(r).save(`${e}.xlsx`),l=!0):l=!1}),l}else if(a!==void 0&&t===void 0&&h===void 0){const l=document.getElementById(a);if(l!==null){const r=document.createElement("div");return l.querySelectorAll("span, p, br, p, table").forEach(b=>{const g=b.cloneNode(!0);r.appendChild(g)}),H.exportDOMToXLSX(r).save(`${e}.xlsx`),!0}else return!1}else return!1},$e={title:"Function Elements/FExportTableToExcel",tags:["autodocs"]},_=h=>F.jsxs(F.Fragment,{children:[F.jsx($,{onClick:()=>{J(h).then(e=>{e?A({title:"Файл создан",variant:"success",body:"Таблица добавлена в Excel"}):A({title:"Файл не создан",variant:"error",body:"Таблица не добавлена в Excel"})})},children:"Экспортировать в Excel"}),F.jsxs("div",{id:`${h.divId!==void 0?h.divId:""}`,children:[F.jsxs(Q,{id:`${h.tableId!==void 0?h.tableId:""}`,children:[F.jsxs(ee,{children:[F.jsxs(E,{children:[F.jsx(I,{row:2,children:"№ п/п"}),F.jsx(I,{col:2,children:"Разработчики"})]}),F.jsxs(E,{children:[F.jsx(I,{children:"Имя"}),F.jsx(I,{children:"Возраст"})]})]}),F.jsxs(te,{children:[F.jsxs(E,{children:[F.jsx(D,{children:"1"}),F.jsx(D,{children:"Влад"}),F.jsx(D,{children:"23"})]}),F.jsxs(E,{children:[F.jsx(D,{children:"2"}),F.jsx(D,{children:"Стас"}),F.jsx(D,{children:"24"})]}),F.jsxs(E,{children:[F.jsx(D,{children:"3"}),F.jsx(D,{children:"Ваня"}),F.jsx(D,{children:"24"})]})]})]}),F.jsx("span",{children:`onClick={() => {
                        fExportTableToExcel({tableId: 'test-export-table', fileName: 'testExport'}).then(result => {
                            if (result) {
                                fAlert({
                                    title: 'Файл создан',
                                    variant: "success",
                                    body: 'Таблица добавлена в Excel'
                                })
                            } else {
                                fAlert({
                                    title: 'Файл не создан',
                                    variant: "error",
                                    body: 'Таблица не добавлена в Excel'
                                })
                            }
                        })
                    }}`})]})]}),k=_.bind({});k.args={fileName:"testExport",tableId:"test-export-table"};const M=_.bind({});M.args={fileName:"testExport",divId:"test-div-export-table"};const se=h=>F.jsx(F.Fragment,{children:F.jsxs(Z,{direction:"column",spacing:2,children:[F.jsx($,{onClick:()=>{J(h).then(e=>{e?A({title:"Файл создан",variant:"success",body:"Таблица добавлена в Excel"}):A({title:"Файл не создан",variant:"error",body:"Таблица не добавлена в Excel"})})},children:"Экспортировать в Excel"}),F.jsx("span",{children:"В jsxElement необходимо передать значение с типом JSX.Element внутри обязательно должны находиться теги таблицы можно использовать помимо стандартных html тегов, теги FUI. Можно передавать несколько таблиц, обязательное условие они должны быть объедены в общий тег. Можно передавать просто текст, но он также должен быть оформлен в виде таблицы"}),F.jsx("h5",{children:"Пример jsxElement"}),F.jsx("span",{children:`<>
            <h1>Тут заголовок формы от можно использовать h1-h5</h1>
            <br/>
            <span>Тут текст в теге span</span>
            <br/>
            <p>Тут текст в теге p</p>
            <br/>
            <span>чтобы сделать отступ в одну строку можно использовать тег br</span>
            <br/>
            <FTable>
                <FTableHead>
                    <FTableRow>
                        <FTableHeaderCell row={2}>№ п/п</FTableHeaderCell>
                        <FTableHeaderCell col={2}>Разработчики</FTableHeaderCell>
                    </FTableRow>
                    <FTableRow>
                        <FTableHeaderCell>Имя</FTableHeaderCell>
                        <FTableHeaderCell>Возраст</FTableHeaderCell>
                    </FTableRow>
                </FTableHead>
                <FTableBody>
                    <FTableRow>
                        <FTableDataCell>1</FTableDataCell>
                        <FTableDataCell>Влад</FTableDataCell>
                        <FTableDataCell>23</FTableDataCell>
                    </FTableRow>
                    <FTableRow>
                        <FTableDataCell>2</FTableDataCell>
                        <FTableDataCell>Стас</FTableDataCell>
                        <FTableDataCell>24</FTableDataCell>
                    </FTableRow>
                    <FTableRow>
                        <FTableDataCell>3</FTableDataCell>
                        <FTableDataCell>Ваня</FTableDataCell>
                        <FTableDataCell>24</FTableDataCell>
                    </FTableRow>
                </FTableBody>
            </FTable>
            <br/>
            <FTable>
                <FTableHead>
                    <FTableRow>
                        <FTableHeaderCell row={2}>№ п/п</FTableHeaderCell>
                        <FTableHeaderCell col={2}>Разработчики</FTableHeaderCell>
                    </FTableRow>
                    <FTableRow>
                        <FTableHeaderCell>Имя</FTableHeaderCell>
                        <FTableHeaderCell>Возраст</FTableHeaderCell>
                    </FTableRow>
                </FTableHead>
                <FTableBody>
                    <FTableRow>
                        <FTableDataCell>1</FTableDataCell>
                        <FTableDataCell>Влад</FTableDataCell>
                        <FTableDataCell>23</FTableDataCell>
                    </FTableRow>
                    <FTableRow>
                        <FTableDataCell>2</FTableDataCell>
                        <FTableDataCell>Стас</FTableDataCell>
                        <FTableDataCell>24</FTableDataCell>
                    </FTableRow>
                    <FTableRow>
                        <FTableDataCell>3</FTableDataCell>
                        <FTableDataCell>Ваня</FTableDataCell>
                        <FTableDataCell>24</FTableDataCell>
                    </FTableRow>
                </FTableBody>
            </FTable>
        </>`})]})}),B=se.bind({});B.args={fileName:"testExport",jsxElement:`
        <>
            <h1>Тут заголовок формы от можно использовать h1-h5</h1>
            <br/>
            <span>Тут текст в теге span</span>
            <br/>
            <p>Тут текст в теге p</p>
            <br/>
            <span>чтобы сделать отступ в одну строку можно использовать тег br</span>
            <br/>
            <FTable>
                <FTableHead>
                    <FTableRow>
                        <FTableHeaderCell row={2}>№ п/п</FTableHeaderCell>
                        <FTableHeaderCell col={2}>Разработчики</FTableHeaderCell>
                    </FTableRow>
                    <FTableRow>
                        <FTableHeaderCell>Имя</FTableHeaderCell>
                        <FTableHeaderCell>Возраст</FTableHeaderCell>
                    </FTableRow>
                </FTableHead>
                <FTableBody>
                    <FTableRow>
                        <FTableDataCell>1</FTableDataCell>
                        <FTableDataCell>Влад</FTableDataCell>
                        <FTableDataCell>23</FTableDataCell>
                    </FTableRow>
                    <FTableRow>
                        <FTableDataCell>2</FTableDataCell>
                        <FTableDataCell>Стас</FTableDataCell>
                        <FTableDataCell>24</FTableDataCell>
                    </FTableRow>
                    <FTableRow>
                        <FTableDataCell>3</FTableDataCell>
                        <FTableDataCell>Ваня</FTableDataCell>
                        <FTableDataCell>24</FTableDataCell>
                    </FTableRow>
                </FTableBody>
            </FTable>
            <br/>
            <FTable>
                <FTableHead>
                    <FTableRow>
                        <FTableHeaderCell row={2}>№ п/п</FTableHeaderCell>
                        <FTableHeaderCell col={2}>Разработчики</FTableHeaderCell>
                    </FTableRow>
                    <FTableRow>
                        <FTableHeaderCell>Имя</FTableHeaderCell>
                        <FTableHeaderCell>Возраст</FTableHeaderCell>
                    </FTableRow>
                </FTableHead>
                <FTableBody>
                    <FTableRow>
                        <FTableDataCell>1</FTableDataCell>
                        <FTableDataCell>Влад</FTableDataCell>
                        <FTableDataCell>23</FTableDataCell>
                    </FTableRow>
                    <FTableRow>
                        <FTableDataCell>2</FTableDataCell>
                        <FTableDataCell>Стас</FTableDataCell>
                        <FTableDataCell>24</FTableDataCell>
                    </FTableRow>
                    <FTableRow>
                        <FTableDataCell>3</FTableDataCell>
                        <FTableDataCell>Ваня</FTableDataCell>
                        <FTableDataCell>24</FTableDataCell>
                    </FTableRow>
                </FTableBody>
            </FTable>
        </>`};var j,X,O;k.parameters={...k.parameters,docs:{...(j=k.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  return <Fragment>\r
            <FButton onClick={() => {
      fExportTableToExcel(args).then(result => {
        if (result) {
          fAlert({
            title: 'Файл создан',
            variant: "success",
            body: 'Таблица добавлена в Excel'
          });
        } else {
          fAlert({
            title: 'Файл не создан',
            variant: "error",
            body: 'Таблица не добавлена в Excel'
          });
        }
      });
    }}>\r
                Экспортировать в Excel\r
            </FButton>\r
            <div id={\`\${args.divId !== undefined ? args.divId : ''}\`}>\r
                <FTable id={\`\${args.tableId !== undefined ? args.tableId : ''}\`}>\r
                    <FTableHead>\r
                        <FTableRow>\r
                            <FTableHeaderCell row={2}>№ п/п</FTableHeaderCell>\r
                            <FTableHeaderCell col={2}>Разработчики</FTableHeaderCell>\r
                        </FTableRow>\r
                        <FTableRow>\r
                            <FTableHeaderCell>Имя</FTableHeaderCell>\r
                            <FTableHeaderCell>Возраст</FTableHeaderCell>\r
                        </FTableRow>\r
                    </FTableHead>\r
                    <FTableBody>\r
                        <FTableRow>\r
                            <FTableDataCell>1</FTableDataCell>\r
                            <FTableDataCell>Влад</FTableDataCell>\r
                            <FTableDataCell>23</FTableDataCell>\r
                        </FTableRow>\r
                        <FTableRow>\r
                            <FTableDataCell>2</FTableDataCell>\r
                            <FTableDataCell>Стас</FTableDataCell>\r
                            <FTableDataCell>24</FTableDataCell>\r
                        </FTableRow>\r
                        <FTableRow>\r
                            <FTableDataCell>3</FTableDataCell>\r
                            <FTableDataCell>Ваня</FTableDataCell>\r
                            <FTableDataCell>24</FTableDataCell>\r
                        </FTableRow>\r
                    </FTableBody>\r
                </FTable>\r
                <span>\r
                    {\`onClick={() => {
                        fExportTableToExcel({tableId: 'test-export-table', fileName: 'testExport'}).then(result => {
                            if (result) {
                                fAlert({
                                    title: 'Файл создан',
                                    variant: "success",
                                    body: 'Таблица добавлена в Excel'
                                })
                            } else {
                                fAlert({
                                    title: 'Файл не создан',
                                    variant: "error",
                                    body: 'Таблица не добавлена в Excel'
                                })
                            }
                        })
                    }}\`}\r
                </span>\r
            </div>\r
        </Fragment>;
}`,...(O=(X=k.parameters)==null?void 0:X.docs)==null?void 0:O.source}}};var W,P,U;M.parameters={...M.parameters,docs:{...(W=M.parameters)==null?void 0:W.docs,source:{originalSource:`args => {
  return <Fragment>\r
            <FButton onClick={() => {
      fExportTableToExcel(args).then(result => {
        if (result) {
          fAlert({
            title: 'Файл создан',
            variant: "success",
            body: 'Таблица добавлена в Excel'
          });
        } else {
          fAlert({
            title: 'Файл не создан',
            variant: "error",
            body: 'Таблица не добавлена в Excel'
          });
        }
      });
    }}>\r
                Экспортировать в Excel\r
            </FButton>\r
            <div id={\`\${args.divId !== undefined ? args.divId : ''}\`}>\r
                <FTable id={\`\${args.tableId !== undefined ? args.tableId : ''}\`}>\r
                    <FTableHead>\r
                        <FTableRow>\r
                            <FTableHeaderCell row={2}>№ п/п</FTableHeaderCell>\r
                            <FTableHeaderCell col={2}>Разработчики</FTableHeaderCell>\r
                        </FTableRow>\r
                        <FTableRow>\r
                            <FTableHeaderCell>Имя</FTableHeaderCell>\r
                            <FTableHeaderCell>Возраст</FTableHeaderCell>\r
                        </FTableRow>\r
                    </FTableHead>\r
                    <FTableBody>\r
                        <FTableRow>\r
                            <FTableDataCell>1</FTableDataCell>\r
                            <FTableDataCell>Влад</FTableDataCell>\r
                            <FTableDataCell>23</FTableDataCell>\r
                        </FTableRow>\r
                        <FTableRow>\r
                            <FTableDataCell>2</FTableDataCell>\r
                            <FTableDataCell>Стас</FTableDataCell>\r
                            <FTableDataCell>24</FTableDataCell>\r
                        </FTableRow>\r
                        <FTableRow>\r
                            <FTableDataCell>3</FTableDataCell>\r
                            <FTableDataCell>Ваня</FTableDataCell>\r
                            <FTableDataCell>24</FTableDataCell>\r
                        </FTableRow>\r
                    </FTableBody>\r
                </FTable>\r
                <span>\r
                    {\`onClick={() => {
                        fExportTableToExcel({tableId: 'test-export-table', fileName: 'testExport'}).then(result => {
                            if (result) {
                                fAlert({
                                    title: 'Файл создан',
                                    variant: "success",
                                    body: 'Таблица добавлена в Excel'
                                })
                            } else {
                                fAlert({
                                    title: 'Файл не создан',
                                    variant: "error",
                                    body: 'Таблица не добавлена в Excel'
                                })
                            }
                        })
                    }}\`}\r
                </span>\r
            </div>\r
        </Fragment>;
}`,...(U=(P=M.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var z,V,q;B.parameters={...B.parameters,docs:{...(z=B.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
  return <Fragment>\r
            <FStack direction={'column'} spacing={2}>\r
                <FButton onClick={() => {
        fExportTableToExcel(args).then(result => {
          if (result) {
            fAlert({
              title: 'Файл создан',
              variant: "success",
              body: 'Таблица добавлена в Excel'
            });
          } else {
            fAlert({
              title: 'Файл не создан',
              variant: "error",
              body: 'Таблица не добавлена в Excel'
            });
          }
        });
      }}>\r
                    Экспортировать в Excel\r
                </FButton>\r
                <span>\r
                    В jsxElement необходимо передать значение с типом JSX.Element внутри обязательно должны находиться теги таблицы\r
                    можно использовать помимо стандартных html тегов, теги FUI. Можно передавать несколько таблиц, обязательное условие\r
                    они должны быть объедены в общий тег. Можно передавать просто текст, но он также должен быть оформлен в виде таблицы\r
                </span>\r
                <h5>Пример jsxElement</h5>\r
                <span>\r
                    {\`<>
            <h1>Тут заголовок формы от можно использовать h1-h5</h1>
            <br/>
            <span>Тут текст в теге span</span>
            <br/>
            <p>Тут текст в теге p</p>
            <br/>
            <span>чтобы сделать отступ в одну строку можно использовать тег br</span>
            <br/>
            <FTable>
                <FTableHead>
                    <FTableRow>
                        <FTableHeaderCell row={2}>№ п/п</FTableHeaderCell>
                        <FTableHeaderCell col={2}>Разработчики</FTableHeaderCell>
                    </FTableRow>
                    <FTableRow>
                        <FTableHeaderCell>Имя</FTableHeaderCell>
                        <FTableHeaderCell>Возраст</FTableHeaderCell>
                    </FTableRow>
                </FTableHead>
                <FTableBody>
                    <FTableRow>
                        <FTableDataCell>1</FTableDataCell>
                        <FTableDataCell>Влад</FTableDataCell>
                        <FTableDataCell>23</FTableDataCell>
                    </FTableRow>
                    <FTableRow>
                        <FTableDataCell>2</FTableDataCell>
                        <FTableDataCell>Стас</FTableDataCell>
                        <FTableDataCell>24</FTableDataCell>
                    </FTableRow>
                    <FTableRow>
                        <FTableDataCell>3</FTableDataCell>
                        <FTableDataCell>Ваня</FTableDataCell>
                        <FTableDataCell>24</FTableDataCell>
                    </FTableRow>
                </FTableBody>
            </FTable>
            <br/>
            <FTable>
                <FTableHead>
                    <FTableRow>
                        <FTableHeaderCell row={2}>№ п/п</FTableHeaderCell>
                        <FTableHeaderCell col={2}>Разработчики</FTableHeaderCell>
                    </FTableRow>
                    <FTableRow>
                        <FTableHeaderCell>Имя</FTableHeaderCell>
                        <FTableHeaderCell>Возраст</FTableHeaderCell>
                    </FTableRow>
                </FTableHead>
                <FTableBody>
                    <FTableRow>
                        <FTableDataCell>1</FTableDataCell>
                        <FTableDataCell>Влад</FTableDataCell>
                        <FTableDataCell>23</FTableDataCell>
                    </FTableRow>
                    <FTableRow>
                        <FTableDataCell>2</FTableDataCell>
                        <FTableDataCell>Стас</FTableDataCell>
                        <FTableDataCell>24</FTableDataCell>
                    </FTableRow>
                    <FTableRow>
                        <FTableDataCell>3</FTableDataCell>
                        <FTableDataCell>Ваня</FTableDataCell>
                        <FTableDataCell>24</FTableDataCell>
                    </FTableRow>
                </FTableBody>
            </FTable>
        </>\`}\r
                </span>\r
            </FStack>\r
        </Fragment>;
}`,...(q=(V=B.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};const Ge=["TableId","DivId","TableHTML"];export{M as DivId,B as TableHTML,k as TableId,Ge as __namedExportsOrder,$e as default};
