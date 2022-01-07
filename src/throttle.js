/**
* 功能：节流
* @param {Function} fn - 需要执行的函数
* @param {number} [delay] - 延迟执行时间，可选，默认500毫秒
* @param {Object} opts - 需要执行的函数
* @module throttle
* @return {Function} 
*/
// 第四版
function throttle(func, wait, options = {}) {
  let previous = 0;
  let timer = null;
  return function () {
    const args = arguments;
    const context = this;
    const now = Date.now();
    console.log(previous, !previous);
    if (!previous && !options.leading) previous = now;
    const remaining = wait - (now - previous);
    if (remaining <= 0) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      previous = now;
      func.apply(context, args);
    } else if (!timer && options.trailing !== false) {
      console.log(123123);
      timer = setTimeout(() => {
        timer = null;
        previous = options.leading === false ? 0 : new Date().getTime();
        func.apply(context, args);
      }, remaining);
    }

  }
}

export default throttle;
