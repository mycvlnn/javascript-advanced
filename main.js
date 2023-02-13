// call()  method

function Animal(name, weight) {
  this.name = name;
  this.weight = weight;
}

function Chicken(name, weight, legs) {
  Animal.call(this, name, weight); // kế thừa lại được thuộc tính của Animal
  this.legs = legs;
}

const gaMai = new Chicken("Ga mai mo", 2, 2);
console.log(gaMai);
