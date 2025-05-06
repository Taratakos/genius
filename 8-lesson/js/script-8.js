/**
 * 


const elem = document.getElementById("element");
console.log(elem);

elem.style.background = "green";

const elements = document.querySelectorAll("ul>li:last-child");
for (let i = 0; i < elements.length; i++) {
  // console.log(elements);
  console.log(elements[i]);
}

// for (const element of elements) {
//   console.log(element);
// }

const element = document.querySelector("li");
console.log(element);

const hiddenText = document.getElementById("textHidden");

hiddenText.hidden = true;


const text = document.querySelector(".text");
console.log(text);
console.log(text.textContent);


const text = document.querySelector(".greetting");
console.log(text.textContent);
text.textContent = "Hello Ivan";
console.log(text.textContent);

const button = document.querySelector(".btn");
button.style.background = "red ";


const text = document.querySelector("#pText");
console.log(text);
console.log(text.classList);
console.log(text.classList.contains("red"));
text.classList.remove("red");
console.log(text.classList);
console.log(text.classList.contains("red"));
text.classList.add("new");
console.log(text.classList);

const item = document.createElement("a");
item.href = "#";
item.classList.add("btn");
item.textContent = "3";

const nav = document.querySelector(".nav");
nav.appendChild(item);

const heading = document.createElement("h1");
heading.textContent = "Hello from h1 heading";

const container = document.querySelector(".container");
container.insertBefore(heading, nav);

console.log(nav);
// nav.removeChild(item);
// item.remove();

// клонування
const navBlock = document.querySelector(".nav");
const containerBlock = document.querySelector(".container");

const cloneBlock = navBlock.cloneNode(true);
containerBlock.appendChild(cloneBlock);
const list = document.querySelector("#list");
console.log(list);

list.insertAdjacentHTML("beforebegin", "<p>beforebegin</p>");
list.insertAdjacentHTML("afterbegin", "<li>beforebegin</li>");
list.insertAdjacentHTML("beforeend", "<li>beforeend</li>");
list.insertAdjacentHTML("afterend", "<p>afterend</p>");
*/
