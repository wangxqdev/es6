/* 基本用法 */
var target = {
    name: "Tom",
    age: 24
};
var handler = {
    // 拦截 get 方法
    get: (target, key) => Reflect.get(target, key),
    // 拦截 set 方法
    set: (target, key, value) => Reflect.set(target, key, value)
}
var proxy = new Proxy(target, handler);
console.log(proxy.name);
proxy.age = 25;

/* apply(target, ctx, args) */
function sub(a, b) {
    return a - b;
}
var handler = {
    // 箭头函数没有 arguments
    apply: (target, ctx, args) => Reflect.apply(target, ctx, args)
}
var proxy = new Proxy(sub, handler);
console.log(proxy(2, 1));

/* has(target, propKey) */
var handler = {
    has: (target, propKey) => propKey in target
}
var proxy = new Proxy(target, handler);
console.log('name' in proxy);

/* construct(target, args, newTarget) */
var handler = {
    constructor: (target, args, newTarget) => Reflect.construct(target, args, newTarget)
}
class Exam {
    constructor(name) {
        this.name = name;
    }
}
var ExamProxy = new Proxy(Exam, handler);
var proxy = new ExamProxy("Tom");
console.log(proxy);

/* deleteProperty(target, propKey) */

/* defineProperty(target, propKey, propDesc) */
var handler = {
    defineProperty: (target, propKey, propDesc) => Reflect.defineProperty(target, propKey, propDesc)
}
var target = {};
var proxy = new Proxy(target, handler);
proxy.name = 'Tom';
console.log(target);

/* getOwnPropertyDescriptor(target, propKey) */
var handler = {
    getOwnPropertyDescriptor: (target, propKey) => Reflect.getOwnPropertyDescriptor(target, propKey)
}
var target = {name: "Tom"};
var proxy = new Proxy(target, handler);
console.log(Reflect.getOwnPropertyDescriptor(proxy, 'name'));
