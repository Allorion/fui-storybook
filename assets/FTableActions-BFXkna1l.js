import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{r as e,e as N}from"./index-B3j06Xw8.js";import{r as z}from"./index-D_ywfbVi.js";const A=e.createContext({query:"",sort:null}),X="_left_18u6h_77",O="_center_18u6h_80",J="_right_18u6h_83",Y="_justify_18u6h_86",G="_more_18u6h_194",_={"f-table-component":"_f-table-component_18u6h_1","f-table-component__table":"_f-table-component__table_18u6h_14","f-table-component__table_header":"_f-table-component__table_header_18u6h_22","is-sticky":"_is-sticky_18u6h_26","f-table-component__table_header-cell":"_f-table-component__table_header-cell_18u6h_32","f-table-component__table_body-cell":"_f-table-component__table_body-cell_18u6h_32","f-table-component__table_body":"_f-table-component__table_body_18u6h_32","f-table-component__table_row":"_f-table-component__table_row_18u6h_60","f-table-component__table_row_no-hover":"_f-table-component__table_row_no-hover_18u6h_60","f-table-component__table_footer":"_f-table-component__table_footer_18u6h_66",left:X,center:O,right:J,justify:Y,"cell-text":"_cell-text_18u6h_90","cell-preview-text":"_cell-preview-text_18u6h_111","cell-preview":"_cell-preview_18u6h_111","cell-reveal":"_cell-reveal_18u6h_168",more:G,"row-menu":"_row-menu_18u6h_225","table-tools":"_table-tools_18u6h_317","table-search":"_table-search_18u6h_323","table-sort":"_table-sort_18u6h_358","table-empty":"_table-empty_18u6h_386","cell-tooltip-anchor":"_cell-tooltip-anchor_18u6h_393","cell-tooltip":"_cell-tooltip_18u6h_393","cell-tooltip-in":"_cell-tooltip-in_18u6h_1"},V=({st:u,children:t,textAlignment:n="left",isSticky:r=!0,...l})=>c.jsx("thead",{style:u,...l,className:`${_["f-table-component__table_header"]} ${r?_["is-sticky"]:""} ${l.className||""} ${_[n]}`,children:t});V.__docgenInfo={description:`Компонент FTableHead представляет собой заголовок таблицы (\`<thead>\`).\r
Он поддерживает настройку стилей, выравнивания текста и режима "липкости".\r
\r
@component\r
@example\r
<FTableHead\r
  textAlignment="center"\r
  isSticky={true}\r
  st={{ backgroundColor: '#f9f9f9' }}\r
>\r
  <tr>\r
    <th>Заголовок 1</th>\r
    <th>Заголовок 2</th>\r
  </tr>\r
</FTableHead>\r
\r
@param {IFTableHead} props - Пропсы компонента.\r
@returns {JSX.Element} - Элемент заголовка таблицы.`,methods:[],displayName:"FTableHead",props:{st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Дополнительные стили для заголовка таблицы.\r
@type {React.CSSProperties}`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Дочерние элементы (например, строки `<tr>` или ячейки `<th>`).\r\n@type {React.ReactNode}"},textAlignment:{required:!1,tsType:{name:"union",raw:'"left" | "right" | "center" | "justify"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"center"'},{name:"literal",value:'"justify"'}]},description:`Выравнивание текста внутри заголовка таблицы.\r
@type {"left" | "right" | "center" | "justify"}\r
@default "left"`,defaultValue:{value:'"left"',computed:!1}},isSticky:{required:!1,tsType:{name:"boolean"},description:`Флаг, указывающий, должен ли заголовок быть "липким" (sticky).\r
@type {boolean}\r
@default false`,defaultValue:{value:"true",computed:!1}}}};const $=e.createContext(void 0);function H(u,t=""){return e.Children.toArray(u).flatMap(n=>{if(!e.isValidElement(n))return[n];const r=`${t}${n.key}`;return n.type===e.Fragment?H(n.props.children,`${r}/`):[e.cloneElement(n,{key:r})]})}function I(u){return e.Children.toArray(u).map(t=>typeof t=="string"||typeof t=="number"?String(t):!e.isValidElement(t)||t.props.hidden||t.props["aria-hidden"]===!0||t.props["aria-hidden"]==="true"||typeof t.type!="string"&&t.type!==e.Fragment||["button","input","select","textarea","svg"].includes(String(t.type))?"":I(t.props.children)).join("")}const B=u=>u.normalize("NFKC").toLocaleLowerCase("ru").replace(/\s+/g," ").trim(),Q=new Intl.Collator("ru",{numeric:!0,sensitivity:"base"});function U(u){const t=H(u),n=[{heading:[],groups:[]}];let r=n[0],l,i=0,d=1,b=!1;return t.forEach((p,s)=>{const a=e.isValidElement(p)?H(p.props.children).filter(e.isValidElement):[];if(d=Math.max(d,a.reduce((f,h)=>f+Math.max(1,h.props.colSpan??h.props.col??1),0)),s>=i&&a.length>0&&a.every(f=>!f.props.sortKey&&(f.props.colSpan??f.props.col??1)>1)){r={heading:[p],groups:[]},n.push(r);return}(!l||s>=i)&&(l={rows:[],text:"",values:new Map},r.groups.push(l)),l.rows.push(p),a.forEach(f=>{const h=f.props,y=h.rowSpan??h.row??1;(y===0||y>1)&&(b=!0,i=Math.max(i,y===0?t.length:s+y));const w=h.searchValue??I(h.children);l.text+=` ${B(w)}`,h.sortKey&&!l.values.has(h.sortKey)&&l.values.set(h.sortKey,h.sortValue??w)})}),{rows:t,sections:n,columnCount:d,hasRowSpans:b}}function Z(u,t,n){const r=B(t);return!r&&!n?u.rows:u.sections.flatMap(l=>{const i=l.groups.filter(d=>!r||d.text.includes(r));return n&&i.sort((d,b)=>{const p=d.values.get(n.key),s=b.values.get(n.key),a=f=>f===void 0||String(f).trim()===""||typeof f=="number"&&!Number.isFinite(f);if(a(p)||a(s))return Number(a(p))-Number(a(s));const o=typeof p=="number"&&typeof s=="number"?p-s:Q.compare(String(p),String(s));return n.direction==="ascending"?o:-o}),i.length?[...l.heading,...i.flatMap(d=>d.rows)]:r?[]:l.heading})}function L(u,t){let n=0,r=u.length-1;for(;n<r;){const l=Math.floor((n+r)/2);u[l+1]<=t?n=l+1:r=l}return Math.min(n,Math.max(0,u.length-2))}function W(u,t,n,r){const l=Math.max(0,u.length-1);if(!l)return{start:0,end:0};const i=L(u,Math.max(0,t)),d=L(u,Math.max(0,t)+Math.max(0,n)),b=Math.max(0,Math.min(i-3,l-Math.floor(r))),p=Math.min(l,Math.max(d+4,b+Math.floor(r)));return{start:b,end:p}}const D=({st:u,children:t,textAlignment:n="left",tableWrapperRef:r,visibleRowCount:l,truncateAt:i,...d})=>{const b=e.useRef(null),{query:p,sort:s}=e.useContext(A),a=e.useMemo(()=>U(t),[t]),o=e.useMemo(()=>Z(a,p,s),[a,p,s]),[f,h]=e.useState({top:0,height:0}),[y,w]=e.useState(()=>new Map),v=!!r&&l!==void 0&&Number.isFinite(l)&&l>=1&&!a.hasRowSpans,R=(m,x)=>N.isValidElement(m)?String(m.key??x):String(x),S=e.useMemo(()=>{const m=[0];return v&&o.forEach((x,F)=>m.push(m[F]+(y.get(R(x,F))??32))),m},[o,y,v]),{start:C,end:g}=v?W(S,f.top,f.height,l):{start:0,end:o.length},T=e.useMemo(()=>o.slice(C,g),[o,C,g]);return e.useLayoutEffect(()=>{h(m=>({...m,top:0})),r!=null&&r.current&&(r.current.scrollTop=0)},[p,s,r]),e.useEffect(()=>{const m=new Set(a.rows.map(R));w(x=>{const F=new Map([...x].filter(([j])=>m.has(j)));return F.size===x.size?x:F})},[a]),e.useEffect(()=>{const m=r==null?void 0:r.current;if(!v||!m)return;let x=0,F=m.clientWidth;const j=()=>{cancelAnimationFrame(x),x=requestAnimationFrame(()=>{const q=b.current;if(q){const M=Math.max(0,m.getBoundingClientRect().top+m.clientTop-q.getBoundingClientRect().top),E=m.clientHeight;h(k=>k.top===M&&k.height===E?k:{top:M,height:E})}})};m.addEventListener("scroll",j);const P=new ResizeObserver(()=>{var q;if(m.clientWidth!==F){F=m.clientWidth;const M=((q=b.current)==null?void 0:q.querySelectorAll(":scope > tr[data-table-row-key]"))??[];w(new Map(Array.from(M,E=>[E.getAttribute("data-table-row-key"),E.getBoundingClientRect().height])))}j()});return P.observe(m),j(),()=>{cancelAnimationFrame(x),m.removeEventListener("scroll",j),P.disconnect()}},[r,v,o]),e.useLayoutEffect(()=>{if(!v||!b.current)return;const m=new ResizeObserver(x=>{w(F=>{const j=new Map(F);let P=!1;return x.forEach(({target:q})=>{const M=q.getAttribute("data-table-row-key"),E=q.getBoundingClientRect().height;E>0&&F.get(M)!==E&&(j.set(M,E),P=!0)}),P?j:F})});return b.current.querySelectorAll(":scope > tr[data-table-row-key]").forEach(x=>m.observe(x)),()=>m.disconnect()},[v,T]),c.jsx($.Provider,{value:i,children:c.jsxs("tbody",{ref:b,style:u,...d,className:`${_["f-table-component__table_body"]} ${d.className||""} ${_[n]}`,children:[v&&C>0&&c.jsx("tr",{"aria-hidden":"true",children:c.jsx("td",{colSpan:a.columnCount,style:{height:S[C],padding:0,border:0}})}),T.map((m,x)=>N.isValidElement(m)?N.cloneElement(m,{"data-row-index":C+x,"data-table-row-key":R(m,C+x)}):m),p.trim()&&o.length===0&&c.jsx("tr",{children:c.jsx("td",{colSpan:a.columnCount,className:_["table-empty"],children:c.jsx("span",{role:"status",children:"Ничего не найдено"})})}),v&&g<o.length&&c.jsx("tr",{"aria-hidden":"true",children:c.jsx("td",{colSpan:a.columnCount,style:{height:S[o.length]-S[g],padding:0,border:0}})})]})})},ee=N.memo(D);D.__docgenInfo={description:"",methods:[],displayName:"FTableBody",props:{st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},textAlignment:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'center' | 'justify'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'center'"},{name:"literal",value:"'justify'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},tableWrapperRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},visibleRowCount:{required:!1,tsType:{name:"number"},description:"Минимум отрисованных строк; окно дополняется до высоты контейнера с запасом. При rowSpan рендерятся все строки."},truncateAt:{required:!1,tsType:{name:"number"},description:"Автоматически сокращать текст длиннее указанного числа символов."}}};const te=({st:u,children:t,overflowX:n="auto",overflowY:r="auto",isSticky:l=!0,layout:i="auto",searchable:d=!1,width:b,minWidth:p,...s})=>{const a=e.useRef(null),[o,f]=e.useState(!1),[h,y]=e.useState(""),w=e.useDeferredValue(d?h:""),[v,R]=e.useState(null),S=e.useCallback(g=>{R(T=>(T==null?void 0:T.key)!==g?{key:g,direction:"ascending"}:T.direction==="ascending"?{key:g,direction:"descending"}:null)},[]),C=e.useMemo(()=>({query:w,sort:v,toggleSort:S}),[w,v,S]);return e.useEffect(()=>{const g=()=>{if(a.current&&l){const m=a.current.scrollTop>0;f(m)}},T=a.current;return T&&T.addEventListener("scroll",g),()=>{T&&T.removeEventListener("scroll",g)}},[]),c.jsxs(A.Provider,{value:C,children:[d&&c.jsx("div",{className:_["table-tools"],children:c.jsxs("label",{className:_["table-search"],children:[c.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[c.jsx("circle",{cx:"11",cy:"11",r:"7"}),c.jsx("path",{d:"m20 20-3.5-3.5"})]}),c.jsx("input",{type:"search","aria-label":"Поиск по таблице",placeholder:"Поиск",value:h,onChange:g=>y(g.target.value),onKeyDown:g=>{g.key==="Escape"&&y("")}})]})}),c.jsx("div",{ref:a,className:_["f-table-component"],style:{overflowX:n,overflowY:r},children:c.jsx("table",{style:{tableLayout:i,...b!==void 0?{width:b}:{},...p!==void 0?{minWidth:p}:{},...u},...s,className:`table ${_["f-table-component__table"]} ${s.className||""}`,children:N.Children.map(t,g=>{if(N.isValidElement(g)&&g.type===V){const T=g.props;return N.cloneElement(g,{...T,isSticky:o})}if(N.isValidElement(g)&&g.type===ee){const T=g.props;return N.cloneElement(g,{...T,tableWrapperRef:a})}return g})})})]})};te.__docgenInfo={description:`Компонент FTable представляет собой таблицу с возможностью управления переполнением и "липким" заголовком.\r
Он поддерживает настройку стилей, обработку скролла и динамическое изменение состояния заголовка.\r
\r
@component\r
@example\r
<FTable overflowX="auto" overflowY="scroll">\r
  <FTableHead>\r
    <tr>\r
      <th>Заголовок 1</th>\r
      <th>Заголовок 2</th>\r
    </tr>\r
  </FTableHead>\r
  <tbody>\r
    <tr>\r
      <td>Ячейка 1</td>\r
      <td>Ячейка 2</td>\r
    </tr>\r
  </tbody>\r
</FTable>\r
\r
@param {IFTable} props - Пропсы компонента.\r
@returns {JSX.Element} - Элемент таблицы.`,methods:[],displayName:"FTable",props:{st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Дополнительные стили для таблицы.\r
@type {React.CSSProperties}`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Дочерние элементы (например, `<thead>`, `<tbody>`, `<tfoot>`).\r\n@type {React.ReactNode}"},overflowX:{required:!1,tsType:{name:"union",raw:'"visible" | "hidden" | "clip" | "scroll" | "auto"',elements:[{name:"literal",value:'"visible"'},{name:"literal",value:'"hidden"'},{name:"literal",value:'"clip"'},{name:"literal",value:'"scroll"'},{name:"literal",value:'"auto"'}]},description:`Управление горизонтальным переполнением контейнера таблицы.\r
@type {"visible" | "hidden" | "clip" | "scroll" | "auto" | undefined}\r
@default "auto"`,defaultValue:{value:'"auto"',computed:!1}},overflowY:{required:!1,tsType:{name:"union",raw:'"visible" | "hidden" | "clip" | "scroll" | "auto"',elements:[{name:"literal",value:'"visible"'},{name:"literal",value:'"hidden"'},{name:"literal",value:'"clip"'},{name:"literal",value:'"scroll"'},{name:"literal",value:'"auto"'}]},description:`Управление вертикальным переполнением контейнера таблицы.\r
@type {"visible" | "hidden" | "clip" | "scroll" | "auto" | undefined}\r
@default "auto"`,defaultValue:{value:'"auto"',computed:!1}},isSticky:{required:!1,tsType:{name:"boolean"},description:`Флаг, указывающий, должен ли заголовок быть "липким" (sticky).\r
@type {boolean}\r
@default false`,defaultValue:{value:"true",computed:!1}},layout:{required:!1,tsType:{name:"union",raw:'"auto" | "fixed"',elements:[{name:"literal",value:'"auto"'},{name:"literal",value:'"fixed"'}]},description:`Определяет алгоритм компоновки таблицы.\r
'auto' - ширина столбцов зависит от содержимого (по умолчанию).\r
'fixed' - ширина столбцов определяется по ширине ячеек в первой строке. Это необходимо для установки фиксированной ширины столбцов.\r
@type {"auto" | "fixed"}\r
@default "auto"`,defaultValue:{value:'"auto"',computed:!1}},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Ширина таблицы.\r
@type {number | string}`},minWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Минимальная ширина таблицы (например, 'max-content', '100%', 1200).\r
@type {number | string}`},searchable:{required:!1,tsType:{name:"boolean"},description:"Показывает поле поиска по полному тексту строк FTableBody.",defaultValue:{value:"false",computed:!1}}}};const ne=({st:u,children:t,textAlignment:n,disableHover:r=!1,...l})=>{const i=[_["f-table-component__table_row"],l.className||""];return r&&i.push(_["f-table-component__table_row_no-hover"]),n!==void 0&&i.push(_[n]),c.jsx("tr",{style:u,...l,className:i.join(" ").trim(),children:t})};ne.__docgenInfo={description:`Компонент FTableRow представляет собой строку таблицы (\`<tr>\`).\r
Он поддерживает настройку стилей и передачу дочерних элементов.\r
\r
@component\r
@example\r
<FTableRow>\r
<td>Ячейка 1</td>\r
<td>Ячейка 2</td>\r
</FTableRow>\r
\r
@param {IFTableRow} props - Пропсы компонента.\r
@returns {JSX.Element} - Элемент строки таблицы.`,methods:[],displayName:"FTableRow",props:{st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Дополнительные стили для строки таблицы.\r
@type {React.CSSProperties}`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Дочерние элементы (например, ячейки `<td>` или `<th>`).\r\n@type {React.ReactNode}"},textAlignment:{required:!1,tsType:{name:"union",raw:'"left" | "right" | "center" | "justify"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"center"'},{name:"literal",value:'"justify"'}]},description:`Выравнивание текста внутри строки.\r
@type {"left" | "right" | "center" | "justify"}\r
@default "left"`},disableHover:{required:!1,tsType:{name:"boolean"},description:`Отключает эффект ховера (hover) для этой строки.\r
@type {boolean}\r
@default false`,defaultValue:{value:"false",computed:!1}}}};const re=({st:u,row:t,col:n,children:r,textAlignment:l,width:i,minWidth:d,maxWidth:b,height:p,sortKey:s,...a})=>{const{sort:o,toggleSort:f}=e.useContext(A),h=!!(s&&f),y=(o==null?void 0:o.key)===s?o==null?void 0:o.direction:void 0,w=d!==void 0?d:i!==void 0&&i!=="auto"&&!String(i).includes("%")?i:void 0,v={textAlign:l,...i!==void 0?{width:i}:{},...w!==void 0?{minWidth:w}:{},...b!==void 0?{maxWidth:b}:{},...p!==void 0?{height:p}:{},...u};return c.jsx("th",{rowSpan:t&&t>1?t:void 0,colSpan:n&&n>1?n:void 0,...a,"aria-sort":h?y??"none":a["aria-sort"],className:`${_["f-table-component__table_header-cell"]} ${a.className||""}`,style:v,children:h?c.jsxs("button",{type:"button",className:_["table-sort"],onClick:()=>f==null?void 0:f(s),title:y==="ascending"?"По убыванию":y==="descending"?"Исходный порядок":"По возрастанию",children:[r,c.jsx("span",{"aria-hidden":"true",children:y==="ascending"?"↑":y==="descending"?"↓":"↕"})]}):r})};re.__docgenInfo={description:`Компонент FTableHeaderCell представляет собой ячейку заголовка таблицы (\`<th>\`).
Он поддерживает настройку стилей, объединение строк и столбцов, а также выравнивание текста.

@component
@example
<FTableHeaderCell
  textAlignment="center"
  width="200px"
  height="40px"
  row={2}
  col={3}
>
  Заголовок
</FTableHeaderCell>

@param {IFTableHeaderCell} props - Пропсы компонента.
@returns {JSX.Element} - Элемент заголовка таблицы.`,methods:[],displayName:"FTableHeaderCell",props:{st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Дополнительные стили для ячейки заголовка.
@type {React.CSSProperties}`},row:{required:!1,tsType:{name:"number"},description:`Значение rowspan для объединения строк.
@type {number}`},col:{required:!1,tsType:{name:"number"},description:`Значение colspan для объединения столбцов.
@type {number}`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Дочерние элементы (например, текст или другие компоненты).
@type {React.ReactNode}`},textAlignment:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'center' | 'justify'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'center'"},{name:"literal",value:"'justify'"}]},description:`Выравнивание текста внутри ячейки.
@type {'left' | 'right' | 'center' | 'justify'}
@default 'left'`},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Ширина ячейки.
@type {number | string}`},minWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Минимальная ширина ячейки.
Если не задана явно, автоматически вычисляется из \`width\` для фиксированных значений (px, числа),
что предотвращает сжатие колонки при нехватке места.
@type {number | string}`},maxWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Максимальная ширина ячейки.
@type {number | string}`},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Высота ячейки.
@type {number | string}`},sortKey:{required:!1,tsType:{name:"string"},description:"Включает сортировку по ячейкам FTableDataCell с таким же ключом."}}};function K({text:u,enabled:t,children:n}){const r=e.useId(),l=e.useRef(null),i=e.useRef(null),d=e.useRef(),[b,p]=e.useState(!1),[s,a]=e.useState({top:0,left:0}),o=t&&b,f=()=>{clearTimeout(d.current),p(!0)},h=()=>{clearTimeout(d.current),d.current=setTimeout(()=>p(!1),150)};return e.useEffect(()=>()=>clearTimeout(d.current),[]),e.useEffect(()=>{t||p(!1)},[t]),e.useLayoutEffect(()=>{if(!o)return;const y=()=>{if(!l.current||!i.current)return;const v=l.current.getBoundingClientRect(),R=i.current.getBoundingClientRect(),S=v.bottom+8+R.height<=window.innerHeight-10?v.bottom+8:v.top-R.height-8;a({top:Math.max(10,Math.min(S,window.innerHeight-R.height-10)),left:Math.max(10,Math.min(v.left,window.innerWidth-R.width-10))})},w=v=>{v.key==="Escape"&&(clearTimeout(d.current),p(!1))};return y(),window.addEventListener("resize",y),window.addEventListener("scroll",y,!0),document.addEventListener("keydown",w),()=>{window.removeEventListener("resize",y),window.removeEventListener("scroll",y,!0),document.removeEventListener("keydown",w)}},[o,u]),c.jsxs("span",{ref:l,className:_["cell-tooltip-anchor"],onMouseEnter:f,onMouseLeave:h,onFocus:f,onBlur:h,children:[e.cloneElement(n,{"aria-describedby":o?r:void 0}),o&&z.createPortal(c.jsx("div",{ref:i,id:r,role:"tooltip",className:_["cell-tooltip"],style:s,onMouseEnter:f,onMouseLeave:h,children:u}),document.body)]})}K.__docgenInfo={description:"Full cell text stays reachable by pointer and keyboard outside the scroll container.",methods:[],displayName:"FTableTextTooltip",props:{text:{required:!0,tsType:{name:"string"},description:""},enabled:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactElement",elements:[{name:"HTMLAttributes",elements:[{name:"HTMLButtonElement"}],raw:"HTMLAttributes<HTMLButtonElement>"}],raw:"ReactElement<HTMLAttributes<HTMLButtonElement>>"},description:""}}};const ae=({st:u,row:t,col:n,children:r,textAlignment:l,width:i,minWidth:d,maxWidth:b,height:p,truncate:s,sortKey:a,sortValue:o,searchValue:f,...h})=>{const y=e.useContext($),[w,v]=e.useState(!1),R=e.useId(),S=typeof r=="string"||typeof r=="number"?String(r):null,C=y!==void 0&&Number.isFinite(y)&&y>=1?Math.floor(y):s?40:void 0,g=s!==!1&&C!==void 0&&S!==null&&S.length>C,T=d!==void 0?d:i!==void 0&&i!=="auto"&&!String(i).includes("%")?i:void 0,m={textAlign:l,...i!==void 0?{width:i}:{},...T!==void 0?{minWidth:T}:{},...b!==void 0?{maxWidth:b}:{},...p!==void 0?{height:p}:{},...u};return c.jsx("td",{rowSpan:t&&t>1?t:void 0,colSpan:n&&n>1?n:void 0,...h,className:`${_["f-table-component__table_body-cell"]} ${h.className||""}`.trim(),style:m,children:g?c.jsx(K,{text:S,enabled:!w,children:c.jsxs("button",{type:"button",className:_["cell-text"],"aria-expanded":w,"aria-controls":R,"data-expanded":w,onClick:()=>v(x=>!x),children:[c.jsx("span",{className:_["cell-preview"],"aria-hidden":"true",children:c.jsx("span",{className:_["cell-preview-text"],children:S})}),c.jsx("span",{className:_["cell-reveal"],children:c.jsx("span",{id:R,children:S})})]})}):r})};ae.__docgenInfo={description:`Компонент \`FTableDataCell\` представляет собой ячейку данных таблицы (\`<td>\`).\r
\r
Поддерживает:\r
- Выравнивание и кастомные стили;\r
- Объединение строк (\`rowSpan\`) и столбцов (\`colSpan\`);\r
- Автоматическое сокращение текста до самого правого края ячейки с многоточием;\r
- Плавное разворачивание полного текста по клику;\r
- Всплывающую подсказку (Tooltip) при наведении на сокращённый текст.\r
\r
@component\r
@example\r
// Простая текстовая ячейка\r
<FTableDataCell textAlignment="center" width="200px" height="40px">\r
  15.09.2026\r
</FTableDataCell>\r
\r
@example\r
// Ячейка с автоматическим сокращением длинного текста до правого края\r
<FTableDataCell truncate textAlignment="left">\r
  Свияжка от истока до города Ульяновск с прилегающими водоохранными зонами\r
</FTableDataCell>\r
\r
@param {IFTableDataCell} props - Входные параметры ячейки таблицы.\r
@returns {JSX.Element} Отрендеренный элемент \`<td>\`.`,methods:[],displayName:"FTableDataCell",props:{st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Дополнительные инлайн-стили для ячейки таблицы.\r
@type {React.CSSProperties}`},row:{required:!1,tsType:{name:"number"},description:`Значение rowspan для объединения строк по вертикали.\r
@type {number | undefined}`},col:{required:!1,tsType:{name:"number"},description:`Значение colspan для объединения столбцов по горизонтали.\r
@type {number | undefined}`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Дочернее содержимое ячейки (текст, число или React-элементы).\r
@type {React.ReactNode}`},textAlignment:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'center' | 'justify'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'center'"},{name:"literal",value:"'justify'"}]},description:`Горизонтальное выравнивание содержимого ячейки.\r
@type {'left' | 'right' | 'center' | 'justify'}\r
@default 'left'`},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Ширина ячейки.\r
@type {number | string}`},minWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Минимальная ширина ячейки.\r
Если не задана явно, автоматически вычисляется из \`width\` для фиксированных значений (px, числа),\r
что предотвращает сжатие колонки при нехватке места.\r
@type {number | string}`},maxWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Максимальная ширина ячейки.\r
@type {number | string}`},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Высота ячейки.\r
@type {number | string}`},truncate:{required:!1,tsType:{name:"boolean"},description:"Флаг сокращения текста.\r\nЕсли установлен в `false`, отменяет сокращение, даже если активен TruncateContext.\r\nЕсли `true` — включает сокращение длинного текста до правого края ячейки.\r\n@type {boolean | undefined}"},sortKey:{required:!1,tsType:{name:"string"},description:"Уникальный ключ столбца, совпадающий с `sortKey` соответствующего заголовка.\r\n@type {string | undefined}"},sortValue:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:`Исходное нормализованное значение для сортировки чисел, дат или JSX.\r
@type {string | number | undefined}`},searchValue:{required:!1,tsType:{name:"string"},description:`Строка для фильтрации и текстового поиска по содержимому ячейки.\r
@type {string | undefined}`}}};const oe=({st:u,children:t,...n})=>c.jsx("tfoot",{style:u,...n,className:`${_["f-table-component__table_footer"]} ${n.className||""}`,children:t});oe.__docgenInfo={description:`Компонент FTableFooter представляет собой нижний колонтитул таблицы (\`<tfoot>\`).\r
Он поддерживает настройку стилей и передачу дочерних элементов.\r
\r
@component\r
@example\r
<FTableFooter st={{ borderTop: '2px solid #000' }}>\r
  <tr>\r
    <td>Итого</td>\r
    <td>100</td>\r
  </tr>\r
</FTableFooter>\r
\r
@param {IFTableFooter} props - Пропсы компонента.\r
@returns {JSX.Element} - Элемент нижнего колонтитула таблицы.`,methods:[],displayName:"FTableFooter",props:{st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Дополнительные стили для нижнего колонтитула таблицы.\r
@type {React.CSSProperties}`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Дочерние элементы (например, строки `<tr>` или ячейки `<td>`).\r\n@type {React.ReactNode}"}}};function se({children:u,className:t,onClick:n,...r}){const l=e.useId(),i=e.useRef(null),d=e.useRef(null),[b,p]=e.useState(!1);return e.useEffect(()=>{const s=i.current,a=()=>{var f,h;const o=s.matches(":popover-open");p(o),o?(f=s.querySelector('button:not(:disabled), a[href], input, [tabindex="0"]'))==null||f.focus():s.contains(document.activeElement)&&((h=d.current)==null||h.focus())};return s.addEventListener("toggle",a),()=>s.removeEventListener("toggle",a)},[]),c.jsxs(c.Fragment,{children:[c.jsx("button",{ref:d,type:"button","aria-label":"Действия",...r,className:`${_.more} ${t||""}`,"aria-expanded":b,"aria-controls":l,onClick:s=>{if(s.stopPropagation(),n==null||n(s),s.defaultPrevented||!i.current)return;const a=s.currentTarget.getBoundingClientRect(),o=i.current;o.style.maxHeight=`${Math.max(0,(a.bottom>window.innerHeight/2?a.top:window.innerHeight-a.bottom)-12)}px`,o.style.left=`${Math.max(8,Math.min(a.right-178,window.innerWidth-186))}px`,o.style.top=`${Math.max(8,a.bottom+4)}px`,o.style.bottom="auto",a.bottom>window.innerHeight/2&&(o.style.top="auto",o.style.bottom=`${Math.max(8,window.innerHeight-a.top+4)}px`),b?o.hidePopover():o.showPopover()},children:c.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:[c.jsx("circle",{cx:"5",cy:"12",r:"1.6"}),c.jsx("circle",{cx:"12",cy:"12",r:"1.6"}),c.jsx("circle",{cx:"19",cy:"12",r:"1.6"})]})}),c.jsx("div",{ref:i,id:l,popover:"auto",className:_["row-menu"],onKeyDown:s=>{var a,o;s.key==="Escape"&&(s.preventDefault(),s.stopPropagation(),(a=d.current)==null||a.focus(),(o=i.current)==null||o.hidePopover())},onClick:s=>{var a,o;s.stopPropagation(),!s.defaultPrevented&&s.target.closest("button:not(:disabled), a[href]")&&((a=d.current)==null||a.focus(),(o=i.current)==null||o.hidePopover())},children:u})]})}se.__docgenInfo={description:"Кнопка действий с произвольным содержимым в нативном popover.",methods:[],displayName:"FTableActions",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["Omit"]};export{te as F,V as a,ne as b,re as c,ee as d,ae as e,oe as f,se as g};
