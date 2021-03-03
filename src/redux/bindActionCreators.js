

export default function bindActionCreators(actionCreator,dispatch){
    if(typeof actionCreator == 'object'){
        let res = {};
        for(let prop in actionCreator){
            typeof actionCreator[prop] == 'function' && (res[prop] = function(){
                dispatch(actionCreator[prop](...arguments))
            })
        }
        return res;
    }
    if(typeof actionCreator == 'function'){
        return function(){
            
        }
    }
    throw new Error('actionCreator must be object or function!');
}

