function isPlainObject(obj){
    // if/
    if(typeof obj != 'object'){
        return false;
    }
    return Object.getPrototypeOf(obj) === Object.prototype;
}

/**
 * 
 * @param {*} reducer 
 * @param {*} state 
 */
export default function createStore(reducer,state,midware){
    if(typeof reducer != 'function'){
        throw new Error('reducer muse be a function!')
    } 
    // if(typeof state == 'function') {
    //     midware = state;
    //     state = undefined;
    // }

    // if(typeof midware == 'function') {
    //     return midware(createStore)(reducer, state)
    // }
    let storeState = state;
    let funcStore = [];
    storeState = reducer(storeState,{

    });
    
    let dispatch = function(actions){
        if(!isPlainObject(actions)){
            throw new Error('actions must be a plain object');
        }
        storeState = reducer(storeState,actions);
        funcStore.forEach((func)=>{
            func();
        })
        return actions;
    }   

    let getState = function(){
        return storeState;
    } 
    
    let subscribe = function(func){
        if(typeof func == 'function'){
           funcStore.push(func);
        }else {
            throw new Error("func must be a function");
        }
        return function(){
            let index = funcStore.indexOf(func);
            if(index > 0){
                funcStore.splice(index,1);  
            }else{
                return ;
            }
        }
    }
    return {
        dispatch,
        getState,
        subscribe,
    }
}
