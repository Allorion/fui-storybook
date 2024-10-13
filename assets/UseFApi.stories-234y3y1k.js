import{j as e}from"./jsx-runtime-DEdD30eg.js";import{r as s}from"./index-RYns6xqu.js";const r={title:"Function Hooks/useFApi",tags:["autodocs"]},i=`import { useFApi } from "fui-material";

const MyComponent = () => {

    const { data, loading, error, execute, reset } = useFApi<{ message: string }>();

    const fetchData = async () => {
        await execute({
            url: 'https://api.example.com/data',
            method: 'GET',
        });
    };

    return (
        <div>
            <button onClick={fetchData}>Загрузить данные</button>
            {loading && <p>Загрузка...</p>}
            {error && <p>Ошибка: {error}</p>}
            {data && <p>Сообщение: {data.message}</p>}
        </div>
    );
};

export default MyComponent;
`,n=()=>e.jsx(s.Fragment,{children:e.jsxs("div",{className:"container",children:[e.jsxs("h1",{children:["Документация по использованию хука ",e.jsx("code",{children:"useFApi"})]}),e.jsx("h2",{children:"Описание"}),e.jsxs("p",{children:[e.jsx("code",{children:"useFApi"})," — это кастомный React-хук для выполнения API-запросов с использованием ",e.jsx("code",{children:"axios"}),". Хук управляет состоянием данных, загрузки и ошибок, связанных с запросами. Также он предоставляет функцию для выполнения запросов и возможность внешнего управления состоянием данных."]}),e.jsx("h2",{children:"Использование"}),e.jsx("pre",{children:e.jsx("code",{children:"const {data, loading, error, execute, reset} = useFApi<YourDataType>();"})}),e.jsxs("p",{children:["Здесь ",e.jsx("code",{children:"YourDataType"})," — это тип данных, которые вы ожидаете получить от API."]}),e.jsx("h3",{children:"Пример использования:"}),e.jsx("pre",{children:e.jsx("code",{children:i})}),e.jsxs("h2",{children:["API хука ",e.jsx("code",{children:"useFApi"})]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"data: T | null"})," — состояние данных, возвращаемых API."]}),e.jsxs("li",{children:[e.jsx("code",{children:"loading: boolean"})," — состояние загрузки. ",e.jsx("code",{children:"true"}),", пока запрос выполняется."]}),e.jsxs("li",{children:[e.jsx("code",{children:"error: string | null"})," — состояние ошибки. Содержит сообщение об ошибке, если запрос завершился неудачей."]}),e.jsxs("li",{children:[e.jsx("code",{children:"execute: (config: AxiosRequestConfig) => Promise<T | null>"})," — функция для выполнения API-запроса. Принимает конфигурацию запроса ",e.jsx("code",{children:"AxiosRequestConfig"})," и возвращает данные или ",e.jsx("code",{children:"null"})," в случае ошибки."]}),e.jsxs("li",{children:[e.jsx("code",{children:"reset: (newData: T | null) => void"})," — функция для внешнего управления состоянием данных."]})]}),e.jsx("h2",{children:"Параметры"}),e.jsxs("h3",{children:["Тип ",e.jsx("code",{children:"AxiosRequestConfig"})]}),e.jsxs("p",{children:["Конфигурация запроса ",e.jsx("code",{children:"axios"}),", включающая URL, метод, заголовки и другие параметры."]}),e.jsx("h2",{children:"Примечания"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["При возникновении ошибки отображается уведомление с помощью ",e.jsx("code",{children:"fNotification"}),"."]}),e.jsxs("li",{children:["Необязательный параметр: ",e.jsx("code",{children:"doNotUseState"})," применяется для отключения внутреннего состояния."]}),e.jsxs("li",{children:["Необязательный параметр: ",e.jsx("code",{children:"defaultState"})," применяется для указания дефолтных значений при первом рендеринге. Пример использования ",e.jsx("code",{children:"const { loading, execute } = useFApi<{ data: [] }>({ defaultState: [], doNotUseState: true })"})]}),e.jsxs("li",{children:["Необязательный параметр: ",e.jsx("code",{children:"getValueByPath"})," применяется для выбора определенного свойства получаемого объекта из запроса. Пример использования ",e.jsx("code",{children:'const { loading, execute } = useFApi<{ { name: string; age: number }[] }>({ getValueByPath: "dataUser.allInfo" })'})]})]})]})});n.__docgenInfo={description:"",methods:[],displayName:"Default"};var o,d,c;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`() => <Fragment>
        <div className="container">

            <h1>Документация по использованию хука <code>useFApi</code></h1>

            <h2>Описание</h2>
            <p>
                <code>useFApi</code> — это кастомный React-хук для выполнения API-запросов с использованием <code>axios</code>.
                Хук управляет состоянием данных, загрузки и ошибок, связанных с запросами.
                Также он предоставляет функцию для выполнения запросов и возможность внешнего управления состоянием данных.
            </p>

            <h2>Использование</h2>

            <pre>
                <code>
                    {'const {data, loading, error, execute, reset} = useFApi<YourDataType>();'}
                </code>
            </pre>
            <p>Здесь <code>YourDataType</code> — это тип данных, которые вы ожидаете получить от API.</p>
            <h3>Пример использования:</h3>

            <pre>
                <code>
                    {text1}
                </code>
            </pre>
            <h2>API хука <code>useFApi</code></h2>
            <ul>
                <li>
                    <code>data: T | null</code> — состояние данных, возвращаемых API.
                </li>
                <li>
                    <code>loading: boolean</code> — состояние загрузки. <code>true</code>, пока запрос выполняется.
                </li>
                <li>
                    <code>error: string | null</code> — состояние ошибки. Содержит сообщение об ошибке, если запрос завершился неудачей.
                </li>
                <li>
                    <code>{\`execute: (config: AxiosRequestConfig) => Promise<T | null>\`}</code> — функция для выполнения API-запроса. Принимает конфигурацию запроса <code>AxiosRequestConfig</code> и возвращает данные или <code>null</code> в случае ошибки.
                </li>
                <li>
                    <code>{\`reset: (newData: T | null) => void\`}</code> — функция для внешнего управления состоянием данных.
                </li>
            </ul>
            <h2>Параметры</h2>
            <h3>Тип <code>AxiosRequestConfig</code></h3>
            <p>
                Конфигурация запроса <code>axios</code>, включающая URL, метод, заголовки и другие параметры.
            </p>

            <h2>Примечания</h2>
            <ul>
                <li>При возникновении ошибки отображается уведомление с помощью <code>fNotification</code>.</li>
                <li>Необязательный параметр: <code>doNotUseState</code> применяется для отключения внутреннего состояния.</li>
                <li>Необязательный параметр: <code>defaultState</code> применяется для указания дефолтных значений при первом рендеринге. Пример использования <code>{'const { loading, execute } = useFApi<{ data: [] }>({ defaultState: [], doNotUseState: true })'}</code></li>
                <li>Необязательный параметр: <code>getValueByPath</code> применяется для выбора определенного свойства получаемого объекта из запроса. Пример использования <code>{'const { loading, execute } = useFApi<{ { name: string; age: number }[] }>({ getValueByPath: "dataUser.allInfo" })'}</code></li>
            </ul>
        </div>
    </Fragment>`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const a=["Default"];export{n as Default,a as __namedExportsOrder,r as default};
