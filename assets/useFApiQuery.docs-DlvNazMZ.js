import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as n}from"./index-BoUPaUI-.js";import"./index-Dy2zwCAv.js";import{M as i}from"./index-DNcqRsgG.js";import"./index-B3j06Xw8.js";import"./preview-CfSYVkus.js";import"./iframe-D70twm1l.js";import"./DocsRenderer-CFRXHY34-76to6zf-.js";import"./client-DOawrHdJ.js";import"./index-DW0t0JKo.js";import"./index-D_ywfbVi.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";function s(r){const d={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Hooks/useFApiQuery"}),`
`,e.jsx(d.h1,{id:"usefapiquery",children:"useFApiQuery"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsxs(d.p,{children:[e.jsx(d.strong,{children:"Декларативный хук"}),` для чтения данных из API с автоматическим кэшированием, отменой зависших запросов и встроенной системой нотификаций на базе TanStack Query v5.\r
Работает только с использованием `,e.jsx(d.code,{children:"useLibraryContext"}),"."]}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-основные-возможности",children:"🚀 Основные возможности"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:["🔄 ",e.jsx(d.strong,{children:"Автоматический перезапуск:"})," Запрос выполняется при монтировании компонента и при изменении параметров в ",e.jsx(d.code,{children:"queryKey"}),"."]}),`
`,e.jsxs(d.li,{children:["🧠 ",e.jsx(d.strong,{children:"Авто-извлечение параметров:"})," Если последний элемент ",e.jsx(d.code,{children:"queryKey"})," — объект, он автоматически становится ",e.jsx(d.code,{children:"params"})," (для GET) или ",e.jsx(d.code,{children:"data"})," (для POST)."]}),`
`,e.jsxs(d.li,{children:["🛑 ",e.jsx(d.strong,{children:"Отмена запросов (AbortSignal):"})," Быстрая смена фильтров отменяет предыдущие незавершенные HTTP-запросы в Axios."]}),`
`,e.jsxs(d.li,{children:["📮 ",e.jsx(d.strong,{children:"Поддержка POST:"})," Возможность получать данные через POST-запросы для сложных фильтров и тяжелых справочников."]}),`
`,e.jsxs(d.li,{children:["🔔 ",e.jsx(d.strong,{children:"Встроенный UI Feedback:"})," Автоматический показ тоастов загрузки и ошибок из вашего UI Kit."]}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-когда-использовать",children:"💡 Когда использовать"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px",marginBottom:"20px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Подходит для ✅"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Не подходит для ❌"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Автоматической загрузки данных при открытии страницы/компонента"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:["Запуска запросов strictly по клику кнопки (используйте"," ",`\r
`,e.jsx("code",{children:"useFManualApiQuery"}),")"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Таблиц с пагинацией, фильтрацией и сортировкой"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:["Операций создания, обновления, удаления (используйте"," ",`\r
`,e.jsx("code",{children:"useFApiMutation"}),")"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Получения справочников и профиля пользователя"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Запросов без кэширования с постоянными побочными эффектами"})})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-базовый-пример",children:"📦 Базовый пример"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`import { useFApiQuery } from "my-ui-kit-library";\r
\r
interface IUser {\r
  id: number;\r
  name: string;\r
}\r
\r
export const UsersList = () => {\r
  const [page, setPage] = useState(1);\r
\r
  // Запрос перезапустится автоматически при изменении page\r
  const { data, isLoading, isError } = useFApiQuery<IUser[]>(\r
    ["users", { page, limit: 10 }],\r
    "/api/v1/users",\r
  );\r
\r
  if (isLoading) return <div>Загрузка пользователей...</div>;\r
  if (isError) return <div>Не удалось загрузить пользователей</div>;\r
\r
  return (\r
    <div>\r
      {data?.map((user) => (\r
        <div key={user.id}>{user.name}</div>\r
      ))}\r
      <button onClick={() => setPage((p) => p + 1)}>Следующая страница</button>\r
    </div>\r
  );\r
};
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"️-api-reference",children:"⚙️ API Reference"}),`
`,e.jsx(d.h3,{id:"сигнатура",children:"Сигнатура"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-ts",children:`const queryResult = useFApiQuery<TQueryFnData, TData = TQueryFnData>(\r
  queryKey,\r
  url,\r
  config?,\r
  options?\r
);
`})}),`
`,e.jsx(d.h3,{id:"дженерики",children:"Дженерики"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px",marginBottom:"20px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Дженерик"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"По умолчанию"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Описание"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"TQueryFnData"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"—"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Тип ответа, который возвращает ваш сервер/API."})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"TData"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"TQueryFnData"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:["Тип данных после обработки функцией ",e.jsx("code",{children:"select"}),` (если\r
используется).`]})})]})]})]}),`
`,e.jsx(d.h3,{id:"основные-параметры",children:"Основные параметры"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px",marginBottom:"20px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Параметр"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Тип"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Описание"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"queryKey"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"QueryKey"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:`Ключ кэша. Если последний элемент — объект, он станет параметрами\r
запроса.`})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"url"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"URL эндпоинта сервера."})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"config"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"AxiosRequestConfig"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Дополнительный конфиг Axios (заголовки, таймауты и т.д.)."})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"options"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"object"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Опции TanStack Query v5 и расширенные настройки нотификаций."})})]})]})]}),`
`,e.jsxs(d.h3,{id:"дополнительные-опции-options",children:["Дополнительные опции (",e.jsx(d.code,{children:"options"}),")"]}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px",marginBottom:"20px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Опция"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Тип"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Описание"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"method"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"'GET' | 'POST'"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:["HTTP-метод запроса (по умолчанию ",e.jsx("code",{children:"'GET'"}),")."]})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"onErrorNotification"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:["Показывать ли всплывающий тоаст об ошибке (по умолчанию"," ",`\r
`,e.jsx("code",{children:"false"}),")."]})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"onLoadingLog"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Показывать ли тоаст/индикатор загрузки во время запроса."})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"loadingNotificationTitle"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Заголовок тоаста загрузки."})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"enabled"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:["Условие выполнения запроса (по умолчанию ",e.jsx("code",{children:"true"}),")."]})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"staleTime"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"number"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Время (в мс), в течение которого данные считаются свежими."})})]})]})]}),`
`,e.jsx(d.h3,{id:"возвращаемые-свойства",children:"Возвращаемые свойства"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px",marginBottom:"20px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Свойство"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Тип"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Описание"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"data"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"TData | undefined"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Успешно полученные данные с сервера."})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"isLoading"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:[e.jsx("code",{children:"true"}),`, если запрос выполняется в первый раз и данных в кэше\r
еще нет.`]})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"isFetching"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:[e.jsx("code",{children:"true"}),` при любом выполнении сетевого запроса (включая фоновые\r
обновления).`]})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"isError"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:[e.jsx("code",{children:"true"}),", если запрос завершился ошибкой."]})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"error"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"AxiosError | null"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Объект ошибки Axios."})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"refetch"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"function"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Функция для ручного перезапуска запроса."})})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-практические-сценарии",children:"💻 Практические сценарии"}),`
`,e.jsx(d.h3,{id:"1-post-запрос-для-сложных-фильтров-и-справочников",children:"1. POST-запрос для сложных фильтров и справочников"}),`
`,e.jsxs(d.p,{children:["Используйте опцию ",e.jsx(d.code,{children:"method: 'POST'"}),", если бэкенд требует передачи большого объекта фильтрации в теле запроса."]}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`interface IFilterBody {\r
  categories: string[];\r
  priceRange: [number, number];\r
}\r
\r
const { data, isLoading } = useFApiQuery<IProduct[], IProduct[]>(\r
  ["products-search", { categories: ["electronics"], priceRange: [100, 500] }],\r
  "/api/v1/products/search",\r
  undefined,\r
  { method: "POST" },\r
);
`})}),`
`,e.jsxs(d.h3,{id:"2-трансформация-данных-через-select",children:["2. Трансформация данных через ",e.jsx(d.code,{children:"select"})]}),`
`,e.jsx(d.p,{children:"Если нужно отфильтровать или отформатировать данные сразу при получении, чтобы не делать это в компоненте:"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`const { data: adminUsers } = useFApiQuery<IUser[], IUser[]>(\r
  ["users"],\r
  "/api/v1/users",\r
  undefined,\r
  {\r
    // Оставляем только администраторов\r
    select: (users) => users.filter((u) => u.role === "admin"),\r
  },\r
);
`})}),`
`,e.jsxs(d.h3,{id:"3-зависимые-запросы-enabled",children:["3. Зависимые запросы (",e.jsx(d.code,{children:"enabled"}),")"]}),`
`,e.jsxs(d.p,{children:["Запрос не выполнится, пока не появится значение ",e.jsx(d.code,{children:"userId"}),":"]}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`const [userId, setUserId] = useState<number | null>(null);\r
\r
const { data: userProfile } = useFApiQuery<IUserProfile>(\r
  ["user-profile", userId],\r
  \`/api/v1/users/\${userId}\`,\r
  undefined,\r
  {\r
    enabled: Boolean(userId), // Выполнится только если userId !== null\r
  },\r
);
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"️-рекомендации-и-лучшие-практики",children:"🛠️ Рекомендации и лучшие практики"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsxs(d.p,{children:[e.jsx(d.strong,{children:"Формирование queryKey:"})," Всегда кладите динамические параметры (объекты фильтров, ID, номера страниц) в конец массива ",e.jsx(d.code,{children:"queryKey"}),"."]}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`// ❌ Плохо: параметры зашиты в URL вручную (кэш не будет обновляться автоматически)\r
useFApiQuery(["users"], \`/api/v1/users?page=\${page}\`);\r
\r
// ✅ Отлично: параметры в ключи (кэш инвалидируется автоматически при смене page)\r
useFApiQuery(["users", { page }], "/api/v1/users");
`})}),`
`]}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsxs(d.p,{children:[e.jsx(d.strong,{children:"Защита от частого ввода (Debounce):"})," Если вы привязываете ",e.jsx(d.code,{children:"queryKey"})," к текстовому инпуту поиска, оборачивайте значение инпута в ",e.jsx(d.code,{children:"useDebounce"}),", чтобы не спамить сервер запросами при каждом нажатии клавиши."]}),`
`]})]})}function f(r={}){const{wrapper:d}={...n(),...r.components};return d?e.jsx(d,{...r,children:e.jsx(s,{...r})}):s(r)}export{f as default};
