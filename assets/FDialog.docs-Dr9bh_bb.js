import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-BoUPaUI-.js";import"./index-0WIw1Azl.js";import{M as s}from"./index-CIIAAp_t.js";import"./index-B3j06Xw8.js";import"./preview-Cdhxcn-R.js";import"./iframe-C40mbFDg.js";import"./DocsRenderer-CFRXHY34-Dc2eMmrS.js";import"./client-DOawrHdJ.js";import"./index-DW0t0JKo.js";import"./index-D_ywfbVi.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";function r(l){const d={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Material/FDialog"}),`
`,e.jsx(d.h1,{id:"-dialog--модальное-окно",children:"🪟 Dialog — модальное окно"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsx(d.p,{children:"Набор компонентов для создания модальных окон с гибкой структурой и настройкой."}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-описание",children:"📝 Описание"}),`
`,e.jsxs(d.p,{children:["Набор компонентов ",e.jsx(d.code,{children:"Dialog"})," предоставляет полный инструментарий для создания модальных окон:"]}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:[e.jsx(d.code,{children:"FDialog"})," — основной контейнер модального окна"]}),`
`,e.jsxs(d.li,{children:[e.jsx(d.code,{children:"FDialogHeader"})," — шапка с заголовком и кнопкой закрытия"]}),`
`,e.jsxs(d.li,{children:[e.jsx(d.code,{children:"FDialogBody"})," — тело диалога с поддержкой прокрутки"]}),`
`,e.jsxs(d.li,{children:[e.jsx(d.code,{children:"FDialogFooter"})," — футер для кнопок и действий"]}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-примеры-использования",children:"💡 Примеры использования"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-ts",children:`import { useState } from 'react';\r
import { FDialog, FDialogHeader, FDialogBody, FDialogFooter } from './Dialog';\r
\r
const MyDialog = () => {\r
  const [isOpen, setIsOpen] = useState(false);\r
\r
  return (\r
    <>\r
      <button onClick={() => setIsOpen(true)}>Открыть диалог</button>\r
      \r
      <FDialog\r
        openAndClose={isOpen}\r
        closeButtonBackPage={setIsOpen}\r
        width="md"\r
      >\r
        <FDialogHeader \r
          title="Заголовок диалога"\r
          handleClose={() => setIsOpen(false)}\r
        />\r
        <FDialogBody>\r
          <p>Содержимое диалога</p>\r
        </FDialogBody>\r
        <FDialogFooter>\r
          <button onClick={() => setIsOpen(false)}>Отмена</button>\r
          <button onClick={() => setIsOpen(false)}>Подтвердить</button>\r
        </FDialogFooter>\r
      </FDialog>\r
    </>\r
  );\r
};
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-компоненты-и-их-пропсы",children:"📋 Компоненты и их пропсы"}),`
`,e.jsx(d.h3,{id:"fdialog",children:"FDialog"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Проп"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"openAndClose"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Флаг открытия/закрытия диалога"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"closeButtonBackPage"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.Dispatch<React.SetStateAction<boolean>>"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Callback для закрытия диалога"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"hide"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Скрывает фон и контент за диалогом"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"width"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"'xs' | 'md' | 'lg' | 'xxl' | 'adaptive'"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Ширина диалога"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"className"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Кастомный CSS класс"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"st"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.CSSProperties"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Инлайновые стили"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"id"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"HTML ID"})]})]})]}),`
`,e.jsx(d.h3,{id:"fdialogheader",children:"FDialogHeader"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Проп"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"title"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Заголовок диалога"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"handleClose"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Callback для закрытия диалога"})]})]})]}),`
`,e.jsx(d.h3,{id:"fdialogbody",children:"FDialogBody"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Проп"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"children"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.ReactNode"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Содержимое тела диалога"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"st"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.CSSProperties"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Инлайновые стили"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"scroll"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Включает вертикальную прокрутку"})]})]})]}),`
`,e.jsx(d.h3,{id:"fdialogfooter",children:"FDialogFooter"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Проп"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"children"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.ReactNode"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Содержимое футера"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"className"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Кастомный CSS класс"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"st"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.CSSProperties"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Инлайновые стили"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"id"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"HTML ID"})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"️-особенности",children:"🛠️ Особенности"}),`
`,e.jsxs("ul",{children:[e.jsx("li",{children:"Модульная структура (Header, Body, Footer)"}),e.jsx("li",{children:"5 предустановленных размеров (xs, md, lg, xxl, adaptive)"}),e.jsx("li",{children:"Автоматическое управление прокруткой body"}),e.jsx("li",{children:"Поддержка кастомных стилей для каждого компонента"}),e.jsx("li",{children:"Блокировка скролла страницы при открытии"}),e.jsx("li",{children:"Закрытие по клику вне диалога"}),e.jsx("li",{children:"Анимации открытия/закрытия"}),e.jsx("li",{children:"Поддержка вложенных диалогов"})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"ℹ️-советы",children:"ℹ️ Советы"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:["Используйте ",e.jsx(d.code,{children:"width"})," для выбора подходящего размера диалога"]}),`
`,e.jsxs(d.li,{children:["Для форм и сложного контента используйте ",e.jsx(d.code,{children:"scroll={true}"})," в ",e.jsx(d.code,{children:"FDialogBody"})]}),`
`,e.jsxs(d.li,{children:["Добавляйте ",e.jsx(d.code,{children:"handleClose"})," в ",e.jsx(d.code,{children:"FDialogHeader"})," для кнопки закрытия"]}),`
`,e.jsxs(d.li,{children:["Размещайте кнопки действий в ",e.jsx(d.code,{children:"FDialogFooter"})]}),`
`,e.jsxs(d.li,{children:["Используйте ",e.jsx(d.code,{children:"hide"})," для затемнения фона"]}),`
`,e.jsxs(d.li,{children:["Для кастомизации используйте ",e.jsx(d.code,{children:"className"})," и ",e.jsx(d.code,{children:"st"})," пропсы"]}),`
`,e.jsx(d.li,{children:"При необходимости можно использовать диалог без header или footer"}),`
`,e.jsxs(d.li,{children:["Для адаптивной ширины используйте ",e.jsx(d.code,{children:'width="adaptive"'})]}),`
`]})]})}function u(l={}){const{wrapper:d}={...i(),...l.components};return d?e.jsx(d,{...l,children:e.jsx(r,{...l})}):r(l)}export{u as default};
