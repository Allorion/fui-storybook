import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as l}from"./index-D7CuHrhf.js";import"./index-D3ghijC9.js";import{M as n}from"./index-D4zPF2uo.js";import"./index-yBjzXJbu.js";import"./index-DY-snNUy.js";import"./preview-Dae6In-b.js";import"./iframe-sXVIHQIk.js";import"./DocsRenderer-CFRXHY34-BR7xeYUn.js";import"./client-CDUMOAsi.js";import"./index-fNjTmf9T.js";import"./index-xMzmejw-.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function r(i){const d={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...l(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n,{title:"Material/FInputFileForm"}),`
`,e.jsx(d.h1,{id:"-finputfileform--поле-для-загрузки-файлов-с-валидацией",children:"📁 FInputFileForm — поле для загрузки файлов с валидацией"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsx(d.p,{children:"Компонент для загрузки файлов с поддержкой валидации, отображением ошибок, подсказок, предпросмотром выбранных файлов и индикатором прогресса загрузки."}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-описание",children:"📝 Описание"}),`
`,e.jsxs(d.p,{children:[e.jsx(d.code,{children:"FInputFileForm"})," — это компонент для загрузки файлов с расширенной функциональностью:"]}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsx(d.li,{children:"Валидация и отображение ошибок"}),`
`,e.jsx(d.li,{children:"Подсказки и вспомогательный текст"}),`
`,e.jsx(d.li,{children:"Предпросмотр выбранных файлов с индикатором прогресса"}),`
`,e.jsx(d.li,{children:"Кастомизация внешнего вида"}),`
`,e.jsx(d.li,{children:"Поддержка множественной загрузки"}),`
`,e.jsx(d.li,{children:"Фильтрация по типам файлов"}),`
`,e.jsx(d.li,{children:"Drag & drop загрузка"}),`
`,e.jsx(d.li,{children:"Визуальный индикатор прогресса загрузки"}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-примеры-использования",children:"💡 Примеры использования"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{children:`<FInputFileForm 
  label="Загрузить документ"
  onChange={handleFiles}
  helpText="Поддерживаемые форматы: PDF, DOC, DOCX"
/>

<FInputFileForm 
  label="Загрузить изображения"
  multiple
  accept="image/*"
  onChange={handleFiles}
  errText={['Максимальный размер файла: 5MB']}
/>

<FInputFileForm 
  label="Загрузить файлы"
  disabled
  onChange={() => {}}
  helpText="Функция временно недоступна"
/>

<FInputFileForm 
  label="Загрузить файлы с ограничением"
  maxFiles={3}
  dataMaxSize={{ dimension: "МБ", size: 5 }}
  onChange={handleFiles}
  onValidationError={(errors) => console.log(errors)}
/>
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-пропсы",children:"📋 Пропсы"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Проп"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"label"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Текст метки поля"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"variant"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"'contained' | 'default'"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Вариант оформления"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"color"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Цвет компонента"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"size"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"'btn-lg' | 'btn-sm' | 'btn-xs'"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Размер компонента"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"disabled"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Отключить компонент"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"fullWidth"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Растянуть на всю ширину"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"multiple"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Разрешить выбор нескольких файлов"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"accept"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Типы файлов (accept)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"direction"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"'row' | 'row-reverse' | 'column' | 'column-reverse'"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Ориентация предпросмотра файлов"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"spacing"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"0 | 0.5 | 1 | 2 | 3 | 4 | 8 | 12"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Отступы между файлами"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"errText"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string[]"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Массив текстов ошибок"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"helpText"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Вспомогательный текст"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"onChange"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"(files: FileList) => void"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Обработчик выбора файлов"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"dataMaxSize"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"{ dimension: 'КБ' | 'МБ', size: number }"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Ограничение максимального размера файла"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"maxFiles"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"number"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Максимальное количество файлов"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"onValidationError"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"(errors: string[]) => void"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Обработчик ошибок валидации"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"showPreview"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Показывать предпросмотр файлов"})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"️-особенности",children:"🛠️ Особенности"}),`
`,e.jsxs("ul",{children:[e.jsx("li",{children:"Встроенная валидация и отображение ошибок"}),e.jsx("li",{children:"Поддержка вспомогательного текста и подсказок"}),e.jsx("li",{children:"Предпросмотр выбранных файлов с индикатором прогресса загрузки"}),e.jsx("li",{children:"Гибкая настройка внешнего вида"}),e.jsx("li",{children:"Поддержка множественной загрузки"}),e.jsx("li",{children:"Фильтрация по типам файлов"}),e.jsx("li",{children:"Интеграция с FStack для кастомизации предпросмотра"}),e.jsx("li",{children:"Drag & drop загрузка файлов"}),e.jsx("li",{children:"Визуальный индикатор прогресса загрузки"}),e.jsx("li",{children:"Ограничение размера и количества файлов"})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"ℹ️-советы",children:"ℹ️ Советы"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:["Используйте ",e.jsx("code",{children:"errText"})," для отображения ошибок валидации"]}),`
`,e.jsxs(d.li,{children:["Добавьте ",e.jsx("code",{children:"helpText"})," для подсказок пользователю"]}),`
`,e.jsxs(d.li,{children:["Для загрузки нескольких файлов включите ",e.jsx("code",{children:"multiple"})]}),`
`,e.jsxs(d.li,{children:["Для фильтрации по типам файлов используйте ",e.jsx("code",{children:"accept"})]}),`
`,e.jsxs(d.li,{children:["Настройте внешний вид через ",e.jsx("code",{children:"variant"}),", ",e.jsx("code",{children:"color"}),", ",e.jsx("code",{children:"size"})]}),`
`,e.jsxs(d.li,{children:["Управляйте предпросмотром с помощью ",e.jsx("code",{children:"direction"})," и ",e.jsx("code",{children:"spacing"})]}),`
`,e.jsxs(d.li,{children:["Используйте ",e.jsx("code",{children:"dataMaxSize"})," для ограничения размера файлов"]}),`
`,e.jsxs(d.li,{children:["Установите ",e.jsx("code",{children:"maxFiles"})," для ограничения количества файлов"]}),`
`,e.jsxs(d.li,{children:["Обрабатывайте ошибки валидации через ",e.jsx("code",{children:"onValidationError"})]}),`
`,e.jsxs(d.li,{children:["Отключите предпросмотр через ",e.jsxs("code",{children:["showPreview=",!1]})," если не нужен"]}),`
`]})]})}function F(i={}){const{wrapper:d}={...l(),...i.components};return d?e.jsx(d,{...i,children:e.jsx(r,{...i})}):r(i)}export{F as default};
