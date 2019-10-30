/* 对象继承是比较简单的继承，你唯一需要做的是指定哪个对象是新对象的[[prototype]]。对象字面量形式会隐式的指定Object.prototype为其[[Prototype]]，你也可以用Object.create()的方法显式的指定*/
let book = {
    title: "the Principles of Object-Oriented Javascipt"
};
let book = Object.create(Object.prototype, {
    title: {
        configurable: true,
        enumerable: true,
        value: "The Principles of Object-Oriented Javascipt",
        writable: true
    }
})
/* 你永远不可能写出直接继承Object.prototype的代码，毕竟那是默认行为。继承自其他对象则有趣多了 */
let person1 = {
    name: "Nicholas",
    sayName: function () {
        console.log(this.name);
    }
}
let person2 = Object.create(person1, {
    name: {
        configurable: true,
        enumerable: true,
        value: "Greg",
        writable:true
    }
})
person1.sayName();//"Nicholas";
person2.sayName();//"Greg";
console.log(person1.hasOwnProperty("sayName"));//true
console.log(person2.hasOwnProperty("sayName"));//false
console.log(person1.isPrototypeOf(person2));//true
/* 当访问一个对象的属性时，Javascript引擎会执行一个搜索过程。如果该对象实例上发现该属性（也就是说这是个自有属性），那么该属性的值就会被引用。如果该对象实例没有发现该属性，那么就搜索[[Prototype]]。如果仍然没发现，那么则继续搜索该原型对象的[[Prototype]],知道继承链末端。末端通常是一个Obejct.prototype,其[[Prototype]]被置为null。 */

/* 当然你也可以创建[[Prototype]]为null的对象，这意味这toString()和valueOf，hasOwnPrototype()等内置方法都不在该对象上。实际上，该对象十是一个没有任何预定义属性的白板，这使得它成为一个完美的哈希容器。 */
let nakeObject = Object.create(null);
console.log("toString" in nakeObject);//false
console.log("valueOf" in nakeObject);//false


