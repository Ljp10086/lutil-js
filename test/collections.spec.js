import isUndefined from "../src/isUndefined";
import each from '../src/each';
import map from "../src/map";
import reduce from "../src/reduce";
import { find } from "../src";
import filter from "../src/filter";
import every from "../src/every";

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

describe('find', () => {
  const arr = [1, 100, 10000];

  test('find', () => {
    const result = find(arr, function (num) {
      expect(num).not.toBe(10000);
      return num === 100;
    });
    expect(result).toBe(100);
  })
})

describe('every', () => {
  const arr = [true, true, false, true];

  test('arr result', () => {
    const result = every(arr, function (num) {
      return num;
    });
    expect(result).toBeFalsy();
  })

  test('obj result', () => {
    const obj = {a: 1, b: 2, c: 3, d: 4};

    const result = every(obj, function (item) {
      return item % 5 !== 0;
    });
    expect(result).toBeTruthy();
  })

  test('context', () => {
    const obj = {a: 1, b: 2, c: 3, d: 4};

    const result = every(obj, function (num) {
      expect(this.a).toEqual(obj.a);
      expect(this.b).toEqual(obj.b);
      expect(this.c).toEqual(obj.c);
      expect(this.d).toEqual(obj.d);
      return num % 2 === 0;
    }, obj);
  })
})

describe('filter', () => {
  const arr = [1,2,3,4,5,6,7,8];

  test('arr result', () => {
    const result = filter(arr, function (num) {
      return num % 2 === 0;
    });
    expect(result).toEqual([2, 4, 6, 8]);
  })

  test('obj result', () => {
    const obj = {a: 1, b: 2, c: 3, d: 4};

    const result = filter(obj, function (num) {
      return num % 2 === 0;
    });
    expect(result).toEqual([2, 4]);
  })

  test('context', () => {
    const obj = {a: 1, b: 2, c: 3, d: 4};

    const result = filter(obj, function (num) {
      expect(this.a).toEqual(obj.a);
      expect(this.b).toEqual(obj.b);
      expect(this.c).toEqual(obj.c);
      expect(this.d).toEqual(obj.d);
      return num % 2 === 0;
    }, obj);
  })
})

