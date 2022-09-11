import {
  SET_SEIZURE_ASSESSMENT_SUCCESS,
  SET_SEIZURE_ASSESSMENT_FAILURE,
  COLLECT_SEIZURE_ASSESSMENT
} from './actions';
import { postSeizureAssessment } from '../../../apis';

export const setSeizureAssessment = (data) => async (dispatch) => {
  console.log('Final Data:', data);
  await postSeizureAssessment(data)
    .then((res) => {
      dispatch({
        type: SET_SEIZURE_ASSESSMENT_SUCCESS,
        payload: data && res
      });
    })
    .catch((error) => {
      dispatch({
        type: SET_SEIZURE_ASSESSMENT_FAILURE,
        payload: error && error.message
      });
    });
};

export const updateSeizureAssessment = (previousData, updatedData) => (dispatch, getState) => {
  console.log('Previous Data:', previousData, 'Updated Data:', updatedData);
  const updatedDataState = getState().seizure.collectedAssessment;
  console.log('Update Data:', updatedDataState);
  dispatch({
    type: COLLECT_SEIZURE_ASSESSMENT,
    payload: previousData
  });
};
