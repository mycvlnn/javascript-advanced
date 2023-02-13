// call()  method

function logger() {
  const newArr = Array.prototype.slice.call(arguments); // Sử dụng để convert sang mảng.

  console.log({ newArr });
}

logger(1, 2, 3, 4);
