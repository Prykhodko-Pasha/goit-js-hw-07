const itemsElQuantity = document.querySelector("#categories").children.length;
console.log(`В списке ${itemsElQuantity} категории.`);

const itemsElArray = document.querySelectorAll(".item");
// console.log(itemsElArray);
for (const item of itemsElArray) {
  console.log("Категория: ", item.firstElementChild.firstChild.textContent);
  //   console.log("Количество элементов: ", item.children[1].children.length);
  console.log("Количество элементов: ", item.querySelectorAll("li").length);
}
