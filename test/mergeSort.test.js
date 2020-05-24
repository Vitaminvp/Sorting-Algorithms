/* eslint-env jest */

const mergeSort = require("../algorithms/mergeSort");

const positiveCases = [
  [[7, 5, 2, 4, 3, 9], [2, 3, 4, 5, 7, 9]],
  [[9, 7, 5, 4, 3, 1], [1, 3, 4, 5, 7, 9]],
  [[1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]],
  [[], []]
];


describe("Positive cases (default behaviour)", () => {
  test.each(positiveCases)("convert %p into %p", (argument, expectedResult) => {
    expect(mergeSort(argument)).toEqual(expectedResult);
  });
});

