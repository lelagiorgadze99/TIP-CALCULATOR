"use strict";
const bill = document.getElementById("bill");
console.log(bill);
const percentageBtn = document.querySelectorAll(".percentage");
const people = document.getElementById("people");
const tipResult = document.getElementById("tipAmount");
const totalResult = document.getElementById("totalAmount");
const pZero = document.getElementById("p-zero");
const peopleDiv = document.getElementById("svg-input");
const integer = document.getElementById("integer");
const resetBtn = document.getElementById('resetBtn');
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
  zero();
});
resetBtn.addEventListener("click", reset);


function calculate() {
  tipAmount = ((billValue * (tip / 100)) / peopleValue).toFixed(2);
  total = ((billValue + billValue * (tip / 100)) / peopleValue).toFixed(2);
  tipResult.textContent = `$${tipAmount}`;
  totalResult.textContent = `$${total}`;
}
function zero() {
  if (peopleValue == 0 || peopleValue <= 0) {
    pZero.style.display = "block";
    peopleDiv.style.border = "2px solid red";
    integer.style.display = "none";
  } else {
    if (!Number.isInteger(peopleValue)) {
      integer.style.display = "block";
      peopleDiv.style.border = "2px solid red";
      pZero.style.display = "none";
     
    } else {
      pZero.style.display = "none";
      integer.style.display = "none";
    }
  }
}

function reset(){
  bill.value = "";
  billValue = 0;
  people.value = "";
  peopleValue = 0;
  tip = 0;
  tipResult.textContent = `$0.00`;
  totalResult.textContent = `$0.00`;

}

