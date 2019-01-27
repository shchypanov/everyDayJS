'use strict';

let inp1 = document.querySelector('input[name = sum1]');
let inp2 = document.querySelector('input[name = sum2]');
let count = document.querySelector('input[name = count]');
let result = document.querySelector('.result');

count.addEventListener('click', function () {
    result.innerHTML = parseInt(inp1.value) + parseInt(inp2.value);
    this.disabled = true;
});

inp1.oninput = btnEnabled;
inp2.oninput = btnEnabled;

function btnEnabled() {
    count.disabled = false;
}