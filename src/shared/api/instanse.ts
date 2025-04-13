import axios, { AxiosError, AxiosRequestConfig } from "axios";

export const axiosInstanse = axios.create({
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});

export const createInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): Promise<T> => {
  return axiosInstanse({
    ...config,
    ...options,
  }).then((r) => r.data);
};

export type BodyType<Data> = Data;

export type ErrorType<Error> = AxiosError<Error>;
