import{j as h}from"./jsx-runtime-D_zvdyIk.js";import{e as g,r as y}from"./index-DEgj3Fem.js";const P="_bordered_1gjeq_18",$="_left_1gjeq_40",H="_center_1gjeq_43",I="_right_1gjeq_46",m={"f-table-component":"_f-table-component_1gjeq_1","f-table-component__table":"_f-table-component__table_1gjeq_7",bordered:P,"bordered-half":"_bordered-half_1gjeq_22","f-table-component__table_header":"_f-table-component__table_header_1gjeq_25","is-sticky":"_is-sticky_1gjeq_29","f-table-component__table_header-cell":"_f-table-component__table_header-cell_1gjeq_37",left:$,center:H,right:I,"f-table-component__table_body":"_f-table-component__table_body_1gjeq_65","f-table-component__table_row":"_f-table-component__table_row_1gjeq_68","f-table-component__table_body-cell":"_f-table-component__table_body-cell_1gjeq_81","f-table-component__table_footer":"_f-table-component__table_footer_1gjeq_97"},x=({st:p,children:l,textAlignment:a="left",isSticky:e=!0,...b})=>h.jsx("thead",{style:p,...b,className:`${m["f-table-component__table_header"]} ${e?m["is-sticky"]:""} ${b.className||""} ${m[a]}`,children:l});x.__docgenInfo={description:`Компонент FTableHead представляет собой заголовок таблицы (\`<thead>\`).\r
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
@default false`,defaultValue:{value:"true",computed:!1}}}};const E=({st:p,children:l,textAlignment:a="left",tableWrapperRef:e,visibleRowCount:b=void 0,...T})=>{const s=y.useRef(null),u=y.useMemo(()=>g.Children.toArray(l),[l]),R=u.length,[r,_]=y.useState(0),[i,q]=y.useState(Array(u.length).fill(0)),f=typeof b=="number"&&b>0;y.useEffect(()=>{i.length<u.length&&q(n=>[...n,...Array(u.length-n.length).fill(0)])},[u.length,i.length]);const S=y.useCallback(()=>{if(!f||!(e!=null&&e.current)||!s.current)return;const o=e.current.scrollTop;let d=0,c=0;for(let t=0;t<i.length;t++){if(d+i[t]>o){c=t;break}d+=i[t]}_(c)},[i,e,f]),v=y.useCallback(()=>{f&&requestAnimationFrame(S)},[S,f]);y.useEffect(()=>{var o;if(!f)return;const n=()=>requestAnimationFrame(S);return window.addEventListener("resize",n),(o=e==null?void 0:e.current)==null||o.addEventListener("scroll",v),n(),()=>{var d;window.removeEventListener("resize",n),(d=e==null?void 0:e.current)==null||d.removeEventListener("scroll",v)}},[v,S,f]),y.useLayoutEffect(()=>{if(!s.current)return;const n=s.current.querySelectorAll("tr[data-row-index]"),o=[...i];let d=!1;n.forEach((c,t)=>{const N=f?r+t:t,F=c.getBoundingClientRect().height;F>0&&o[N]!==F&&(o[N]=F,d=!0)}),d&&q(o)},[u,i,r,f]);let w,j=0,C=0;if(f){let n=function(d,c){for(let t=d-1;t>=0;t--)if(c[t]>0)return c[t];for(let t=d+1;t<c.length;t++)if(c[t]>0)return c[t];return 0};const o=Math.min(r+b,R);w=u.slice(r,o),j=i.slice(0,r).reduce((d,c,t)=>d+(c>0?c:n(t,i)),0),C=i.slice(o).reduce((d,c,t)=>d+(c>0?c:n(o+t,i)),0)}else w=u;return h.jsxs("tbody",{ref:s,style:p,...T,className:`${m["f-table-component__table_body"]} ${T.className||""}  ${m[a]}`,children:[f&&i.some(n=>n>0)&&h.jsx("tr",{style:{height:j}}),w.map((n,o)=>g.isValidElement(n)?g.cloneElement(n,{"data-row-index":f?r+o:o,key:f?r+o:o}):n),f&&i.some(n=>n>0)&&h.jsx("tr",{style:{height:C}})]})},k=g.memo(E);E.__docgenInfo={description:`Компонент FTableBody представляет собой тело таблицы (\`<tbody>\`).\r
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
@type {React.RefObject<HTMLDivElement>}`},visibleRowCount:{required:!1,tsType:{name:"number"},description:"Количество видимых строк для виртуализации. Если не указано — виртуализация отключена.",defaultValue:{value:"undefined",computed:!0}}}};const A=({st:p,children:l,overflowX:a="auto",overflowY:e="auto",isSticky:b=!0,...T})=>{const s=y.useRef(null),[u,R]=y.useState(!1);return y.useEffect(()=>{const r=()=>{if(s.current&&b){const i=s.current.scrollTop>0;R(i)}},_=s.current;return _&&_.addEventListener("scroll",r),()=>{_&&_.removeEventListener("scroll",r)}},[]),h.jsx("div",{ref:s,className:m["f-table-component"],style:{overflowX:a,overflowY:e},children:h.jsx("table",{style:p,...T,className:`table ${m["f-table-component__table"]} ${m.bordered} ${m["bordered-half"]} ${T.className||""}`,children:g.Children.map(l,r=>{if(g.isValidElement(r)&&r.type===x){const _=r.props;return g.cloneElement(r,{..._,isSticky:u})}if(g.isValidElement(r)&&r.type===k){const _=r.props;return g.cloneElement(r,{..._,tableWrapperRef:s})}return r})})})};A.__docgenInfo={description:`Компонент FTable представляет собой таблицу с возможностью управления переполнением и "липким" заголовком.\r
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
@default false`,defaultValue:{value:"true",computed:!1}}}};const V=({st:p,children:l,textAlignment:a,...e})=>h.jsx("tr",{style:p,...e,className:`${m["f-table-component__table_row"]} ${e.className||""}${a!==void 0?` ${m[a]}`:""}`,children:l});V.__docgenInfo={description:`Компонент FTableRow представляет собой строку таблицы (\`<tr>\`).\r
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
@default "left"`}}};const L=({st:p,row:l,col:a,children:e,textAlignment:b,width:T="auto",...s})=>{const u={textAlign:b,width:T,...p};return h.jsx("th",{rowSpan:l&&l>1?l:void 0,colSpan:a&&a>1?a:void 0,...s,className:`${m["f-table-component__table_header-cell"]} ${s.className||""}`,style:u,children:e})};L.__docgenInfo={description:`Компонент FTableHeaderCell представляет собой ячейку заголовка таблицы (\`<th>\`).\r
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
@default 'auto'`,defaultValue:{value:"'auto'",computed:!1}}}};const B=({st:p,row:l,col:a,children:e,textAlignment:b,height:T="auto",...s})=>{const u={textAlign:b,height:T,...p};return h.jsx("td",{rowSpan:l&&l>1?l:void 0,colSpan:a&&a>1?a:void 0,...s,className:`${m["f-table-component__table_body-cell"]} ${s.className||""}`,style:u,children:e})};B.__docgenInfo={description:`Компонент FTableDataCell представляет собой ячейку данных таблицы (\`<td>\`).\r
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
@default 'auto'`,defaultValue:{value:"'auto'",computed:!1}}}};const D=({st:p,children:l,...a})=>h.jsx("tfoot",{style:p,...a,className:`${m["f-table-component__table_footer"]} ${a.className||""}`,children:l});D.__docgenInfo={description:`Компонент FTableFooter представляет собой нижний колонтитул таблицы (\`<tfoot>\`).\r
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
