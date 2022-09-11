import { useSelector } from 'react-redux';

export const getSeizureAssessmentData = () =>
  useSelector((state) => state.seizure.seizureAssessment);

export const getUpdatedSeizureAssessmentData = () =>
  useSelector((state) => state.seizure.collectedAssessment);
