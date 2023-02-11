(function myFN() {
  console.log("Hello world");
})();

myFN();

const app = (function () {
  // private => bên ngoài không thể truy cập trực tiếp làm hỏng ứng dụng của các bạn được
  const cars = [];

  return {
    add(car) {
      cars.push(car);
    },
    getCar(index) {
      return cars[index];
    },
  };
})();
