function Car(name, price, color) {
  this.name = name;
  this.price = price;
  this.color = color;
  this.run = function () {
    console.log("running...", this); // this  nó sẽ là đối tượng mà nó gọi đến phương thức này.
  };
}

const mercedes = new Car("Mercedes", 1000, "black");

mercedes.run();
