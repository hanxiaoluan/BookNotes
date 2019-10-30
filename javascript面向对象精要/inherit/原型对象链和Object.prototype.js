/* 原型对象的属性可由对象实例访问，这就是继承的一种形式，对象实例继承了原型对象的属性，而原型对象也是一个对象，它也继承了它的原型对象的属性，这样就构成了原型链 */

/* 5---1--1继承自Object.prototype的方法 */

/* 前面提到的多个方法都是定义在Object.prototype上的。因此可以被其他对象继承，这些方法如下
            hasOwnProperty()
            propertyIsEnumerable()
            isPrototypeOf() 检查一个对象是否是另一个对象的原型对象
            valueOf() 返回一个对象的值表达
            toString() 返回一个对象的字符串表达
*/

/* valueOf 每当一个操作符作用于对象的时候都会调用valueOf方法，valueOf默认返回对象实例本身 */
let now = new Date();
let earlier = new Date(2010, 1, 1);
console.log(now > earlier);//true

/* toString() 一旦一个valueOf返回的十一个引用而不是一个原始值的时候，就会回退调用一个toString()方法 */

let book = {
    title: " the principles of Object-oriented Javascript"
};
let message = "BOOk = " + book;
console.log(message);//[object,Object]

/* 5--1---2 修改Object.prototype */
/* 所有的对象都默认继承自Object.prototype,所以改变Object的原型对象会影响所有的对象，这是非常危险的，所以不要修改内建对象的原型对象 */

Object.prototype.add = function (value) {
    return this + value;
}
let book = {
    title: "the principles of Object-Oriented Javascipt"
};
console.log(book.add(5));//"[object,Object]5"
console.log("title".add(end));//"titleend"
console.log(document.add(true));"[object HTMLDocument]true"
console.log(window.add(5));//"[object,Window]true"

var empty = {};
for (var property in empty) {
    console.log(property);
}