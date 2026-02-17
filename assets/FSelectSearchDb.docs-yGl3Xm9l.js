import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-Da05a9iP.js";import"./index-Bv2tDmnv.js";import{M as s}from"./index-4pPnxwmw.js";import"./index-DEgj3Fem.js";import"./preview-JHYE8Hxh.js";import"./iframe-Dg3K2TjE.js";import"./DocsRenderer-CFRXHY34-et_gbFuq.js";import"./client-DBdnbfFq.js";import"./index-DM3MU96Y.js";import"./index-BknSE3li.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function l(r){const d={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Material/FSelectSearchDb"}),`
`,e.jsx(d.h1,{id:"-fselectsearchdb--поле-ввода-с-автопоиском",children:"🔍 FSelectSearchDb — поле ввода с автопоиском"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsx(d.p,{children:"Компонент для поиска и выбора элементов из базы данных с поддержкой автодополнения, дебоунса и интеллектуального позиционирования выпадающего списка."}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-описание",children:"📝 Описание"}),`
`,e.jsxs(d.p,{children:[e.jsx(d.code,{children:"FSelectSearchDb"})," — это компонент для поиска и выбора элементов из базы данных. Он предоставляет поле ввода с автодополнением, которое отправляет запросы на сервер при вводе текста. Компонент поддерживает дебоунс-запросы, интеллектуальное позиционирование выпадающего списка (вверх/вниз), отображение состояний загрузки, ошибок и вспомогательного текста."]}),`
`,e.jsx(d.p,{children:"Компонент использует TypeScript generics для обеспечения типобезопасности. При использовании компонента необходимо указать тип данных, с которыми он будет работать."}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-примеры-использования",children:"💡 Примеры использования"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-typescript",children:`import { useState } from 'react';\r
import FSelectSearchDb from './FSelectSearchDb';\r
\r
// Определяем интерфейс для данных\r
interface City {\r
  id: number;\r
  name: string;\r
}\r
\r
const MySearchComponent = () => {\r
  const [selectedCity, setSelectedCity] = useState<City | null>(null);\r
\r
  const fetchCities = async (text: string): Promise<City[]> => {\r
    // Имитация запроса к API\r
    const response = await fetch(\`/api/cities?search=\${text}\`);\r
    return response.json();\r
  };\r
\r
  const handleSelectedElement = (item: City | null | undefined) => {\r
    setSelectedCity(item ?? null);\r
  };\r
\r
  return (\r
    <FSelectSearchDb<City>\r
      label="Выберите город"\r
      placeholder="Введите название города"\r
      fetchingFunc={fetchCities}\r
      selectedElement={handleSelectedElement}\r
      selectItem={(item: City) => item.name}\r
      helpText="Введите минимум 3 символа для поиска"\r
      fullWidth\r
      type="search"\r
    />\r
  );\r
};
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-пропсы",children:"📋 Пропсы"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Проп"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"fetchingFunc"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"(text: string) => Promise<T[]>"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Функция для получения данных с сервера"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"selectedElement"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"(item: T | null | undefined) => void"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Callback при выборе элемента"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"selectItem"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"(item: T) => string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Функция форматирования элемента"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"label"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Метка над полем"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"st"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.CSSProperties"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Инлайновые стили"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"id"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"HTML ID"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"fullWidth"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Растянуть на всю ширину"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"className"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Пользовательский класс"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"disabled"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Блокировка поля"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"readOnly"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Только для чтения"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"required"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Обязательное поле"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"errText"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string[]"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Сообщения об ошибках"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"helpText"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Вспомогательный текст"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"onFocus"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.FocusEventHandler"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Обработчик фокуса"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"onBlur"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.FocusEventHandler"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Обработчик потери фокуса"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"minLengthText"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"number"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Мин. кол-во символов для поиска (по умолчанию: 3)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"defaultValue"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Начальное значение"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"type"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.HTMLInputTypeAttribute"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:'Тип поля ввода (например, "text", "search")'})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"placeholder"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Текст placeholder"})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"️-особенности",children:"🛠️ Особенности"}),`
`,e.jsxs("ul",{children:[e.jsx("li",{children:"Автоматический поиск при вводе текста"}),e.jsx("li",{children:"Дебоунс-запросы для оптимизации"}),e.jsx("li",{children:"Индикация состояний: ожидание, загрузка, успех, ошибка"}),e.jsx("li",{children:"Интеллектуальное позиционирование выпадающего списка (вверх/вниз)"}),e.jsx("li",{children:"Автоматическая адаптация к размерам окна"}),e.jsx("li",{children:"Поддержка начального значения"}),e.jsx("li",{children:"Валидация и отображение ошибок"}),e.jsx("li",{children:"Вспомогательный текст"}),e.jsx("li",{children:"Поддержка различных типов полей ввода"}),e.jsx("li",{children:"Обработка ошибок поиска с автоматическим сбросом"}),e.jsx("li",{children:"Полная поддержка TypeScript с использованием generics"})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"ℹ️-советы",children:"ℹ️ Советы"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:["Используйте ",e.jsx(d.code,{children:"fetchingFunc"})," для реализации поиска на сервере"]}),`
`,e.jsxs(d.li,{children:["Настройте ",e.jsx(d.code,{children:"selectItem"})," для форматирования отображаемых элементов"]}),`
`,e.jsxs(d.li,{children:["Добавьте ",e.jsx(d.code,{children:"helpText"})," для подсказок пользователю"]}),`
`,e.jsxs(d.li,{children:["Используйте ",e.jsx(d.code,{children:"minLengthText"})," для оптимизации запросов (по умолчанию: 3 символа)"]}),`
`,e.jsxs(d.li,{children:["Обрабатывайте ошибки через ",e.jsx(d.code,{children:"errText"})]}),`
`,e.jsxs(d.li,{children:["Для кастомизации используйте ",e.jsx(d.code,{children:"className"})," и ",e.jsx(d.code,{children:"st"})]}),`
`,e.jsxs(d.li,{children:["Используйте тип ",e.jsx(d.code,{children:'"search"'})," для поисковых полей"]}),`
`,e.jsx(d.li,{children:"Учитывайте, что выпадающий список автоматически позиционируется в зависимости от доступного пространства"}),`
`,e.jsx(d.li,{children:"При отсутствии результатов поиска компонент автоматически показывает сообщение об ошибке на 3 секунды"}),`
`,e.jsxs(d.li,{children:["При использовании компонента обязательно укажите тип данных через generic параметр: ",e.jsx(d.code,{children:"<FSelectSearchDb<YourDataType>>"})]}),`
`,e.jsx(d.li,{children:"Для корректной работы с TypeScript определите интерфейс для ваших данных"}),`
`,e.jsxs(d.li,{children:["Используйте правильную типизацию для ",e.jsx(d.code,{children:"selectedElement"})," callback'а"]}),`
`]})]})}function u(r={}){const{wrapper:d}={...i(),...r.components};return d?e.jsx(d,{...r,children:e.jsx(l,{...r})}):l(r)}export{u as default};
