import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as S}from"./index-DEgj3Fem.js";const u="...",g=(n,l)=>{const r=l-n+1;return Array.from({length:r},(a,d)=>d+n)},b=({totalCount:n,pageSize:l,siblingCount:r=1,currentPage:a})=>S.useMemo(()=>{const t=Math.ceil(n/l);if(r*2+5>=t)return g(1,t);const h=Math.max(a-r,1),i=Math.min(a+r,t),p=h>2,c=i<t-2,f=1,m=t;if(!p&&c){const s=3+2*r;return[...g(1,s),u,t]}if(p&&!c){const s=3+2*r,y=g(t-s+1,t);return[f,u,...y]}if(p&&c){const s=g(h,i);return[f,u,...s,u,m]}return g(1,t)},[n,l,r,a]),x="_dots_aham2_29",C="_selected_aham2_33",P="_disabled_aham2_37",$="_arrow_aham2_43",R="_left_aham2_56",e={"pagination-container":"_pagination-container_aham2_1","pagination-item":"_pagination-item_aham2_9",dots:x,selected:C,disabled:P,arrow:$,left:R},w=({currentPage:n,totalCount:l,pageSize:r,onPageChange:a,id:d,className:t,st:_,siblingCount:h})=>{const i=b({currentPage:n,totalCount:l,siblingCount:h,pageSize:r});if(n===0||!i||i.length<2)return null;const p=()=>a(n+1),c=()=>a(n-1),f=i[i.length-1];return o.jsxs("ul",{className:`${e["pagination-container"]} ${t||""}`,style:_,id:d,children:[o.jsx("li",{className:`${e["pagination-item"]} ${n===1?e.disabled:""}`,onClick:c,children:o.jsx("div",{className:`${e.arrow} ${e.left}`})}),i.map((m,s)=>m===u?o.jsx("li",{className:`${e["pagination-item"]} ${e.dots}`,children:"…"},s):o.jsx("li",{className:`${e["pagination-item"]} ${m===n?e.selected:""}`,onClick:()=>a(m),children:m},s)),o.jsx("li",{className:`${e["pagination-item"]} ${n===f?e.disabled:""}`,onClick:p,children:o.jsx("div",{className:`${e.arrow} ${e.right}`})})]})};w.__docgenInfo={description:`Компонент \`FPagination\` — горизонтальная навигация по страницам.\r
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
