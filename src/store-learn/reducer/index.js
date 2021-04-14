import {numberReducer} from './number'
import {combineReducers} from 'redux'
// import { connectRouter } from "connected-react-router"
import {connectRouter} from '../../connected-react-router/index'
import history from "../history"

export default combineReducers({
    numberReducer,
    //添加路由状态
    router: connectRouter(history)
})