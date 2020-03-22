'use strict';
function Person(name) {
	this.name = name;
	this.run = function() {
		console.log(this.name + '跑步');
	};
}

Person.prototype.age = 12;
Person.prototype.work = function() {
	console.log(this.name + '写代码');
};

Person.weight = '70kg';
Person.eat = function() {
	console.log('在吃饭');
};

var p = new Person('zhangsan');
// p.run(); // zhangsan跑步
// p.work(); // zhangsan写代码

// p.eat(); // ERROR
Person.eat(); // 在吃饭
console.log(Person);
// console.log(Person.prototype);
