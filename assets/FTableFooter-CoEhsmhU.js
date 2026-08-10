import{j as h}from"./jsx-runtime-D_zvdyIk.js";import{e as g,r as _}from"./index-DEgj3Fem.js";const P="_bordered_ld5gh_18",H="_left_ld5gh_40",I="_center_ld5gh_43",k="_right_ld5gh_46",u={"f-table-component":"_f-table-component_ld5gh_1","f-table-component__table":"_f-table-component__table_ld5gh_7",bordered:P,"bordered-half":"_bordered-half_ld5gh_22","f-table-component__table_header":"_f-table-component__table_header_ld5gh_25","is-sticky":"_is-sticky_ld5gh_29","f-table-component__table_header-cell":"_f-table-component__table_header-cell_ld5gh_37",left:H,center:I,right:k,"f-table-component__table_body":"_f-table-component__table_body_ld5gh_65","f-table-component__table_row":"_f-table-component__table_row_ld5gh_68","f-table-component__table_row_no-hover":"_f-table-component__table_row_no-hover_ld5gh_68","f-table-component__table_body-cell":"_f-table-component__table_body-cell_ld5gh_81","f-table-component__table_footer":"_f-table-component__table_footer_ld5gh_97"},j=({st:p,children:l,textAlignment:a="left",isSticky:r=!0,...d})=>h.jsx("thead",{style:p,...d,className:`${u["f-table-component__table_header"]} ${r?u["is-sticky"]:""} ${d.className||""} ${u[a]}`,children:l});j.__docgenInfo={description:`Компонент FTableHead представляет собой заголовок таблицы (\`<thead>\`).\r
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
@default false`,defaultValue:{value:"true",computed:!1}}}};const E=({st:p,children:l,textAlignment:a="left",tableWrapperRef:r,visibleRowCount:d=void 0,...y})=>{const f=_.useRef(null),o=_.useMemo(()=>g.Children.toArray(l),[l]),R=o.length,[T,m]=_.useState(0),[e,v]=_.useState(Array(o.length).fill(0)),b=typeof d=="number"&&d>0;_.useEffect(()=>{e.length<o.length&&v(n=>[...n,...Array(o.length-n.length).fill(0)])},[o.length,e.length]);const S=_.useCallback(()=>{if(!b||!(r!=null&&r.current)||!f.current)return;const s=r.current.scrollTop;let c=0,i=0;for(let t=0;t<e.length;t++){if(c+e[t]>s){i=t;break}c+=e[t]}m(i)},[e,r,b]),w=_.useCallback(()=>{b&&requestAnimationFrame(S)},[S,b]);_.useEffect(()=>{var s;if(!b)return;const n=()=>requestAnimationFrame(S);return window.addEventListener("resize",n),(s=r==null?void 0:r.current)==null||s.addEventListener("scroll",w),n(),()=>{var c;window.removeEventListener("resize",n),(c=r==null?void 0:r.current)==null||c.removeEventListener("scroll",w)}},[w,S,b]),_.useLayoutEffect(()=>{if(!f.current)return;const n=f.current.querySelectorAll("tr[data-row-index]"),s=[...e];let c=!1;n.forEach((i,t)=>{const q=b?T+t:t,C=i.getBoundingClientRect().height;C>0&&s[q]!==C&&(s[q]=C,c=!0)}),c&&v(s)},[o,e,T,b]);let F,N=0,x=0;if(b){let n=function(c,i){for(let t=c-1;t>=0;t--)if(i[t]>0)return i[t];for(let t=c+1;t<i.length;t++)if(i[t]>0)return i[t];return 0};const s=Math.min(T+d,R);F=o.slice(T,s),N=e.slice(0,T).reduce((c,i,t)=>c+(i>0?i:n(t,e)),0),x=e.slice(s).reduce((c,i,t)=>c+(i>0?i:n(s+t,e)),0)}else F=o;return h.jsxs("tbody",{ref:f,style:p,...y,className:`${u["f-table-component__table_body"]} ${y.className||""}  ${u[a]}`,children:[b&&e.some(n=>n>0)&&h.jsx("tr",{style:{height:N}}),F.map((n,s)=>g.isValidElement(n)?g.cloneElement(n,{"data-row-index":b?T+s:s,key:b?T+s:s}):n),b&&e.some(n=>n>0)&&h.jsx("tr",{style:{height:x}})]})},$=g.memo(E);E.__docgenInfo={description:`Компонент FTableBody представляет собой тело таблицы (\`<tbody>\`).\r
Он поддерживает настройку стилей, выравнивания текста и передачу дочерних элементов.\r
Также реализована виртуализация строк для оптимизации производительности при большом количестве данных.\r
\r
@component\r
@example\r
<FTableBody st={{ backgroundColor: '#f9f9f9' }} textAlignment="center">\r
  <tr>\r
    <td>Ячейка 1</td>\r
    <td>Ячейка 2</td>\r
  </tr>\r
  <tr>\r
    <td>Ячейка 3</td>\r
    <td>Ячейка 4</td>\r
  </tr>\r
</FTableBody>\r
\r
@param {IFTableBody} props - Пропсы компонента.\r
@returns {JSX.Element} - Элемент тела таблицы.`,methods:[],displayName:"FTableBody",props:{st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Дополнительные стили для тела таблицы.\r
@type {React.CSSProperties}`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Дочерние элементы (например, строки `<tr>` или ячейки `<td>`).\r\n@type {React.ReactNode}"},textAlignment:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'center' | 'justify'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'center'"},{name:"literal",value:"'justify'"}]},description:`Выравнивание текста внутри тела таблицы.\r
@type {'left' | 'right' | 'center' | 'justify'}\r
@default 'left'`,defaultValue:{value:"'left'",computed:!1}},tableWrapperRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:`Ref для родительского контейнера с прокруткой.\r
Используется для отслеживания события прокрутки.\r
@type {React.RefObject<HTMLDivElement>}`},visibleRowCount:{required:!1,tsType:{name:"number"},description:"Количество видимых строк для виртуализации. Если не указано — виртуализация отключена.",defaultValue:{value:"undefined",computed:!0}}}};const A=({st:p,children:l,overflowX:a="auto",overflowY:r="auto",isSticky:d=!0,layout:y="auto",...f})=>{const o=_.useRef(null),[R,T]=_.useState(!1);return _.useEffect(()=>{const m=()=>{if(o.current&&d){const v=o.current.scrollTop>0;T(v)}},e=o.current;return e&&e.addEventListener("scroll",m),()=>{e&&e.removeEventListener("scroll",m)}},[]),h.jsx("div",{ref:o,className:u["f-table-component"],style:{overflowX:a,overflowY:r},children:h.jsx("table",{style:{...p,tableLayout:y},...f,className:`table ${u["f-table-component__table"]} ${u.bordered} ${u["bordered-half"]} ${f.className||""}`,children:g.Children.map(l,m=>{if(g.isValidElement(m)&&m.type===j){const e=m.props;return g.cloneElement(m,{...e,isSticky:R})}if(g.isValidElement(m)&&m.type===$){const e=m.props;return g.cloneElement(m,{...e,tableWrapperRef:o})}return m})})})};A.__docgenInfo={description:`Компонент FTable представляет собой таблицу с возможностью управления переполнением и "липким" заголовком.\r
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
@default "auto"`,defaultValue:{value:'"auto"',computed:!1}}}};const V=({st:p,children:l,textAlignment:a,disableHover:r=!1,...d})=>{const y=[u["f-table-component__table_row"],d.className||""];return r&&y.push(u["f-table-component__table_row_no-hover"]),a!==void 0&&y.push(u[a]),h.jsx("tr",{style:p,...d,className:y.join(" ").trim(),children:l})};V.__docgenInfo={description:`Компонент FTableRow представляет собой строку таблицы (\`<tr>\`).\r
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
@default false`,defaultValue:{value:"false",computed:!1}}}};const L=({st:p,row:l,col:a,children:r,textAlignment:d,width:y="auto",...f})=>{const o={textAlign:d,width:y,...p};return h.jsx("th",{rowSpan:l&&l>1?l:void 0,colSpan:a&&a>1?a:void 0,...f,className:`${u["f-table-component__table_header-cell"]} ${f.className||""}`,style:o,children:r})};L.__docgenInfo={description:`Компонент FTableHeaderCell представляет собой ячейку заголовка таблицы (\`<th>\`).\r
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
@default 'auto'`,defaultValue:{value:"'auto'",computed:!1}}}};const B=({st:p,row:l,col:a,children:r,textAlignment:d,height:y="auto",...f})=>{const o={textAlign:d,height:y,...p};return h.jsx("td",{rowSpan:l&&l>1?l:void 0,colSpan:a&&a>1?a:void 0,...f,className:`${u["f-table-component__table_body-cell"]} ${f.className||""}`,style:o,children:r})};B.__docgenInfo={description:`Компонент FTableDataCell представляет собой ячейку данных таблицы (\`<td>\`).\r
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
@default 'auto'`,defaultValue:{value:"'auto'",computed:!1}}}};const D=({st:p,children:l,...a})=>h.jsx("tfoot",{style:p,...a,className:`${u["f-table-component__table_footer"]} ${a.className||""}`,children:l});D.__docgenInfo={description:`Компонент FTableFooter представляет собой нижний колонтитул таблицы (\`<tfoot>\`).\r
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
@type {React.CSSProperties}`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Дочерние элементы (например, строки `<tr>` или ячейки `<td>`).\r\n@type {React.ReactNode}"}}};export{A as F,j as a,V as b,L as c,$ as d,B as e,D as f};
