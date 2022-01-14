import isArrayLike from "./_isArrayLike";

/**
* 过滤数组
* @param {any} obj - 遍历的元素
* @param {Function} predicate - 回调的函数
* @param {any} [context] - iteratee的this指向
* @return {Array} 
*/
function filter(obj, predicate, context) {
  let result = [],
      keys = !isArrayLike(obj) && Object.keys(obj),
      len = (keys || obj).length;

  if (context) {
    predicate = predicate.bind(context);
  }

  for (let i = 0; i < len; i++) {
    const currentKey = keys ? keys[i] : i;
    if (predicate(obj[currentKey], i, obj)) result.push(obj[currentKey]);
  }

  return result;
}

export default filter;