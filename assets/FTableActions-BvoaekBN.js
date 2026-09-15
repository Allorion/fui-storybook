import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as t,e as C}from"./index-B3j06Xw8.js";import{r as z}from"./index-D_ywfbVi.js";const A=t.createContext({query:"",sort:null}),X="_left_1qyr1_62",O="_center_1qyr1_65",J="_right_1qyr1_68",Y="_justify_1qyr1_71",G="_more_1qyr1_135",g={"f-table-component":"_f-table-component_1qyr1_1","f-table-component__table":"_f-table-component__table_1qyr1_12","f-table-component__table_header":"_f-table-component__table_header_1qyr1_21","is-sticky":"_is-sticky_1qyr1_25","f-table-component__table_header-cell":"_f-table-component__table_header-cell_1qyr1_30","f-table-component__table_body-cell":"_f-table-component__table_body-cell_1qyr1_30","f-table-component__table_body":"_f-table-component__table_body_1qyr1_30","f-table-component__table_row":"_f-table-component__table_row_1qyr1_47","f-table-component__table_row_no-hover":"_f-table-component__table_row_no-hover_1qyr1_47","f-table-component__table_footer":"_f-table-component__table_footer_1qyr1_53",left:X,center:O,right:J,justify:Y,"cell-text":"_cell-text_1qyr1_75","cell-preview":"_cell-preview_1qyr1_99","cell-reveal":"_cell-reveal_1qyr1_110",more:G,"row-menu":"_row-menu_1qyr1_164","table-tools":"_table-tools_1qyr1_251","table-search":"_table-search_1qyr1_257","table-sort":"_table-sort_1qyr1_286","table-empty":"_table-empty_1qyr1_313","cell-tooltip-anchor":"_cell-tooltip-anchor_1qyr1_319","cell-tooltip":"_cell-tooltip_1qyr1_319","cell-tooltip-in":"_cell-tooltip-in_1qyr1_1"},L=({st:u,children:n,textAlignment:r="left",isSticky:a=!0,...l})=>i.jsx("thead",{style:u,...l,className:`${g["f-table-component__table_header"]} ${a?g["is-sticky"]:""} ${l.className||""} ${g[r]}`,children:n});L.__docgenInfo={description:`Компонент FTableHead представляет собой заголовок таблицы (\`<thead>\`).\r
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
@default false`,defaultValue:{value:"true",computed:!1}}}};const $=t.createContext(void 0);function H(u,n=""){return t.Children.toArray(u).flatMap(r=>{if(!t.isValidElement(r))return[r];const a=`${n}${r.key}`;return r.type===t.Fragment?H(r.props.children,`${a}/`):[t.cloneElement(r,{key:a})]})}function I(u){return t.Children.toArray(u).map(n=>typeof n=="string"||typeof n=="number"?String(n):!t.isValidElement(n)||n.props.hidden||n.props["aria-hidden"]===!0||n.props["aria-hidden"]==="true"||typeof n.type!="string"&&n.type!==t.Fragment||["button","input","select","textarea","svg"].includes(String(n.type))?"":I(n.props.children)).join("")}const B=u=>u.normalize("NFKC").toLocaleLowerCase("ru").replace(/\s+/g," ").trim(),Q=new Intl.Collator("ru",{numeric:!0,sensitivity:"base"});function U(u){const n=H(u),r=[{heading:[],groups:[]}];let a=r[0],l,p=0,d=1,h=!1;return n.forEach((c,s)=>{const o=t.isValidElement(c)?H(c.props.children).filter(t.isValidElement):[];if(d=Math.max(d,o.reduce((m,b)=>m+Math.max(1,b.props.colSpan??b.props.col??1),0)),s>=p&&o.length>0&&o.every(m=>!m.props.sortKey&&(m.props.colSpan??m.props.col??1)>1)){a={heading:[c],groups:[]},r.push(a);return}(!l||s>=p)&&(l={rows:[],text:"",values:new Map},a.groups.push(l)),l.rows.push(c),o.forEach(m=>{const b=m.props,w=b.rowSpan??b.row??1;(w===0||w>1)&&(h=!0,p=Math.max(p,w===0?n.length:s+w));const T=b.searchValue??I(b.children);l.text+=` ${B(T)}`,b.sortKey&&!l.values.has(b.sortKey)&&l.values.set(b.sortKey,b.sortValue??T)})}),{rows:n,sections:r,columnCount:d,hasRowSpans:h}}function Z(u,n,r){const a=B(n);return!a&&!r?u.rows:u.sections.flatMap(l=>{const p=l.groups.filter(d=>!a||d.text.includes(a));return r&&p.sort((d,h)=>{const c=d.values.get(r.key),s=h.values.get(r.key),o=m=>m===void 0||String(m).trim()===""||typeof m=="number"&&!Number.isFinite(m);if(o(c)||o(s))return Number(o(c))-Number(o(s));const e=typeof c=="number"&&typeof s=="number"?c-s:Q.compare(String(c),String(s));return r.direction==="ascending"?e:-e}),p.length?[...l.heading,...p.flatMap(d=>d.rows)]:a?[]:l.heading})}function V(u,n){let r=0,a=u.length-1;for(;r<a;){const l=Math.floor((r+a)/2);u[l+1]<=n?r=l+1:a=l}return Math.min(r,Math.max(0,u.length-2))}function W(u,n,r,a){const l=Math.max(0,u.length-1);if(!l)return{start:0,end:0};const p=V(u,Math.max(0,n)),d=V(u,Math.max(0,n)+Math.max(0,r)),h=Math.max(0,Math.min(p-3,l-Math.floor(a))),c=Math.min(l,Math.max(d+4,h+Math.floor(a)));return{start:h,end:c}}const D=({st:u,children:n,textAlignment:r="left",tableWrapperRef:a,visibleRowCount:l,truncateAt:p,...d})=>{const h=t.useRef(null),{query:c,sort:s}=t.useContext(A),o=t.useMemo(()=>U(n),[n]),e=t.useMemo(()=>Z(o,c,s),[o,c,s]),[m,b]=t.useState({top:0,height:0}),[w,T]=t.useState(()=>new Map),_=!!a&&l!==void 0&&Number.isFinite(l)&&l>=1&&!o.hasRowSpans,S=(y,x)=>C.isValidElement(y)?String(y.key??x):String(x),f=t.useMemo(()=>{const y=[0];return _&&e.forEach((x,R)=>y.push(y[R]+(w.get(S(x,R))??32))),y},[e,w,_]),{start:v,end:j}=_?W(f,m.top,m.height,l):{start:0,end:e.length},k=t.useMemo(()=>e.slice(v,j),[e,v,j]);return t.useLayoutEffect(()=>{b(y=>({...y,top:0})),a!=null&&a.current&&(a.current.scrollTop=0)},[c,s,a]),t.useEffect(()=>{const y=new Set(o.rows.map(S));T(x=>{const R=new Map([...x].filter(([q])=>y.has(q)));return R.size===x.size?x:R})},[o]),t.useEffect(()=>{const y=a==null?void 0:a.current;if(!_||!y)return;let x=0,R=y.clientWidth;const q=()=>{cancelAnimationFrame(x),x=requestAnimationFrame(()=>{const E=h.current;if(E){const N=Math.max(0,y.getBoundingClientRect().top+y.clientTop-E.getBoundingClientRect().top),F=y.clientHeight;b(P=>P.top===N&&P.height===F?P:{top:N,height:F})}})};y.addEventListener("scroll",q);const M=new ResizeObserver(()=>{var E;if(y.clientWidth!==R){R=y.clientWidth;const N=((E=h.current)==null?void 0:E.querySelectorAll(":scope > tr[data-table-row-key]"))??[];T(new Map(Array.from(N,F=>[F.getAttribute("data-table-row-key"),F.getBoundingClientRect().height])))}q()});return M.observe(y),q(),()=>{cancelAnimationFrame(x),y.removeEventListener("scroll",q),M.disconnect()}},[a,_,e]),t.useLayoutEffect(()=>{if(!_||!h.current)return;const y=new ResizeObserver(x=>{T(R=>{const q=new Map(R);let M=!1;return x.forEach(({target:E})=>{const N=E.getAttribute("data-table-row-key"),F=E.getBoundingClientRect().height;F>0&&R.get(N)!==F&&(q.set(N,F),M=!0)}),M?q:R})});return h.current.querySelectorAll(":scope > tr[data-table-row-key]").forEach(x=>y.observe(x)),()=>y.disconnect()},[_,k]),i.jsx($.Provider,{value:p,children:i.jsxs("tbody",{ref:h,style:u,...d,className:`${g["f-table-component__table_body"]} ${d.className||""} ${g[r]}`,children:[_&&v>0&&i.jsx("tr",{"aria-hidden":"true",children:i.jsx("td",{colSpan:o.columnCount,style:{height:f[v],padding:0,border:0}})}),k.map((y,x)=>C.isValidElement(y)?C.cloneElement(y,{"data-row-index":v+x,"data-table-row-key":S(y,v+x)}):y),c.trim()&&e.length===0&&i.jsx("tr",{children:i.jsx("td",{colSpan:o.columnCount,className:g["table-empty"],children:i.jsx("span",{role:"status",children:"Ничего не найдено"})})}),_&&j<e.length&&i.jsx("tr",{"aria-hidden":"true",children:i.jsx("td",{colSpan:o.columnCount,style:{height:f[e.length]-f[j],padding:0,border:0}})})]})})},ee=C.memo(D);D.__docgenInfo={description:"",methods:[],displayName:"FTableBody",props:{st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},textAlignment:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'center' | 'justify'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'center'"},{name:"literal",value:"'justify'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},tableWrapperRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},visibleRowCount:{required:!1,tsType:{name:"number"},description:"Минимум отрисованных строк; окно дополняется до высоты контейнера с запасом. При rowSpan рендерятся все строки."},truncateAt:{required:!1,tsType:{name:"number"},description:"Автоматически сокращать текст длиннее указанного числа символов."}}};const te=({st:u,children:n,overflowX:r="auto",overflowY:a="auto",isSticky:l=!0,layout:p="auto",searchable:d=!1,...h})=>{const c=t.useRef(null),[s,o]=t.useState(!1),[e,m]=t.useState(""),b=t.useDeferredValue(d?e:""),[w,T]=t.useState(null),_=t.useCallback(f=>{T(v=>(v==null?void 0:v.key)!==f?{key:f,direction:"ascending"}:v.direction==="ascending"?{key:f,direction:"descending"}:null)},[]),S=t.useMemo(()=>({query:b,sort:w,toggleSort:_}),[b,w,_]);return t.useEffect(()=>{const f=()=>{if(c.current&&l){const j=c.current.scrollTop>0;o(j)}},v=c.current;return v&&v.addEventListener("scroll",f),()=>{v&&v.removeEventListener("scroll",f)}},[]),i.jsxs(A.Provider,{value:S,children:[d&&i.jsx("div",{className:g["table-tools"],children:i.jsxs("label",{className:g["table-search"],children:[i.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[i.jsx("circle",{cx:"11",cy:"11",r:"7"}),i.jsx("path",{d:"m20 20-3.5-3.5"})]}),i.jsx("input",{type:"search","aria-label":"Поиск по таблице",placeholder:"Поиск",value:e,onChange:f=>m(f.target.value),onKeyDown:f=>{f.key==="Escape"&&m("")}})]})}),i.jsx("div",{ref:c,className:g["f-table-component"],style:{overflowX:r,overflowY:a},children:i.jsx("table",{style:{...u,tableLayout:p},...h,className:`table ${g["f-table-component__table"]} ${h.className||""}`,children:C.Children.map(n,f=>{if(C.isValidElement(f)&&f.type===L){const v=f.props;return C.cloneElement(f,{...v,isSticky:s})}if(C.isValidElement(f)&&f.type===ee){const v=f.props;return C.cloneElement(f,{...v,tableWrapperRef:c})}return f})})})]})};te.__docgenInfo={description:`Компонент FTable представляет собой таблицу с возможностью управления переполнением и "липким" заголовком.\r
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
@default "auto"`,defaultValue:{value:'"auto"',computed:!1}},searchable:{required:!1,tsType:{name:"boolean"},description:"Показывает поле поиска по полному тексту строк FTableBody.",defaultValue:{value:"false",computed:!1}}}};const ne=({st:u,children:n,textAlignment:r,disableHover:a=!1,...l})=>{const p=[g["f-table-component__table_row"],l.className||""];return a&&p.push(g["f-table-component__table_row_no-hover"]),r!==void 0&&p.push(g[r]),i.jsx("tr",{style:u,...l,className:p.join(" ").trim(),children:n})};ne.__docgenInfo={description:`Компонент FTableRow представляет собой строку таблицы (\`<tr>\`).\r
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
@default false`,defaultValue:{value:"false",computed:!1}}}};const re=({st:u,row:n,col:r,children:a,textAlignment:l,width:p="auto",sortKey:d,...h})=>{const{sort:c,toggleSort:s}=t.useContext(A),o=!!(d&&s),e=(c==null?void 0:c.key)===d?c==null?void 0:c.direction:void 0,m={textAlign:l,width:p,...u};return i.jsx("th",{rowSpan:n&&n>1?n:void 0,colSpan:r&&r>1?r:void 0,...h,"aria-sort":o?e??"none":h["aria-sort"],className:`${g["f-table-component__table_header-cell"]} ${h.className||""}`,style:m,children:o?i.jsxs("button",{type:"button",className:g["table-sort"],onClick:()=>s==null?void 0:s(d),title:e==="ascending"?"По убыванию":e==="descending"?"Исходный порядок":"По возрастанию",children:[a,i.jsx("span",{"aria-hidden":"true",children:e==="ascending"?"↑":e==="descending"?"↓":"↕"})]}):a})};re.__docgenInfo={description:`Компонент FTableHeaderCell представляет собой ячейку заголовка таблицы (\`<th>\`).\r
Он поддерживает настройку стилей, объединение строк и столбцов, а также выравнивание текста.\r
\r
@component\r
@example\r
<FTableHeaderCell\r
  textAlignment="center"\r
  width="200px"\r
  row={2}\r
  col={3}\r
>\r
  Заголовок\r
</FTableHeaderCell>\r
\r
@param {IFTableHeaderCell} props - Пропсы компонента.\r
@returns {JSX.Element} - Элемент заголовка таблицы.`,methods:[],displayName:"FTableHeaderCell",props:{st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Дополнительные стили для ячейки заголовка.\r
@type {React.CSSProperties}`},row:{required:!1,tsType:{name:"number"},description:`Значение rowspan для объединения строк.\r
@type {number}`},col:{required:!1,tsType:{name:"number"},description:`Значение colspan для объединения столбцов.\r
@type {number}`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Дочерние элементы (например, текст или другие компоненты).\r
@type {React.ReactNode}`},textAlignment:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'center' | 'justify'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'center'"},{name:"literal",value:"'justify'"}]},description:`Выравнивание текста внутри ячейки.\r
@type {'left' | 'right' | 'center' | 'justify'}\r
@default 'left'`},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Ширина ячейки.\r
@type {number | string}\r
@default 'auto'`,defaultValue:{value:"'auto'",computed:!1}},sortKey:{required:!1,tsType:{name:"string"},description:"Включает сортировку по ячейкам FTableDataCell с таким же ключом."}}};function K({text:u,enabled:n,children:r}){const a=t.useId(),l=t.useRef(null),p=t.useRef(null),d=t.useRef(),[h,c]=t.useState(!1),[s,o]=t.useState({top:0,left:0}),e=n&&h,m=()=>{clearTimeout(d.current),c(!0)},b=()=>{clearTimeout(d.current),d.current=setTimeout(()=>c(!1),150)};return t.useEffect(()=>()=>clearTimeout(d.current),[]),t.useEffect(()=>{n||c(!1)},[n]),t.useLayoutEffect(()=>{if(!e)return;const w=()=>{if(!l.current||!p.current)return;const _=l.current.getBoundingClientRect(),S=p.current.getBoundingClientRect(),f=_.bottom+8+S.height<=window.innerHeight-10?_.bottom+8:_.top-S.height-8;o({top:Math.max(10,Math.min(f,window.innerHeight-S.height-10)),left:Math.max(10,Math.min(_.left,window.innerWidth-S.width-10))})},T=_=>{_.key==="Escape"&&(clearTimeout(d.current),c(!1))};return w(),window.addEventListener("resize",w),window.addEventListener("scroll",w,!0),document.addEventListener("keydown",T),()=>{window.removeEventListener("resize",w),window.removeEventListener("scroll",w,!0),document.removeEventListener("keydown",T)}},[e,u]),i.jsxs("span",{ref:l,className:g["cell-tooltip-anchor"],onMouseEnter:m,onMouseLeave:b,onFocus:m,onBlur:b,children:[t.cloneElement(r,{"aria-describedby":e?a:void 0}),e&&z.createPortal(i.jsx("div",{ref:p,id:a,role:"tooltip",className:g["cell-tooltip"],style:s,onMouseEnter:m,onMouseLeave:b,children:u}),document.body)]})}K.__docgenInfo={description:"Full cell text stays reachable by pointer and keyboard outside the scroll container.",methods:[],displayName:"FTableTextTooltip",props:{text:{required:!0,tsType:{name:"string"},description:""},enabled:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactElement",elements:[{name:"HTMLAttributes",elements:[{name:"HTMLButtonElement"}],raw:"HTMLAttributes<HTMLButtonElement>"}],raw:"ReactElement<HTMLAttributes<HTMLButtonElement>>"},description:""}}};const ae=({st:u,row:n,col:r,children:a,textAlignment:l,height:p="auto",truncate:d,sortKey:h,sortValue:c,searchValue:s,...o})=>{const e=t.useContext($),[m,b]=t.useState(!1),w=t.useId(),T=e!==void 0&&Number.isFinite(e)&&e>=1?Math.floor(e):void 0,_=typeof a=="string"||typeof a=="number"?String(a):null,S=_===null?[]:Array.from(_),f=T??80,v=d!==!1&&(d===!0||T!==void 0)&&S.length>f,j={textAlign:l,height:p,...u};return i.jsx("td",{rowSpan:n&&n>1?n:void 0,colSpan:r&&r>1?r:void 0,...o,className:`${g["f-table-component__table_body-cell"]} ${o.className||""}`,style:j,children:v?i.jsx(K,{text:_,enabled:!m,children:i.jsxs("button",{type:"button",className:g["cell-text"],"aria-expanded":m,"aria-controls":w,"data-expanded":m,onClick:()=>b(k=>!k),children:[i.jsxs("span",{className:g["cell-preview"],"aria-hidden":"true",children:[S.slice(0,f).join(""),"…"]}),i.jsx("span",{className:g["cell-reveal"],children:i.jsx("span",{id:w,children:_})})]})}):a})};ae.__docgenInfo={description:`Компонент FTableDataCell представляет собой ячейку данных таблицы (\`<td>\`).\r
Он поддерживает настройку стилей, объединение строк и столбцов, а также обработку событий.\r
\r
@component\r
@example\r
<FTableDataCell\r
  textAlignment="center"\r
  height="50px"\r
  row={2}\r
  col={3}\r
  onClick={() => console.log('Cell clicked!')}\r
>\r
  Ячейка данных\r
</FTableDataCell>\r
\r
@param {IFTableDataCell} props - Пропсы компонента.\r
@returns {JSX.Element} - Элемент данных таблицы.`,methods:[],displayName:"FTableDataCell",props:{st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Дополнительные стили для ячейки таблицы.\r
@type {React.CSSProperties}`},row:{required:!1,tsType:{name:"number"},description:`Значение rowspan для объединения строк.\r
@type {number | undefined}`},col:{required:!1,tsType:{name:"number"},description:`Значение colspan для объединения столбцов.\r
@type {number | undefined}`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Дочерние элементы (например, текст или другие компоненты).\r
@type {React.ReactNode}`},textAlignment:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'center' | 'justify'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'center'"},{name:"literal",value:"'justify'"}]},description:`Выравнивание текста внутри ячейки.\r
@type {'left' | 'right' | 'center' | 'justify'}\r
@default 'left'`},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Высота ячейки.\r
@type {number | string}\r
@default 'auto'`,defaultValue:{value:"'auto'",computed:!1}},truncate:{required:!1,tsType:{name:"boolean"},description:"Сокращение текста; false отменяет truncateAt тела таблицы."},sortKey:{required:!1,tsType:{name:"string"},description:"Уникальный ключ столбца, совпадающий с sortKey заголовка."},sortValue:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Исходное значение для сортировки чисел, дат и JSX."},searchValue:{required:!1,tsType:{name:"string"},description:"Текст для поиска в пользовательском содержимом."}}};const oe=({st:u,children:n,...r})=>i.jsx("tfoot",{style:u,...r,className:`${g["f-table-component__table_footer"]} ${r.className||""}`,children:n});oe.__docgenInfo={description:`Компонент FTableFooter представляет собой нижний колонтитул таблицы (\`<tfoot>\`).\r
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
@type {React.CSSProperties}`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Дочерние элементы (например, строки `<tr>` или ячейки `<td>`).\r\n@type {React.ReactNode}"}}};function le({children:u,className:n,onClick:r,...a}){const l=t.useId(),p=t.useRef(null),d=t.useRef(null),[h,c]=t.useState(!1);return t.useEffect(()=>{const s=p.current,o=()=>{var m,b;const e=s.matches(":popover-open");c(e),e?(m=s.querySelector('button:not(:disabled), a[href], input, [tabindex="0"]'))==null||m.focus():s.contains(document.activeElement)&&((b=d.current)==null||b.focus())};return s.addEventListener("toggle",o),()=>s.removeEventListener("toggle",o)},[]),i.jsxs(i.Fragment,{children:[i.jsx("button",{ref:d,type:"button","aria-label":"Действия",...a,className:`${g.more} ${n||""}`,"aria-expanded":h,"aria-controls":l,onClick:s=>{if(s.stopPropagation(),r==null||r(s),s.defaultPrevented||!p.current)return;const o=s.currentTarget.getBoundingClientRect(),e=p.current;e.style.maxHeight=`${Math.max(0,(o.bottom>window.innerHeight/2?o.top:window.innerHeight-o.bottom)-12)}px`,e.style.left=`${Math.max(8,Math.min(o.right-178,window.innerWidth-186))}px`,e.style.top=`${Math.max(8,o.bottom+4)}px`,e.style.bottom="auto",o.bottom>window.innerHeight/2&&(e.style.top="auto",e.style.bottom=`${Math.max(8,window.innerHeight-o.top+4)}px`),h?e.hidePopover():e.showPopover()},children:i.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:[i.jsx("circle",{cx:"5",cy:"12",r:"1.6"}),i.jsx("circle",{cx:"12",cy:"12",r:"1.6"}),i.jsx("circle",{cx:"19",cy:"12",r:"1.6"})]})}),i.jsx("div",{ref:p,id:l,popover:"auto",className:g["row-menu"],onKeyDown:s=>{var o,e;s.key==="Escape"&&(s.preventDefault(),s.stopPropagation(),(o=d.current)==null||o.focus(),(e=p.current)==null||e.hidePopover())},onClick:s=>{var o,e;s.stopPropagation(),!s.defaultPrevented&&s.target.closest("button:not(:disabled), a[href]")&&((o=d.current)==null||o.focus(),(e=p.current)==null||e.hidePopover())},children:u})]})}le.__docgenInfo={description:"Кнопка действий с произвольным содержимым в нативном popover.",methods:[],displayName:"FTableActions",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["Omit"]};export{te as F,L as a,ne as b,re as c,ee as d,ae as e,oe as f,le as g};
