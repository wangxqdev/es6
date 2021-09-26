/* Array.of() */
console.log(Array.of(1, 2, 3));

/* Array.from() */
var myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");
console.log(Array.from(myMap));

console.log(Array.from([1, 2, 3], n => n * 2));

/* find() */
var arr = Array.of(1, 2, 3, 4);
console.log(arr.find(i => i > 2));

/* findIndex() */
console.log(arr.findIndex(i => i > 2));

/* fill() */
var arr = new Array(10);
console.log(arr.fill(0));

/* 扩展运算符 */
var arr = [1, 2];
console.log([...arr]);
