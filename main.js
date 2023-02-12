// fn.bind() trong javascript
this.firstName = "Minh";
this.lastName = "Thu";

const teacher = {
  firstName: "Minh",
  lastName: "Thao",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

// case 1:
console.log(teacher.getFullName()); // Minh thảo

// case 2:
const getTeacherName = teacher.getFullName.bind(teacher);
console.log(getTeacherName()); // Minh Thảo

console.log(teacher.getFullName === getTeacherName); // return false
