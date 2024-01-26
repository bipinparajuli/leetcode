function threeSum(nums) {
  let res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        // console.log(nums[i], nums[j], nums[k], i, j, k);
        if (nums[i] + nums[j] + nums[k] === 0) {
          const arr = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
          console.log(res.includes(arr));
          if (!res.includes(arr)) {
            res.push(arr);
          }
        }
      }
    }
  }
  return res;
}
var threeSum = function (nums) {
  const sortedArr = nums.sort((a, b) => a - b);
  let res = [];

  for (let i = 0; i < sortedArr.length; i++) {
    if (i > 0 && sortedArr[i] === sortedArr[i - 1]) {
      continue;
    }
    let l = i + 1;
    let r = sortedArr.length - 1;
    while (l < r) {
      const threeSum = sortedArr[i] + sortedArr[l] + sortedArr[r];
      if (threeSum > 0) {
        r--;
      } else if (threeSum < 0) {
        l++;
      } else {
        res.push([sortedArr[i], sortedArr[l], sortedArr[r]]);
        l++;
        while (sortedArr[l] == sortedArr[l - 1] && l < r) {
          l++;
        }
      }
    }
  }
  return res;
};

console.log(threeSumOpt([-1, 0, 1, 2, -1, -4]));
