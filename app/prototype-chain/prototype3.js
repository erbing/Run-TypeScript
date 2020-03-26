// 声明父类
function Animal(color) {
	this.name = 'animal';
	this.type = ['pig', 'cat'];
	this.color = color;
}

// 添加原型方法
Animal.prototype.eat = function(food) {
	console.log(food);
};

// 声明子类
function Dog() {
	Animal.apply(this, arguments);
	// 这一步的操作就是改变 Animal 方法的上下文，然后让 Dog 也具备了
	// 父类构造函数内的属性和方法
}
Dog.prototype = new Animal('Animal color');

var dog1 = new Dog();
console.log((dog1.color = 'dog1.name'));
var dog2 = new Dog();

console.log(dog2); // undefined
