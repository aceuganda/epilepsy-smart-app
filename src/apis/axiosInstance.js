import axios from 'axios';

const userToken = JSON.parse(localStorage.getItem('userToken'));

export const axiosInstance = axios.create({
  baseURL: 'https://epilepsy-smartapp-api.onrender.com/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${userToken}`
  }
});
