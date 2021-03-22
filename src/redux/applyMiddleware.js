
export default function applyMiddleware(...middleWareArgs){
    return function(createStore){
        return function(reducer,defaultState){
            let returnStore = createStore(reducer,defaultState)
            let next = returnStore.dispatch;
            let store = {
                dispatch:returnStore.dispatch,
                getState:returnStore.getState
            }
            for(let i = middleWareArgs.length -1 ; i >= 0 ; i--){
                if(typeof middleWareArgs[i] == 'function'){
                    next = middleWareArgs[i](store)(next);
                }else{
                    throw new Error('middleWare must be a function!')
                }
            }
            return {
                ...returnStore,
                dispatch:next
            };  
        }
    }
}
