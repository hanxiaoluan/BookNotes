/* 设置一个属性的值为null并不能从对象中彻底移除这个属性，只是调用[[set]]将null值替换了该属性原来的值而已,if you want to delete this attribute thoroughly,please use delete to remove it.  */
/* delete操作符调用的是对象属性名为[[delete]]的内部方法 */
let person = {
    name:'luanhanxiao'
}
console.log('name' in person);
delete person.name;
console.log('name' in person);
console.log(person.name);