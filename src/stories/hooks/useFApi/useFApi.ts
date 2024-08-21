import { useState } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { fNotification } from '../../function-elements';

export type IUseFApi<T> = {
    data: T | null;
    loading: boolean;
    error: string | null;
    execute: (config: AxiosRequestConfig) => Promise<T | null>;
    reset: (newData: T | null) => void;
};

interface ApiErrorResponse {
    message: string;
}

const useFApi = <T>(): IUseFApi<T> => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const execute = async (config: AxiosRequestConfig): Promise<T | null> => {

        setLoading(true);
        setError(null);

        try {
            const response: AxiosResponse<T> = await axios(config);
            setData(response.data);
            return response.data;
        } catch (error) {
            const err = error as AxiosError<ApiErrorResponse>;
            const errorMessage = err.response?.data?.message || err.message || 'Unknown error';
            fNotification({
                variant: 'error',
                title: 'Ошибка',
                body: `- При отправке данных произошла ошибка ${err.response?.status}\n- ${errorMessage}`,
                timeSecClose: 5,
            });
            setError(errorMessage);
            return null;
        } finally {
            setLoading(false);
        }
    };

    const reset = (newData: T | null) => {
        setData(newData);
    };

    return { data, loading, error, execute, reset };
};

export default useFApi;
