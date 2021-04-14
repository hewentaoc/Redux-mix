# ConnectedRouter -> 通过listen监听页面变化 -> 触发action数据更新
# push -> 触发action -> 触发dispath -> 触发中间件　－> 渲染页面　-> 触发listen
# push手写没什么意义，除非想在中间做点自己的事件