export const ADDUSER = Symbol('adduser');
export const DELETEUSER = Symbol('deleteuser');
export const UPDATEUSER = Symbol('updateuser');

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