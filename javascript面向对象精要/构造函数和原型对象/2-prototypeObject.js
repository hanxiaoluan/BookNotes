/* 几乎所有的函数都有一个名为prototype的属性，该属性是用来创建新的对象实例的，所有创建的对象实例都共享该原型对象 */
let book = {
    title:"ECMAScript 6 Primer"
}
console.log("title" in book);
console.log(book.hasOwnProperty("title"));//true
console.log(book.hasOwnProperty("hasOwnProperty"));//false
console.log(Object.prototype.hasOwnProperty("hasOwnProperty"));
/* in 操作符对原型属性和自有属性都返回true */

/* ------------------------[[Prototype]]--- */

/* 一个对象实例通过内部属性[[prototype]]跟踪其原型对象，该属性是指向其原型对象的指针，当你用new创建一个新的对象时，构造函数的原型对象会被赋予给该对象的[[Prototype]] 属性 */
let object = {};
let prototype = Object.getPrototypeOf(object);
console.log(prototype === Object.prototype);//true

console.log(Object.prototype.isPrototypeOf(object));

console.log(object.toString());//[objec,Object]
object.toString = function () {
    return "[object,Custom]";
};
console.log(object.toString());//[object,Custom]
delete object.toString;
console.log(object.toString());//[object,object]
delete object.toString;
console.log(object.toString());//[object,Object]


/* 在构造函数中使用原型对象 */
function Person(name) {
    this.name = name;
}
Person.prototype.sayName = function () {
    console.log(this.name);
}
let person1 = new Person("Nicholas");
let person2 = new Person("Greg");
console.log(person1.name);//Nicholas
console.log(person2.name);//Greg
person1.sayName();//Nicholas
person2.sayName();//Greg
/* 在存储原型对象的时候要注意，存储引用类型的时候，因为引用类型的值会被很多实例共享，可能大家不希望一个实例能改变另一个实例的值。 */
function Person(name) {
    this.name = name;
}
Person.prototype.sayName = function () {
    console.log(this.name);
}
Person.prototype.favorites = [];
let person1 = new Person("Nicholas");
let person2 = new Person("Greg");
person1.favorites.push("apple");
person2.favorites.push("banana");

console.log(person1.favorites);//apple,banana
console.log(person2.favorites);//apple,banana

function Person(name) {
    this.name = name;
}

Person.prototype = {
    sayName: function () {
        console.log(this.name);
    },
    toString: function () {
        return "[Person" + this.name + "]";
    }
}
/* 这样写又一个副作用要注意 */
let person1 = new Person("Nicholas");

console.log(person1 instanceof Person);//true

console.log(person1.constructor === Person);//false

console.log(person1.constructor === Object);//true
/* 使用对象字面量形式改变构造函数的属性，因此他现在指向OBject而不是Person.这是因为原型对象具有一个constructor属性，这是其他对象实例不具备的，当一个函数被创建时，它拥有一个prototype属性属性，他的prototype属性是这个函数的原型对象，这个原型对象有一个constructor属性，这个constructor属性在被创建时就指向该函数，但是你用字面量形式重写prototype相当于改写，他的constructor指向了泛用对象Object,为了避免这一点，需要在手写原型对象的时候改写 */
function Person(name) {
    this.name = name;
}

Person.prototype = {
    constructor:Person,
    sayName: function () {
        console.log(this.name);
    },
    toString: function () {
        return "[Person" + this.name + "]";
    }
}
/* 改变原型对象 */
function Person(name) {
    this.name = name;
}
Person.prototype = {
    constructor: Person,
    sayName: function () {
        console.log(this.name);
    },
    toString: function () {
        return "[Person" + this.name + "]";
    }
};
let person1 = new Person("Nicholas");
let person2 = new Person("Greg");
Person.prototype.sayHi = function () {
    console.log("hi");
}
person1.sayHi();
person2.sayHi();
Object.freeze(person1);
Person.prototype.sayHello = function () {
    console.log("Hello");
}
person1.sayHello();
person2.sayHello();
/* [[Prototype]]是对象实例的自有属性，属性本省被冻结，但其指向的值并没有被冻结 */

/* 内建对象的原型对象 */
/* 所有内建对象都有构造函数，因此都有原型对象给你改变 */

Array.prototype.sum = function () {
    return this.reduce(function (previous, current) {
        return previous + current;
    })
}
let numbers = [1, 2, 3, 4, 5, 6];
let result = numbers.sum();
console.log(result);
String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.substring(1);
};
let message = "hello world";
console.log(message.capitalize());