class Animal {
	constructor(name) {
		this.name = name;
	}
	names = '123';
	jump = function(params) {};
	eat(food) {
		console.log(`${this.name}吃${food}`);
	}
}

class Dog extends Animal {
	constructor(name) {
		super(name);
		this.name = name;
	}
	run() {
		console.log('小狗泡泡跑');
	}
}

let dog1 = new Dog('小狗');
let dog2 = new Dog('小花');
console.log(dog1); // 小狗
console.log(dog2.name); // 小花
