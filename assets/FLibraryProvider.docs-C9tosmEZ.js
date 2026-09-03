import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as n}from"./index-BoUPaUI-.js";import"./index-CnJqn0zw.js";import{M as s}from"./index-CeKiDo1a.js";import"./index-B3j06Xw8.js";import"./preview-CZv1_EYH.js";import"./iframe-B-UITNWl.js";import"./DocsRenderer-CFRXHY34-Rl31wu_T.js";import"./client-DOawrHdJ.js";import"./index-DW0t0JKo.js";import"./index-D_ywfbVi.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";function d(i){const r={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...n(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Context/FLibraryProvider"}),`
`,e.jsx(r.h1,{id:"flibraryprovider",children:"FLibraryProvider"}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Провайдер глобального контекста библиотеки"}),", который реализует паттерн ",e.jsx(r.em,{children:"Dependency Injection (внедрение зависимостей)"}),". Передает сервис отправки HTTP-запросов (",e.jsx(r.code,{children:"apiService"}),") и другие системные конфигурации во все внутренние хуки UI Kit'а."]}),`
`]}),`
`,e.jsx(r.hr,{}),`
`,e.jsxs(r.h2,{id:"-зачем-нужен-flibraryprovider",children:["💡 Зачем нужен ",e.jsx(r.code,{children:"FLibraryProvider"}),"?"]}),`
`,e.jsxs(r.p,{children:["Наша библиотека хуков и UI-компонентов ",e.jsx(r.strong,{children:"изолирована и не содержит hardcode-зависимостей"})," от конкретного проекта. Она не знает, какой экземпляр Axios вы используете, как настраиваются базовые URL и как прокидываются токены авторизации."]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"FLibraryProvider"}),' служит "мостом" (адаптером) между вашим приложением и хуками библиотеки (',e.jsx(r.code,{children:"useFApiQuery"}),", ",e.jsx(r.code,{children:"useFManualApiQuery"}),", ",e.jsx(r.code,{children:"useFApiMutation"}),")."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{children:`[Ваше Приложение (Axios + Tokens)] ──(через FLibraryProvider)──> [Библиотека Хуков и UI Kit]
`})}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"-базовый-пример-подключения",children:"📦 Базовый пример подключения"}),`
`,e.jsxs(r.p,{children:["Оберните корневой компонент вашего приложения один раз на самом верхнем уровне (обычно в ",e.jsx(r.code,{children:"main.tsx"})," или ",e.jsx(r.code,{children:"App.tsx"})," рядом с ",e.jsx(r.code,{children:"QueryClientProvider"}),"):"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import React from "react";\r
import ReactDOM from "react-dom/client";\r
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";\r
\r
// 1. Импортируем Провайдер из нашей библиотеки\r
import { FLibraryProvider } from "my-ui-kit-library";\r
\r
// 2. Импортируем apiService вашего конкретного проекта\r
import { apiService } from "src/services/apiService";\r
\r
import App from "./App";\r
\r
const queryClient = new QueryClient();\r
\r
ReactDOM.createRoot(document.getElementById("root")!).render(\r
  <React.StrictMode>\r
    <QueryClientProvider client={queryClient}>\r
      {/* 3. Инициализируем контекст библиотеки */}\r
      <FLibraryProvider config={{ apiService }}>\r
        <App />\r
      </FLibraryProvider>\r
    </QueryClientProvider>\r
  </React.StrictMode>,\r
);
`})}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"️-api-reference",children:"⚙️ API Reference"}),`
`,e.jsxs(r.h3,{id:"props-провайдера-flibraryproviderprops",children:["Props Провайдера (",e.jsx(r.code,{children:"FLibraryProviderProps"}),")"]}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px",marginBottom:"20px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(r.p,{children:"Проп"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(r.p,{children:"Тип"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(r.p,{children:"Обязательный"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(r.p,{children:"Описание"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"config"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"LibraryConfig"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Да ✅"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(r.p,{children:"Объект глобальной конфигурации библиотеки."})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"children"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"ReactNode"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Да ✅"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(r.p,{children:"Дочерние компоненты приложения."})})]})]})]}),`
`,e.jsxs(r.h3,{id:"поля-конфигуратора-libraryconfig",children:["Поля конфигуратора (",e.jsx(r.code,{children:"LibraryConfig"}),")"]}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px",marginBottom:"20px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(r.p,{children:"Поле"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(r.p,{children:"Тип"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(r.p,{children:"Описание"})})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"apiService"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"ILibApiService"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(r.p,{children:["Объект сетевого сервиса для отправки запросов. Должен содержать метод"," ",`\r
`,e.jsx("code",{children:"request"}),"."]})})]})})]}),`
`,e.jsxs(r.h3,{id:"требования-к-ilibapiservice",children:["Требования к ",e.jsx(r.code,{children:"ILibApiService"})]}),`
`,e.jsxs(r.p,{children:["Передаваемый в ",e.jsx(r.code,{children:"config.apiService"})," объект проекта должен реализовывать следующий интерфейс:"]}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px",marginBottom:"20px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(r.p,{children:"Метод"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(r.p,{children:"Сигнатура"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(r.p,{children:"Описание"})})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"request"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:e.jsx(r.p,{children:`<T>(url: string, config: AxiosRequestConfig) =>\r
Promise<T>`})})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(r.p,{children:[`Принимает URL и конфиг Axios, выполняет сетевой запрос и возвращает\r
распакованные данные типа `,e.jsx("code",{children:"T"}),"."]})})]})})]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"-практические-сценарии-подключения",children:"💻 Практические сценарии подключения"}),`
`,e.jsx(r.h3,{id:"1-подключение-в-юнит-тестах-jest--react-testing-library",children:"1. Подключение в юнит-тестах (Jest / React Testing Library)"}),`
`,e.jsxs(r.p,{children:["Создайте обертку (wrapper) для функции ",e.jsx(r.code,{children:"renderHook"})," или ",e.jsx(r.code,{children:"render"}),":"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { renderHook } from "@testing-library/react";\r
import { FLibraryProvider } from "my-ui-kit-library";\r
\r
const mockApiService = {\r
  request: jest.fn().mockResolvedValue({ data: "ok" }),\r
};\r
\r
const wrapper = ({ children }: { children: React.ReactNode }) => (\r
  <QueryClientProvider client={new QueryClient()}>\r
    <FLibraryProvider config={{ apiService: mockApiService }}>\r
      {children}\r
    </FLibraryProvider>\r
  </QueryClientProvider>\r
);\r
\r
test("тестирование хука", () => {\r
  const { result } = renderHook(() => useFApiQuery(["key"], "/api"), {\r
    wrapper,\r
  });\r
  // ...\r
});
`})}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"️-распространенные-ошибки",children:"⚠️ Распространенные ошибки"}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Ошибка:"})," ",e.jsx(r.code,{children:"Error: [UIKit/Lib]: Вы должны обернуть приложение в <FLibraryProvider config={{ apiService }}>"})]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Причина:"})," Один из хуков (",e.jsx(r.code,{children:"useFApiQuery"}),", ",e.jsx(r.code,{children:"useFManualApiQuery"}),", ",e.jsx(r.code,{children:"useFApiMutation"}),") был вызван в компоненте, который находится ВНЕ дерева ",e.jsx(r.code,{children:"<FLibraryProvider>"}),"."]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Решение:"})," Проверьте, что ",e.jsx(r.code,{children:"<FLibraryProvider>"})," находится на самом верхнем уровне приложения (",e.jsx(r.code,{children:"App.tsx"})," / ",e.jsx(r.code,{children:"main.tsx"}),")."]}),`
`]})]})}function u(i={}){const{wrapper:r}={...n(),...i.components};return r?e.jsx(r,{...i,children:e.jsx(d,{...i})}):d(i)}export{u as default};
