/* 构造函数也是函数，唯一的区别是首字母大写 */
function Person() {
    //intentionlly empty
}
let person1 = new Person();
let person2 = new Person();
/* 甚至可以等价于
    let person1 = new Person;
    let person2 = new Person;
*/
console.log(person1 instanceof Person);
console.log(person2 instanceof Person);
console.log(person1.constructor === Person);
console.log(person2.constructor === Person);

function Person(name) {
    this.name = name;
    this.sayName = function () {
        console.log(this.name);
    }
}

function Person(name) {
    Object.defineProperty(this, name, {
        get: function () {
            return name;
        },
        set: function (newName) {
            name = newName;
        },
        enumerable: true,
        configurable: true
    });
    this.sayName = function () {
        console.log(this.name);
    }
}
/* 始终要用new 操作符来调用构造函数 */
let person3 = Person("luan");
console.log(person3 instanceof Person);
console.log(typeof person3);
console.log(name);
