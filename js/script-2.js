// Оператори

// Виведення даних
// alert("Hello world!"); // Вікно з повідомленням

// Отримання даних
// confirm("Are you sure?"); // Вікно з підтвердженням
// const isConfirmed = confirm("Are you sure?"); // true/false
// console.log(isConfirmed); // true/false
// const myName = prompt("Enter your name"); // Вікно з полем для вводу
// console.log(myName); // Введене ім'я

// console.log(Boolean("0")); // true
// console.log(Boolean("")); // false
// console.log(Boolean(0)); // false
// console.log(Boolean(1)); // true

// Логічні оператори
// console.log(5>3); // true
// a === b;
// a !== b;
// a > b;

// Switch
// let a = 1;

// switch (a) {
//   case 1:
//     console.log("a is 1");
//     break;
//   case 2:
//     console.log("a is 2");
//     break;
//   default:
//     console.log("a is not 1 or 2");
// }

// let cost;
// const subscription = "pro"; // free, pro, vip
// switch (subscription) {
//   case "free":
//     cost = 0;
//     break;
//   case "pro":
//     cost = 100;
//     break;
//   case "vip":
//     cost = 500;
//     break;
//   default:
//     console.log("Unknown subscription type");
// }

// console.log(cost); // 100

// console.log("Hello world!"); // Hello world!

// let variable;
// variable = 1;
// variable = 0;
// // variable = -3;

// if (variable > 0) {
//   console.log("true"); // Variable is truthy
// } else if (variable <= 0) {
//   console.log("false"); // Variable is falsy
// }

// const variable1 = 0;

// if (variable1 > 10) {
//   console.log(variable1 - 5);
// } else if (variable1 < 10) {
//   console.log(variable1 + 5);
// }

// const monthNumber = parseInt(prompt("Enter a month number: "));

// switch (monthNumber) {
//   case 1:
//     console.log("January");
//     break;
//   case 2:
//     console.log("February");
//     break;
//   case 3:
//     console.log("March");
//     break;
//   case 4:
//     console.log("April");
//     break;
//   case 5:
//     console.log("May");
//     break;
//   case 6:
//     console.log("June");
//     break;
//   case 7:
//     console.log("July");
//     break;
//   case 8:
//     console.log("August");
//     break;
//   case 9:
//     console.log("September");
//     break;
//   case 10:
//     console.log("October");
//     break;
//   case 11:
//     console.log("November");
//     break;
//   case 12:
//     console.log("December");
//     break;
//   default:
//     console.log("Invalid month number");
//     break;
// }

const threeDigitsNum = parseInt(prompt("Enter a three-digit number: "));
console.log(threeDigitsNum);

if (isNaN(threeDigitsNum)) {
  console.log("Invalid input. Please enter a number.");
} else if (threeDigitsNum < 100 || threeDigitsNum > 999) {
  console.log("Invalid input. Please enter a three-digit number.");
} else {
  const firstDigit = Math.floor(threeDigitsNum / 100);
  // console.log(firstDigit);

  const secondDigit = Math.floor((threeDigitsNum % 100) / 10);
  // console.log(secondDigit);

  const thirdDigit = threeDigitsNum % 10;
  // console.log(thirdDigit);

  const sum = firstDigit + secondDigit + thirdDigit;
  // console.log(sum);

  console.log(`Digits: ${firstDigit}, ${secondDigit}, ${thirdDigit}`); // Digits: 1, 2, 3
  console.log(`Sum of digits: ${sum}`); // Sum of digits: 12
}
