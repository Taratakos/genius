// console.log("Hello, World!");
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof 0);
// console.log(typeof "0");

// Objects
let user = {
  name: "John",
  age: 30,
  work: true,
  hobbies: ["reading", "gaming"],
  "like birds": true,
  greet: function () {
    console.log("Hello, " + this.name);
  },
};
// console.log(user.name); // John
// console.log(user.hobbies);
// console.log(user.greet()); // Hello, John
// console.log(user["like birds"]); // true
// console.log(user["age"]); // 30

/**
 * for in loop
 */
for (let key in user) {
  // console.log(key + ": " + user[key]); // name: John, age: 30, work: true, hobbies: reading,gaming, like birds: true
  // greet: function () { console.log("Hello, " + this.name); } // not printed

  // console.log(user[key]); // name, age, work, hobbies, like birds, greet
}

// const user2 = {};
// user2.name = "NIK";
// user2.age = 55;
// console.log(user2);

// HOMEWORK
// 1
// let name;
// let city;
// name = "John";
// city = name;
// console.log(city); // John

// 2
// let name = "Olga";
// console.log(`Hello, ${name}`); // Hello, Olga
// console.log(`Hello, ${1}`); // Hello, 1
// console.log(`Hello, ${true}`); // Hello, true
// console.log(`Hello, ${"name"}`); // Hello, name

// 3
// let a = "5";
// let b = "13jhhj";
// let c = "12.58jhhd";
// console.log(typeof Number(a));
// console.log(typeof parseInt(b)); // 13
// console.log(typeof parseFloat(c)); // 12.58

// 4
// console.log(0.1 + 0.2 === 0.3); // false
// console.log((0.1 * 10 + 0.2 * 10) / 10 === 0.3); // true
// console.log((0.1 + 0.2).toFixed(1) === "0.3"); // true

// 5
// console.log(Math.max(1, 2, 3, 4, 5)); // 5
// console.log(Math.min(1, 2, 3, 4, 5)); // 1

// 6 поверніть випадкове число в діапазоні від 2 до 4
// console.log(Math.floor(Math.random() * (4 - 2) + 2));

// 7
const message = "Hello, World!";
// console.log(message.length); // 13
// console.log(message.toUpperCase()); // HELLO, WORLD!

// 9
const userObj = {};
userObj.name = "John";
userObj.age = 30; // 30
userObj.city = "New York"; // New York
// console.log(userObj); // { name: 'John', age: 30, city: 'New York' }
delete userObj.city;
userObj["like Flowers"] = true;
// console.log(userObj); // { name: 'John', age: 30, like Flowers: true }

for (let keyObj in userObj) {
  // console.log(keyObj);
  // console.log(userObj[keyObj]); // John, 30, true

  console.log(`${keyObj}: ${userObj[keyObj]}`); // name: John, age: 30, like Flowers: true
}
