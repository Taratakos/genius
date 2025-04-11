// This code demonstrates the concept of function hoisting in JavaScript.
// Function hoisting allows functions to be called before they are defined in the code.

// const a = function () {
//   c();
//   console.log("Function a called");
//   b();
// };

// const b = function () {
//   console.log("Function b called");
// };

// const c = function () {
//   console.log("Function c called");
// };

// a();

// rest parameters
// pseudo array of arguments
// const addName = function (...args) {
//   const arg = Array.from(arguments);
//   console.log(arguments);
//   console.log(arg);
//   console.log(args);
// };

// addName(1, 2, 3);
// addName(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// callback function
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// function showOk() {
//   console.log("You say OK");
// }
// function showCancel() {
//   console.log("You say NO");
// }

// ask("Do you want to continue?", showOk, showCancel);

// // аргументи showOk і showCancel передаються в ask як колбеки
// // ask("Do you want to continue?", function () {
// //   console.log("You say OK");

console.log(document);

// const addNumber = (number) => {
//   let sum = Number(number) + 10;
//   return console.log(sum);
// };

// const numberRef = document.querySelector('input[name="number"]');
// const buttonRef = document.querySelector("button");
// // console.log(buttonRef);

// buttonRef.addEventListener("click", function () {
//   addNumber(numberRef.value);
//   console.log(numberRef.value);
//   const number = numberRef.value;
//   if (number > 0) {
//     console.log("Positive number");
//   } else if (number < 0) {
//     console.log("Negative number");
//   } else {
//     console.log("Zero");
//   }
// });

// Homework
// 1 Перепишіть функцію, використовуючи '?' або '||'
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Батьки дозволили?");
//   }
// }

// function checkAge2(age) {
//   return age > 18 || confirm("Батьки дозволили?");
// }

// function checkAge3(age) {
//   return age > 18 ? true : confirm("Батьки дозволили?");
// }

// function checkAge4(age) {
//   return age > 18 ? true : confirm("Батьки дозволили?");
// }

// 2 Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.
// function min(a, b) {
//   return a < b ? a : b;
// }

// function min2(a, b) {
//   return Math.min(a, b);
// }

// 3
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:

function ask(question, yes, no) {
  confirm(question) ? yes() : no();
}
ask(
  "Ви згодні?",
  () => {
    alert("Ви погодились.");
  },

  () => {
    alert("Ви скасували виконання.");
  }
);
