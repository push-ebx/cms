import axios from 'axios';

export const API_URL = `http://localhost:5001/api`

export const $api = axios.create({
  // withCredentials: true,
  baseURL: API_URL
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`;
  console.log(config.headers.Authorization);
  return config;
});