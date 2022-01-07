/**
* 功能：节流
* @param {Function} fn - 需要执行的函数
* @param {number} [delay] - 延迟执行时间，可选，默认500毫秒
* @module throttle
* @return {Function} 
*/
function throttle(fun, delay = 500) {
  let previous = 0;

  return (...args) => {
    const now = Date.now();
    if (now - previous > delay) {
      fun.apply(this, args);
    }    
  }
}