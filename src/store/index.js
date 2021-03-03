// import {createStore,bindActionCreators} from 'redux';
import * as actionCreator from './action/action-creator'
import reducer from './reducer/index'
import {createStore,bindActionCreators} from '../redux/index'

console.log(99,actionCreator)
// action
// reducer
// store 
 

const store = createStore(reducer);
const {dispatch} = store;
const dispatchObj = bindActionCreators(actionCreator,dispatch)
console.log(111,actionCreator)
console.log(222,dispatchObj)
console.log(store.getState())
dispatchObj.getChangeNumAction(4);
console.log(store.getState())
dispatchObj.getIncreaseAction();
console.log(store.getState())
dispatchObj.getAddUserAction({
    id:2,
    name:'sll',
    age:'male'
})
console.log(store.getState())
dispatchObj.getUpdateUserAction({
    age:'female'
},2)
console.log(store.getState())
dispatchObj.getDeleteUserAction(1)
console.log(store.getState())







