"use strict";
//Khai báo function
function addNumber(num1, num2) {
    return num1 + num2;
}
const addNumberArrow = (number2) => { };
function showName(name = "ducdat") {
    return `Xin chào bạn ${name}`;
}
const myName = showName();
console.log(myName);
