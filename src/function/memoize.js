/**
* Memoizes方法可以缓存某函数的计算结果。对于耗时较长的计算是很有帮助的。
* @param {Function} func - 需要执行的函数
* @return {Function} 
*/
export default function memoize(func) {
  const memoize = function(key) {
    const cache = memoize.cache;
    const address = key;
    if (!Object.prototype.hasOwnProperty.call(cache, address)) {
      cache[address] = func.apply(this, arguments);
    }
    return cache[address];
  }
  memoize.cache = {};
  return memoize;
}