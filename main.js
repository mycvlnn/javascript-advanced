const messsage = "HELLO WORLD"; // Global variable

if (true) {
  // Code block

  const fullName = "Le Ngoai Ngu";
  console.log(fullName);
}

// Local scope
function logger() {
  var fullName = "Son Dang";
  console.log(fullName); // có thể truy cập
}

// Biến được tham chiếu bởi một hàm

function makeCounter() {
  let counter = 0;

  function increase() {
    return counter++;
  }

  return increase;
}

const increase1 = makeCounter(); // tham chiếu đến một hàm ở bên trong hàm

console.log(increase1()); // 0
console.log(increase1()); // 1
console.log(increase1()); // 2
console.log(increase1()); // 3
