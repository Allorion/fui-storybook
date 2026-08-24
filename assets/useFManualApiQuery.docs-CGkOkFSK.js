import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-BoUPaUI-.js";import"./index-S5ryxnp5.js";import{M as i}from"./index-BelrT2VU.js";import"./index-B3j06Xw8.js";import"./preview-vEnFruut.js";import"./iframe-DlTzekq5.js";import"./DocsRenderer-CFRXHY34-B-s4UxjM.js";import"./client-DOawrHdJ.js";import"./index-DW0t0JKo.js";import"./index-D_ywfbVi.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";function n(r){const d={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Hooks/useFManualApiQuery"}),`
`,e.jsx(d.h1,{id:"usefmanualapiquery",children:"useFManualApiQuery"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsxs(d.p,{children:[e.jsx(d.strong,{children:"Императивный хук"})," для ручного запуска тяжелых GET/POST запросов по команде пользователя с поддержкой ",e.jsx(d.code,{children:"async/await"}),`, dynamic URL-параметров и полной интеграцией с кэшем TanStack Query v5.\r
Работает только с использованием `,e.jsx(d.code,{children:"useLibraryContext"}),"."]}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-основные-возможности",children:"🚀 Основные возможности"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:["⚡ ",e.jsx(d.strong,{children:"Async/Await поддержка:"})," Функция ",e.jsx(d.code,{children:"run()"})," возвращает ",e.jsx(d.code,{children:"Promise<TData>"}),", позволяя обрабатывать результат прямо в событии кнопки."]}),`
`,e.jsxs(d.li,{children:["💾 ",e.jsx(d.strong,{children:"Кэширование TanStack Query:"})," Несмотря на ручной запуск, все результаты сохраняются в кэше по динамическому ключу ",e.jsx(d.code,{children:"queryKey"}),"."]}),`
`,e.jsxs(d.li,{children:["🔀 ",e.jsxs(d.strong,{children:["Динамический URL (",e.jsx(d.code,{children:"dopUrl"}),"):"]})," Возможность добавлять суффиксы к URL при вызове (например, ",e.jsx(d.code,{children:"/xlsx"})," для экспорта)."]}),`
`,e.jsxs(d.li,{children:["🧩 ",e.jsx(d.strong,{children:"Гибкое управление параметрами:"})," Флаги ",e.jsx(d.code,{children:"preserveParams"})," и ",e.jsx(d.code,{children:"preserveUrlParams"})," позволяют сохранять предыдущие фильтры при частных обновлениях."]}),`
`,e.jsxs(d.li,{children:["📮 ",e.jsx(d.strong,{children:"Идеально для POST-поиска:"})," Подходит для поиска и фильтрации с большим телом запроса, где ",e.jsx(d.code,{children:"useMutation"})," не подходит из-за отсутствия кэша."]}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-когда-использовать",children:"💡 Когда использовать"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px",marginBottom:"20px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Подходит для ✅"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Не подходит для ❌"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Фильтрации по кнопке «Применить» в сложных формах"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:["Автоматической загрузки данных при монтировании (используйте"," ",`\r
`,e.jsx("code",{children:"useFApiQuery"}),")"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Экспорта отчетов в разных форматах (Excel/PDF)"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:["Операций изменения данных без кэширования (используйте"," ",`\r
`,e.jsx("code",{children:"useFApiMutation"}),")"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Поиска по запросу пользователя с POST-телом и кэшированием"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Простых запросов без динамических параметров"})})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-базовый-пример",children:"📦 Базовый пример"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`import { useFManualApiQuery } from "my-ui-kit-library";\r
\r
interface IFilterParams {\r
  search?: string;\r
  status?: string;\r
}\r
\r
interface IOrder {\r
  id: number;\r
  total: number;\r
}\r
\r
export const OrdersSearch = () => {\r
  const [search, setSearch] = useState("");\r
\r
  // Запрос НЕ выполняется автоматически при открытии\r
  const { run, data, isFetching } = useFManualApiQuery<\r
    IOrder[],\r
    IOrder[],\r
    IFilterParams\r
  >("search-orders", "/api/v1/orders/search", undefined, undefined, {\r
    method: "POST",\r
    onErrorNotification: true,\r
  });\r
\r
  const handleSearch = async () => {\r
    // 1. Способ через async/await\r
    try {\r
      const result = await run({ newParams: { search, status: "active" } });\r
      console.log("Найдено заказов:", result.length);\r
    } catch (error) {\r
      // Ошибка уже показана в тоасте благодаря onErrorNotification\r
    }\r
  };\r
\r
  return (\r
    <div>\r
      <input value={search} onChange={(e) => setSearch(e.target.value)} />\r
      <button onClick={handleSearch} disabled={isFetching}>\r
        {isFetching ? "Поиск..." : "Искать"}\r
      </button>\r
\r
      <ul>\r
        {data?.map((order) => (\r
          <li key={order.id}>Заказ №{order.id}</li>\r
        ))}\r
      </ul>\r
    </div>\r
  );\r
};
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"️-api-reference",children:"⚙️ API Reference"}),`
`,e.jsx(d.h3,{id:"сигнатура",children:"Сигнатура"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-ts",children:`const { run, params, urlParams, ...query } = useFManualApiQuery<TQueryFnData, TData = TQueryFnData, TVariables = unknown>(\r
  queryKey,\r
  url,\r
  initialParams?,\r
  config?,\r
  options?\r
);
`})}),`
`,e.jsx(d.h3,{id:"дженерики",children:"Дженерики"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px",marginBottom:"20px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Дженерик"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"По умолчанию"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Описание"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"TQueryFnData"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"—"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Тип ответа, который возвращает ваш сервер/API."})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"TData"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"TQueryFnData"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:["Тип данных после трансформации ",e.jsx("code",{children:"select"}),"."]})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"TVariables"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"unknown"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Тип параметров запроса (body для POST или query для GET)."})})]})]})]}),`
`,e.jsx(d.h3,{id:"параметры-хука",children:"Параметры хука"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px",marginBottom:"20px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Параметр"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Тип"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Описание"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"queryKey"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:`Базовое название ключа кэша. Динамические параметры подставятся к нему\r
автоматически.`})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"url"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Базовый URL эндпоинта."})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"initialParams"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"TVariables"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Начальные параметры (опционально)."})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"config"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"AxiosRequestConfig"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Конфиг Axios (заголовки, responseType и т.д.)."})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"options"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"object"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:[`Опции TanStack Query v5 и настройки уведомлений (\r
`,e.jsx("code",{children:"onErrorNotification"})," и др.)."]})})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsxs(d.h2,{id:"-параметры-функции-runoptions",children:["🏃 Параметры функции ",e.jsx(d.code,{children:"run(options)"})]}),`
`,e.jsxs(d.p,{children:["При вызове ",e.jsx(d.code,{children:"run({...})"})," вы передаете объект конфигурации конкретного запуска:"]}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px",marginBottom:"20px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Поле"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Тип"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Описание"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"newParams"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"TVariables"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Новое тело POST-запроса или основные GET-параметры."})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"newUrlParams"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"Record<string, unknown>"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Дополнительные URL-параметры (query string)."})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"preserveParams"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:["Если ",e.jsx("code",{children:"true"}),", сохраняет предыдущие ",e.jsx("code",{children:"params"}),", если"," ",`\r
`,e.jsx("code",{children:"newParams"})," не передан."]})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"dopUrl"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:["Добавочный суффикс к базовому URL (например, ",e.jsx("code",{children:"'/xlsx'"}),")."]})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"preserveUrlParams"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:["Если ",e.jsx("code",{children:"true"}),", объединяет новые ",e.jsx("code",{children:"newUrlParams"}),` со\r
старыми.`]})})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-возвращаемые-значения",children:"📤 Возвращаемые значения"}),`
`,e.jsx(d.p,{children:"Хук возвращает объект с расширенным состоянием:"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px",marginBottom:"20px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Поле"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Тип"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Описание"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"run"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"(options?) => Promise<TData>"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Асинхронная функция запуска запроса. Возвращает данные."})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"params"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"TVariables | undefined"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Текущие активные основные параметры запроса."})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"urlParams"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"Record<string, unknown> | undefined"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Текущие активные URL query-параметры."})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"data"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"TData | undefined"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Результат последнего успешного вызова."})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"isFetching"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:[e.jsx("code",{children:"true"}),", если запрос выполняется прямо сейчас."]})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"isError"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:[e.jsx("code",{children:"true"}),", если последний запуск завершился ошибкой."]})})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-практические-сценарии",children:"💻 Практические сценарии"}),`
`,e.jsxs(d.h3,{id:"1-скачивание-отчетов-динамический-dopurl",children:["1. Скачивание отчетов (динамический ",e.jsx(d.code,{children:"dopUrl"}),")"]}),`
`,e.jsx(d.p,{children:"Позволяет использовать один базовый хук для выгрузки отчетов в разном формате:"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`const { run, isFetching } = useFManualApiQuery(\r
  "reports",\r
  "/api/v1/reports/download",\r
  undefined,\r
  { responseType: "blob" }, // Опция Axios для скачивания файлов\r
  { method: "POST" },\r
);\r
\r
const handleExportExcel = () =>\r
  run({ dopUrl: "/excel", newParams: { year: 2024 } });\r
const handleExportPdf = () =>\r
  run({ dopUrl: "/pdf", newParams: { year: 2024 } });
`})}),`
`,e.jsxs(d.h3,{id:"2-частичное-обновление-параметров-preserveparams",children:["2. Частичное обновление параметров (",e.jsx(d.code,{children:"preserveParams"}),")"]}),`
`,e.jsx(d.p,{children:"Если у вас многостраничный фильтр и вы хотите поменять только номер страницы, не сбрасывая введенные данные фильтра:"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`const { run } = useFManualApiQuery("analytics", "/api/v1/analytics");\r
\r
// Применение основных фильтров\r
const applyFilter = (filterForm: IFilter) => {\r
  run({ newParams: filterForm });\r
};\r
\r
// Пагинация: меняем только urlParams, сохраняя предыдущий newParams!\r
const changePage = (newPage: number) => {\r
  run({\r
    newUrlParams: { page: newPage },\r
    preserveParams: true,\r
  });\r
};
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"️-рекомендации-и-лучшие-практики",children:"🛠️ Рекомендации и лучшие практики"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsx(d.p,{children:e.jsx(d.strong,{children:"async/await vs Реактивность:"})}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:["Используйте ",e.jsx(d.code,{children:"await run()"}),", когда нужно выполнить действие сразу после получения ответа (закрыть модальное окно, показать снайперский тоаст, сделать редирект)."]}),`
`,e.jsxs(d.li,{children:["Используйте JSX-состояния (",e.jsx(d.code,{children:"{data && <Table data={data} />}"}),"), если нужно просто отрисовать результат на экране."]}),`
`]}),`
`]}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsxs(d.p,{children:[e.jsx(d.strong,{children:"Повторный запуск:"})," Если вызвать ",e.jsx(d.code,{children:"run()"})," с теми же параметрами, TanStack Query выдаст ответ из кэша мгновенно, не совершая повторный сетевой запрос (если не истек ",e.jsx(d.code,{children:"staleTime"}),")."]}),`
`]})]})}function m(r={}){const{wrapper:d}={...s(),...r.components};return d?e.jsx(d,{...r,children:e.jsx(n,{...r})}):n(r)}export{m as default};
