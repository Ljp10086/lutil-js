import isArrayLike from "./_isArrayLike";

/**
* 如果obj包含指定的value则返回true。
* @param {any} obj - 遍历的元素
* @param {any} value - 寻找的元素
* @param {number} [fromIndex] - iteratee的this指向
* @return {boolean} 
*/
function contains(obj, value, fromIndex) {
  if (!isArrayLike(obj)) obj = Object.values(obj); 
  return [...obj].indexOf(value) > -1;
}

export default contains;