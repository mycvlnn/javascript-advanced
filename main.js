// fn.bind() trong javascript
this.firstName = "Minh";
this.lastName = "Thu";

const teacher = {
  firstName: "Minh",
  lastName: "Thao",
  getFullName(fullName1, fullName2) {
    console.log(fullName1, fullName2);
    return `${this.firstName} ${this.lastName}`;
  },
};

const getTeacherName = teacher.getFullName.bind(teacher, "data1", "data2"); // dữ liệu này sẽ override bên dưới.
console.log(getTeacherName("Full Name", "Hello"));
