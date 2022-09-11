import { useSeizureAssessmentData } from "../data/reduxStore/Seizure/selector";

export const setLocalStorage = () =>{
    localStorage.setItem('S-Responses', JSON.stringify(seizureData));
}