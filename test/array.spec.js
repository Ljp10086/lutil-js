import initial from "../src/array/initial";

describe('initial', () => {
  const arr = [1.2, 1.1, 2.3, 2.5];

  test('arr result', () => {
    const result = initial(arr);

    expect(result).toEqual([1.2, 1.1, 2.3]);
  })

  test('arr result', () => {
    const result = initial(arr, 3);

    expect(result).toEqual([1.2]);
  })
})