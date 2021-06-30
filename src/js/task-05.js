const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

function updateValue(e) {
  outputEl.textContent = e.target.value;
  console.log(e);
}

inputEl.addEventListener("input", updateValue);
// inputEl.addEventListener(
//   "input",
//   () => (outputEl.textContent = InputEvent.target.value)
// );
