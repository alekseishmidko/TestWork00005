import axios, { CreateAxiosDefaults } from "axios";

const getContentType = () => ({
  "Content-type": "application/json",
});

const options: CreateAxiosDefaults = {
  baseURL: process.env.SERVER_URL,
  headers: getContentType(),
  withCredentials: true,
};

export const axiosInstanse = axios.create(options);
