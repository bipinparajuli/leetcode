var twoSum = function (nums, target) {
  // let hash = [];
  // for (let i = 0; i < nums.length; i++) {
  //   const diff = target - nums[i];
  //   console.log(hash);
  //   if (hash.includes(diff)) {
  //     return [i, nums.indexOf(diff)];
  //   }
  //   hash.push(nums[i]);
  // }
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    console.log("--", l, r, nums[l] + nums[r]);

    if (nums[l] + nums[r] > target) {
      r--;
    } else if (nums[l] + nums[r] < target) {
      l++;
    } else {
      console.log("--", target);

      return [l + 1, r + 1];
    }
  }
};
let a = [2, 3, 4];
console.log(twoSum(a, 6));
