import axios from 'axios';

const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

http.interceptors.response.use(
  (response) => response.data,
  (error) => error,
);

export { http };
