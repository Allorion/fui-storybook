import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-BoUPaUI-.js";import"./index-CnJqn0zw.js";import{M as s}from"./index-CeKiDo1a.js";import"./index-B3j06Xw8.js";import"./preview-CZv1_EYH.js";import"./iframe-B-UITNWl.js";import"./DocsRenderer-CFRXHY34-Rl31wu_T.js";import"./client-DOawrHdJ.js";import"./index-DW0t0JKo.js";import"./index-D_ywfbVi.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";function r(n){const d={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Material/FSegmentedControl"}),`
`,e.jsx(d.h1,{id:"-fsegmentedcontrol--сегментированный-переключатель",children:"🎯 FSegmentedControl — сегментированный переключатель"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsx(d.p,{children:"Компонент для выбора одного из нескольких вариантов в компактной форме. Подходит для режимов отображения, типов фильтрации, вкладок и переключения состояния."}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-описание",children:"📝 Описание"}),`
`,e.jsxs(d.p,{children:[e.jsx(d.code,{children:"FSegmentedControl"})," — это UI-компонент с анимированным активным слайдером, который визуально выделяет выбранную опцию. Он позволяет организовать смену режима работы или фильтра без громоздких табов и с поддержкой иконок, бейджей и блокировки отдельных пунктов."]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-примеры-использования",children:"💡 Примеры использования"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`import { useState } from 'react';\r
import { FSegmentedControl } from 'fui-kit';\r
\r
const items = [\r
  { id: 'grid', label: 'Сетка' },\r
  { id: 'list', label: 'Список', badge: 12 },\r
  { id: 'users', label: 'Пользователи', disabled: true },\r
];\r
\r
const Example = () => {\r
  const [activeId, setActiveId] = useState('grid');\r
\r
  return (\r
    <FSegmentedControl\r
      items={items}\r
      activeId={activeId}\r
      onChange={setActiveId}\r
      size="md"\r
    />\r
  );\r
};
`})}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`const items = [\r
  { id: 'day', label: 'День', icon: <CalendarIcon /> },\r
  { id: 'week', label: 'Неделя', icon: <CalendarRangeIcon /> },\r
  { id: 'month', label: 'Месяц', icon: <CalendarMonthIcon /> },\r
];\r
\r
<FSegmentedControl\r
  items={items}\r
  activeId={activeId}\r
  onChange={setActiveId}\r
  size="lg"\r
  style={{ maxWidth: 520 }}\r
/>
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-пропсы",children:"📋 Пропсы"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Проп"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"items"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"ISegmentedItem[]"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Массив пунктов сегментированного списка"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"activeId"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string | number"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Идентификатор активного элемента"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"onChange"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"(id: T) => void"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Колбэк при смене активного сегмента"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"size"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"'sm' | 'md' | 'lg'"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Размер кнопок, default: ",e.jsx("code",{children:"'md'"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"className"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Дополнительный класс контейнера"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"style"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.CSSProperties"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Inline-стили для внешнего контейнера"})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsxs(d.h2,{id:"-тип-элемента-isegmenteditem",children:["🧩 Тип элемента ",e.jsx(d.code,{children:"ISegmentedItem"})]}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-ts",children:`interface ISegmentedItem<T = string | number> {\r
  id: T;\r
  label: string;\r
  icon?: ReactNode;\r
  badge?: string | number;\r
  disabled?: boolean;\r
  onClick?: (e: MouseEvent<HTMLButtonElement>, item: ISegmentedItem<T>) => void;\r
}
`})}),`
`,e.jsx(d.h3,{id:"поля",children:"Поля"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:[e.jsx(d.code,{children:"id"})," — уникальный идентификатор пункта."]}),`
`,e.jsxs(d.li,{children:[e.jsx(d.code,{children:"label"})," — текст, который отображается в кнопке."]}),`
`,e.jsxs(d.li,{children:[e.jsx(d.code,{children:"icon"})," — иконка перед текстом."]}),`
`,e.jsxs(d.li,{children:[e.jsx(d.code,{children:"badge"})," — небольшой бейдж рядом с меткой."]}),`
`,e.jsxs(d.li,{children:[e.jsx(d.code,{children:"disabled"})," — блокирует выбор конкретного пункта."]}),`
`,e.jsxs(d.li,{children:[e.jsx(d.code,{children:"onClick"})," — кастомный обработчик клика, который можно отменить через ",e.jsx(d.code,{children:"e.preventDefault()"}),"."]}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"️-особенности",children:"🛠️ Особенности"}),`
`,e.jsxs("ul",{children:[e.jsx("li",{children:"Анимированный фон активного сегмента."}),e.jsxs("li",{children:["Поддержка размеров ",e.jsx("code",{children:"sm"}),", ",e.jsx("code",{children:"md"}),", ",e.jsx("code",{children:"lg"}),"."]}),e.jsx("li",{children:"Иконки и бейджи в каждом элементе."}),e.jsxs("li",{children:["Возможность запретить элемент через ",e.jsx("code",{children:"disabled"}),"."]}),e.jsxs("li",{children:["Кастомный клик на конкретный сегмент через ",e.jsx("code",{children:"onClick"}),"."]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"ℹ️-советы",children:"ℹ️ Советы"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:["Используйте ",e.jsx(d.code,{children:"FSegmentedControl"})," для переключения между режимами отображения, а не для навигации по страницам."]}),`
`,e.jsxs(d.li,{children:["Если нужно оставить активный блок выбранным и выполнить собственное действие — используйте ",e.jsx(d.code,{children:"item.onClick"})," и вызовите ",e.jsx(d.code,{children:"e.preventDefault()"}),"."]}),`
`,e.jsxs(d.li,{children:["Для длинных подписей выбирайте размер ",e.jsx(d.code,{children:"lg"}),", для компактных интерфейсов — ",e.jsx(d.code,{children:"sm"}),"."]}),`
`,e.jsxs(d.li,{children:["Комбинируйте ",e.jsx(d.code,{children:"badge"})," для отображения счетчиков, статусов или новых элементов."]}),`
`]})]})}function y(n={}){const{wrapper:d}={...i(),...n.components};return d?e.jsx(d,{...n,children:e.jsx(r,{...n})}):r(n)}export{y as default};
