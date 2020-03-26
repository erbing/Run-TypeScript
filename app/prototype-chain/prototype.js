var SuperClass = function(name) {
	var id = 1;
	this.name = name;
	this.todo = [1, 2, 3, 4];
	this.work = function() {
		console.log(this.name + 'in SuperClass');
	};
};
SuperClass.prototype.getSuperName = function() {
	return this.name;
};

var SubClass = function() {
	this.getSubName = function() {
		console.log('this is subname');
	};
};

SubClass.prototype = new SuperClass('superClass');
var sub = new SubClass();
sub.todo.push('subClass name');
var sub2 = new SubClass();
console.log(sub2.todo); // [ 1, 2, 3, 4, 'subClass name' ]

console.log(sub.name); //superClass
console.log(sub2.name); //superClass
