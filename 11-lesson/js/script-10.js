// localStorage.setItem("name", "Taras");

// const localStorName = localStorage.getItem("name");
// console.log(localStorName);

/**
 *
 

// function check() {
//   const val = document.getElementsByName("radio");
//   if (val[0].checked) {
//     console.log("woman");
//   } else {
//     console.log("man");
//   }
// }

const form = document.querySelector(".form");
const nameInput = document.querySelector(".inputName");
const lastNameInput = document.querySelector(".inputLastName");
const age = document.querySelector("#age");
const male = document.getElementsByName("radio");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const info = {
    name: nameInput.value,
    lastName: lastNameInput.value,
    age: age.value,
    male: male[0].checked,
  };

  console.log(info);

  // localStorage.setItem("info", info); // [object Object]
  localStorage.setItem("info", JSON.stringify(info));
}

if (localStorage.getItem("info")) {
  const ls = JSON.parse(localStorage.getItem("info"));
  console.log(ls);
  nameInput.value = ls.name;
  lastNameInput.value = ls.lastName;
}
*/

/**
 *
const form = document.querySelector("#form");
const formData = {};
form.addEventListener("input", function (event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem("formData", JSON.stringify(formData));
});

if (localStorage.getItem("formData")) {
  formData = JSON.parse(localStorage.getItem(formData));
  
  for (let key in formData) {
    form.elements[key].value = formData[key];
  }
}
*/

/**
 * NODE 
 */
