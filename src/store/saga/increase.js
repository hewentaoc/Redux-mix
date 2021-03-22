import {take,all,delay} from 'redux-saga/effects'
import {INCREASE} from '../action/action-type'
export default function* increase(){
     yield delay(2000)
     let value = yield take(INCREASE)
     console.log('999',value)
}


