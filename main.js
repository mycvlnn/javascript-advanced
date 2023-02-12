// Học về hoisting in javascript

// 1.  Đối với từ khoá var
console.log(age); // undefined
var age = 18;
console.log(age); // 18

// 2. Đối với từ khoá function

console.log(sum(1, 2)); // result: 3

function sum(a, b) {
  return a + b;
}
