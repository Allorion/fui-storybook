import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-BoUPaUI-.js";import"./index-Dy2zwCAv.js";import{M as i}from"./index-DNcqRsgG.js";import"./index-B3j06Xw8.js";import"./preview-CfSYVkus.js";import"./iframe-D70twm1l.js";import"./DocsRenderer-CFRXHY34-76to6zf-.js";import"./client-DOawrHdJ.js";import"./index-DW0t0JKo.js";import"./index-D_ywfbVi.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";function n(r){const d={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Hooks/useFApiMutation"}),`
`,e.jsx(d.h1,{id:"usefapimutation",children:"useFApiMutation"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsxs(d.p,{children:["Универсальный асинхронный хук надстройка над ",e.jsx(d.code,{children:"useMutation"})," (TanStack Query v5) для выполнения ",e.jsx(d.strong,{children:"write-операций"}),` (POST, PUT, DELETE, PATCH).\r
Работает только с использованием `,e.jsx(d.code,{children:"useLibraryContext"}),"."]}),`
`]}),`
`,e.jsxs(d.p,{children:["Хук решает рутинные задачи: автоматически подставляет параметры в URL (",e.jsx(d.code,{children:":id"}),"), управляет состоянием FormData, инвалидирует кэш списков после успеха и показывает кастомные UI-уведомления (тоасты)."]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-ключевые-фичи",children:"⚡ Ключевые фичи"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:[e.jsx(d.strong,{children:"Динамический URL:"})," Безопасная замена именованных параметров в ручке (например, ",e.jsx(d.code,{children:"/users/:userId/roles/:roleId"}),")."]}),`
`,e.jsxs(d.li,{children:[e.jsx(d.strong,{children:"Авто-FormData:"})," Автоматическое удаление заголовка ",e.jsx(d.code,{children:"Content-Type"})," при передаче ",e.jsx(d.code,{children:"FormData"})," (Axios сам проставит правильный ",e.jsx(d.code,{children:"boundary"}),")."]}),`
`,e.jsxs(d.li,{children:[e.jsx(d.strong,{children:"Авто-сброс кэша:"})," Опция ",e.jsx(d.code,{children:"queryKeyToInvalidate"})," автоматически обновляет связанные ",e.jsx(d.code,{children:"useQuery"})," таблицы/списки при успехе."]}),`
`,e.jsxs(d.li,{children:[e.jsx(d.strong,{children:"Поддержка Async/Await & Sync:"})," Предоставляет два удобных метода — ",e.jsx(d.code,{children:"mutate"})," (fire-and-forget) и ",e.jsx(d.code,{children:"mutateAsync"})," (возвращает ",e.jsx(d.code,{children:"Promise"}),")."]}),`
`,e.jsxs(d.li,{children:[e.jsx(d.strong,{children:"UI Нотификации:"})," Встроенное управление тоастами успеха, ошибки и статусным лоадером."]}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-базовый-пример",children:"🚀 Базовый пример"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`import { useFApiMutation } from "@your-org/ui-kit";\r
\r
interface ICreateUserPayload {\r
  name: string;\r
  email: string;\r
}\r
\r
interface IUserResponse {\r
  id: number;\r
  name: string;\r
}\r
\r
export const CreateUserForm = () => {\r
  const { mutate, isPending } = useFApiMutation<\r
    IUserResponse,\r
    ICreateUserPayload\r
  >("/api/v1/users", undefined, {\r
    queryKeyToInvalidate: ["users"], // Автоматически обновит список пользователей\r
    onSuccessNotification: true, // Покажет "Операция выполнена успешно"\r
    onErrorNotification: true, // Покажет всплывающее окно с ошибкой\r
  });\r
\r
  const handleSubmit = (values: ICreateUserPayload) => {\r
    mutate(values);\r
  };\r
\r
  return (\r
    <form onSubmit={/* ... */}>\r
      {/* Inputs */}\r
      <button type="submit" disabled={isPending}>\r
        {isPending ? "Сохранение..." : "Создать пользователя"}\r
      </button>\r
    </form>\r
  );\r
};
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-api-и-сигнатура",children:"📦 API и Сигнатура"}),`
`,e.jsx(d.h3,{id:"сигнатура-вызова",children:"Сигнатура вызова"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-ts",children:`const mutation = useFApiMutation<TQueryFnData, TVariables>(\r
  url,\r
  config?,\r
  options?\r
);
`})}),`
`,e.jsx(d.h3,{id:"дженерик-типы",children:"Дженерик-типы"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px",marginBottom:"24px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Тип"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"По умолчанию"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Описание"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"TQueryFnData"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"—"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Тип данных, которые возвращает сервер в теле ответа."})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"TVariables"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"unknown"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Тип передаваемых данных (тело запроса или FormData)."})})]})]})]}),`
`,e.jsx(d.h3,{id:"аргументы-функции",children:"Аргументы функции"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px",marginBottom:"24px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Параметр"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Тип"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Описание"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"url"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:["URL эндпоинта. Поддерживает динамические шаблоны вида"," ",`\r
`,e.jsx("code",{children:"/api/users/:userId/posts/:postId"})]})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"config"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"AxiosRequestConfig"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Необязательный конфиг Axios (заголовки, таймауты, сжатие и т.д.)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"options"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"object"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:`Расширенные опции TanStack Query + опции UI Kit (уведомления и сброс\r
кэша)`})})]})]})]}),`
`,e.jsxs(d.h3,{id:"расширенные-опции-options",children:["Расширенные опции (",e.jsx(d.code,{children:"options"}),")"]}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px",marginBottom:"24px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Параметр"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Тип"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Описание"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"queryKeyToInvalidate"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"QueryKey"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:`Ключ кэша, который автоматически инвалидируется при успешном завершении\r
мутации.`})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"onErrorNotification"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:["Показывать ли всплывающее уведомление при ошибке запроса (по умолчанию"," ",`\r
`,e.jsx("code",{children:"false"}),")."]})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"onSuccessNotification"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:["Показывать ли всплывающее уведомление при успехе (по умолчанию"," ",`\r
`,e.jsx("code",{children:"false"}),")."]})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"notificationTitle"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:`Кастомный заголовок окна ошибки (по умолчанию "Ошибка выполнения\r
запроса!").`})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"successNotificationTitle"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:'Кастомный заголовок окна успеха (по умолчанию "Успешно!").'})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"onErrorLog"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:["Выводить ли объект ошибки в ",e.jsx("code",{children:"console.error"}),"."]})})]})]})]}),`
`,e.jsxs(d.h3,{id:"возвращаемое-значение-custommutationresult",children:["Возвращаемое значение (",e.jsx(d.code,{children:"CustomMutationResult"}),")"]}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px",marginBottom:"24px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Свойство"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Тип"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Описание"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"mutate"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"(data?, urlParams?, options?) => void"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:`Синхронная функция запуска мутации (не выбрасывает исключение при\r
ошибке).`})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"mutateAsync"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"(data?, urlParams?, options?) => Promise<TData>"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:["Асинхронная функция запуска (возвращает ",e.jsx("code",{children:"Promise"}),`,\r
выбрасывает ошибку при сбое).`]})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"isPending"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:[e.jsx("code",{children:"true"}),", пока запрос находится в процессе выполнения."]})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"isSuccess"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:[e.jsx("code",{children:"true"}),", если запрос успешно завершился."]})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"isError"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:[e.jsx("code",{children:"true"}),", если запрос завершился с ошибкой."]})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"data"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"TData | undefined"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Ответ сервера при успешном выполнении."})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"error"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"AxiosError | null"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Объект ошибки Axios при сбое."})})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-практические-сценарии",children:"💡 Практические сценарии"}),`
`,e.jsxs(d.h3,{id:"1-запрос-с-динамическим-url-userid-и-roleid",children:["1. Запрос с динамическим URL (",e.jsx(d.code,{children:":userId"})," и ",e.jsx(d.code,{children:":roleId"}),")"]}),`
`,e.jsxs(d.p,{children:["Параметры подставляются вторым аргументом в ",e.jsx(d.code,{children:"mutate"})," / ",e.jsx(d.code,{children:"mutateAsync"}),":"]}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`const { mutateAsync, isPending } = useFApiMutation<void, IRolePayload>(\r
  "/api/v1/users/:userId/roles/:roleId",\r
);\r
\r
const handleAssignRole = async () => {\r
  try {\r
    // 1-й аргумент: Body\r
    // 2-й аргумент: URL params для подстановки в :userId и :roleId\r
    await mutateAsync(\r
      { permissions: ["read", "write"] },\r
      { userId: 42, roleId: 10 },\r
    );\r
\r
    // Итоговый URL: /api/v1/users/42/roles/10\r
    toast.success("Роль обновлена");\r
  } catch (error) {\r
    // Обработка ошибки\r
  }\r
};
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsxs(d.h3,{id:"2-загрузка-бинарных-файлов-через-formdata",children:["2. Загрузка бинарных файлов через ",e.jsx(d.code,{children:"FormData"})]}),`
`,e.jsxs(d.p,{children:["Хук автоматически определяет ",e.jsx(d.code,{children:"FormData"})," и сбрасывает фиксированный ",e.jsx(d.code,{children:"Content-Type"}),", позволяя Axios автоматически сформировать заголовок с ",e.jsx(d.code,{children:"boundary"}),":"]}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`const { mutate, isPending } = useFApiMutation<IUploadResponse>(\r
  "/api/v1/files/upload",\r
  undefined,\r
  { onSuccessNotification: true },\r
);\r
\r
const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {\r
  const file = e.target.files?.[0];\r
  if (!file) return;\r
\r
  const formData = new FormData();\r
  formData.append("attachment", file);\r
\r
  // Передаем FormData первым аргументом\r
  mutate(formData);\r
};
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsxs(d.h3,{id:"3-использование-mutateasync-в-модальных-окнах",children:["3. Использование ",e.jsx(d.code,{children:"mutateAsync"})," в модальных окнах"]}),`
`,e.jsxs(d.p,{children:["Используйте ",e.jsx(d.code,{children:"mutateAsync"}),", когда закрытие модального окна зависит от успеха запроса:"]}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`const ModalForm = ({ onClose }: { onClose: () => void }) => {\r
  const { mutateAsync, isPending } = useFApiMutation("/api/v1/categories");\r
\r
  const onSubmit = async (data: ICategoryDto) => {\r
    try {\r
      await mutateAsync(data);\r
      onClose(); // Закрываем модалку ТОЛЬКО если запрос успешный\r
    } catch (e) {\r
      // Ошибка обрабатывается автоматически нотификатором\r
    }\r
  };\r
\r
  return <form onSubmit={handleSubmit(onSubmit)}>{/* ... */}</form>;\r
};
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"️-рекомендации-по-использованию",children:"🛠️ Рекомендации по использованию"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsxs(d.p,{children:[e.jsx(d.strong,{children:"Совет по кэшированию:"})," Всегда передавайте ",e.jsx(d.code,{children:"queryKeyToInvalidate"}),", если результат мутации меняет данные списков. Это избавит вас от необходимости вручную вызывать ",e.jsx(d.code,{children:"refetch()"}),"."]}),`
`]}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsx(d.p,{children:e.jsxs(d.strong,{children:["Выбор между ",e.jsx(d.code,{children:"mutate"})," и ",e.jsx(d.code,{children:"mutateAsync"}),":"]})}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:["Используйте ",e.jsx(d.strong,{children:e.jsx(d.code,{children:"mutate"})}),", если вам не нужно дожидаться результата в месте вызова (например, нажатие на одну кнопку в списке)."]}),`
`,e.jsxs(d.li,{children:["Используйте ",e.jsx(d.strong,{children:e.jsx(d.code,{children:"mutateAsync"})}),", если результат нужен для последующей цепочки логики (",e.jsx(d.code,{children:"navigate()"}),", закрытие диалога, запуск следующего запроса)."]}),`
`]}),`
`]})]})}function m(r={}){const{wrapper:d}={...s(),...r.components};return d?e.jsx(d,{...r,children:e.jsx(n,{...r})}):n(r)}export{m as default};
