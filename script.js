"use strict";
const bill = document.getElementById("bill");
console.log(bill);
const percentageBtn = document.querySelectorAll(".percentage");
const people = document.getElementById("people");
const tipResult = document.getElementById("tipAmount");
const totalResult = document.getElementById("totalAmount");
let tip;
let billValue;
let peopleValue;
let tipAmount;
let total;

Array.from(percentageBtn).forEach((btn) => {
  btn.addEventListener("click", (event) => {
    tip = parseInt(event.target.textContent);
    calculate();
    console.log(tip);
  });
});
bill.addEventListener("input", (event) => {
  billValue = Number(event.target.value);
  console.log(billValue);
  calculate();
});
people.addEventListener("input", (event) => {
  peopleValue = Number(event.target.value);
  console.log(peopleValue);
  calculate();
});

function calculate() {
    tipAmount = ((billValue * (tip / 100)) / peopleValue).toFixed(2);
    total = ((billValue + billValue * (tip / 100)) / peopleValue).toFixed(2);
    tipResult.textContent = `$${tipAmount}`;
    totalResult.textContent = `$${total}`;
}
