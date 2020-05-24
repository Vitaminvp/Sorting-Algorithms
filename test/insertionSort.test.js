/* eslint-env jest */

const insertionSort = require("../algorithms/selectionSort");
const { positiveCases } = require("../helpers/consts");


describe("Positive cases (default behaviour)", () => {
  test.each(positiveCases)("convert %p into %p", (argument, expectedResult) => {
    expect(insertionSort(argument)).toEqual(expectedResult);
  });
});

// describe("Invalid arg type (default behaviour)", () => {
//   test.each(negativeCases)("faile %p into %p", (argument, expectedResult) => {
//     expect(stalinSort(argument)).toEqual(expectedResult);
//   });
// });
