export const LOCATION_CHANGE = '@@router/LOCATION_CHANGE' 
export default function connectRouter(history) {
    let ininState = {
        location:history.location,
        action:history.action
    }
    return function(state = ininState,action) {//reducer
        switch (action.type) {
            case LOCATION_CHANGE:
                return {
                    ...action.payload
                }
            default:
                return state;
        }
    }
}