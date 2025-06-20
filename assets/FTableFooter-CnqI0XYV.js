import{j as T}from"./jsx-runtime-Cf8x2fCZ.js";import{e as R,r as f}from"./index-DY-snNUy.js";const H="_bordered_bxmcg_18",b={"f-table-component":"_f-table-component_bxmcg_1","f-table-component__table":"_f-table-component__table_bxmcg_7",bordered:H,"bordered-half":"_bordered-half_bxmcg_22","f-table-component__table_header":"_f-table-component__table_header_bxmcg_25","is-sticky":"_is-sticky_bxmcg_32","f-table-component__table_header-cell":"_f-table-component__table_header-cell_bxmcg_37","f-table-component__table_body":"_f-table-component__table_body_bxmcg_54","f-table-component__table_row":"_f-table-component__table_row_bxmcg_57","f-table-component__table_body-cell":"_f-table-component__table_body-cell_bxmcg_61","f-table-component__table_footer":"_f-table-component__table_footer_bxmcg_73"},E=({st:u,children:r,textAlignment:a="left",isSticky:l=!1,...m})=>{const c={textAlign:a,...u};return T.jsx("thead",{style:c,...m,className:`${b["f-table-component__table_header"]} ${l?b["is-sticky"]:""} ${m.className||""}`,children:r})};E.__docgenInfo={description:`Компонент FTableHead представляет собой заголовок таблицы (\`<thead>\`).
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
@default false`,defaultValue:{value:"false",computed:!1}}}};const j=({st:u,children:r,textAlignment:a="left",tableWrapperRef:l,visibleRowCount:m=void 0,...c})=>{const h={textAlign:a,...u},y=f.useRef(null),t=f.useMemo(()=>R.Children.toArray(r),[r]),_=t.length,[g,P]=f.useState(0),[d,x]=f.useState(Array(t.length).fill(0)),p=typeof m=="number"&&m>0;f.useEffect(()=>{d.length<t.length&&x(n=>[...n,...Array(t.length-n.length).fill(0)])},[t.length,d.length]);const S=f.useCallback(()=>{if(!p||!(l!=null&&l.current)||!y.current)return;const o=l.current.scrollTop;let i=0,s=0;for(let e=0;e<d.length;e++){if(i+d[e]>o){s=e;break}i+=d[e]}P(s)},[d,l,p]),v=f.useCallback(()=>{p&&requestAnimationFrame(S)},[S,p]);f.useEffect(()=>{var o;if(!p)return;const n=()=>requestAnimationFrame(S);return window.addEventListener("resize",n),(o=l==null?void 0:l.current)==null||o.addEventListener("scroll",v),n(),()=>{var i;window.removeEventListener("resize",n),(i=l==null?void 0:l.current)==null||i.removeEventListener("scroll",v)}},[v,S,p]),f.useLayoutEffect(()=>{if(!y.current)return;const n=y.current.querySelectorAll("tr[data-row-index]"),o=[...d];let i=!1;n.forEach((s,e)=>{const q=p?g+e:e,F=s.getBoundingClientRect().height;F>0&&o[q]!==F&&(o[q]=F,i=!0)}),i&&x(o)},[t,d,g,p]);let w,C=0,N=0;if(p){let n=function(i,s){for(let e=i-1;e>=0;e--)if(s[e]>0)return s[e];for(let e=i+1;e<s.length;e++)if(s[e]>0)return s[e];return 0};const o=Math.min(g+m,_);w=t.slice(g,o),C=d.slice(0,g).reduce((i,s,e)=>i+(s>0?s:n(e,d)),0),N=d.slice(o).reduce((i,s,e)=>i+(s>0?s:n(o+e,d)),0)}else w=t;return T.jsxs("tbody",{ref:y,style:h,...c,className:`${b["f-table-component__table_body"]} ${c.className||""}`,children:[p&&d.some(n=>n>0)&&T.jsx("tr",{style:{height:C}}),w.map((n,o)=>R.isValidElement(n)?R.cloneElement(n,{"data-row-index":p?g+o:o,key:p?g+o:o}):n),p&&d.some(n=>n>0)&&T.jsx("tr",{style:{height:N}})]})},I=R.memo(j);j.__docgenInfo={description:`Компонент FTableBody представляет собой тело таблицы (\`<tbody>\`).
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
@type {React.RefObject<HTMLDivElement>}`},visibleRowCount:{required:!1,tsType:{name:"number"},description:"Количество видимых строк для виртуализации. Если не указано — виртуализация отключена.",defaultValue:{value:"undefined",computed:!0}}}};const A=({st:u,children:r,overflowX:a="auto",overflowY:l="auto",...m})=>{const c=f.useRef(null),[h,y]=f.useState(!1);return f.useEffect(()=>{const t=()=>{if(c.current){const g=c.current.scrollTop>0;y(g)}},_=c.current;return _&&_.addEventListener("scroll",t),()=>{_&&_.removeEventListener("scroll",t)}},[]),T.jsx("div",{ref:c,className:b["f-table-component"],style:{overflowX:a,overflowY:l},children:T.jsx("table",{style:u,...m,className:`table ${b["f-table-component__table"]} ${b.bordered} ${b["bordered-half"]} ${m.className||""}`,children:R.Children.map(r,t=>{if(R.isValidElement(t)&&t.type===E){const _=t.props;return R.cloneElement(t,{..._,isSticky:h})}if(R.isValidElement(t)&&t.type===I){const _=t.props;return R.cloneElement(t,{..._,tableWrapperRef:c})}return t})})})};A.__docgenInfo={description:`Компонент FTable представляет собой таблицу с возможностью управления переполнением и "липким" заголовком.
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
@default "auto"`,defaultValue:{value:'"auto"',computed:!1}}}};const $=({st:u,children:r,...a})=>T.jsx("tr",{style:u,...a,className:`${b["f-table-component__table_row"]} ${a.className||""}`,children:r});$.__docgenInfo={description:`Компонент FTableRow представляет собой строку таблицы (\`<tr>\`).
Он поддерживает настройку стилей и передачу дочерних элементов.

@component
@example
<FTableRow st={{ backgroundColor: '#f9f9f9' }}>
  <td>Ячейка 1</td>
  <td>Ячейка 2</td>
</FTableRow>

@param {IFTableRow} props - Пропсы компонента.
@returns {JSX.Element} - Элемент строки таблицы.`,methods:[],displayName:"FTableRow",props:{st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Дополнительные стили для строки таблицы.
@type {React.CSSProperties}`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Дочерние элементы (например, ячейки `<td>` или `<th>`).\n@type {React.ReactNode}"}}};const k=({st:u,row:r,col:a,children:l,textAlignment:m="left",width:c="auto",...h})=>{const y={textAlign:m,width:c,...u};return T.jsx("th",{style:y,rowSpan:r&&r>1?r:void 0,colSpan:a&&a>1?a:void 0,...h,className:`${b["f-table-component__table_header-cell"]} ${h.className||""}`,children:l})};k.__docgenInfo={description:`Компонент FTableHeaderCell представляет собой ячейку заголовка таблицы (\`<th>\`).
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
@default 'left'`,defaultValue:{value:"'left'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Ширина ячейки.
@type {number | string}
@default 'auto'`,defaultValue:{value:"'auto'",computed:!1}}}};const V=({st:u,row:r,col:a,children:l,textAlignment:m="left",height:c="auto",...h})=>{const y={textAlign:m,height:c,...u};return T.jsx("td",{style:y,rowSpan:r&&r>1?r:void 0,colSpan:a&&a>1?a:void 0,...h,className:`${b["f-table-component__table_body-cell"]} ${h.className||""}`,children:l})};V.__docgenInfo={description:`Компонент FTableDataCell представляет собой ячейку данных таблицы (\`<td>\`).
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
@default 'left'`,defaultValue:{value:"'left'",computed:!1}},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Высота ячейки.
@type {number | string}
@default 'auto'`,defaultValue:{value:"'auto'",computed:!1}}}};const L=({st:u,children:r,...a})=>T.jsx("tfoot",{style:u,...a,className:`${b["f-table-component__table_footer"]} ${a.className||""}`,children:r});L.__docgenInfo={description:`Компонент FTableFooter представляет собой нижний колонтитул таблицы (\`<tfoot>\`).
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
@type {React.CSSProperties}`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Дочерние элементы (например, строки `<tr>` или ячейки `<td>`).\n@type {React.ReactNode}"}}};export{A as F,E as a,$ as b,k as c,I as d,V as e,L as f};
