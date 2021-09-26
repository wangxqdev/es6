/* 基本用法 */
// let sy = Symbol("kk");
// console.log(sy);
// console.log(typeof sy)
// console.log(sy.description);

// let sy2 = Symbol("kk");
// console.log(`sy === sy2; // ${sy === sy2}`);

/* 使用场景 */
/* 作为属性名 */
// 写法1
// let sy = Symbol("key1");
// let syObject = {};
// syObject[sy] = "kk";

// 写法2
// let syObject = {
//     [sy]: "kk"
// };

// 写法3
// node环境结果: {}
// let syObject = {};
// Object.defineProperty(syObject, sy, {value: "kk"});

// console.log(syObject);

/* 注意点 */
let sy = Symbol("kk");
let syObject = {};
syObject[sy] = "kk";
for (i in syObject) {
    console.log(i);
}
// []
console.log(Object.keys(syObject));
// [ Symbol(kk) ]
console.log(Object.getOwnPropertySymbols(syObject));
// [ Symbol(kk) ]
console.log(Reflect.ownKeys(syObject));

/* 常量问题 */
const COLOR_RED = Symbol("red");
const COLOR_GREEN = Symbol("green");
const COLOR_BLUE = Symbol("blue");

class ColorException {
    constructor(message) {
        this.message = message;
        this.name = "ColorException";
    }
}

function getColorName(color) {
    switch (color) {
        case COLOR_RED:
            return "COLOR_RED";
        case COLOR_GREEN:
            return "COLOR_GREEN";
        case COLOR_BLUE:
            return "COLOR_BLUE";
        default:
            throw new ColorException(`Can't find this color [${color}]`)
    }
}

try {
    let color = COLOR_RED;
    let colorName = getColorName(color);
    console.log(`color = ${colorName}`);
} catch (e) {
    console.error(e.message, e.name);
}

/* Symbol.for() */
let yellow = Symbol("yellow");
let yellow2 = Symbol.for("yellow");
// false
// Symbol.for()与Symbol()这两种写法，前者会被登记在全局环境中供搜索，后者不会。
console.log(yellow === yellow2);
let yellow3 = Symbol.for("yellow");
// true
console.log(yellow2 === yellow3);

/* Symbol.keyFor() */
let blue = Symbol.for("blue");
let red = Symbol("red");
// blue
console.log(Symbol.keyFor(blue));
// red
console.log(Symbol.keyFor(red));
