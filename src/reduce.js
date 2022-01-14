import isArrayLike from "./_isArrayLike";

/**
* 功能：归并
* @param {any} obj - 遍历的元素
* @param {Function} iteratee - 回调的函数
* @param {any} memo - reduce函数的初始值
* @param {any} [context] - iteratee的this指向
* @return {any} 
*/
function reduce(obj, iteratee, memo, context) {
  if (context) iteratee = iteratee.bind(context);
  let keys = !isArrayLike(obj) && Object.keys(obj);
  let index = 0;
  let length = (keys || obj).length;

  if (!memo) {
    memo = obj[keys ? keys[index] : index];
    index++;
  }

  for (; index < length; index++) {
    const currentKey = keys ? keys[index] : index;
    memo = iteratee(memo, obj[currentKey]);
  }

  return memo;
}

export default reduce;