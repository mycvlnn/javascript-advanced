// call()  method

const teacher = {
  firstName: "Minh",
  lastName: "Thu",
  showFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

const me = {
  firstName: "Lee",
  lastName: "Chris",
};

teacher.showFullName.call(me);
