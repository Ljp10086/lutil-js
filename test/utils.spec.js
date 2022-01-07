import isUndefined from "../src/isUndefined";
import each from '../src/each';

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

