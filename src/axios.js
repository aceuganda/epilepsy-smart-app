import axios from 'axios';
const createAxiosInstance = () => {
  const instance = axios.create();
  console.log(`Bearer ${JSON.parse(localStorage.getItem('userToken'))}`);
  instance.defaults.headers.Authorization = `Bearer ${JSON.parse(
    localStorage.getItem('userToken')
  )}`;
  return instance;
};
export default createAxiosInstance;
