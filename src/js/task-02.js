const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const makeIngredientItemEl = (item) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = item;
  return itemEl;
};

const ingredientsElArray = ingredients.map((ingredient) =>
  makeIngredientItemEl(ingredient)
);

const ingredientsListEl = document.querySelector("#ingredients");
ingredientsListEl.append(...ingredientsElArray);
