// import {createStore,bindActionCreators,applyMiddleware} from 'redux';
import * as actionCreator from './action/action-creator'
// import  {logMiddleWare} from './middleware'
import {fetchStudent} from './action/createUserAction'
import reducer from './reducer/index'
import {createStore,bindActionCreators,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import createSageMiddleWare from 'redux-saga'
import task from './saga/index'
import thunk from 'redux-thunk'
// import thunk2 from '../redux/redux-thunk'
// action
// reducer
// store 
// applyMiddleware，应用中间件
const store = createStore(reducer,applyMiddleware(thunk,logger));
store.dispatch(fetchStudent())
// let sagaMid = createSageMiddleWare();//创建sage中间件
// const store = createStore(reducer,applyMiddleware(sagaMid,logger));
// sagaMid.run(task)//启动saga任务
// export default store;









// const store = applyMiddleware(logMiddleWare)(createStore)(reducer);
// const {dispatch} = store;
// const dispatchObj = bindActionCreators(actionCreator,dispatch)
// console.log(store.getState())
// dispatchObj.getChangeNumAction(4);
// console.log(store.getState())
// console.log(store.getState())
// dispatchObj.getIncreaseAction();
// console.log(store.getState())
// dispatchObj.getAddUserAction({
//     id:2,
//     name:'sll',
//     age:'male'
// })
// console.log(store.getState())
// dispatchObj.getUpdateUserAction({
//     age:'female'
// },2)
// console.log(store.getState())
// dispatchObj.getDeleteUserAction(1)
// console.log(store.getState())







