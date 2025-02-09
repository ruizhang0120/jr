/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * ES6增加了Set，它是数学里面“集合”的概念，那么问题就来了，数学里面的“集合”有哪些特性？
 * 1. 构造方式
 * 2. 基本方法add()/delete()/has()/clear()
 * 3. 工具方法keys()/values()/entries()/forEach()
 * 4. 数学上的集合需要支持交并补运算
 */
//1. 构造方式
let set1 = new Set([1, 2, 3, 4, 5]);
console.log(set1);
console.log(...set1);

//2. 基本方法add()/delete()/has()/clear()

//3. 工具方法keys()/values()/entries()/forEach()

/**
 * 4. 数学上的集合需要支持交并补运算
 */
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);
let union = new Set([...a, ...b]); //并集
let intersect = new Set([...a].filter((x) => b.has(x))); //交集
let difference = new Set([...a].filter((x) => !b.has(x))); //补集
console.log(union);
console.log(intersect);
console.log(difference);
