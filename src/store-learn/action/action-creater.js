export const actionTypes = {
    increase:'INCREASE',
    decrease:'DECREASE'
}


export function createIncreaseAction(){
    return {
        type:actionTypes.increase
    }
}

export function createDecreaseAction(){
    return {
        type:actionTypes.decrease
    }
}