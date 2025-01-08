var spiralOrder = function (matrix) {
  let res = [];
  let left = 0;
  let right = matrix[0].length;
  let top = 0;
  let buttom = matrix.length;

  while (left < right && top < buttom) {
    //top row
    for (let i = left; i < right; i++) {
      res.push(matrix[top][i]);
    }
    top += 1;

    //right column
    for (let i = top; i < buttom; i++) {
      res.push(matrix[i][right - 1]);
    }
    right -= 1;

    if (!(top < buttom && left < right)) break;

    //buttom row
    for (let i = right - 1; i >= left; i--) {
      res.push(matrix[buttom - 1][i]);
    }
    buttom -= 1;

    //left col
    for (let i = buttom - 1; i >= top; i--) {
      res.push(matrix[i][left]);
    }
    left += 1;
  }
  return res;
};
let s = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
console.log(spiralOrder(s));
