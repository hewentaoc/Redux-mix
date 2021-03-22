import {take,all, takeEvery, delay, put, fork, cancel} from 'redux-saga/effects'
import {INCREASE} from '../action/action-type'
import studentTask from './student'
import increaseTask from './increase'
import decreaseTask from './decrease'
import {createAsyncIncreaseAction,types,getIncreaseAction, getDecreaseAction} from '../action/action-creator'
// export default function *task(){
//       let value = yield all([increaseTask(),studentTask(),decreaseTask()])
//       console.log('执行完毕',value)
//  }

function* increaseT() {
    yield delay(2000);
    yield put(getIncreaseAction())
    console.log('触发了increaseT')
}

function * decreaseT(){
    yield delay(2000);
    yield put(getDecreaseAction());
    console.log('触发了decreaseT')
}
var taskStore;
function* task1(){
  while (true) {
    yield take(types.asyncIncrease);
    if(taskStore){
        yield cancel(taskStore)
    }
    taskStore = yield　fork(function *(){
        while (true) {
            yield delay(2000);
            yield put(getIncreaseAction());
            console.log('task一次结束')
        }
    })
    console.log('我被执行吗')
  }
}

export default function *task(){
    yield fork(task1)
    console.log('没有阻塞吗')
}
