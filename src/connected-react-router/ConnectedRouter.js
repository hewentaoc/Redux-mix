import React, { Component } from 'react'
import {Router} from 'react-router-dom'
import {ReactReduxContext} from 'react-redux'
import {createLoctionAction} from './actionCreator'
export default class ConnectedRouter extends Component {
    static contextType = ReactReduxContext;
    componentDidMount() {
        this.props.history.listen((location,action)=>{//监听到触发中间件
            let {dispatch} = this.context.store;
            let actionType= createLoctionAction(action,location)
            console.log(555,actionType)
            dispatch(actionType)
        })
    }
    render() {
        return (
            <Router history={this.props.history}>
                {this.props.children}
            </Router>
        )
    }
}
