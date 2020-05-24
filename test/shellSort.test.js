/* eslint-env jest */

const shellSort = require("../algorithms/bubbleSort");
const { positiveCases } = require("../helpers/consts");



const negativeCases = [
  [5, undefined],
  ["John", undefined],
  [{ a: 5, b: 6 }, undefined]
];

describe("Positive cases (default behaviour)", () => {
  test.each(positiveCases)("convert %p into %p", (argument, expectedResult) => {
    expect(shellSort(argument)).toEqual(expectedResult);
  });
});

// describe("Invalid arg type (default behaviour)", () => {
//   test.each(negativeCases)("faile %p into %p", (argument, expectedResult) => {
//     expect(stalinSort(argument)).toEqual(expectedResult);
//   });
// });
