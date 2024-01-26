var maxProfit = function (prices) {
  let l = 0;
  let r = 1;
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    const diff = prices[r] - prices[l];
    if (diff > max) {
      max = diff;
    }
    if (prices[l] > prices[r]) {
      l = i;
      r = l + 1;
    } else {
      r = i + 1;
    }
    console.log(r, l, diff);
  }
  return max;
};
let p = [2, 1, 2, 1, 0, 1, 2];
console.log(maxProfit(p));
