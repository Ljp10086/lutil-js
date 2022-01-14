## Functions

<dl>
<dt><a href="#find">find(obj, predicate, [context])</a> ⇒ <code>any</code></dt>
<dd><p>寻找数组中的元素</p>
</dd>
<dt><a href="#contains">contains(obj, value, [fromIndex])</a> ⇒ <code>boolean</code></dt>
<dd><p>如果obj包含指定的value则返回true。</p>
</dd>
<dt><a href="#debounce">debounce(fn, [delay], [immediate])</a> ⇒ <code>function</code></dt>
<dd><p>功能：防抖</p>
</dd>
<dt><a href="#each">each(obj, iteratee, [context])</a> ⇒ <code>void</code></dt>
<dd><p>遍历传入的元素</p>
</dd>
<dt><a href="#every">every(obj, predicate, [context])</a> ⇒ <code>boolean</code></dt>
<dd><p>遍历list数组如果predicate返回值有一个为false则返回false，否则返回true。</p>
</dd>
<dt><a href="#filter">filter(obj, predicate, [context])</a> ⇒ <code>Array</code></dt>
<dd><p>过滤数组</p>
</dd>
<dt><a href="#find">find(obj, predicate, [context])</a> ⇒ <code>any</code></dt>
<dd><p>寻找数组中的元素</p>
</dd>
<dt><a href="#after">after(count, func)</a> ⇒ <code>function</code></dt>
<dd><p>创建一个函数, 只有在运行了 count 次之后才有效果. 在处理同组异步请求返回结果时, 如果你要确保同组里所有异步请求完成之后才 执行这个函数, 这将非常有用。</p>
</dd>
<dt><a href="#bind">bind(func, [context])</a> ⇒ <code>function</code></dt>
<dd><p>绑定函数 function 到对象 object 上, 也就是无论何时调用函数, 函数里的 this 都指向这个 object.任意可选参数 arguments 可以传递给函数 function , 可以填充函数所需要的参数。</p>
</dd>
<dt><a href="#memoize">memoize(func)</a> ⇒ <code>function</code></dt>
<dd><p>Memoizes方法可以缓存某函数的计算结果。对于耗时较长的计算是很有帮助的。</p>
</dd>
<dt><a href="#groupBy">groupBy(obj, iteratee, [context])</a> ⇒ <code>Array</code></dt>
<dd><p>分组</p>
</dd>
<dt><a href="#isUndefined">isUndefined(obj)</a> ⇒ <code>Boolean</code></dt>
<dd><p>给的值是否是undefined</p>
</dd>
<dt><a href="#map">map(obj, iteratee, [context])</a> ⇒ <code>Array</code></dt>
<dd><p>遍历数组并组装iteratee函数的返回值并返回数组</p>
</dd>
<dt><a href="#max">max(obj, iteratee, [context])</a> ⇒ <code>any</code></dt>
<dd><p>获取元素给定返回值最大的哪一个</p>
</dd>
<dt><a href="#reduce">reduce(obj, iteratee, memo, [context])</a> ⇒ <code>any</code></dt>
<dd><p>功能：归并</p>
</dd>
<dt><a href="#some">some(obj, predicate, [context])</a> ⇒ <code>boolean</code></dt>
<dd><p>如果list中的所有元素都通过predicate的真值检测就返回true.</p>
</dd>
<dt><a href="#throttle">throttle(fn, [delay], opts)</a> ⇒ <code>function</code></dt>
<dd><p>功能：节流</p>
</dd>
<dt><a href="#unique">unique(array, [isSorted])</a> ⇒ <code>Array</code></dt>
<dd><p>返回array的去重版本</p>
</dd>
</dl>

<a name="find"></a>

## find(obj, predicate, [context]) ⇒ <code>any</code>
寻找数组中的元素

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>any</code> | 遍历的元素 |
| predicate | <code>function</code> | 回调的函数 |
| [context] | <code>any</code> | iteratee的this指向 |

<a name="contains"></a>

## contains(obj, value, [fromIndex]) ⇒ <code>boolean</code>
如果obj包含指定的value则返回true。

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>any</code> | 遍历的元素 |
| value | <code>any</code> | 寻找的元素 |
| [fromIndex] | <code>number</code> | iteratee的this指向 |

<a name="debounce"></a>

## debounce(fn, [delay], [immediate]) ⇒ <code>function</code>
功能：防抖

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fn | <code>function</code> |  | 需要执行的函数 |
| [delay] | <code>number</code> | <code>500</code> | 延迟执行时间，可选，默认500毫秒 |
| [immediate] | <code>boolean</code> | <code>false</code> | 是否立即执行函数，可选，默认false |

<a name="each"></a>

## each(obj, iteratee, [context]) ⇒ <code>void</code>
遍历传入的元素

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>any</code> | 遍历的元素 |
| iteratee | <code>function</code> | 回调的函数 |
| [context] | <code>any</code> | iteratee的this指向 |

<a name="every"></a>

## every(obj, predicate, [context]) ⇒ <code>boolean</code>
遍历list数组如果predicate返回值有一个为false则返回false，否则返回true。

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>any</code> | 遍历的元素 |
| predicate | <code>function</code> | 回调的函数 |
| [context] | <code>any</code> | iteratee的this指向 |

<a name="filter"></a>

## filter(obj, predicate, [context]) ⇒ <code>Array</code>
过滤数组

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>any</code> | 遍历的元素 |
| predicate | <code>function</code> | 回调的函数 |
| [context] | <code>any</code> | iteratee的this指向 |

<a name="find"></a>

## find(obj, predicate, [context]) ⇒ <code>any</code>
寻找数组中的元素

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>any</code> | 遍历的元素 |
| predicate | <code>function</code> | 回调的函数 |
| [context] | <code>any</code> | iteratee的this指向 |

<a name="after"></a>

## after(count, func) ⇒ <code>function</code>
创建一个函数, 只有在运行了 count 次之后才有效果. 在处理同组异步请求返回结果时, 如果你要确保同组里所有异步请求完成之后才 执行这个函数, 这将非常有用。

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| count | <code>number</code> | 执行次数 |
| func | <code>any</code> | 需要执行的函数 |

<a name="bind"></a>

## bind(func, [context]) ⇒ <code>function</code>
绑定函数 function 到对象 object 上, 也就是无论何时调用函数, 函数里的 this 都指向这个 object.任意可选参数 arguments 可以传递给函数 function , 可以填充函数所需要的参数。

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | 需要执行的函数 |
| [context] | <code>any</code> | 绑定的上下文 |

<a name="memoize"></a>

## memoize(func) ⇒ <code>function</code>
Memoizes方法可以缓存某函数的计算结果。对于耗时较长的计算是很有帮助的。

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | 需要执行的函数 |

<a name="groupBy"></a>

## groupBy(obj, iteratee, [context]) ⇒ <code>Array</code>
分组

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>any</code> | 遍历的元素 |
| iteratee | <code>function</code> | 回调的函数 |
| [context] | <code>any</code> | iteratee的this指向 |

<a name="isUndefined"></a>

## isUndefined(obj) ⇒ <code>Boolean</code>
给的值是否是undefined

**Kind**: global function  

| Param | Type |
| --- | --- |
| obj | <code>any</code> | 

<a name="map"></a>

## map(obj, iteratee, [context]) ⇒ <code>Array</code>
遍历数组并组装iteratee函数的返回值并返回数组

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Array</code> | 遍历的元素 |
| iteratee | <code>function</code> | 回调的函数 |
| [context] | <code>any</code> | iteratee的this指向 |

<a name="max"></a>

## max(obj, iteratee, [context]) ⇒ <code>any</code>
获取元素给定返回值最大的哪一个

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>any</code> | 遍历的元素 |
| iteratee | <code>function</code> | 回调的函数 |
| [context] | <code>any</code> | iteratee的this指向 |

<a name="reduce"></a>

## reduce(obj, iteratee, memo, [context]) ⇒ <code>any</code>
功能：归并

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>any</code> | 遍历的元素 |
| iteratee | <code>function</code> | 回调的函数 |
| memo | <code>any</code> | reduce函数的初始值 |
| [context] | <code>any</code> | iteratee的this指向 |

<a name="some"></a>

## some(obj, predicate, [context]) ⇒ <code>boolean</code>
如果list中的所有元素都通过predicate的真值检测就返回true.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>any</code> | 遍历的元素 |
| predicate | <code>function</code> | 检验函数 |
| [context] | <code>any</code> | predicate的this指向 |

<a name="throttle"></a>

## throttle(fn, [delay], opts) ⇒ <code>function</code>
功能：节流

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | 需要执行的函数 |
| [delay] | <code>number</code> | 延迟执行时间，可选，默认500毫秒 |
| opts | <code>Object</code> | 需要执行的函数 |

<a name="unique"></a>

## unique(array, [isSorted]) ⇒ <code>Array</code>
返回array的去重版本

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | 需要去重的数组 |
| [isSorted] | <code>boolean</code> | 数组是否已经排序过 |

