import * as actionType from './action-type';
export * from './createUserAction'
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