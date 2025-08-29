import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as s}from"./index-D7CuHrhf.js";import"./index-B_tDNPrG.js";import{M as l}from"./index-DZcZBAEO.js";import"./index-yBjzXJbu.js";import"./index-DY-snNUy.js";import"./preview-DSSbnTGf.js";import"./iframe-Tp_ypbcz.js";import"./DocsRenderer-CFRXHY34-C9Ugl-C7.js";import"./client-CDUMOAsi.js";import"./index-fNjTmf9T.js";import"./index-xMzmejw-.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function r(i){const d={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Hooks/useFApi"}),`
`,e.jsx(d.h1,{id:"-usefapi--универсальный-api-хук",children:"🔗 useFApi — универсальный API-хук"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsx(d.p,{children:"Хук для удобной работы с HTTP-запросами через axios с поддержкой состояния, ошибок, уведомлений и извлечения данных по пути."}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-описание",children:"📝 Описание"}),`
`,e.jsxs(d.p,{children:[e.jsx(d.code,{children:"useFApi"})," — универсальный хук для работы с API-запросами. Позволяет удобно управлять состоянием загрузки, ошибок и данных, а также извлекать вложенные значения из ответа по строковому пути. Встроена интеграция с fNotification для вывода ошибок."]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-пример-использования",children:"💡 Пример использования"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{children:`const { data, loading, error, execute } = useFApi<{ name: string }>();

useEffect(() => {
  execute({ url: '/api/user/1' });
}, []);

if (loading) return <div>Загрузка...</div>;
if (error) return <div>Ошибка: {error}</div>;

return <div>Имя: {data?.name}</div>;
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-параметры",children:"📋 Параметры"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Параметр"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"doNotUseState?"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Отключить внутреннее состояние (useState)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"defaultState?"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"T | null"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Начальное значение данных"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"getValueByPath?"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Путь к вложенному полю в ответе (например, ",e.jsx("code",{children:"data.items"}),")"]})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-возвращаемое-значение",children:"🔄 Возвращаемое значение"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Поле"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"data"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"T | null"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Данные из API"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"loading"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Флаг загрузки"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"error"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string | null"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Сообщение об ошибке"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"execute"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"(config: AxiosRequestConfig) => Promise<T | null>"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Асинхронная функция для запроса"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"reset"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"(newData: T | null) => void"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Сбросить данные вручную"})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"️-особенности",children:"🛠️ Особенности"}),`
`,e.jsxs("ul",{children:[e.jsxs("li",{children:["Управление состоянием ",e.jsx("b",{children:"data"}),", ",e.jsx("b",{children:"loading"}),", ",e.jsx("b",{children:"error"})," внутри хука (или можно отключить)."]}),e.jsxs("li",{children:["Уведомления об ошибках через ",e.jsx("code",{children:"fNotification"}),"."]}),e.jsxs("li",{children:["Извлечение вложенных данных по пути (",e.jsx("code",{children:"getValueByPath"}),")."]}),e.jsx("li",{children:"Можно использовать без состояния для ручного управления."})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"ℹ️-советы",children:"ℹ️ Советы"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:["Для сложных API-ответов используйте ",e.jsx("code",{children:"getValueByPath"})," для получения только нужного поля."]}),`
`,e.jsxs(d.li,{children:["Для ручного управления состоянием используйте ",e.jsx("code",{children:"doNotUseState: true"}),"."]}),`
`,e.jsxs(d.li,{children:["Для типизации результата используйте дженерики: ",e.jsx("code",{children:"useFApi<ТипДанных>()"}),"."]}),`
`]})]})}function m(i={}){const{wrapper:d}={...s(),...i.components};return d?e.jsx(d,{...i,children:e.jsx(r,{...i})}):r(i)}export{m as default};
