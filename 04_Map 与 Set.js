/* Map 的迭代 */
/* for...of */
// let myMap = new Map();
// myMap.set(0, "zero");
// myMap.set(1, "one");

// 写法1
// for (let [key, value] of myMap) {
//     console.log(`${key} = ${value}`);
// }
// 写法2
// for (let [key, value] of myMap.entries()) {
//     console.log(`${key} = ${value}`);
// }

/* forEach() */
// (value, key) 与 java 是反的
// myMap.forEach((value, key) => console.log(`${key} = ${value}`));

/* Map 与 Array的转换 */
let kvArray = [["key1", "value1"], ["key2", "value2"]];
let myMap = new Map(kvArray);
console.log(myMap)
let outArray = Array.from(myMap);
console.log(outArray);

/* Map 的合并 */
var first = new Map([[1, 'one'], [2, 'two'], [3, 'three'],]);
var second = new Map([[1, 'uno'], [2, 'dos']]);
var merged = new Map([...first, ...second]);
console.log(merged);

/* Set 对象 */
/* 类型转换 */
var mySet = new Set(["value1", "value2", "value3"]);
var myArray = [...mySet];
console.log(myArray);
var mySet = new Set('hello');
console.log(mySet);

/* 数组去重 */
var myArray = [1, 2, 3, 4, 4];
var mySet = new Set(myArray);
console.log([...mySet]);

/* 并集 */
var a = new Set([1, 2, 3]);
var b = new Set([4, 3, 2]);
var union = new Set([...a, ...b]);
console.log(union);

/* 交集 */
var a = new Set([1, 2, 3]);
var b = new Set([4, 3, 2]);
var intersect = new Set([...a].filter(x => b.has(x)));
console.log(intersect);

/* 差集 */
var a = new Set([1, 2, 3]);
var b = new Set([4, 3, 2]);
var difference = new Set([...a].filter(x => !b.has(x)));
console.log(difference);
