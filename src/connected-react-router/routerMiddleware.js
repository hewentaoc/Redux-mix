const routerMiddleware = history=>store=>next=>action=>{
   if(action === "@@router/CALL_HISTORY_METHOD"){
      let {method,arg} = action.payload;
      history[method](...arg)
   }else{
      next(action)
   }
}
export default routerMiddleware;