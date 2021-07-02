const refs = {
  input: document.querySelector("#controls").firstElementChild,
  renderBtn: document.querySelector('[data-action="render"]'),
  destroyBtn: document.querySelector('[data-action="destroy"]'),
  output: document.querySelector("#boxes"),
};

// console.log(refs.input);
// console.log(refs.renderBtn);
// console.log(refs.destroyBtn);
// console.log(refs.output);
// console.log(refs.input.min);
// console.log(refs.input.max);

// ================= FUNCTIONS ==================

const createRandomRGBcolor = () =>
  "rgb(" +
  Math.floor(Math.random() * 256) +
  "," +
  Math.floor(Math.random() * 256) +
  "," +
  Math.floor(Math.random() * 256) +
  ")";

const createBoxes = () => {
  const divsArr = [];
  const amount = refs.input.value;
  if (amount > parseInt(refs.input.min) && amount <= parseInt(refs.input.max)) {
    for (let i = 0; i < amount; i++) {
      divsArr.push(
        `<div style="background-color:${createRandomRGBcolor()}; width:${
          30 + i * 10
        }px; height:${30 + i * 10}px; margin:10px"></div>`
      );
    }
    const divsStr = divsArr.join("");
    refs.output.insertAdjacentHTML("afterbegin", divsStr);
  } else {
    refs.output.insertAdjacentHTML(
      "afterbegin",
      "Please, enter number from 1 to 100"
    );
  }
};

// ================= CREATE ==================

refs.renderBtn.addEventListener("click", createBoxes);

// ================= DESTROY ==================

refs.destroyBtn.addEventListener("click", (event) => {
  refs.output.innerHTML = "";
});
