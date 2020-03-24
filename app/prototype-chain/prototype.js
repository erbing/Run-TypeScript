var SuperClass = function(name) {
	var id = 1;
	this.name = name;
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

console.log('--sub--', sub);
