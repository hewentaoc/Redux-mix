
import {take,all, delay,takeEvery,put} from 'redux-saga/effects'
import {INCREASE,DECREASE} from '../action/action-type'
import {getDecreaseAction,types} from '../action/action-creator'
export default function* decrease(){
    yield takeEvery(types.asyncDecrease,listenAction);
    console.log(46,'decrease')
}

function* listenAction(){
    yield delay(2000)
    yield put(getDecreaseAction())
    console.log('我被触发了')
}