import isUndefined from "../src/isUndefined";

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

