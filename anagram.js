/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const sMap = {};
  const tMap = {};

  for (const a of s) {
    sMap[a] = (sMap[a] || 0) + 1;
  }

  for (const a of t) {
    tMap[a] = (tMap[a] || 0) + 1;
  }

  for (const c in sMap) {
    if (sMap[c] !== tMap[c]) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram("a", "ab"));
