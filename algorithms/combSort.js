const newGap = gap => {
  gap /= 1.3;
  if (gap == 9 || gap == 10) gap = 11;
  if (gap < 1) return 1;
  return gap;
};

const combSort = arr => {
  const result = [...arr];
  const length = result.length;
  let gap = length;
  let swapped;
  do {
    swapped = false;
    gap = newGap(gap);
    for (let i = 0; i < length - gap; ++i) {
      if (result[i] > result[i + gap]) {
        swapped = true;
        const t = result[i + gap];
        result[i + gap] = result[i];
        result[i] = t;
      }
    }
  } while (gap > 1 || swapped);
  return result;
};

module.exports = combSort;
