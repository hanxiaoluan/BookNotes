/* 通用特征：有两个属性特征是数据和访问器属性都具有的，一个是[[Enumerable]] and [[Configurable]],决定了该属性是否可遍历和配置。，改变属性特性用Object.defineProperty()方法 */
var person = {
    name: 'Nicholas'
};
Object.defineProperty(person, 'name', {
    enumerable: false
});
console.log('name' in person); //true
console.log(person.propertyIsEnumerable('name')); //false
let properties = Object.keys(person);
console.log(properties.length); //0
Object.defineProperty(person, 'name', {
    configurable: false
});
//try to delete the Property
delete person.name;
console.log('name' in person); //true
console.log(person.name); //'Nicholas'
Object.defineProperty(person, 'name', {
    configurable: true
});
/* 数据特性包含访问器特性两个不具备的特性，第一个是[[value]],包含属性的值 */
/* let person1 = {
    name: 'luan'
};  这段代码等价于*/
let person1 = {};
Object.defineProperty(person1, 'name', {
    value: 'luan',
    enumerable: true,
    configurable: true,
    writable: true
});
/* 当你用Obeject.defineProperty()来定义新的属性时一定记得为所有的特性指定Boolean值为true，否则默认为false */


/* 访问器属性特征，访问器属性也有两个额外特征。访问器属性不需要存储值，也就没有[[Value]]and[[Writable]] ,取而代之的是[[Get]] and [[Set]],内含getter and setter函数*/
let person2 = {
    _name: 'luanhanxiao',
    get name() {
        return this._name;
    },
    set name() {
        this._name = value;
    }
};
/* 上述的代码可以被改写为如下 */
let person2 = {
    _name: 'luanhanxiao'
};
Object.defineProperty(person2, '_name', {
    get: function () {
        return this._name;
    },
    set: function (value) {
        this._name = value;
    },
    enumerable: true,
    configurable: true
})
/* 定义多重属性 */
let person3 = {

};
Object.defineProperties(person3, {
    _name: {
        value: 'Nicholas',
        enumerable: true,
        configurable: true,
        writable: true,
    },
    name: {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    }
})
/* 获取属性特征Object.getOwnPropertyDescriptor()方法 */
let person = {
    name: 'Nicholas'
};
let descriptor = Object.getOwnPropertyDescriptor(person, 'name');
console.log(descriptor);
