const shellSort = arr => {
  const result = [...arr];
  const length = arr.length;
  let i = Math.floor(length / 2);
  while (i > 0) {
    for (let j = 0; j < length; j++) {
      let k = j,
        t = result[j];
      while (k >= i && result[k - i] > t) {
        result[k] = result[k - i];
        k -= i;
      }
      result[k] = t;
    }
    i = i == 2 ? 1 : Math.floor((i * 5) / 11);
  }
  return result;
};

module.exports = shellSort;
