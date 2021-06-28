const itemsQuantity = document.querySelector("#categories").children.length;
console.log(`В списке ${itemsQuantity} категории.`);

const itemsArray = document.querySelectorAll(".item");
console.log(itemsArray);
for (const item of itemsArray) {
  console.log("Категория: ", item.firstElementChild.firstChild.textContent);
  //   console.log("Количество элементов: ", item.children[1].children.length);
  console.log("Количество элементов: ", item.querySelectorAll("li").length);
}
