import Block from "./block.js";

const container = document.querySelector(".blocks");
const randomNumber = getRandomNumber(8);

for (let i = 1; i < 100; i++) {
  let cssClass = "";
  if (i % randomNumber  === 0) {
    cssClass = "highlight";
  }
  const newBlock = new Block("small block", 150, cssClass);
  container.innerHTML += newBlock.draw();
}

function getRandomNumber(max) {
  return 2 + Math.floor(  Math.random() * Math.floor(max)  ); // work your way inside out, figure out what happens first.
}
















/*
1. new operator will create an empty object {}
2. then it will set the contect of the "this" keyword to that the object
3. it will RETURN the object like we do we return
*/
