/* 在前面的例子中，Square类型有自己的toString()方法隐藏了其原型对象的toString()，但你如果还想访问父类的方法该怎么办？在其它语言中，可以通过super.toString()，但在JavaScript中没有类似的方式。代替的方法是通过call()和apply()调用父类的原型对象时传入一个子类的对象.如下所示； */
function Rectangle(width, length) {
    this.length = length;
    this.width = width;
}
Rectangele.prototype.getArea = function () {
    return this.length * this.width;
}
Rectangele.prototype.toString = function () {
    return `[Rectangle${this.length}*${this.width}];`
}
//inherits from Rectangle
function Square(size) {
    Rectangele.call(this, size, size);
}
Square.prototype = Object.create(Rectangele.prototype, {
    constructor: {
        configurable: true,
        enumerable: true,
        value: Square,
        writable:true
    }
})
//call the supertype method
Square.prototype.toString = function () {
    var text = Rectangele.prototype.toString.call(this);
    return text.replace("Rectangle", "Square");
}
/* 在这个版本的代码中，Square.prototype.toString()通过call()调用Rectangle.prototype.toString()。该方法只需在返回文本结果前进行替换指定字符串即可。 */