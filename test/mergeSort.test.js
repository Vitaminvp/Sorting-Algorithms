/* eslint-env jest */

const mergeSort = require("../algorithms/mergeSort");
const { positiveCases } = require("../helpers/consts");


describe("Positive cases (default behaviour)", () => {
  test.each(positiveCases)("convert %p into %p", (argument, expectedResult) => {
    expect(mergeSort(argument)).toEqual(expectedResult);
  });
});

