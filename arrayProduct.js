var productExceptSelf = function (nums) {
  // gathering the running product of the prefix at each index
  const prefix = [];
  const sufix = [];

  // Move left in the input array
  for (let i = 0; i < nums.length; i++) {
    // If i === 0, start with `1`, since there is no prefix
    if (i === 0) {
      prefix[i] = 1;
    } else {
      // Otherwise, multiply nums[i-1] times the prefix at position i-1,
      // and add that to the prefix array at position i

      prefix[i] = nums[i - 1] * prefix[i - 1];
    }
  }

  // Move left in the input array
  for (let i = nums.length - 1; i >= 0; i--) {
    // If i === 0, start with `1`, since there is no prefix
    if (i === nums.length - 1) {
      sufix[i] = 1;
    } else {
      // Otherwise, multiply nums[i-1] times the prefix at position i-1,
      // and add that to the prefix array at position i
      // console.log(nums[i + 1], sufix[i + 1]);
      sufix[i] = nums[i + 1] * sufix[i + 1];
    }
  }
  // console.log(sufix);
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    res.push(prefix[i] * sufix[i]);
  }
  return res;
};

console.log(productExceptSelf([1, 2, 3, 4]));
