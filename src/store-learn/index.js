import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger';
import reducer from './reducer'
import * as actionCreater from './action/action-creater'
console.log(actionCreater)
let store = createStore(reducer,applyMiddleware(logger));
console.log(store.getState())
export default store;