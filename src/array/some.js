import each from "./each";
import isArrayLike from "./_isArrayLike";

/**
* 如果list中的所有元素都通过predicate的真值检测就返回true.
* @param {any} obj - 遍历的元素
* @param {Function} predicate - 检验函数
* @param {any} [context] - predicate的this指向
* @return {boolean} 
*/
export default function some(obj, predicate, context) {
  if (context) {
    predicate = predicate.bind(context);
  }

  let keys = !isArrayLike(obj) && Object.keys(obj), 
      length = (keys || obj).length;

  for (let i = 0; i < length; i++) {
    const currentKey = keys ? keys[i] : i;
    if (predicate(obj[currentKey], i, obj)) {
      return true;
    }
  }

  return false;
}