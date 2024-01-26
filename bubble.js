function bubbleSort(arr) {
  //   for (let i = 0; i < arr.length - 1; i++) {
  //     for (let j = 0; j < arr.length - 1 - i; j++) {
  //       if (arr[j] > arr[j + 1]) {
  //         const temp = arr[j];
  //         arr[j] = arr[j + 1];
  //         arr[j + 1] = temp;
  //       }
  //     }
  //   }
  //   return arr;
  //code here
  //code here
  const l = arr.length;
  let r = 0;
  let c = 0;
  let f = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    f = Math.max(f, i + arr[i]);
    if (i == c) {
      r++;
      c = f;
      if (i === l - 1) {
        return r;
      }
    }
  }
  return r;
}
console.log(bubbleSort([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]));
