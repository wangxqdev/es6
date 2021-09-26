/* 子串的识别 */
var string = "apple,banana,orange";
console.log(string.includes("banana"));
console.log(string.startsWith("apple"));
console.log(string.endsWith("apple"));
console.log(string.startsWith("banana", 6));

/* 字符串重复 */
console.log("hello,".repeat(2));

/* 字符串补全 */
console.log("h".padStart(5, "o"));
console.log("h".padEnd(5, "o"));
// 默认「空格」补全
console.log("h".padStart(5));

/* 标签模板 */
// node环境无
alert`Hello World!`;
