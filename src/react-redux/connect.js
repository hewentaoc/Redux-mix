import React, { Component,PureComponent,useContext,useState,useEffect,useMemo} from 'react'
import {ctx} from './Provider'
/**
 * 类组件
 * @param {*} mapStateToProps 
 * @param {*} mapDispatchToProps 
 */
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

/**
 * 函数组件
 * @param {}} mapStateToProps 
 * @param {*} mapDispatchToProps 
 */
export default function connect2(mapStateToProps,mapDispatchToProps){
    return function Hoc(Comp){
        return function CompWrap(){
            let store = useContext(ctx);
            const [state, setstate] = useState(mapStateToProps(store.getState()));
            const handEvent = useMemo(()=>{//用于保持一些比较稳定的数据，通常用于性能优化
                return mapDispatchToProps(store.dispatch);
            },[])
            useEffect(() => {
                store.subscribe(()=>{
                    setstate(mapStateToProps(store.getState()));
                })
            }, [])
            return <Comp {...state} {...handEvent}/>
        }
    }   
}