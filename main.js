// Học về strict mode in javascript

"use strict";

// fullName = "Chris"; // Tạo ra một biến fullName ở phạm vi global

// function testFunc() {
//   age = 18; // Tạo ra một biến age ở phạm vi global.
// }

// testFunc();

// console.log(fullName);

// console.log(age); // 18

// 1. Báo lỗi khi gán lại giá trị cho thuộc tính có writable: false

// const students = Object.freeze({
//   name: "Chris",
// });

// students.name = "hello"; // error

// console.log(students.name);

// 2.
// function sum(a, a) {
//   return a + a;
// }

// sum(6, 9); // error

// 3.

// {
//   function myFn() {
//     console.log("hello");
//   }
// }

// myFn(); // error
