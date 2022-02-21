export default function (state = null, action) {
    switch (action.type) {
        case 'ADD_RESPONSE':
            return [
                {
                    user_id: action.user_id,
                    feel: action.feel,
                    engage: action.engage,
                    seizure: action.seizure,
                    timeStamp: action.timeStamp
                },
                console.log('Dispatched form data:', action.user_id, action.feel, action.engage, action.seizure, action.timeStamp)
            ]
        default:
            return state;
    }
}