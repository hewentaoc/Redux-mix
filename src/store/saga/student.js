import { delay,takeEvery,put,call,apply} from 'redux-saga/effects'
import {fetchAllStudent,GETCUSER} from '../action/createUserAction';
export default function* studentTask(){
    yield takeEvery(GETCUSER,listenAction);
    console.log(555,'listenUserAction')
}
const appkey = "demo13_1545210570249";
/**
 * 获取所有学生
 */
export async function getAllStudents() {
    return await fetch("/api/student/findAll?appkey=" + appkey)
        .then(resp => resp.json()).then(resp => resp.data);
}

export async function getStudents(page = 1, limit = 10) {
    return await fetch(`/api/student/findByPage?appkey=${appkey}&page=${page}&size=${limit}`)
        .then(resp => resp.json()).then(resp => resp.data);
}

// function* listenAction(){
//    let value = yield getAllStudents();
//    console.log(value)
// }
// function* listenAction(){
//     let value = yield call(getAllStudents,1,2,3);
//     console.log(333,value)
//  }
    function* listenAction(){
        let value = yield apply(null,getAllStudents,[1,2,3]);
        console.log(777,value)
    }