import axios from 'axios';
import { SEIZURE_URL, RESILIENCE_URL, MEDICINES_URL } from '../config/urls';

const config = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('userToken')}`
  }
};

export const postSeizureAssessment = async (data) =>
  await axios.post(SEIZURE_URL, data, config).then((response) => response.data);

export const postResilience = async (data) =>
  await axios.post(RESILIENCE_URL, data, config).then((response) => response.data);

export const postMedicine = async (data) =>
  await axios.post(MEDICINES_URL, data, config).then((response) => response.data);
