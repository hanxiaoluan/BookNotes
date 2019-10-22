/* 对象和属性一样具有指导其行为的内部特征。其中，[[Extensible]]十一个布尔值，他指明对象本身是否可以修改，设置[[Extensible]]为false，就可以禁止新属性的添加 */
let person = {
    name: 'Nicholas'
};
console.log(Object.isExtensible(person));//true
Object.preventExtensions(person);
console.log(Object.isExtensible(person));//false
person.sayName = function () {
    console.log(this.name);
};
console.log('sayName' in person);//false
/* 对象封印，对象封印是创建不可扩展对象的第二种方法，一个被封印的对象是不可扩展的，且所有属性是不可配置的 Object.seal()*/
let person = {
    name:"luan"
}
console.log(Object.isExtensible(person));//true
console.log(Object.isSealed(person));//false

Object.seal(person);
console.log(Object.isExtensible(person));//false
console.log(Object.isSealed(person));//true
/* 创建不可扩展对象的最后一种方法是冻结它，使其变为只读的，既不能添加和删除，也不能改变属性类型，也不能写入数据属性 */

let person = {
    name: "Nicholas"
};
console.log(Object.isExtensible(person)); //true
console.log(Object.isSealed(person)); //false
console.log(Object.isFrozen(person));//false
Object.freeze(person);
console.log(Object.isExtensible(person)); //false
console.log(Object.isSealed(person)); //true
console.log(Object.jsFrozen(person));//true

