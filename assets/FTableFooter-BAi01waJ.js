import{j as _}from"./jsx-runtime-D_zvdyIk.js";import{e as T,r as b}from"./index-DEgj3Fem.js";const P="_bordered_1gjeq_18",$="_left_1gjeq_40",H="_center_1gjeq_43",I="_right_1gjeq_46",u={"f-table-component":"_f-table-component_1gjeq_1","f-table-component__table":"_f-table-component__table_1gjeq_7",bordered:P,"bordered-half":"_bordered-half_1gjeq_22","f-table-component__table_header":"_f-table-component__table_header_1gjeq_25","is-sticky":"_is-sticky_1gjeq_29","f-table-component__table_header-cell":"_f-table-component__table_header-cell_1gjeq_37",left:$,center:H,right:I,"f-table-component__table_body":"_f-table-component__table_body_1gjeq_65","f-table-component__table_row":"_f-table-component__table_row_1gjeq_68","f-table-component__table_body-cell":"_f-table-component__table_body-cell_1gjeq_81","f-table-component__table_footer":"_f-table-component__table_footer_1gjeq_97"},x=({st:m,children:l,textAlignment:a="left",isSticky:t=!0,...y})=>_.jsx("thead",{style:m,...y,className:`${u["f-table-component__table_header"]} ${t?u["is-sticky"]:""} ${y.className||""} ${u[a]}`,children:l});x.__docgenInfo={description:`Компонент FTableHead представляет собой заголовок таблицы (\`<thead>\`).\r
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
@default false`,defaultValue:{value:"true",computed:!1}}}};const E=({st:m,children:l,textAlignment:a="left",tableWrapperRef:t,visibleRowCount:y=void 0,...g})=>{const p=b.useRef(null),o=b.useMemo(()=>T.Children.toArray(l),[l]),R=o.length,[h,d]=b.useState(0),[e,v]=b.useState(Array(o.length).fill(0)),f=typeof y=="number"&&y>0;b.useEffect(()=>{e.length<o.length&&v(n=>[...n,...Array(o.length-n.length).fill(0)])},[o.length,e.length]);const S=b.useCallback(()=>{if(!f||!(t!=null&&t.current)||!p.current)return;const s=t.current.scrollTop;let c=0,i=0;for(let r=0;r<e.length;r++){if(c+e[r]>s){i=r;break}c+=e[r]}d(i)},[e,t,f]),w=b.useCallback(()=>{f&&requestAnimationFrame(S)},[S,f]);b.useEffect(()=>{var s;if(!f)return;const n=()=>requestAnimationFrame(S);return window.addEventListener("resize",n),(s=t==null?void 0:t.current)==null||s.addEventListener("scroll",w),n(),()=>{var c;window.removeEventListener("resize",n),(c=t==null?void 0:t.current)==null||c.removeEventListener("scroll",w)}},[w,S,f]),b.useLayoutEffect(()=>{if(!p.current)return;const n=p.current.querySelectorAll("tr[data-row-index]"),s=[...e];let c=!1;n.forEach((i,r)=>{const N=f?h+r:r,q=i.getBoundingClientRect().height;q>0&&s[N]!==q&&(s[N]=q,c=!0)}),c&&v(s)},[o,e,h,f]);let F,j=0,C=0;if(f){let n=function(c,i){for(let r=c-1;r>=0;r--)if(i[r]>0)return i[r];for(let r=c+1;r<i.length;r++)if(i[r]>0)return i[r];return 0};const s=Math.min(h+y,R);F=o.slice(h,s),j=e.slice(0,h).reduce((c,i,r)=>c+(i>0?i:n(r,e)),0),C=e.slice(s).reduce((c,i,r)=>c+(i>0?i:n(s+r,e)),0)}else F=o;return _.jsxs("tbody",{ref:p,style:m,...g,className:`${u["f-table-component__table_body"]} ${g.className||""}  ${u[a]}`,children:[f&&e.some(n=>n>0)&&_.jsx("tr",{style:{height:j}}),F.map((n,s)=>T.isValidElement(n)?T.cloneElement(n,{"data-row-index":f?h+s:s,key:f?h+s:s}):n),f&&e.some(n=>n>0)&&_.jsx("tr",{style:{height:C}})]})},k=T.memo(E);E.__docgenInfo={description:`Компонент FTableBody представляет собой тело таблицы (\`<tbody>\`).\r
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
@type {React.RefObject<HTMLDivElement>}`},visibleRowCount:{required:!1,tsType:{name:"number"},description:"Количество видимых строк для виртуализации. Если не указано — виртуализация отключена.",defaultValue:{value:"undefined",computed:!0}}}};const A=({st:m,children:l,overflowX:a="auto",overflowY:t="auto",isSticky:y=!0,layout:g="auto",...p})=>{const o=b.useRef(null),[R,h]=b.useState(!1);return b.useEffect(()=>{const d=()=>{if(o.current&&y){const v=o.current.scrollTop>0;h(v)}},e=o.current;return e&&e.addEventListener("scroll",d),()=>{e&&e.removeEventListener("scroll",d)}},[]),_.jsx("div",{ref:o,className:u["f-table-component"],style:{overflowX:a,overflowY:t},children:_.jsx("table",{style:{...m,tableLayout:g},...p,className:`table ${u["f-table-component__table"]} ${u.bordered} ${u["bordered-half"]} ${p.className||""}`,children:T.Children.map(l,d=>{if(T.isValidElement(d)&&d.type===x){const e=d.props;return T.cloneElement(d,{...e,isSticky:R})}if(T.isValidElement(d)&&d.type===k){const e=d.props;return T.cloneElement(d,{...e,tableWrapperRef:o})}return d})})})};A.__docgenInfo={description:`Компонент FTable представляет собой таблицу с возможностью управления переполнением и "липким" заголовком.\r
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
@default "auto"`,defaultValue:{value:'"auto"',computed:!1}}}};const V=({st:m,children:l,textAlignment:a,...t})=>_.jsx("tr",{style:m,...t,className:`${u["f-table-component__table_row"]} ${t.className||""}${a!==void 0?` ${u[a]}`:""}`,children:l});V.__docgenInfo={description:`Компонент FTableRow представляет собой строку таблицы (\`<tr>\`).\r
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
@default "left"`}}};const L=({st:m,row:l,col:a,children:t,textAlignment:y,width:g="auto",...p})=>{const o={textAlign:y,width:g,...m};return _.jsx("th",{rowSpan:l&&l>1?l:void 0,colSpan:a&&a>1?a:void 0,...p,className:`${u["f-table-component__table_header-cell"]} ${p.className||""}`,style:o,children:t})};L.__docgenInfo={description:`Компонент FTableHeaderCell представляет собой ячейку заголовка таблицы (\`<th>\`).\r
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
@default 'auto'`,defaultValue:{value:"'auto'",computed:!1}}}};const B=({st:m,row:l,col:a,children:t,textAlignment:y,height:g="auto",...p})=>{const o={textAlign:y,height:g,...m};return _.jsx("td",{rowSpan:l&&l>1?l:void 0,colSpan:a&&a>1?a:void 0,...p,className:`${u["f-table-component__table_body-cell"]} ${p.className||""}`,style:o,children:t})};B.__docgenInfo={description:`Компонент FTableDataCell представляет собой ячейку данных таблицы (\`<td>\`).\r
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
@default 'auto'`,defaultValue:{value:"'auto'",computed:!1}}}};const D=({st:m,children:l,...a})=>_.jsx("tfoot",{style:m,...a,className:`${u["f-table-component__table_footer"]} ${a.className||""}`,children:l});D.__docgenInfo={description:`Компонент FTableFooter представляет собой нижний колонтитул таблицы (\`<tfoot>\`).\r
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
@type {React.CSSProperties}`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Дочерние элементы (например, строки `<tr>` или ячейки `<td>`).\r\n@type {React.ReactNode}"}}};export{A as F,x as a,V as b,L as c,k as d,B as e,D as f};
