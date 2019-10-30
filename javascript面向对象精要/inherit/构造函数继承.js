/* Javascript中的对象继承也是构造函数的继承的基础。每一个构造函数都有prototype属性，它可以被修改或替换。该prototype属性被默认设置为继承自Object.prototype的泛用对象，该对象有一个自有属性，实际上，Javascript引擎为你做了以下事情 */
function YourConstructor() {
    //initialization
}
/* Javascript engine dose this for you behind the scene */
YourConstructor.prototype = Object.create(Object.prototype, {
    constructor: {
        configurable: true,
        enumerable: true,
        value: YourConstructor,
        writable: true
    }
});
/* 你不需要做任何额外的工作，这段代码就把你构造函数的prototype的属性给设置好了，由于prototype属性可写，你可以通过改写它来改变原型对象链。 */
function Rectangele(length, width) {
    this.width = width;
    this.length = length;
}
Rectangele.prototype.getArea = function () {
    return this.length * this.width;
}
Rectangele.prototype.toString = function () {
    return `[Rectangele${this.length}x${this.width}]`;
}
//inherits from Rectangle
function Square(size) {
    this.length = size;
    this.width = size;
}
Square.prototype = new Rectangele();
Square.prototype.constructor = Square;
Square.prototype.toString = function () {
    return `[Square${this.length}X${this.width}]`;
}
let rect = new Rectangele(5, 10);
let square = new Square(6);
console.log(rect.getArea());//50
console.log(square.getArea());//36
console.log(rect.toString());//[Rectangle 5X10]
console.log(square.toString());//[Square 6X6]
console.log(rect instanceof Rectangele);//true
console.log(rect instanceof Object);//true

console.log(square instanceof Square);
console.log(square instanceof Rectangele);
console.log(square instanceof Object);//true
