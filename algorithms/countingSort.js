const countingSort = arr => {
  const array = [...arr];
  const length = array.length;
  const count = [];
  const result = [];
  for (let i = 0; i < length; i++) count[i] = 0;
  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      if (array[i] < array[j]) count[j]++;
      else count[i]++;
    }
  }
  for (let i = 0; i < length; i++) result[count[i]] = array[i];
  return result;
};

module.exports = countingSort;
