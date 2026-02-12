// Изменение цвета квадрата

const square = document.getElementById("square");
const input = document.getElementById("text");
const button = document.getElementById("btn");

const changeColor = function () {
    const inputValue = input.value;

    if (inputValue) square.style.backgroundColor = inputValue;
};

button.addEventListener("click", changeColor);

// Повесить на кнопку свойство

const eButton = document.getElementById("e_btn");

eButton.style.display = "none";

// Изменение размера круга

const inputRange = document.getElementById("range");
const circle = document.getElementById("circle");
const span = document.getElementById("range-span");

span.textContent = 50 + "%";

const changeSize = function () {
    const rangeValue = inputRange.value;

    span.textContent = rangeValue + "%";

    circle.style.width = rangeValue + "%";
    circle.style.height = rangeValue + "%";
};

inputRange.addEventListener("input", changeSize);
