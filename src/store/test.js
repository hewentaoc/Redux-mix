import store from './index'
import {fetchStudent,fetchAllStudent} from './action/createUserAction';
import {INCREASE} from './action/action-type'
import {getDecreaseAction,getIncreaseAction} from './action/action-creator'
import {createAsyncDecreaseAction,createAsyncIncreaseAction} from './action/action-creator'
// store.dispatch(fetchStudent())

window.increase = function(){
    store.dispatch(getIncreaseAction());  
}

window.decrease = function(){
    store.dispatch(getDecreaseAction());
}

window.asyncIncrease = function(){
    store.dispatch(createAsyncIncreaseAction())
}
window.asyncDecrease = function(){
    store.dispatch(createAsyncDecreaseAction())
}

window.asyncGetAllStudent = function(){
    store.dispatch(fetchAllStudent())
}