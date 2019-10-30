/* JavaScript对象的所有属性都是公有的，且没有显式的方法指定某个属性不能被外界某个对象访问，然而有时你可能不希望数据公有，一种避免它的方式是使用命名规则,在不希望公有的属性名字前加上下划线（如this,_name)当然也有很多其他的方式，也更避免反弹 */
/* 模块模式
    模块模式是一种创建拥有私有数据的单件对象的模式。基本做法是使用立调函数表达式来返回一个对象。
*/
var yourObject = (function () {
    //private data variables
    return {
        //public methods and properties
    }
}());

var person = (function () {
    var age = 25;
    return {
        name: "Nicholas",
        getAge: function () {
            return age;
        },
        growOlder: function () {
            age++;
        }
    };
}());
console.log(person.name);//"Nicholas"
console.log(person.getAge()); //25
person.age = 100;
console.log(person.getAge());//25
person.growOlder();
console.log(person.getAge());//26

/* 你也可以改写上面的模式 */
var person = (function () {
    var age = 25;
    function getAge() {
        return age;
    }
    function growOlder() {
        age++;
    }
    return {
        name: "Nicholas",
        getAge: getAge,
        growOlder:growOlder
    }
}())
/*6---1----2构造函数的私有成员 */
function Person(name) {
    //define a variable oonly accessible inside of the Person constructor

    var age = 25;
    this.name = name;
    this.getAge = function () {
        return age;
    };
    this.growOlder = function () {
        age++;
    };
}
var person = new Person("Nicholas");
console.log(person.name);//Nicholas
console.log(person.getAge());//25

person.age = 100;
console.log(person.getAge());//25
person.growOlder();
console.log(person.getAge());//26

/* 如果你需要所有实例可共享的私有数据，可以结合模块模式和构造函数 */
var Person = (function () {
    //everyone shares the same age
    var age = 25;
    function InnerPerson(name) {
        this.name = name;
    };
    InnerPerson.prototype.getAge = function () {
        return age;
    };
    InnerPerson.prototype.getOlder = function () {
        age++;
    }
    return InnerPerson;
}());
var person1 = new Person("Nicholas");
var person2 = new Person("Greg");
console.log(person1.name);
console.log(person1.getAge());





