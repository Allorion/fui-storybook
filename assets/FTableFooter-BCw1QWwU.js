import{j as T}from"./jsx-runtime-Cf8x2fCZ.js";import{e as R,r as f}from"./index-DY-snNUy.js";const H="_bordered_bxmcg_18",b={"f-table-component":"_f-table-component_bxmcg_1","f-table-component__table":"_f-table-component__table_bxmcg_7",bordered:H,"bordered-half":"_bordered-half_bxmcg_22","f-table-component__table_header":"_f-table-component__table_header_bxmcg_25","is-sticky":"_is-sticky_bxmcg_32","f-table-component__table_header-cell":"_f-table-component__table_header-cell_bxmcg_37","f-table-component__table_body":"_f-table-component__table_body_bxmcg_54","f-table-component__table_row":"_f-table-component__table_row_bxmcg_57","f-table-component__table_body-cell":"_f-table-component__table_body-cell_bxmcg_61","f-table-component__table_footer":"_f-table-component__table_footer_bxmcg_73"},E=({st:u,children:l,textAlignment:n="left",isSticky:a=!1,...m})=>{const c={textAlign:n,...u};return T.jsx("thead",{style:c,...m,className:`${b["f-table-component__table_header"]} ${a?b["is-sticky"]:""} ${m.className||""}`,children:l})};E.__docgenInfo={description:`Компонент FTableHead представляет собой заголовок таблицы (\`<thead>\`).\r
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
@default false`,defaultValue:{value:"false",computed:!1}}}};const j=({st:u,children:l,textAlignment:n="left",tableWrapperRef:a,visibleRowCount:m=void 0,...c})=>{const h={textAlign:n,...u},y=f.useRef(null),t=f.useMemo(()=>R.Children.toArray(l),[l]),_=t.length,[g,P]=f.useState(0),[d,x]=f.useState(Array(t.length).fill(0)),p=typeof m=="number"&&m>0;f.useEffect(()=>{d.length<t.length&&x(r=>[...r,...Array(t.length-r.length).fill(0)])},[t.length,d.length]);const S=f.useCallback(()=>{if(!p||!(a!=null&&a.current)||!y.current)return;const o=a.current.scrollTop;let i=0,s=0;for(let e=0;e<d.length;e++){if(i+d[e]>o){s=e;break}i+=d[e]}P(s)},[d,a,p]),v=f.useCallback(()=>{p&&requestAnimationFrame(S)},[S,p]);f.useEffect(()=>{var o;if(!p)return;const r=()=>requestAnimationFrame(S);return window.addEventListener("resize",r),(o=a==null?void 0:a.current)==null||o.addEventListener("scroll",v),r(),()=>{var i;window.removeEventListener("resize",r),(i=a==null?void 0:a.current)==null||i.removeEventListener("scroll",v)}},[v,S,p]),f.useLayoutEffect(()=>{if(!y.current)return;const r=y.current.querySelectorAll("tr[data-row-index]"),o=[...d];let i=!1;r.forEach((s,e)=>{const q=p?g+e:e,F=s.getBoundingClientRect().height;F>0&&o[q]!==F&&(o[q]=F,i=!0)}),i&&x(o)},[t,d,g,p]);let w,C=0,N=0;if(p){let r=function(i,s){for(let e=i-1;e>=0;e--)if(s[e]>0)return s[e];for(let e=i+1;e<s.length;e++)if(s[e]>0)return s[e];return 0};const o=Math.min(g+m,_);w=t.slice(g,o),C=d.slice(0,g).reduce((i,s,e)=>i+(s>0?s:r(e,d)),0),N=d.slice(o).reduce((i,s,e)=>i+(s>0?s:r(o+e,d)),0)}else w=t;return T.jsxs("tbody",{ref:y,style:h,...c,className:`${b["f-table-component__table_body"]} ${c.className||""}`,children:[p&&d.some(r=>r>0)&&T.jsx("tr",{style:{height:C}}),w.map((r,o)=>R.isValidElement(r)?R.cloneElement(r,{"data-row-index":p?g+o:o,key:p?g+o:o}):r),p&&d.some(r=>r>0)&&T.jsx("tr",{style:{height:N}})]})},I=R.memo(j);j.__docgenInfo={description:`Компонент FTableBody представляет собой тело таблицы (\`<tbody>\`).\r
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
@type {React.RefObject<HTMLDivElement>}`},visibleRowCount:{required:!1,tsType:{name:"number"},description:"Количество видимых строк для виртуализации. Если не указано — виртуализация отключена.",defaultValue:{value:"undefined",computed:!0}}}};const A=({st:u,children:l,overflowX:n="auto",overflowY:a="auto",...m})=>{const c=f.useRef(null),[h,y]=f.useState(!1);return f.useEffect(()=>{const t=()=>{if(c.current){const g=c.current.scrollTop>0;y(g)}},_=c.current;return _&&_.addEventListener("scroll",t),()=>{_&&_.removeEventListener("scroll",t)}},[]),T.jsx("div",{ref:c,className:b["f-table-component"],style:{overflowX:n,overflowY:a},children:T.jsx("table",{style:u,...m,className:`table ${b["f-table-component__table"]} ${b.bordered} ${b["bordered-half"]} ${m.className||""}`,children:R.Children.map(l,t=>{if(R.isValidElement(t)&&t.type===E){const _=t.props;return R.cloneElement(t,{..._,isSticky:h})}if(R.isValidElement(t)&&t.type===I){const _=t.props;return R.cloneElement(t,{..._,tableWrapperRef:c})}return t})})})};A.__docgenInfo={description:`Компонент FTable представляет собой таблицу с возможностью управления переполнением и "липким" заголовком.\r
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
@default "auto"`,defaultValue:{value:'"auto"',computed:!1}}}};const $=({st:u,children:l,...n})=>T.jsx("tr",{style:u,...n,className:`${b["f-table-component__table_row"]} ${n.className||""}`,children:l});$.__docgenInfo={description:`Компонент FTableRow представляет собой строку таблицы (\`<tr>\`).\r
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
@type {React.CSSProperties}`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Дочерние элементы (например, ячейки `<td>` или `<th>`).\r\n@type {React.ReactNode}"}}};const k=({st:u,row:l,col:n,children:a,textAlignment:m="left",width:c="auto",...h})=>{const y={textAlign:m,width:c,...u};return T.jsx("th",{style:y,rowSpan:l&&l>1?l:void 0,colSpan:n&&n>1?n:void 0,...h,className:`${b["f-table-component__table_header-cell"]} ${h.className||""}`,children:a})};k.__docgenInfo={description:`Компонент FTableHeaderCell представляет собой ячейку заголовка таблицы (\`<th>\`).\r
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
@default 'left'`,defaultValue:{value:"'left'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Ширина ячейки.\r
@type {number | string}\r
@default 'auto'`,defaultValue:{value:"'auto'",computed:!1}}}};const V=({st:u,row:l,col:n,children:a,textAlignment:m="left",height:c="auto",...h})=>{const y={textAlign:m,height:c,...u};return T.jsx("td",{style:y,rowSpan:l&&l>1?l:void 0,colSpan:n&&n>1?n:void 0,...h,className:`${b["f-table-component__table_body-cell"]} ${h.className||""}`,children:a})};V.__docgenInfo={description:`Компонент FTableDataCell представляет собой ячейку данных таблицы (\`<td>\`).\r
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
@default 'left'`,defaultValue:{value:"'left'",computed:!1}},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Высота ячейки.\r
@type {number | string}\r
@default 'auto'`,defaultValue:{value:"'auto'",computed:!1}}}};const L=({st:u,children:l,...n})=>T.jsx("tfoot",{style:u,...n,className:`${b["f-table-component__table_footer"]} ${n.className||""}`,children:l});L.__docgenInfo={description:`Компонент FTableFooter представляет собой нижний колонтитул таблицы (\`<tfoot>\`).\r
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
@type {React.CSSProperties}`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Дочерние элементы (например, строки `<tr>` или ячейки `<td>`).\r\n@type {React.ReactNode}"}}};export{A as F,E as a,$ as b,k as c,I as d,V as e,L as f};
