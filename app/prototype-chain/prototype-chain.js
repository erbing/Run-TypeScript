var F = function() {
	this.name = 'F-构造函数';
};

var f1 = new F();
var f2 = new F();

F.prototype.say = function() {
	console.log('say hello');
};
// console.log(F.constructor); // ƒ Function() { [native code] } 是浏览器自带的原生方法 Function
// console.log(f1.constructor); // ƒ () {this.name = 'F-构造函数';} 是构造函数 F 本身
// console.log(f2.constructor); // ƒ () {this.name = 'F-构造函数';} 是构造函数 F 本身

// 这个时候大家其实对于 constructor 属性有一定的了解了，对象、函数都有 constructor 属性
f1.say = function() {
	console.log('say hello');
};
f2.say = function() {
	console.log('say hello');
};
console.log(f1.say === f2.say); // true

console.log(f1.constructor == f2.constructor);

f1.constructor = function() {
	this.name = '匿名构造函数';
};

console.log(f1.constructor == f2.constructor);
