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

type GetValueByPath<T, P extends string> =
    P extends `${infer Key}.${infer Rest}`
    ? Key extends keyof T
    ? GetValueByPath<T[Key], Rest>
    : never
    : P extends keyof T
    ? T[P]
    : never;

type IProps<T> = {
    doNotUseState?: boolean;
    defaultState?: T | null;
    getValueByPath?: string;
};

const useFApi = <T>({ doNotUseState = false, defaultState = null, getValueByPath = undefined }: IProps<T> = {}) => {
    const [data, setData] = useState<T | null>(defaultState === undefined ? null : defaultState);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const execute = async (config: AxiosRequestConfig): Promise<
        typeof getValueByPath extends string ? GetValueByPath<T, typeof getValueByPath> : T | null
    > => {
        setLoading(true);
        setError(null);

        try {
            const response: AxiosResponse<T> = await axios(config);

            if (getValueByPath) {
                let returnValue: any = response.data;
                const pathParts = getValueByPath.split('.');
                for (const part of pathParts) {
                    returnValue = returnValue?.[part];
                    if (returnValue === undefined) break;
                }
                if (!doNotUseState) {
                    setData(returnValue ?? null);
                }
                return returnValue ?? null;
            } else {
                if (!doNotUseState) {
                    setData(response.data);
                }
                return response.data;
            }
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
        if (!doNotUseState) {
            setData(newData);
        }
    };

    return { data, loading, error, execute, reset };
};

export default useFApi;