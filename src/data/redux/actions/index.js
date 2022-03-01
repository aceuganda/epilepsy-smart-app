let user_id = 1;
let timeStamp = new Date;

export const addResponse = (feel, engage, seizure) =>({
    type:'ADD_RESPONSE',
    user_id: user_id,
    feel,
    engage,
    seizure,
    timeStamp: timeStamp.getUTCDate()
})