var groupAnagrams = function (str) {
  let res = {};

  for (let s of str) {
    let arr = new Array(26).fill(0);
    for (let c of s) {
      arr[c.charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }
    let comaSeprated = arr.join(",");
    if (comaSeprated in res) {
      // push on same hash
      res[comaSeprated].push(s);
    } else {
      // add in new hash
      res[comaSeprated] = [s];
    }
  }
  console.log(res);
  return Object.values(res);
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
