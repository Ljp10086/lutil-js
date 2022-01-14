## Functions

<dl>
<dt><a href="#reduce">reduce(obj, iteratee, memo, [context])</a> ⇒ <code>any</code></dt>
<dd><p>功能：归并</p>
</dd>
<dt><a href="#debounce">debounce(fn, [delay], [immediate])</a> ⇒ <code>function</code></dt>
<dd><p>功能：防抖</p>
</dd>
<dt><a href="#isUndefined">isUndefined(obj)</a> ⇒ <code>Boolean</code></dt>
<dd><p>给的值是否是undefined</p>
</dd>
<dt><a href="#throttle">throttle(fn, [delay], opts)</a> ⇒ <code>function</code></dt>
<dd><p>功能：节流</p>
</dd>
</dl>

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

<a name="debounce"></a>

## debounce(fn, [delay], [immediate]) ⇒ <code>function</code>
功能：防抖

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fn | <code>function</code> |  | 需要执行的函数 |
| [delay] | <code>number</code> | <code>500</code> | 延迟执行时间，可选，默认500毫秒 |
| [immediate] | <code>boolean</code> | <code>false</code> | 是否立即执行函数，可选，默认false |

<a name="isUndefined"></a>

## isUndefined(obj) ⇒ <code>Boolean</code>
给的值是否是undefined

**Kind**: global function  

| Param | Type |
| --- | --- |
| obj | <code>any</code> | 

<a name="throttle"></a>

## throttle(fn, [delay], opts) ⇒ <code>function</code>
功能：节流

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | 需要执行的函数 |
| [delay] | <code>number</code> | 延迟执行时间，可选，默认500毫秒 |
| opts | <code>Object</code> | 需要执行的函数 |

