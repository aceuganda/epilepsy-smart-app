import axios from 'axios';
import {
  RESILIENCE_TALLIES_URL,
  SEIZURE_URL,
  RESILIENCE_URL,
  MEDICINES_URL,
  MEDICATION_URL,
  REGISTER_USER_URL
} from '../config/urls';

const userToken = JSON.parse(localStorage.getItem('userToken'));
const config = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${userToken}`
  }
};

export const postSeizureAssessment = async (data) =>
  await axios.post(SEIZURE_URL, data, config).then((response) => response.data);


export const postResilience = async (data) =>
  await axios.post(RESILIENCE_URL, data, config).then((response) => response.data);

export const getAllResilienceTallies = async (userId) =>
  await axios.get(`${RESILIENCE_TALLIES_URL}/${userId}`, config).then((response) => response.data);

export const postMedicine = async (data) =>
  await axios.post(MEDICINES_URL, data, config).then((response) => response.data);

export const getMedicine = async (id) =>
  await axios
    .get(MEDICINES_URL + '/' + id, config)
    .then((response) => response.data)
    .catch((error) => error);

export const postMedication = async (data) =>
  await axios
    .post(MEDICATION_URL, data, config)
    .then((response) => response.data)
    .catch((erro) => erro);

export const editUserDetails = async (userId, data) =>
  await axios.patch(`${REGISTER_USER_URL}/${userId}`, data, config);
