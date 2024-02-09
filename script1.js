// Practice Set 6
// Q1-3
let prompt = require("prompt-sync")();
let runAgain = true;

const canDrive = (age) => {
  return age >= 18 ? true : false;
};

while (runAgain) {
  let age = prompt("Enter your age : ");
  age = Number.parseInt(age);

  if (age < 0) console.error("Please enter the valid age");

  if (canDrive(age)) console.log("You can drive!");
  else console.log("You can not drive!");

  runAgain = confirm("Do you want to play again?");
}

// Q4
let num = prompt("Enter the number : ");
num = Number.parseInt(num);

if (num > 4) location.href = "https://google.com";

// Q5
let color = prompt("Enter the color : ");
document.body.style.background = color;
