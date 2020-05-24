const selectionSort = arr => {
  const result = [...arr];
  const length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < length; j++) {
      if (result[j] < result[min]) min = j;
    }
    if (min !== i) {
      let temp = result[min];
      result[min] = result[i];
      result[i] = temp;
    }
  }
  return result;
};

module.exports = selectionSort;
