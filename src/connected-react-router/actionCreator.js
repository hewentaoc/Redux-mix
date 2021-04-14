export function createLoctionAction(action,location){
    return {
        type:'@@router/LOCATION_CHANGE',
        payload:{
            action,
            location
        }
    }
}

export function push(args) {
    return {
        type:"@@router/CALL_HISTORY_METHOD",
        payload:{
            method: "push",
            args
        }
    }
}