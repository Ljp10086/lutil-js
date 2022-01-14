/**
* 功能：防抖
* @param {Function} fn - 需要执行的函数
* @param {number} [delay] - 延迟执行时间，可选，默认500毫秒
* @param {boolean} [immediate] - 是否立即执行函数，可选，默认false
* @return {Function} 
*/
function debounce(fn, delay = 500, immediate = false) {
  let timer;

  const debounced = function (...args) {
    let result;
    if (timer) {
      clearTimeout(timer);
    }

    if (immediate) {
       // 如果已经执行过，不再执行
       const callNow = !timer;
       timer = setTimeout(() => {
        timer = null;
       }, delay)
       if (callNow) result = fn.apply(this, args)
    }else {
      timer = setTimeout(() => {
        fn.apply(this, args);
        timer = null;
      }, delay);
    }

    return result;
  }

  debounced.cancel = () => {
    clearTimeout(timer);
    timer = null;
  }

  return debounced;
}

export default debounce;