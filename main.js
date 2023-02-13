// call()  method
"use strict";

this.firstName = "Lee";
this.lastName = "Chris";

function showFullName() {
  console.log(`${this.firstName} ${this.lastName}`);
}

showFullName.call(this);
