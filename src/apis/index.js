import axios from 'axios';
import { RESILIENCE_TALLIES_URL, SEIZURE_URL } from '../config/urls';
import { RESILIENCE_URL } from '../config/urls';
import { REGISTER_USER_URL } from '../config/urls';
import { LOGIN_USER_URL } from '../config/urls';

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
