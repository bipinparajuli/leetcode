var topKFrequent = function (nums, k) {
  let hash = {};
  for (let n of nums) {
    if (hash[n]) {
      hash[n] += 1;
    } else {
      hash[n] = 1;
    }
  }
  const kva = Object.entries(hash);
  let a = kva.sort((a, b) => b[1] - a[1]);
  let b = kva.slice(0, k);
  let r = [];
  for (a of b) {
    r.push(Number(a[0]));
  }
};
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
