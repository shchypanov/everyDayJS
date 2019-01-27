'use strict';

let inp1 = document.querySelector('input[name=inp1]');
let inp2 = document.querySelector('input[name=inp2]');
let sum = document.querySelector('input[name=sum]');
let min = document.querySelector('input[name=min]');
let mul = document.querySelector('input[name=mul]');
let div = document.querySelector('input[name=div]');
let result = document.querySelector('.result');

sum.addEventListener('click', toSum);
min.addEventListener('click', toMin);
mul.addEventListener('click', toMul);
div.addEventListener('click', toDiv);

function toSum() {
    result.innerHTML = parseInt(inp1.value) + parseInt(inp2.value);
}function toMin() {
    result.innerHTML = parseInt(inp1.value) - parseInt(inp2.value);
}function toMul() {
    result.innerHTML = parseInt(inp1.value) * parseInt(inp2.value);
}function toDiv() {
    result.innerHTML = parseInt(inp1.value) / parseInt(inp2.value);
}