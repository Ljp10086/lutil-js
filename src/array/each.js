/**
* 遍历传入的元素
* @param {any} obj - 遍历的元素
* @param {Function} iteratee - 回调的函数
* @param {any} [context] - iteratee的this指向
* @return {void} 
*/
export default function each(obj, iteratee, context) {
  if (context) {
    iteratee = iteratee.bind(context);
  }

  if (Array.isArray(obj)) {
    for (let index = 0; index < obj.length; index++) {
      iteratee(obj[index], index, obj);
    }
  } else {
    const keys = Object.keys(obj);
    for (let index = 0; index < keys.length; index++) {
      iteratee(obj[index], index, obj);
    }
  }
}