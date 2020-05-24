const merge = (a, low, mid, high) => {
  const b = new Array(high + 1 - low);
  let j = mid + 1;
  let k;
  let h = low;
  let i = 0;
  while (h <= mid && j <= high) {
    if (a[h] <= a[j]) {
      b[i] = a[h];
      h++;
    } else {
      b[i] = a[j];
      j++;
    }
    i++;
  }
  if (h > mid) {
    for (k = j; k <= high; k++) {
      b[i] = a[k];
      i++;
    }
  } else {
    for (k = h; k <= mid; k++) {
      b[i] = a[k];
      i++;
    }
  }
  for (k = 0; k <= high - low; k++) a[k + low] = b[k];
  return a;
};

const mergeSort = arr => {
  function merge_sort(a, low, high) {
    if (low < high) {
      const mid = Math.floor((low + high) / 2);
      merge_sort(a, low, mid);
      merge_sort(a, mid + 1, high);
      merge(a, low, mid, high);
    }
  }
  const n = arr.length;
  merge_sort(arr, 0, n - 1);
  return arr;
};
module.exports = mergeSort;
