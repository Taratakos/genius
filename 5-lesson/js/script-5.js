// Замикання
/*
Цей код демонструє концепцію замикання в JavaScript.

Пояснення:
Функція createNewSum:

Це функція вищого порядку, яка приймає параметр n.
Вона повертає внутрішню функцію (функцію, визначену всередині іншої функції). Внутрішня функція не приймає жодних параметрів, але виводить у консоль суму 10 і n.
Замикання:

Коли внутрішня функція повертається, вона "запам'ятовує" значення n із зовнішньої функції, навіть після завершення виконання зовнішньої функції. Це називається замиканням.
Використання:

const calc = createNewSum(5);:

Викликається функція createNewSum із параметром n = 5.
Вона повертає внутрішню функцію, яка зберігається у змінній calc.
На цьому етапі внутрішня функція "запам'ятовує", що n = 5.
calc();:

Коли викликається calc, виконується внутрішня функція.
Внутрішня функція виводить у консоль 10 + n. Оскільки n = 5, результат — 15.
Результат:
При виконанні цього коду в консолі буде виведено:

Це простий приклад того, як замикання дозволяють функціям зберігати доступ до змінних із їхнього зовнішнього оточення.
*/
// Замикання в JavaScript
// function createNewSum(n) {
//   return function () {
//     console.log(10 + n);
//   };
// }

// const calc = createNewSum(5);

// calc();

// 2. Приклад замикання
// Це простий приклад замикання, яке дозволяє зберігати значення n навіть після завершення виконання зовнішньої функції.
// function createNewNumber(n) {
//   return function (number) {
//     return number + n;
//   };
// }

// const addFive = createNewNumber(5);
// console.log(addFive(10)); // 15

// 3. Приклад замикання
// Це ще один приклад замикання, який дозволяє створювати функцію для генерації URL-адрес.
// function createUrl(domain) {
//   return function (url) {
//     return `https://${url}.${domain}`;
//   };
// }

// const comUrl = createUrl("com");
// console.log(comUrl("google"));

// this
// function hello() {
//   console.log("Hello", this);
// }

// hello();

// const user = {
//   name: "John",
//   age: 30,
//   sayHello: hello,
// };

// user.sayHello(); // Hello { name: 'John', age: 30, sayHello: [Function: hello] }
// 1
// function abc() {
//   console.log("В середині функції abc");
//   console.log(this); // undefined
// }
// abc();

// document.querySelector("p").onclick = abc

// 2
// function changeColor() {
//   console.log(this);
//   this.style.background = "green";
// }

// document.querySelector("p").onclick = changeColor; // this вказує на елемент, на якому викликали функцію

// 3
// function changeColor() {
//   this.style.background = "green";
// }

// const user = document.querySelectorAll("div");

// user.forEach((item) => {
//   item.onclick = changeColor;
//   item.style.cursor = "pointer";
// });

// 4
// function sayHello() {
//   console.log(this);
// }

// const user = {
//   name: "John",
//   age: 30,
//   sayHello: sayHello,
//   sayHelloWindow: sayHello.bind(window),
//   info: function (city) {
//     console.log(`Name is ${this.name}`);
//     console.log(`Age is ${this.age}`);
//     console.log(`City is ${city}`);
//   },
// };

// user.info(); // Name is John Age is 30

// const user2 = {
//   name: "Anna",
//   age: 30,
// };

// const user3 = {
//   name: "Natalia",
//   age: 50,
// };

// user.info.bind(user2)("Kyiv"); // Name is Anna, Age is 30, City is Kyiv
// const nataInfo = user.info.bind(user3, "Lviv")(); /

// nataInfo(); // Name is Natalia, Age is 50, City is Lviv

// 5 call
// const userInfo = {
//   name: "name",
//   age: 30,
//   logInfo: function (job) {
//     console.group(`${name} info:`);
//     console.log(`Name is : ${this.name}`);
//     console.log(`Age is : ${this.age}`);
//     console.log(`Job is : ${job}`);
//     console.groupEnd();
//   },
// };

// const userVano = {
//   name: "Ivan",
//   age: 40,
// };

// userInfo.logInfo.call(userVano, "developer"); // Name is : Ivan, Age is : 40, Job is : developer

// 6 apply к-сть аргументів обмежена. треба передавати масив аргументів в тій послідовності, в якій вони прописані в методі
// const userInfo = {
//   name: "name",
//   age: 30,
//   logInfo: function (job, city) {
//     console.group(`${name} info:`);
//     console.log(`Name is : ${this.name}`);
//     console.log(`Age is : ${this.age}`);
//     console.log(`Job is : ${job}`);
//     console.log(`City is : ${city}`);
//     console.groupEnd();
//   },
// };

// const userVano = {
//   name: "Ivan",
//   age: 40,
// };

// userInfo.logInfo.apply(userVano, ["developer", "Lviv"]);

// const bukovel = {
//   hotel: "Bukovel",
//   stars: 5,
// };

// const turyst = {
//   hotel: "Turyst",
//   stars: 3,
// };

// const message = function (name, stars) {
//   console.log(`${name}, Welcome to ${this.hotel}, stars ${stars}`);
// };

// message.call(bukovel, "Ivan", 5);
// message.call(turyst, "Petro", 3);

// message.apply(bukovel, ["Ivan", 5]);
// message.apply(turyst, ["Petro", 3]);

// message.bind(bukovel, "Ivan", 5)();
// message.bind(turyst, "Petro", 3)();

/* Cart TASK
 */
const cart = {
  showItems() {
    console.log("In the cart:", this.items);
  },
};

const woman = {
  items: ["dress", "shoes"],
};

const man = {
  items: ["pants", "shirt"],
};

const child = {
  items: ["toys", "games"],
};

// cart.showItems.bind(woman)(); // In the cart: [ 'pants', 'shirt' ]

document
  .querySelector("#woman")
  .addEventListener("click", cart.showItems.bind(woman));

document
  .querySelector("#man")
  .addEventListener("click", cart.showItems.bind(man));

document
  .querySelector("#kids")
  .addEventListener("click", cart.showItems.bind(child));

// const infoCar = {
//   name: "BMW",
//   model: "X5",
//   color: "black",
//   year: 2020,
//   showInfo() {
//     console.log(
//       `Name is ${this.name}, year is ${this.year}, color is ${this.color}`
//     );
//   },
// };

// console.log(infoCar.showInfo());

// car2 = {
//   name: "Audi",
//   model: "A6",
//   color: "white",
//   year: 2021,
//   // showInfo: infoCar.showInfo,
// };

// infoCar.showInfo.bind(car2)();
// infoCar.showInfo.call(car2);
// infoCar.showInfo.apply(car2);

// Homework
/* 1
1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
бал і кількість пропущених занять
2) написати метод який буде виводити цю інформацію
3) написати три варіанти студентів
4) прикріпити знначення за допомогою call apply bind

const studentInfo = {
  name: "name",
  specialty: "engineer",
  averageScore: 95,
  missedLesson: 3,
  logInfo() {
    console.group(`${this.name}'s information:`);
    console.log(`Student name: ${this.name}`);
    console.log(`Specialty: ${this.specialty}`);
    console.log(`Average score : ${this.averageScore}`);
    console.log(`Missed lessons : ${this.missedLesson}`);
    console.groupEnd();
  },
};

const studentJohn = {
  name: "John",
  specialty: "programmer",
  averageScore: 99,
  missedLesson: 1,
};

const studentAnn = {
  name: "Ann",
  specialty: "teacher",
  averageScore: 55,
  missedLesson: 10,
};

const studentOscar = {
  name: "Oscar",
  specialty: "doctor",
  averageScore: 100,
  missedLesson: 9,
};

studentInfo.logInfo.apply(studentJohn);
studentInfo.logInfo.call(studentAnn);

const oscarLogInfo = studentInfo.logInfo.bind(studentOscar);
oscarLogInfo();
*/

/* 2 Написати дві кнопки і закріпити на них функції
при натисканні на кнопку html - має видати коротке визначення що це таке
при натисканні на кнопку css - має видати коротке визначення що це таке


function showHtmlDefinition() {
  alert(
    '"HTML (HyperText Markup Language) — це мова розмітки, яка використовується для створення структури веб-сторінок.'
  );
}

function showCssDefinition() {
  alert(
    "CSS (Cascading Style Sheets) — це мова стилів, яка використовується для оформлення веб-сторінок, включаючи кольори, шрифти та макет."
  );
}

document
  .getElementById("htmlButton")
  .addEventListener("click", showHtmlDefinition);
document
  .querySelector("#cssButton")
  .addEventListener("click", showCssDefinition);
*/

/**
// 3 Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
функція має повертати назву товару і вартість
перевірити на варіантах:
1) banana 30, 4,5
2) cherry 58, 1,3
3) jrange 89. 3,4
 */

const calculateProductPrice = function (productName, pricePerKg, productQuantity) {
  if (
    typeof productName !== "string" ||
    typeof pricePerKg !== "number" ||
    typeof productQuantity !== "number"
  ) {
    console.error("Invalid input");
    return;
  }
  if (pricePerKg <= 0 || productQuantity <= 0) {
    console.error("Price and quantity must be positive numbers.");
    return;
  }
  const totalPrice = (pricePerKg * productQuantity).toFixed(2);
  console.log(`${productName}: ${totalPrice}`);
  return totalPrice;
};

calculateProductPrice("banana", 30, 4.5); // banana: 135.00
calculateProductPrice("cherry", 58, 1.3); // cherry: 75.40
calculateProductPrice("orange", 89, 3.4); // orange: 302.60
