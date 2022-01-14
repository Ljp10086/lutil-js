import isArrayLike from "./_isArrayLike";

/**
* 获取元素给定返回值最大的哪一个
* @param {any} obj - 遍历的元素
* @param {Function} iteratee - 回调的函数
* @param {any} [context] - iteratee的this指向
* @return {any} 
*/
export default function max(obj, iteratee, context) {
  if (context) {
    iteratee = iteratee.bind(context);
  }

  let keys = !isArrayLike(obj) && Object.keys(obj),
      len = (keys || obj).length,
      computed, 
      result = -Infinity,
      lastComputed = -Infinity;

  for (let i = 0; i < len; i++) {
    const currentKey = keys ? keys[i] : i;
    computed = iteratee(obj[currentKey], i, obj);
    if (computed > lastComputed) {
      lastComputed = computed;
      result = obj[currentKey];
    }
  }

  return result;
}