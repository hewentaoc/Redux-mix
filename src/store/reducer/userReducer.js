import * as userAction from '../action/createUserAction';
const initState = [{
    id:1,
    name:'hwt',
    age:'male'
}]
export  function userReducer(state = initState,action){
    let {type,payload} = action;
    switch (type) {
        case userAction.ADDUSER:
            return [...state,payload];
        case userAction.DELETEUSER:
            return state.filter((item)=>item.id !== payload);
        case userAction.UPDATEUSER:
            return state.map((item)=> item.id === payload.id ? {...item,...payload} : item)
        default:
            return state;
    }
}