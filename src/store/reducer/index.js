import {numberReducer} from './numberReducer'
import {userReducer} from './userReducer'
// import {combineReducers} from 'redux'
import {combineReducers} from '../../redux/index'

// export default function reducer(state,action){
//     let resultResult = {
//         numberReducer:numberReducer(state.numberReducer,action),
//         userReducer:userReducer(state.userReducer,action)
//     }
//     return resultResult;
// }

// console.log('合并reducer')
export default combineReducers({
    numberReducer,
    userReducer
})