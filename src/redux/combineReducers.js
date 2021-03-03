
export default function combineReducers(funcObj){
    console.log('self')
    if(typeof funcObj != 'object'){
        throw new Error('funcObj must be a function');
    }
    return function(state = {},action){
        let newState = {};
        for(let prop in funcObj){
            typeof funcObj[prop] == 'function' &&
            (newState[prop] = funcObj[prop](state[prop],action))
        }
        return newState;
    }
}
