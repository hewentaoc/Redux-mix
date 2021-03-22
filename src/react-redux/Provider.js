import React, { Component } from 'react'

export let ctx = React.createContext();
export default class Provider extends Component {
    render() {
        return (
            <ctx.Provider value={this.props.store}>
              {this.props.children}
            </ctx.Provider>
        )
    }
}


function Provider2(props){
    return (
        <ctx.Provider value={props.store}>
          {props.children}
        </ctx.Provider>
    )
}