/* 构造函数窃取的关键是call和apply方法允许你在调用函数时提供一个不同的this值。那正好是构造函数窃取的关键 */
function Rectangle(length, width) {
    this.width = width;
    this.length = length;
}
Rectangele.prototype.getArea = function () {
    return this.width * this.length;
}
Rectangele.prototype.toString = function () {
    return `[Rectangele${this.length}x${this.width}]`;
};
//inherits from Rectangle
function Square(size) {
    Rectangele.call(this, size, size);
    //optional:add new properties or override existing ones here
}
Square.prototype = Object.create(Rectangele.prototype, {
    constructor: {
        configurable: true,
        enumerable: true,
        value: Square,
        writable: true
    }
})
var square = new Square(6);
console.log(square.length);
console.log(square.width);
console.log(square.getArea());