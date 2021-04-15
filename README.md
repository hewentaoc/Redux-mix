
### 2. Redux的实现

　　　 **### 需要解决的问题**

> 1. 如何在全局使用Redux中的state
> 2. 如何实现state的动态更新
> 3. 如何触发state的更新(dispatch)
> 4. redux中如何进行异步操作

Redux的组成解构

let store =  ***createStore***(reducer,10,***applyMiddleware***());

```js
let action = {
    type:'',
    payload:''
}

function reducer(state,action){
    switch(action.type){
        case 'add':
            return state + action.payload;
        default:
            return state;
    }
}

let store = createStore(reducer);
store.dispatch(action);

function dispath(aciton){
   state = reducer(state,action);
}

```

![](assets/2019-08-20-14-23-05.png)

### (1) 如何在全局使用Redux中的state

在React中不存在混入到React全局的方法，需要借助执行期上下文context

```react

let ctx = React.createContext();//执行期上下文
//在Provider组件内的子组件都可以拿到执行上下文的值
 <ctx.Provider value={store}>
     {this.props.children}
 </ctx.Provider>
//Consumer拿到store中的值
<ctx.Consumer>
	(store)=>{
        
    }
</ctx.Consumer>
上下文提供者（Context.Provider）中的value属性发生变化(Object.is比较)，会导致该上下文提供的所有后代元素全部重新渲染，无论该子元素是否有优化（无论shouldComponentUpdate函数返回什么结果）
```

(2)  如何实现state的动态更新

```js
//createStore()提供subscribe监听函数，在state值变化的时候会触发函数,
//this.setState()使组件的更新

function connect(mapStateToProps,mapDispatchToProps){
    return function Hoc(Comp) {
        //对于该组件，只有它需要的数据发生变化时才会重新渲染
        return class CompWrap extends PureComponent {
            static contextType = ctx;//得到上下文数据
            constructor(props,context){
                super(props);
                let {dispatch,getState,subscribe} = context;//得到执行期上下文中的仓库
                this.state = mapStateToProps(getState());//仓库中值的初始化
                subscribe(()=>{//监听仓库中值的改变
                    this.setState(mapStateToProps(getState()))
                })
                this.eventHandles = mapDispatchToProps(dispatch);
            }
            render() {
                return (
                    <Comp {...this.state} {...this.eventHandles}/> 
                )
            }
        }
    }
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
```



### (3). 如何触发state的更新(dispatch)

通过封装的mapDispatchToProps,将dispatch方法映射到组件中

### (4). redux中如何进行异步操作

通过在中间件对dispatch方法进行修饰,然后处理完异步操作后，继续dispatch改变state

```js
//(1)中间件redux-thunk
export default function thunk(store){
    return function(next){
        return function(action){
            if(typeof action == 'function') {
                action(store.dispatch,store.getState)
            }else{
                next(action);
            }   
        }
    }
}
export function fetchStudent(){
    return async function(dispatch,getState){
        let msg = await getAllStudents();
        dispatch(getAddUserAction(msg))
    }
}
store.dispatch(fetchStudent())
```

```js
//(2) 中间件redux-promise
export default ({ dispatch }) => next => action => {
    if (!isFSA(action)) {
        //如果不是一个标准的action
        //如果action是一个promise，则将其resolve的值dispatch，否则，不做任何处理，交给下一个中间件
        return isPromise(action) ? action.then(dispatch) : next(action);
    }
    return isPromise(action.payload) ?
        action.payload
            .then(payload => dispatch({ ...action, payload }))
            .catch(error => dispatch({ ...action, payload: error, error: true })) :
        next(action)
}
export function fetchStudents() {
    return new Promise(resolve => {
        setTimeout(() => {
            const action = setStudentsAndTotal([{ id: 1, name: "aaa" }, { id: 2, name: "bbb" }], 2);
            resolve(action)
        }, 3000);
    })
}
store.dispatch(fetchStudent())
```

```js
//(3) saga
function* fetchStudents() {
    //设置为正在加载中
    yield put(setIsLoading(true))
    const condition = yield select(state => state.students.condition); //select指令：用于得到当前仓库中的数据
    //使用call指令，按照当前仓库中的条件
    const resp = yield call(searchStudents, condition);//触发异步事件
    yield put(setStudentsAndTotal(resp.datas, resp.cont))//put相当于dispatch
    yield put(setIsLoading(false));
}

export default function* () {
    yield takeEvery(actionTypes.fetchStudents, fetchStudents);
    console.log("正在监听 fetchStudents")
}

```


