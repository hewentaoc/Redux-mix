export const ADDUSER = Symbol('adduser');
export const DELETEUSER = Symbol('deleteuser');
export const UPDATEUSER = Symbol('updateuser');
export const GETCUSER = Symbol('getuser');
export function getAddUserAction(msg){
    return {
        type:ADDUSER,
        payload:msg
    }
}

export function getDeleteUserAction(id){
    return {
        type:DELETEUSER,
        payload:id
    }
}

export function getUpdateUserAction(newMsg = {},id){
    return {
        type:UPDATEUSER,
        payload :{
            ...newMsg,
            id
        }
    }
}
export function fetchAllStudent(){
    return {
        type:GETCUSER
    }
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

export function fetchStudent(){
    return async function(dispatch,getState){
        let msg = await getAllStudents();
        dispatch(getAddUserAction(msg))
    }
}

