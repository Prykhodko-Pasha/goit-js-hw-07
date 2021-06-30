const valueEl = document.querySelector("#value");
let counterValue = parseFloat(valueEl.textContent);
console.log(counterValue);

const decrement = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

const decrementEl = document.querySelector('[data-action="decrement"]');
// console.log(decrementEl);
const incrementEl = document.querySelector('[data-action="increment"]');
// console.log(incrementEl);
decrementEl.addEventListener("click", decrement);
incrementEl.addEventListener("click", increment);
