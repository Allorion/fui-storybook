import { Fragment } from 'react';



import "./useFApi.css"


export default {
    title: 'Function Hooks/useFApi',
    tags: ['autodocs'],
}

const text1 = `import { useFApi } from "fui-material";

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
`

export const Default = () => (
    <Fragment>
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
                    <code>{`execute: (config: AxiosRequestConfig) => Promise<T | null>`}</code> — функция для выполнения API-запроса. Принимает конфигурацию запроса <code>AxiosRequestConfig</code> и возвращает данные или <code>null</code> в случае ошибки.
                </li>
                <li>
                    <code>{`reset: (newData: T | null) => void`}</code> — функция для внешнего управления состоянием данных.
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
                <li>В хуке присутствуют необязательные параметры: <code>doNotUseState</code> применяется для отключения внутреннего состояния и <code>defaultState</code> применяется для указания дефолтных значений при первом рендеринге. Пример использования <code>{'const { loading, execute } = useFApi<{ data: [] }>({ defaultState: [], doNotUseState: true })'}</code></li>
            </ul>
        </div>
    </Fragment>
)