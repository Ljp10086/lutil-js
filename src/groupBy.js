import isArrayLike from "./_isArrayLike";

/**
* 分组
* @param {any} obj - 遍历的元素
* @param {Function} iteratee - 回调的函数
* @param {any} [context] - iteratee的this指向
* @return {Array} 
*/
export default function groupBy(obj, iteratee, context) {
  if (context) {
    iteratee = iteratee.bind(context);
  }

  let keys = !isArrayLike(obj) && Object.keys(obj),
      len = (keys || obj).length, 
      result = {};
  
  for (let i = 0; i < len; i++) {
    const currentKey = keys ? keys[i] : i;
    const key = iteratee(obj[currentKey], i, obj);
    if (result[key]) {
      result[key].push(obj[currentKey]);
    } else {
      result[key] = [obj[currentKey]];
    }
  }

  return result;
}