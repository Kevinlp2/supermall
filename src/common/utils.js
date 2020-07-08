//防抖方法 参数一：调用函数 参数二：等待时间
export function  debounce(func,delay){
  let timer=null;
  return function (...args) {
    if(timer) clearTimeout(timer)
    timer = setTimeout(()=>{
      func.apply(args)
    },delay)
  }
}
