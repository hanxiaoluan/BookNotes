/* 所有你添加的属性都是可枚举的，也就是你可以用for-in循环来遍历他们。可枚举属性的内部特性[[Enumerable]]  for-in 循环会列举一个对象所有的可枚举属性并将该属性赋予给一个变量*/
var property;
let object = new Object();
for (property in object) {
    console.log('Name:' + property);
    console.log('Value:' + object[property]);
}
let properties = Object.keys(object);
let i, len;
for (i = 0, len = properties.length; i < len; i++){
    console.log('name:' + properties[i]);
    console.log('value:' + object[properties[i]]);
}
/* Object.keys()只返回自有属性，但是for in 返回所有属性*/
/* 并不是所有属性都是可枚举的，实际上，对象的大部分原生方法的[[Enumerable]]特征都是false,   你可以用propertyIsEnumerable()方法来检查一个属性是否可枚举 */
let person1 = {
    name:'luanhanxiao'
}
console.log('name' in person1);//true
console.log(person1.propertyIsEnumerable('name'));//true
let properties = Object.keys(person1);
console.log('length' in properties);//true
console.log(properties.propertyIsEnumerable('length'));//false

