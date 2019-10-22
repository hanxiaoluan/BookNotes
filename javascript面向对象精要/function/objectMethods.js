var person = {
    name: "luanhanxiao",
    sayName: function () {
        console.log(person.name + 'is a big good man.');
    }
}
person.sayName();
/* 但是这样就是个紧耦合，为了解决这个问题，js所有函数作用域内都有一个this对象代表调用该函数的对象。当一个函数作为对象的方法被调用时，默认this的值等于被调用的对象 */
var person2 = {
    name: 'luanhanxiao',
    sayName: function () {
        console.log(this.name + 'is a good man.');
    }
}
/* 改变this的值apply(),call() and bind() */
/* call */
function sayNameForAll(label) {
    console.log(label + ":" + this.name);
}
var person1 = {
    name: "Nicholas"
};
var person2 = {
    name: "Greg"
}
var name = "Michael";
sayNameForAll.call(this, "global");
sayNameForAll.call(person1, "person1");
sayNameForAll.call(person2, "person2");
/* apply */
function sayNameForAll2(label) {
    console.log(label + ":" + this.name);
}
sayNameForAll2.apply(this, ["global"]);
sayNameForAll2.apply(person1, ["person1"]);
sayNameForAll2.apply(person2, ['person2']);
/* bind()方法 */
function sayNameForAll(lable) {
    console.log(label + ":" + this.name);
}
var person1 = {
    name:"nicholas"
}
var person2 = {
    name:"greg"
}
var sayNameForPerson1 = sayNameForAll.bind(person1);
sayNameForPerson1("person1");//outputs 'person1:nicholas'
var sayNameForPerson2 = sayNameForAll.bind(person2, "person2");
sayNameForPerson2();//outputs 'person2:greg'
person2.sayName = sayNameForPerson1;
person2.sayName('person2');
