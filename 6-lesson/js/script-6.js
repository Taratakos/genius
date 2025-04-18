// Модуль №6. Об"єкти та класи
/**
 * Процедурне програмування
const sum = 2000;
const month = 12;
const tax = 1000;

const credit = (sum, manth, tax) => {
  const result = (sum + tax) / month;
  return result;
};
console.log(credit(sum, month, tax)); // 250

 * Об'єктно орієнтоване програмування
const myCredit = {
  sum: 2000,
  month: 12,
  tax: 1000,
  credit: function () {
    const result = (this.sum + this.tax) / this.month;
    return result;
  },
};
myCredit.credit(); // 250
console.log(myCredit.credit()); // 250

// Клас - це шаблон для створення об'єктів. Він визначає, які властивості та методи матимуть об'єкти, створені з цього класу. Клас є основою об'єктно-орієнтованого програмування (ООП).
// Об'єкт - це структура даних, яка обєднує дані та функції, які працюють з цими даними. Об'єкти можуть містити властивості (дані) та методи (функції).
// Інтерфейс - це набір методів, які клас повинен реалізувати. Інтерфейси дозволяють визначити, як об'єкти можуть взаємодіяти між собою, не вказуючи, як саме ці методи реалізовані. Це дозволяє створювати більш гнучкі та розширювані програми.
// Bank — це клас (шаблон), який приймає налаштування (options) під час створення нового екземпляра (userBank1)
class Bank {
  static bankName = "Bank of Ukraine"; // Це статична властивість, доступна на рівні класу (Bank.bankName), але не є частиною окремих екземплярів (userBank1.bankName)
  constructor(options) {
    this.sum = options.sum;
    this.month = options.month;
    this.tax = options.tax;
  }

  credit() {
    console.log(`I am Bank of Ukraine`);
    const result = +((this.sum + this.tax) / this.month).toFixed(2); // Використовуємо toFixed для обмеження до 2 знаків після коми
    return result;
  }
}

const userBank1 = new Bank({
  sum: 2000,
  month: 12,
  tax: 1000,
});

console.log(userBank1);
console.log(userBank1.credit()); // 250
console.log(Bank.bankName); // Bank of Ukraine
console.log(userBank1.bankName); // undefined

class NewBank extends Bank {
  constructor(options) {
    super(options); // Викликає конструктор батьківського класу Bank
    this.card = options.card;
  }
  // credit() {
  //   console.log(`I am Aval`);
  //   const result = Math.floor((this.sum + this.tax) / this.month);
  //   return result;
  // }
  credit() {
    super.credit();
    return console.log(`I am Aval`);
  }
}

const aval = new NewBank({
  sum: 3000,
  month: 6,
  tax: 500,
  card: "Visa",
});
console.log(aval.card);

console.log(aval.credit()); // 583.3333333333334

// 
// get & set
 * get - дозволяє отримати значення властивості
 * set - дозволяє змінити значення властивості
class User {
  constructor(props) {
    this.name = props.name;
    this.age = props.age;
  }

  firstName = "";
  lastName = "";
  age = "";
  city = "";

  set userName(newName) {
    const newNameRaw = newName.split(" ");
    this.firstName = newNameRaw[0];
    this.lastName = newNameRaw[1];
  }

  get userName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const taras = new User({
  name: "Taras Shevchenko",
  age: 20,
  city: "Kyiv",
});
console.log(taras);

const john = new User({
  name: "John Sins",
  age: 20,
  city: "Kyiv",
});
console.log(john);
 */

/**
//  
// 
class Manager {
  constructor(name, discount) {
    this.name = name;
    this.age = discount;
    this.discountValue = discount;
  }

  // incrementDiscount() {
  //   this.discountValue += 1;
  // }
}

const ann = new Manager("Ann", 5);
const ivan = new Manager("Ivan", 10);

// console.log(ann.discountValue);
// ann.incrementDiscount();
// console.log(ann.discountValue); // 6

Manager.prototype.incrementDiscount = function () {
  this.discountValue += 1;
};

console.log(ann.discountValue);
ann.incrementDiscount();
console.log(ann.discountValue); // 6
console.dir(Manager);
 */

/**
brand, model, year — це властивості (properties).
drive — це метод (method), тобто функція всередині об'єкта.
// ООП - це підхід до програмування. де програма моделюється як набір обєктів, які взаємодіють між собою. 
Основні принципи ООП
1. інкапсуляція - приховування деталей реалізації

const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2024,
  drive: function () {
    console.log("the car is driving");
  },
};

console.log(car.brand);
car.drive();

class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  drive() {
    console.log(`${this.brand} ${this.model} is driving`);
  }
}

const myCar = new Car("BMW", "X5", 2020);
myCar.drive();

// 1.Інкапсуляція — приховування деталей реалізації:
class User {
  #password;

  constructor(name, password) {
    this.name = name;
    this.password = password;
  }

  checkPassword(pass) {
    return this.password === pass;
  }
}

const user = new User("Anna", 12345);
console.log(user.checkPassword(12345));
// console.log(user.#password); ❌ помилка, бо #password — приватне

// 2. Наслідування - можливість створити новий клас на основі іншого
class Animal {
  speak() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Woof!");
  }
}

const myDog = new Dog();
myDog.speak();

// 3. Поліморфізм - об’єкти можуть мати спільний інтерфейс, але реалізовувати його по-різному:

const animals = [new Animal(), new Dog()];
animals.forEach((animal) => animal.speak());

// 4. Абстракція - створення узагальнених концепцій, які приховують складність. В JS це більше про продумане API класів — не давати користувачу змінювати те, що йому не треба.

class Usero {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }
}

const user1 = new Usero("Olga", 30);
user1.sayHi();

const user2 = new Usero("Maks", 15);
user2.sayHi();

// BankAccount Уяви, що ти розробляєш додаток для банку. Потрібно створити клас BankAccount, який описує банківський рахунок користувача.

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`${this.owner} deposite $${amount}`);
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(`${this.owner} withdrew $${amount}`);
    } else {
      console.log(`Not enough money. Current balance $${this.balance}`);
    }
  }

  getBalance() {
    console.log(`💰 ${this.owner}'s balance: $${this.balance}`);
    return this.balance;
  }
}

const myAcc = new BankAccount("Ivan", 100);
console.log(myAcc);

myAcc.getBalance();
myAcc.deposit(50);
myAcc.withdraw(30);
myAcc.withdraw(200);
myAcc.getBalance()

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getInfo() {
    return `${this.name} - $${this.price}`;
  }
}

class DiscountedProduct extends Product {
  constructor(name, price, discountPercent) {
    super(name, price); // викликає конструктор батьківського класу
    this.discountPercent = discountPercent;
  }

  getDiscountedPrice() {
    return this.price - (this.price * this.discountPercent) / 100;
  }

  getInfo() {
    return `${this.name} - $${this.getDiscountedPrice()} (знижка ${
      this.discountPercent
    }%)`;
  }
}

const regularProduct = new Product("Milk", 3.5);
console.log(regularProduct.getInfo());

const saleProduct = new DiscountedProduct("Cheese", 5, 20);
console.log(saleProduct.getInfo());
console.log(saleProduct.getDiscountedPrice());

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addProduct(product) {
    this.items.push(product);
    console.log(`Added: ${product.name} $(${product.price})`);
  }

  removeProduct(productName) {
    const index = this.items.findIndex((item) => item.name === productName);
    if (index !== -1) {
      const removed = this.items.splice(index, 1)[0];
      console.log(`Removed: ${removed.name}`);
    } else {
      console.log(`Product "${productName}" not found`);
    }
  }

  getTotal() {
    const total = this.items.reduce((sum, item) => sum + item.price, 0);
    console.log(`Total price: ${total}`);
    return total;
  }

  showItems() {
    this.items.forEach((item, i) => {
      console.log(`${i + 1}. ${item.name} - ${item.price}`);
    });
  }
}

class PremiumCart extends ShoppingCart {
  constructor(discountPercent) {
    super();
    this.discountPercent = discountPercent;
  }

  getTotal() {
    const total = super.getTotal();
    const discounted = total - (total * this.discountPercent) / 100;
    return discounted;
  }
}

const apple = new Product("Apple", 15);
const milk = new Product("Milk", 50);
const bread = new Product("Bread", 30);
console.log(apple);
console.log(milk);
console.log(bread);

const cart = new ShoppingCart();

cart.addProduct(apple);
cart.addProduct(milk);
cart.addProduct(bread);

cart.getTotal();

cart.removeProduct("milk");
cart.removeProduct("Milk");

cart.showItems();
cart.getTotal();

const premiumCart = new PremiumCart(10); // 10% знижки
premiumCart.addProduct(apple);
premiumCart.addProduct(bread);
console.log("👑 Premium cart total:", premiumCart.getTotal()); // 5.4

class VipCart extends PremiumCart {
  constructor(discountPercent) {
    super(discountPercent); // викликаємо конструктор PremiumCart
  }

  getTotal() {
    const discountedTotal = super.getTotal(); // знижка з PremiumCart

    if (discountedTotal > 100) {
      console.log("Bonus applied: -10$");
      return discountedTotal - 10;
    }

    return discountedTotal;
  }
}

const tv = new Product("TV", 120);
const phone = new Product("Phone", 80);

const vipCart = new VipCart(10);

vipCart.addProduct(tv);
vipCart.addProduct(phone);

console.log("VIP TOTAL", vipCart.getTotal());
 */

/**
 * 


class Vehicle {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  // збільшує швидкість
  accelerate(amount) {
    this.speed += amount;
    console.log(`${this.brand} accelerated to ${this.speed}km/h `);
  }
  // зменшує швидкість
  brake(amount) {
    this.speed = Math.max(0, this.speed - amount);
    console.log(`${this.brand} broke to ${this.speed}km/h `);
  }

  getInfo() {
    console.log(`Marka avto ${this.brand}, shvydkist ${this.speed}km per hour`);
    return `${this.brand} is going ${this.speed} `;
  }
}

class Car extends Vehicle {
  constructor(brand, speed, fuelLevel = 100) {
    super(brand, speed);
    this.fuelLevel = fuelLevel;
  }

  refuel(amount) {
    this.fuelLevel = Math.min(100, this.fuelLevel + amount);
    console.log(`${this.brand} refueled to ${this.fuelLevel}%`);
  }

  getInfo() {
    console.log(`Marka avto ${this.brand}, shvydkist ${this.speed}km per hour`);
    return `${this.brand} is going ${this.speed}, with fuel level ${this.fuelLevel}% `;
  }
}

class ElectricCar extends Car {
  constructor(brand, speed, batteryLevel = 100) {
    super(brand, speed);
    this.batteryLevel = batteryLevel;
  }

  charge(amount) {
    this.batteryLevel = Math.min(100, this.batteryLevel + amount);
    console.log(`${this.brand} charged to ${this.batteryLevel}%`);
  }

  getInfo() {
    return `⚡ ${this.brand}: ${this.speed} km/h, Battery: ${this.batteryLevel}%`;
  }
}

const bmw = new Car("BMW", 50);

bmw.accelerate(30);
bmw.brake(40);
bmw.refuel(10);

const tesla = new ElectricCar("Tesla", 60, 70);
tesla.accelerate(20); // 80
tesla.brake(50); // 30
tesla.charge(20); // 90%
console.log(tesla.getInfo());
 */

/**
 * Це спеціальні методи класу, які виглядають як властивості. Вони дозволяють:
❓ get — читати значення як ніби це властивість, але з можливістю запускати код
✏️ set — встановлювати значення як ніби це властивість, але з перевірками або модифікацією
🔑 this._celsius — приватна змінна, яка зберігає дані (по конвенції підкреслення)


class Temperature {
  constructor(celsius) {
    this._celsius = celsius;
  }

  get celsius() {
    return this._celsius;
  }

  set celsius(value) {
    if (typeof value !== "number") {
      console.log("❌ Температура має бути числом!");
      return;
    }

    this._celsius = value;
  }

  get fahrenheit() {
    return this._celsius * 1.8 + 32;
  }
}

const temp = new Temperature(25);
console.log(temp.celsius);
console.log(temp.fahrenheit);

temp.celsius = 30;
console.log(temp.celsius);
console.log(temp.fahrenheit);

temp.celsius = "дуже тепло"; // ❌ Температура має бути числом!
 */

/**
 * Створити телефонну книгу
1. створити початковий клас Abonent, де зберігатимуться ім*я і номер
2. створити set який прийматиме телефон і номер (Він повинен дозволяти змінювати ім'я та номер телефону.)
3. створити get який виводитиме данні про абонента
4. створити три різних юзери
5. вивести данні

Клас Abonent:

Має метод set для оновлення даних.
Має метод get для отримання інформації про абонента.
Клас PhoneBook:

Зберігає список абонентів у масиві contacts.
Має методи для додавання, видалення, пошуку та відображення абонентів.
Приклад використання:

Створюються три абоненти.
Вони додаються до телефонної книги.
Виконується пошук, видалення та відображення всіх абонентів.

class Abonent {
  constructor(name, phoneNumber) {
    this.name = name;
    this.phoneNumber = phoneNumber;
  }
  // Метод для оновлення даних абонента
  set(name, phoneNumber) {
    this.name = name;
    this.phoneNumber = phoneNumber;
  }
  // Метод для отримання інформації про абонента
  get() {
    return `Name: ${this.name}, Phone: ${this.phoneNumber}`;
  }
}

class PhoneBook {
  constructor() {
    this.contacts = [];
  }

  addAbonent(abonent) {
    this.contacts.push(abonent);
    console.log(`Added: ${abonent.get()}`);
  }

  removeAbonent(name) {
    const index = this.contacts.findIndex((contact) => contact.name === name);
    if (index !== -1) {
      const removed = this.contacts.splice(index, 1)[0];
      console.log(`Removed: ${removed.get()}`);
    } else {
      console.log(`Abonent with name: '${name}' not found`);
    }
  }

  findAbonent(name) {
    const abonent = this.contacts.find((contact) => contact.name === name);
    if (abonent) {
      console.log(`Found: ${abonent.get()}`);
      return abonent;
    } else {
      console.log(`Abonent withj name '${name}" not found`);
      return null;
    }
  }

  showAll() {
    console.log("Phone Book");
    this.contacts.forEach((contact, index) => {
      console.log(`${index + 1}. ${contact.get()}`);
    });
  }
}

// Приклад використання
const phoneBook = new PhoneBook();

const user1 = new Abonent("John", "123-456-789");
const user2 = new Abonent("Jane", "987-654-321");
const user3 = new Abonent("Alice", "555-555-555");
console.log(user1);
console.log(user2);
console.log(user3);

phoneBook.addAbonent(user1);
phoneBook.addAbonent(user2);
phoneBook.addAbonent(user3);

phoneBook.showAll();

phoneBook.findAbonent("Jane");

phoneBook.removeAbonent("John");
phoneBook.showAll();
 
// Базовий клас
class Vehicle {
  constructor(brand, speed = 0) {
    this.brand = brand;
    this.speed = speed;
  }

  accelerate(amount) {
    this.speed += amount;
    console.log(`${this.brand} accelerated to ${this.speed} km/h`);
  }

  brake(amount) {
    this.speed = Math.max(0, this.speed - amount);
    console.log(`${this.brand} slowed to ${this.speed} km/h`);
  }

  getInfo() {
    return `🚗 ${this.brand} is going ${this.speed} km/h`;
  }
}

// Наслідує Vehicle
class Car extends Vehicle {
  constructor(brand, speed, fuelLevel = 100) {
    super(brand, speed);
    this.fuelLevel = fuelLevel;
  }

  refuel(amount) {
    this.fuelLevel = Math.min(100, this.fuelLevel + amount);
    console.log(`${this.brand} refueled to ${this.fuelLevel}%`);
  }

  getInfo() {
    return `🚘 ${this.brand}: ${this.speed} km/h, Fuel: ${this.fuelLevel}%`;
  }
}

class ElectricCar extends Car {
  constructor(brand, speed, batteryLevel = 100) {
    super(brand, speed);
    this._batteryLevel = batteryLevel;
  }

  get batteryLevel() {
    return this._batteryLevel;
  }

  set batteryLevel(value) {
    if (value < 0 || value > 100) {
      console.log("❌ Battery must be between 0 and 100");
      return;
    }
    this._batteryLevel = value;
  }

  get isCharged() {
    return this._batteryLevel >= 80;
  }

  getInfo() {
    return `⚡ ${this.brand}: ${this.speed} km/h, Battery: ${this._batteryLevel}%`;
  }
}

const tesla = new ElectricCar("Tesla", 60, 50);
console.log(tesla.batteryLevel);
console.log(tesla.isCharged); //

tesla.batteryLevel = 90; // true
console.log(tesla.isCharged);

tesla.batteryLevel = 200; // ❌ Battery must be between 0 and 100
*/

/**
 * 🚚 Truck — приклад
🔸 Особливості:
Наслідує Vehicle

Має maxWeight — максимальна вантажопідйомність

Має _cargoWeight — поточна вага вантажу

Має:

set cargoWeight(value) — встановлює, але не більше maxWeight

get cargoWeight — повертає поточну вагу

get isOverloaded — true, якщо вантаж > maxWeight
 

class Truck extends Vehicle {
  constructor(brand, speed, maxWeight) {
    super(brand, speed); // викликає конструктор батьківського класу
    this.maxWeight = maxWeight;
    this._cargoWeight = 0;
  }

  set cargoWeight(value) {
    if (value > this.maxWeight) {
      console.log(`❌ Cannot load ${value}kg. Max is ${this.maxWeight}kg.`);
      return;
    }
    this._cargoWeight = value;
    console.log(`✅ Loaded ${value}kg of cargo.`);
  }

  get cargoWeight() {
    return this._cargoWeight;
  }

  get isOverloaded() {
    return this._cargoWeight > this.maxWeight;
  }

  getInfo() {
    return `🚛 ${this.brand}: ${this.speed} km/h, Cargo: ${this._cargoWeight}kg / ${this.maxWeight}kg`;
  }
}

const truck = new Truck("Volvo", 80, 1000);

console.log(truck.getInfo());
*/
