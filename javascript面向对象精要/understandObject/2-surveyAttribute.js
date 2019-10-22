/* js新手常见错误：判断一个属性是否存在 */
//unreliable
if (personalbar.age) {
    //do something with age
}
//reliable
let person1 = {
    name: 'luan',
    sayName() {
        console.log(this.name);
    }
}
console.log('sayName' in person1);
/* 如果你希望判断一个属性只有自有属性而不是原型属性存在时 */
let person2 = {
    name: 'xiaobai',
    sayName() {
        console.log(this.name);
    }
}
console.log(person2.hasOwnProperty('toString'));