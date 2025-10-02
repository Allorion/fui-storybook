import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as s}from"./index-D7CuHrhf.js";import"./index-CvDKxQs5.js";import{M as i}from"./index-iTHNV5da.js";import"./index-yBjzXJbu.js";import"./index-DY-snNUy.js";import"./preview-Dc3-k68a.js";import"./iframe-BO3a0mw_.js";import"./DocsRenderer-CFRXHY34-Cbsyfjks.js";import"./client-CDUMOAsi.js";import"./index-fNjTmf9T.js";import"./index-xMzmejw-.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function n(l){const d={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Material/FOpenImgFull"}),`
`,e.jsx(d.h1,{id:"️-fopenimgfull--компонент-полноэкранного-просмотра-изображений",children:"🖼️ FOpenImgFull — компонент полноэкранного просмотра изображений"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsx(d.p,{children:"Компонент для отображения изображений в полноэкранном режиме с возможностью навигации по галерее."}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-описание",children:"📝 Описание"}),`
`,e.jsxs(d.p,{children:[e.jsx(d.code,{children:"FOpenImgFull"})," — это компонент для просмотра изображений в полноэкранном режиме, который предоставляет:"]}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsx(d.li,{children:"Полноэкранный просмотр изображений"}),`
`,e.jsx(d.li,{children:"Навигацию по галерее изображений"}),`
`,e.jsx(d.li,{children:"Индикатор загрузки"}),`
`,e.jsx(d.li,{children:"Обработку ошибок загрузки"}),`
`,e.jsx(d.li,{children:"Возможность закрытия просмотра"}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-примеры-использования",children:"💡 Примеры использования"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{children:`// Базовое использование
<FOpenImgFull
    imagesUrl={['https://example.com/image1.jpg', 'https://example.com/image2.jpg']}
    selectedImg={0}
    setSelectedImg={(index) => console.log('Selected image:', index)}
    openAndClose={true}
    handleClose={() => console.log('Close modal')}
/>

// С кастомными стилями
<FOpenImgFull
    imagesUrl={['https://example.com/image1.jpg']}
    selectedImg={0}
    setSelectedImg={(index) => console.log('Selected image:', index)}
    openAndClose={true}
    className="custom-gallery"
    st={{ backgroundColor: '#000' }}
/>
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-пропсы",children:"📋 Пропсы"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Проп"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"imagesUrl"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string[]"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Массив URL-адресов изображений"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"selectedImg"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"number"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Индекс выбранного изображения"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"setSelectedImg"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"(index: number) => void"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Функция для изменения выбранного изображения"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"openAndClose"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Флаг открытия/закрытия просмотра"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"handleClose"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Функция для закрытия просмотра"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"className"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Дополнительный CSS-класс"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"st"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"CSSProperties"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Инлайновые стили"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"id"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Уникальный идентификатор"})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"️-особенности",children:"🛠️ Особенности"}),`
`,e.jsxs("ul",{children:[e.jsx("li",{children:"Полноэкранный просмотр изображений"}),e.jsx("li",{children:"Навигация по галерее с помощью стрелок"}),e.jsx("li",{children:"Индикатор загрузки изображений"}),e.jsx("li",{children:"Обработка ошибок загрузки"}),e.jsx("li",{children:"Возможность закрытия просмотра"}),e.jsx("li",{children:"Поддержка клавиатурной навигации"}),e.jsx("li",{children:"Адаптивный дизайн"})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"ℹ️-советы",children:"ℹ️ Советы"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:["Используйте массив ",e.jsx(d.code,{children:"imagesUrl"})," для передачи списка изображений"]}),`
`,e.jsxs(d.li,{children:["Управляйте состоянием выбранного изображения через ",e.jsx(d.code,{children:"selectedImg"})," и ",e.jsx(d.code,{children:"setSelectedImg"})]}),`
`,e.jsxs(d.li,{children:["Добавляйте обработчик закрытия через ",e.jsx(d.code,{children:"handleClose"})]}),`
`,e.jsxs(d.li,{children:["Используйте ",e.jsx(d.code,{children:"className"})," для кастомизации стилей"]}),`
`,e.jsxs(d.li,{children:["Применяйте ",e.jsx(d.code,{children:"st"})," для инлайновых стилей"]}),`
`,e.jsx(d.li,{children:"Обеспечьте корректную обработку ошибок загрузки изображений"}),`
`]})]})}function f(l={}){const{wrapper:d}={...s(),...l.components};return d?e.jsx(d,{...l,children:e.jsx(n,{...l})}):n(l)}export{f as default};
