import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger';
import reducer from './reducer'
import * as actionCreater from './action/action-creater'
import {composeWithDevTools} from 'redux-devtools-extension'
// import { routerMiddleware } from "connected-react-router"
import {routerMiddleware} from '../connected-react-router/index'
import history from './history'
const routerMid = routerMiddleware(history)
console.log(actionCreater)
let store = createStore(reducer,composeWithDevTools(applyMiddleware(routerMid,logger)));
console.log(store.getState())
export default store;