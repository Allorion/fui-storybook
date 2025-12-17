import{j as T}from"./jsx-runtime-Cf8x2fCZ.js";import{e as R,r as h}from"./index-DY-snNUy.js";const P="_bordered_j1bhx_18",$="_left_j1bhx_40",H="_center_j1bhx_43",I="_right_j1bhx_46",m={"f-table-component":"_f-table-component_j1bhx_1","f-table-component__table":"_f-table-component__table_j1bhx_7",bordered:P,"bordered-half":"_bordered-half_j1bhx_22","f-table-component__table_header":"_f-table-component__table_header_j1bhx_25","is-sticky":"_is-sticky_j1bhx_32","f-table-component__table_header-cell":"_f-table-component__table_header-cell_j1bhx_37",left:$,center:H,right:I,"f-table-component__table_body":"_f-table-component__table_body_j1bhx_65","f-table-component__table_row":"_f-table-component__table_row_j1bhx_68","f-table-component__table_body-cell":"_f-table-component__table_body-cell_j1bhx_81","f-table-component__table_footer":"_f-table-component__table_footer_j1bhx_97"},q=({st:p,children:a,textAlignment:n="left",isSticky:e=!1,...f})=>T.jsx("thead",{style:p,...f,className:`${m["f-table-component__table_header"]} ${e?m["is-sticky"]:""} ${f.className||""} ${m[n]}`,children:a});q.__docgenInfo={description:`Компонент FTableHead представляет собой заголовок таблицы (\`<thead>\`).\r
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
@default false`,defaultValue:{value:"false",computed:!1}}}};const E=({st:p,children:a,textAlignment:n="left",tableWrapperRef:e,visibleRowCount:f=void 0,...y})=>{const _=h.useRef(null),c=h.useMemo(()=>R.Children.toArray(a),[a]),d=c.length,[o,S]=h.useState(0),[u,x]=h.useState(Array(c.length).fill(0)),b=typeof f=="number"&&f>0;h.useEffect(()=>{u.length<c.length&&x(r=>[...r,...Array(c.length-r.length).fill(0)])},[c.length,u.length]);const v=h.useCallback(()=>{if(!b||!(e!=null&&e.current)||!_.current)return;const l=e.current.scrollTop;let i=0,s=0;for(let t=0;t<u.length;t++){if(i+u[t]>l){s=t;break}i+=u[t]}S(s)},[u,e,b]),g=h.useCallback(()=>{b&&requestAnimationFrame(v)},[v,b]);h.useEffect(()=>{var l;if(!b)return;const r=()=>requestAnimationFrame(v);return window.addEventListener("resize",r),(l=e==null?void 0:e.current)==null||l.addEventListener("scroll",g),r(),()=>{var i;window.removeEventListener("resize",r),(i=e==null?void 0:e.current)==null||i.removeEventListener("scroll",g)}},[g,v,b]),h.useLayoutEffect(()=>{if(!_.current)return;const r=_.current.querySelectorAll("tr[data-row-index]"),l=[...u];let i=!1;r.forEach((s,t)=>{const N=b?o+t:t,F=s.getBoundingClientRect().height;F>0&&l[N]!==F&&(l[N]=F,i=!0)}),i&&x(l)},[c,u,o,b]);let w,j=0,C=0;if(b){let r=function(i,s){for(let t=i-1;t>=0;t--)if(s[t]>0)return s[t];for(let t=i+1;t<s.length;t++)if(s[t]>0)return s[t];return 0};const l=Math.min(o+f,d);w=c.slice(o,l),j=u.slice(0,o).reduce((i,s,t)=>i+(s>0?s:r(t,u)),0),C=u.slice(l).reduce((i,s,t)=>i+(s>0?s:r(l+t,u)),0)}else w=c;return T.jsxs("tbody",{ref:_,style:p,...y,className:`${m["f-table-component__table_body"]} ${y.className||""}  ${m[n]}`,children:[b&&u.some(r=>r>0)&&T.jsx("tr",{style:{height:j}}),w.map((r,l)=>R.isValidElement(r)?R.cloneElement(r,{"data-row-index":b?o+l:l,key:b?o+l:l}):r),b&&u.some(r=>r>0)&&T.jsx("tr",{style:{height:C}})]})},k=R.memo(E);E.__docgenInfo={description:`Компонент FTableBody представляет собой тело таблицы (\`<tbody>\`).\r
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
@type {React.RefObject<HTMLDivElement>}`},visibleRowCount:{required:!1,tsType:{name:"number"},description:"Количество видимых строк для виртуализации. Если не указано — виртуализация отключена.",defaultValue:{value:"undefined",computed:!0}}}};const A=({st:p,children:a,overflowX:n="auto",overflowY:e="auto",...f})=>{const y=h.useRef(null),[_,c]=h.useState(!1);return h.useEffect(()=>{const d=()=>{if(y.current){const S=y.current.scrollTop>0;c(S)}},o=y.current;return o&&o.addEventListener("scroll",d),()=>{o&&o.removeEventListener("scroll",d)}},[]),T.jsx("div",{ref:y,className:m["f-table-component"],style:{overflowX:n,overflowY:e},children:T.jsx("table",{style:p,...f,className:`table ${m["f-table-component__table"]} ${m.bordered} ${m["bordered-half"]} ${f.className||""}`,children:R.Children.map(a,d=>{if(R.isValidElement(d)&&d.type===q){const o=d.props;return R.cloneElement(d,{...o,isSticky:_})}if(R.isValidElement(d)&&d.type===k){const o=d.props;return R.cloneElement(d,{...o,tableWrapperRef:y})}return d})})})};A.__docgenInfo={description:`Компонент FTable представляет собой таблицу с возможностью управления переполнением и "липким" заголовком.\r
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
@default "auto"`,defaultValue:{value:'"auto"',computed:!1}}}};const V=({st:p,children:a,textAlignment:n,...e})=>T.jsx("tr",{style:p,...e,className:`${m["f-table-component__table_row"]} ${e.className||""}${n!==void 0?` ${m[n]}`:""}`,children:a});V.__docgenInfo={description:`Компонент FTableRow представляет собой строку таблицы (\`<tr>\`).\r
Он поддерживает настройку стилей и передачу дочерних элементов.\r
\r
@component\r
@example\r
<FTableRow st={{ backgroundColor: '#f9f9f9' }}>\r
  <td>Ячейка 1</td>\r
  <td>Ячейка 2</td>\r
</FTableRow>\r
\r
@param {IFTableRow} props - Пропсы компонента.\r
@returns {JSX.Element} - Элемент строки таблицы.`,methods:[],displayName:"FTableRow",props:{st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Дополнительные стили для строки таблицы.\r
@type {React.CSSProperties}`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Дочерние элементы (например, ячейки `<td>` или `<th>`).\r\n@type {React.ReactNode}"},textAlignment:{required:!1,tsType:{name:"union",raw:'"left" | "right" | "center" | "justify"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"center"'},{name:"literal",value:'"justify"'}]},description:`Выравнивание текста внутри строки.\r
@type {"left" | "right" | "center" | "justify"}\r
@default "left"`}}};const L=({st:p,row:a,col:n,children:e,textAlignment:f,width:y="auto",..._})=>{const c={textAlign:f,width:y,...p};return T.jsx("th",{style:c,rowSpan:a&&a>1?a:void 0,colSpan:n&&n>1?n:void 0,..._,className:`${m["f-table-component__table_header-cell"]} ${_.className||""}`,children:e})};L.__docgenInfo={description:`Компонент FTableHeaderCell представляет собой ячейку заголовка таблицы (\`<th>\`).\r
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
@default 'auto'`,defaultValue:{value:"'auto'",computed:!1}}}};const B=({st:p,row:a,col:n,children:e,textAlignment:f,height:y="auto",..._})=>{const c={textAlign:f,height:y,...p};return T.jsx("td",{style:c,rowSpan:a&&a>1?a:void 0,colSpan:n&&n>1?n:void 0,..._,className:`${m["f-table-component__table_body-cell"]} ${_.className||""}`,children:e})};B.__docgenInfo={description:`Компонент FTableDataCell представляет собой ячейку данных таблицы (\`<td>\`).\r
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
@default 'auto'`,defaultValue:{value:"'auto'",computed:!1}}}};const D=({st:p,children:a,...n})=>T.jsx("tfoot",{style:p,...n,className:`${m["f-table-component__table_footer"]} ${n.className||""}`,children:a});D.__docgenInfo={description:`Компонент FTableFooter представляет собой нижний колонтитул таблицы (\`<tfoot>\`).\r
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
@type {React.CSSProperties}`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Дочерние элементы (например, строки `<tr>` или ячейки `<td>`).\r\n@type {React.ReactNode}"}}};export{A as F,q as a,V as b,L as c,k as d,B as e,D as f};
