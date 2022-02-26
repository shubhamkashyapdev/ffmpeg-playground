import axios from 'axios';
export const url = 'http://localhost:5000';
const api = axios.create({
  baseURL: url,
});

export default api;
