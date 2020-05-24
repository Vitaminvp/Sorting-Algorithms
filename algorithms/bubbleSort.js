// const bubbleSort = arr => {
//   const result = [...arr];
//   const length = result.length;
//   for (let i = 0; i < length - 1; i++) {
//     for (let j = 0; j < length - 1 - i; j++) {
//       if (result[j + 1] < result[j]) {
//         const temp = result[j + 1];
//         result[j + 1] = result[j];
//         result[j] = temp;
//       }
//     }
//   }
//   return result;
// };

let bubbleSort = arr => {
  const result = [...arr];
  const length = result.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < length; i++) {
      if (result[i] > result[i + 1]) {
        let temp = result[i];
        result[i] = result[i + 1];
        result[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return result;
};

module.exports = bubbleSort;
