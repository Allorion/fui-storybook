import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as l}from"./index-D7CuHrhf.js";import"./index-DLduQjTV.js";import{M as s}from"./index-h5fpQt66.js";import"./index-yBjzXJbu.js";import"./index-DY-snNUy.js";import"./preview-BfklRg4O.js";import"./iframe-ByfG8LwZ.js";import"./DocsRenderer-CFRXHY34-D8odSB2D.js";import"./client-CDUMOAsi.js";import"./index-fNjTmf9T.js";import"./index-xMzmejw-.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function n(r){const d={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...l(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Material/FSearchBox"}),`
`,e.jsx(d.h1,{id:"-fsearchbox--поле-ввода-с-кнопками",children:"🔍 FSearchBox — поле ввода с кнопками"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsx(d.p,{children:"Кастомное поле ввода для поиска и фильтрации с поддержкой кнопок (поиск, очистка), состояний (загрузка, ошибка) и кастомизации."}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-описание",children:"📝 Описание"}),`
`,e.jsxs(d.p,{children:[e.jsx(d.code,{children:"FSearchBox"})," — это универсальное поле ввода, расширенное для задач поиска и фильтрации. Оно включает встроенные кнопки (поиск и опционально очистка), индикатор загрузки, отображение ошибок и вспомогательного текста. Поддерживает полный набор стандартных атрибутов HTML-инпута и гибкую кастомизацию."]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-примеры-использования",children:"💡 Примеры использования"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{children:`import { useState } from 'react';
import FSearchBox from './FSearchBox';
// import FSearchIcon from '@icons/FSearchIcon'; // Пример иконки

const MySearchComponent = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    setIsLoading(true);
    // Имитация запроса
    setTimeout(() => {
      alert('Ищем: ' + searchValue);
      setIsLoading(false);
    }, 1000);
  };

  const handleClear = () => {
    setSearchValue('');
    alert('Поле очищено');
  };

  return (
    <FSearchBox
      label="Поиск по каталогу"
      placeholder="Введите название товара"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      onClickButton={handleSearch}
      clearDataFromInput={searchValue ? handleClear : undefined} // Показываем кнопку очистки только при наличии текста
      fullWidth
      load={isLoading}
      helpText="Нажмите кнопку поиска или Enter"
    >
      {/* <FSearchIcon color='light' /> */ 'Искать'}
    </FSearchBox>
  );
};
`})}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{children:`// С ошибкой
<FSearchBox
  label="Email"
  placeholder="Введите email"
  errText={['Некорректный формат email']}
  fullWidth
  color="danger"
>
  {/* <FLoadIcon color='light' /> */ 'Проверить'}
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
`]})]})}function S(r={}){const{wrapper:d}={...l(),...r.components};return d?e.jsx(d,{...r,children:e.jsx(n,{...r})}):n(r)}export{S as default};
