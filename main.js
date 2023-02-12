// fn.bind() trong javascript

const teacher = {
  firstName: "Minh",
  lastName: "Thao",
  getFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

// Ví dụ về bind trong DOM event
const btnElement = document.querySelector("button");
btnElement.onclick = teacher.getFullName.bind(teacher);
