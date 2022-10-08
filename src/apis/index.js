import axios from 'axios';
import { SEIZURE_URL } from '../config/urls';
import { RESILIENCE_URL } from '../config/urls';

export const postSeizureAssessment = async (data) =>
  await axios.post(SEIZURE_URL, data).then((response) => response.data);

export const postResilience = async (data) =>
  await axios.post(RESILIENCE_URL, data).then((response) => response.data);
