function mixin(receiver, supplier) {
    for (var property in supplier) {
        if (supplier.hasOwnProperty(property)) {
            receiver[property] = supplier[property]
        }
    }
    return receiver;
}
/*函数mixin接受俩个参数，这个模式广泛的被应用到讲一个JavaScript对象内已经存在的行为添加到另一个对象中 */
function EventTarget() {
    
}
EventTarget.prototype = {
    constructor: EventTarget,
    addListener: function (type, listener) {
        //create an array if it doesn't exist
        if (!this.hasOwnProperty("_listeners")) {
            this._listeners = [];
        }
    }
}