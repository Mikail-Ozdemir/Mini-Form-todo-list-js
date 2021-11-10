// We create the variables that we set to the DOM elements
const form = document.querySelector("#form");
const inputTodo = document.querySelector("#todoInput");
const todolist = document.querySelector("#todolist");

// Onsubmit we will run a function
form.onsubmit = function(event) {
    // We want to prevent the page to reloas
    event.preventDefault();

    // We create a variable that we set to a new li node
    const newTodo = document.createElement("li");
    // We add the text to the li
    newTodo.innerHTML = inputTodo.value;
    // We add the li to the ul
    todolist.appendChild(newTodo);
    // We clear the value of the input
    inputTodo.value = "";
};

