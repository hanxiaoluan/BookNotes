/* javascript 的函数中可以给函数传递任意数量的参数而不造成错误，传递给function的参数都保存在一个arguments的类数组中，arguments的length的属性会告诉你有多少个值 */
/* arguments对象不是个数组的实例，其拥有的方法与数组不同,Array.isArray(arguments)永远返回false */
function reflect(value) {
    return value;
}
console.log(reflect("hi")); //hi
console.log(reflect('hi', 25)); //hi
console.log(reflect.length); //1
reflect = function () {
    return arguments[0];
}
console.log(reflect('hi'));//hi
console.log(reflect('hi', 25));//hi
console.log(reflect.length);//0

/* 对于求和 */
function sum() {
    var result = 0,
        i = 0,
        len = arguments.length;
    while (i < len) {
        result += arguments[i];
        i++;
    }
    return result;

}