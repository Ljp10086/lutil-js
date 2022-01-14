/**
* 绑定函数 function 到对象 object 上, 也就是无论何时调用函数, 函数里的 this 都指向这个 object.任意可选参数 arguments 可以传递给函数 function , 可以填充函数所需要的参数。
* @param {Function} func - 需要执行的函数
* @param {any} [context] - 绑定的上下文
* @return {Function}
*/
function bind(func, context, ...args) {
  var fNOP = function () {};

  const fBound = function (...innerArgs) {
    const result = 
      func.apply(func instanceof fNOP ? this : context, [...args, ...innerArgs]);
    return result;
  }

  fNOP.prototype = func.prototype;
  fBound.prototype = new fNOP();
  console.log('bind');
  return fBound;
}

export default bind;
