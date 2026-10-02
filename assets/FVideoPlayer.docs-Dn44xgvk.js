import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-BoUPaUI-.js";import"./index-Dk-UaGq_.js";import{M as i}from"./index-Bp6Fg3X0.js";import"./index-B3j06Xw8.js";import"./preview-Da1FNSTG.js";import"./iframe-DDivtEdb.js";import"./DocsRenderer-CFRXHY34-2qU4u9H4.js";import"./client-DOawrHdJ.js";import"./index-DW0t0JKo.js";import"./index-D_ywfbVi.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";function o(n){const r={code:"code",h1:"h1",p:"p",pre:"pre",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Material/FVideoPlayer"}),`
`,e.jsx(r.h1,{id:"fvideoplayer",children:"FVideoPlayer"}),`
`,e.jsx(r.p,{children:"Нажатие на превью открывает видео в затемнённом окне и запускает воспроизведение. Кнопка «На весь экран» разворачивает сам видеоплеер на весь экран браузера."}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`<FVideoPlayer
    src="/videos/demo.mp4"
    poster="/images/demo-preview.jpg"
    st={{ maxWidth: 640 }}
/>
`})}),`
`,e.jsxs(r.p,{children:[`| Проп | Тип | Описание |
| --- | --- | --- |
| `,e.jsx(r.code,{children:"src"})," | ",e.jsx(r.code,{children:"string"}),` | URL видео |
| `,e.jsx(r.code,{children:"poster"})," | ",e.jsx(r.code,{children:"string"}),` | URL изображения превью |
| `,e.jsx(r.code,{children:"className"})," | ",e.jsx(r.code,{children:"string"}),` | Дополнительный CSS-класс превью |
| `,e.jsx(r.code,{children:"st"})," | ",e.jsx(r.code,{children:"React.CSSProperties"})," | Инлайновые стили превью |"]})]})}function M(n={}){const{wrapper:r}={...t(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(o,{...n})}):o(n)}export{M as default};
