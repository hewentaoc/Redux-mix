import {createStore,bindActionCreators,applyMiddleware} from 'redux';
import reducer from './reducer/index'
import * as actionCreator from './action/action-creator'
let store = createStore(reducer);
let dispatchObj = bindActionCreators(actionCreator,store.dispatch)
console.log(dispatchObj)
store.subscribe(()=>{
  console.log('state改变',store.getState())
})
console.log(store.getState())
store.dispatch(actionCreator.getIncreaseAction())
dispatchObj.getIncreaseAction();
console.log(store.getState())
