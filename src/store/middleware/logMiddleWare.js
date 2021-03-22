export function logMiddleWare(store){
    return function(next){
        return function(action){
            // console.log(next)
            console.log('log1',store.getState(),action)
            next(action);
            console.log('log2',store.getState(),action)
            console.log(' ')
        }
    }
}