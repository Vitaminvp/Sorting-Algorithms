const insertionSort = arr => {
  const result = [...arr];
  const length = result.length;
  for (let i = 1; i < length; i++) {
    let temp = result[i];
    let j = i - 1;
    while (j >= 0 && result[j] > temp) {
      result[j + 1] = result[j];
      j--;
    }
    result[j + 1] = temp;
  }
  return result;
};

module.exports = insertionSort;
