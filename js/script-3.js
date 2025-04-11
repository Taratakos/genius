// This is a simple while loop that decrements a variable until it reaches 0
// let a;

// a = 5;
// while (a) {
//   console.log(a);
//   a--;
// }

// while (a) console.log(a--);

// a = 0;
// while (a < 5) {
//   console.log(a);
//   a++;
// }

// do while loop

// a = 0;

// do {
//   console.log(a);
//   a++;
// } while (a < 5);

// continue && break

// let sum = 0;
// while (true) {
//   let number = parseInt(prompt("Enter a number: "));
//   if (!number) {
//     break; // Exit the loop if the user enters a
//     //
//   }
//   sum += number;
//   1;
// }
// console.log("Sum: " + sum);

// continue
// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) {
//     continue; // Skip even numbers
//   }
//   console.log(i); // Print odd numbers
// }

// Arrays
// const arr = ["Apple", "Banana", "Cherry"];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (const element of arr) {
//   console.log(element);
// } //

// for (const key in arr) {
//   console.log(key); // Index of the array
//   console.log(arr[key]); // Value of the array at that index
// }

// const fruits = [
//   { id: 1, name: "Apple" },
//   { id: 2, name: "Banana" },
//   { id: 3, name: "Cherry" },
//   { id: 4, name: "Strawberry" },
// ];

// console.log(fruits.find((fruit) => fruit.id === 2));
// console.log(fruits.filter((fruit) => fruit.id > 1));

// const result = fruits.map((fruit) => fruit.name.length);
// console.log(result);

// const arrNames = ["John", "Jane", "Doe"];

// const strArrNames = arrNames.join(", ");
// console.log(strArrNames); // John, Jane, Doe

// const newArr = strArrNames.split(", ");
// console.log(newArr); // ['John', 'Jane', 'Doe']

// const numberArr = [1, 2, 3, 4, 5];
// const res = numberArr.reduce((acc, currenItem) => acc + currenItem, 0);

// console.log(res); // 15

// let number;
// do {
//   number = prompt("Enter a number greater than 100:");
//   if (number === null || number.trim() === "") {
//     console.log("Input canceled or empty.");
//     break; // Exit the loop if the user cancels
//   }

//   number = parseInt(number);
// } while (number <= 100 || isNaN(number));

// if (number > 100) {
//   console.log(`You entered a valid number: ${number}`);
// }

// const girls = [
//   { age: 23, name: "Оля" },
//   { age: 29, name: "Аня" },
//   { age: 10, name: "Юля" },
//   { age: 20, name: "Катя" },
// ];

// const age =
//   girls.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue.age;
//   }, 0) / girls.length;
// console.log(age);


const items = ["apple", "banana", "apple", "orange", "banana", "apple"];

const count = items.reduce((accumulator, item) => {
  accumulator[item] = (accumulator[item] || 0) + 1;
  return accumulator;
}, {});

console.log(count);
