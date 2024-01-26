var isPalindrome = function (s) {
  const str = s.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();
  console.log(str);
  let l = 0;
  let r = str.length - 1;
  for (let i = 0; i < str.length; i++) {
    console.log(str[l], str[r]);
    if (str[l] === str[r]) {
      l++;
      r--;
    } else {
      return false;
    }
  }
  return true;
};
console.log(isPalindrome("0p"));
