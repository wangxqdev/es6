/* 数组模型的解构 */
/* 基本 */
// let [a, b, c] = [1, 2, 3];

/* 可嵌套 */
// let [a, [[b], c]] = [1, [[2], 3]];

/* 可忽略 */
// let [a, , b] = [1, 2, 3];

/* 不完全解构 */
// let [a = 1, b] = [];

/* 剩余运算符 */
// let [a, ...b] = [1, 2, 3];

/* 字符串 */
// let [a, b, c, d, e] = 'hello';

/* 解构默认值 */
// let [a = 2] = [undefined];
// let [a = 3, b = a] = []; 
// let [a = 3, b = a] = [1];
// let [a = 3, b = a] = [1, 2]; 

/* 打印 */
// console.log(`a = ${a}`);
// console.log(`b = ${b}`);
// console.log(`c = ${c}`);
// console.log(`d = ${d}`);
// console.log(`e = ${e}`);


/* 对象模型的解构 */
/* 基本 */
// 对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量
// let { foo, bar } = { foo: 'aaa', bar: 'bbb' };

// 真正被赋值的是后者，而不是前者
// 将{ baz: 'ddd' }对象中的baz，赋值给foo
let { baz: foo } = { baz: 'ddd' };
console.log(`foo = ${foo}`);
// console.log(`bar = ${bar}`);

/* 可嵌套可忽略 */
// let obj = {p: ['hello', {y: 'world'}] };
// let {p: [x, { y }] } = obj;

// let obj = {p: ['hello', {y: 'world'}] };
// let {p: [x, {  }] } = obj;

/* 不完全解构 */
let obj = {p: [{y: 'world'}] };
let {p: [{ y }, x ] } = obj;

console.log(`x = ${x}`);
console.log(`y = ${y}`);

/* 剩余运算符 */
// let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40};

// console.log(`a = ${a}`);
// console.log(`b = ${b}`);
// console.log(`rest = ${rest}`);

/* 解构默认值 */
let {a = 10, b = 5} = {a: 3};

console.log(`a = ${a}`);
console.log(`b = ${b}`);

let {a: aa = 10, b: bb = 5} = {a: 3};

console.log(`aa = ${aa}`);
console.log(`bb = ${bb}`);
