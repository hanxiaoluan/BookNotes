/**
 * function 具有两种字面形式，函数声明和函数表达式，函数声明会提前
 */
function add(num1, num2) {
    return num1 + num2;
}
/**函数表达式 */
var add = (num1, num2) => {
    return num2 + num1;
}