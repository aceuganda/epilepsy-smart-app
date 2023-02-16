import axios from 'axios';
import { SEIZURE_URL, RESILIENCE_URL, MEDICINES_URL, MEDICATION_URL } from '../config/urls';

const token = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo')).data.access_token
  : null;

const config = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  }
};

export const postSeizureAssessment = async (data) =>
  await axios.post(SEIZURE_URL, data, config).then((response) => response.data);

export const postResilience = async (data) =>
  await axios.post(RESILIENCE_URL, data, config).then((response) => response.data);

export const postMedicine = async (data) =>
  await axios.post(MEDICINES_URL, data, config).then((response) => response.data);

export const getMedicine = async (id) =>
  await axios
    .get(MEDICINES_URL + '/' + id, config)
    .then((response) => response.data)
    .catch((erro) => erro);

export const postMedication = async (data) =>
  await axios
    .post(MEDICATION_URL, data, config)
    .then((response) => response.data)
    .catch((erro) => erro);
