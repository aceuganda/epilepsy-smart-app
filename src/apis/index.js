import createAxiosInstance from '../axios.js';
import {
  RESILIENCE_TALLIES_URL,
  SEIZURE_URL,
  RESILIENCE_URL,
  MEDICINES_URL,
  MEDICATION_URL,
  REGISTER_USER_URL
} from '../config/urls';

// const userToken = JSON.parse(localStorage.getItem('userToken'));
// const config = {
//   headers: {
//     'Content-Type': 'application/json',
//     Authorization: `Bearer ${userToken}`
//   }
// };

export const postSeizureAssessment = async (data) =>
  await createAxiosInstance()
    .post(SEIZURE_URL, data)
    .then((response) => response.data);


export const postResilience = async (data) =>
  await createAxiosInstance()
    .post(RESILIENCE_URL, data)
    .then((response) => response.data);

export const getAllResilienceTallies = async (userId) =>
  await createAxiosInstance()
    .get(`${RESILIENCE_TALLIES_URL}/${userId}`)
    .then((response) => response.data);

export const postMedicine = async (data) =>
  await createAxiosInstance()
    .post(MEDICINES_URL, data)
    .then((response) => response.data);

export const getMedicine = async (id) =>
  await createAxiosInstance()
    .get(MEDICINES_URL + '/' + id)
    .then((response) => response.data)
    .catch((error) => error);

export const postMedication = async (data) =>
  await createAxiosInstance()
    .post(MEDICATION_URL, data)
    .then((response) => response.data)
    .catch((erro) => erro);

export const editUserDetails = async (userId, data) =>
  await createAxiosInstance().patch(`${REGISTER_USER_URL}/${userId}`, data);

export const updatePassword = async (userId, data) =>
  await createAxiosInstance().patch(`${REGISTER_USER_URL}/${userId}/change_password`, data);

// get single user
export const getUserDetails = async (userId) =>
  await createAxiosInstance().get(`${REGISTER_USER_URL}/${userId}`);
