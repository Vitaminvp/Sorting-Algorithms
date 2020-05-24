/* eslint-env jest */

const selectionSort = require("../algorithms/selectionSort");
const { positiveCases } = require("../helpers/consts");



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
