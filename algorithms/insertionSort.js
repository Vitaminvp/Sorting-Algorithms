const insertionSort = arr => {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let v = arr[i],
      j = i - 1;
    while (j >= 0 && arr[j] > v) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = v;
  }
  return arr;
};

module.exports = insertionSort;
