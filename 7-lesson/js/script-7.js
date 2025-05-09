/**
 * 

class CircleBox {
  constructor(selector) {
    this.$el = document.querySelector(selector);
  }

  hide() {
    this.$el.style.display = "none";
  }
  show() {
    this.$el.style.display = "block";
  }
}

class CircleItem extends CircleBox {
  constructor(options) {
    super(options.selector);
    this.$el.style.width = options.size + "px";
    this.$el.style.height = options.size + "px";
    this.$el.style.borderRadius = "50%";
    this.$el.style.background = options.color;
  }
}

const CircleRed = new CircleItem({
  selector: "#circleRed",
  color: "red",
  size: 50,
});

const CircleGreen = new CircleItem({
  selector: "#circleGreen",
  color: "green",
  size: 80,
});

const CircleBlack = new CircleItem({
  selector: "#circleBlack",
  color: "black",
  size: 30,
});

*/

/**
Функція-конструктор Car:

// Використовується для створення об'єктів із властивостями name та color.
// Ключове слово this посилається на новий об'єкт, який створюється.
// додаємо методи через прототип


function Car(name, color) {
  this.name = name;
  this.color = color;
}

Car.prototype.message = function () {
  console.log(`${this.name} is ${this.color} color`);
};

Car.prototype.start = function () {
  console.log(`${this.name} is start`);
};

const bmw = new Car("bmw", "red");
const opel = new Car("opel", "green");

console.log(bmw);
console.log(opel);
 */

/**
 * Міксини

let message = {
  messageHello() {
    console.log(`Hello, ${this.name}`);
  },
  
  messageBye() {
    console.log(`Bye, ${this.name}`);
  },
};

class User {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(User.prototype, message);

new User("John").messageHello();
*/
/**
 * Створіть функцію-конструктор Calculator, який створює об’єкти з трьома
методами:
read() запитує два значення за допомогою prompt і запам’ятовує їх у
властивостях об’єкта.
sum() повертає суму цих властивостей.
mul() повертає результат множення даних властивостей.
 */

function Calculator() {
  // запитує два значення через промт і запам'ятовує їх у властивостях об'єкта
  this.read = function () {
    this.a = parseFloat(prompt("Enter the first number", 0));
    this.b = parseFloat(prompt("Enter the second number", 0));
  };
  // sum() повертає суму цих властивостей.
  this.sum = function () {
    const numberSum = this.a + this.b;
    console.log(numberSum);
    return numberSum;
  };
  // mul() повертає результат множення даних властивостей.
  this.mul = function () {
    const numberMultiplication = this.a * this.b;
    console.log(numberMultiplication);
    return numberMultiplication;
  };
}

const calculator = new Calculator();
calculator.read();
console.log(`First number:${calculator.a}, Second number:${calculator.b}`);
console.log(calculator);

// console.log(`Sum:`, calculator.sum());
// console.log(`Mul:`, calculator.mul());
calculator.sum();
calculator.mul();