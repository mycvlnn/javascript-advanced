// Học về các kiểu dữ liệu trong javascript

// 1. Kiểu dữ liệu nguyên thuỷ ( primitive data types )
let a = 1;

let b = a;

a = 2;

console.log(b); // 1
console.log(a); // 2

// Kểu dữ liệu tham chiếu (reference types)

const car = {
  name: "Mercedes",
};

const myCar = car;

car.name = "VinFast";

console.log(myCar);

// Điều gì sẽ xảy ra với mã như sau:
let x = {
  name: "Chris",
};

x.name = "ABC";

x = {
  name: "Hello",
};

console.log({ x }); // {name: 'Hello'}

const student = {
  name: "Chris",
  profile: {
    firstName: "Hello",
    lastName: "My friend",
  },
};

const myProfile = student.profile;
student.profile.firstName = "Chris";
console.log({ myProfile });

// Data types with function

// 1. Primitive
function sum(a, b) {
  // Bản thân nó sẽ chạy ngầm lệnh sau:
  // let a; let b
  // a = c
  // b = d

  a = 0;
  b = 0;

  console.log(a, b); // 0, 0
}

const c = 1;
const d = 2;

sum(c, d);

console.log(c, d); // 1, 2

// 2. References

function callback(obj) {
  obj.name = "Mercedes";

  console.log(obj);
}

const y = {
  name: "VS",
};

callback(y);

console.log({ y });

// clone shadow

const n1 = {
  name: "xx",
  child: {
    age: 8,
  },
};

const n2 = { ...n1 };

n2.child.age = 20;
console.log({ n2, n1 }); // Kết quả giống nhau

// clone deep
const n3 = {
  name: "xx",
  child: {
    age: 8,
  },
};

const n4 = JSON.parse(JSON.stringify(n3));

n4.child.age = 20;

console.log(n3); // age = 8
console.log(n4); // age = 20

// So sánh 2 đối tượng

const data1 = {
  name: "a",
};

const data2 = {
  name: "a",
};

console.log(data1 === data2); // false

const x1 = {
  a: "a",
};

const x2 = x1;
console.log(x2 === x1); // true
