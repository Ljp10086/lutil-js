import isArrayLike from "./_isArrayLike";
/**
* 遍历list数组如果predicate返回值有一个为false则返回false，否则返回true。
* @param {any} obj - 遍历的元素
* @param {Function} predicate - 回调的函数
* @param {any} [context] - iteratee的this指向
* @return {boolean} 
*/
function every(obj, predicate, context) {
  if (context) {
    predicate = predicate.bind(context);
  }

  let keys = !isArrayLike(obj) && Object.keys(obj), 
      length = (keys || obj).length;
  for (let i = 0; i < length; i++) {
    const currentKey = keys ? keys[i] : i;
    if (!predicate(obj[currentKey], i, obj)) {
      return false;
    }    
  }
  return true;
}

export default every;
