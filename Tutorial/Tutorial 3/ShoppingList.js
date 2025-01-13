const shoppingList = ["milk", "egg", "bread"];

//增
shoppingList.push("fruit", "vegetable");
console.log("updatedList:", shoppingList);

//删
shoppingList.pop();
console.log("removedList:", shoppingList);

//条件与循环
// 创建一个函数，当购物清单中的物品超过5项时，在控制台输出"你的购物车满了"。
function checkShoppingListFull(shoppingList) {
  if (shoppingList.length > 5) {
    console.log("Your shopping list is full");
  }
} 
// 使用循环语句遍历购物清单，将每一项物品在控制台上以编号的形式输出。
// function printShoppingList(shoppingList) {
//   for (let i = 0; i < shoppingList.length; i++) {
//     console.log(`${i + 1}.${shoppingList[i]}`);
//   }
// }
shoppingList.forEach((item, index) => console.log(`${index + 1}.${item}`));

// 函数与对象：
// 创建一个函数，该函数接受物品名称作为参数，并返回该物品是否在购物清单中。
function checkIncludeItem(item, shoppingList) {
  return shoppingList.includes(item)
    ? `${item} is in the list`
    : `${item} is not in the list`;
}

console.log(checkIncludeItem("apple", shoppingList));
console.log(checkIncludeItem("milk", shoppingList));

// 创建对象
const item = {
  name: "milk",
  price: 3,
  quantity: 5,
};
console.log(item);
