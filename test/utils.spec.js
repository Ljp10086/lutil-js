import isUndefined from "../src/isUndefined";
import each from '../src/each';
import map from "../src/map";
import reduce from "../src/reduce";

describe('isUndefined', () => {
  test('undefined', () => {
    expect(isUndefined(undefined)).toBeTruthy();
  })

  test('1', () => {
    expect(isUndefined(1)).toBeFalsy();
  })

  test('NAN', () => {
    expect(isUndefined(NaN)).toBeFalsy();
  })

  test('nothing', () => {
    expect(isUndefined()).toBeTruthy();
  })

  test('false', () => {
    expect(isUndefined(false)).toBeFalsy();
  })

  test('null', () => {
    expect(isUndefined(null)).toBeFalsy();
  })

  test('void 0', () => {
    expect(isUndefined(void 0)).toBeTruthy();
  })
})


describe('each', () => {
  const arr = [1, void 0, false];
  test('loop', () => {
    each(arr, (item, index, obj) => {
      expect(obj).toEqual(arr);
      expect(item).toEqual(arr[index]);
    });
  })

  test('object', () => {
    const arr = { a: 1, b: 2 };
    each(arr, (item, index, obj) => {
      expect(obj).toEqual(arr);
      expect(item).toEqual(arr[index]);
    });
  })

  test('context', () => {
    const obj = { a: 'a', b: 'b' };
    each([], function (item, index, source) {
      expect(this).toEqual(obj);
      expect(this.b).toEqual(obj.b);
    }, obj);
  })
})


describe('map', () => {
  const arr = [1, void 0, false];
  test('loop', () => {
    map(arr, (item, index, obj) => {
      expect(obj).toEqual(arr);
      expect(item).toEqual(arr[index]);
    });
  })

  test('result', () => {
    const arr = { a: 'a', b: 2 };
    const result = map(arr, (item, index, obj) => {
      return item;
    });
    expect(result).toEqual(Object.values(arr));
  })

  test('context', () => {
    const obj = { a: 'a', b: 'b' };
    map([], function (item, index, source) {
      expect(this).toEqual(obj);
      expect(this.b).toEqual(obj.b);
      return item;
    }, obj);
  })
})


describe('reduce', () => {
  const arr = [1, 100, 10000];
  test('result', () => {
    const sum = reduce(arr, (pre, next) => {
      return pre + next;
    });
    expect(sum).toEqual(1 + 100 + 10000);
  })

  test('memo', () => {
    const result = reduce(arr, (memo, value) => {
      memo[value] = value;
      return memo;
    }, {});
    expect(result).toEqual({ 1: 1, 100: 100, 10000: 10000 });
  })

  test('context', () => {
    const obj = { a: 'a', b: 'b' };
    reduce([], function (pre, next,) {
      expect(this).toEqual(obj);
      expect(this.b).toEqual(obj.b);
      return pre;
    }, {}, obj);
  })

  test('object', () => {
    const obj = { a: 'aaa', b: 'bbb' };
    const result = reduce(obj, function (arr, value) {
      arr.push(value);
      return arr;
    }, []);
    expect(result).toEqual(Object.values(obj));
  })
})

