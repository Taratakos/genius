/**
 * 




const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");

btn1.addEventListener("click", () => console.log("button1 is clicked"));
btn2.addEventListener("contextmenu", () => console.log("button2 contextmenu"));
btn3.addEventListener("mouseout", () => console.log("btn3 mouseover"));
btn4.addEventListener("mousedown", () => console.log("btn4 mousedown"));
btn5.addEventListener("mousemove", () => console.log("btn5 mousemove"));
*/

/** 
 * 
const addBtn = document.querySelector("#add");
const removeBtn = document.querySelector("#remove");
const clickBtn = document.querySelector("#click");

const handleClick = () => {
  console.log("Hello !");
};

addBtn.addEventListener("click", () => {
  clickBtn.addEventListener("click", handleClick);
});

removeBtn.addEventListener("click", () => {
  clickBtn.removeEventListener("click", handleClick);
});

const clickBtn = document.querySelector("#click");

const infoClick = (event) => {
  console.log("event", event.target);
};

clickBtn.addEventListener("click", infoClick);
*/

/*

const form = document.querySelector(".form");
const loginInput = form.querySelector('input[type="text"]');
const passInput = form.querySelector('input[type="password"]');

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const login = loginInput.value;
  const password = passInput.value;
  console.log(login);
  console.log(password);
}
*/

/**
 *
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const item = document.querySelector("#item");

// parent.addEventListener("click", () => console.log("clicked Parent"));
// child.addEventListener("click", () => console.log("clicked Child"));
// item.addEventListener("click", () => console.log("clicked Item"));

const handleClick = (event) => {
  console.log("event:", event.target);
};

parent.addEventListener("click", handleClick);
*/

/**
 *
const nav = document.querySelector(".nav");
nav.addEventListener("click", handleClick);

function handleClick(event) {
  const checkClass = nav.querySelector("li.active");
  
  if (checkClass) {
    event.target.classList.remove("active");
  } else {
    event.target.classList.add("active");
}
}
*/

/**
 * 
const ball = document.querySelector(".ball");

ball.onmousedown = function (event) {
  function move(pageX, pageY) {
    ball.style.left = pageX - ball.offsetWidth / 2 + "px";
    ball.style.top = pageY - ball.offsetHeight / 2 + "px";
  }
  
  move(event.pageX, event.pageY);
  
  function onMouseMove(event) {
    move(event.pageX, event.pageY);
  }
  
  document.addEventListener("mousemove", onMouseMove);
  ball.onmouseup = function () {
    document.removeEventListener("mousemove", onMouseMove);
  };
};
*/

/**
 *
const button = document.querySelector("#hideButton");
const text = document.querySelector("#text");

button.addEventListener("click", () => {
  text.style.display = "none";
  button.style.display = "none";
});
*/

const tree = document.querySelector("#tree");

tree.addEventListener("click", (event) => {
  const target = event.target;

  // Перевіряємо, чи є у елемента дочірній список
  const childUl = target.querySelector("ul");
  if (childUl) {
    // Перемикаємо клас 'visible' для показу/приховування
    childUl.classList.toggle("visible");
  }
});
