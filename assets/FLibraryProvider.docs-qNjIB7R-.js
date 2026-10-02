import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as n}from"./index-BoUPaUI-.js";import"./index-Dk-UaGq_.js";import{M as s}from"./index-Bp6Fg3X0.js";import"./index-B3j06Xw8.js";import"./preview-Da1FNSTG.js";import"./iframe-DDivtEdb.js";import"./DocsRenderer-CFRXHY34-2qU4u9H4.js";import"./client-DOawrHdJ.js";import"./index-DW0t0JKo.js";import"./index-D_ywfbVi.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";function i(d){const r={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Context/FLibraryProvider"}),`
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
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// 1. Импортируем Провайдер из нашей библиотеки
import { FLibraryProvider } from "my-ui-kit-library";

// 2. Импортируем apiService вашего конкретного проекта
import { apiService } from "src/services/apiService";

import App from "./App";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* 3. Инициализируем контекст библиотеки */}
      <FLibraryProvider config={{ apiService }}>
        <App />
      </FLibraryProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
`})}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"️-api-reference",children:"⚙️ API Reference"}),`
`,e.jsxs(r.h3,{id:"props-провайдера-flibraryproviderprops",children:["Props Провайдера (",e.jsx(r.code,{children:"FLibraryProviderProps"}),")"]}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px",marginBottom:"20px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(r.p,{children:"Проп"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(r.p,{children:"Тип"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(r.p,{children:"Обязательный"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(r.p,{children:"Описание"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"config"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"LibraryConfig"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Да ✅"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(r.p,{children:"Объект глобальной конфигурации библиотеки."})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"requestObserver"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"FRequestObserver"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Нет ❌"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(r.p,{children:["Опциональный наблюдатель жизненного цикла HTTP-запросов (альтернатива передаче внутри ",e.jsx("code",{children:"config"}),")."]})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"children"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"ReactNode"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Да ✅"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(r.p,{children:"Дочерние компоненты приложения."})})]})]})]}),`
`,e.jsxs(r.h3,{id:"поля-конфигуратора-libraryconfig",children:["Поля конфигуратора (",e.jsx(r.code,{children:"LibraryConfig"}),")"]}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px",marginBottom:"20px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(r.p,{children:"Поле"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(r.p,{children:"Тип"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(r.p,{children:"Описание"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"apiService"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"ILibApiService"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(r.p,{children:["Объект сетевого сервиса для отправки запросов. Должен содержать метод"," ",`
`,e.jsx("code",{children:"request"}),"."]})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"requestObserver"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"FRequestObserver"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(r.p,{children:"Опциональный наблюдатель жизненного цикла HTTP-запросов (мониторинг / телеметрия)."})})]})]})]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"-наблюдатель-жизненного-цикла-запросов-request-lifecycle-observer",children:"📡 Наблюдатель жизненного цикла запросов (Request Lifecycle Observer)"}),`
`,e.jsx(r.p,{children:"Библиотека предоставляет нейтральную, легковесную точку расширения для наблюдения за жизненным циклом HTTP-запросов (телеметрия, мониторинг производительности, диагностика)."}),`
`,e.jsx(r.h3,{id:"принцип-работы-и-безопасность-данных",children:"Принцип работы и безопасность данных"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Только метаданные"}),": Наблюдатель получает исключительно скалярные метаданные выполнения (метод, URL, статус, длительность, исход, категория ошибки). Он ",e.jsx(r.strong,{children:"не получает"})," тело запроса/ответа, FormData, заголовки, токены авторизации или cookies."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Изоляция сбоев"}),": Любые ошибки, возникшие внутри ",e.jsx(r.code,{children:"onRequestComplete"}),", перехватываются библиотекой молча и гарантированно не прерывают выполнение HTTP-запроса и не влияют на возвращаемые данные или обработку ошибок."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Нормализация URL"}),": URL передается как строка, переданная в хук. Если строка URL может содержать чувствительные query-параметры, вызывающее приложение должно нормализовать/санировать путь перед персистентным сохранением."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Однократность события"}),": На один фактически выполненный HTTP-запрос наблюдатель получает строго одно событие завершения (",e.jsx(r.code,{children:"success"}),", ",e.jsx(r.code,{children:"failure"})," или ",e.jsx(r.code,{children:"aborted"}),")."]}),`
`]}),`
`,e.jsx(r.h3,{id:"подключение-через-flibraryprovider",children:"Подключение через FLibraryProvider"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { FLibraryProvider, FRequestObserver } from "fui-material";

const requestObserver: FRequestObserver = {
  onRequestComplete(event) {
    // Обработка в приложении (телеметрия / мониторинг)
    console.debug(\`[HTTP \${event.method}] \${event.url} - \${event.outcome} (\${event.durationMs}ms)\`);
  }
};

<FLibraryProvider
  config={{ apiService, requestObserver }}
  // или через прямой проп: requestObserver={requestObserver}
>
  <App />
</FLibraryProvider>
`})}),`
`,e.jsxs(r.h3,{id:"формат-события-frequestobservation",children:["Формат события (",e.jsx(r.code,{children:"FRequestObservation"}),")"]}),`
`,e.jsxs(r.p,{children:[`| Поле | Тип | Описание |
| :--- | :--- | :--- |
| `,e.jsx(r.code,{children:"method"})," | ",e.jsx(r.code,{children:"string"})," | HTTP-метод в верхнем регистре (",e.jsx(r.code,{children:"GET"}),", ",e.jsx(r.code,{children:"POST"}),` и др.) |
| `,e.jsx(r.code,{children:"url"})," | ",e.jsx(r.code,{children:"string"}),` | Запрошенный URL или путь |
| `,e.jsx(r.code,{children:"status"})," | ",e.jsx(r.code,{children:"number \\| undefined"}),` | HTTP-код статуса ответа (если доступен) |
| `,e.jsx(r.code,{children:"durationMs"})," | ",e.jsx(r.code,{children:"number"}),` | Время выполнения запроса в миллисекундах |
| `,e.jsx(r.code,{children:"outcome"})," | ",e.jsx(r.code,{children:"'success' \\| 'failure' \\| 'aborted'"}),` | Результат выполнения запроса |
| `,e.jsx(r.code,{children:"errorCategory"})," | ",e.jsx(r.code,{children:"'http' \\| 'network' \\| 'timeout' \\| 'abort' \\| 'unknown' \\| undefined"}),` | Категория ошибки при сбое/отмене |
| `,e.jsx(r.code,{children:"errorResponse"})," | ",e.jsx(r.code,{children:"FRequestErrorResponse \\| undefined"})," | Только для HTTP-сбоев: allowlist-сводка, включая ",e.jsx(r.code,{children:"exception"})," и очищенный ",e.jsx(r.code,{children:"path"}),` |
| `,e.jsx(r.code,{children:"errorRequestBody"})," | ",e.jsx(r.code,{children:"FRequestErrorBody \\| undefined"})," | Очищенный JSON ошибок POST/PATCH, только при ",e.jsx(r.code,{children:"captureErrorRequestBody: true"})," у наблюдателя |"]}),`
`,e.jsx(r.h3,{id:"покрытие-хуков-библиотеки",children:"Покрытие хуков библиотеки"}),`
`,e.jsxs(r.p,{children:[`| Хук | Транспорт | Механизм наблюдения |
| :--- | :--- | :--- |
| `,e.jsx(r.code,{children:"useFApi"})," | Прямой Axios | Наблюдение жизненного цикла ",e.jsx(r.code,{children:"execute"})," (через контекст или проп ",e.jsx(r.code,{children:"requestObserver"}),`) |
| `,e.jsx(r.code,{children:"useFApiQuery"})," | ",e.jsx(r.code,{children:"apiService.request"})," | Наблюдение делегирования в провайдере ",e.jsx(r.code,{children:"FLibraryProvider"}),` |
| `,e.jsx(r.code,{children:"useFManualApiQuery"})," | ",e.jsx(r.code,{children:"apiService.request"})," | Наблюдение делегирования в провайдере ",e.jsx(r.code,{children:"FLibraryProvider"}),` |
| `,e.jsx(r.code,{children:"useFApiMutation"})," | ",e.jsx(r.code,{children:"apiService.request"})," | Наблюдение делегирования в провайдере ",e.jsx(r.code,{children:"FLibraryProvider"})," |"]}),`
`,e.jsxs(r.h3,{id:"требования-к-ilibapiservice",children:["Требования к ",e.jsx(r.code,{children:"ILibApiService"})]}),`
`,e.jsxs(r.p,{children:["Передаваемый в ",e.jsx(r.code,{children:"config.apiService"})," объект проекта должен реализовывать следующий интерфейс:"]}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px",marginBottom:"20px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(r.p,{children:"Метод"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(r.p,{children:"Сигнатура"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(r.p,{children:"Описание"})})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"request"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:e.jsx(r.p,{children:`<T>(url: string, config: AxiosRequestConfig) =>
Promise<T>`})})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(r.p,{children:[`Принимает URL и конфиг Axios, выполняет сетевой запрос и возвращает
распакованные данные типа `,e.jsx("code",{children:"T"}),"."]})})]})})]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"-практические-сценарии-подключения",children:"💻 Практические сценарии подключения"}),`
`,e.jsx(r.h3,{id:"1-подключение-в-юнит-тестах-jest--react-testing-library",children:"1. Подключение в юнит-тестах (Jest / React Testing Library)"}),`
`,e.jsxs(r.p,{children:["Создайте обертку (wrapper) для функции ",e.jsx(r.code,{children:"renderHook"})," или ",e.jsx(r.code,{children:"render"}),":"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { renderHook } from "@testing-library/react";
import { FLibraryProvider } from "my-ui-kit-library";

const mockApiService = {
  request: jest.fn().mockResolvedValue({ data: "ok" }),
};

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={new QueryClient()}>
    <FLibraryProvider config={{ apiService: mockApiService }}>
      {children}
    </FLibraryProvider>
  </QueryClientProvider>
);

test("тестирование хука", () => {
  const { result } = renderHook(() => useFApiQuery(["key"], "/api"), {
    wrapper,
  });
  // ...
});
`})}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"️-распространенные-ошибки",children:"⚠️ Распространенные ошибки"}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Ошибка:"})," ",e.jsx(r.code,{children:"Error: [UIKit/Lib]: Вы должны обернуть приложение в <FLibraryProvider config={{ apiService }}>"})]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Причина:"})," Один из хуков (",e.jsx(r.code,{children:"useFApiQuery"}),", ",e.jsx(r.code,{children:"useFManualApiQuery"}),", ",e.jsx(r.code,{children:"useFApiMutation"}),") был вызван в компоненте, который находится ВНЕ дерева ",e.jsx(r.code,{children:"<FLibraryProvider>"}),"."]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Решение:"})," Проверьте, что ",e.jsx(r.code,{children:"<FLibraryProvider>"})," находится на самом верхнем уровне приложения (",e.jsx(r.code,{children:"App.tsx"})," / ",e.jsx(r.code,{children:"main.tsx"}),")."]}),`
`]})]})}function m(d={}){const{wrapper:r}={...n(),...d.components};return r?e.jsx(r,{...d,children:e.jsx(i,{...d})}):i(d)}export{m as default};
