"use strict";

// Variabels
const newArr = [];
let counter = 0;

window.addEventListener("load", arrayCounter);

// Init function

function arrayCounter() {
  if (counter < 22) {
    setTimeout(addArray, 1000);
  }
}

// Array-counter function

function addArray() {
  if (counter < 9) {
    newArr.unshift(counter);
    counter++;
    console.log(newArr);
  } else {
    newArr.unshift(counter);
    newArr.length = 9;
    counter++;
    console.log(newArr);
  }

  arrayCounter();
}
