/* 属性的简洁表示法 */
var name = "Tom";
var age = 24;
var person = {name, age};
console.log(person);

/* 方法名也可以简写 */
var person = {
    sayHi() {
        console.log("Hi");
    }
}
person.sayHi();

/* 属性名表达式 */
var person = {
    ["he" + "llo"]() {
        console.log("Hello");
    }
}
person.hello();

/* 对象的拓展运算符 */
/* 基本用法 */
var person = {name: "Amy", age: 15};
var someone = {...person};
console.log(someone);

/* 可用于合并两个对象 */
var name = {name: "Amy"};
var age = {age: 15};
var person = {...name, ...age};
console.log(person);

/* Object.assign(target, source_1, ···) */
var target = {a: 1};
var object2 = {b: 2};
var object3 = {c: 3};
Object.assign(target, object2, object3);
console.log(target);

// 浅拷贝(引用拷贝)
var sourceObj = { a: { b: 1}};
var targetObj = {c: 3};
Object.assign(targetObj, sourceObj);
targetObj.a.b = 2;
console.log(sourceObj.a.b);

/* Object.is(value1, value2) */
console.log(Object.is(1, 1));
console.log(Object.is({}, {}));