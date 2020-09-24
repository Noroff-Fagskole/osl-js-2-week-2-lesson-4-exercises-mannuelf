console.log("this", this);

function Human(firstName, height, isAlive) {
  console.log("this", this);
  this.firstName = firstName;
  this.height = height;
  this.isAlive = isAlive;
  this.walk = () => {
    console.log('walking...');
  }
  this.run = () => {
    console.log('running...');
  }
}

const mannuel = new Human("Mannuel", "1.56", true);

// first letter should be Uppercase.
// this, is reference to the object that is executing this peice of code
/*
 1. new operator will create an empty {} object
 2. then it will set this to point to that object
 3. lastly it will return that object from the Human function.
 */
