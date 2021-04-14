import React from 'react'
import { Provider } from "react-redux"
import store from "./store-learn/index"
import { Route, Switch,Link } from "react-router-dom"
// import { ConnectedRouter } from "connected-react-router"
import {ConnectedRouter} from './connected-react-router/index'//self
import history from "./store-learn/history"
export default function App() {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                {/* <Switch> */}
                    <Route path="/login" component={Login} />
                    <Route path="/" component={Admin} />
                {/* </Switch> */}
            </ConnectedRouter>
        </Provider>
    )
}

function Login(params) {
  return (
    <h1>
      Login页面
     <Link to='/a/b/c'>abc</Link>
    </h1>
  )
}
function Admin(props) {
  return (
    <h1>
      ABC页面
      <Link to='/login'>login</Link>
      <button onClick={()=>{
        props.history.push('/ccc')
      }}>ccc</button>
    </h1>
  )
}
