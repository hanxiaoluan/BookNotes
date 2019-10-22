function sayMessage(message) {
    console.log(message);
}
function sayMessage() {
    console.log('default message');
}
sayMessage('hello');//output 'default message'
/* js中，当你重新定义相同名字的函数时，只有最后定义的有效，之前的函数声明被完全删除 ，前面的代码等价于*/
/* var message = new Function('message', 'console.log(message)');
sayMessage = new Function("console.log(\"Default message\");"); */
sayMessage("Hello");  //outputs "Default message"
function sayMessage(message) {
    
    if(arguments.length===0){
        message = "default message";
    }
    console.log(message);
}
sayMessage();