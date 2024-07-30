// function add() {
//     var a = 10;
//     var b = 20;

//     if (a < b) {
//         var c = 30;
//         console.log(b);
//     }

//     console.log(a);
// }

// add();

// for (var i = 0; i < 10; i++) {
//     console.log("Hello World!");
// }

// var percentage = prompt("Enter your 10th percentage");

// if (percentage >= 90) {
//     console.log("Grade: A");
// } else if (percentage >= 80 && percentage < 90) {
//     console.log("Grade: B");
// } else {
//     console.log("Grade: C");
// }

// function sum(a, b) {
//     return a + b;
// }

// var result = sum(1, 3);
// console.log(result);

// var result = function printName() {
//     console.log("Hello World!");
// }

// result();

// function odd_or_even() {
//     var number = 10;

//     if (number % 2 == 0) {
//         console.log("Even");
//     } else {
//         console.log("Odd");
//     }
// }

// odd_or_even();

// DOM Manipulation: Document Object Model -> HTML document ka kaam manipulate krna
// document.getElementById()
// document.getElementsByTagName()
// document.getElementsByClassName()

const data = document.querySelector("#para_id");
data.innerHTML = "hii";
data.innerHTML = "This ia B.Tech class";

// Select elements from DOM :
// document.getElementById(id) -> selects a single element with the specified ID.
// document.getElementsByClassName(className) -> selects all elements with the specified class name.
// document.getElementsByTagName(tagName) -> selects all elements with the specified tag name.
// document.querySelector(selector) -> selects the first element that matches the specified CSS. [for each loop can be used here.]
// document.querySelectorAll(selector) ->

// Event:
// click event
// mouseover event
// mouseout event
// keydown event
// form submit event
// change event
// input event