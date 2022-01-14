/**
* 创建一个函数, 只有在运行了 count 次之后才有效果. 在处理同组异步请求返回结果时, 如果你要确保同组里所有异步请求完成之后才 执行这个函数, 这将非常有用。
* @param {number} count - 执行次数
* @param {any} func - 需要执行的函数
* @return {Function}
*/
export default function after(count, func) {
  return function () {
    if (--count < 1) {
      return func.apply(this, arguments);
    }
  }
}