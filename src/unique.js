/**
* 返回array的去重版本
* @param {Array} array - 需要去重的数组
* @param {boolean} [isSorted] - 数组是否已经排序过
* @return {Array} 
*/
export default function unique(array, isSorted) {
    var res = [];
    var seen = [];

    for (var i = 0, len = array.length; i < len; i++) {
        var value = array[i];
        if (isSorted) {
            if (!i || seen !== value) {
                res.push(value)
            }
            seen = value;
        }
        else if (res.indexOf(value) === -1) {
            res.push(value);
        }        
    }
    return res;
}