// console.log("this", this);

function Human(firstName, secondName, isAlive) {
  console.log("Human", this);
  this.firstName = firstName;
  this.secondName = secondName;

  this.walk = () => {
    console.log("walking...");
  }

}

const mannuel = new Human("Mannuel", "Ferreira", true);

console.log(mannuel.walk());
console.log(mannuel);

// first letter should be Uppercase.
// this, is reference to the object that is executing this peice of code
/*
 1. new operator will create an empty {} object
 2. then it will set this to point to that object
 3. lastly it will return that object from the Human function.
 */
