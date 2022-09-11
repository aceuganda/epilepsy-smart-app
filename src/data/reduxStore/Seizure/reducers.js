import {
  SET_SEIZURE_ASSESSMENT_SUCCESS,
  SET_SEIZURE_ASSESSMENT_FAILURE,
  COLLECT_SEIZURE_ASSESSMENT
} from './actions';

const initialState = {
  seizureAssessment: {},
  collectedAssessment: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_SEIZURE_ASSESSMENT_SUCCESS:
      return [
        { ...state, seizureAssessment: action.payload },
        console.log('Payload:', state.seizureAssessment)
      ];
    case COLLECT_SEIZURE_ASSESSMENT:
      return [
        {
          ...state,
          collectedAssessment: action.payload
        },
        console.log('Collected:', action.payload, 'State:', state.collectedAssessment)
      ];
    case SET_SEIZURE_ASSESSMENT_FAILURE:
      return action.payload;
    default:
      return state;
  }
}
