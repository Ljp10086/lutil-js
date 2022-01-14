## Modules

<dl>
<dt><a href="#module_debounce">debounce</a> ⇒ <code>function</code></dt>
<dd><p>功能：防抖</p>
</dd>
<dt><a href="#module_isUndefined">isUndefined</a> ⇒ <code>Boolean</code></dt>
<dd><p>给的值是否是undefined</p>
</dd>
<dt><a href="#module_isUndefined">isUndefined</a> ⇒ <code>Array</code></dt>
<dd><p>遍历数组并组装iteratee函数的返回值并返回数组</p>
</dd>
<dt><a href="#module_isUndefined">isUndefined</a> ⇒ <code>any</code></dt>
<dd><p>获取元素给定返回值最大的哪一个</p>
</dd>
<dt><a href="#module_throttle">throttle</a> ⇒ <code>function</code></dt>
<dd><p>功能：节流</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#reduce">reduce(obj, iteratee, memo, [context])</a> ⇒ <code>any</code></dt>
<dd><p>功能：归并</p>
</dd>
</dl>

<a name="module_debounce"></a>

## debounce ⇒ <code>function</code>
功能：防抖


| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | 需要执行的函数 |
| [delay] | <code>number</code> | 延迟执行时间，可选，默认500毫秒 |
| [immediate] | <code>boolean</code> | 是否立即执行函数，可选，默认false |

<a name="module_isUndefined"></a>

## isUndefined ⇒ <code>Boolean</code>
给的值是否是undefined


| Param | Type |
| --- | --- |
| obj | <code>any</code> | 

<a name="module_isUndefined"></a>

## isUndefined ⇒ <code>Array</code>
遍历数组并组装iteratee函数的返回值并返回数组


| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Array</code> | 遍历的元素 |
| iteratee | <code>function</code> | 回调的函数 |
| [context] | <code>any</code> | iteratee的this指向 |

<a name="module_isUndefined"></a>

## isUndefined ⇒ <code>any</code>
获取元素给定返回值最大的哪一个


| Param | Type | Description |
| --- | --- | --- |
| obj | <code>any</code> | 遍历的元素 |
| iteratee | <code>function</code> | 回调的函数 |
| [context] | <code>any</code> | iteratee的this指向 |

<a name="module_throttle"></a>

## throttle ⇒ <code>function</code>
功能：节流


| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | 需要执行的函数 |
| [delay] | <code>number</code> | 延迟执行时间，可选，默认500毫秒 |
| opts | <code>Object</code> | 需要执行的函数 |

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

