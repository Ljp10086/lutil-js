import each from "./each";
import isArrayLike from "./_isArrayLike";

/**
* 遍历数组并组装iteratee函数的返回值并返回数组
* @param {Array} obj - 遍历的元素
* @param {Function} iteratee - 回调的函数
* @param {any} [context] - iteratee的this指向
* @return {Array} 
*/
export default function map(obj, iteratee, context) {
  if (context) {
    iteratee = iteratee.bind(context);
  }

  let keys = isArrayLike(obj) || Object.keys(obj),
      length = (keys || obj).length,
      results = Array(length);
  
  for (let i = 0; i < length; i++) {
    const current = keys ? keys[i] : index;
    results[i] = iteratee(obj[current], i, obj);
  }

  return results;
}