 /* 函数就是个值，可以被赋来赋去 */
var sayHi = new Function("console.log('Hi')");
sayHi();
var sayHi2 = sayHi;
sayHi2();
/* sort 方法进行排序 */
let numbers = [1, 5, 8, 4, 7, 10, 2, 6];
numbers.sort((first, second) => {
    return first - second;
});
console.log(numbers);
numbers.sort();
console.log(numbers);