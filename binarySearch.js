function binarySearch(arr, x) {
  let l = 0,
    r = arr.length - 1;
  let m;

  while (l <= r) {
    m = l + Math.floor((r - l) / 2);
    if (x == arr[m]) {
      return arr[m];
    }
    // if x is less then middle then just for for left
    if (x < arr[m]) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  return -1;
}

const a = [1, 2, 3, 4, 5];
console.log(binarySearch(a, 0));
