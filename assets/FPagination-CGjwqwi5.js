import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{r as S}from"./index-DY-snNUy.js";const g="...",f=(n,l)=>{const t=l-n+1;return Array.from({length:t},(a,u)=>u+n)},b=({totalCount:n,pageSize:l,siblingCount:t=1,currentPage:a})=>S.useMemo(()=>{const r=Math.ceil(n/l);if(t+5>=r)return f(1,r);const d=Math.max(a-t,1),i=Math.min(a+t,r),p=d>2,c=i<r-2,h=1,m=r;if(!p&&c){const s=3+2*t;return[...f(1,s),g,r]}if(p&&!c){const s=3+2*t,y=f(r-s+1,r);return[h,g,...y]}if(p&&c){const s=f(d,i);return[h,g,...s,g,m]}return null},[n,l,t,a]),x="_dots_aham2_29",C="_selected_aham2_33",P="_disabled_aham2_37",$="_arrow_aham2_43",R="_left_aham2_56",e={"pagination-container":"_pagination-container_aham2_1","pagination-item":"_pagination-item_aham2_9",dots:x,selected:C,disabled:P,arrow:$,left:R},w=({currentPage:n,totalCount:l,pageSize:t,onPageChange:a,id:u,className:r,st:_,siblingCount:d})=>{const i=b({currentPage:n,totalCount:l,siblingCount:d,pageSize:t});if(n===0||!i||i.length<2)return null;const p=()=>a(n+1),c=()=>a(n-1),h=i[i.length-1];return o.jsxs("ul",{className:`${e["pagination-container"]} ${r||""}`,style:_,id:u,children:[o.jsx("li",{className:`${e["pagination-item"]} ${n===1?e.disabled:""}`,onClick:c,children:o.jsx("div",{className:`${e.arrow} ${e.left}`})}),i.map((m,s)=>m===g?o.jsx("li",{className:`${e["pagination-item"]} ${e.dots}`,children:"…"},s):o.jsx("li",{className:`${e["pagination-item"]} ${m===n?e.selected:""}`,onClick:()=>a(m),children:m},s)),o.jsx("li",{className:`${e["pagination-item"]} ${n===h?e.disabled:""}`,onClick:p,children:o.jsx("div",{className:`${e.arrow} ${e.right}`})})]})};w.__docgenInfo={description:`Компонент \`FPagination\` — горизонтальная навигация по страницам.\r
\r
Показывает:\r
- кнопки для перехода к предыдущей/следующей странице\r
- диапазон страниц\r
- точки (\`...\`) при большом количестве страниц\r
\r
@component\r
@example\r
<FPagination\r
  currentPage={currentPage}\r
  totalCount={100}\r
  pageSize={5}\r
  siblingCount={1}\r
  onPageChange={(page) => setCurrentPage(page)}\r
/>\r
\r
@example\r
// С пользовательским классом и стилем\r
<FPagination\r
  currentPage={1}\r
  totalCount={100}\r
  pageSize={10}\r
  siblingCount={2}\r
  onPageChange={(page) => console.log('Перешли на', page)}\r
  className="custom-pagination"\r
  st={{ justifyContent: 'flex-start' }}\r
/>\r
\r
@param {number} currentPage - Номер текущей страницы (начинается с 1).\r
@param {number} totalCount - Общее количество записей.\r
@param {number} pageSize - Элементов на странице.\r
@param {(page: number | string) => void} onPageChange - Изменение страницы.\r
@param {string} [id] - HTML ID для контейнера.\r
@param {string} [className] - Дополнительный CSS-класс.\r
@param {React.CSSProperties} [st] - Инлайновые стили.\r
@param {0 | 1 | 2} siblingCount - Число видимых страниц рядом с текущей.\r
\r
@returns {JSX.Element | null} — Рендерит \`<ul>\` с кнопками навигации или возвращает \`null\`, если не нужно отображать.`,methods:[],displayName:"FPagination",props:{currentPage:{required:!0,tsType:{name:"number"},description:`Номер текущей страницы (начинается с 1).\r
@type {number}`},totalCount:{required:!0,tsType:{name:"number"},description:`Общее количество элементов (для вычисления страниц).\r
@type {number}`},pageSize:{required:!0,tsType:{name:"number"},description:`Количество элементов на странице.\r
@type {number}`},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number | string) => void",signature:{arguments:[{type:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},name:"page"}],return:{name:"void"}}},description:`Callback при изменении страницы. Принимает номер страницы или строку ("prev", "next").\r
@param {number | string} page - новый номер страницы или команда.`},id:{required:!1,tsType:{name:"string"},description:`Уникальный ID элемента.\r
@type {string | undefined}`},className:{required:!1,tsType:{name:"string"},description:`Дополнительный CSS-класс для контейнера пагинации.\r
@type {string | undefined}`},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Инлайновые стили для внешнего контейнера.\r
@type {React.CSSProperties | undefined}`},siblingCount:{required:!0,tsType:{name:"union",raw:"0 | 1 | 2",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"}]},description:`Сколько соседних страниц показывать вокруг текущей (0, 1 или 2).\r
@type {0 | 1 | 2}`}}};export{w as F};
