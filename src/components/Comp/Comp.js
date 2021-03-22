import React from 'react'
import './index.css'
// import {connect} from 'react-redux'
import {connect} from '../../react-redux'
import {createIncreaseAction,createDecreaseAction} from '../../store-learn/action/action-creater'
function Comp(props) {
    return (
        <div className='comp'>
            <h2>{props.number}</h2>
            <button onClick={props.onIncrease}>Increase</button>
            <button onClick={props.onDecrease}>Decrease</button>
        </div>
    )
}

function mapStateToProps(state){
    return {
        number:state.numberReducer
    }
}

function mapDispatchToProps(dispatch){
    return {
        onIncrease:()=>{
            console.log('increase')
            dispatch(createIncreaseAction());
        },
        onDecrease:()=>{
            console.log('decrease')
            dispatch(createDecreaseAction());
        } 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Comp);
// export default Comp;

