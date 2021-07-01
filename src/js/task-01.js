const itemsElQuantity = document.querySelector("#categories").children.length;
console.log(`В списке ${itemsElQuantity} категории.`);

const itemsElArray = document.querySelectorAll(".item");
// console.log(itemsElArray);
itemsElArray.forEach((item) => {
  console.log("Категория: ", item.firstElementChild.textContent);
  console.log("Количество элементов: ", item.querySelectorAll("li").length);
});
