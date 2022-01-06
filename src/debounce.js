function debounce(fn, delay, immediate) {
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
