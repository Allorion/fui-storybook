import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as l}from"./index-BoUPaUI-.js";import"./index-BD3unkfZ.js";import{M as s}from"./index-Dj1DVtst.js";import"./index-B3j06Xw8.js";import"./preview-D_Y9KTOz.js";import"./iframe-D0yzChPa.js";import"./DocsRenderer-CFRXHY34-B9-m7B6c.js";import"./client-DOawrHdJ.js";import"./index-DW0t0JKo.js";import"./index-D_ywfbVi.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";function n(r){const d={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...l(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Material/FSearchBox"}),`
`,e.jsx(d.h1,{id:"-fsearchbox--поле-ввода-с-кнопками",children:"🔍 FSearchBox — поле ввода с кнопками"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsx(d.p,{children:"Кастомное поле ввода для поиска и фильтрации с поддержкой кнопок (поиск, очистка), состояний (загрузка, ошибка) и кастомизации."}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-описание",children:"📝 Описание"}),`
`,e.jsxs(d.p,{children:[e.jsx(d.code,{children:"FSearchBox"})," — это универсальное поле ввода, расширенное для задач поиска и фильтрации. Оно включает встроенные кнопки (поиск и опционально очистка), индикатор загрузки, отображение ошибок и вспомогательного текста. Поддерживает полный набор стандартных атрибутов HTML-инпута и гибкую кастомизацию."]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-примеры-использования",children:"💡 Примеры использования"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{children:`import { useState } from 'react';\r
import FSearchBox from './FSearchBox';\r
// import FSearchIcon from '@icons/FSearchIcon'; // Пример иконки\r
\r
const MySearchComponent = () => {\r
  const [searchValue, setSearchValue] = useState('');\r
  const [isLoading, setIsLoading] = useState(false);\r
\r
  const handleSearch = () => {\r
    setIsLoading(true);\r
    // Имитация запроса\r
    setTimeout(() => {\r
      alert('Ищем: ' + searchValue);\r
      setIsLoading(false);\r
    }, 1000);\r
  };\r
\r
  const handleClear = () => {\r
    setSearchValue('');\r
    alert('Поле очищено');\r
  };\r
\r
  return (\r
    <FSearchBox\r
      label="Поиск по каталогу"\r
      placeholder="Введите название товара"\r
      value={searchValue}\r
      onChange={(e) => setSearchValue(e.target.value)}\r
      onClickButton={handleSearch}\r
      clearDataFromInput={searchValue ? handleClear : undefined} // Показываем кнопку очистки только при наличии текста\r
      fullWidth\r
      load={isLoading}\r
      helpText="Нажмите кнопку поиска или Enter"\r
    >\r
      {/* <FSearchIcon color='light' /> */ 'Искать'}\r
    </FSearchBox>\r
  );\r
};
`})}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{children:`// С ошибкой\r
<FSearchBox\r
  label="Email"\r
  placeholder="Введите email"\r
  errText={['Некорректный формат email']}\r
  fullWidth\r
  color="danger"\r
>\r
  {/* <FLoadIcon color='light' /> */ 'Проверить'}\r
</FSearchBox>
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-пропсы",children:"📋 Пропсы"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Проп"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"label"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Метка над полем"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"st"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.CSSProperties"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Инлайновые стили для контейнера"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"fullWidth"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Растянуть на всю ширину"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"disabled"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Блокировать поле и кнопки"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"readOnly"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Только для чтения"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"errText"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string[]"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Массив сообщений об ошибках"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"helpText"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Вспомогательный текст под полем"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"className"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Пользовательский CSS-класс для инпута"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"load"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Показать индикатор загрузки"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"children"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.ReactNode"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Содержимое кнопки справа (обычно иконка)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"color"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"'primary' | ..."})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Цвет кнопки справа"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"variant"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"'contained' | 'default'"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Вариант кнопки справа"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"onClickButton"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.MouseEventHandler<HTMLButtonElement>"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Обработчик клика по кнопке справа"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"clearDataFromInput"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Callback для кнопки очистки (если задан, кнопка видна)"})]}),e.jsx("tr",{children:e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},colSpan:3,children:e.jsxs("b",{children:["+ все стандартные пропсы ",e.jsx("code",{children:"<input>"})]})})})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"️-особенности",children:"🛠️ Особенности"}),`
`,e.jsxs("ul",{children:[e.jsx("li",{children:"Интегрированная кнопка поиска/действия"}),e.jsx("li",{children:"Опциональная кнопка очистки поля"}),e.jsx("li",{children:"Индикаторы загрузки и ошибок"}),e.jsx("li",{children:"Вспомогательный текст"}),e.jsx("li",{children:"Полная поддержка стандартных атрибутов инпута"}),e.jsx("li",{children:"Гибкая кастомизация внешнего вида"})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"ℹ️-советы",children:"ℹ️ Советы"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:["Передайте функцию в ",e.jsx("code",{children:"onClickButton"})," для обработки действия кнопки справа."]}),`
`,e.jsxs(d.li,{children:["Если передать функцию в ",e.jsx("code",{children:"clearDataFromInput"}),", появится кнопка очистки поля."]}),`
`,e.jsxs(d.li,{children:["Используйте ",e.jsx("code",{children:"load"})," для индикации загрузки, ",e.jsx("code",{children:"errText"})," — для ошибок, ",e.jsx("code",{children:"helpText"})," — для подсказок."]}),`
`,e.jsxs(d.li,{children:["Для кастомизации используйте ",e.jsx("code",{children:"className"})," и ",e.jsx("code",{children:"st"}),"."]}),`
`]})]})}function m(r={}){const{wrapper:d}={...l(),...r.components};return d?e.jsx(d,{...r,children:e.jsx(n,{...r})}):n(r)}export{m as default};
