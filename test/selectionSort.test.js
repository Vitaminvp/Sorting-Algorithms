/* eslint-env jest */

const selectionSort = require("../algorithms/selectionSort");

const positiveCases = [
  [[7, 5, 2, 4, 3, 9], [2, 3, 4, 5, 7, 9]],
  [[9, 7, 5, 4, 3, 1], [1, 3, 4, 5, 7, 9]],
  [[1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]],
  [[], []]
];

const negativeCases = [
  [5, undefined],
  ["John", undefined],
  [{ a: 5, b: 6 }, undefined]
];

describe("Positive cases (default behaviour)", () => {
  test.each(positiveCases)("convert %p into %p", (argument, expectedResult) => {
    expect(selectionSort(argument)).toEqual(expectedResult);
  });
});

// describe("Invalid arg type (default behaviour)", () => {
//   test.each(negativeCases)("faile %p into %p", (argument, expectedResult) => {
//     expect(stalinSort(argument)).toEqual(expectedResult);
//   });
// });
