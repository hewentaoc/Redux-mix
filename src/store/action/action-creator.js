import * as actionType from './action-type';
export * from './createUserAction'
export const types = {
    asyncIncrease: Symbol('asyncIncrease'),
    asyncDecrease: Symbol('asyncDecrease')
}
//action创建函数
export function getIncreaseAction() {
    return {
        type:actionType.INCREASE
    }
}
export function getDecreaseAction() {
    return {
        type:actionType.DECREASE
    }
}

export function getChangeNumAction(num) {
    return {
        type:actionType.CHANGENUM,
        payload:num
    }
}

//异步函数

export function createAsyncIncreaseAction(){
    return {
        type:types.asyncIncrease
    }
}

export function createAsyncDecreaseAction(){
    return {
        type: types.asyncDecrease
    }
}