import axios from 'axios';
export const url = 'https://vdo-to-gif.herokuapp.com';
const api = axios.create({
  baseURL: url,
});

export default api;
