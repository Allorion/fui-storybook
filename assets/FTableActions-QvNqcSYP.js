import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as e,e as j}from"./index-B3j06Xw8.js";import{r as z}from"./index-D_ywfbVi.js";const H=e.createContext({query:"",sort:null}),X="_left_13igk_78",O="_center_13igk_81",J="_right_13igk_84",Y="_justify_13igk_87",G="_more_13igk_195",_={"f-table-component":"_f-table-component_13igk_1","f-table-component__table":"_f-table-component__table_13igk_13","f-table-component__table_header":"_f-table-component__table_header_13igk_23","is-sticky":"_is-sticky_13igk_27","f-table-component__table_header-cell":"_f-table-component__table_header-cell_13igk_33","f-table-component__table_body-cell":"_f-table-component__table_body-cell_13igk_33","f-table-component__table_body":"_f-table-component__table_body_13igk_33","f-table-component__table_row":"_f-table-component__table_row_13igk_61","f-table-component__table_row_no-hover":"_f-table-component__table_row_no-hover_13igk_61","f-table-component__table_footer":"_f-table-component__table_footer_13igk_67",left:X,center:O,right:J,justify:Y,"cell-text":"_cell-text_13igk_91","cell-preview-text":"_cell-preview-text_13igk_112","cell-preview":"_cell-preview_13igk_112","cell-reveal":"_cell-reveal_13igk_169",more:G,"row-menu":"_row-menu_13igk_226","table-tools":"_table-tools_13igk_318","table-search":"_table-search_13igk_324","table-sort":"_table-sort_13igk_359","table-empty":"_table-empty_13igk_387","cell-tooltip-anchor":"_cell-tooltip-anchor_13igk_394","cell-tooltip":"_cell-tooltip_13igk_394","cell-tooltip-in":"_cell-tooltip-in_13igk_1"},V=({st:c,children:t,textAlignment:n="left",isSticky:r=!0,...s})=>i.jsx("thead",{style:c,...s,className:`${_["f-table-component__table_header"]} ${r?_["is-sticky"]:""} ${s.className||""} ${_[n]}`,children:t});V.__docgenInfo={description:`Компонент FTableHead представляет собой заголовок таблицы (\`<thead>\`).\r
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
@default false`,defaultValue:{value:"true",computed:!1}}}};const $=e.createContext(void 0);function P(c,t=""){return e.Children.toArray(c).flatMap(n=>{if(!e.isValidElement(n))return[n];const r=`${t}${n.key}`;return n.type===e.Fragment?P(n.props.children,`${r}/`):[e.cloneElement(n,{key:r})]})}function I(c){return e.Children.toArray(c).map(t=>typeof t=="string"||typeof t=="number"?String(t):!e.isValidElement(t)||t.props.hidden||t.props["aria-hidden"]===!0||t.props["aria-hidden"]==="true"||typeof t.type!="string"&&t.type!==e.Fragment||["button","input","select","textarea","svg"].includes(String(t.type))?"":I(t.props.children)).join("")}const B=c=>c.normalize("NFKC").toLocaleLowerCase("ru").replace(/\s+/g," ").trim(),Q=new Intl.Collator("ru",{numeric:!0,sensitivity:"base"});function U(c){const t=P(c),n=[{heading:[],groups:[]}];let r=n[0],s,p=0,m=1,y=!1;return t.forEach((d,l)=>{const a=e.isValidElement(d)?P(d.props.children).filter(e.isValidElement):[];if(m=Math.max(m,a.reduce((u,f)=>u+Math.max(1,f.props.colSpan??f.props.col??1),0)),l>=p&&a.length>0&&a.every(u=>!u.props.sortKey&&(u.props.colSpan??u.props.col??1)>1)){r={heading:[d],groups:[]},n.push(r);return}(!s||l>=p)&&(s={rows:[],text:"",values:new Map},r.groups.push(s)),s.rows.push(d),a.forEach(u=>{const f=u.props,v=f.rowSpan??f.row??1;(v===0||v>1)&&(y=!0,p=Math.max(p,v===0?t.length:l+v));const T=f.searchValue??I(f.children);s.text+=` ${B(T)}`,f.sortKey&&!s.values.has(f.sortKey)&&s.values.set(f.sortKey,f.sortValue??T)})}),{rows:t,sections:n,columnCount:m,hasRowSpans:y}}function Z(c,t,n){const r=B(t);return!r&&!n?c.rows:c.sections.flatMap(s=>{const p=s.groups.filter(m=>!r||m.text.includes(r));return n&&p.sort((m,y)=>{const d=m.values.get(n.key),l=y.values.get(n.key),a=u=>u===void 0||String(u).trim()===""||typeof u=="number"&&!Number.isFinite(u);if(a(d)||a(l))return Number(a(d))-Number(a(l));const o=typeof d=="number"&&typeof l=="number"?d-l:Q.compare(String(d),String(l));return n.direction==="ascending"?o:-o}),p.length?[...s.heading,...p.flatMap(m=>m.rows)]:r?[]:s.heading})}function L(c,t){let n=0,r=c.length-1;for(;n<r;){const s=Math.floor((n+r)/2);c[s+1]<=t?n=s+1:r=s}return Math.min(n,Math.max(0,c.length-2))}function W(c,t,n,r){const s=Math.max(0,c.length-1);if(!s)return{start:0,end:0};const p=L(c,Math.max(0,t)),m=L(c,Math.max(0,t)+Math.max(0,n)),y=Math.max(0,Math.min(p-3,s-Math.floor(r))),d=Math.min(s,Math.max(m+4,y+Math.floor(r)));return{start:y,end:d}}const D=({st:c,children:t,textAlignment:n="left",tableWrapperRef:r,visibleRowCount:s,truncateAt:p,...m})=>{const y=e.useRef(null),{query:d,sort:l}=e.useContext(H),a=e.useMemo(()=>U(t),[t]),o=e.useMemo(()=>Z(a,d,l),[a,d,l]),[u,f]=e.useState({top:0,height:0}),[v,T]=e.useState(()=>new Map),g=!!r&&s!==void 0&&Number.isFinite(s)&&s>=1&&!a.hasRowSpans,S=(b,x)=>j.isValidElement(b)?String(b.key??x):String(x),h=e.useMemo(()=>{const b=[0];return g&&o.forEach((x,R)=>b.push(b[R]+(v.get(S(x,R))??32))),b},[o,v,g]),{start:w,end:E}=g?W(h,u.top,u.height,s):{start:0,end:o.length},A=e.useMemo(()=>o.slice(w,E),[o,w,E]);return e.useLayoutEffect(()=>{f(b=>({...b,top:0})),r!=null&&r.current&&(r.current.scrollTop=0)},[d,l,r]),e.useEffect(()=>{const b=new Set(a.rows.map(S));T(x=>{const R=new Map([...x].filter(([F])=>b.has(F)));return R.size===x.size?x:R})},[a]),e.useEffect(()=>{const b=r==null?void 0:r.current;if(!g||!b)return;let x=0,R=b.clientWidth;const F=()=>{cancelAnimationFrame(x),x=requestAnimationFrame(()=>{const N=y.current;if(N){const k=Math.max(0,b.getBoundingClientRect().top+b.clientTop-N.getBoundingClientRect().top),C=b.clientHeight;f(M=>M.top===k&&M.height===C?M:{top:k,height:C})}})};b.addEventListener("scroll",F);const q=new ResizeObserver(()=>{var N;if(b.clientWidth!==R){R=b.clientWidth;const k=((N=y.current)==null?void 0:N.querySelectorAll(":scope > tr[data-table-row-key]"))??[];T(new Map(Array.from(k,C=>[C.getAttribute("data-table-row-key"),C.getBoundingClientRect().height])))}F()});return q.observe(b),F(),()=>{cancelAnimationFrame(x),b.removeEventListener("scroll",F),q.disconnect()}},[r,g,o]),e.useLayoutEffect(()=>{if(!g||!y.current)return;const b=new ResizeObserver(x=>{T(R=>{const F=new Map(R);let q=!1;return x.forEach(({target:N})=>{const k=N.getAttribute("data-table-row-key"),C=N.getBoundingClientRect().height;C>0&&R.get(k)!==C&&(F.set(k,C),q=!0)}),q?F:R})});return y.current.querySelectorAll(":scope > tr[data-table-row-key]").forEach(x=>b.observe(x)),()=>b.disconnect()},[g,A]),i.jsx($.Provider,{value:p,children:i.jsxs("tbody",{ref:y,style:c,...m,className:`${_["f-table-component__table_body"]} ${m.className||""} ${_[n]}`,children:[g&&w>0&&i.jsx("tr",{"aria-hidden":"true",children:i.jsx("td",{colSpan:a.columnCount,style:{height:h[w],padding:0,border:0}})}),A.map((b,x)=>j.isValidElement(b)?j.cloneElement(b,{"data-row-index":w+x,"data-table-row-key":S(b,w+x)}):b),d.trim()&&o.length===0&&i.jsx("tr",{children:i.jsx("td",{colSpan:a.columnCount,className:_["table-empty"],children:i.jsx("span",{role:"status",children:"Ничего не найдено"})})}),g&&E<o.length&&i.jsx("tr",{"aria-hidden":"true",children:i.jsx("td",{colSpan:a.columnCount,style:{height:h[o.length]-h[E],padding:0,border:0}})})]})})},ee=j.memo(D);D.__docgenInfo={description:"",methods:[],displayName:"FTableBody",props:{st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},textAlignment:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'center' | 'justify'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'center'"},{name:"literal",value:"'justify'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},tableWrapperRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},visibleRowCount:{required:!1,tsType:{name:"number"},description:"Минимум отрисованных строк; окно дополняется до высоты контейнера с запасом. При rowSpan рендерятся все строки."},truncateAt:{required:!1,tsType:{name:"number"},description:"Автоматически сокращать текст длиннее указанного числа символов."}}};const te=({st:c,children:t,overflowX:n="auto",overflowY:r="auto",isSticky:s=!0,layout:p="auto",searchable:m=!1,...y})=>{const d=e.useRef(null),[l,a]=e.useState(!1),[o,u]=e.useState(""),f=e.useDeferredValue(m?o:""),[v,T]=e.useState(null),g=e.useCallback(h=>{T(w=>(w==null?void 0:w.key)!==h?{key:h,direction:"ascending"}:w.direction==="ascending"?{key:h,direction:"descending"}:null)},[]),S=e.useMemo(()=>({query:f,sort:v,toggleSort:g}),[f,v,g]);return e.useEffect(()=>{const h=()=>{if(d.current&&s){const E=d.current.scrollTop>0;a(E)}},w=d.current;return w&&w.addEventListener("scroll",h),()=>{w&&w.removeEventListener("scroll",h)}},[]),i.jsxs(H.Provider,{value:S,children:[m&&i.jsx("div",{className:_["table-tools"],children:i.jsxs("label",{className:_["table-search"],children:[i.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[i.jsx("circle",{cx:"11",cy:"11",r:"7"}),i.jsx("path",{d:"m20 20-3.5-3.5"})]}),i.jsx("input",{type:"search","aria-label":"Поиск по таблице",placeholder:"Поиск",value:o,onChange:h=>u(h.target.value),onKeyDown:h=>{h.key==="Escape"&&u("")}})]})}),i.jsx("div",{ref:d,className:_["f-table-component"],style:{overflowX:n,overflowY:r},children:i.jsx("table",{style:{...c,tableLayout:p},...y,className:`table ${_["f-table-component__table"]} ${y.className||""}`,children:j.Children.map(t,h=>{if(j.isValidElement(h)&&h.type===V){const w=h.props;return j.cloneElement(h,{...w,isSticky:l})}if(j.isValidElement(h)&&h.type===ee){const w=h.props;return j.cloneElement(h,{...w,tableWrapperRef:d})}return h})})})]})};te.__docgenInfo={description:`Компонент FTable представляет собой таблицу с возможностью управления переполнением и "липким" заголовком.\r
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
@default "auto"`,defaultValue:{value:'"auto"',computed:!1}},searchable:{required:!1,tsType:{name:"boolean"},description:"Показывает поле поиска по полному тексту строк FTableBody.",defaultValue:{value:"false",computed:!1}}}};const ne=({st:c,children:t,textAlignment:n,disableHover:r=!1,...s})=>{const p=[_["f-table-component__table_row"],s.className||""];return r&&p.push(_["f-table-component__table_row_no-hover"]),n!==void 0&&p.push(_[n]),i.jsx("tr",{style:c,...s,className:p.join(" ").trim(),children:t})};ne.__docgenInfo={description:`Компонент FTableRow представляет собой строку таблицы (\`<tr>\`).\r
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
@default false`,defaultValue:{value:"false",computed:!1}}}};const re=({st:c,row:t,col:n,children:r,textAlignment:s,width:p="auto",height:m,sortKey:y,...d})=>{const{sort:l,toggleSort:a}=e.useContext(H),o=!!(y&&a),u=(l==null?void 0:l.key)===y?l==null?void 0:l.direction:void 0,f={textAlign:s,width:p,height:m,...c};return i.jsx("th",{rowSpan:t&&t>1?t:void 0,colSpan:n&&n>1?n:void 0,...d,"aria-sort":o?u??"none":d["aria-sort"],className:`${_["f-table-component__table_header-cell"]} ${d.className||""}`,style:f,children:o?i.jsxs("button",{type:"button",className:_["table-sort"],onClick:()=>a==null?void 0:a(y),title:u==="ascending"?"По убыванию":u==="descending"?"Исходный порядок":"По возрастанию",children:[r,i.jsx("span",{"aria-hidden":"true",children:u==="ascending"?"↑":u==="descending"?"↓":"↕"})]}):r})};re.__docgenInfo={description:`Компонент FTableHeaderCell представляет собой ячейку заголовка таблицы (\`<th>\`).
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
@type {number | string}
@default 'auto'`,defaultValue:{value:"'auto'",computed:!1}},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Высота ячейки.
@type {number | string}`},sortKey:{required:!1,tsType:{name:"string"},description:"Включает сортировку по ячейкам FTableDataCell с таким же ключом."}}};function K({text:c,enabled:t,children:n}){const r=e.useId(),s=e.useRef(null),p=e.useRef(null),m=e.useRef(),[y,d]=e.useState(!1),[l,a]=e.useState({top:0,left:0}),o=t&&y,u=()=>{clearTimeout(m.current),d(!0)},f=()=>{clearTimeout(m.current),m.current=setTimeout(()=>d(!1),150)};return e.useEffect(()=>()=>clearTimeout(m.current),[]),e.useEffect(()=>{t||d(!1)},[t]),e.useLayoutEffect(()=>{if(!o)return;const v=()=>{if(!s.current||!p.current)return;const g=s.current.getBoundingClientRect(),S=p.current.getBoundingClientRect(),h=g.bottom+8+S.height<=window.innerHeight-10?g.bottom+8:g.top-S.height-8;a({top:Math.max(10,Math.min(h,window.innerHeight-S.height-10)),left:Math.max(10,Math.min(g.left,window.innerWidth-S.width-10))})},T=g=>{g.key==="Escape"&&(clearTimeout(m.current),d(!1))};return v(),window.addEventListener("resize",v),window.addEventListener("scroll",v,!0),document.addEventListener("keydown",T),()=>{window.removeEventListener("resize",v),window.removeEventListener("scroll",v,!0),document.removeEventListener("keydown",T)}},[o,c]),i.jsxs("span",{ref:s,className:_["cell-tooltip-anchor"],onMouseEnter:u,onMouseLeave:f,onFocus:u,onBlur:f,children:[e.cloneElement(n,{"aria-describedby":o?r:void 0}),o&&z.createPortal(i.jsx("div",{ref:p,id:r,role:"tooltip",className:_["cell-tooltip"],style:l,onMouseEnter:u,onMouseLeave:f,children:c}),document.body)]})}K.__docgenInfo={description:"Full cell text stays reachable by pointer and keyboard outside the scroll container.",methods:[],displayName:"FTableTextTooltip",props:{text:{required:!0,tsType:{name:"string"},description:""},enabled:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactElement",elements:[{name:"HTMLAttributes",elements:[{name:"HTMLButtonElement"}],raw:"HTMLAttributes<HTMLButtonElement>"}],raw:"ReactElement<HTMLAttributes<HTMLButtonElement>>"},description:""}}};const ae=({st:c,row:t,col:n,children:r,textAlignment:s,width:p,height:m,truncate:y,sortKey:d,sortValue:l,searchValue:a,...o})=>{const u=e.useContext($),[f,v]=e.useState(!1),T=e.useId(),g=typeof r=="string"||typeof r=="number"?String(r):null,S=u!==void 0&&Number.isFinite(u)&&u>=1?Math.floor(u):y?40:void 0,h=y!==!1&&S!==void 0&&g!==null&&g.length>S,w={textAlign:s,width:p,height:m,...c};return i.jsx("td",{rowSpan:t&&t>1?t:void 0,colSpan:n&&n>1?n:void 0,...o,className:`${_["f-table-component__table_body-cell"]} ${o.className||""}`.trim(),style:w,children:h?i.jsx(K,{text:g,enabled:!f,children:i.jsxs("button",{type:"button",className:_["cell-text"],"aria-expanded":f,"aria-controls":T,"data-expanded":f,onClick:()=>v(E=>!E),children:[i.jsx("span",{className:_["cell-preview"],"aria-hidden":"true",children:i.jsx("span",{className:_["cell-preview-text"],children:g})}),i.jsx("span",{className:_["cell-reveal"],children:i.jsx("span",{id:T,children:g})})]})}):r})};ae.__docgenInfo={description:`Компонент \`FTableDataCell\` представляет собой ячейку данных таблицы (\`<td>\`).\r
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
@type {number | string}`},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Высота ячейки.\r
@type {number | string}`},truncate:{required:!1,tsType:{name:"boolean"},description:"Флаг сокращения текста.\r\nЕсли установлен в `false`, отменяет сокращение, даже если активен TruncateContext.\r\nЕсли `true` — включает сокращение длинного текста до правого края ячейки.\r\n@type {boolean | undefined}"},sortKey:{required:!1,tsType:{name:"string"},description:"Уникальный ключ столбца, совпадающий с `sortKey` соответствующего заголовка.\r\n@type {string | undefined}"},sortValue:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:`Исходное нормализованное значение для сортировки чисел, дат или JSX.\r
@type {string | number | undefined}`},searchValue:{required:!1,tsType:{name:"string"},description:`Строка для фильтрации и текстового поиска по содержимому ячейки.\r
@type {string | undefined}`}}};const oe=({st:c,children:t,...n})=>i.jsx("tfoot",{style:c,...n,className:`${_["f-table-component__table_footer"]} ${n.className||""}`,children:t});oe.__docgenInfo={description:`Компонент FTableFooter представляет собой нижний колонтитул таблицы (\`<tfoot>\`).\r
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
@type {React.CSSProperties}`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Дочерние элементы (например, строки `<tr>` или ячейки `<td>`).\r\n@type {React.ReactNode}"}}};function le({children:c,className:t,onClick:n,...r}){const s=e.useId(),p=e.useRef(null),m=e.useRef(null),[y,d]=e.useState(!1);return e.useEffect(()=>{const l=p.current,a=()=>{var u,f;const o=l.matches(":popover-open");d(o),o?(u=l.querySelector('button:not(:disabled), a[href], input, [tabindex="0"]'))==null||u.focus():l.contains(document.activeElement)&&((f=m.current)==null||f.focus())};return l.addEventListener("toggle",a),()=>l.removeEventListener("toggle",a)},[]),i.jsxs(i.Fragment,{children:[i.jsx("button",{ref:m,type:"button","aria-label":"Действия",...r,className:`${_.more} ${t||""}`,"aria-expanded":y,"aria-controls":s,onClick:l=>{if(l.stopPropagation(),n==null||n(l),l.defaultPrevented||!p.current)return;const a=l.currentTarget.getBoundingClientRect(),o=p.current;o.style.maxHeight=`${Math.max(0,(a.bottom>window.innerHeight/2?a.top:window.innerHeight-a.bottom)-12)}px`,o.style.left=`${Math.max(8,Math.min(a.right-178,window.innerWidth-186))}px`,o.style.top=`${Math.max(8,a.bottom+4)}px`,o.style.bottom="auto",a.bottom>window.innerHeight/2&&(o.style.top="auto",o.style.bottom=`${Math.max(8,window.innerHeight-a.top+4)}px`),y?o.hidePopover():o.showPopover()},children:i.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:[i.jsx("circle",{cx:"5",cy:"12",r:"1.6"}),i.jsx("circle",{cx:"12",cy:"12",r:"1.6"}),i.jsx("circle",{cx:"19",cy:"12",r:"1.6"})]})}),i.jsx("div",{ref:p,id:s,popover:"auto",className:_["row-menu"],onKeyDown:l=>{var a,o;l.key==="Escape"&&(l.preventDefault(),l.stopPropagation(),(a=m.current)==null||a.focus(),(o=p.current)==null||o.hidePopover())},onClick:l=>{var a,o;l.stopPropagation(),!l.defaultPrevented&&l.target.closest("button:not(:disabled), a[href]")&&((a=m.current)==null||a.focus(),(o=p.current)==null||o.hidePopover())},children:c})]})}le.__docgenInfo={description:"Кнопка действий с произвольным содержимым в нативном popover.",methods:[],displayName:"FTableActions",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["Omit"]};export{te as F,V as a,ne as b,re as c,ee as d,ae as e,oe as f,le as g};
