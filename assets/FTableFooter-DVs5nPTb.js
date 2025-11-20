import{j as T}from"./jsx-runtime-Cf8x2fCZ.js";import{e as R,r as h}from"./index-DY-snNUy.js";const P="_bordered_j1bhx_18",$="_left_j1bhx_40",H="_center_j1bhx_43",I="_right_j1bhx_46",m={"f-table-component":"_f-table-component_j1bhx_1","f-table-component__table":"_f-table-component__table_j1bhx_7",bordered:P,"bordered-half":"_bordered-half_j1bhx_22","f-table-component__table_header":"_f-table-component__table_header_j1bhx_25","is-sticky":"_is-sticky_j1bhx_32","f-table-component__table_header-cell":"_f-table-component__table_header-cell_j1bhx_37",left:$,center:H,right:I,"f-table-component__table_body":"_f-table-component__table_body_j1bhx_65","f-table-component__table_row":"_f-table-component__table_row_j1bhx_68","f-table-component__table_body-cell":"_f-table-component__table_body-cell_j1bhx_81","f-table-component__table_footer":"_f-table-component__table_footer_j1bhx_97"},q=({st:p,children:l,textAlignment:a="left",isSticky:e=!1,...f})=>T.jsx("thead",{style:p,...f,className:`${m["f-table-component__table_header"]} ${e?m["is-sticky"]:""} ${f.className||""} ${m[a]}`,children:l});q.__docgenInfo={description:`Компонент FTableHead представляет собой заголовок таблицы (\`<thead>\`).
Он поддерживает настройку стилей, выравнивания текста и режима "липкости".

@component
@example
<FTableHead
  textAlignment="center"
  isSticky={true}
  st={{ backgroundColor: '#f9f9f9' }}
>
  <tr>
    <th>Заголовок 1</th>
    <th>Заголовок 2</th>
  </tr>
</FTableHead>

@param {IFTableHead} props - Пропсы компонента.
@returns {JSX.Element} - Элемент заголовка таблицы.`,methods:[],displayName:"FTableHead",props:{st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Дополнительные стили для заголовка таблицы.
@type {React.CSSProperties}`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Дочерние элементы (например, строки `<tr>` или ячейки `<th>`).\n@type {React.ReactNode}"},textAlignment:{required:!1,tsType:{name:"union",raw:'"left" | "right" | "center" | "justify"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"center"'},{name:"literal",value:'"justify"'}]},description:`Выравнивание текста внутри заголовка таблицы.
@type {"left" | "right" | "center" | "justify"}
@default "left"`,defaultValue:{value:'"left"',computed:!1}},isSticky:{required:!1,tsType:{name:"boolean"},description:`Флаг, указывающий, должен ли заголовок быть "липким" (sticky).
@type {boolean}
@default false`,defaultValue:{value:"false",computed:!1}}}};const E=({st:p,children:l,textAlignment:a="left",tableWrapperRef:e,visibleRowCount:f=void 0,...y})=>{const _=h.useRef(null),c=h.useMemo(()=>R.Children.toArray(l),[l]),d=c.length,[o,S]=h.useState(0),[u,x]=h.useState(Array(c.length).fill(0)),b=typeof f=="number"&&f>0;h.useEffect(()=>{u.length<c.length&&x(n=>[...n,...Array(c.length-n.length).fill(0)])},[c.length,u.length]);const v=h.useCallback(()=>{if(!b||!(e!=null&&e.current)||!_.current)return;const r=e.current.scrollTop;let i=0,s=0;for(let t=0;t<u.length;t++){if(i+u[t]>r){s=t;break}i+=u[t]}S(s)},[u,e,b]),g=h.useCallback(()=>{b&&requestAnimationFrame(v)},[v,b]);h.useEffect(()=>{var r;if(!b)return;const n=()=>requestAnimationFrame(v);return window.addEventListener("resize",n),(r=e==null?void 0:e.current)==null||r.addEventListener("scroll",g),n(),()=>{var i;window.removeEventListener("resize",n),(i=e==null?void 0:e.current)==null||i.removeEventListener("scroll",g)}},[g,v,b]),h.useLayoutEffect(()=>{if(!_.current)return;const n=_.current.querySelectorAll("tr[data-row-index]"),r=[...u];let i=!1;n.forEach((s,t)=>{const N=b?o+t:t,F=s.getBoundingClientRect().height;F>0&&r[N]!==F&&(r[N]=F,i=!0)}),i&&x(r)},[c,u,o,b]);let w,j=0,C=0;if(b){let n=function(i,s){for(let t=i-1;t>=0;t--)if(s[t]>0)return s[t];for(let t=i+1;t<s.length;t++)if(s[t]>0)return s[t];return 0};const r=Math.min(o+f,d);w=c.slice(o,r),j=u.slice(0,o).reduce((i,s,t)=>i+(s>0?s:n(t,u)),0),C=u.slice(r).reduce((i,s,t)=>i+(s>0?s:n(r+t,u)),0)}else w=c;return T.jsxs("tbody",{ref:_,style:p,...y,className:`${m["f-table-component__table_body"]} ${y.className||""}  ${m[a]}`,children:[b&&u.some(n=>n>0)&&T.jsx("tr",{style:{height:j}}),w.map((n,r)=>R.isValidElement(n)?R.cloneElement(n,{"data-row-index":b?o+r:r,key:b?o+r:r}):n),b&&u.some(n=>n>0)&&T.jsx("tr",{style:{height:C}})]})},k=R.memo(E);E.__docgenInfo={description:`Компонент FTableBody представляет собой тело таблицы (\`<tbody>\`).
Он поддерживает настройку стилей, выравнивания текста и передачу дочерних элементов.
Также реализована виртуализация строк для оптимизации производительности при большом количестве данных.

@component
@example
<FTableBody st={{ backgroundColor: '#f9f9f9' }} textAlignment="center">
  <tr>
    <td>Ячейка 1</td>
    <td>Ячейка 2</td>
  </tr>
  <tr>
    <td>Ячейка 3</td>
    <td>Ячейка 4</td>
  </tr>
</FTableBody>

@param {IFTableBody} props - Пропсы компонента.
@returns {JSX.Element} - Элемент тела таблицы.`,methods:[],displayName:"FTableBody",props:{st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Дополнительные стили для тела таблицы.
@type {React.CSSProperties}`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Дочерние элементы (например, строки `<tr>` или ячейки `<td>`).\n@type {React.ReactNode}"},textAlignment:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'center' | 'justify'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'center'"},{name:"literal",value:"'justify'"}]},description:`Выравнивание текста внутри тела таблицы.
@type {'left' | 'right' | 'center' | 'justify'}
@default 'left'`,defaultValue:{value:"'left'",computed:!1}},tableWrapperRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:`Ref для родительского контейнера с прокруткой.
Используется для отслеживания события прокрутки.
@type {React.RefObject<HTMLDivElement>}`},visibleRowCount:{required:!1,tsType:{name:"number"},description:"Количество видимых строк для виртуализации. Если не указано — виртуализация отключена.",defaultValue:{value:"undefined",computed:!0}}}};const A=({st:p,children:l,overflowX:a="auto",overflowY:e="auto",...f})=>{const y=h.useRef(null),[_,c]=h.useState(!1);return h.useEffect(()=>{const d=()=>{if(y.current){const S=y.current.scrollTop>0;c(S)}},o=y.current;return o&&o.addEventListener("scroll",d),()=>{o&&o.removeEventListener("scroll",d)}},[]),T.jsx("div",{ref:y,className:m["f-table-component"],style:{overflowX:a,overflowY:e},children:T.jsx("table",{style:p,...f,className:`table ${m["f-table-component__table"]} ${m.bordered} ${m["bordered-half"]} ${f.className||""}`,children:R.Children.map(l,d=>{if(R.isValidElement(d)&&d.type===q){const o=d.props;return R.cloneElement(d,{...o,isSticky:_})}if(R.isValidElement(d)&&d.type===k){const o=d.props;return R.cloneElement(d,{...o,tableWrapperRef:y})}return d})})})};A.__docgenInfo={description:`Компонент FTable представляет собой таблицу с возможностью управления переполнением и "липким" заголовком.
Он поддерживает настройку стилей, обработку скролла и динамическое изменение состояния заголовка.

@component
@example
<FTable overflowX="auto" overflowY="scroll">
  <FTableHead>
    <tr>
      <th>Заголовок 1</th>
      <th>Заголовок 2</th>
    </tr>
  </FTableHead>
  <tbody>
    <tr>
      <td>Ячейка 1</td>
      <td>Ячейка 2</td>
    </tr>
  </tbody>
</FTable>

@param {IFTable} props - Пропсы компонента.
@returns {JSX.Element} - Элемент таблицы.`,methods:[],displayName:"FTable",props:{st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Дополнительные стили для таблицы.
@type {React.CSSProperties}`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Дочерние элементы (например, `<thead>`, `<tbody>`, `<tfoot>`).\n@type {React.ReactNode}"},overflowX:{required:!1,tsType:{name:"union",raw:'"visible" | "hidden" | "clip" | "scroll" | "auto"',elements:[{name:"literal",value:'"visible"'},{name:"literal",value:'"hidden"'},{name:"literal",value:'"clip"'},{name:"literal",value:'"scroll"'},{name:"literal",value:'"auto"'}]},description:`Управление горизонтальным переполнением контейнера таблицы.
@type {"visible" | "hidden" | "clip" | "scroll" | "auto" | undefined}
@default "auto"`,defaultValue:{value:'"auto"',computed:!1}},overflowY:{required:!1,tsType:{name:"union",raw:'"visible" | "hidden" | "clip" | "scroll" | "auto"',elements:[{name:"literal",value:'"visible"'},{name:"literal",value:'"hidden"'},{name:"literal",value:'"clip"'},{name:"literal",value:'"scroll"'},{name:"literal",value:'"auto"'}]},description:`Управление вертикальным переполнением контейнера таблицы.
@type {"visible" | "hidden" | "clip" | "scroll" | "auto" | undefined}
@default "auto"`,defaultValue:{value:'"auto"',computed:!1}}}};const V=({st:p,children:l,textAlignment:a,...e})=>T.jsx("tr",{style:p,...e,className:`${m["f-table-component__table_row"]} ${e.className||""}${a!==void 0?` ${m[a]}`:""}`,children:l});V.__docgenInfo={description:`Компонент FTableRow представляет собой строку таблицы (\`<tr>\`).
Он поддерживает настройку стилей и передачу дочерних элементов.

@component
@example
<FTableRow st={{ backgroundColor: '#f9f9f9' }}>
  <td>Ячейка 1</td>
  <td>Ячейка 2</td>
</FTableRow>

@param {IFTableRow} props - Пропсы компонента.
@returns {JSX.Element} - Элемент строки таблицы.`,methods:[],displayName:"FTableRow",props:{st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Дополнительные стили для строки таблицы.
@type {React.CSSProperties}`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Дочерние элементы (например, ячейки `<td>` или `<th>`).\n@type {React.ReactNode}"},textAlignment:{required:!1,tsType:{name:"union",raw:'"left" | "right" | "center" | "justify"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"center"'},{name:"literal",value:'"justify"'}]},description:`Выравнивание текста внутри строки.
@type {"left" | "right" | "center" | "justify"}
@default "left"`}}};const L=({st:p,row:l,col:a,children:e,textAlignment:f,width:y="auto",..._})=>{const c={textAlign:f,width:y,...p};return T.jsx("th",{style:c,rowSpan:l&&l>1?l:void 0,colSpan:a&&a>1?a:void 0,..._,className:`${m["f-table-component__table_header-cell"]} ${_.className||""}`,children:e})};L.__docgenInfo={description:`Компонент FTableHeaderCell представляет собой ячейку заголовка таблицы (\`<th>\`).
Он поддерживает настройку стилей, объединение строк и столбцов, а также выравнивание текста.

@component
@example
<FTableHeaderCell
  textAlignment="center"
  width="200px"
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
@default 'auto'`,defaultValue:{value:"'auto'",computed:!1}}}};const B=({st:p,row:l,col:a,children:e,textAlignment:f,height:y="auto",..._})=>{const c={textAlign:f,height:y,...p};return T.jsx("td",{style:c,rowSpan:l&&l>1?l:void 0,colSpan:a&&a>1?a:void 0,..._,className:`${m["f-table-component__table_body-cell"]} ${_.className||""}`,children:e})};B.__docgenInfo={description:`Компонент FTableDataCell представляет собой ячейку данных таблицы (\`<td>\`).
Он поддерживает настройку стилей, объединение строк и столбцов, а также обработку событий.

@component
@example
<FTableDataCell
  textAlignment="center"
  height="50px"
  row={2}
  col={3}
  onClick={() => console.log('Cell clicked!')}
>
  Ячейка данных
</FTableDataCell>

@param {IFTableDataCell} props - Пропсы компонента.
@returns {JSX.Element} - Элемент данных таблицы.`,methods:[],displayName:"FTableDataCell",props:{st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Дополнительные стили для ячейки таблицы.
@type {React.CSSProperties}`},row:{required:!1,tsType:{name:"number"},description:`Значение rowspan для объединения строк.
@type {number | undefined}`},col:{required:!1,tsType:{name:"number"},description:`Значение colspan для объединения столбцов.
@type {number | undefined}`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Дочерние элементы (например, текст или другие компоненты).
@type {React.ReactNode}`},textAlignment:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'center' | 'justify'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'center'"},{name:"literal",value:"'justify'"}]},description:`Выравнивание текста внутри ячейки.
@type {'left' | 'right' | 'center' | 'justify'}
@default 'left'`},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Высота ячейки.
@type {number | string}
@default 'auto'`,defaultValue:{value:"'auto'",computed:!1}}}};const D=({st:p,children:l,...a})=>T.jsx("tfoot",{style:p,...a,className:`${m["f-table-component__table_footer"]} ${a.className||""}`,children:l});D.__docgenInfo={description:`Компонент FTableFooter представляет собой нижний колонтитул таблицы (\`<tfoot>\`).
Он поддерживает настройку стилей и передачу дочерних элементов.

@component
@example
<FTableFooter st={{ borderTop: '2px solid #000' }}>
  <tr>
    <td>Итого</td>
    <td>100</td>
  </tr>
</FTableFooter>

@param {IFTableFooter} props - Пропсы компонента.
@returns {JSX.Element} - Элемент нижнего колонтитула таблицы.`,methods:[],displayName:"FTableFooter",props:{st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Дополнительные стили для нижнего колонтитула таблицы.
@type {React.CSSProperties}`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Дочерние элементы (например, строки `<tr>` или ячейки `<td>`).\n@type {React.ReactNode}"}}};export{A as F,q as a,V as b,L as c,k as d,B as e,D as f};
