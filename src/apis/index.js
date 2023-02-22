import axios from 'axios';
<<<<<<< HEAD
import { SEIZURE_URL } from '../config/urls';
import { RESILIENCE_URL } from '../config/urls';
=======
import {
  RESILIENCE_TALLIES_URL,
  SEIZURE_URL,
  RESILIENCE_URL,
  MEDICINES_URL,
  MEDICATION_URL,
  REGISTER_USER_URL
} from '../config/urls';
>>>>>>> 7521ddf691644cbb25585d3c23c52526784c367a

const userToken = JSON.parse(localStorage.getItem('userToken'));
const config = {
  headers: {
    'Content-Type': 'application/json',
<<<<<<< HEAD
    Authorization: `Bearer ${JSON.parse(localStorage.getItem('userToken'))}`
=======
    Authorization: `Bearer ${userToken}`
>>>>>>> 7521ddf691644cbb25585d3c23c52526784c367a
  }
};

export const postSeizureAssessment = async (data) =>
  await axios.post(SEIZURE_URL, data, config).then((response) => response.data);

export const postResilience = async (data) =>
  await axios.post(RESILIENCE_URL, data, config).then((response) => response.data);

<<<<<<< HEAD

=======
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
>>>>>>> 7521ddf691644cbb25585d3c23c52526784c367a
