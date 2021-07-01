const refs = {
  input: document.querySelector("#controls").firstElementChild,
  renderBtn: document.querySelector('[data-action="render"]'),
  destroyBtn: document.querySelector('[data-action="destroy"]'),
};

console.log(refs.input);
console.log(refs.renderBtn);
console.log(refs.destroyBtn);

const divsArr = [];

const createBoxes = (event, amount) => {
  for (let i = 0; i < amount; i++) {
    const divEl = document.createElement("div");
    // console.log(divEl);
    divsArr.push(divEl);
  }
  //   return divsArr;
};

// let amount = 0;
refs.input.addEventListener("change", (event) => {
  amount = event.currentTarget.value;
  //   return amount;
  //   console.log(amount);
});
// console.log(refs.input.value);
refs.renderBtn.addEventListener("click", createBoxes(refs.input.value));
console.log(divsArr);
