// apply()  method

const teacher = {
  firstName: "chris",
  lastName: "Leee",
  showFullName(hobby) {
    console.log(`${this.firstName} ${this.lastName} like ${hobby}`);
  },
};

teacher.showFullName("Play game");

const me = {
  firstName: "Lê",
  lastName: "Ngữ",
};

teacher.showFullName.apply(me, ["Read book"]);
