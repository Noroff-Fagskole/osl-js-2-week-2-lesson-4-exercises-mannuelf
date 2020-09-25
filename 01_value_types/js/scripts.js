// IN JS we have two kind of Types

// VALUE TYPES and REFERENCE TYPES

/*

  VALUE TYPES aka Primitives
  - Number
  - String
  - Boolean
  - Symbol
  - undefined
  - null

  REFERENCE TYPES
  - Objects
  - Function
  - Array


  They behave differently to each other
  - Primitives are copied by their value
  - Objects are copied by their reference

*/

//  - Primitives are copied by their value
// do not create global variables
let a = 100; // one instance of a vairable global
let b = a; // a second and new variable, seperate to a

a = 200;

//console.log("a", a);
//console.log("b", b);

//  Objects are copied by their reference
// object is not stored in this varaible, it is stored in memory, in some location.
// both obj and obj2 are pointing to the same obj in memory, and when you change a property both objects will update
let obj = { id:1, name: "superduper"};
let obj2 = obj;
let obj3 = obj;

obj.name = "Jack";

console.log(obj);
console.log(obj2);
console.log(obj3);
