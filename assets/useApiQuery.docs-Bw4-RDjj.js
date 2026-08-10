import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as n}from"./index-Da05a9iP.js";import"./index-Bb4os9PL.js";import{M as i}from"./index-CHfHQAdi.js";import"./index-DEgj3Fem.js";import"./preview-C70yczUe.js";import"./iframe-DpLWwAsu.js";import"./DocsRenderer-CFRXHY34-DxhNbO5V.js";import"./client-DBdnbfFq.js";import"./index-DM3MU96Y.js";import"./index-BknSE3li.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function s(r){const d={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Hooks/useApiQuery"}),`
`,e.jsx(d.h1,{id:"useapiquery",children:"useApiQuery"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsxs(d.p,{children:[e.jsx(d.strong,{children:"Декларативный хук"})," для чтения данных из API с автоматическим кэшированием, отменой зависших запросов и встроенной системой нотификаций на базе TanStack Query v5."]}),`
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
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px",marginBottom:"20px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Подходит для ✅"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Не подходит для ❌"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Автоматической загрузки данных при открытии страницы/компонента"}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Запуска запросов strictly по клику кнопки (используйте ",e.jsx("code",{children:"useManualApiQuery"}),")"]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Таблиц с пагинацией, фильтрацией и сортировкой"}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Операций создания, обновления, удаления (используйте ",e.jsx("code",{children:"useApiMutation"}),")"]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Получения справочников и профиля пользователя"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Запросов без кэширования с постоянными побочными эффектами"})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-базовый-пример",children:"📦 Базовый пример"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`import { useApiQuery } from 'my-ui-kit-library';\r
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
  const { data, isLoading, isError } = useApiQuery<IUser[]>(\r
    ['users', { page, limit: 10 }],\r
    '/api/v1/users'\r
  );\r
\r
  if (isLoading) return <div>Загрузка пользователей...</div>;\r
  if (isError) return <div>Не удалось загрузить пользователей</div>;\r
\r
  return (\r
    <div>\r
      {data?.map((user) => <div key={user.id}>{user.name}</div>)}\r
      <button onClick={() => setPage((p) => p + 1)}>Следующая страница</button>\r
    </div>\r
  );\r
};
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"️-api-reference",children:"⚙️ API Reference"}),`
`,e.jsx(d.h3,{id:"сигнатура",children:"Сигнатура"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-ts",children:`const queryResult = useApiQuery<TQueryFnData, TData = TQueryFnData>(\r
  queryKey,\r
  url,\r
  config?,\r
  options?\r
);
`})}),`
`,e.jsx(d.h3,{id:"дженерики",children:"Дженерики"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px",marginBottom:"20px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Дженерик"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"По умолчанию"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"TQueryFnData"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"—"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Тип ответа, который возвращает ваш сервер/API."})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"TData"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"TQueryFnData"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Тип данных после обработки функцией ",e.jsx("code",{children:"select"})," (если используется)."]})]})]})]}),`
`,e.jsx(d.h3,{id:"основные-параметры",children:"Основные параметры"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px",marginBottom:"20px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Параметр"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"queryKey"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"QueryKey"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Ключ кэша. Если последний элемент — объект, он станет параметрами запроса."})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"url"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"URL эндпоинта сервера."})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"config"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"AxiosRequestConfig"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Дополнительный конфиг Axios (заголовки, таймауты и т.д.)."})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"options"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"object"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Опции TanStack Query v5 и расширенные настройки нотификаций."})]})]})]}),`
`,e.jsxs(d.h3,{id:"дополнительные-опции-options",children:["Дополнительные опции (",e.jsx(d.code,{children:"options"}),")"]}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px",marginBottom:"20px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Опция"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"method"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"'GET' | 'POST'"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["HTTP-метод запроса (по умолчанию ",e.jsx("code",{children:"'GET'"}),")."]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"onErrorNotification"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Показывать ли всплывающий тоаст об ошибке (по умолчанию ",e.jsx("code",{children:"false"}),")."]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"onLoadingLog"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Показывать ли тоаст/индикатор загрузки во время запроса."})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"loadingNotificationTitle"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Заголовок тоаста загрузки."})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"enabled"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Условие выполнения запроса (по умолчанию ",e.jsx("code",{children:"true"}),")."]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"staleTime"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"number"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Время (в мс), в течение которого данные считаются свежими."})]})]})]}),`
`,e.jsx(d.h3,{id:"возвращаемые-свойства",children:"Возвращаемые свойства"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px",marginBottom:"20px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Свойство"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"data"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"TData | undefined"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Успешно полученные данные с сервера."})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"isLoading"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:[e.jsx("code",{children:"true"}),", если запрос выполняется в первый раз и данных в кэше еще нет."]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"isFetching"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:[e.jsx("code",{children:"true"})," при любом выполнении сетевого запроса (включая фоновые обновления)."]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"isError"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:[e.jsx("code",{children:"true"}),", если запрос завершился ошибкой."]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"error"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"AxiosError | null"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Объект ошибки Axios."})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"refetch"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"function"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Функция для ручного перезапуска запроса."})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-практические-сценарии",children:"💻 Практические сценарии"}),`
`,e.jsx(d.h3,{id:"1-post-запрос-для-сложных-фильтров-и-справочников",children:"1. POST-запрос для сложных фильтров и справочников"}),`
`,e.jsxs(d.p,{children:["Используйте опцию ",e.jsx(d.code,{children:"method: 'POST'"}),", если бэкенд требует передачи большого объекта фильтрации в теле запроса."]}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`interface IFilterBody {\r
  categories: string[];\r
  priceRange: [number, number];\r
}\r
\r
const { data, isLoading } = useApiQuery<IProduct[], IProduct[]>(\r
  ['products-search', { categories: ['electronics'], priceRange: [100, 500] }],\r
  '/api/v1/products/search',\r
  undefined,\r
  { method: 'POST' }\r
);
`})}),`
`,e.jsxs(d.h3,{id:"2-трансформация-данных-через-select",children:["2. Трансформация данных через ",e.jsx(d.code,{children:"select"})]}),`
`,e.jsx(d.p,{children:"Если нужно отфильтровать или отформатировать данные сразу при получении, чтобы не делать это в компоненте:"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`const { data: adminUsers } = useApiQuery<IUser[], IUser[]>(\r
  ['users'],\r
  '/api/v1/users',\r
  undefined,\r
  {\r
    // Оставляем только администраторов\r
    select: (users) => users.filter((u) => u.role === 'admin'),\r
  }\r
);
`})}),`
`,e.jsxs(d.h3,{id:"3-зависимые-запросы-enabled",children:["3. Зависимые запросы (",e.jsx(d.code,{children:"enabled"}),")"]}),`
`,e.jsxs(d.p,{children:["Запрос не выполнится, пока не появится значение ",e.jsx(d.code,{children:"userId"}),":"]}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`const [userId, setUserId] = useState<number | null>(null);\r
\r
const { data: userProfile } = useApiQuery<IUserProfile>(\r
  ['user-profile', userId],\r
  \`/api/v1/users/\${userId}\`,\r
  undefined,\r
  {\r
    enabled: Boolean(userId), // Выполнится только если userId !== null\r
  }\r
);
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"️-рекомендации-и-лучшие-практики",children:"🛠️ Рекомендации и лучшие практики"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsxs(d.p,{children:[e.jsx(d.strong,{children:"Формирование queryKey:"})," Всегда кладите динамические параметры (объекты фильтров, ID, номера страниц) в конец массива ",e.jsx(d.code,{children:"queryKey"}),"."]}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`// ❌ Плохо: параметры зашиты в URL вручную (кэш не будет обновляться автоматически)\r
useApiQuery(['users'], \`/api/v1/users?page=\${page}\`);\r
\r
// ✅ Отлично: параметры в ключи (кэш инвалидируется автоматически при смене page)\r
useApiQuery(['users', { page }], '/api/v1/users');
`})}),`
`]}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsxs(d.p,{children:[e.jsx(d.strong,{children:"Защита от частого ввода (Debounce):"})," Если вы привязываете ",e.jsx(d.code,{children:"queryKey"})," к текстовому инпуту поиска, оборачивайте значение инпута в ",e.jsx(d.code,{children:"useDebounce"}),", чтобы не спамить сервер запросами при каждом нажатии клавиши."]}),`
`]})]})}function f(r={}){const{wrapper:d}={...n(),...r.components};return d?e.jsx(d,{...r,children:e.jsx(s,{...r})}):s(r)}export{f as default};
