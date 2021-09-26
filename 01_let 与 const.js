/* let 命令 */
{
    let a = 0;
    console.log(a);
}
// ReferenceError: a is not defined
// console.log(a);

/* 代码块内有效 */
{
    let a = 0;
    var b = 1;
}
// ReferenceError: a is not defined
// console.log(a);
console.log(b);

/* 不能重复声明 */
// let a = 1;
// SyntaxError: Identifier 'a' has already been declared
// let a = 2;
// var b = 3;
// var b = 4;
// console.log(a);
// console.log(b);

/* for 循环计数器很适合用 let */
for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    });
}

for (let i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    });
}

/* 不存在变量提升 */
// ReferenceError: a is not defined
// console.log(a);
let a = "apple";
console.log(b);
var b = "banana";

/* const 命令 */
const PI = "3.1415926";
console.log(PI);
// SyntaxError: Missing initializer in const declaration
// const MY_AGE;

/* 暂时性死区 */
var PI = "a";
if (true) {
    // SyntaxError: Identifier 'PI' has already been declared
    console.log(PI);
    const PI = "3.1415926";
}