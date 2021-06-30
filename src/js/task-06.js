const refs = {
  input: document.querySelector("#validation-input"),
};

const validLength = parseInt(refs.input.dataset.length);

const validation = (event) => {
  if (event.currentTarget.value.length === validLength) {
    refs.input.className = "valid";
  } else {
    refs.input.className = "invalid";
  }
};

refs.input.addEventListener("blur", validation);
