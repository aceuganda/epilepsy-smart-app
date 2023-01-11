import axios from 'axios';
import { SEIZURE_URL } from '../config/urls';
import { RESILIENCE_URL } from '../config/urls';
import { REGISTER_USER_URL } from '../config/urls';
import { LOGIN_USER_URL } from '../config/urls';

const config = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${JSON.parse(localStorage.getItem('userToken'))}`
  }
};

export const postSeizureAssessment = async (data) =>
  await axios.post(SEIZURE_URL, data, config).then((response) => response.data);

export const postResilience = async (data) =>
  await axios.post(RESILIENCE_URL, data, config).then((response) => response.data);


