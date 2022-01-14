import isArrayLike from "./_isArrayLike";
import findIndex from "./_findIndex";
import findKey from "./_findKey";

/**
* 寻找数组中的元素
* @param {any} obj - 遍历的元素
* @param {Function} predicate - 回调的函数
* @param {any} [context] - iteratee的this指向
* @return {any} 
*/
function find(obj, predicate, context) {
  const keyFinder = isArrayLike(obj) ? findIndex : findKey;
  const key = keyFinder(obj, predicate, context);
  if (key !== void 0 && key !== -1) return obj[key];
}

export default find;
