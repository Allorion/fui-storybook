import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{r as S}from"./index-DY-snNUy.js";const g="...",f=(n,l)=>{const t=l-n+1;return Array.from({length:t},(i,u)=>u+n)},b=({totalCount:n,pageSize:l,siblingCount:t=1,currentPage:i})=>S.useMemo(()=>{const a=Math.ceil(n/l);if(t+5>=a)return f(1,a);const d=Math.max(i-t,1),r=Math.min(i+t,a),p=d>2,c=r<a-2,h=1,m=a;if(!p&&c){const s=3+2*t;return[...f(1,s),g,a]}if(p&&!c){const s=3+2*t,y=f(a-s+1,a);return[h,g,...y]}if(p&&c){const s=f(d,r);return[h,g,...s,g,m]}return null},[n,l,t,i]),x="_dots_aham2_29",C="_selected_aham2_33",P="_disabled_aham2_37",$="_arrow_aham2_43",R="_left_aham2_56",e={"pagination-container":"_pagination-container_aham2_1","pagination-item":"_pagination-item_aham2_9",dots:x,selected:C,disabled:P,arrow:$,left:R},w=({currentPage:n,totalCount:l,pageSize:t,onPageChange:i,id:u,className:a,st:_,siblingCount:d})=>{const r=b({currentPage:n,totalCount:l,siblingCount:d,pageSize:t});if(n===0||!r||r.length<2)return null;const p=()=>i(n+1),c=()=>i(n-1),h=r[r.length-1];return o.jsxs("ul",{className:`${e["pagination-container"]} ${a||""}`,style:_,id:u,children:[o.jsx("li",{className:`${e["pagination-item"]} ${n===1?e.disabled:""}`,onClick:c,children:o.jsx("div",{className:`${e.arrow} ${e.left}`})}),r.map((m,s)=>m===g?o.jsx("li",{className:`${e["pagination-item"]} ${e.dots}`,children:"…"},s):o.jsx("li",{className:`${e["pagination-item"]} ${m===n?e.selected:""}`,onClick:()=>i(m),children:m},s)),o.jsx("li",{className:`${e["pagination-item"]} ${n===h?e.disabled:""}`,onClick:p,children:o.jsx("div",{className:`${e.arrow} ${e.right}`})})]})};w.__docgenInfo={description:`Компонент \`FPagination\` — горизонтальная навигация по страницам.

Показывает:
- кнопки для перехода к предыдущей/следующей странице
- диапазон страниц
- точки (\`...\`) при большом количестве страниц

@component
@example
<FPagination
  currentPage={currentPage}
  totalCount={100}
  pageSize={5}
  siblingCount={1}
  onPageChange={(page) => setCurrentPage(page)}
/>

@example
// С пользовательским классом и стилем
<FPagination
  currentPage={1}
  totalCount={100}
  pageSize={10}
  siblingCount={2}
  onPageChange={(page) => console.log('Перешли на', page)}
  className="custom-pagination"
  st={{ justifyContent: 'flex-start' }}
/>

@param {number} currentPage - Номер текущей страницы (начинается с 1).
@param {number} totalCount - Общее количество записей.
@param {number} pageSize - Элементов на странице.
@param {(page: number | string) => void} onPageChange - Изменение страницы.
@param {string} [id] - HTML ID для контейнера.
@param {string} [className] - Дополнительный CSS-класс.
@param {React.CSSProperties} [st] - Инлайновые стили.
@param {0 | 1 | 2} siblingCount - Число видимых страниц рядом с текущей.

@returns {JSX.Element | null} — Рендерит \`<ul>\` с кнопками навигации или возвращает \`null\`, если не нужно отображать.`,methods:[],displayName:"FPagination",props:{currentPage:{required:!0,tsType:{name:"number"},description:`Номер текущей страницы (начинается с 1).
@type {number}`},totalCount:{required:!0,tsType:{name:"number"},description:`Общее количество элементов (для вычисления страниц).
@type {number}`},pageSize:{required:!0,tsType:{name:"number"},description:`Количество элементов на странице.
@type {number}`},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number | string) => void",signature:{arguments:[{type:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},name:"page"}],return:{name:"void"}}},description:`Callback при изменении страницы. Принимает номер страницы или строку ("prev", "next").
@param {number | string} page - новый номер страницы или команда.`},id:{required:!1,tsType:{name:"string"},description:`Уникальный ID элемента.
@type {string | undefined}`},className:{required:!1,tsType:{name:"string"},description:`Дополнительный CSS-класс для контейнера пагинации.
@type {string | undefined}`},st:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Инлайновые стили для внешнего контейнера.
@type {React.CSSProperties | undefined}`},siblingCount:{required:!0,tsType:{name:"union",raw:"0 | 1 | 2",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"}]},description:`Сколько соседних страниц показывать вокруг текущей (0, 1 или 2).
@type {0 | 1 | 2}`}}};export{w as F};
