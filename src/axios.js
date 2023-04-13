import axios from 'axios';
const createAxiosInstance = () => {
  const instance = axios.create();
  instance.defaults.headers.Authorization = `Bearer ${JSON.parse(
    localStorage.getItem('userToken')
  )}`;
  return instance;
};
export default createAxiosInstance;
