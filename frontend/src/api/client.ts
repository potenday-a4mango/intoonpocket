import axios, { AxiosInstance } from 'axios';
import { Options, AxiosApiFunction } from '../types/api';

const BASE_URL = 'http://118.67.142.96:8080';
// const BASE_URL = 'http://localhost:8080';
const HEADER_JSON = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const HEADER_FORM = {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
};

// CORS: 리소스 접근 허용
axios.defaults.headers['Access-Control-Allow-Origin'] = '*';

// CORS: 서로 다른 도메인간 쿠키 전달 허용
axios.defaults.withCredentials = true;

const axiosApi: AxiosApiFunction = (url, options = {}) => {
  const instance = axios.create({ baseURL: url, ...options });
  return instance;
};

export const jsonInstance: AxiosInstance = axiosApi(BASE_URL, HEADER_JSON);
export const formInstance: AxiosInstance = axiosApi(BASE_URL, HEADER_FORM);
