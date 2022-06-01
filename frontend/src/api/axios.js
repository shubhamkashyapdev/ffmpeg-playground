import axios from 'axios';
export const url = 'http://127.0.0.1:5000';
const api = axios.create({
  baseURL: url,
});

export default api;
