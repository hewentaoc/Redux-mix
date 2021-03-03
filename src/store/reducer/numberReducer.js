import * as actionType from '../action/action-type'
const initState = 10;
export  function numberReducer(state = initState,action) {
    let {type,payload} = action;
    switch (type) {
        case actionType.INCREASE:
            return state + 1;
        case actionType.DECREASE:
            return state - 1;
        case actionType.CHANGENUM:
            return payload;
        default:
            return state;
    }
}