/* 属性有两种，数据属性和访问器属性 */
let person = {
    _name: 'luanhanxiao',
    get name() {
        console.log('reading name');
        return this._name;
    },
    set name(value) {
        console.log('setting name to %s', value);
        this._name = value;
    }
}