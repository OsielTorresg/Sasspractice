// // conditionals
// //syntax
// if (condition) {
//   //the body of the if
// }

// check if the number is positive

// const number = prompt("Enter a number");

// // check if the number is greater then 0

// if (number > 0) {
//   // Our conditional statemtn is checking for only positive numbers
//   //the body of the if statement
//   console.log("The number is positive");
// } else {
//   // Reads anything thats negative!
//   console.log("this is a negative number ");
// }

// console.log("The if statement is easy!");

//----------------------------------------------------

// FOR LOOPS
//Syntax

// for (intializeExpression; condition; updateExpression) {
//   //for loop the body
// }

// set our n 5 stopping point

// for (let i = 1; i <= 5; i++) {
//   // Our condition is going to read from 0 -> 5
//   console.log(i); //to see result
// }

//ARROW FUNCTIONS

//Regular function
// let Regular = function (x, y) {
//   // We created a "Regular" function and added parameters x , y
//   return x * y; // put any value in x , y
// };

// console.log(Regular(10, 20));

// // ES6

// let Arrow = (x, y) => {
//   return x * y;
// };

// console.log(Arrow(10, 20));

// let age = 18;  // creating a variable with the value of the person

// let welcome = age < 18 ? () => console.log("Baby") : () => console.log("Adult");
// // If the Age is greater then 18 console.log(Adult)

// welcome();

// // ES6 "This" Keyword

// function Class() {
//   // We created a class with people
//   (name1 = "Sofia"), //Old JS
//     (this.name2 = "Kabah"), // ES6 JS
//     //-------------------------------------
//     //Regular Function Old JS
//     (this.sayAge = function () {
//       console.log(name1);
//       //-----------------------------------------
//       //Arrow function
//       let innerfunc = () => {
//         console.log(this.name2);
//       };
//       innerfunc();
//     });
// }

// const x = new Class();
// x.sayAge();
