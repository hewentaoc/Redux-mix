import {actionTypes} from '../action/action-creater'
const initState = 7;
export function numberReducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.increase:
            return state + 1;
        case actionTypes.decrease:
            return state - 1;
        default:
            return state;
    }
}