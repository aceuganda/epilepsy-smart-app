import { seizureData } from "../data/seizureData";

export const setLocalStorage = () =>{
    localStorage.setItem('S-Responses', JSON.stringify(seizureData));
}